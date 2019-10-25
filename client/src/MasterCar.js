import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon,Button } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import carsData from './carsData';
import Car from './Car'
import AddCar from './AddCar'
let endpoint = "http://localhost:8080";
class MasterCar extends Component {
  constructor(props) {
    super(props);
      this.state = {
          cars:[]
      };
  }
  componentDidMount() {
    console.log("vehicle comp mounted")
    this.getCars();
  }
 // this method does the get request to the server so that we can see our vehicles
  getCars = () => {
    axios.get(endpoint + "/api/car").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          cars: res.data.map(car => {
            return (
                <Car key={car.id} name={car.CarName} Recovery={car.Recovery} Uber={car.Uber} Usage={car.Usage} Vin={car.Vin}/>
            );
          })
        });
      } else {
        this.setState({
          cars: []
        });
      }
    });
  };
// creates a new blank car entry for the user
createCar = () => {
console.log("Someone told me to create a car")
    this.setState({
        cars:this.state.cars.concat([<Car/>])
    });
};
// TODO implement this function
// this function makes sure that when they click save and continue that every form is properly filled out
validateForm = () => {
    console.log("validating the vehicle entries")
    // loops through each member of our array and ensures its filled out, then sends them all to the backend to update the database
    //
    this.props.routeChange()
}
render() {
    console.log("called car render")
    console.log(this.state)
    return (
      <div className="driver">
         <div className="mainPage">
        <div className="row">
          <Card.Group>{this.state.cars}</Card.Group>
        </div>
            <AddCar createCar={this.createCar}/>
            </div>
        <Button label="Save and Continue" onClick={this.validateForm}/>
        </div>
    )
}
}
export default  withRouter(MasterCar)
