
package middleware

import (
	"Technology/server/models"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gomodule/redigo/redis"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/gmail/v1"
	"google.golang.org/api/sheets/v4"
)

// DB connection string
// const connectionString = "mongodb://localhost:27017"
const connectionString = "mongodb+srv://arjun:mishra@cluster0-9jlvf.mongodb.net/admin?retryWrites=true&w=majority"

// Database Name
const dbName = "dss"

// Collection name
const collName = "users"
const emailColName = "emails"
const performanceCollName = "performances"
const entryCollName = "entries"
const customerCollName = "customer"

// collection object/instance
var collection *mongo.Collection
var entryCollection *mongo.Collection
var emailCollection *mongo.Collection
var performanceCollection *mongo.Collection
var customerCollection *mongo.Collection
var cache redis.Conn
var srv *sheets.Service
var email *gmail.Service

// smtpServer data to smtp server
type smtpServer struct {
	host string
	port string
}

// holds a data entry for a given 2x4 term
type size struct {
	lengths []length
}

// holds a data entry for a given length
type length struct {
	length string
	tally  int
	USD    int
	CDN    int
}

var globRow int
var globCol int

// Address URI to smtp server
func (s *smtpServer) Address() string {
	return s.host + ":" + s.port
}
func initCache() {
	// Initialize the redis connection to a redis instance running on your local machine
	conn, err := redis.DialURL("redis://localhost")
	if err != nil {
		panic(err)
	}
	// Assign the connection to the package level `cache` variable
	cache = conn
}

// Retrieve a token, saves the token, then returns the generated client.
func getClient(config *oauth2.Config) *http.Client {
	// The file token.json stores the user's access and refresh tokens, and is
	// created automatically when the authorization flow completes for the first
	// time.
	tokFile := "token.json"
	tok, err := tokenFromFile(tokFile)
	if err != nil {
		tok = getTokenFromWeb(config)
		saveToken(tokFile, tok)
	}
	return config.Client(context.Background(), tok)
}

// Request a token from the web, then returns the retrieved token.
func getTokenFromWeb(config *oauth2.Config) *oauth2.Token {
	authURL := config.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	fmt.Printf("Go to the following link in your browser then type the "+
		"authorization code: \n%v\n", authURL)

	var authCode string
	if _, err := fmt.Scan(&authCode); err != nil {
		log.Fatalf("Unable to read authorization code: %v", err)
	}

	tok, err := config.Exchange(context.TODO(), authCode)
	if err != nil {
		log.Fatalf("Unable to retrieve token from web: %v", err)
	}
	return tok
}

// Retrieves a token from a local file.
func tokenFromFile(file string) (*oauth2.Token, error) {
	f, err := os.Open(file)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	tok := &oauth2.Token{}
	err = json.NewDecoder(f).Decode(tok)
	return tok, err
}

// Saves a token to a file path.
func saveToken(path string, token *oauth2.Token) {
	//fmt.Printf("Saving credential file to: %s\n", path)
	f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0600)
	if err != nil {
		log.Fatalf("Unable to cache oauth token: %v", err)
	}
	defer f.Close()
	json.NewEncoder(f).Encode(token)
}

func initGoogleSheets() {
	// this function deals with google sheets intialization
	b, err := ioutil.ReadFile("credentials.json")
	if err != nil {
		log.Fatalf("Unable to read client secret file: %v", err)
	}
	// If modifying these scopes, delete your previously saved token.json.
	config, err := google.ConfigFromJSON(b, gmail.GmailComposeScope)
	if err != nil {
		log.Fatalf("Unable to parse client secret file to config: %v", err)
	}
	client := getClient(config)
	email, err = gmail.New(client)
	if err != nil {
		log.Fatalf("Unable to retrieve Gmail client: %v", err)
	}
}

