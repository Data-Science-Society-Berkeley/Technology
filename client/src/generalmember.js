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
  Table,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomTitle from "./components/CustomTitle.js";

import berk from "./Decal Images/berkeleyischool-logo-alternate-blue-lg.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import roshan from "./Leadership Headshots/roshan.jpg";
import alleanna from "./Leadership Headshots/alleanna2.jpeg";
import steph from "./Leadership Headshots/steph.jpg";

let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

// Lecture list
// Add each lecture entry in the identical js object format inside this array
const lectures = [
  {
    week: 1,
    date: new Date("9/21/2020 PST"),
    name: "Project Workflow & Deepnote",
    link: "https://youtu.be/WtehoucrTyQ",
  },
  {
    week: 2,
    date: new Date("9/28/2020 PST"),
    name: "Data Mining, Data Cleaning, Feature Engineering",
    link: "https://youtu.be/UMn-m7mOnKQ",
  },
  {
    week: 3,
    date: new Date("10/5/2020 PST"),
    name: "Modelling and Statistical Tests",
    link: "https://youtu.be/aTmfBmKRmsY",
  },
  {
    week: 4,
    date: new Date("10/12/2020 PST"),
    name: "More Modeling and Drawing Conclusions",
    link: "https://youtu.be/IbITdVOkJLE",
  },
  {
    week: 5,
    date: new Date("10/19/2020 PST"),
    name: "Visualizations",
    link: "https://youtu.be/gSgw5dkgF8I",
  },
];

// Styles
const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "7vw",
  fontSize: "4.5vw",
  color: "#8CD6D1",
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
  textAlign: "center",
};
const imagestyle = {
  height: "400px",
  maxHeight: "400px",
  width: "400px",
  maxWidth: "400px",
};
const mymidtext = {
  marginBottom: "3.5vw",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "1.5vw",
  lineHeight: "2vw",
};
const link = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "6vw",
  fontSize: "3vw",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
};
class DecalLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  // Generate Table based on lectures list
  loadTable(props) {
    const lectures = props.lectures;
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "long",
    };
    const tableRows = lectures.map((c) => (
      <Table.Row>
        <Table.Cell>{c.week}</Table.Cell>
        <Table.Cell>
          {new Intl.DateTimeFormat("default", options).format(c.date)}
        </Table.Cell>
        <Table.Cell>{c.name}</Table.Cell>
        <Table.Cell>
          <a href={c.link}>{c.link}</a>
        </Table.Cell>
      </Table.Row>
    ));

    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell class="col-md-1 center">
              <b>Week</b>
            </Table.HeaderCell>
            <Table.HeaderCell class="col-md-1">
              <b>Date</b>
            </Table.HeaderCell>
            <Table.HeaderCell class="col-md-3">
              <b>Topic</b>
            </Table.HeaderCell>
            <Table.HeaderCell class="col-md-3">
              <b>YouTube Link</b>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>
    );
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
      <Grid>
        <Grid.Row>
          <Header style={mybigtext}>
            {" "}
            General Membership Program | Fall 2020
          </Header>
        </Grid.Row>

        <div
          style={{
            marginBottom: "3.5vw",
            marginLeft: "5vw",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "1.5vw",
            lineHeight: "2vw",
            marginRight: "5vw",
          }}
        >
          <Grid.Row>
            <div>
              <b style={mymidtext}>General Membership</b> | Fall 2020{" "}
            </div>
          </Grid.Row>
          <Grid.Row>
            <div style={{ marginTop: "4vw" }}>
              Welcome to Data Science Society at Berkeley&rsquo;s very own
              General Member Program: Essential Tools for Data Scientists! This
              course is geared towards exposing students to essential data
              science skills that are demanded in industry and are meant to be
              taken as a follow-up or alongside Data 8. The course covers the
              bits of data science and machine learning that aren’t
              traditionally taught in the classroom like advanced Pandas and
              Seaborn, and visualization dashboards that will challenge you,
              sharpen your skills and elevate you in the internship game.
              <br />
              <br />
              In this course, you will learn everything you need to know from
              the ground up from an introduction on Python, to software like
              Excel and Tableau, to other essential skills through a
              personalized data science project that includes data cleaning,
              visualization, statistical analysis, and machine learning.
            </div>
          </Grid.Row>

          <div>
            <Grid.Row style={{ marginTop: "6vw" }}>
              <Header
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "1.5vw",
                  lineHeight: "2vw",
                  marginBottom: "4vw",
                }}
              >
                Schedule
              </Header>
            </Grid.Row>
            <Grid.Row style={{ marginRight: "5vw" }}>
              {this.loadTable({ lectures: lectures })}
            </Grid.Row>
          </div>
          <Grid.Row style={{ marginTop: "6vw", marginBottom: "4vw" }}>
            <Header style={link}>General Member Course Staff</Header>
          </Grid.Row>
          <Grid.Row>
            <Card.Group centered>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={alleanna} />
                <Card.Content>
                  <Card.Header style={textstyle}>Alleanna Clark</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Director of Academic Development
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:alleanna@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={steph} />
                <Card.Content>
                  <Card.Header style={textstyle}>Stephanie Lu</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Director of Academic Development
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:stephanie.lu@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={roshan} />
                <Card.Content>
                  <Card.Header style={textstyle}>Roshan Lodha</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Director of Academic Development
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:roshanlodha@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="http://linkedin.com/in/roshanlodha">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
        </div>
      </Grid>
    );
  }
}
export default DecalLearn;
