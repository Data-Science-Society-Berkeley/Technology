import React, { Component } from "react";
import axios from "axios";
import './services.css';
import {
  Image,
  Grid,
  Card,
  Header,
  Form,
  Input,
  Icon,
  Button,
  Accordion,
  Segment,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import berk from "./Decal Images/berkeleyischool-logo-alternate-blue-lg.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import decal from "./Decal Images/decalberkeleylogo 1.png";
import charlie from "./Leadership Headshots/charlie.jpg";

import serviceBanner from "."
// --------------

//import ReactDOM from 'react-dom/client';

import CarouselPage from "./components/Carousel.js";

import servicesBanner from './Services Images/servicesbanner.jpg'
import mlIcon from './Services Images/mlIcon.jpg'
import sweIcon from './Services Images/sweIcon.jpg'
import businessIcon from './Services Images/businessIcon.jpg'

//issue: the elements are manually formatted by vw from the top. (i.e. top: -32vw etc. because the image covers the text up if you don't space it downwards.)

let endpoint = "http://localhost:8080";

//`url(${servicesBanner})`
const banner = {
    //display: "inline-block",
    position: "relative",
    textAlign: "center",
    width: "100%",
    height: "auto",
    gridColumn: "span 3",
    margin: "0",
}

//try having the bannerText take up a box worth of space or smth or try editing w/o the image first, so I don't have to manually input all these measurements
const bannerText = {
    color: "white",
    fontSize: "64px",
    fontFamily: "Montserrat", 
    fontWeight: "600",
    position: "absolute",
    top: "-7vw",
    bottom: "1em",
    right: "1em",
    left: "1em",
    background: "rgba($accent, .8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    resize: "none",

    
    //textShadow: "1px 0 0 #333333, 0 -1px 0 #333333, 0 1px 0 #333333, -1px 0 0 #333333"
}

//opacity: "0",
    //transition: "opacity ese-in-out 300ms",

const bannerImg = {
    width: "100%",
    height: "auto",
    margin: "0",
    padding: "0",
    gridColumn: "span 3",
}

const whiteSpaceContainer = {
    position: "relative",
    textAlign: "center",
    width: "100%",
    height: "auto",
    gridColumn: "span 3",
}

const whiteSpaceText = {
    margin: "50px 0px 20px 0px",
    position: "relative",
    color: "black",
    fontSize: "max(3vw, 28px)",
    fontWeight: "Bold",
    fontFamily: "Montserrat", 
    gridColumn: "span 3",

}

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join() {
    console.log(14);
    let email = this.state.email;
    axios
      .post(
        endpoint + "/api/joinnow",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }
  sendData(data) {
    this.props.buttonClick(data);
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div style={{fontSize: "max(2vw, 16px)", width: "100%", height: "100%",}}>
          {/*Services Banner + Intro*/}
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", margin: "-8px -8px 1.3rem -8px", gap: "5px"}}>
              <figure style={banner}>
                  <img style={bannerImg} src={servicesBanner}></img>
                  <figcaption style={bannerText}>
                      <p>Our Services</p>
                  </figcaption>
              </figure>
          </div>

          {/*ML, Business Intel, Software Dev*/}
          <div class="card-layout">
              <div style={whiteSpaceContainer}>
                  <p style={whiteSpaceText}>WHAT WE OFFER</p>
                  <p style ={{
                      position: "relative",
                      textAlign: "left",
                      margin: "0vw 10vw 0vw 10vw",
                      }}>We partner with corporations and non-profit organizations to provide data-driven insights and actionable solutions through advanced analytical methods. We believe that the skills that we have learned in university can and should be applied to support and uplift communities equitably, not just for private tech and those who exclusively benefit from it. 
                  </p>
                  <div style={{margin:"0 0 4.3rem 0",}}></div>
              </div>
              

              <div class="card">
                  <img style={{width: "35px", margin: "3px auto 5px auto",}} src={mlIcon}></img>
                  <h3 style={{margin: "10px -1px 16px 0px", fontSize: "max(2vw, 22px)", fontWeight: "bold",}}>MACHINE LEARNING</h3>
                  <ul style={{listStyle: "none", paddingLeft: "0", textAlign: "center", fontSize:"max(1.5vw, 16px)",}}>
                      <li>Natural Language Processing</li>
                      <li>Accurate Algorithms</li>
                      <li>Predictive Analytics</li>
                      <li>Classification</li>
                      <li>Computer Vision</li>
                      <li>Data Mining</li>
                  </ul>
              </div>
              <div class="card">
                  <img style={{width: "40px", margin: "7px auto 11px auto",}} src={businessIcon}></img> 
                  <h3 style={{margin: "12px -1px 16px 0px", fontSize: "max(2vw, 22px)", fontWeight: "bold",}}>BUSINESS INTELLIGENCE</h3>
                  <ul style={{listStyle: "none", paddingLeft: "0", textAlign: "center", fontSize:"max(1.5vw, 16px)",}}>
                      <li>Customer Segmentation</li>
                      <li>Efficiency of Operations</li>
                      <li>Customer Churn</li>
                      <li>Marketing Effectiveness</li>
                      <li>Visualizations and Dashboards</li>
                      <li>Geospatial Mapping</li>
                  </ul>
              </div>
              <div class="card">
                  <img style={{width: "40px", margin: "7px auto 10px auto",}} src={sweIcon}></img> 
                  <h3 style={{margin: "12px -1px 16px 0px", fontSize: "max(2vw, 22px)", fontWeight: "bold",}}>SOFTWARE DEVELOPMENT</h3>
                  <ul style={{listStyle: "none", paddingLeft: "0", textAlign: "center", fontSize:"max(1.5vw, 16px)",}}>
                      <li>Data Warehousing</li>
                      <li>Systems Integration</li>
                      <li>Cloud Computing</li>
                      <li>Front-End Development</li>
                      <li>Back-End Development</li>
                      <li>Building End-End Data Pipelines</li>
                  </ul>
              </div>
          </div>

          {/*Carousel*/}
          <div style={{margin: "120px 0 0 0"}}></div>
          <CarouselPage />

          {/*Clients*/}
          <div style={{margin: "40px 0 0 0"}}></div>
          <div class="card-layout">
              <div style={whiteSpaceContainer}>
                  <p style={whiteSpaceText}>FEATURED PAST CLIENTS</p>
                  <div style={{margin:"0 0 3rem 0",}}></div>
              </div>
              
              {/*Row 1*/}
              <div class="card">
                  <img style={{width: "35px", margin: "3px auto 5px auto",}} src={mlIcon}></img>
                  <h3 style={{margin: "10px -1px 16px 0px", fontSize: "max(2vw, 22px)", fontWeight: "bold",}}>MACHINE LEARNING</h3>
                  <ul style={{listStyle: "none", paddingLeft: "0", textAlign: "center", fontSize:"max(1.5vw, 16px)",}}>
                      <li>Natural Language Processing</li>
                      <li>Accurate Algorithms</li>
                      <li>Predictive Analytics</li>
                      <li>Classification</li>
                      <li>Computer Vision</li>
                      <li>Data Mining</li>
                  </ul>
              </div>
              <div class="card">
                  <img style={{width: "40px", margin: "7px auto 11px auto",}} src={businessIcon}></img> 
                  <h3 style={{margin: "12px -1px 16px 0px", fontSize: "max(2vw, 22px)", fontWeight: "bold",}}>BUSINESS INTELLIGENCE</h3>
                  <ul style={{listStyle: "none", paddingLeft: "0", textAlign: "center", fontSize:"max(1.5vw, 16px)",}}>
                      <li>Customer Segmentation</li>
                      <li>Efficiency of Operations</li>
                      <li>Customer Churn</li>
                      <li>Marketing Effectiveness</li>
                      <li>Visualizations and Dashboards</li>
                      <li>Geospatial Mapping</li>
                  </ul>
              </div>
              <div class="card">
                  <img style={{width: "40px", margin: "7px auto 10px auto",}} src={sweIcon}></img> 
                  <h3 style={{margin: "12px -1px 16px 0px", fontSize: "max(2vw, 22px)", fontWeight: "bold",}}>SOFTWARE DEVELOPMENT</h3>
                  <ul style={{listStyle: "none", paddingLeft: "0", textAlign: "center", fontSize:"max(1.5vw, 16px)",}}>
                      <li>Data Warehousing</li>
                      <li>Systems Integration</li>
                      <li>Cloud Computing</li>
                      <li>Front-End Development</li>
                      <li>Back-End Development</li>
                      <li>Building End-End Data Pipelines</li>
                  </ul>
              </div>

          </div>
      </div>
    );
  }
}
export default Education;