// create connection with mongo db
func init() {
	initGoogleSheets()
	initCache()
	// Set client options
	clientOptions := options.Client().ApplyURI(connectionString)

	// connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	//fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collName)
	emailCollection = client.Database(dbName).Collection(emailColName)
	performanceCollection = client.Database(dbName).Collection(performanceCollName)
	entryCollection = client.Database(dbName).Collection(entryCollName)
	customerCollection = client.Database(dbName).Collection(customerCollName)
	//fmt.Println("Collection instance created!")
}
func AuthMiddle(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// We can obtain the session token from the requests cookies, which come with every request
		c, err := r.Cookie("session_token")
		if err != nil {
			if err == http.ErrNoCookie {
				// If the cookie is not set, return an unauthorized status
				log.Println(err)
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
			// For any other type of error, return a bad request status
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		sessionToken := c.Value
		// We then get the name of the user from our cache, where we set the session token
		response, err := cache.Do("GET", sessionToken)
		if err != nil {
			// If there is an error fetching from cache, return an internal server error status
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		if response == nil {
			// If the session token is not present in cache, return an unauthorized error
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		ctx := context.WithValue(r.Context(), "user_id", response)
		next.ServeHTTP(w, r.WithContext(ctx))
		//fmt.Println(string(response.([]uint8)), "CACHE ACCESS")
		log.Println("Finishing Auth")
	})

}
func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://www.dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var user models.Password
	fmt.Println(r.Body)
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("FETCHED SUCCESFULLY", user)
	if (user.Password != "dss#16"){
		fmt.Println("ANGRY",user.Password)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	//if err = bcrypt.CompareHashAndPassword([]byte("dss4life#16"), password); err != nil {
		// If the two passwords don't match, return a 401 status
		//fmt.Println("Error1")
	//	fmt.Println(err)
//		w.WriteHeader(http.StatusUnauthorized)
	//	return
//	}
	// FROM tutorial at https://www.sohamkamani.com/blog/2018/03/25/golang-session-authentication/
	// Create a new random session token
	sessionToken := uuid.Must(uuid.NewRandom()).String()
	// Set the token in the cache, along with the user whom it represents
	// The token has an expiry time of 120 seconds
	//fetched[0] has the id of the user we just validated
	//_, err = cache.Do("SETEX", sessionToken, "3600", fetched[0].Value.(primitive.ObjectID).Hex())
	//if err != nil {
		// If there is an error in setting the cache, return an internal server error
		//fmt.Println("Error2")
	//	w.WriteHeader(http.StatusInternalServerError)
	//	return
	//}
	// Finally, we set the client cookie for "session_token" as the session token we just generated
	// we also set an expiry time of 120 seconds, the same as the cache
	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    sessionToken,
		HttpOnly: false,
		Path:     "/",
		Expires:  time.Now().Add(12000 * time.Second),
	})
	//TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	//fmt.Println("Login User to Lumber", sessionToken, user.ID)
	json.NewEncoder(w).Encode(user.Password)
	return
}

