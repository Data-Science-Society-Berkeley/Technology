import React, { Component } from "react";

import { Container, Image, Menu,Button  } from 'semantic-ui-react';
const mynav = {
    background: "inherit",
    height: "75%",
    color: "#759E33",
    fontFamily: "Overpass",	
    fontSize: "16px",	
    fontWeight: 600,
    lineHeight: "25px",
    
};
const navbar = {
  color: "#759E33",
  fontFamily: "Overpass",	
  fontSize: "16px",	
  fontWeight: 600,
  lineHeight: "25px",
  marginLeft: "100px",
};
const greenBut = {
  background: "#759E33",
  color: "white",
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='NavBar'>
      <Menu style={mynav} borderless={true}>
          <Menu.Item style={navbar} className=".ui.table" >
        Lumber.io
        </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item style={navbar}>
            Product
            </Menu.Item>
            <Menu.Item style={navbar}>
            Testamonials
            </Menu.Item>
            <Menu.Item style={navbar}>
            Contact
            </Menu.Item>
            <Menu.Item header >
            <Button content='Login/Sign In' style={greenBut} onClick={this.props.login}/>
            </Menu.Item>
            </Menu.Menu>
      </Menu>
      </div>
    )

}
}

export default NavBar;
