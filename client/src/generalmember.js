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
import proj1 from "./GM Proj Images/workforce-housing.png";
import proj2 from "./GM Proj Images/word-complexity.jpg";
import proj3 from "./GM Proj Images/forestfire.jpg";
import proj4 from "./GM Proj Images/education.jpg";
import proj5 from "./GM Proj Images/stock_project_gm.jpg";
import proj6 from "./GM Proj Images/fake_news_gm.jpg";
import squiggly1 from "./Acadev Images/squiggly1.png";
import squiggly1_rotate from "./Acadev Images/squiggly1_rotate.png";
import CustomTitleBlack from "./components/CustomTitleBlack.js";
import gmLine2 from "./Acadev Images/gmLine2.png";
import schedLine from "./Acadev Images/schedLine.png";
import projLine from "./Acadev Images/projLine.png";
import light from "./GM Proj Images/lightbulb.png";
import upright from "./Acadev Images/upRight.png";
import bottomleft from "./Acadev Images/bottomLeft.png";
import james from "./Leadership Headshots/JamesG.jpg"
import steven from "./Leadership Headshots/Steven2.jpg"
import joseph from "./Leadership Headshots/Joseph.jpg"

import mentors from "./Decal Images/acadevmentors_fall22.png";
import acadevdirs from "./Acadev Images/acadevdirs.jpeg";

import linesTwo from "./Homepage/linesTwo.png";


let endpoint = "http://localhost:8080";
const gridoffset = {
  margin: "auto",
  fontFamily: "Lato",
};

// Lecture list
// Add each lecture entry in the identical js object format inside this array
/*const lectures = [
  {
    week: 1,
    date: new Date("9/21/2021 PST"),
    name: "Welcome, Icebreakers, Starting Your Project",
    link: "https://tinyurl.com/4unszu42",
  }
];*/

// Styles
const mybigtext = {
  fontFamily: "Lato",
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
  fontFamily: "Lato",
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
  // height: "800px",
  marginBottom: "1vw",
  marginleft: "10vw",
};
const imagestyle = {
  maxHeight: "35w",
  width: "28vw",
  maxWidth: "28vw",
};
const textstyle = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: "3vw",
  lineHeight: "3vw",
  color: "#8CD6D1",
  marginTop: ".5vw",
};

const roleStyle = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: "2vw",
  lineHeight: "2vw",
  color: "#777777",
};
const mymidtext = {
  marginBottom: "3.5vw",
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "1.5vw",
  lineHeight: "2vw",
};
const link = {
  fontFamily: "Lato",
  fontWeight: 300,
  lineHeight: "6vw",
  fontSize: "3vw",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
};
const headTextStyle = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: "2vw",
  lineHeight: "2vw",
  color: "#000000",
  textAlign: "center",
  //fontWeight: "bold",
};
const inTextLink = {
  fontFamily: "Lato",
  fontWeight: "bold",
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",

};
const titletext = {
  fontFamily: "Lato",
  fontWeight: "bold",
  lineHeight: "3vw",
  fontSize: "3vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "20vw",
  //marginBottom: "3vw",

};

const aboutstats = {
  fontFamily: "Lato",
  fontWeight: "bold",
  fontSize: "4.8vw",
  lineHeight: "3vw",
  width: "10vw",
  height: "3vw",
  color: "#FFC54A",
  position: "absolute",
  top: "20%",
  left: "100%",
  textAlign: "center",
  marginBottom: "3vw",
  transform: "translate(-50%, -50%)"
};

const aboutstats2 = {
  fontFamily: "Lato",
  fontWeight: "bold",
  fontSize: "4.8vw",
  color: "#FFC54A",
  marginLeft: "14vw",
  textAlign: "center",
  position: "relative",
};

const aboutstats3 = {
  fontFamily: "Lato",
  fontWeight: "normal",
  fontSize: "2vw",
  lineHeight: "3vw",
  width: "20vw",
  height: "3vw",
  color: "black",
  position: "relative",
  top: "20%",
  left: "80%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  marginTop: "65px",
  marginLeft: "35px"
};

const aboutstats4 = {
  fontFamily: "Lato",
  fontWeight: "normal",
  fontSize: "2vw",
  color: "000000",
  left: "0vw",
  textAlign: "center",
  position: "relative",
};


class DecalLearn extends Component {
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

