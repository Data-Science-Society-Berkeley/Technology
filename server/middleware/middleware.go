package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"digitalmarketing/server/models"
    "github.com/gorilla/mux"
    "time"
    "io"
    "bytes"
    "reflect"
    "github.com/google/uuid"
    "golang.org/x/crypto/bcrypt"
    "go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
    "github.com/gomodule/redigo/redis"
)

// DB connection string
// const connectionString = "mongodb://localhost:27017"
const connectionString = "mongodb+srv://arjun:mishra@cluster0-9jlvf.mongodb.net/admin?retryWrites=true&w=majority"

// Database Name
const dbName = "digital"

// Collection name
const collName = "users"
const emailColName = "emails"
const clientCollName = "clients"
const projName = "project"

// collection object/instance
var collection *mongo.Collection
var emailCollection *mongo.Collection
var clientCollection *mongo.Collection
var projectCollection *mongo.Collection
var cache redis.Conn
func initCache() {
    // Initialize the redis connection to a redis instance running on your local machine
    conn, err := redis.DialURL("redis://localhost")
    if err != nil {
        panic(err)
    }
    // Assign the connection to the package level `cache` variable
    cache = conn
}
// create connection with mongo db
func init() {
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

	fmt.Println("Connected to MongoDB!")

	collection = client.Database(dbName).Collection(collName)
	emailCollection = client.Database(dbName).Collection(emailColName)
    clientCollection = client.Database(dbName).Collection(clientCollName)
    projectCollection = client.Database(dbName).Collection(projName)

	fmt.Println("Collection instance created!")
}
func AuthMiddle(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Executing Auth")
    log.Println("Executing Auth")
   // We can obtain the session token from the requests cookies, which come with every request
       c, err := r.Cookie("session_token")
       if err != nil {
           if err == http.ErrNoCookie {
               // If the cookie is not set, return an unauthorized status
               log.Println("Erroro")
               w.WriteHeader(http.StatusUnauthorized)
               return
           }
           // For any other type of error, return a bad request status
           w.WriteHeader(http.StatusBadRequest)
           next.ServeHTTP(w, r)
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
        fmt.Println(string(response.([]uint8)),"CACHE ACCESS")
        log.Println("Finishing Auth")
    })

}
func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Credentials", "true")
    //w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080/api/login")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	//w.Header().Set("Access-Control-Allow-Credentials", "true")
	var user models.User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil{
        fmt.Println(err)
    }
     fmt.Println(user, r.Body)
     fetched,err := findOneUser(user)
     if (err != nil){
	    http.Redirect(w, r,"http://localhost:3000" , http.StatusSeeOther)
	    fmt.Println("Error0")
        w.WriteHeader(http.StatusForbidden)
        w.Write([]byte("500 - Something bad happened!"))
        return
    }
    //var temp models.User
    //TODO extract the password from fetched
    //fetched[3].Value
    if (len(fetched) < 3){
	    fmt.Println("Error1")
        w.WriteHeader(http.StatusUnauthorized)
        return
    }
    password := []byte(fmt.Sprintf("%v", fetched[3].Value.(interface{})))
    if err = bcrypt.CompareHashAndPassword(password, []byte(user.Password)); err != nil {
        // If the two passwords don't match, return a 401 status
	    fmt.Println("Error1")
        w.WriteHeader(http.StatusUnauthorized)
        return
    }
    // FROM tutorial at https://www.sohamkamani.com/blog/2018/03/25/golang-session-authentication/
    // Create a new random session token
    sessionToken := uuid.Must(uuid.NewRandom()).String()
    // Set the token in the cache, along with the user whom it represents
    // The token has an expiry time of 120 seconds
    //fetched[0] has the id of the user we just validated
    _, err = cache.Do("SETEX", sessionToken, "1200", fetched[0].Value.(primitive.ObjectID).Hex())
    if err != nil {
        // If there is an error in setting the cache, return an internal server error
	    fmt.Println("Error2")
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    // Finally, we set the client cookie for "session_token" as the session token we just generated
    // we also set an expiry time of 120 seconds, the same as the cache
    http.SetCookie(w, &http.Cookie{
        Name:    "session_token",
        Value:   sessionToken,
        HttpOnly: false,
        Path: "/",
        Expires: time.Now().Add(1200 * time.Second),
    })
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	fmt.Println("Login User to Lumber",sessionToken,user.ID)
    w.WriteHeader(http.StatusOK)
    //http.Redirect(w, r, "/", http.StatusFound)
    //json.NewEncoder(w).Encode(fetched)
}
// Create create task route
func AddEmail(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    var user models.Email
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil{
        fmt.Println(err)
    }
     fmt.Println(6,user, r.Body)
	insertOneEmail(user)
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	fmt.Println("User joined now")
	json.NewEncoder(w).Encode(user)
}

