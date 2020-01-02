import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon,Button } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import carsData from './carsData';
import Footer from './footer'
import Car from './Car'
import AddCar from './AddCar'
const formFormat = {
    margin: "auto",
    height: "100%",
    width: "100%",
};

let endpoint = "http://localhost:8080";
class MasterCar extends Component {
  constructor(props) {
    super(props);
      this.state = {
          cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
          carData:[{}],
      };
  }
  componentDidMount() {
    //TODO encode the logic that we only get that second form if we're able to succesfully load some cars so that its no longer null
    console.log("vehicle comp mounted")
    this.getCars();
    if (!this.state){
    this.setState({
          cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
          carData:[{}],
    });
  }}
    updateParentState(childId){

    }
 // this method does the get request to the server so that we can see our vehicles
  getCars = () => {
    axios.get(endpoint + "/api/car").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          cars: res.data.map((car, index) => {
            return (
                <Car stateLink={this.updateState.bind(this)} identifier={index} key={car.id} name={car.CarName} Recovery={car.Recovery} Uber={car.Uber} Usage={car.Usage} Vin={car.Vin}/>
            );
          }),
            carData: Array(res.data.length).fill({})

        });
      } else {
        this.setState({
          cars: [],
          carData:[],
        });
      }
    });
  };
// creates a new blank car entry for the user
createCar = () => {
console.log("Someone told me to create a car")
    this.setState({
        cars:this.state.cars.concat([<Car identifier={this.state.cars.length+1} stateLink={this.updateState.bind(this)} />]),
        carData:this.state.cars.concat([{}])
    });
};
moveDriver = () =>{
  console.log("trying to move from Car to Drivers")
    //for (const [index, value] of this.state.carData.entries()) {
   //   console.log(value)
   //     if (Object.keys(value).length != 7){
   //       console.log('Detected a Form which was not filled out',Object.keys(value).length)
   //       return
    //    }
    //}
    this.props.routeChange()
}
updateState(child_index,child_state){
    console.log("I'm trying to update my state so my parent knows where I am")
    this.setState({
        carData:this.state.cars.concat([{}])
    });
}
// TODO fix this logic as opposed to just rendering this.state.cars, it should basically say for each car that we load that corresponding data form for it
render() {
    console.log("called car render")
    console.log(this.state)
    return (
    <div className="driver">
        <Form style={formFormat}>
          <div>
            <Card.Group>{this.state.cars}</Card.Group>
          </div>
          <div>
            <AddCar createCar={this.createCar}/>
          </div>
        </Form>
    <Footer forward={this.moveDriver.bind(this)} back={this.backVehicles}/>
        </div>
    )
}
}
export default  withRouter(MasterCar)
