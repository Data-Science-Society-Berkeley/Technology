import React, { Component } from "react";
import Footer from "./footer";
import axios from "axios";
import {
  Card,
  Header,
  Form,
  Input,
  Icon,
  Button,
  Container,
  Divider,
  Segment,
  Menu
} from "semantic-ui-react";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rate from "./Rate";
import RateToggle from "./RateToggle";
import PolicyCard from "./PolicyCard"

let endpoint = "http://localhost:8080";
const formFormat = {
  margin: "auto",
  height: "100%",
  width: "100%"
};
class MasterDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: []
    };
  }
  componentDidMount() {
    console.log("driver comp mounted");
    this.getDrivers();
  }
  // this method does the get request to the server so that we can see our vehicles
  getDrivers = () => {
    console.log("called the function");
    //TODO fix this API call
    axios.get(endpoint + "/api/drivers").then(res => {
      console.log(res);
      if (res.data) {
        this.setState({
          rates: res.data.map(rate => {
            return (
              <Rate
                key={rate.id}
                name={rate.Name}
                birthday={rate.birthday}
                licenseNum={rate.license}
                gender={rate.gender}
              />
            );
          })
        });
      } else {
        this.setState({
          rates: []
        });
      }
    });
  };
  // creates a new blank car entry for the user
  createDriver = () => {
    console.log("Someone told me to create a car");
    this.setState({
      rates: this.state.rates.concat([<Rate />])
    });
  };
  moveDriver = () => {
    this.props.routeChange();
  };
  render() {
    console.log("called driver render");
    console.log(this.state);
    return (
      <div class="Content">
        <div class="Wrapper">
          <div class="RightContent">
            <RateToggle> </RateToggle>
            <Button> Sign up!</Button>
          </div>
          <div class="LeftContent">
         <PolicyCard ></PolicyCard>
         <Card.Group itemsPerRow={1}>{this.state.rates}</Card.Group>

          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MasterDriver);