// Create create task route
func AddUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	//fmt.Println(3)
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	//fmt.Println(user.Bio, 66666)
	if err != nil {
		//fmt.Println(err)
	}
	_, err = findOneUser(user)
	if err == nil {
		w.WriteHeader(http.StatusUnauthorized)
		//fmt.Println(err)
		return
	}
	//fmt.Println(user, r.Body)
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 8)
	user.Password = string(hashedPassword)
	insertOneUser(user)
	var message gmail.Message
	messageStr := []byte(
		"From: welcome@dssberkeley.com\r\n" + "To: " + user.Email + "\r\n" + "Subject: Welcome to Tour\r\n\r\n" + "We're excited to connect you with your favorite artists! You can go to dssberkeley.com to login!")
	message.Raw = base64.URLEncoding.EncodeToString(messageStr)
	_, err = email.Users.Messages.Send("me", &message).Do()
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		//fmt.Println(err)
		return
	}
	//TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	//fmt.Println("Creating User")
	json.NewEncoder(w).Encode(user)
}
func GetAddress(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")

	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	user_id := string(r.Context().Value("user_id").([]uint8))
	result, err := findUserByID(user_id)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		//fmt.Println(err)
		return
	}
	if result[len(result)-1].Key != "address" {
		w.WriteHeader(http.StatusUnauthorized)
		//fmt.Println("schema error")
		return
	}
	//fmt.Println(result[len(result)-1].Value, 9999999999, result[len(result)-1].Key)
	// we also want to update our users addresses if we need to
	json.NewEncoder(w).Encode(result[len(result)-1].Value)
}
func Email ( w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var contact  models.Contact
	err := json.NewDecoder(r.Body).Decode(&contact)
	//fmt.Println(performance.ZoomUrl)
	if err != nil {
		//fmt.Println(err)
	}
	fmt.Println("recieved a contact")
	contact_id := insertOneContact(contact)
	json.NewEncoder(w).Encode(contact_id.(primitive.ObjectID).Hex())
}
func AddPerformance(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var performance models.Performance
	err := json.NewDecoder(r.Body).Decode(&performance)
	//fmt.Println(performance.ZoomUrl)
	if err != nil {
		//fmt.Println(err)
	}
	if performance.Goal == "" {
		performance.Goal = "0"
		performance.Merch = "https://www.dssberkeley.com"
	}
	user_id := string(r.Context().Value("user_id").([]uint8))
	user_data, _ := fetchProfileUser(user_id)
	//fmt.Println(user_data)
	performance.FullName = user_data.Map()["fullname"].(string)
	performance.Bio = user_data.Map()["bio"].(string)
	performance_id := insertOnePerformance(performance)
	updateUserPerformance(performance_id, user_id)
	json.NewEncoder(w).Encode(performance_id.(primitive.ObjectID).Hex())
}
func AddCustomer(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	//fmt.Println(3)
	var customer models.Customer
	err := json.NewDecoder(r.Body).Decode(&customer)
	if err != nil {
		//fmt.Println(err)
	}
	insertOneCustomer(customer)
	//fmt.Println("Creating Customer")
	json.NewEncoder(w).Encode(customer)
}
func Watch(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var performance_id models.ID
	err := json.NewDecoder(r.Body).Decode(&performance_id)
	if err != nil {
		//fmt.Println(err)
	}
	metadata := getWatch(performance_id.Performance_id).Map()
	//fmt.Println("Got stream metadata", metadata)
	json.NewEncoder(w).Encode(metadata)
}
func Count(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var performance_id models.ID
	err := json.NewDecoder(r.Body).Decode(&performance_id)
	if err != nil {
		//fmt.Println(err)
	}
	user_id := string(r.Context().Value("user_id").([]uint8))
	updateCount(performance_id.Performance_id, user_id)
	//fmt.Println("Updated stream metadata")
	w.WriteHeader(http.StatusOK)

}
func UpdateConfig(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var performance_id models.Performance
	err := json.NewDecoder(r.Body).Decode(&performance_id)
	if err != nil {
		//fmt.Println(err)
	}
	updateConfig(performance_id)
	//fmt.Println("Updated stream metadata")
	w.WriteHeader(http.StatusOK)
}
func GetPerformances(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	user_id := string(r.Context().Value("user_id").([]uint8))
	customers := getPerformances(user_id)
	//fmt.Println("Getting Performances for our creator", customers)
	json.NewEncoder(w).Encode(customers)
}
func GetArtists(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	artists := getArtists()
	//fmt.Println("Getting Performances for our creator", artists)
	json.NewEncoder(w).Encode(artists)
}
func PullPerformances(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	performances := pullPerformances()
	//fmt.Println("Getting Performances for our user", performances)
	json.NewEncoder(w).Encode(performances)
}
func UpdateProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")

	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	user_id := string(r.Context().Value("user_id").([]uint8))
	// We first need to fetch the current user_record to validate the password

	// Then we can update the current_user record
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	result, err := updateProfileUser(user, user_id)
	if err != nil {
		http.Redirect(w, r, "http://35.233.168.169:3000", http.StatusSeeOther)
		//fmt.Println("Error0")
		w.WriteHeader(http.StatusForbidden)
		w.Write([]byte("500 - Something bad happened!"))
		return
	}
	json.NewEncoder(w).Encode(result)

}
func GetProfile(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://dssberkeley.com")

	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	user_id := string(r.Context().Value("user_id").([]uint8))
	result, err := fetchProfileUser(user_id)
	if err != nil {
		http.Redirect(w, r, "http://35.233.168.169:3000", http.StatusSeeOther)
		//fmt.Println("Error0")
		w.WriteHeader(http.StatusForbidden)
		w.Write([]byte("500 - Something bad happened!"))
		return
	}
	json.NewEncoder(w).Encode(result.Map())

}
func fetchProfileUser(user_id string) (primitive.D, error) {
	result := bson.D{}
	id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		fmt.Println("ObjectIDFromHex ERROR", err)
	}
	query := &bson.M{"_id": id}
	err = collection.FindOne(context.Background(), query).Decode(&result)
	if err != nil {
		//fmt.Println(err)
		return result, err
		//log.Fatal(err)
	}
	//fmt.Println("Found a Single User Profile Woot Woot", result)
	return result, nil
}
func updateUserAddress(user_id string, address models.Address) error {
	id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		//fmt.Println(err)
		return err
	}
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"address": address}}
	_, err = collection.UpdateOne(
		context.Background(),
		filter,
		update,
	)
	if err != nil {
		//fmt.Println(err)
		return err
		//log.Fatal(err)
	}
	//fmt.Println("Updated a Single User Address  Woot Woot", result)
	return nil
}
func updateProfileUser(userData models.User, user_id string) (primitive.D, error) {
	result := bson.D{}
	id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"bio": userData.Bio, "name": userData.Name, "fullname": userData.FullName, "email": userData.Email, "lumber": userData.Lumber}}
	_, err = collection.UpdateOne(
		context.Background(),
		filter,
		update,
	)

	if err != nil {
		//fmt.Println(err)
		return result, err
		//log.Fatal(err)
	}
	//fmt.Println("Updated a Single User Profile Woot Woot", result)
	return result, nil
}
func updateUserPerformance(performance_id interface{}, user_id string) (primitive.D, error) {
	result := bson.D{}
	id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	filter := bson.M{"_id": id}
	update := bson.M{"$push": bson.M{"performances": performance_id}}
	_, err = collection.UpdateOne(
		context.Background(),
		filter,
		update,
	)
	if err != nil {
		//fmt.Println(err)
		return result, err
		//log.Fatal(err)
	}
	//fmt.Println("Updated a Single User Profile Woot Woot", result)
	return result, nil
}
func getArtists() []primitive.M {
	filter := bson.M{"buyer": true}
	cur, err := collection.Find(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}
	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		//fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)
	}
	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	//fmt.Println("private method got called to fetch artists")
	cur.Close(context.Background())
	return results
}

