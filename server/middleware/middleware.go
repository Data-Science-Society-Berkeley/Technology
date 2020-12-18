
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

func Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "https://www.dssberkeley.com")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var user models.Password
	fmt.Println(r.Body)
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		fmt.Println(err)
	}
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
		Expires:  time.Now().Add(120000 * time.Second),
	})
	fmt.Println("COOKIE FETCHED SUCCESFULLY", user)
	//TODO add logic to hash the password and give the user some unique token so we ensure hes logged in
	//fmt.Println("Login User to Lumber", sessionToken, user.ID)
	json.NewEncoder(w).Encode(user.Password)
	return
}

