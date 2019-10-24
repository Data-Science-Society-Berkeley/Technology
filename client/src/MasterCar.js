import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import carsData from './carsData';
import Car from './Car'
import AddCar from './AddCar'
let endpoint = "http://localhost:8080/";
const carComponents = carsData.map(car => <Car key={car.id} name={car.name} Recovery={car.Recovery} Uber={car.Uber} Usage={car.Usage} Vin={car.Vin}/>)
class MasterCar extends Component {
  constructor(props) {
    super(props);
      this.state = {
          cars:[]
      };
  }
  componentDidMount() {
    console.log("random")
    //this.getCars();
  }
 // this method does the get request to the server so that we can see our vehicles
  getCars = () => {
    axios.get(endpoint + "/api/car").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          cars: res.data.map(car => {
            return (
                <Car key={car.id} name={car.name} Recovery={car.Recovery} Uber={car.Uber} Usage={car.Usage} Vin={car.Vin}/>
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
render() {
    console.log("called car render")
    return (
      <div>
         <div class="mainPage">
            {carComponents}
            </div>
            <AddCar />
        </div>
    )
}
}
export default  withRouter(MasterCar)
