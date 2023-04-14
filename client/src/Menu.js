import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Image,
  Menu,
  Button,
  Portal,
  Header,
  Card,
  Form,
  Input,
  Divider,
  Icon,
  Dropdown,
} from "semantic-ui-react";
import PasswordStrengthBar from "react-password-strength-bar";
import validator from "validator";
import logo from "./Backgrounds/dssblacklonglogo.png";
import logo2 from "./Backgrounds/dsswhitelonglogo.png";

let endpoint = "http://localhost:8080";

const mynav = {
  background: "inherit",
  height: "75%",
  fontFamily: "Overpass",
  fontSize: "1vw",
  fontWeight: 600,
  lineHeight: "1.5vw",
  boxShadow: "none",
  border: "none",
};


// since menu has 10 margin
const form_formatting = {
  marginLeft: "36px",
  marginRight: "32px",
  marginTop: "25px",
};
const pref_formatting = {
  marginLeft: "37px",
  marginRight: "20px",
  marginTop: "45px",
};

const submit = {
  marginRight: "519px",
  marginBottom: "42px",
  background: "blue",
};

const navbar = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Montserrat",
  fontSize: "1.5vw",
  fontWeight: 600,
  lineHeight: "3vw",
  marginLeft: "1.5vw",
  color: "#FFFFFF",
  marginBottom: "-3vw",
};

const navWrapperLeft= {
  display: "flex",
  flex: "1 2 0",
  justifyContent: "space-between",
  margin: "auto 0",
}

const navWrapperRight= {
  display: "flex",
  justifyContent: "space-between",
  margin: "auto 0",
}

const link = {
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "37px",
  color: "#8CD6D1",
  textDecoration: 'none',
};
const link2 = {
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "37px",
  color: "#8CD6D1",
  textDecoration: 'none',
};

const greenBut = {
  background: "blue",
  color: "white",
};
const lip = {
  color: "black",
};
var circleStyle = {
  padding: 10,
  marginLeft: 34,
  display: "inline-block",
  backgroundColor: "#FFFFFF",
  borderRadius: "50%",
  width: 100,
  height: 100,
};
var circle2 = {
  padding: 10,
  marginLeft: 34,
  display: "inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width: 100,
  height: 100,
};
const join1 = {
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "37px",
  marginLeft: "24px",
  color: "#EDE8C4",
};
const join2 = {
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "37px",
  marginLeft: "24px",
  color: "#FFC54A",
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStyle:
        this.props.match.path != "/" && this.props.match.path != "/login",
    };
    this.setMenu = this.setMenu.bind(this);
    this.setCircle = this.setCircle.bind(this);
    this.setJoin = this.setJoin.bind(this);
    console.log(this.props.match.path);
  }
  registerUser = () => {
    let email = this.state.email;
    let name = this.state.name;
    let password = this.state.password;
    let buyer = this.state.buyer;
    let lumber = this.state.lumber;
    let length = this.state.length;
    axios
      .post(
        endpoint + "/api/register",
        {
          email,
          password,
          buyer,
          lumber,
          length,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.setState({
            open: false,
          });
        }
      });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleClose = () => {
    this.setState({ open: false });
  };
  closeEmail = () => {
    this.setState({ emailOpen: false });
  };
  setCircle() {
    //TODO ensure first guys margin is effectively 24
    console.log(this.state.activeStyle);
    if (this.state.activeStyle) {
      return (
        <Image src={logo}></Image>
      );
    } else {
      return (
        <Image src={logo}></Image> // initially logo2, but we want logo since home will = the rest for now
      );
    }
  }
  setJoin() {
    //TODO ensure first guys margin is effectively 24
    console.log(this.state.activeStyle);
    if (this.state.activeStyle) {
      return join2;
    } else {
      return join1;
    }
  }
  setMenu() {
    //TODO ensure first guys margin is effectively 24
    console.log(this.state.activeStyle);
    if (this.state.activeStyle) {
      return link2;
    } else {
      return link;
    }
  }
  render() {
    // FOR NOW FOR TESTING
    const { activeItem } = this.state;
    var linkStyling = this.setMenu();
    console.log(linkStyling, this.state.activeStyle);
    var logo = this.setCircle();
    let applystyle = this.setJoin();
    return (
      <div className="NavBar">

        <Menu style={mynav} borderless={true}>
          <div style={navWrapperLeft}>
            <Menu.Item style={navbar} className=".ui.table">
              <Link to="/">{logo}</Link>
            </Menu.Item>
          </div>

          <div style={navWrapperRight}>
            <Menu.Menu position="right" style={{ marginLeft: "7vw" }}>
              <Menu.Item
                  name="home"
                  active={activeItem === "/"}
                  onClick={this.handleItemClick}
                  style={navbar}
                >
                  <Link to="/" style={linkStyling}>
                    home
                  </Link>
                </Menu.Item>
              <Menu.Item
                name="about"
                active={activeItem === "about"}
                onClick={this.handleItemClick}
                style={navbar}
              >
                <Link to="about" style={linkStyling}>
                  about
                </Link>
              </Menu.Item>
              <Menu.Item
                name="decal"
                active={activeItem === "decal"}
                onClick={this.handleItemClick}
                style={navbar}
              >
                <Link to="/gm" style={linkStyling}>
                  decal
                </Link>
              </Menu.Item>
              <Menu.Item
                name="events"
                active={activeItem === "events"}
                onClick={this.handleItemClick}
                style={navbar}
              >
                <Link style={linkStyling} to="events">
                  events
                </Link>
              </Menu.Item>
              <Menu.Item
                name="services"
                active={activeItem === "services"}
                onClick={this.handleItemClick}
                style={navbar}
              >
                <Link style={linkStyling} to="services">
                  services
                </Link>
              </Menu.Item>
              <Menu.Item
                name="join"
                active={activeItem === "join"}
                onClick={this.handleItemClick}
                style={navbar}
              >
              <Link style={linkStyling} to="/joinus">
                    join us
              </Link>
              </Menu.Item>
              <Menu.Item header></Menu.Item>
            </Menu.Menu>
          </div>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
