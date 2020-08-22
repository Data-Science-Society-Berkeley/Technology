import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Image, Menu,Button,Portal,Header,Card ,Form ,Input,Divider,Icon,Dropdown} from 'semantic-ui-react';
import PasswordStrengthBar from 'react-password-strength-bar';
import validator from 'validator';

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
    marginTop:"52px",
};
// since menu has 10 margin
const form_formatting = { marginLeft: "36px", marginRight: "32px",marginTop: "25px" };
const pref_formatting = { marginLeft: "37px", marginRight: "20px",marginTop: "45px" };

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
  marginLeft: "41px",
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
var circle2 = {
  padding:10,
  marginLeft:34,
  display:"inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width:100,
  height:100,
};



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    activeStyle:(this.props.match.path != "/" && this.props.match.path != "/login") ,
    }
    this.setMenu = this.setMenu.bind(this);
    this.setCircle = this.setCircle.bind(this);
    console.log(this.props.match.path)

  }; 
  registerUser = () => {
    let email = this.state.email
    let name = this.state.name
    let password = this.state.password
    let buyer = this.state.buyer
    let lumber = this.state.lumber
    let length = this.state.length
    axios
    .post(
      endpoint + "/api/register",
      {
    email,password,buyer,lumber,length
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      console.log(res);
      if (res.status == 200){
          this.setState({ 
            open: false,
          })
        }
    });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClose = () => {
    this.setState({ open: false })
  }
  closeEmail = () => {
    this.setState({ emailOpen: false })
  }  
  setCircle(){
    //TODO ensure first guys margin is effectively 24 
    console.log(this.state.activeStyle);
    if (this.state.activeStyle){
      return circle2;
    } else {
      return circleStyle;
    }
  }
  setMenu(){
    //TODO ensure first guys margin is effectively 24 
    console.log(this.state.activeStyle);
    if (this.state.activeStyle){
      return link2;
    } else {
      return link;
    }
  }
  render() {
    // FOR NOW FOR TESTING
    const { activeItem } = this.state
    var linkStyling = this.setMenu()
    console.log(linkStyling,this.state.activeStyle)
    var circleStyling = this.setCircle()

    return (
      <div className='NavBar'>
      <Menu style={mynav} borderless={true}>
          <Menu.Item style={navbar} className=".ui.table" >
          <Link to="/">

          <div style={circleStyling}>

      </div>
      </Link>


        </Menu.Item>
          <Menu.Menu position="right" style={{marginLeft:"504px"}}>
            <Menu.Item      name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick} style={navbar}>
            <Link to="about" style={linkStyling}>
            about
            </Link>
            </Menu.Item>
            <Menu.Item     name='committees'
            active={activeItem === 'committees'}
            onClick={this.handleItemClick}style={navbar}>
            <Dropdown style={linkStyling} item text='committees'>
          <Dropdown.Menu >
          <Link to="/commitees" style={linkStyling}>
            <Dropdown.Item icon='sitemap' text='Overview' />
            </Link>
          <Link to="/decal" style={linkStyling}>
            <Dropdown.Item icon='book' text='Decal' />
            </Link>
            <Link to="/acadev" style={linkStyling}>
            <Dropdown.Item icon='globe' text='Acadev' />
            </Link>
            <Link to="/consulting" style={linkStyling}>
            <Dropdown.Item icon='exchange' text='Consulting' />
            </Link>
            <Link to="/socialgood" style={linkStyling}>
            <Dropdown.Item icon='like' text='Social Good' />
            </Link>
            <Dropdown item text='Student Links'>
          <Dropdown.Menu >
            <Dropdown.Header>Pages</Dropdown.Header>
            <Link to="generalmember"><Dropdown.Item>GM Landing</Dropdown.Item></Link>
            <Link to="decallearn"><Dropdown.Item>Decal Landing</Dropdown.Item></Link>
          </Dropdown.Menu>
        </Dropdown>
          </Dropdown.Menu>
        </Dropdown>
            </Menu.Item>
            <Menu.Item     name='education'
            active={activeItem === 'education'}
            onClick={this.handleItemClick} style={navbar}>
            <Link style={linkStyling}to="education">
            education
            </Link>
            </Menu.Item>
            <Menu.Item     name='events'
            active={activeItem === 'events'}
            onClick={this.handleItemClick} style={navbar}>
            <Link style={linkStyling} to="events">
            events
            </Link>
            </Menu.Item>
            <Menu.Item     name='services'
            active={activeItem === 'services'}
            onClick={this.handleItemClick} style={navbar}>
            <Link style={linkStyling} to="services">
            services
            </Link>
            </Menu.Item>
            <Menu.Item     name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick} style={navbar}>
            <Link style={linkStyling} to="login">
            member login
            </Link>
            </Menu.Item>
            <Menu.Item header >
            

            </Menu.Item>
            </Menu.Menu>
      </Menu>
      </div>
    )

}
}

export default NavBar;
