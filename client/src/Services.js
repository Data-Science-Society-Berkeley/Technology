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

/*
import berk from "./Decal Images/berkeleyischool-logo-alternate-blue-lg.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import decal from "./Decal Images/decalberkeleylogo 1.png";
import charlie from "./Leadership Headshots/charlie.jpg";
*/
//import ReactDOM from 'react-dom/client';

import serviceBanner from "."
import CarouselPage from "./components/Carousel.js";

import servicesBanner from './Services Images/servicesbanner.jpg';
import mlIcon from './Services Images/mlIcon.jpg';
import sweIcon from './Services Images/sweIcon.jpg';
import businessIcon from './Services Images/businessIcon.jpg';

// import company logos
import mep from './Services Images/mep.png';
import medic from './Services Images/Medic.png';
import tnc from './Services Images/tnc.png'; 
import greenPeace from './Services Images/greenpeace.png';
import techsoup from './Services Images/techsoup.png';
import ctn from './Services Images/ctn.png'; 
import paypal from './Services Images/paypal.png'; 
import sofi from './Services Images/sofi.png'; 
import monday from './Services Images/monday.png'; 
import venmo from './Services Images/venmo.png'; 
import oustlabs from './Services Images/oustlabs.png'; 
import simmer from './Services Images/simmer.png'; 
import edify from './Services Images/edify.png'; 
import metromile from './Services Images/metromile.png'; 
import deepnote from './Services Images/deepnote.png'; 



