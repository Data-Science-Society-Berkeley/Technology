package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// TODO Should make usage have a defined type instead of string
type Lumber struct {
	name     string `json:"name,omitempty"`
	selected bool   `json:"selected,omitempty"`
}
type Length struct {
	name     string `json:"name,omitempty"`
	selected bool   `json:"selected,omitempty"`
}
type Email struct {
	Email string `json:"email,omitempty"`
}
type Checkout struct {
	Addy   Address                `json:"address"`
	Bundle map[string]interface{} `json:"bundle_info"`
}
type Address struct {
	Name    string `json:"name,omitempty"`
	Unit    string `json:"unit,omitempty"`
	Street  string `json:"street,omitempty"`
	City    string `json:"city,omitempty"`
	State   string `json:"state,omitempty"`
	Country string `json:"country,omitempty"`
	Phone   string `json:"phone,omitempty"`
}
type Bundle struct {
	Name     string   `json:"type,omitempty"`
	Owner    string   `json:"woodName,omitempty"`
	Location string   `json:"location,omitempty"`
	Price    string   `json:"price,omitempty"`
	Traits   []string `json:"traits,omitempty"`
	Date     string   `json:"date,omitempty"`
	ItemCost string   `json:"itemcost,omitempty"`
	ShipCost string   `json:"shipcost,omitempty"`
	PreTax   string   `json:"pretax,omitempty"`
	GST      string   `json:"gst,omitempty"`
	PST      string   `json:"pst,omitempty"`
	Saving   string   `json:"saving,omitempty"`
}

// TODO convert these into stronger types at some point
type Order struct {
	Name     string `json:"type,omitempty"`
	Seller   string `json:"seller,omitempty"`
	Buyer    string `json:"buyer,omitempty"`
	Location string `json:"location,omitempty"`
	Total    string `json:"total,omitempty"`
	Date     string `json:"date,omitempty"`
	Status   string `json:"status,omitempty"`
}
type Car struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	CarName  string             `json:"task,omitempty"`
	Recovery bool               `json:"task,omitempty"`
	Uber     bool               `json:"task,omitempty"`
	Usage    string             `json:"task,omitempty"`
	Vin      string             `json:"task,omitempty"`
	Status   bool               `json:"status,omitempty"`
}
type User struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Email    string             `json:"email,omitempty"`
	Name     string             `json:"name,omitempty"`
	Password string             `json:"password,omitempty"`
	Buyer    bool               `json:"buyer,omitempty"`
	Lumber   []interface{}      `json:"lumber,omitempty"`
	Length   []interface{}      `json:"length,omitempty"`
	FullName string             `json:"fullname,omitempty"`
	Bio      string             `json:"artistbio,omitempty"`
}
type Customer struct {
	ID          primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	CompanyName string             `json:"companyName,omitempty"`
	FullName    string             `json:"fullName,omitempty"`
	Position    string             `json:"position,omitempty"`
	PhoneNum    string             `json:"phoneNumber,omitempty"`
	Description string             `json:"description,omitempty"`
	Sawmills    []interface{}      `json:"sawmills,omitempty"`
	Grades      []interface{}      `json:"grades,omitempty"`
	Sizes       []interface{}      `json:"sizes,omitempty"`
	Lengths     []interface{}      `json:"lengths,omitempty"`
}
type Performance struct {
	Performance_id string `json:"performance_id,omitempty"`
	ZoomUrl        string `json:"zoom,omitempty"`
	Name           string `json:"performance,omitempty"`
	Merch          string `json:"merch,omitempty"`
	Goal           string `json:"goal,omitempty"`
	Date           string `json:"date,omitempty"`
	Facebook       string `json:"facebook,omitempty"`
	Youtube        string `json:"youtube,omitempty"`
	Twitter        string `json:"twitter,omitempty"`
	Insta          string `json:"insta,omitempty"`
	Paypal         string `json:"paypal,omitempty"`
	FullName       string `json:"fullname,omitempty"`
	Bio            string `json:"artistbio,omitempty"`
}
type ID struct {
	Performance_id string `json:"performance_id,omitempty"`
}
