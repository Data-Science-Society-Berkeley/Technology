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
import berk from "./Decal Images/berkeleyischool-logo-alternate-blue-lg.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import decal from "./Decal Images/decalberkeleylogo 1.png";
import kate from "./Leadership Headshots/kate.jpg";
import uma from "./Leadership Headshots/uma.png";
import gaya from "./Leadership Headshots/gayatri.png";
import uppercorner from "./landing/WebsiteLandingPage-2.png";
import lowercorner from "./landing/WebsiteLandingPage-2rotate.png";

import steph from "./Leadership Headshots/steph.jpg";
let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: "550",
  lineHeight: "7vw",
  fontSize: "4.5vw",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "23vw",
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
const cardstyle = {
  width: "28vw",
  maxHeight: "56vw",
  // height: "800px",
  marginBottom: "1vw",
  marginleft: "2vw",
};
const imagestyle = {
  height: "28vw",
  maxHeight: "28vw",
  width: "28vw",
  maxWidth: "28vw",
};
const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "3vw",
  lineHeight: "3vw",
  color: "#8CD6D1",
  marginTop: ".5vw",
};

const roleStyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "2vw",
  lineHeight: "2vw",
  color: "#000000",
};
const mymidtext = {
  // marginBottom: "3vw",
  // marginLeft: "5vw",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "2vw",
  color: "#8CD6D1",
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
  loadTable() {
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
              <b>Lecture</b>
            </Table.HeaderCell>
            <Table.HeaderCell class="col-md-2">
              <b>Resources</b>
            </Table.HeaderCell>
            <Table.HeaderCell class="col-md-2">
              <b>Lecturers</b>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body id="wk1">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              1
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 9/14/20</Table.Cell>
            <Table.Cell>Welcome, Logistics & Python Bootcamp</Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=wCp9sKLPqIQ">
                Lecture 1
              </a>
            </Table.Cell>
            <Table.Cell>Kate</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk2">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              2
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 9/21/20</Table.Cell>
            <Table.Cell>
              Data Manipulation and Wrangling: Pandas Part 1
            </Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=TgPONLGK1-4">
                Lecture 2
              </a>
            </Table.Cell>
            <Table.Cell>Siddhant, Elton</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk3">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              3
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 9/28/20</Table.Cell>
            <Table.Cell>
              Data Manipulation and Wrangling: Pandas Part 2
            </Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=a-5kJuaku_g&t=413s">
                Lecture 3
              </a>
            </Table.Cell>
            <Table.Cell>Dhruv, Spencer</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk4">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              4
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 10/05/20</Table.Cell>
            <Table.Cell>TA Panel</Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=cNhIUrEjjFc">
                {" "}
                TA Panel{" "}
              </a>
            </Table.Cell>
            <Table.Cell>All</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk5">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              5
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 10/12/20</Table.Cell>
            <Table.Cell>Linear Regression</Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=KcOhWEf68vU">
                Lecture 5
              </a>
            </Table.Cell>
            <Table.Cell>Tanu, Siddhant</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk6">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              6
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 10/19/20</Table.Cell>
            <Table.Cell>Hypothesis Testing + A/B Testing</Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=4F10-82gO9Y">
                Lecture 6
              </a>
            </Table.Cell>
            <Table.Cell>Spencer, Saeed</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk7">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              7
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 10/26/20</Table.Cell>
            <Table.Cell>SQL + Spreadsheets</Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=v2DcJ_W3MsI">
                Lecture 7
              </a>
            </Table.Cell>
            <Table.Cell>Jared, Jae Hee</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk8">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              8
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 11/2/20</Table.Cell>
            <Table.Cell>
              Matplotlib + Seaborn In-Depth (Data Visualizations)
            </Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=gpXHJ7mmUZo">
                Lecture 8
              </a>
            </Table.Cell>
            <Table.Cell>Elton, Dhruv, Jae Hee</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Body id="wk9">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              9
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 11/9/20</Table.Cell>
            <Table.Cell>Guest Lecture: Data Arts</Table.Cell>
            <Table.Cell>
              <a href="https://www.youtube.com/watch?v=ZfrKyE1VSTU">
                Lecture 9
              </a>
            </Table.Cell>
            <Table.Cell>Professor Greg Niemeyer</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk10">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              10
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 11/16/20</Table.Cell>
            <Table.Cell>Tableau + Power BI</Table.Cell>
            <Table.Cell>
              <a href="https://youtu.be/torqQLIPYBE">
                Lecture 10
              </a>
            </Table.Cell>
            <Table.Cell>Tanu, Jasmine</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Body id="wk11">
          <Table.Row>
            <Table.Cell rowspan="2" class="center">
              11
              <br />
            </Table.Cell>
            <Table.Cell class="center">Monday, 11/23/20</Table.Cell>
            <Table.Cell>Data Storytelling</Table.Cell>
            <Table.Cell>
              <a href="https://youtu.be/YyEDKkskTPQ">
                Lecture 11
              </a>
            </Table.Cell>
            <Table.Cell>Dhruv, Siddhant</Table.Cell>
          </Table.Row>
        </Table.Body>
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
      <div>
        <Grid style={{ marginRight: "5vw" }}>
        <Grid.Row style={{ marginLeft: "5vw" }}>
            <Image
              src={uppercorner}
              style={{
                height: "20vw",
                width: "25vw",
                marginLeft: "100vw"
              }}
            ></Image>
          </Grid.Row>
          <Grid.Row>
            <Header style={mybigtext}>
              {" "}
              DeCal: Essential Tools for Data Science{" "}
            </Header>
          </Grid.Row>
          <Grid.Row style={{ marginLeft: "5vw" }}>
            <Image
              src={lowercorner}
              style={{
                height: "20vw",
                width: "25vw",
              }}
            ></Image>
          </Grid.Row>

          <div
            style={{
              marginBottom: "4vw",
              marginLeft: "5vw",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "1.8vw",
              lineHeight: "2.1vw",
            }}
          >
            <Grid.Row>
              <div style={{ marginTop: "4vw" }}>
                Welcome to Data Science Society at Berkeley&rsquo;s very own
                DeCal: Essential Tools for Data Scientists! This course is
                geared towards exposing students to essential data science
                skills that are demanded in industry and are meant to be taken
                as a follow-up or alongside Data 8. The course covers the bits
                of data science and machine learning that aren’t traditionally
                taught in the classroom like advanced Pandas and Seaborn, and
                visualization dashboards that will challenge you, sharpen your
                skills and elevate you in the internship game.
                <br />
                <br />
                In this course, you will learn everything you need to know from
                the ground up from an introduction on Python, to software like
                Excel and Tableau, to other essential skills through a
                personalized data science project that includes data cleaning,
                visualization, statistical analysis, and machine learning.
              </div>
            </Grid.Row>

            <div style={{ marginTop: "4vw" }}>
              <Grid.Row>
                <Header>
                  <b style={mymidtext}>Logistics</b>
                </Header>
                <List>
                  <List.Item>
                    <b>Time</b>: Mondays, 6:30 - 8:30 PM
                  </List.Item>
                  <List.Item>
                    <b>Email</b>:{" "}
                    <a href="mailto: decal@dss.berkeley.edu">
                      {" "}
                      <b> decal@dss.berkeley.edu </b>{" "}
                    </a>
                  </List.Item>
                  <List.Item>
                    <b>Office Hours</b>:{" "}
                    <a href="https://calendar.google.com/calendar?cid=YmVya2VsZXkuZWR1X21hdjJqYjcxODloNTJnN3Boc2xtZmU0ZTBvQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">
                      {" "}
                      <b>Calendar</b>
                    </a>
                  </List.Item>
                </List>
              </Grid.Row>
              <Grid.Row>
                <Header style={{ marginTop: "4vw" }}>
                  <b style={mymidtext}> Prerequisites</b>
                </Header>
                <div>
                  There are no formal prerequisites for this course. It is
                  recommended to have some level of basic programming experience
                  in Python, but not required. We want you to learn as much as
                  possible and will help you get up to speed quickly!
                </div>
                <Header style={{ marginTop: "4vw" }}>
                  <b style={mymidtext}> Grading</b>
                </Header>
                <List>
                  <List.Item>Attendance: 20% </List.Item>
                  <List.Item>Weekly Assignments: 80% </List.Item>
                </List>
                <Header style={{ 
                  marginTop: "4vw" ,
                  marginBottom: "2vw"}}>
                  <b style={mymidtext}> Schedule</b>
                </Header>
              </Grid.Row>
              <Grid.Row style={{ marginRight: "5vw" }}>
                {this.loadTable()}
              </Grid.Row>
            </div>
            <Grid.Row style={{ marginTop: "6vw" }}>
              <Header style={link}> Course Staff</Header>
              <Card.Group centered style={{ marginTop: "56px" }}>
                <Card style={cardstyle}>
                  {" "}
                  <Image style={imagestyle} src={kate} />
                  <Card.Content>
                    <Card.Header style={textstyle}>Kate Miller</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={{ roleStyle }}>Director of DeCal</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="mailto:katevmiller@berkeley.edu">
                      <Icon name="mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/kate-miller-7a884719b/">
                      <Icon name="linkedin" />
                    </a>
                  </Card.Content>
                </Card>
                <Card style={cardstyle}>
                  {" "}
                  <Image style={imagestyle} src={uma} />
                  <Card.Content>
                    <Card.Header style={textstyle}>
                      Uma Krishnaswamy
                    </Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={{ roleStyle }}>Director of DeCal</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="mailto:umakrishnaswamy@berkeley.edu">
                      <Icon name="mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/umakrishnaswamy/">
                      <Icon name="linkedin" />
                    </a>
                  </Card.Content>
                </Card>
                <Card style={cardstyle}>
                  {" "}
                  <Image style={imagestyle} src={gaya} />
                  <Card.Content>
                    <Card.Header style={textstyle}>Gayatri Babel</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={{ roleStyle }}>Director of DeCal</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <a href="mailto:gbabel@berkeley.edu">
                      <Icon name="mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/gayatri-babel/">
                      <Icon name="linkedin" />
                    </a>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
          </div>
        </Grid>
      </div>
    );
  }
}
export default DecalLearn;
