package router

import (
	"digitalmarketing/server/middleware"
	"fmt"
	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/api/joinnow", middleware.AddEmail).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/register", middleware.AddUser).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/login", middleware.Login).Methods("POST", "OPTIONS")
	fmt.Println(router)
    s := router.PathPrefix("/auth").Methods("GET","POST", "OPTIONS").Subrouter()
    s.Use(middleware.AuthMiddle)	
	fmt.Println(7)
	fmt.Println(s)
    s.HandleFunc("/api/register/client", middleware.AddClient).Methods("POST", "OPTIONS")
    s.HandleFunc("/api/clientfetch", middleware.GetClient).Methods("GET", "OPTIONS")
    
    s.HandleFunc("/api/register/project", middleware.AddProject).Methods("POST", "OPTIONS")
    s.HandleFunc("/api/projectfetch", middleware.GetProject).Methods("GET", "OPTIONS")
    
    s.HandleFunc("/api/project/upload", middleware.AddProjectFile).Methods("POST", "OPTIONS")
	return router
}