//issue: the elements are manually formatted by vw from the top. (i.e. top: -32vw etc. because the image covers the textimpor up if you don't space it downwards.)

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
    fontSize: "8vw",
    fontFamily: "Montserrat", 
    fontWeight: "600",
    position: "absolute",
    top: "-7vw",
    bottom: "1em",
    right: "1em",
    left: "1em",
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
    margin: "4vw 0px 4vw 0px",
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
          <div style={{margin: "9vw 0 0 0"}}></div>
          <CarouselPage />

          {/*Clients*/}
          <div style={{margin: "4vw 0 0 0"}}></div>
          <div class="card-layout">
              <div style={whiteSpaceContainer}>
                  <p style={whiteSpaceText}>FEATURED PAST CLIENTS</p>
                  <div style={{margin:"0 0 3rem 0",}}></div>
              </div>
              
              {/*Row 1*/}
              <figure class="fading-card">
                  <img src={mep}></img>
                  <figcaption><p>MEP envisions the existence of a stable elephant population co-existing peacefully with people across the Greater Mara Ecosystem. Their collaborative approach of boots on the ground rangers and applied research has disrupted poaching in the region and combatted conflict and habitat loss.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={medic}></img>
                  <figcaption><p>Data collected by the CHT are sensitive and cannot be shared with partner organizations without signing DUAs/NDAs. Having artificial versions that resemble real datasets would allow Medic to share data with data science partners and/or publish them in open repositories. We Developed automated Python scripts converting form questions, probability distributions and data specifications into synthetic data used for pre-production testing on apps and models.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={tnc}></img>
                  <figcaption><p>Analyzed the trends and spatial distribution of water right applications by creating an interactive map using GeoPandas. Determined the most influential variables in approved applications through feature selection. Predicted the approval status of pending water right applications through the usage of a logistic regression model.</p>
                  </figcaption>
              </figure>
              
              {/*Row 2*/}
              <figure class="fading-card">
                  <img src={greenPeace}></img>
                  <figcaption><p>The lead conversion program at Greenpeace is devoted to convert leads to making donations, but they had yet to look back and do a thorough analysis on what factors make a lead more likely to convert (to both one-time and monthly donors).<br></br>This project analyzed historical, demographic and other available data points in order to identify predictors for conversion and come up with a model that assigns a likelihood to conversion score for leads.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={techsoup}></img>
                  <figcaption><p>Our goal was to examine and analyze TechSoup’s business records from the past 15 years in order to provide insight and business directions on how its operation and revenue can be improved. TechSoup requested us to create cohorts of records based on each client organization’s budget range, fiscal year, and months. Based on the cohorts we created, we visualize and project the trends using several metrics, including revenue, amount, frequency, etc.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={ctn}></img>
                  <figcaption><p>Community Tech Network (CTN) is a non-profit organization which promotes digital literacy for senior citizens through various programs. For this project we performed data analysis and developed a tool which automatically produces visualizations and insights on the efficacy of their digital literacy program in helping senior citizens cope with loneliness by connecting them with loved ones.</p>
                  </figcaption>
              </figure>

              {/*Row 3*/}
              <figure class="fading-card">
                  <img src={paypal}></img>
                  <figcaption><p>Improve employee engagement. Utilized regression models and NLP topic modeling on employee activity datasets to improve employee interaction within the existing system. Developed a Tableau dashboard for monitoring engagement and presented insights leading to the development of PayPal's Global Innovation Tournament.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={sofi}></img>
                  <figcaption><p>Created cash in, cash out and category spending visualizations for SoFi Relay. Used MCC codes to semi-manually tag 10k SoFi transactions as their proper SoFi category. Using NLP to categorize transaction using transaction amount, merchant name, description, etc.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={monday}></img>
                  <figcaption><p>Evaluate channel partners’ performance through customer satisfaction scores. Utilized NLP techniques like topic modeling and sentiment analysis. Combined most important customer satisfaction, metrics devised clear steps on how to obtain this data, and designed an experiment that Monday would be able to execute to determine if the score was an accurate indicator.</p>
                  </figcaption>
              </figure>

              {/*Row 4*/}
              <figure class="fading-card">
                  <img src={venmo}></img>
                  <figcaption><p></p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={oustlabs}></img>
                  <figcaption><p>We built a contextual AI chatbot using Rasa NLU framework, implemented end-to-end architecture, deploying in GCP Firebase, Cloud Functions, App Engine. We also implemented BERT to automate heuristic for chatbot interactive training, tested flow with Facebook Messenger and Android with XMPP server.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={simmer}></img>
                  <figcaption><p>Churn Prediction. Generated statistical modeling-ready dataset from app session data and find useful features for predicting churn. Engineered additional metrics/features for measuring user behavior. Devised a scheme for labeling users as churned or active.</p>
                  </figcaption>
              </figure>

              {/*Row 5*/}
              <figure class="fading-card">
                  <img src={edify}></img>
                  <figcaption><p>Predict whether or not a trucking trip would be vulnerable to a safety incident. Researched and implemented different models trained for this task including neural networks, random forests, and autoencoders as well as techniques to handle the class imbalance such as SMOTE and Near Miss. Compiled results and compared the different models based on precision and recall.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={metromile}></img>
                  <figcaption><p>Set up a foundation for Metromile to be able to explore models that are cannot be used in production for comparative purposes. Gathered relevant usage based data. Appended weather and accident rate data based on the time and location of trips. Performed baseline modeling, generated a final model-ready dataset for Metromile to use for exploratory purposes and identified avenues through which Metromile could take the explorations to commercial use.</p>
                  </figcaption>
              </figure>
              <figure class="fading-card">
                  <img src={deepnote}></img>
                  <figcaption><p>We used anonymized data of Deepnote’s users, which consists of various actions they took in their first days of using the product, as well as which users were retained, and for how long. Using this data, we used machine learning to predict which actions are most correlated with user retention, as well as which are indicative of user churning.</p>
                  </figcaption>
              </figure>
          </div>

          {/*Directors*/}
          <u style={{position: "relative",
            textAlign: "center",
            width: "100%",
            height: "auto",
            display: "block",
            margin: "8vw 0 2vw 0",
            position: "relative",
            color: "black",
            fontSize: "max(3vw, 28px)",
            fontWeight: "Bold",
            fontFamily: "Montserrat", 
            }}>Want to work with us?</u>
          
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