/* 


const gridoffset = {
  marginTop: "24px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "7vw",
  fontSize: "4.5vw",
  color: "#8CD6D1",
  // width: "31vw",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "5vw",
  marginBottom: "3vw",
};

const button = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "29px",
  fontSize: "24px",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "center",
  background: "#8CD6D1",
  marginLeft: "70px",
};
const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "37px",
  color: "#8CD6D1",
};
const cardstyle = {
  width: "400px",
  // height: "800px",
  marginBottom: "10px",
  marginleft: "20px",
};
const imagestyle = {
  height: "auto",
  maxHeight: "500px",
  width: "auto",
  maxWidth: "400px",
};
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "7vw",
  fontSize: "3.5vw",
  color: "#8CD6D1",
  // width: "31vw",
  fontStyle: "normal",
  textAlign: "center",
  marginBottom: "3vw",
  marginTop: "3vw",
};
const link = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#000000",
  textAlign: "center",
  marginLeft: "5vw",
  marginRight: "5vw",
  marginBottom: "5vw",
  marginTop: "1vw",
};
const link2 = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#000000",
  textAlign: "center",
  marginLeft: "5vw",
  marginRight: "5vw",
  marginTop: "-2vw",
};

const banner = {
  position: relative,
  textAlign: center,
  color: white,
}
*/


