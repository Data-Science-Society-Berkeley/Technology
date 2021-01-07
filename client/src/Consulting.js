import React, { Component } from "react";
import axios from "axios";
import {
  Image,
  Grid,
  Card,
  Header,
  Form,
  Input,
  Icon,
  Button,
  List,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomTitle from "./components/CustomTitle.js";

import paypal from "./Consulting/paypallogo.png";
import paypallogo2 from "./Consulting/paypallogo.jpg";
import metromile from "./Consulting/metromilelogo.jpg";
import monday from "./Consulting/monday.comlogo.png";
import simmer from "./Consulting/simmer.png";
import sofi from "./Consulting/sofilogo.png";
import amp from "./Consulting/amplab.png";
import berkeleycrisis from "./Consulting/berkeleycrisisinterventionteam.jpg";
import compliance from "./Consulting/complianceai-logo.png";
import edify from "./Consulting/edifyaisunset.jpg";
import fair from "./Consulting/fairvote.png";
import fti from "./Consulting/fticonsulting.jpg";
import hcup from "./Consulting/hcup.jpg";
import kiva from "./Consulting/kiva.png";
import kyocera from "./Consulting/kyocera-vector-logo.png";
import nom from "./Consulting/nommery.png";
import ongo from "./Consulting/ongoscienceinc.png";
import oust from "./Consulting/oustlabs.png";
import pegasus from "./Consulting/pegasusanalytics.png";
import venmo from "./Consulting/venmo.png";
import openride from "./Consulting/openride.png";
import down from "./Consulting/ClientTestimonials.png";
import workwus from "./Consulting/WorkWithUs.png";

import aadiraj from "./PM Headshots/aadiheadshot_byandi.jpg";
import alina from "./PM Headshots/Alina.png";
import grace from "./PM Headshots/Grace.jpg";
import andy from "./PM Headshots/HEADSHOT_ANDY.jpg";
import pooja from "./PM Headshots/Pooja.png";
import pranav from "./PM Headshots/Pranav.png";
import rick from "./PM Headshots/Rick.jpeg";
import samir from "./Leadership Headshots/samir.jpeg";
import young from "./PM Headshots/Youngli.jpg";
import avik from "./PM Headshots/Avik.jpg";
import kevinmiao from "./PM Headshots/KevinHeadShot.jpg";

import collab from "./Consulting/consultingheader-compress-min.jpg";

const generalmember = {
  fontFamily: "Montserrat",
  fontWeight: "21vw",
  lineHeight: "3vw",
  fontSize: "2.5vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "6vw",
  marginTop: "1vw",
  textAlign: "left",
};
const imagestyle = {
  height: "300px",
  maxHeight: "300px",
  width: "300px",
  maxWidth: "300px",
};

let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
};
const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "2.5vw",
  color: "#8CD6D1",
};
const overlayboxes = {
  background: "#F8F8F8",
  border: "5px solid #8CD6D1",
  boxSizing: "border-box",
  boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "26vw",
  width: "27vw",
  marginBottom: "5vw",
  marginTop: "6vw",
};

const overlayboxes2 = {
  background: "#F8F8F8",
  border: "5px solid #8CD6D1",
  boxSizing: "border-box",
  boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "26vw",
  width: "27vw",
  marginBottom: "5vw",
  marginTop: "6vw",
  marginLeft: "5vw",
};

var circleStyle = {
  padding: "1vw",
  marginLeft: "-3vw",
  marginTop: "-9vw",
  display: "inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width: "8vw",
  height: "8vw",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "43vw",
  fontSize: "5vw",
  lineHeight: "6vw",
  color: "#FFFFFF",
  textAlign: "center",
};

const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "97px",
  fontSize: "64px",
  color: "#8CD6D1",
  width: "438px",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "74px",
  marginBottom: "42px",
};

