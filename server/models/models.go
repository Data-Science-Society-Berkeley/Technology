package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Car struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	CarName   string          `json:"task,omitempty"`
	Recovery bool           `json:"task,omitempty"`
	Uber  bool           `json:"task,omitempty"`
	// TODO Should make usage have a defined type instead of string
	Usage   string          `json:"task,omitempty"`
	// TODO Should make Vin have a defined type instead of string
	Vin   string          `json:"task,omitempty"`
	Status bool               `json:"status,omitempty"`
}
type User struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Email   string          `json:"email,omitempty"`
	Name  bool           `json:"name,omitempty"`
	// TODO Should make usage have a defined type instead of string
	Password   string          `password:"task,omitempty"`
}
type Driver struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	FullName   string          `json:"task,omitempty"`
	Birthday   string          `json:"task,omitempty"`
	LicenseNumber   string          `json:"task,omitempty"`
	// TODO Should make gender have a defined type instead of string
	Gender bool           `json:"task,omitempty"`
	email_address string          `json:"task,omitempty"`
	age_license int          `json:"task,omitempty"`
	Marriage  bool           `json:"task,omitempty"`
	// TODO Should make Status have a defined type instead of string
	Status   string          `json:"task,omitempty"`
	Employment bool               `json:"status,omitempty"`
	Convictions bool               `json:"status,omitempty"`
	LicenseSuspension bool               `json:"status,omitempty"`
	// TODO Should make phoneNum have a defined type instead of string
	phoneNum string               `json:"status,omitempty"`
}

