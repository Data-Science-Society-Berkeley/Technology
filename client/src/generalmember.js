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
import atharva from "./Leadership Headshots/AtharvaHeadshot.png";
import sabrina from "./Leadership Headshots/SabrinaHeadshot.jpeg";
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
import angeline from "./Leadership Headshots/angeline.jpg";
import pranati from "./Leadership Headshots/pranati.jpeg";
import savvy from "./Leadership Headshots/savvy.jpeg";
import bella from "./Leadership Headshots/bella2.png"
import paul from "./Leadership Headshots/paul2.png"
import stephen from "./Leadership Headshots/stephen2.png"
import mentors from "./Decal Images/acadevmentors_fall22.png";
import acadevdirs from "./Acadev Images/acadevdirs.jpeg";


let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
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
const cardstyle = {
  width: "28vw",
  maxHeight: "56vw",
  // height: "800px",
  marginBottom: "1vw",
  marginleft: "10vw",
};
const imagestyle = {
  height: "40vw",
  maxHeight: "35w",
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
const headTextStyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "2vw",
  lineHeight: "2vw",
  color: "#000000",
  textAlign: "center",
  //fontWeight: "bold",
};
const inTextLink = {
  fontFamily: "Montserrat",
  fontWeight: "bold",
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",

};
const titletext = {
  fontFamily: "Montserrat",
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
  fontFamily: "Montserrat",
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
  fontFamily: "Montserrat",
  fontWeight: "bold",
  fontSize: "4.8vw",
  color: "#FFC54A",
  marginLeft: "14vw",
  textAlign: "center",
  position: "relative",
};

