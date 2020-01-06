package router

import (
	"go-to-do-app/server/middleware"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/api/linkedin", middleware.Linkedin).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/drivers", middleware.GetDrivers).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/register", middleware.AddUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/login", middleware.Login).Methods("POST", "OPTIONS")
	return router
}
