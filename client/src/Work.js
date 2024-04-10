import React, { Component } from "react";
import axios from "axios";
import request from "superagent";
import {
  Image,
  Grid,
  Card,
  Header,
  Form,
  Input,
  Icon,
  Button,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import event5 from "./Events/forumsp23.jpg";
import event4 from "./Events/dssdatathon-img.jpg";
import event3 from "./Events/fairfa23.jpg";
import event2 from "./Events/operationanalytics-img.jpg";
import event1 from "./Events/datathonfa23.jpg";
import event6 from "./Events/startupcareerfair.jpeg";

import linesOne from "./Homepage/linesOne.png";

const localizer = momentLocalizer(moment);
let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Lato",
};

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightred",
    },
  });
const bluediv = {
  width: "38vw",
  height: "1vw",
  background: "#8CD6D1",
};
const rightcol = {
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "1.7vw",
  lineHeight: "2.2vw",
  color: "#000000",
  textAlign: "left",
  marginRight: "20%",
  marginLeft: "14%",
};
const mybigtext = {
  fontFamily: "Lato",
  fontWeight: "normal",
  lineHeight: "7vw",
  fontSize: "4.5vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "5vw",
  marginBottom: "1vw",
};

const mymidtext = {
  fontFamily: "Lato",
  fontWeight: 300,
  lineHeight: "4vw",
  fontSize: "3vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "2.5vw",
  marginTop: "1vw",
};
const link = {
  fontFamily: "Lato",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "1.5vw",
  color: "#8CD6D1",
  textAlign: "center",
  marginTop: "2.5vw",
};
class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      events: [],
    };
    this.join = this.join.bind(this);
  }
  componentDidMount = () => {
    this.getEvents();
  };
  getEvents() {
    let CALENDAR_ID =
      "c_9crnfpiudugdctfhkrq2abdttc%40group.calendar.google.com";
    request
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${"AIzaSyBoBAcwgo80fBv7A6DQvBWGxpzVuf0AJ1E"}`
      )
      .end((err, resp) => {
        if (!err) {
          const events = [];
          JSON.parse(resp.text).items.map((event) => {
            events.push({
              start: event.start.dateTime,
              end: event.end.dateTime,
              title: event.summary,
            });
          });
          this.setState({ events: events });
        }
      });
  }

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
    return (
      <div style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 10%, #FFFFFF 30%, #EFFFF0 70%, #DAFFFB 100%)",
      }}>
        <Header style={mybigtext}> <br></br>EVENTS </Header>
        
        <div style={{ textAlign: "center", marginTop: "4vw" }}>
          <div style={{ marginBottom: "4vw" }}>
            <div style={mymidtext}> Upcoming Events </div>
          </div>

          <Grid>
            <Grid.Row
              style={{
                width: "100vw",
                marginLeft: "6vw",
                marginBottom: "2vw",
              }}
            >
              <Grid.Column style={{ width: "66vw" }}>
                <Image
                  src={event6}
                  style={{ width: "66vw", height: "80%" }}
                ></Image>
                {/* <Image
                  src={event2}
                  style={{ width: "46vw", height: "18vw" }}
                ></Image> */}
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong>
                    Start-up Career Fair{" "}
                  </strong>
                  <br />
                  Monday, March 18th, 2024
                  <br />
                  2:00 PM - 5:00 PM <br />
                  East Pauley Ballroom
                  <br />
                  <br />
                  Are you still looking for an internship this summer or full-time role? 💼

                  Come out to the Start-Up Career Fair on March 18th at East Pauley Ballroom in MLK from 2-5pm to meet some super cool rising startups and learn about their various STEM and software opportunities. This is a great in person networking opportunity for those looking for a job, so make sure to bring your resume! 👩‍💻👨‍💻
                  <br />
                </div>
              </Grid.Column>
            </Grid.Row>
            {/* <div style={bluediv}></div> */}
            
            <div class="footerSpacer" style={{
              height: "50vw",
            }}>
              <img src={linesOne} style={{
                position: "absolute",
                width: "170vw",
                left: "-30vw",
                marginTop: "15vw",
              }}></img>
            </div>
          </Grid>

          <div style={{ marginBottom: "4vw" }}>
            <div style={mymidtext}> Past Events </div>
          </div>

          <Grid>
            <Grid.Row
              style={{
                width: "100vw",
                marginLeft: "6vw",
                marginBottom: "2vw",
              }}
            >
              <Grid.Column style={{ width: "66vw" }}>
                <Image
                  src={event1}
                  style={{ width: "66vw", height: "80%" }}
                ></Image>
                {/* <Image
                  src={event2}
                  style={{ width: "46vw", height: "18vw" }}
                ></Image> */}
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong>
                    5th Annual Datathon for Social Good: Healthcare & Public Health{" "}
                  </strong>
                  <br />
                  November 2023, Cory & Soda Hall
                  <br />
                  This year’s Datathon theme was An Exploration into Healthcare and Public Health. 
                  <br />
                  <br />
                  - 200+ participants 
                  <br />
                  - Sponsored by SingleStore, Primerica, C.LIGHT Technologies
                  <br />
                  - Partners include Doordash and CalData
                  <br />
                  - Co-hosted with SAAS, BDAB, CSUA
                  <br />
                </div>
              </Grid.Column>
            </Grid.Row>
            {/* <div style={bluediv}></div> */}
            <Grid.Row
              style={{
                width: "47vw",
                marginLeft: "6vw",
                marginBottom: "3vw",
                marginTop: "5vw",
              }}
            >
              <Grid.Column style={{ width: "66vw" }}>
                <Image
                  src={event3}
                  style={{ width: "66vw", height: "80%" }}
                ></Image>
                {/* <Image
                  src={event4}
                  style={{ width: "46vw", height: "22vw" }}
                ></Image> */}
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong> World of Data Career Fair</strong> 
                  <br />
                  September 2023, Pauley Ballroom
                  <br />
                  World of Data is an in-person, data science-focused dedicated to showcasing the interdisciplinary applications of data science across various industries. 
                  The event offers networking and recruiting opportunities for data science/machine learning and full-time positions for Summer 2024 and beyond. 
                  <br />
                  <br />
                  - Companies in attendance: OpenCV, Kaiser Permanente, American Heart Association, Uniphore, Hayden AI, and Plume Design!
                  <br />
                  - Co-hosted with SAAS, BDAB
                  <br />
                </div>
              </Grid.Column>
            </Grid.Row>
            {/* <div style={bluediv}></div> */}
            <Grid.Row
              style={{
                width: "66vw",
                marginLeft: "6vw",
                height: "18vw",
                marginTop: "8vw",
                marginBottom: "5vw",
              }}
            >
              <Grid.Column style={{ width: "66vw" }}>
                <Image
                  src={event5}
                  style={{ width: "66vw", height: "80%" }}
                ></Image>
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong>5th Annual Data Science Forum: Tech for Social Good</strong>
                  <br />
                  April 2023, Dwinelle Hall
                  <br />
                  This year’s Forum theme was Tech for Social Good — the intersection of data and social impact. 
                  The goal of the event was to educate the UC Berkeley community on 
                  how to carry social good values in tech work and/or use tech to drive solutions to societal issues. 
                  To show that this intersection comes in a spectrum, speakers came from a wide variety of different 
                  industries — NPO, big tech, startup, research, government, and so on. The event started off with 4 speaker presentations, then broke off to a lunch break before 
                  reconvening again for a speaker panel. Other than learning, the event provided other benefits such as resume drops, networking sessions, free food, 
                  and also gave away a raffle prize of a JBL speaker!
                  <br />
                  <br />
                  - 400+ audience 
                  <br />
                  - 10 professionals in attendance
                  <br />
                  - Co-hosted with SAAS, BDAB
                  <br />
                </div>
              </Grid.Column>
            </Grid.Row>
            <div class="footerSpacer" style={{
              height: "50vw",
            }}>
              <img src={linesOne} style={{
                position: "absolute",
                width: "170vw",
                left: "-30vw",
                marginTop: "15vw",
              }}></img>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Work;