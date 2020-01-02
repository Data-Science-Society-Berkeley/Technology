import React, { Component } from "react";
import axios from "axios";
import {
  CheckBox,
  Button,
  Image,
  Grid,
  Card,
  Dropdown,
  Menu,
  Header,
  Form,
  Input,
  Icon,
  Segment,
  Container,
  Label,
  List
} from "semantic-ui-react";
import Formx from "./Formx";
const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: { avatar: true, src: "/images/avatar/small/christian.jpg" }
  }
];
const style = {
  hang: {
    fontFamily: "Akkurat",
    background: "inherit",
    fontWeight: "lighter",
    borderColor: "white"
  }
};

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carYear: "",
      carMake: "",
      carModel: "",
      carStyle: ""
    };
  }
  //TODO friend options should after the first dropdown be dynamically rendered from our backend, because we know what brands had cars in 2020 or 2019, and keep narrowing
  //more and more
  yearError() {
    // If they made a selection it wouldn't be none
    if (this.state.carYear == "") {
      console.log("I detected an error in the year");
    }
  }
  handleChange = (e, { value }) => {
    this.setState({ carYear: value });
    this.props.stateLink(this.props.identifier, this.state);
  };
  checkError() {
    console.log("I got called!!");
  }
  render() {
    return (
      <div className="editedcarCard">
        <Menu fluid vertical borderless={true} style={style.hang}>
          <Menu.Item className="header">Fetch the name of this list of links</Menu.Item>
        </Menu>
        <div
          style={{ marginLeft: "15px", marginRight: "15px", marginTop: "10px" }}
        >    
        <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
        <List.Description as='a'>Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as='a'>Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>    
        </div>
      </div>
    );
  }
}
export default Car;