        {/*<div>
          <Image src={upright}
          style= {{
            right:"4vw",
            top:"12vw",
            position: "absolute",
            height: "18vw",
            maxHeight: "18vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
        </div>*/}
        
        {/*<div>
          <Image src={bottomleft}
          style= {{
            left:"4vw",
            top:"19vw",
            position: "relative",
            height: "18vw",
            maxHeight: "18vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
        </div>*/}

        <div>
          <Image style={{position: 'relative',
          top: "0vw",
          // marginTop: '3vw',
          left: "0vw",
          right: "30vw",
          // margin: 'auto',
          // margintop: "10vw",
          // marginBottom: '0vw',
          // height: "70vw",
          // maxHeight: "80vw",
          width: "100%",
          maxWidth: "100%",
          }}
          src={mentors}></Image>
        </div>
        <div class="wrapper" style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FDFFF9 33%, #EBF8E1 66%, #DAFFFB 100%)",
        }}>
          <Grid centered style={gridoffset}>
            <Grid.Row
              width={16}
              columns={5}
              style={{
                //backgroundColor: "#8CD6D1",
                width: "100%",
                height: "7vw",
                marginTop: "3vw",
                position: "relative",
              }}>
              <div
                style={{
                top:"2vw",
                //width: "100%",
                //height: "auto",
                textAlign: "start",
                color: "black",
                position: "relative",
                fontFamily: "Lato",
                fontWeight: "bold",
                fontSize: "6vw",
                lineHeight: "6vw",
                width: "95vw",
                position: "relative",
                }}>
                DeCal
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                /*
                top:"25vw",
                width: "100%",
                height: "auto",
                textAlign: "center",
                color: "black",
                marginTop: "30vw",
                margin: 'auto',
                marginBottom:'5vw',
                position: "absolute",
                transform: "translate(-50%, -50%)",
                fontFamily: "Lato",
                fontSize: "2vw",
                lineHeight: "6vw",
                fontWeight: "bold"*/
                marginTop: "1vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2vw",
                fontWeight: "21.5vw",
                position: "relative",
              }}>Data 198: <i>Intro to Real World Data Science</i> <a href = "https://jegeronimo.github.io/dss-data-198/"> (DeCal Website Link)</a>
              </div>

              <div style={{
                marginTop: "1vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2vw",
                fontWeight: "21.5vw",
                position: "relative",
              }}>
                The goal of our DeCal is to provide <b>data science education</b> and <b>experience</b> for students with little to no prior 
                knowledge of the field. Our course focuses on practical tools not otherwise emphasized in Berkeley’s academic curricula, 
                and allows for students to explore their domain interests in a semester-long project.

              </div>
            </Grid.Row>




            <Grid.Row>
              <div style={{
                marginTop: "5vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2.3vw",
                fontWeight: "21.5vw",
                fontWeight: "bold",
                position: "relative",
              }}>What will you learn in the DeCal?
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                marginTop: "0vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2vw",
                fontWeight: "21.5vw",
                position: "relative",
                //alignText: "center"
              }}>This semester-long course focuses on introducing students to essential data science skills in an interactive setting. 
              As a DeCal student, you will learn every step of the data science lifecycle: from formulating a data-centric project idea, 
              to extracting stories with exploratory data analysis, and finally creating and evaluating predictive models.
              <br />
              <br />
              Using your new skills and knowledge, you will have the opportunity to develop a project of your choosing with other 
              undergraduate students under a DSS mentor. You will also be able to present your findings and final project at Berkeley’s 
              semesterly Data Science Research Symposium and publish your project on DSS’s website.
              </div>
            </Grid.Row>

            <Grid.Row>
              <div style={{
                marginTop: "7vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2.5vw",
                fontWeight: "21.5vw",
                fontWeight: "bold",
                position: "relative",
                //alignText: "center"
              }}>What project do you work on?
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                  marginTop: "0vw",
                  textAlign: "start",
                  lineHeight: "3vw",
                  fontSize: "2vw",
                  fontWeight: "21.5vw",
                  width:"95vw",
                  position: "relative",
              }}>You may choose your own project! Decal students in past semesters have worked on projects related to various 
                different disciplines like Economics, Public Health, Linguistics, Biology, and much more! Feel free to look at 
                previous projects below for some inspiration. Be creative! 
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                marginTop: "7vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2.5vw",
                fontWeight: "21.5vw",
                fontWeight: "bold",
                position: "relative",
              }}>Who can take the DeCal?
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                  marginTop: "0vw",
                  textAlign: "start",
                  lineHeight: "3vw",
                  fontSize: "2vw",
                  fontWeight: "21.5vw",
                  width:"95vw",
                  position: "relative",
              }}>There are no formal prerequisites for this course. However, it is recommended to have some level of basic programming 
                experience in Python; many of our past students have taken this DeCal concurrently or after DATA 8. Above all, we are looking for beginners in 
                data science who are passionate about learning more about the field and willing to dedicate themselves to the required semester-long project.
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                marginTop: "7vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2.5vw",
                fontWeight: "21.5vw",
                fontWeight: "bold",
                position: "relative",
              }}>How can you apply?
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                marginTop: "0vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2vw",
                fontWeight: "21.5vw",
                position: "relative",
              }}>Our application window will open soon. Visit the "Join Us" page and
              keep an eye out for our on-campus and virtual events for our timeline!
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                marginTop: "7vw",
                width: "95vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2.5vw",
                fontWeight: "21.5vw",
                fontWeight: "bold",
                position: "relative",
              }}>Further details
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                marginTop: "0vw",
                textAlign: "start",
                lineHeight: "3vw",
                fontSize: "2vw",
                fontWeight: "21.5vw",
                width:"95vw",
                position: "relative",
              }}>The DeCal is 1 unit (P/NP) and there is a mandatory lecture on Mondays from 6:30-8:30pm in SOCS 20. We allow two unexcused absences 
              before it affects your grade. The commitments for this course include: homeworks graded on completion, a final project and symposium presentations.
              </div>
            </Grid.Row>
            <Grid.Row>
              <div style={{
                margin: "auto",
                padding: "5vw",
                textAlign: "center",
                lineHeight: "3vw",
                fontSize: "3vw",
                fontWeight: "21.5vw",
                fontWeight: "bold",
                position: "relative",
              }}>Our Directors
              </div>
            </Grid.Row>

            <Grid.Row>
              <div style={{
                textAlign: "center"
              }}>
                <Card.Group centered>
                  <Card style={cardstyle}>
                    {" "}
                    <Image style={imagestyle} src={steven} />
                    <Card.Content>
                      <Card.Header style={textstyle}>Steven Zeng</Card.Header>
                      <Card.Meta style={{ marginTop: "1vw" }}>
                        <span style={roleStyle}>
                          Director of Academic Development
                        </span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                      <a href="mailto:k1519632@berkeley.edu@berkeley.edu">
                        <Icon name="mail" />
                      </a>
                      <a href="https://www.linkedin.com/in/zengsteven/">
                        <Icon name="linkedin" />
                      </a>
                    </Card.Content>
                  </Card>
                  <Card style={cardstyle}>
                    {" "}
                    <Image style={imagestyle} src={james} />
                    <Card.Content>
                      <Card.Header style={textstyle}>James Geronimo</Card.Header>
                      <Card.Meta style={{ marginTop: "1vw" }}>
                        <span style={roleStyle}>
                          Director of Academic Development
                        </span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    <a href="mailto:jegeronimo@berkeley.edu">
                      <Icon size="large" name="mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/james-geronimo/">
                      <Icon size="large" name="linkedin" />
                    </a>
                    </Card.Content>
                  </Card>
                  <Card style={cardstyle}>
                    {" "}
                    <Image style={imagestyle} src={joseph} />
                    <Card.Content>
                      <Card.Header style={textstyle}>Joseph Zhai</Card.Header>
                      <Card.Meta style={{ marginTop: "1vw" }}>
                        <span style={roleStyle}>
                          Director of Academic Development
                        </span>
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    <a href="mailto:josephzhai@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/josephzhai/">
                    <Icon size="large" name="linkedin" />
                  </a>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </div>
            </Grid.Row>
          </Grid>
          <div class="footerSpacer" style={{
            height: "40vw",
          }}>
            <img src={linesTwo} style={{
              position: "absolute",
              width: "180vw",
              left: "-10vw",
              marginTop: "5vw",
              zIndex: "2",
              height: "40vw",
            }}></img>
          </div>
        </div>
      </div>
    );
  }
}
export default DecalLearn;
