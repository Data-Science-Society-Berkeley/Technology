package main

import (
	"fmt"
	"log"
	"net/http"
	"Technology/server/router"
)

func main() {
	r := router.Router()
	fs := http.FileServer(http.Dir("build"))
	http.Handle("/", fs)
	fmt.Println("Starting server on the port 8080...")
	log.Fatal(http.ListenAndServeTLS(":8080", "/etc/letsencrypt/live/dssberkeley.com/fullchain.pem", "/etc/letsencrypt/live/dssberkeley.com/privkey.pem", r))
}