// this function returns our entries so we can iterate through them
func getEntries() []primitive.M {
	cur, err := entryCollection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		//fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)
	}
	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	return results
}

// get all cars from the DB and return them
func getMyOrders() []primitive.M {
	cur, err := performanceCollection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		//fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	//fmt.Println("private method got called to fetch drivers")
	cur.Close(context.Background())
	return results
}

// get all cars from the DB and return them
func getPerformances(user_id string) []primitive.M {
	id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	result := bson.D{}
	query := &bson.M{"_id": id}
	err = collection.FindOne(context.Background(), query).Decode(&result)
	if err != nil {
		//fmt.Println("Werd ERROR", err)
		return nil
	}
	// if they dont have any projects yet
	if len(result) < 10 {
		return nil
	}
	//fmt.Println(result[9].Value, 69696969)
	query_array := result[9].Value.(primitive.A)
	//fmt.Println(result[9].Value)
	oids := make([]primitive.ObjectID, len(query_array))
	for i := range query_array {
		temp := query_array[i].(primitive.ObjectID)
		if err != nil {
			//fmt.Println("ObjectIDFromHex ERROR", err)
		}
		oids[i] = temp
	}
	performanceQuery := bson.M{"_id": bson.M{"$in": oids}}
	// AT THIS POINT we have retrieved the correct filtering client ids and now we just need to match them
	cur, err := performanceCollection.Find(context.Background(), performanceQuery)
	if err != nil {
		log.Fatal(err)
		return nil
	}
	var performanceResults []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		//fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		performanceResults = append(performanceResults, result)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	//fmt.Println("Found Clients", result)
	cur.Close(context.Background())
	return performanceResults
}