// Create create task route
func AddUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	fmt.Println(3)
    var user models.User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil{
    }
    _,err = findOneUser(user)
    if (err == nil){
        w.WriteHeader(http.StatusUnauthorized)
        fmt.Println(err)
        return
    }
    fmt.Println(user, r.Body)
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 8)
	user.Password = string(hashedPassword)
    insertOneUser(user)
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	fmt.Println("Creating User",66666666666666666,user.Password)
	json.NewEncoder(w).Encode(user)
}
func AddProjectFile(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "POST,OPTIONS,PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    read_form, err := r.MultipartReader()
    if err != nil {
        fmt.Println(err)
        w.WriteHeader(http.StatusUnauthorized)
        return
    }
    buf := new(bytes.Buffer)
    
    for {
           part, err_part := read_form.NextPart()
           if err_part == io.EOF {
                     break
                        
           }
           if part.FormName() == "file" {
               buf.ReadFrom(part)
           }
           if (part.FormName() ==  "id") {
               temp_buf := new(bytes.Buffer)
               _,err = temp_buf.ReadFrom(part)
               // get rid of the colon
               if err != nil {
                   fmt.Println(err)
                   w.WriteHeader(http.StatusUnauthorized)
                   return
               }
               insertCSV(buf,temp_buf.String())
    }
}
	fmt.Println("Creating Project Upload CSV")
    w.WriteHeader(http.StatusOK)
}
func AddProject(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "POST,OPTIONS,PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    var project models.Project
    err := json.NewDecoder(r.Body).Decode(&project)
    if err != nil{
        fmt.Println(err)
    }
    id := insertOneProject(project)
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	project.ID = id
    fmt.Println("Creating Project",project.ID)
	json.NewEncoder(w).Encode(project)
}
func GetProject(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    // fetch email from middleware when i fix it
    clientid := r.URL.Query()["clientid"]
    if (len(clientid) != 1){
        fmt.Println("Werd ERROR")
    }
    value := findProjects(clientid[0])
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	fmt.Println("Get Project")
	json.NewEncoder(w).Encode(value)
}
func findProjects(client_id string)([]primitive.M) {
    id, err := primitive.ObjectIDFromHex(client_id)
    if err != nil {
                fmt.Println("ObjectIDFromHex ERROR", err)
    }
    // First we obtain the clients row so we can get the projects
    fmt.Println(client_id)
    result := bson.D{}
    query := &bson.M{"_id": id} 
    err = clientCollection.FindOne(context.Background(), query).Decode(&result)
    if err != nil {
                fmt.Println("Werd ERROR", err)
                return nil
    }
    // if they dont have any projects yet
    if len(result) < 4{
        return nil
    }
    fmt.Println(result[3].Value)
    query_array := result[3].Value.(primitive.A)
    oids := make([]primitive.ObjectID, len(query_array))
    for i := range query_array {
        temp, err := primitive.ObjectIDFromHex(query_array[i].(string))
        if err != nil {
            fmt.Println("ObjectIDFromHex ERROR", err)
        }
          oids[i] = temp    
      }
    projectQuery := bson.M{"_id": bson.M{"$in": oids}}
    cur,err := projectCollection.Find(context.Background(), projectQuery)     
    if (err != nil){
             log.Fatal(err)
             return nil
    }
//	cur.Close(context.Background())
    var projectResults []primitive.M
     for cur.Next(context.Background()) {
         var temp bson.M
         e := cur.Decode(&temp)
         if e != nil {
             log.Fatal(e)
         }
         projectResults = append(projectResults, temp)
     }

     if err := cur.Err(); err != nil {
         log.Fatal(err)
     }
     fmt.Println("Found Projects", projectResults)
	 cur.Close(context.Background())
     return projectResults
}
func AddClient(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "POST,OPTIONS,PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    var client models.Client
    err := json.NewDecoder(r.Body).Decode(&client)
    if err != nil{
        fmt.Println(err)
    }
    fmt.Println(client, r.Body)
    user_id := string(r.Context().Value("user_id").([]uint8))
    id := insertOneClient(client,user_id)
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	fmt.Println("Creating Client")
    client.ID = id
	json.NewEncoder(w).Encode(client)
}
func GetClient(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
    // fetch email from middleware when i fix it
    var user models.User
    user_id := string(r.Context().Value("user_id").([]uint8))
    value := findClients(user,user_id)
    //TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	fmt.Println("Creating Client")
	json.NewEncoder(w).Encode(value)
}
func findClients(user models.User,user_id string)([]primitive.M) {
    id, err := primitive.ObjectIDFromHex(user_id)
    if err != nil {
                fmt.Println("ObjectIDFromHex ERROR", err)
    }
    result := bson.D{}
    query := &bson.M{"_id": id} 
    err = collection.FindOne(context.Background(), query).Decode(&result)
    if err != nil {
                fmt.Println("Werd ERROR", err)
                return nil
    }
    // if they dont have any projects yet
    if len(result) < 7{
        return nil
    }
    // TODO we should replace these direct indices with types that correspond to our schema
    fmt.Println(result[7].Value)
    query_array := result[7].Value.(primitive.A)
    oids := make([]primitive.ObjectID, len(query_array))
    for i := range query_array {
        temp, err := primitive.ObjectIDFromHex(query_array[i].(string))
        if err != nil {
            fmt.Println("ObjectIDFromHex ERROR", err)
        }
          oids[i] = temp    
      }
    clientQuery := bson.M{"_id": bson.M{"$in": oids}}
    // AT THIS POINT we have retrieved the correct filtering client ids and now we just need to match them
    cur,err := clientCollection.Find(context.Background(), clientQuery)     
    if (err != nil){
             log.Fatal(err)
             return nil
    }
    var clientResults []primitive.M
     for cur.Next(context.Background()) {
         var result bson.M
         e := cur.Decode(&result)
         if e != nil {
             log.Fatal(e)
         }
         fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
         clientResults = append(clientResults, result)
     }

     if err := cur.Err(); err != nil {
         log.Fatal(err)
     }
     fmt.Println("Found Clients", result)
	 cur.Close(context.Background())
     return clientResults
}
// TaskComplete update task route
func TaskComplete(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	taskComplete(params["id"])
	json.NewEncoder(w).Encode(params["id"])
}

