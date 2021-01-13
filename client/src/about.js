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
  Embed,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomTitle from "./components/CustomTitle.js";

import andi from "./Leadership Headshots/andi.jpg";
import kanu from "./Leadership Headshots/KanuHeadshot.jpg";
import charlie from "./Leadership Headshots/charlie.jpg";
import alleanna from "./Leadership Headshots/alleanna2.jpeg";
import varunmi from "./Leadership Headshots/varunmi.jpeg";
import edlyft from "./Leadership Headshots/edlyft-logo.jpg";
import asuc from "./Leadership Headshots/asuc_logo.png";
import berkeley from "./Leadership Headshots/berkeley_cdss_logo.png";
import berkeley2 from "./Leadership Headshots/berkeley-eecs-logo.jpg";
import wids from "./Leadership Headshots/wids-berkeley-logo.jpg";
import sponsor1 from "./Leadership Headshots/dsnexus-logo.png";
import sponsor2 from "./Leadership Headshots/leadcenter_logo.png";
import sponsor3 from "./Leadership Headshots/haas-ds-club-logo.png";
import gaya from "./Leadership Headshots/gayatri.png";
import atharva from "./Leadership Headshots/AtharvaHeadshot.png";
import arnav from "./Leadership Headshots/ArnavHeadshot.jpg";
import cindy from "./Leadership Headshots/CindyHeadshot.jpg";
import sabrina from "./Leadership Headshots/SabrinaHeadshot.jpeg";
import rick from "./Leadership Headshots/Rick.jpeg";
import elton from "./Leadership Headshots/EltonHeadshot.jpg";

import pm from "./About/_MG_59681.png";
import exec from "./About/group1.png";
import commit from "./About/dsssp20-biglittlereveal-groupphoto1.png";
import gen from "./About/operationanalytics21.png";
import decal from "./About/learn.png";
import senior from "./About/widsberkeleydssspring20201.png";
import join from "./About/JoinUs.jpg";
//import story from './About/OurStory.jpg'
import story from "./About/OurStory-Compressed-min.jpg";
import popout from "./About/popoutDesign.png";
import ret from "./About/RetreatPic.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import youtubeback from "./About/youtubevideo-cover.jpg";

let endpoint = "http://localhost:8080";
const gridoffset = {
  marginTop: "3vw",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
};
const header = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
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

const execstyle1 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  // width: "25%",
  // maxWidth: "356px",
  // height: "auto",
  height: "25vw",
  width: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${exec})`,
  margin: "0 auto",
  backgroundSize: "contain",
};
const execstyle2 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  fontColor: "#FFFFFF",
  width: "25vw",
  height: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${pm})`,
  backgroundColor: "transparent",
  margin: "0 auto",
  backgroundSize: "contain",
};
const execstyle3 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  fontColor: "#FFFFFF",
  width: "25vw",
  height: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${commit})`,
  margin: "0 auto",
  backgroundSize: "contain",
};
const execstyle4 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  fontColor: "#FFFFFF",
  width: "25vw",
  height: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${gen})`,
  margin: "0 auto",
  backgroundSize: "contain",
};
const execstyle5 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  fontColor: "#FFFFFF",
  width: "25vw",
  height: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${decal})`,
  margin: "0 auto",
  backgroundSize: "contain",
};
const execstyle6 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  fontColor: "#FFFFFF",
  width: "25vw",
  height: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${senior})`,
  margin: "0 auto",
  backgroundSize: "contain",
};
const aboutlinks = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  height: "3vw",
  color: "#FFFFFF",
  whiteSpace: "nowrap",
  // margin: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // textAlign: "center",
  // top: "20%",
};

const aboutlinks2 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  color: "#FFFFFF",
  margin: "auto",
  textAlign: "center",
  position: "relative",

  // top: "50%",
  // transform: "translateY(-50%)",
};

const overlayboxes = {
  background: "#FFFFFF",
  border: "5px solid #8CD6D1",
  boxSizing: "border-box",
  boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
  height: "236px",
  width: "284px",
  marginLeft: "150px",
  marginBottom: "70px",
  fontFamily: "Montserrat",
  fontSize: "20px",
};

