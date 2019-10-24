import React, { Component } from "react";
import axios from "axios";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

let endpoint = "http://localhost:8080/test";

class header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        random
        </div>
    )

}
}
export default withRouter(header);
