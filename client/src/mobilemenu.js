import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Image, Menu,Button,Portal,Header,Card ,Form ,Input,Divider,Icon,Dropdown,Sidebar} from 'semantic-ui-react';
import PasswordStrengthBar from 'react-password-strength-bar';
import validator from 'validator';
import logo from './Backgrounds/DSS-logo-white.png'
import logo2 from './Backgrounds/DSS-logo-black-transparent.png'


let endpoint = "http://localhost:8080";

const mynav = {
    background: "inherit",
    height: "75%",
    color: "#759E33",
    fontFamily: "Overpass",	
    fontSize: "16px",	
    fontWeight: 600,
    lineHeight: "25px",
    boxShadow: "none",
    border: "none",
};

const submit = {
  marginRight: "519px",
  marginBottom: "42px",
  background: "blue"
};

const navbar = {
  fontFamily: "Montserrat",	
  fontSize: "24px",	
  fontWeight: 600,
  lineHeight: "37px",
  marginLeft: "24px",
  color:"#FFFFFF"
};
const link = {
  fontFamily: "Montserrat",	
  fontSize: "24px",	
  fontWeight: 600,
  lineHeight: "37px",
  color:"#FFFFFF"
};
const link2 = {
  fontFamily: "Montserrat",	
  fontSize: "24px",	
  fontWeight: 600,
  lineHeight: "37px",
  color: "#8CD6D1"};

const greenBut = {
  background: "blue",
  color: "white",
};
const lip = {
  color: "black",
};
var circleStyle = {
  padding:10,
  marginLeft:34,
  display:"inline-block",
  backgroundColor: "#FFFFFF",
  borderRadius: "50%",
  width:100,
  height:100,
};

const leftItems = [
    { as: "a", content: "Home", key: "home" },
    { as: "a", content: "Users", key: "users" }
  ];

  

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    activeStyle:(this.props.match.path != "/" && this.props.match.path != "/login") ,
    }
  }; 
  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  render() {
    return (<Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={this.state.visible}
        >
        <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='book' />
        About
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='group' />
        Committees
      </Menu.Item>
      </Sidebar>
        <Sidebar.Pusher
          dimmed={this.state.visible}
          onClick={this.handlePusher}
          style={{ minHeight: "100vh" }}
        >
        
          <Menu fixed="top" inverted>
            <Menu.Item>
              <Image size="mini" src={logo} />
            </Menu.Item>
            <Menu.Item position="right" onClick={this.handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            {this.props.children}
          </Menu>
        </Sidebar.Pusher>
        
      </Sidebar.Pushable>)

}
}


export default NavBar;