// UndoTask undo the complete task route
func UndoTask(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	params := mux.Vars(r)
	undoTask(params["id"])
	json.NewEncoder(w).Encode(params["id"])
}

// DeleteTask delete one task route
func DeleteTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	params := mux.Vars(r)
	deleteOneCar(params["id"])
	json.NewEncoder(w).Encode(params["id"])
	// json.NewEncoder(w).Encode("Task not found")

}

// DeleteAllTask delete all tasks route
func DeleteAllTask(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	count := deleteAllTask()
	json.NewEncoder(w).Encode(count)
	// json.NewEncoder(w).Encode("Task not found")

}
func findOneUser(user models.User)(primitive.D,error) {
    result := bson.D{}
    // TODO add an and to also query based on the username
    query := &bson.M{"email": user.Email} 
    err := collection.FindOne(context.Background(), query).Decode(&result)
	if err != nil {
        fmt.Println(err)
        return result,err
        //log.Fatal(err)
	}
    //TODO we might need check to ensure that a username is unique when you register
	fmt.Println("Found a Single User", result)
    return result,nil
}
// Insert one task in the DB
func insertOneEmail(user models.Email) {
	fmt.Println(user)
    insertResult, err := emailCollection.InsertOne(context.Background(), user)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Inserted a Single Email", insertResult.InsertedID)
}
// Insert one task in the DB
func insertOneUser(user models.User) {
	fmt.Println(user)
    insertResult, err := collection.InsertOne(context.Background(), user)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single User", insertResult.InsertedID)
}
func insertOneProject(project models.Project) primitive.ObjectID{
    insertResult, err := projectCollection.InsertOne(context.Background(), project)

	if err != nil {
		log.Fatal(err)
	}
    updateClient(project,insertResult.InsertedID.(primitive.ObjectID))
	return insertResult.InsertedID.(primitive.ObjectID)
}
func updateClient(project models.Project, objectid primitive.ObjectID){
    fmt.Println(project.Client_id,66666999999)
    id, err := primitive.ObjectIDFromHex(project.Client_id)
    if err != nil {
                fmt.Println("ObjectIDFromHex ERROR", err)
    }
	filter := bson.M{"_id": id}
    update := bson.M{"$push": bson.M{"client_ids": objectid.Hex()}}
    result, err := clientCollection.UpdateOne(
        context.Background(),
        filter,
        update,
    )
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Updated the Client with the new project", result)
}
func insertCSV(buf *bytes.Buffer, projectid string) {
	fmt.Println(buf.String())
    //TODO here we modify the project row, such that we append all the CSVS to one another in that row
    id, err := primitive.ObjectIDFromHex(projectid)
    if err != nil {
                fmt.Println("ObjectIDFromHex ERROR", err)
    }
	filter := bson.M{"_id": id}
    update := bson.M{"$push": bson.M{"csv": buf.String()}}
    result, err := projectCollection.UpdateOne(
        context.Background(),
        filter,
        update,
    )
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Inserted a CSV", result)
}
func insertOneClient(client models.Client,user_id string) primitive.ObjectID {
    id, err := primitive.ObjectIDFromHex(user_id)
    if err != nil {
                fmt.Println("ObjectIDFromHex ERROR", err)
    }
	fmt.Println(client)
    insertResult, err := clientCollection.InsertOne(context.Background(), client)
	// NOTE we are filtering on the user_id, so we need to be able to access this
    filter := bson.M{"_id": id}
    update := bson.M{"$push": bson.M{"clients": insertResult.InsertedID.(primitive.ObjectID).Hex()}}
    _, err = collection.UpdateOne(
        context.Background(),
        filter,
        update,
    )
	if err != nil {
		log.Fatal(err)
	}

	if err != nil {
		log.Fatal(err)
	}
    return insertResult.InsertedID.(primitive.ObjectID)
}
// task complete method, update task's status to true
func taskComplete(task string) {
	fmt.Println(task)
	id, _ := primitive.ObjectIDFromHex(task)
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"status": true}}
	result, err := collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("modified count: ", result.ModifiedCount)
}

// task undo method, update task's status to false
func undoTask(task string) {
	fmt.Println(task)
	id, _ := primitive.ObjectIDFromHex(task)
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"status": false}}
	result, err := collection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("modified count: ", result.ModifiedCount)
}

// delete one task from the DB, delete by ID
func deleteOneCar(car string) {
	fmt.Println(car)
	id, _ := primitive.ObjectIDFromHex(car)
	filter := bson.M{"_id": id}
	d, err := collection.DeleteOne(context.Background(), filter)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Deleted Document", d.DeletedCount)
}

// delete all the tasks from the DB
func deleteAllTask() int64 {
	d, err := collection.DeleteMany(context.Background(), bson.D{{}}, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Deleted Document", d.DeletedCount)
	return d.DeletedCount
}
