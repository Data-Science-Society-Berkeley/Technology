import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { Button,Image,Grid,Card, Header, Form, Input, Icon } from "semantic-ui-react";
let endpoint = "http://localhost:8080";
const container = {
   display: "flex",
   marginLeft: "auto",
   marginRight: "auto"
};
const center = {
    width: "200px",
    padding: 0,
    border: "none",
    outline: "none",
    background: "none",
};
const centerblue = {
   background: "#3d72b4",
};
const white = {
    background: 'white',
};
class Formx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
    };
      this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit = () => {
          this.props.buttonClick(this.state.zipcode);
  };
  onChange = event => {
    console.log("CHANGED UP")
    console.log(event.target.value)
      this.setState({
      zipcode: event.target.value
    });
  };


  render() {
    return (
    <div style={container}>
      < div style={white} >
        <Form>
            <Form.Field style={center} onChange={this.onChange} >
            <input placeholder='Zipcode'/>
            </Form.Field>
        </Form>
        <Button size= "medium" type='submit' onClick={this.onSubmit} label="Submit" />
     < /div>
    </div>
    )
  }
}
export default Formx;
