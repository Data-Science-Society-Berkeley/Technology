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
import CustomTitleBlack from "./components/CustomTitleBlack.js";


import edlyft from "./Leadership Headshots/edlyft-logo.jpg";
import asuc from "./Leadership Headshots/asuc_logo.png";
import berkeley from "./Leadership Headshots/berkeley_cdss_logo.png";
import berkeley2 from "./Leadership Headshots/berkeley-eecs-logo.jpg";
import wids from "./Leadership Headshots/wids-berkeley-logo.jpg";
import sponsor1 from "./Leadership Headshots/dsnexus-logo.png";
import sponsor2 from "./Leadership Headshots/leadcenter_logo.png";
import sponsor3 from "./Leadership Headshots/haas-ds-club-logo.png";
import deepnote from "./Leadership Headshots/deepnote.png";

// Headshot cards
import stephen from "./Leadership Headshots/stephen.jpg";
import preetha from "./Leadership Headshots/preetha.jpeg";
import medha from "./Leadership Headshots/medha.jpg";
import james from "./Leadership Headshots/james.jpg";
import arnav from "./Leadership Headshots/arnav_g.jpeg";
import suparna from "./Leadership Headshots/Suparna.jpg";
import lillian from "./Leadership Headshots/lillian.jpeg";
import natraj from "./Leadership Headshots/natraj.jpg";
import erin from "./Leadership Headshots/erin.png";
import sumin from "./Leadership Headshots/sumin.png";
import ethan from "./Leadership Headshots/ethan.jpeg";
import aarthi from "./Leadership Headshots/aarthi.jpg";
import austin from "./Leadership Headshots/austin.jpeg";

import pm from "./About/pmgroup.jpeg";
import exec from "./About/exec.jpeg";
import commit from "./About/CommitteeMember.jpg";
import socgood from "./About/socgoodgroup.jpeg";
import gen from "./About/GeneralMember.jpg";
import decal from "./About/DeCal.png";
import senior from "./About/SeniorAdvisor.png";
import join from "./About/JoinUs.jpg";
//import story from './About/OurStory.jpg'
import splash from "./About/about_splash.png";
import popout from "./About/popoutDesign.png";
import retreat from "./About/RetreatPic.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import youtubeback from "./About/youtubevideo-cover.jpg";
import upright from "./About/cross_up.png";
import bottomleft from "./About/cross_down.png";
import rectangle from "./About/rectangle.png";
import micron from "./About/micron.png"

// squiggly decals
import landingSquiggle from "./landing/landing_squiggle.png";
import landingSquiggle2 from "./landing/landing_squiggle2.png";