const aboutstats3 = {
  fontFamily: "Montserrat",
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
  fontFamily: "Montserrat",
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
          bottom: "15vw",
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

        <Grid entered style={gridoffset}>
          <Grid.Row
            width={16}
            columns={5}
            style={{
              //backgroundColor: "#8CD6D1",
              width: "80vw",
              height: "7vw",
              marginTop: "3vw",
              position: "relative",
            }}
          >
          <div
          style={{
          top:"2vw",
          //width: "100%",
          //height: "auto",
          textAlign: "start",
          color: "black",
          //textIndent: "5vw",
          //margin: 'auto',
          // marginBottom:'5vw',
          //marginTop: "5vw",
          position: "relative",
          //transform: "translate(-50%, -50%)",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "5vw",
          lineHeight: "6vw",
          left: "10vw"
          }}
        >DeCal
        

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
            fontFamily: "Montserrat",
            fontSize: "2vw",
            lineHeight: "6vw",
            fontWeight: "bold"*/
            marginTop: "3vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.3vw",
            fontWeight: "21.5vw",
            position: "relative",
            left: "10vw"
          }}
        >Data 198: <i>Intro to Real World Data Science</i>
            </div>

            <div style={{
              marginTop: "5vw",
              marginRight: "20vw",
              paddingRight:"10vw",
              textAlign: "start",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
              position: "relative",
              left: "10vw"
            }}>
              The goal of our DeCal is to provide <b>data science education</b> and <b>experience</b> for students with little to no prior 
              knowledge of the field. Our course focuses on practical tools not otherwise emphasized in Berkeley’s academic curricula, 
              and allows for students to explore their domain interests in a semester-long project.

            </div>
          </Grid.Row>

          <Grid.Row
            width={10}
            columns={4}
            style={{
              // backgroundColor: "#8CD6D1",
              width: "40%",
              height: "3vw",
              marginTop: "17vw",
              left: "10vw",
              position: "relative",
            }}
          >
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>
                42
              </div>
              <div style={{height: "2vw"}}></div>
              <div style={aboutstats3}>
                Completed Client Projects
              </div>
            </Grid.Column>
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>
                68
              </div>
              <div style={{height: "2vw"}}></div>
              <div style={aboutstats3}>
                Past Workshops and Events Hosted
              </div>
            </Grid.Column>
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>
                300+
              </div>
              <div style={{height: "2vw"}}></div>
              <div style={aboutstats3}>
                Datathon Past Participants
              </div>
            </Grid.Column>
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>
                800+
              </div>
              <div style={{height: "2vw"}}></div>
              <div style={aboutstats3}>
                Past Members and DeCal Students
              </div>
            </Grid.Column>
          </Grid.Row>




          <Grid.Row>
          <div style={{
            marginTop: "20vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.3vw",
            fontWeight: "21.5vw",
            fontWeight: "bold",
            position: "relative",
            left: "10vw"
          }}
        >What will you learn in the DeCal?
            </div>
            </Grid.Row>
            <Grid.Row>
            <div style={{
              marginTop: "3w",
              width: "95vw",
              textAlign: "start",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
              position: "relative",
              left: "10vw",
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
            marginTop: "10vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.5vw",
            fontWeight: "21.5vw",
            fontWeight: "bold",
            position: "relative",
            left: "10vw",
            //alignText: "center"
          }}>What project do you work on?
          </div>
          </Grid.Row>
          <Grid.Row>
          <div style={{
              marginTop: "3vw",
              textAlign: "start",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
              width:"95vw",
              position: "relative",
              left: "10vw",
              right: "10vw"
            }}>You may chooes your own project! Decal students in past semesters have worked on projects related to various 
            different disciplines like Economics, Public Health, Linguistics, Biology, and much more! Feel free to look at 
            previous projects below for some inspiration. Be creative! 
            </div>
          </Grid.Row>

          <Grid.Row>
          <div style={{
            marginTop: "10vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.5vw",
            fontWeight: "21.5vw",
            fontWeight: "bold",
            position: "relative",
            left: "10vw"
          }}>Who can take the DeCal?
          </div>
          </Grid.Row>
          <Grid.Row>
          <div style={{
              marginTop: "3vw",
              textAlign: "start",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
              width:"95vw",
              position: "relative",
              left: "10vw",
              right: "10vw"
            }}>There are no formal prerequisites for this course. However, it is recommended to have some level of basic programming 
            experience in Python; many of our past students have taken this DeCal concurrently or after DATA 8. Above all, we are looking for beginners in 
            data science who are passionate about learning more about the field and willing to dedicate themselves to the required semester-long project.
            </div>
          </Grid.Row>

          <Grid.Row>
          <div style={{
            marginTop: "10vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.5vw",
            fontWeight: "21.5vw",
            fontWeight: "bold",
            position: "relative",
            left: "10vw",
            right: "10vw"
          }}>How can you apply?
          </div>
          </Grid.Row>
          <Grid.Row>
          <div style={{
              marginTop: "3vw",
              textAlign: "start",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
              width:"95vw",
              position: "relative",
              left: "10vw",
              right: "10vw"
            }}>You can apply through the form linked below. Keep an eye out for our application 
            deadline next semester to apply!
            </div>
          </Grid.Row>


          <Grid.Row>
          <div style={{
            marginTop: "10vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.5vw",
            fontWeight: "21.5vw",
            fontWeight: "bold",
            position: "relative",
            left: "10vw",
          }}>Further details
          </div>
          </Grid.Row>
          <Grid.Row>
          <div style={{
              marginTop: "3vw",
              textAlign: "start",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
              width:"95vw",
              position: "relative",
              left: "10vw",
              right: "10vw"
            }}>The DeCal is 2 units (P/NP) and there is a mandatory lecture on Wednesdays from 6-8pm. We allow two unexcused absences 
            before it affects your grade. The commitments for this course include: homeworks graded on completion, a final project and symposium presentations.
            </div>
          </Grid.Row>


          <Grid.Row>
          <div style={{
            marginTop: "10vw",
            marginBottom: "10vw",
            textAlign: "start",
            lineHeight: "3vw",
            fontSize: "2.5vw",
            fontWeight: "21.5vw",
            fontWeight: "bold",
            position: "relative",
            left: "10vw"
          }}>Course Staff
          </div>
          </Grid.Row>

              {/*<Grid.Column>
                <div style={{ textAlign: "center", marginTop: "10vw",}}>
                  {CustomTitleBlack({ title: "Schedule" })}

                  <div style={{margin: "0 auto", maxWidth: "22vw"}}>
                    <Image src={gmLine2}></Image>
                  </div>

                  <div style={{margin: "0 auto", maxWidth: "22vw"}}>
                    <h1>(Fall 2021)</h1>
                  </div>
                </div>

          </Grid.Column>

              <Grid.Column>

                <Image
                  src={light}
                  style={{
                    top: "10%",
                    left: "62%",
                    marginTop: "-1vw",
                  //down: "30%",
                  //marginTop: "10vw",
                  }}>
                </Image>
              </Grid.Column>*/}
          



          {/*<Grid.Row style={{ marginTop: "6vw", textAlign: "start", marginBottom: "4vw" }}>
          {CustomTitleBlack({ title: "Course Staff" })}


            </Grid.Row>*/}
          
          <Grid.Row>
          <div style={{
            textAlign: "center"
          }}
          >
          
            <Card.Group centered>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={bella} />
                <Card.Content>
                  <Card.Header style={textstyle}>Bella Chang</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                      Director of Academic Development
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:bellachang@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/bellaachang/">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={paul} />
                <Card.Content>
                  <Card.Header style={textstyle}>Paul Jacobs</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                      Director of Academic Development
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:pauljacobs@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/paul-jacobs-955422235/">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={stephen} />
                <Card.Content>
                  <Card.Header style={textstyle}>Stephen Liu</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                      Director of Academic Development
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:stephen.liu@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/liu-stephen">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
            
            </div>
          </Grid.Row>
          
      </Grid>
    </div>
    );
  }
}
export default DecalLearn;
