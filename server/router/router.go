package router

import (
	"Technology/server/middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/api/email", middleware.Email).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/login", middleware.Login).Methods("POST", "OPTIONS")
}
