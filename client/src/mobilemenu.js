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
  Sidebar,
  Segment,
} from "semantic-ui-react";
import PasswordStrengthBar from "react-password-strength-bar";
import validator from "validator";
import logo from "./Backgrounds/dss-logo-turquoise.png";
import logo2 from "./Backgrounds/DSS-logo-black-transparent.png";
import whiteLogo from "./Backgrounds/DSS-logo-white.png";
import { event } from "react-ga";
import CentralText from "./CentralText";
import { isThisTypeNode, transform } from "typescript";

import Login from "./Login";
import About from "./about.js";
import Decal from "./Decal";
import apply from "./Backgrounds/dssfall2020-recruitmentbanner.png";

import Consulting from "./Consulting";
import Contact from "./Contact";
import Cookies from "js-cookie";
import Service from "./Services.js";
import GeneralMember from "./generalmember.js";
import Join from "./Join-Us.js";

import Footer from "./footer";
import MobileMenu from "./mobilemenu.js";
import MobileLanding from "./mobilelanding.js";

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
  background: "blue",
};

const navbar = {
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "37px",
  marginLeft: "24px",
  color: "#FFFFFF",
};
const link = {
  fontFamily: "Montserrat",
  fontSize: "3vw",
  fontWeight: 600,
  lineHeight: "2.5vw",
  color: "#FFFFFF",
};
const link2 = {
  fontFamily: "Montserrat",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "37px",
  color: "#8CD6D1",
};

const dssHeader = {
  fontFamily: "Montserrat",
  fontSize: "4vw",
  fontWeight: 600,
  lineHeight: "2vw",
  color: "#8CD6D1",
  display: "inline-block",
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

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Users", key: "users" },
];

class NavBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStyle:
        this.props.match.path != "/" && this.props.match.path != "/login",
      visible: false,
      componentActive: this.props.componentid,
    };
  }
  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false });
  };

  handleMenuItemClick = () => {
    this.setState({ width: "wide" });
    // console.log("this");
  };

  handleMenuItemClickToggle = (event) => {
    event.stopPropagation();
    this.setState({ visible: false });
  };

  handleToggle = (event) => {
    event.stopPropagation();
    this.setState({ visible: !this.state.visible });
    // console.log("hi");
  };
  handleSettingVisibleToFalse = (event) => {
    // if (this.state.visible === true) {
    //   this.setState({ visible: false });
    // }
    this.setState({ visible: false });
    return;
  };

  generateExpandableCommitteesMenuItem() {
    return (
      <div
        style={{
          marginTop: "1vw",
          marginBottom: "1vw",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "5vw", color: "#8CD6D1" }}>
          <Icon name="group" />
        </div>
        <div style={{ fontSize: "3vw", marginTop: "1vw", color: "#000000" }}>
          Committees
        </div>
      </div>
    );
  }

  generateExpandableEducationMenuItem() {
    return (
      <div
        style={{
          marginTop: "1vw",
          marginBottom: "1vw",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "5vw", color: "#8CD6D1" }}>
          <Icon name="book" />
        </div>
        <div style={{ fontSize: "3vw", marginTop: "1vw", color: "#000000" }}>
          Education
        </div>
      </div>
    );
  }

  generateJoinScreen() {
    if (this.props.componentid === "join") {
      console.log("Hello ", this.props.componentid);
      return (
        <div>
          <Service />
          <div
            style={{
              backgroundColor: "#8CD6D1",
              marginRight: "-35vw",
              marginTop: "0px",
              paddingBottom: "11vw",
            }}
          >
            <Join></Join>
          </div>
        </div>
      );
    } else if (this.props.componentid === "services") {
      console.log("Hello", this.props.componentid);
      return (
        <div>
          <Service />
          <div
            style={{
              backgroundColor: "#8CD6D1",
              marginRight: "-35vw",
              marginTop: "0px",
              paddingBottom: "11vw",
            }}
          >
            <Contact></Contact>
          </div>
        </div>
      );
    } else {
      return <this.props.componentid />;
    }
  }

  setCircle() {
    //TODO ensure first guys margin is effectively 24
    // console.log(this.state.activeStyle);
    if (this.state.activeStyle) {
      return whiteLogo;
    } else {
      return logo;
    }
  }

  setBackgroundMenuColor() {
    //TODO ensure first guys margin is effectively 24
    // console.log(this.state.activeStyle);
    if (!this.state.activeStyle) {
      return "#FFFFFF";
    } else {
      return "#8CD6D1";
    }
  }

  setTitleColor() {
    if (!this.state.activeStyle) {
      return "#8CD6D1";
    } else {
      return "#FFFFFF";
    }
  }

  setBarColor() {
    if (!this.state.activeStyle) {
      return "#8CD6D1";
    } else {
      return "#FFFFFF";
    }
  }
  // setApply() {
  //   //TODO ensure first guys margin is effectively 24
  //   console.log(this.state.activeStyle);
  //   if (this.state.activeStyle) {
  //     return logo2;
  //   } else {
  //     return apply1;
  //   }
  // }

  render() {
    const logo = this.setCircle();
    const backgroundColor = this.setBackgroundMenuColor();
    const titleColor = this.setTitleColor();
    const barColor = this.setBarColor();
    const screenContent = this.generateJoinScreen();
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          Header="true"
          visible={this.state.visible}
          width={this.state.width}
          style={{
            backgroundColor: "#FFFFFF",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          {/* <Link to="/about"> */}
          <Menu.Item
            style={{
              fontFamily: "Montserrat",
              fontSize: "4vw",
              fontWeight: 600,
              lineHeight: "5vw",
              color: "#8CD6D1	",
            }}
          >
            <img
              src={logo}
              style={{
                width: "15vw",
                padding: "3vw 0vw 0vw 0vw",
              }}
            ></img>
          </Menu.Item>
          <Menu.Item as="a">
            <Link to="/" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="home" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    Home
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item as="a">
            <Link to="/about" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="magnify" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    About
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>

          {/* DEPRECATED COMMITTEE PAGES */}
          {/* <Menu.Item as="a" style={{ textAlign: "right" }}>
            {this.generateExpandableCommitteesMenuItem()}
            <Dropdown
              style={{ fontSize: "7vw", color: "#FFC54A" }}
              onClick={this.handleMenuItemClick}
              direction="left"
            >
              <Dropdown.Menu style={link}>
                <Link to="/acadev">
                  <Dropdown.Item
                    icon="pencil"
                    text="Academic Development"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
                <Link to="/consulting" style={link}>
                  <Dropdown.Item
                    icon="exchange"
                    text="Consulting"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
                <Link to="/decal" style={link}>
                  <Dropdown.Item
                    icon="book"
                    text="DeCal"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
                <Link to="/socialgood" style={link}>
                  <Dropdown.Item
                    icon="like"
                    text="Social Good"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          <Menu.Item as="a" style={{ textAlign: "right" }}>
            {this.generateExpandableEducationMenuItem()}
            <Dropdown
              style={{ fontSize: "7vw", color: "#FFC54A" }}
              onClick={this.handleMenuItemClick}
              direction="left"
            >
              <Dropdown.Menu style={link}>
                <Link to="/education">
                  <Dropdown.Item
                    icon="folder"
                    text="Overview"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
                <Link to="/gm" style={link}>
                  <Dropdown.Item
                    icon="bookmark"
                    text="GM Landing"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
                <Link to="/decallearn" style={link}>
                  <Dropdown.Item
                    icon="grid layout"
                    text="DeCal Landing"
                    style={{ color: "#000000" }}
                    onClick={this.handleMenuItemClickToggle}
                  />
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          </Link> */}

          <Menu.Item as="a">
            <Link to="/decal" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="book" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    DeCal
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>

          {/* <Link to="/events"> */}
          <Menu.Item as="a">
            <Link to="events" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="calendar" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    Events
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>
          {/* </Link> */}

          <Menu.Item as="a">
            <Link to="services" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="wrench" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    Services
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item as="a">
            <Link to="/blog" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="pencil" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    Blog
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item as="a">
            <Link to="/joinus" onClick={this.handleSettingVisibleToFalse}>
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="heart" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    join us
                  </div>
                </div>
              </div>
            </Link>
          </Menu.Item>

          <Menu.Item as="a">
            <a
              href="https://floating-tor-01392-a251bb952f37.herokuapp.com/"
              onClick={this.handleSettingVisibleToFalse}
            >
              <div style={{ marginTop: "2vw", marginBottom: "2vw" }}>
                <div>
                  <div
                    style={{ fontSize: "5vw", color: "#8CD6D1" }}
                    direction="right"
                  >
                    <Icon name="sign-in" />
                  </div>
                  <div
                    direction="left"
                    style={{
                      fontSize: "3vw",
                      marginTop: "1vw",
                      color: "#000000",
                    }}
                  >
                    Login
                  </div>
                </div>
              </div>
            </a>
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher
          dimmed={this.state.visible}
          onClick={this.handleSettingVisibleToFalse}
          // style={{ minHeight: "75vw" }}
        >
          <Segment
            basic
            style={{
              minHeight: "75vw",
              backgroundColor: "#FFFFFF",
              padding: "0px",
            }}
          >
            <Menu
              // fixed="top"
              // inverted
              style={{
                backgroundColor: backgroundColor,
                position: "relative",
                borderRadius: "0px",
                margin: "0px",
              }}
            >
              <div style={{ margin: "auto", width: "30vw" }}>
                <span>
                  <Image
                    src={logo}
                    style={{
                      position: "absolute",
                      marginTop: "-3vw",
                      display: "inline-block",
                      width: "6vw",
                    }}
                  />
                </span>
                <span
                  style={{
                    position: "absolute",
                    // top: "40%",
                    marginTop: "-1.25vw",

                    // left: "20%",
                    fontFamily: "Montserrat",
                    fontSize: "3vw",
                    fontWeight: 600,
                    lineHeight: "3vw",
                    color: titleColor,
                    display: "inline-block",
                    marginRight: "5vw",
                    marginLeft: "8vw",
                  }}
                >
                  Data Science Society @ Berkeley
                </span>
              </div>
              <Menu.Item
                // size="small"
                position="right"
                onClick={this.handleToggle}
                style={{ color: "#ffffff" }}
              >
                <Icon name="sidebar" style={{ color: barColor }} size="med" />
              </Menu.Item>

              {/* <Menu.Item position="center">
                <Image size="mini" src={logo} onClick={this.handleToggle} />
              </Menu.Item> */}
            </Menu>
            {screenContent}
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default NavBar2;
