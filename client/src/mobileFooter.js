import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Header,
  Button,
  Form,
  Input,
  Icon,
  List,
  Segment,
  Container,
  Grid,
  Image,
} from "semantic-ui-react";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import logo from "./Backgrounds/DSS-logo-black-transparent.png";
import ocf from "./Backgrounds/ocf-hosted-penguin.svg";


class Footer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Segment vertical
        style={{
          width: "100%",
          height: "43vw",
          background: "#E5E5E5",
        }}
      ></Segment>
        )
            
        
    }