const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "44px",
  fontSize: "36px",
  color: "#8CD6D1",
  fontStyle: "normal",
  marginTop: "19px",
};
const consult = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "1.5vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "left",
  width: "80%",
  marginLeft: "4vw",
  verticalAlign: "middle",
};
const smallconsult = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "22px",
  fontSize: "18px",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  width: "915px",
  marginLeft: "49px",
};
const cardstyle = {
  width: "300px",
  // height: "800px",
  marginBottom: "10px",
  marginleft: "20vw",
  // paddingLeft: "5vw",
  textAlign: "center",
};
const link = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "80px",
};
class Consulting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  testa() {
    document.getElementById("testa").scrollIntoView();
  }
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
    let temp = [
      <Card style={cardstyle}>
        <Image src={samir} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Samir Puranik</Card.Header>
          <Card.Meta style={{ textAlign: "center" }}>
            <span className="date">Director of Consulting</span>
            {/* TODO: Remove "date" class and use regular centered text instead */}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:samir.puranik@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://linkedin.com/in/samir-puranik">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={rick} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Rick Zhang</Card.Header>
          <Card.Meta>
            <span className="date" style={{ textAlign: "center" }}>
              PM
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:rickzhang@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/rick-zhang/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={pranav} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Pranav Krishnan</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:pranavk@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/pranav-krishnan-695726108/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={alina} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Alina Trinh</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:tutrinh@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/tu-trinh/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
    ];
    let temp1 = [
      <Card style={cardstyle}>
        <Image src={kevinmiao} yle={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Kevin Miao</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="kevinmiao@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="http://www.linkedin.com/in/miaok">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={pooja} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Pooja Eega</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:pooja.eega@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="www.linkedin.com/in/pooja-eega ">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={avik} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Avik Sethia</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:aviksethia99@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/aviksethia99/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={andy} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Andy Xia</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:andyxia124@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/andy-xia-6577b6171/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
    ];
    let temp2 = [
      <Card style={cardstyle}>
        <Image src={grace} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Grace Qiu</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:graceq@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="linkedin.com/in/graqiu">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={aadiraj} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Aadiraj Batlaw</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:batlaw33375@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/aadiraj-batlaw-594785177/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={young} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Youngli Hong</Card.Header>
          <Card.Meta>
            <span className="date">PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:youngli.hong@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/youngli-hong-a0750b158/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
    ];

    return (
      <div>
        <div style={{ zIndex: "1", position: "relative" }}>
          <Image
            src={collab}
            style={{ width: "100%", height: "auto", zIndex: "2" }}
          ></Image>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              background: "rgba(140, 214, 209, 0.5)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "35%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "5vw",
                lineHeight: "6vw",
                color: "#FFFFFF",
              }}
            >
              Consulting
            </span>
            <span
              style={{
                position: "absolute",
                left: "30%",
                top: "65%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                color: "#FFFFFF",
                fontFamily: "Montserrat",
              }}
            >
              <span
                style={{
                  fontSize: "5vw",
                  lineHeight: "9vw",
                }}
              >
                5{" "}
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5vw",
                  // fontWeight: "light",
                  lineHeight: "2.5vw",
                  font: "Montserrat",
                }}
              >
                Projects per Semester
              </span>
            </span>
            <div
              style={{
                background: "rgba(140, 214, 209, 0.5)",
                zIndex: "2",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></div>
            <span
              style={{
                position: "absolute",
                left: "65%",
                top: "66%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  marginLeft: "9vw",
                  fontSize: "5vw",
                  marginTop: "10px",
                }}
              >
                6{" "}
                <span
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "2.5vw",
                    // fontWeight: "light",
                  }}
                >
                  consultants per team
                </span>
              </span>
            </span>
          </div>
        </div>
        <Grid centered>
          {CustomTitle({ title: "What We Do" })}
          <Grid.Row>
            <Grid.Row
              style={{
                color: "#000000",
                marginTop: "2vw",
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "2vw",
                fontWeight: "21vw",
                fontStyle: "normal",
                fontFamily: "Montserrat",
                marginLeft: "20vw",
                marginRight: "20vw",
              }}
            >
              We believe that the best way to learn about the innovative and
              pioneering data science techniques is to work with companies in
              industry. Our past clients include a wide range of companies from
              industry-leaders like PayPal to unicorn startups such as SoFi, all
              who have been impacted by the work Data Science Society provides.
            </Grid.Row>
          </Grid.Row>
          {CustomTitle({ title: "Our Expertise" })}
          <Card.Group centered>
            <Card style={overlayboxes}>
              <Card.Header style={generalmember}>Machine Learning</Card.Header>
              <div style={circleStyle}> 1</div>
              <List
                bulleted
                style={{
                  textAlign: "left",
                  fontSize: "1.5vw",
                  lineHeight: "2vw",
                  fontStyle: "normal",
                  marginLeft: "5vw",
                  marginTop: "4vw",
                }}
              >
                <List.Item>NLP</List.Item>
                <List.Item>Predictive Analysis</List.Item>
                <List.Item>Data Mining</List.Item>
                <List.Item>Clustering</List.Item>
                <List.Item>Modeling</List.Item>
              </List>
            </Card>
            <Card style={overlayboxes2}>
              <Card.Header style={generalmember}>
                Business Intelligence
              </Card.Header>
              <div style={circleStyle}> 2</div>
              <List
                bulleted
                style={{
                  textAlign: "left",
                  fontSize: "1.5vw",
                  lineHeight: "2vw",
                  fontStyle: "normal",
                  marginLeft: "5vw",
                  marginTop: "4vw",
                }}
              >
                <List.Item>Visualizations</List.Item>
                <List.Item>Customer Segmentation</List.Item>
                <List.Item>Price Optimization</List.Item>
                <List.Item>Customer Churn</List.Item>
                <List.Item>Operations Effeciency</List.Item>
              </List>
            </Card>
            <Card style={overlayboxes2}>
              <Card.Header style={generalmember}>
                Software Development
              </Card.Header>
              <div style={circleStyle}> 3</div>
              <List
                bulleted
                style={{
                  textAlign: "left",
                  fontSize: "1.5vw",
                  lineHeight: "2vw",
                  fontStyle: "normal",
                  marginLeft: "5vw",
                  marginTop: "4vw",
                }}
              >
                <List.Item>Warehousing</List.Item>
                <List.Item>Systems Integration</List.Item>
                <List.Item>Cloud Computing</List.Item>
                <List.Item>Front-End Development</List.Item>
                <List.Item>Back-End Development</List.Item>
              </List>
            </Card>
          </Card.Group>
          <Grid.Row>
            <div style={{ marginLeft: "8vw" }}>
              <Image
                inline
                src={down}
                style={{
                  marginLeft: "-21vw",
                  marginBottom: "-7vw",
                  height: "3vw",
                }}
              ></Image>
              <div
                onClick={this.testa}
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "43vw",
                  fontSize: "2vw",
                  lineHeight: "2.5vw",
                  textAlign: "center",
                  width: "15vw",
                  color: "#FFC54A",
                }}
              >
                Client Testimonials
              </div>
            </div>
            <div>
              <div
                style={{
                  marginLeft: "17vw",
                  zIndex: "1",
                  backgroundImage: `url(${workwus})`,
                  width: "19vw",
                  height: "10vw",
                  marginTop: "-1vw",
                }}
              ></div>
              <Link to="services">
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "43vw",
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
                    textAlign: "center",
                    width: "11vw",
                    marginTop: "-8vw",
                    marginLeft: "18vw",
                    color: "#FFC54A",
                  }}
                >
                  {" "}
                  Work with us
                </div>
              </Link>
            </div>
          </Grid.Row>
          {CustomTitle({ title: "Project Managers" })}
          <Grid.Row>
            <div
              style={{
                marginLeft: "4vw",
                marginTop: "4vw",
                marginRight: "4vw",
              }}
            >
              <Card.Group centered>{temp}</Card.Group>
              <Card.Group centered>{temp1}</Card.Group>
              <Card.Group centered>{temp2}</Card.Group>
            </div>
          </Grid.Row>
          {CustomTitle({ title: "Testimonials" })}
          <Grid.Row centered style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              inline
              style={{
                maxHeight: "12vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={simmer}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “I have never worked with students more competent than my
                analysts at DSS... The first thing that impressed me was their
                process, which was clearly documented and thorough, but not
                cumbersome on the client... My team used machine learning models
                to understand churn-user behavior and label users as churned or
                active. When COVID-19 hit mid-project, I fully anticipated these
                students to take a step back. Instead, they doubled down. My
                team exceeded the original parameters of the projects. I'm
                chomping at the bit to hire them back.” - Richard Wu, CEO,
                Simmer (YC S19)
              </div>
            </div>
          </Grid.Row>
          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              inline
              style={{
                maxHeight: "12vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={monday}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “DSS provided us with a great experiment proposal which we are
                going to execute... The DSS team has done a tremendous job over
                a course of a semester, and I would like to thank them for all
                of their hard, professional work. I highly recommend other
                organizations to collaborate with DSS and I hope I'll be able to
                work with them again in the future.” - Omry Sitner, Business
                Development Manager at monday.com
              </div>
            </div>
          </Grid.Row>

          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              style={{
                maxHeight: "12vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={paypallogo2}
            ></Image>

            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “Working with DSS gave us great and immediately actionable
                insight into a new Blockchain project we had launched. I really
                hope we can work with DSS again on our next big project!” -
                Michael Todasco, Senior Director of Innovation at PayPal
              </div>
            </div>
          </Grid.Row>

          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              style={{
                maxHeight: "12vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={edify}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “My company hired DSS to analyze data in the winter of 2019 and
                fall of 2020, and they did an amazing job. They took the project
                seriously and I greatly appreciated the professional manner in
                which they handled it. Most importantly, they gathered insights
                from the data that were incredibly valuable and helped us in
                building a stronger product. I would definitely use DSS again!”
                - Cory Linton, CEO of edify.ai
              </div>
            </div>
          </Grid.Row>
          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              style={{
                // maxHeight: "12vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={sofi}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “Our team worked with DSS to analyze and model our member
                behavior. The consultants delivered high quality presentations
                of their insights. Their metrics, visualizations, and model
                provided new perspectives for us to consider when evaluating
                engagement. The team was very professional and skilled, and they
                were a pleasure to work with.” - Michelle Leahy, Business
                Operations Manager, Data & Engineering at SoFi
              </div>
            </div>
          </Grid.Row>
          {CustomTitle({ title: "Past Clients" })}
          <Grid.Row style={{ marginTop: "3vw" }}>
            <Image.Group style={{ marginLeft: "11vw", marginRight: "11vw" }}>
              <Image
                src={paypal}
                style={{
                  marginLeft: "4vw",
                  maxWidth: "28vw",
                  height: "14vw",
                }}
              />
              <Image
                src={sofi}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={monday}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={metromile}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={simmer}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={kyocera}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={venmo}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={edify}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={compliance}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={pegasus}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={oust}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={ongo}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={kiva}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={fair}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={nom}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={fti}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={openride}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={hcup}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={amp}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={berkeleycrisis}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
            </Image.Group>
          </Grid.Row>
        </Grid>
        <div
          style={{
            fontSize: "1.5vw",
            marginLeft: "28vw",
            marginRight: "28vw",
            marginBottom: "8vw",
            marginTop: "4vw",
            lineHeight: "2vw",
            textAlign: "center",
          }}
        >
          Additionally, we offer our clients sponsorship opportunities to
          connect our clients with UC Berkeley’s top talent, from setting up
          events (Info-sessions, Career Fairs, Case Competitions, Hackathons,
          and Coffee Chats) to compiling extensive Resume Booklets.
        </div>
      </div>
    );
  }
}
export default Consulting;
