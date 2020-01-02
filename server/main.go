package main

import (
	"fmt"
	"log"
	"net/http"
	 api "github.com/johnaoss/golinkedinapi"
	"go-to-do-app/server/router"
)

func main() {
    permissions := []string{"r_emailaddress","r_liteprofile"}
    clientID := "86xvjmlw73wwc0"
    clientSecret := "mDSprGdR0ij5HQo0"
	redirectURL := "https://821e8189.ngrok.io/api/drivers"
    api.InitConfig(permissions, clientID, clientSecret, redirectURL)
	r := router.Router()
	// fs := http.FileServer(http.Dir("build"))
	// http.Handle("/", fs)
	fmt.Println("Starting server on the port 8080...")

	log.Fatal(http.ListenAndServe(":8080", r))
}