var circleStyle = {
  padding: 10,
  marginLeft: -34,
  marginTop: "-50px",
  display: "inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width: 100,
  height: 100,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "72px",
  lineHeight: "88px",
  color: "#FFFFFF",
  textAlign: "center",
};
const leadershipCards = [
  <Card style={cardstyle}>
    <Image src={alleanna} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Alleanna Clark</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:alleanna@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    <Image src={varunmi} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Varun Mittal</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Internal Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:varunmittal@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/varun-mittal-727559181/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={gaya} />
    <Card.Content>
      <Card.Header style={textstyle}>Gayatri Babel</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>External Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:murthy@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://linkedin.com/in/Murthy1999">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,

  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={kanu} />
    <Card.Content>
      <Card.Header style={textstyle}>Kanu Grover</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Tech</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:grover.kanu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/kanu-grover-a89983187/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={cindy} />
    <Card.Content>
      <Card.Header style={textstyle}>Cindy Yang</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Marketing</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:varunmittal@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/varun-mittal-727559181/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={elton} />
    <Card.Content>
      <Card.Header style={textstyle}>Elton Chan</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra></Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={rick} />
    <Card.Content>
      <Card.Header style={textstyle}>Rick Zhang</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Consulting</span>
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
    {" "}
    <Image style={imagestyle} src={atharva} />
    <Card.Content>
      <Card.Header style={textstyle}>Atharva Mehendale</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:alleanna@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={sabrina} />
    <Card.Content>
      <Card.Header style={textstyle}>Sabrina Wu</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:stephanie.lu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={arnav} />
    <Card.Content>
      <Card.Header style={textstyle}>Arnav Patel</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:roshanlodha@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="http://linkedin.com/in/roshanlodha">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  // <Card style={cardstyle}>
  //   {" "}
  //   <Image style={imagestyle} src={kate} />
  //   <Card.Content>
  //     <Card.Header style={textstyle}>Kate Miller</Card.Header>
  //     <Card.Meta style={{ marginTop: "1vw" }}>
  //       <span style={roleStyle}>Director of DeCal</span>
  //     </Card.Meta>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a href="mailto:katevmiller@berkeley.edu">
  //       <Icon size="large" name="mail" />
  //     </a>
  //     <a href="https://www.linkedin.com/in/kate-miller-7a884719b/">
  //       <Icon size="large" name="linkedin" />
  //     </a>
  //   </Card.Content>
  // </Card>,
  // <Card style={cardstyle}>
  //   {" "}
  //   <Image style={imagestyle} src={uma} />
  //   <Card.Content>
  //     <Card.Header style={textstyle}>Uma K</Card.Header>
  //     <Card.Meta style={{ marginTop: "1vw" }}>
  //       <span style={roleStyle}>Director of DeCal</span>
  //     </Card.Meta>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a href="mailto:umakrishnaswamy@berkeley.edu">
  //       <Icon size="large" name="mail" />
  //     </a>
  //     <a href="https://www.linkedin.com/in/uma-k-369ba4122/">
  //       <Icon size="large" name="linkedin" />
  //     </a>
  //   </Card.Content>
  // </Card>,
  // <Card style={cardstyle}>
  //   {" "}
  //   <Image style={imagestyle} src={gaya} />
  //   <Card.Content>
  //     <Card.Header style={textstyle}>Gayatri Babel</Card.Header>
  //     <Card.Meta style={{ marginTop: "1vw" }}>
  //       <span style={roleStyle}>Director of DeCal</span>
  //     </Card.Meta>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a href="mailto:gbabel@berkeley.edu">
  //       <Icon size="large" name="mail" size="large" />
  //     </a>
  //     <a href="https://www.linkedin.com/in/gayatri-babel/">
  //       <Icon size="large" name="linkedin" size="large" />
  //     </a>
  //   </Card.Content>
  // </Card>,

  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={charlie} />
    <Card.Content>
      <Card.Header style={textstyle}>Charlie Duarte</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Social Good</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:charlieduarte@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/charlie-duarte/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={andi} />
    <Card.Content>
      <Card.Header style={textstyle}>Andi Halim</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Social Good</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:andihalim@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/andihalim/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
];

const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "73px",
  fontSize: "48px",
  color: "#8CD6D1",
  width: "300px",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "130px",
  marginBottom: "35px",
};

