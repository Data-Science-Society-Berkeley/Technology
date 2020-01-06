import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
const lip = {
  color: "#759E33",
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
          <Link to={"/"} style={lip}>
        Lumber.io
        </Link>

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
              <Link to={"login"} style={lip}>
            <Button content='Login/Sign In' style={greenBut} />
            </Link>
            </Menu.Item>
            </Menu.Menu>
      </Menu>
      </div>
    )

}
}

export default NavBar;