let endpoint = "http://localhost:8080";
const gridoffset = {
  textAlign: "center",
  fontFamily: "Montserrat",
  gridTemplateColumns:"repeat(5, 1fr)",
  background: "linear-gradient(160deg, #FFFFFF 0%, #FFFFFF 60%, #CCF6FA 100%)",
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
  color: "#FFFFFF",
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
  objectFit: "cover",
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
  height: "15vw",
  width: "25vw",
  borderRadius: "1vw",
  backgroundImage: `url(${exec})`,
  // objectPosition: "20% 10%",
  clip: "rect(0vw, 20vw, 20vw, 20vw)",
  margin: "0 auto",
  // objectFit: "cover",
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
  fontWeight: "bold",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  height: "3vw",
  color: "#000000",
  whiteSpace: "nowrap",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const aboutlinks2 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  fontSize: "2.5vw",
  color: "#FFFFFF",
  margin: "auto",
  textAlign: "center",
  position: "relative",
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
    <Image src={stephen} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Stephen Liu</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:stephen.liu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/liu-stephen/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    <Image src={preetha} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Preetha Kumar</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Internal Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:preethakumar@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/preetha-kumar/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image src={medha} style={imagestyle}/>
    <Card.Content>
      <Card.Header style={textstyle}>Medha Iyer</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>External Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:medhaiyer@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/medhaiyer/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={james} />
    <Card.Content>
      <Card.Header style={textstyle}>James Yang</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Technology</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:jamesyang02@berkeley.edu>">
        <Icon size="large" name="mail" />
      </a>
      <a href= "https://www.linkedin.com/in/jamesyang02/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={lillian} />
    <Card.Content>
      <Card.Header style={textstyle}>Lillian Jiang</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Marketing</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:lillianjiang@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/lillianyjiang/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={arnav} />
    <Card.Content>
      <Card.Header style={textstyle}>Arnav Gupta</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:ag3304@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/arnav-gupta-4799b8210/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
  {" "}
    <Image style={imagestyle} src={suparna} />
    <Card.Content>
      <Card.Header style={textstyle}>Suparna Kompalli</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:skompalli@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/suparna-kompalli-79463b229/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
  {" "}
    <Image style={imagestyle} src={natraj} />
    <Card.Content>
      <Card.Header style={textstyle}>Natraj Vairavan</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Finance</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:natrajvairavan5@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/natraj-vairavan/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={erin} />
    <Card.Content>
      <Card.Header style={textstyle}>Erin Tan</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Consulting</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:tane@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/erin-tan-b41b6919b/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={sumin} />
    <Card.Content>
      <Card.Header style={textstyle}>Su Min Park</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Social Good</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:m.suminpark@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/sumin-michelle-park/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
  {" "}
    <Image style={imagestyle} src={ethan} />
    <Card.Content>
      <Card.Header style={textstyle}>Ethan Chien</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:ekchien0@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/ethan-chien-091a1a206/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={aarthi} />
    <Card.Content>
      <Card.Header style={textstyle}>Aarthi Kannan</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:aarthikannan@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/aarthikannan526/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={austin} />
    <Card.Content>
      <Card.Header style={textstyle}>Austin Nicola Ardisaputra</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:ardisaputra@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/aardisaputra/">
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
  scrollSponsors() {
    document.getElementById("sponsors").scrollIntoView();
  }

  screenWidthBigEnough() {
    if (window.innerWidth < 500) {
      return "1vw";
    } else {
      return "10vw";
    }
  }

  screenWidthBigEnoughforInterMargin() {
    if (window.innerWidth < 500) {
      return "10vw";
    } else {
      return "auto";
    }
  }

  render() {
    const screenSizeResult = this.screenWidthBigEnough();

    const screenInterMarginResult = this.screenWidthBigEnoughforInterMargin();

    return (
      <div style={{
        backgroundColor: "white",
      }} >
        {/* <div>
          <Image src={upright}
          style= {{
            right:"5vw",
            top:"12vw",
            position: "absolute",
            height: "18vw",
            maxHeight: "18vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
        </div> */}
        {/* <div>
          <Image src={rectangle}
          style= {{
            position: 'absolute',
            top: "19vw",
            left: '80vw',
            height: "1.5vw",
            maxHeight: "1.5vw",
            width: "17vw",
            maxWidth: "17vw",
          }}>
          </Image>
        </div> */}
        {/* <div>
          <Image src={rectangle}
          style= {{
            position: 'absolute',
            top: "28vw",
            left: '35vw',
            height: "2.8vw",
            maxHeight: "2.8vw",
            width: "32vw",
            maxWidth: "32vw",
          }}>
          </Image>
        </div> */}
        <div>
          <Image style={{position: 'absolute',
          top: "13vw",
          left: "0vw",
          width: "135vw",
          maxWidth: "135vw",
          height: "auto",
          }}
          src={splash}></Image>
        </div>
        <div id="about_header_spacer" style={{
          height: "55vw",
        }}></div>
        <h1
          style={{
          top:"17vw",
          width: "100%",
          height: "auto",
          textAlign: "center",
          color: "white",
          margin: 'auto',
          // marginBottom:'10vw',
          //marginTop: "5vw",
          position: "absolute",
          // transform: "translate(-50%, -50%)",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "6vw",
          lineHeight: "6vw",
        }}
        >About Us
        </h1>
        <Grid entered style={gridoffset}>
          <Grid.Row
            width={15}
            columns={5}
            style={{
              backgroundColor: "#D2F2F0",
              width: "100%",
              height: "7vw",
              position: "absolute",
            }}
          >
            <Grid.Column width={3}>
              <div onClick={this.scrollWho} style={aboutlinks}>
                Who We Are
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={{ aboutlinks2 }}>
              <div onClick={this.scrollJoin} style={aboutlinks}>
                Mission & Values
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={{ aboutlinks2 }}>
              <div onClick={this.scrollFind} style={aboutlinks}>
                Find Your Role
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={{ aboutlinks2 }}>
              <div onClick={this.scrollTeam} style={aboutlinks}>
                Our Team
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={{ aboutlinks2 }}>
              <div onClick={this.scrollSponsors} style={aboutlinks}>
                Our Sponsors
              </div>
            </Grid.Column>
          </Grid.Row>
          <div id="about_header_spacer_2" style={{
          height: "5vw",
          }}></div>
          {CustomTitleBlack({ title: "Who We Are", id: "who" })}
          <Grid.Row centered columns={1} style={{ marginBottom: "3vw" }}>
            <Grid.Column
              style={{
                marginLeft: "12vw",
                marginRight: "12vw",
              }}
            >
              {/* <div
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
              </div> */}
              <div
                style={{
                  fontSize: "2.5vw",
                  lineHeight: "3vw",
                  fontWeight: "normal",
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
          {CustomTitleBlack({ title: "Our Mission", id: "who" })}
          <Grid.Row>
            <Grid.Column
              style={{
                marginLeft: "12vw",
                marginRight: "12vw",
            }}
            >
              <div
                style={{
                  fontSize: "2.5vw",
                  lineHeight: "3vw",
                  fontWeight: "normal",
                  color: "#000000",
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  marginLeft: "10vw",
                  marginRight: "10vw",
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
            </Grid.Column>
          </Grid.Row>
          {CustomTitleBlack({ title: "Our Values", id: "join" })}
          <Grid.Row>
            <Image
              src={retreat}
              style={{
                width: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                height: "100%",
              }}
            ></Image>
          </Grid.Row>
          <Grid.Row centered></Grid.Row>

          {/* <Grid.Row
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
          </Grid.Row> */}
          {CustomTitleBlack({ title: "Find Your Role", id: "place" })}
          <Grid.Row
            centered
            columns={3}
            style={{
              marginTop: "1vw",
              marginRight: screenSizeResult,
              marginLeft: screenSizeResult,
            }}
          >
            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#D2F2F0",
                  borderRadius: "2vw",
                  minWidth: "28vw",
                  minHeight: "35vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2vw",
                    lineHeight: "5vw",
                  }}
                >
                  Executive Team
                </div>
                <Image
                  src={exec}
                  style={{ width: "25vw", margin: "auto", borderRadius: "1vw" }}
                ></Image>
                <div
                  style={{
                    fontSize: "1.6vw",
                    lineHeight: "2.2vw",
                    width: "25vw",
                    margin: "2vw auto",
                    alignText: "center",
                    marginBottom: "2.5vw",
                  }}
                >
                  Our team of execs is in charge of all the club operations.
                  View our current team below!
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#D2F2F0",
                  borderRadius: "2vw",
                  minWidth: "28vw",
                  minHeight: "35vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2vw",
                    lineHeight: "5vw",
                  }}
                >
                  Project Manager
                </div>
                <Image
                  src={pm}
                  style={{ width: "25vw", margin: "auto", borderRadius: "1vw" }}
                ></Image>
                <div
                  style={{
                    fontSize: "1.6vw",
                    lineHeight: "2.2vw",
                    width: "25vw",
                    margin: "1.5vw auto",
                    alignText: "center",
                  }}
                >
                  Project managers apply their analytics expertise to lead
                  consulting teams. We have 10 PMs across 5 projects.
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#D2F2F0",
                  borderRadius: "2vw",
                  minWidth: "28vw",
                  minHeight: "35vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2vw",
                    lineHeight: "5vw",
                  }}
                >
                  Committee Member
                </div>
                <Image
                  src={socgood}
                  style={{ width: "25vw", margin: "auto", borderRadius: "1vw" }}
                ></Image>
                <div
                  style={{
                    fontSize: "1.6vw",
                    lineHeight: "2.2vw",
                    width: "25vw",
                    margin: "1.5vw auto",
                    alignText: "center",
                  }}
                >
                  CMs take charge of their committees: Academic Development,
                  Consulting, and Social Good!
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            centered
            columns={3}
            style={{
              marginTop: "1vw",
              marginRight: screenSizeResult,
              marginLeft: screenSizeResult,
            }}
          >

            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#D2F2F0",
                  borderRadius: "2vw",
                  minWidth: "28vw",
                  minHeight: "35vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2vw",
                    lineHeight: "5vw",
                  }}
                >
                  Decal Student
                </div>
                <Image
                  src={decal}
                  style={{ width: "25vw", margin: "auto", borderRadius: "1vw" }}
                ></Image>
                <div
                  style={{
                    fontSize: "1.6vw",
                    lineHeight: "2.2vw",
                    width: "25vw",
                    margin: "2.25vw auto",
                    alignText: "center",
                  }}
                >
                  DeCal students enroll in our DeCal - run by our Acadev
                  committee - and learn about industry relevant DS tools.
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#D2F2F0",
                  borderRadius: "2vw",
                  minWidth: "28vw",
                  minHeight: "35vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.2vw",
                    lineHeight: "5vw",
                  }}
                >
                  Senior Advisor
                </div>
                <Image
                  src={senior}
                  style={{ width: "25vw", margin: "auto", borderRadius: "1vw" }}
                ></Image>
                <div
                  style={{
                    fontSize: "1.6vw",
                    lineHeight: "2.2vw",
                    width: "25vw",
                    margin: "2vw auto",
                    alignText: "center",
                  }}
                >
                  Our Senior Advisors consist of previous committee members who
                  help advise teams, give guest lectures, and present workshops.
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          {CustomTitleBlack({ title: "Our Exec Team", id: "team" })}
          <Grid.Row centered width={12}>
            <Card.Group centered>{leadershipCards}</Card.Group>
            ``
          </Grid.Row>

          {/* <Grid.Row style={{ marginTop: "7vw", marginLeft: "17vw" }}>
            <Header style={mybigtext}> Our Sponsors</Header>
          </Grid.Row> */}
          {CustomTitleBlack({ title: "Our Sponsors", id: "sponsors" })}
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
                style={{ marginLeft: "-3px", width: "15vw" }}
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
                src={micron}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
              <Image
                src={edlyft}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
              <Image
                src={deepnote}
                style={{ marginLeft: "5vw", width: "15vw" }}
              ></Image>
            </Image.Group>
          </Grid.Row>
          {CustomTitleBlack({ title: "Our Partners", id: "partners" })}
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
              style={{ marginBottom: "20vw" }}
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
          <div id="aboutFooterSpacer" style = {{height: "12vw"}}></div>
        </Grid>
        <Image 
          src={landingSquiggle2}
          style={{
            minWidth: "160vw",
            height: "50vw",
            marginTop: "-27vw",
            marginLeft: "-15vw",
            position: "absolute",
            zIndex: "2",
          }}
          ></Image>
      </div>
    );
  }
}
export default About;
