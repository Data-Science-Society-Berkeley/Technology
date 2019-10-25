import React, { Component } from "react";
import axios from "axios";
import { Card, Header,Button, Form, Input, Icon } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

let endpoint = "http://localhost:8080/test";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div >
         <Button.Group fluid widths={2}>
        <Button  onClick={this.props.back}> Back </Button>
            <Button.Or />
        <Button onClick={this.props.forward} > Save and continue</Button>
         </Button.Group>
        </div>
        </div>
    )

}
}
export default Footer;
