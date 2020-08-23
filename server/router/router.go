package router

import (
	"Technology/server/middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {
	router := mux.NewRouter()
	router.HandleFunc("/api/login", middleware.Login).Methods("POST", "OPTIONS")
	// Upload
	router.HandleFunc("/api/addCustomer", middleware.AddCustomer).Methods("POST", "OPTIONS")

	s := router.PathPrefix("/auth").Methods("GET", "POST", "OPTIONS").Subrouter()
	s.Use(middleware.AuthMiddle)
	s.HandleFunc("/api/watch", middleware.Watch).Methods("POST", "OPTIONS")
	s.HandleFunc("/api/count", middleware.Count).Methods("POST", "OPTIONS")
	s.HandleFunc("/api/performances", middleware.GetPerformances).Methods("GET", "OPTIONS")
	
	s.HandleFunc("/api/fetchperformances", middleware.PullPerformances).Methods("GET", "OPTIONS")
	s.HandleFunc("/api/register/performance", middleware.AddPerformance).Methods("POST", "OPTIONS")

	// Profile Routes
	s.HandleFunc("/api/profilefetch", middleware.GetProfile).Methods("GET", "OPTIONS")
	s.HandleFunc("/api/profileupdate", middleware.UpdateProfile).Methods("POST", "OPTIONS")

	// Performance Editing Routes
	s.HandleFunc("/api/configfetch", middleware.Watch).Methods("POST", "OPTIONS")
	s.HandleFunc("/api/configupdate", middleware.UpdateConfig).Methods("POST", "OPTIONS")

	// Fetch Artists Route, we send an email to themå
	s.HandleFunc("/api/fetchartists", middleware.GetArtists).Methods("GET", "OPTIONS")

	return router
}