//Old Education class
/*
constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join() {
    console.log(14);
    let email = this.state.email;
    axios
      .post(
        endpoint + "/api/joinnow",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }
  sendData(data) {
    this.props.buttonClick(data);
  }
*/

//old return
/*
return (
  <div>
    <Header style={mybigtext}> SERVICES</Header>
    <Card.Group centered style={{ marginBottom: "7vw" }}>
      <Card
        style={{
          height: "40vw",
          width: "40vw",
          border: "1px solid #000000",
          boxSizing: "borderBox",
          font: "Montserrat",
          borderRadius: "1vw",
          marginRight: "4vw",
        }}
      >
        <div style={mymidtext}>Consulting</div>
        <div style={link}>
          Consulting teams consist of 2 Project Managers, 4-6 Consultants,
          and 1 Project Mentor, all of whom sign non-disclosure agreements.
          We engage with 5 clients each semester.
          <br></br>
          <br></br>
          <strong style={{ fontWeight: "bold" }}>
            Contact us below to receive our consulting pitch slide deck and
            work samples.{" "}
          </strong>
        </div>
      </Card>
      <Card
        style={{
          height: "40vw",
          width: "40vw",
          border: "1px solid #000000",
          boxSizing: "borderBox",
          font: "Montserrat",
          borderRadius: "1vw",
        }}
      >
        <div style={mymidtext}>Sponsorships</div>
        <div style={link2}>
          We offer sponsorship opportunities for our clients. We possess a
          significant footprint on campus through our 2-unit course for 90
          students, weekly workshops open to all UC Berkeley students with
          an average of 50 attendees, and highly coveted sponsored events.
          <br /> <br />
          <strong style={{ fontWeight: "bold" }}>
            {" "}
            Contact us below to receive our sponsorship booklet.{" "}
          </strong>{" "}
        </div>
      </Card>
    </Card.Group>
  </div>
);
*/