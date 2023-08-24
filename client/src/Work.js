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
import event5 from "./Events/quoratechtalk.jpg";
import event4 from "./Events/dssdatathon-img.jpg";
import event3 from "./Events/dssdatathon-crop.jpg";
import event2 from "./Events/operationanalytics-img.jpg";
import event1 from "./Events/operationanalyticseventbannerdss.jpg";

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
        <Header style={mybigtext}> EVENTS </Header>
        <Header style={mymidtext}> External Calendar </Header>
        <a href="https://calendar.google.com/calendar?cid=Y185Y3JuZnBpdWR1Z2RjdGZoa3JxMmFiZHR0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
          <Button
            style={{
              background: "#FBFBFB",
              border: "border: 3px solid #E5E5E5",
              color: "#8CD6D1",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1.5vw",
              lineHeight: "1.5vw",
              marginLeft: "96vw",
              marginBottom: "2vw",
            }}
          >
            Subscribe to this Calendar
          </Button>
        </a>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          events={this.state.events}
          components={{
            timeSlotWrapper: ColoredDateCellWrapper,
          }}
          style={{ marginLeft: "14vw", height: "57vw", marginRight: "14vw" }}
        />

        <div style={link}>
          Subscribe to our external calendar above to keep up to date on all of
          our public events via Google Calendar!{" "}
        </div>
        <div style={{ textAlign: "center", marginTop: "8vw" }}>
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
                  style={{ width: "66vw", height: "auto" }}
                ></Image>
                {/* <Image
                  src={event2}
                  style={{ width: "46vw", height: "18vw" }}
                ></Image> */}
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong>
                    Operation: Analytics, a Tech & Business Industry Speaker
                    Series{" "}
                  </strong>
                  <br />
                  Thursday, February 27, 2020
                  <br />
                  6:00 PM - 8:30 PM <br />
                  C230 Cheit Hall
                  <br />
                  <br />
                  A series of tech talks by product scientists, data scientists,
                  operations managers, and project managers from a variety of
                  industry-leading companies (Google, Amazon, Uber, Indeed,
                  Nike, Eaze, Goodera).
                  <br />
                  <br />
                  - 100+ in attendance! <br />
                  - 8 industry speakers
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
                  style={{ width: "66vw", height: "auto" }}
                ></Image>
                {/* <Image
                  src={event4}
                  style={{ width: "46vw", height: "22vw" }}
                ></Image> */}
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong> DSS Datathon for Social Good</strong> <br />
                  Start: Friday, Nov 8, 2019 at 5:00 PM <br />
                  End: Saturday, Nov 9, 2019 at 5:00 PM <br />
                  Chou Hall N500, Faculty Building F320 <br />
                  <br />
                  Come participate in UC Berkeley’s first social-good focused
                  datathon hosted by IBM, Data Science Society and Latinx
                  Business Club, to create intriguing visualizations to
                  highlight a problem in the Bay Area, or come up with a
                  solution to an existing problem. <br />
                  <br />
                  Sponsored by IBM. Co-Hosted with Latinx Business Club. <br />
                  <br />- 16 projects presented and judged by the end of
                  competition! <br />
                  - 215+ attendees with 3 team winners! <br />
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
                  style={{ width: "66vw", height: "auto" }}
                ></Image>
              </Grid.Column>
              <Grid.Column width={7}>
                <div style={rightcol}>
                  <strong>Quora Tech Talk </strong>
                  <br />
                  Thursday, September 12, 2019 <br />
                  8:00 PM
                  <br />
                  Hearst Field Annex A1
                  <br />
                  <br />
                  Come learn about Internship / New Grad opportunities at Quora
                  while also listening to Data Scientists talk about how they
                  use data at the company!
                  <br />
                  <br />
                  - 180+ in attendance ; 870+ Facebook RSVPs
                  <br />
                  - Follow-up Mountain View headquarters tour + lunch with Quora
                  Data Science team for DSS members
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
