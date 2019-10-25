import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon,Button,Container } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Driver from './Driver'
import AddDriver from './AddDriver'
let endpoint = "http://localhost:8080";
const formFormat = {
    margin: "auto",
    height: "100%",
    width: "100%",
};
class MasterDriver extends Component {
  constructor(props) {
    super(props);
      this.state = {
          drivers:[]
      };
  }
  componentDidMount() {
    console.log("driver comp mounted")
    this.getDrivers();
  }
 // this method does the get request to the server so that we can see our vehicles
  getDrivers = () => {
      console.log("called the function")
      axios.get(endpoint + "/api/drivers").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          drivers: res.data.map(driver => {
            return (
                <Driver key={driver.id} name={driver.Name} birthday={driver.birthday} licenseNum={driver.license} gender={driver.gender}
                email={driver.email} age_license={driver.license} marriage={driver.marriage} licStatus={driver.licStatus}
                employ={driver.employ} convictions={driver.convic} licenseSus={driver.licenseSus} phoneNum={driver.phoneNum}/>
            );
          })
        });
      } else {
        this.setState({
          drivers: []
        });
      }
    });
  };
// creates a new blank car entry for the user
createDriver = () => {
console.log("Someone told me to create a car")
    this.setState({
        drivers:this.state.drivers.concat([<Driver/>])
    });
};
// TODO implement this function
// this function makes sure that when they click save and continue that every form is properly filled out
validateForm = () => {
    console.log("validating the driver entries")
    // loops through each member of our array and ensures its filled out, then sends them all to the backend to update the database
    //
    this.props.routeChange()
}
render() {
    console.log("called driver render")
    console.log(this.state)
    return (
    <div className="driver">
      <div>
        <Form style={formFormat}>
          <Card.Group>{this.state.drivers}</Card.Group>
            <AddDriver createDriver={this.createDriver}/>
        </Form>
        </div>
        <div>
        <Button label="Save and Continue" onClick={this.validateForm}/>
        </div>
        </div>
    )
}
}
export default  withRouter(MasterDriver)
