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
import bella from "./Leadership Headshots/bella.png"
import paul from "./Leadership Headshots/paul.jpeg"
import stephen from "./Leadership Headshots/stephen.jpg"
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


class DecalLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  // Generate Table based on lectures list
  /*loadTable(props) {
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
        <Table.Cell>
          <a href={c.nbook}>{c.nbook}</a>
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
              <b>Meeting Slides</b>
            </Table.HeaderCell>
            <Table.HeaderCell class="col-md-3">
              <b>Notebook</b>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
      </Table>
    );
    } */
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

        <h1
          style={{
          top:"27vw",
          width: "100%",
          height: "auto",
          textAlign: "center",
          color: "black",
          margin: 'auto',
          // marginBottom:'5vw',
          //marginTop: "5vw",
          position: "absolute",
          // transform: "translate(-50%, -50%)",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "3vw",
          lineHeight: "6vw",
          }}
        >Decal
        </h1>
        
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

        <Grid centered>
        <div
          style={{
            marginBottom: "3.5vw",
            marginLeft: "6vw",
            marginRight: "6vw",
            //margin: "0 auto",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "1.5vw",
            lineHeight: "2vw",

          }}
        >

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
            marginTop: "35vw",
            textAlign: "center",
            lineHeight: "3vw",
            fontSize: "2.3vw",
            fontWeight: "21.5vw",
            fontWeight: "bold"
          }}
        >Intro to Real World Data Science
            </div>

            <div style={{
              marginTop: "5vw",
              textAlign: "center",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
            }}>
              Data Science Society is UC Berkeley's first student-run, not-for-profit organization focused on data science and its 
              interdisciplinary applications. Since our founding in 2016, we have united students from a wide range of disciplines behind our
              shared passion for all things data.

            </div>
          </Grid.Row>

          <Grid.Row>
          <div style={{
            marginTop: "35vw",
            textAlign: "center",
            lineHeight: "3vw",
            fontSize: "2.3vw",
            fontWeight: "21.5vw",
            fontWeight: "bold"
          }}
        >Mission and Values
            </div>

            <div style={{
              marginTop: "5vw",
              textAlign: "center",
              lineHeight: "3vw",
              fontSize: "2vw",
              fontWeight: "21.5vw",
            }}>Our mission is to foster a strong data science community on campus by advocating 
            for educational workshops, professional events, and corporate projects. Our educational 
            and consulting initiatives have impacted thousands of students in a variety of majors 
            across campus and given them the technical and soft skills needed to thrive in an 
            increasingly data-centric world.

            </div>
          </Grid.Row>

          <Grid.Row>
          <div style={{
            marginTop: "30vw",
            textAlign: "center",
            lineHeight: "3vw",
            fontSize: "2.5vw",
            fontWeight: "21.5vw",
            fontWeight: "bold"
          }}>Our Committees

          </div>

          </Grid.Row>
          <Grid.Row
            centered
            columns={2}
            style={{
              marginTop: "4vw",
              right: "3vw"
            }}
          > 

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
          </Grid.Row>



          <Grid.Row style={{ marginTop: "6vw", marginBottom: "4vw" }}>
          {CustomTitleBlack({ title: "Directors" })}

          <div style={{margin: "0 auto", maxWidth: "28vw"}}>
                    <Image src={gmLine2}></Image>
          </div>

          </Grid.Row>

          <Grid.Row>
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


            <Image
                src={squiggly1_rotate}
                style={{
                  left: "0%",
                  width: "40vw",
                  position: "absolute",
                  //top: "60%",
                  //marginTop: "5vw",
                  marginBottom: "9vw",
                }}
              ></Image>
          </Grid.Row>


          <Grid.Row style={{ marginTop: "8vw", marginBottom: "5vw" }}>
            {CustomTitleBlack({ title: "Previous Projects" })}

            <div style={{marginLeft: "41vw", maxWidth: "65vw"}}>
                    <Image src={projLine}></Image>
            </div>
          </Grid.Row>



          <Grid.Row>
            <Card.Group itemsPerRow={3}>
              <Card style={cardstyle} href='https://docs.google.com/presentation/d/1UKztQg67ZjjskCrqMhdgmbnVVO9al-IPx-xR2-LkIEA/edit?usp=sharing' target="_blank">
                {" "}

                <Image style={imagestyle} src={proj1} />
                <Card.Content>
                  <Card.Header style={textstyle}>Predicting Housing Prices</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                    Kian Golestaneh, Sarang Deshpande, Yash Bhargava, Max Liu, Grant Wagner
                    </span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card style={cardstyle} href='https://deepnote.com/project/FA20-Group-1-0i9tyJ2oQH6OCthlzOVWwg' target="_blank">
                {" "}
                <Image style={imagestyle} src={proj2} />
                <Card.Content>
                  <Card.Header style={textstyle}>Predicting Word Complexity</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                      Wendy Kim, Yu Xi Gui, Fakhri Widodo
                    </span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card style={cardstyle} href='https://docs.google.com/presentation/d/1KzOJAMd_vBhIXN925wrUJ8qbOw8QnASRBHX0Zdo8abI/edit?usp=sharing' target="_blank">
                {" "}
                <Image style={imagestyle} src={proj3} />
                <Card.Content>
                  <Card.Header style={textstyle}>Effect of Fires on COVID Deaths</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                    Lili Wang, Fatima Fadel, Vaishak Krishna, Cesar Gonzalez Renteria
                    </span>
                  </Card.Meta>
                </Card.Content>
              </Card>
              <Card style={cardstyle} href='https://docs.google.com/presentation/d/1bRQK0e5U2oSt6XvDN-VudbxUU9vRYA_Tyi2NY8RttXA/edit?usp=sharing' target="_blank">
                {" "}
                <Image style={imagestyle} src={proj4} />
                <Card.Content>
                  <Card.Header style={textstyle}>Impact of Economic Factors in Online Education</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                    Katherine Zheng, Daniel Yao, Risheek Somu, Jonathan Chan
                    </span>
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card style={cardstyle} href='https://docs.google.com/presentation/d/1ce1H9ZcV6GY-15wkIqw9orR7AMtiJiijKQ2GGLVe--8/edit?usp=sharing' target="_blank">
                {" "}
                <Image style={imagestyle} src={proj5} />
                <Card.Content>
                  <Card.Header style={textstyle}>Evaluating the Performance of the Stock Market in 2020</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                    Adi, Austin, Damon, James, Tommy, Winston
                    </span>
                  </Card.Meta>
                </Card.Content>

              </Card>
              <Card style={cardstyle} href='https://deepnote.com/project/7acf0dbb-348f-4776-a97d-2d77186b4297#%2FNLP%20fake%20news%2Ffake.ipynb' target="_blank">
                {" "}
                <Image style={imagestyle} src={proj6} />
                <Card.Content>
                  <Card.Header style={textstyle}>Detecting Fake News</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={{ roleStyle }}>
                    Roshun, Wilson, Rithwik, Richard
                    </span>
                  </Card.Meta>
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