// get all cars from the DB and return them
func getWatch(performance_id string) primitive.D {
	id, err := primitive.ObjectIDFromHex(performance_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	result := bson.D{}
	query := &bson.M{"_id": id}
	err = performanceCollection.FindOne(context.Background(), query).Decode(&result)
	if err != nil {
		//fmt.Println("Werd ERROR", err)
		return nil
	}
	return result
}

// get all cars from the DB and return them
func updateCount(performance_id string, user_id string) (primitive.D, error) {
	result := bson.D{}
	id, err := primitive.ObjectIDFromHex(performance_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	user_adjusted_id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	filter := bson.M{"_id": id}
	update := bson.M{"$push": bson.M{"viewers": user_adjusted_id}, "$inc": bson.M{"count": 1}}
	_, err = performanceCollection.UpdateOne(
		context.Background(),
		filter,
		update,
	)
	//fmt.Println("Updated a View on the stream", result)
	return result, nil
}

func pullPerformances() []primitive.M {
	performanceQuery := bson.M{}
	cur, err := performanceCollection.Find(context.Background(), performanceQuery)
	if err != nil {
		log.Fatal(err)
		return nil
	}
	var performanceResults []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		//fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		performanceResults = append(performanceResults, result)
	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}
	cur.Close(context.Background())
	return performanceResults
}
func findUserByID(user_id string) (primitive.D, error) {
	id, err := primitive.ObjectIDFromHex(user_id)
	if err != nil {
		//fmt.Println(err)
		return nil, err
	}
	result := bson.D{}
	query := &bson.M{"_id": id}
	err = collection.FindOne(context.Background(), query).Decode(&result)
	if err != nil {
		return result, err
		//log.Fatal(err)
	}
	//TODO we might need check to ensure that a username is unique when you register
	//fmt.Println("Found a Single User", result)
	return result, nil
}

func findOneUser(user models.User) (primitive.D, error) {
	result := bson.D{}
	query := &bson.M{"email": user.Email}
	err := collection.FindOne(context.Background(), query).Decode(&result)
	if err != nil {
		return result, err
		//log.Fatal(err)
	}
	//TODO we might need check to ensure that a username is unique when you register
	//fmt.Println("Found a Single User", result)
	return result, nil
}

// Insert one task in the DB
func insertOneUser(user models.User) {
	//fmt.Println(user)
	_, err := collection.InsertOne(context.Background(), user)

	if err != nil {
		log.Fatal(err)
	}

	//fmt.Println("Inserted a Single User", insertResult.InsertedID)
}

// Insert one customer in the DB
func insertOneCustomer(customer models.Customer) {
	_, err := customerCollection.InsertOne(context.Background(), customer)
	if err != nil {
		log.Fatal(err)
	}
	//fmt.Println("Inserted a Single User", insertResult.InsertedID)
}

// Insert one customer in the DB
func insertOneContact(performance models.Contact) interface{} {
	insertResult, err := emailCollection.InsertOne(context.Background(), performance)
	if err != nil {
		log.Fatal(err)
	}
	return insertResult.InsertedID
}
// Insert one customer in the DB
func insertOnePerformance(performance models.Performance) interface{} {
	insertResult, err := performanceCollection.InsertOne(context.Background(), performance)
	if err != nil {
		log.Fatal(err)
	}
	//fmt.Println("Inserted a Single User", insertResult.InsertedID)
	return insertResult.InsertedID
}
func updateConfig(performance models.Performance) error {
	id, err := primitive.ObjectIDFromHex(performance.Performance_id)
	if err != nil {
		//fmt.Println("ObjectIDFromHex ERROR", err)
	}
	filter := bson.M{"_id": id}
	update := bson.M{"$set": performance}
	_, err = performanceCollection.UpdateOne(
		context.Background(),
		filter,
		update,
	)
	//fmt.Println("Updated a View on the stream", result)
	return nil
}