class About extends Component {
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
  scrollJoin() {
    document.getElementById("join").scrollIntoView();
  }
  scrollWho() {
    document.getElementById("who").scrollIntoView();
  }
  scrollFind() {
    document.getElementById("place").scrollIntoView();
  }
  scrollTeam() {
    document.getElementById("team").scrollIntoView();
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: "1", position: "relative" }}>
          <Image
            src={story}
            style={{ width: "120%", height: "auto", zIndex: "2" }}
          ></Image>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              background: "rgba(140, 214, 209, 0.6)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "35%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                // fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "5vw",
                lineHeight: "5vw",
                color: "#FFFFFF",
              }}
            >
              {" "}
              OUR STORY
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
          </div>
        </div>
        <Grid entered style={gridoffset}>
          <Grid.Row
            width={16}
            columns={4}
            style={{
              backgroundColor: "#8CD6D1",
              width: "100%",
              height: "7vw",
              marginTop: "-3vw",
              position: "relative",
            }}
          >
            <Grid.Column width={4}>
              <div onClick={this.scrollWho} style={aboutlinks}>
                Who we are
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={{ aboutlinks2 }}>
              <div onClick={this.scrollJoin} style={aboutlinks}>
                Why Join?
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={{ aboutlinks2 }}>
              <div onClick={this.scrollFind} style={aboutlinks}>
                Find your place
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={{ aboutlinks2 }}>
              <div onClick={this.scrollTeam} style={aboutlinks}>
                Our Team
              </div>
            </Grid.Column>
          </Grid.Row>
          {/* <div id="who"> */}
          {CustomTitle({ title: "Who We Are", id: "who" })}
          {/* </div> */}
          <Grid.Row centered columns={1} style={{ marginBottom: "7vw" }}>
            <Grid.Column
              style={{
                marginLeft: "12vw",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  fontSize: "2.5vw",
                  lineHeight: "3vw",
                  fontWeight: "36vw",
                  color: "#B6E5D7",
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  marginLeft: "-20vw",
                }}
              >
                A family of passionate individuals looking to make a change.
              </div>
              <div
                style={{
                  fontSize: "2vw",
                  lineHeight: "3vw",
                  fontWeight: "normal",
                  marginTop: "4vw",
                  color: "#000000",
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  marginLeft: "10vw",
                  marginRight: "30vw",
                }}
              >
                Data Science Society is UC Berkeley's first student-run,
                not-for-profit organization focused on data science and its
                interdisciplinary applications. Since our founding in 2016, we
                have united students from a wide range of disciplines behind our
                shared passion for all things data.
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginBottom: "-25vw",
              }}
            >
              <Image
                src={popout}
                style={{ zIndex: "2", height: "35vw" }}
              ></Image>
              <div
                style={{
                  position: "relative",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  top: "-30vw",
                  left: "-23vw",
                  zIndex: "3",
                  fontFamily: "Montserrat",
                  fontStyle: "43vw",
                  fontWeight: "bold",
                  fontSize: "5vw",
                  lineHeight: "6vw",
                  color: "#FFFFFF",
                  marginBottom: "3vw",
                }}
              >
                <span>Our mission</span>
                <div
                  style={{
                    position: "relative",
                    textShadow: "none",
                    width: "61vw",
                    top: "2.5vw",
                    left: "30vw",
                    zIndex: "4",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                >
                  We aim to foster a strong data science community on campus by
                  advocating data science education and practice through our
                  various committees and internal and external programs. Our
                  educational and consulting initiatives have impacted hundreds
                  of students in a variety of majors across campus and given
                  them the technical and soft skills needed to thrive in an
                  increasingly data-centric world.
                </div>
              </div>
            </div>
          </Grid.Row>
          {CustomTitle({ title: "Why Join?", id: "join" })}
          <Grid.Row width={12} centered>
            <div
              style={{
                fontSize: "2.5vw",
                lineHeight: "3vw",
                fontWeight: "36vw",
                color: "#B6E5D7",
                fontFamily: "Montserrat",
              }}
            >
              {" "}
              Simple. To be a part of our family.
            </div>
          </Grid.Row>
          <Grid.Row>
            <Image
              src={ret}
              style={{
                width: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                height: "100%",
              }}
            ></Image>
          </Grid.Row>
          <Grid.Row centered></Grid.Row>

          <Grid.Row
            centered
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontSize: "3vw",
              lineHeight: "4vw",
              color: " #8CD6D1",
            }}
          >
            Check out our Fall 2020 Recruitment Video!
          </Grid.Row>
          <Grid.Row width={12} centered style={{ marginBottom: "3vw" }}>
            <div
              style={{
                width: "78vw",
                border: "10px solid #B6E5D7",
                boxSizing: "borderBox",
                marginTop: "5vw",
              }}
            >
              <Embed
                id="XW7Zkzf7_C8"
                source="youtube"
                placeholder={youtubeback}
              />
            </div>
          </Grid.Row>
          {CustomTitle({ title: "Where Do You Fit In?", id: "place" })}
          <Grid.Row
            centered
            columns={3}
            style={{
              marginTop: "4vw",
              marginLeft: "10vw",
              marginRight: "10vw",
            }}
          >
            <Grid.Column>
              <div style={execstyle1}>
                <div style={{ marginLeft: "2vw", paddingTop: "2vw" }}>
                  Executive <br /> Team
                </div>
                <div
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    marginTop: "10vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  Our team of execs is in charge of all the club operations.
                  View our current team below!
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={execstyle2}>
                <div style={{ marginLeft: "2vw", paddingTop: "2vw" }}>
                  Project <br /> Manager
                </div>
                <div
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    marginTop: "5vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  Project managers apply their past consulting experience and
                  analytics expertise to lead our teams. Typically, we have 10
                  PMs to lead 5 consulting projects per semester.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={execstyle3}>
                <div style={{ marginLeft: "2vw", paddingTop: "2vw" }}>
                  Committee Member
                </div>
                <div
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    marginTop: "3vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  CMs are responsibile of their respective committees: Academic
                  Development, Consulting, DeCal and Social Good! They can also
                  join our internal committees like Tech and Culture.
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            centered
            columns={3}
            style={{
              marginTop: "5vw",
              marginLeft: "10vw",
              marginRight: "10vw",
            }}
          >
            <Grid.Column>
              <div style={execstyle4}>
                <div style={{ marginLeft: "2vw", paddingTop: "2vw" }}>
                  General <br /> Member
                </div>
                <div
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    marginTop: "8vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  GMs complete semester-long research projects under the
                  guidance of our Academic Development committee.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={execstyle5}>
                <div style={{ marginLeft: "2vw", paddingTop: "2vw" }}>
                  DeCal <br /> Student
                </div>
                <div
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    marginTop: "3vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  DeCal students enroll in our 2-unit course: Essential Tools
                  for Data Science and learn various DS topics that prepare you
                  for industry. This is completely student-run by our DeCal
                  committee.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div style={execstyle6}>
                <div style={{ marginLeft: "2vw", paddingTop: "2vw" }}>
                  Senior
                  <br /> Advisor
                </div>
                <div
                  style={{
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                    marginTop: "3vw",
                    marginLeft: "1.5vw",
                  }}
                >
                  Our Senior Advisors are made up of students who have been
                  committee members for 2+ semesters! Their obligations vary
                  from advising consulting teams to guest lecturing to holding
                  internal coffee chats!
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          {CustomTitle({ title: "Our Exec Team", id: "team" })}
          <Grid.Row centered width={12} style={{ marginTop: "7vw" }}>
            <Card.Group centered>{leadershipCards}</Card.Group>
            ``
          </Grid.Row>

          {/* <Grid.Row style={{ marginTop: "7vw", marginLeft: "17vw" }}>
            <Header style={mybigtext}> Our Sponsors</Header>
          </Grid.Row> */}
          {CustomTitle({ title: "Our Sponsors", id: "sponsors" })}
          <Grid.Row
            centered
            style={
              {
                // marginTop: "4vw",
              }
            }
          >
            <Image.Group size={"medium"}>
              <Image
                src={berkeley}
                style={{ marginLeft: "1px", width: "15vw", marginTop: "3vw" }}
              ></Image>
              <Image
                src={berkeley2}
                style={{
                  marginLeft: "5vw",
                  width: "15vw",
                  marginTop: "-7vw",
                }}
              ></Image>

              <Image
                src={asuc}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
            </Image.Group>
            <Image.Group>
              <Image
                src={datacamp}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
              <Image
                src={wids}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
              <Image
                src={edlyft}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
            </Image.Group>
          </Grid.Row>
          {CustomTitle({ title: "Our Partners", id: "partners" })}
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
              style={{ marginTop: "3vw", marginBottom: "7vw" }}
            >
              <Image
                style={{ marginRight: "1vw", width: "15vw" }}
                src={sponsor1}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={sponsor2}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={sponsor3}
              ></Image>
            </Image.Group>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default About;
