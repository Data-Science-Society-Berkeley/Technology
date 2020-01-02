import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

import Formx from "./Formx"
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "150px",
          textAlign:"center",
          fontFamily: "	OverpassSemiBold",
};
const mybigtext = {
          fontSize: "50px",
          fontWeight: "bold",

};
const mymidtext = {
    fontSize: "20px",
    fontWeight: "lighter"
};
const submit = {
    width : "50%",
    height: "180px",
    margin: "0 auto",
};
const greenBut = {
    background: "#759E33",
    color: "white",
  };
class CentralText extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
      };
      this.join=this.join.bind(this);

  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
    console.log(value.target.value)
  };
  join(){
      // this function makes a call to our backend with the current email in the box
      // TODO call the backend from here
      console.log(this.state["email"])
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    render() {
    return (
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={1}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h1'style={mybigtext}>
                        Everybody wins in an efficient lumber ecosystem.
                        </Header>
                        <Header as= 'h1' style={mymidtext}>
                        Skip the middlemen, buy lumber straight from the sawmill with logistics handled - the best price is just a bonus. 
                        </Header>
                        <Header as='h1'style={mymidtext}>
                        Join our mailing list for free early access - Release Summer 2020
                        </Header>
                        <Form size ='massive' style = {submit}>
                            <Form.Group inline={true}>
                        <input placeholder='Enter your Email address' onChange={this.updateEmail}/>
                        <Form.Button content='Join Now' size={"huge"} style={greenBut}  onClick={this.join}/>
                        </Form.Group>
                        </Form>
                    </Grid.Column>
            </Grid.Row>
  </Grid.Row>
  </Grid>
)

}
}
export default CentralText;
