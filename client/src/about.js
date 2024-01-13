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


import edlyft from "./Leadership Headshots/edlyft-logo.jpg";
import asuc from "./Leadership Headshots/asuc_logo.png";

import cdss from "./Leadership Headshots/berkeley_cdss_logo.png";
import data8 from "./Collaborators/data8logo.png";
import pcs from "./Collaborators/pcsberkeley.png";
import cal from "./Collaborators/calactuarialleague.png";
import eab from "./Collaborators/entrepeneursberk.png";
import blueprint from "./Collaborators/blueprint.png";
import uea from "./Collaborators/berkuea.png";
import bids from "./Collaborators/Berkeley_Institute_for_Data_Science_-_Logo.png"
import haasds from "./Leadership Headshots/haas-ds-club-logo.png";
import saas from "./Collaborators/saaslogo_square.png";
import hbsa from "./Collaborators/hbsa.png";
import ascend from "./Collaborators/Ascend-Logo.png";
import pbl from "./Collaborators/pbl.png";
import mlab from "./Collaborators/mlabberkeley.png";
import ecode from "./Collaborators/ecode.png";
import nib from "./Collaborators/nib.png";

import berkeley2 from "./Leadership Headshots/berkeley-eecs-logo.jpg";
import wids from "./Leadership Headshots/wids-berkeley-logo.jpg";
import sponsor1 from "./Leadership Headshots/dsnexus-logo.png";
import sponsor2 from "./Leadership Headshots/leadcenter_logo.png";
import sponsor3 from "./Leadership Headshots/haas-ds-club-logo.png";
import deepnote from "./Leadership Headshots/deepnote.png";
import angeline from "./Leadership Headshots/Angeline1.jpg";
import sumin from "./Leadership Headshots/Sumin.png";
import steven from "./Leadership Headshots/Steven2.jpg";
import suparna from "./Leadership Headshots/Suparna.jpg";
import manas from "./Leadership Headshots/Manas.png";
import preetha from "./Leadership Headshots/Preetha2.jpg";
import medha from "./Leadership Headshots/medha.jpg";
import james from "./Leadership Headshots/JamesG.jpg";
import lillian from "./Leadership Headshots/lillian.jpeg";
import arnavg from "./Leadership Headshots/arnavg.jpeg";
import natraj from "./Leadership Headshots/natraj.jpg";
import erin from "./Leadership Headshots/Erin.jpg";
import ethan from "./Leadership Headshots/ethan.jpeg";
import aarthi from "./Leadership Headshots/aarthi.jpg";
import austin from "./Leadership Headshots/austin.jpeg";
import harshit from "./Leadership Headshots/Harshit2.jpeg";
import joseph from "./Leadership Headshots/Joseph.jpg";
import lucy from "./Leadership Headshots/Lucy.jpg";
import christina from "./Leadership Headshots/Christina.jpg";
import kristen from "./Leadership Headshots/Kristen.jpg";
import michael from "./Leadership Headshots/Michael.jpg";
import sid from "./Leadership Headshots/Sid.jpg";
import tommy from "./Leadership Headshots/Tommy.jpg";
import stephen from "./Leadership Headshots/stephen.jpg";
import rahul from "./Leadership Headshots/rahul.jpeg";

import pm from "./About/pmgroup.jpeg";
import exec from "./About/exec.jpeg";
import commit from "./About/CommitteeMember.jpg";
import socgood from "./About/socgoodgroup.jpeg";
import gen from "./About/GeneralMember.jpg";
import decal from "./Decal Images/decalberkeleylogo 1.png";
import senior from "./About/SeniorAdvisor.png";
import join from "./About/JoinUs.jpg";
import story from "./About/team.png";
import popout from "./About/popoutDesign.png";
import ret from "./About/RetreatPic.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import youtubeback from "./About/youtubevideo-cover.jpg";
import upright from "./About/cross_up.png";
import bottomleft from "./About/cross_down.png";
import rectangle from "./About/rectangle.png";
import micron from "./About/micron.png"
import linesOne from "./Homepage/linesOne.png"
import linesTwo from "./Homepage/linesTwo.png"
import gradient2 from "./Homepage/homepagegradient2.png"



let endpoint = "http://localhost:8080";
const gridoffset = {
  marginTop: "3vw",
  textAlign: "center",
  fontFamily: "Lato",
  gridTemplateColumns:"repeat(5, 1fr)",
};

const mybigtext = {
  fontFamily: "Lato",
  fontWeight: 500,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
};
const header = {
  fontFamily: "Lato",
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
  objectFit: "cover",
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
  color: "#000000",
};

const execstyle1 = {
  fontFamily: "Lato",
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
  fontFamily: "Lato",
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
  fontFamily: "Lato",
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
  fontFamily: "Lato",
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
  fontFamily: "Lato",
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
  fontFamily: "Lato",
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
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "2vw",
  lineHeight: "3vw",
  height: "0vw",
  color: "black",
  height: "0vw",
  color: "black",
  whiteSpace: "nowrap",
  position: "absolute",
  top: "20%",
  top: "20%",
  left: "50%",
  textAlign: "center",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
};

const aboutlinks2 = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "2.5vw",
  color: "black",
  marginLeft: "auto",
  left: "0vw",
  textAlign: "center",
  position: "relative",
};

const aboutlinks3 = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "2vw",
  lineHeight: "3vw",
  width: "20vw",
  height: "3vw",
  color: "black",
  position: "absolute",
  top: "20%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)"
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
  fontFamily: "Lato",
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
  fontFamily: "Lato",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "72px",
  lineHeight: "88px",
  color: "#FFFFFF",
  textAlign: "center",
};
const leadershipCards = [
  <Card style={cardstyle}>
    <Image src={preetha} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Preetha Kumar</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>President</span>
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
    <Image src={tommy} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Thomas Chen</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Internal Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:thomasychen@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/thomas-y-chen/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image src={christina} style={imagestyle}/>
    <Card.Content>
      <Card.Header style={textstyle}>Christina Kim</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>External Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:25ckim@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/christina-kim-67906b24a/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={harshit} />
    <Card.Content>
      <Card.Header style={textstyle}>Harshit Jain</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Technology</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:harshitjain153@berkeley.edu>">
        <Icon size="large" name="mail" />
      </a>
      <a href= "https://www.linkedin.com/in/harshit-jain7/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={lucy} />
    <Card.Content>
      <Card.Header style={textstyle}>Lucy Yue</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Marketing</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:lucy.yue@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/lucyyue/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={austin} />
    <Card.Content>
      <Card.Header style={textstyle}>Austin Ardisaputra</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
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
  <Card style={cardstyle}>
  {" "}
    <Image style={imagestyle} src={rahul} />
    <Card.Content>
      <Card.Header style={textstyle}>Rahul Ravishankar</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:rravishankar@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/rahulravishankar1/">
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
        <span style={roleStyle}>VP of Finance</span>
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
    <Image style={imagestyle} src={sid} />
    <Card.Content>
      <Card.Header style={textstyle}>Siddharth Ramshankar</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Consulting</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:siddharthr@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/siddharth-ramshankar1/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={kristen} />
    <Card.Content>
      <Card.Header style={textstyle}>Kristen Vitolo</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Social Good</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:kvitolo@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/kristen-vitolo/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
  {" "}
    <Image style={imagestyle} src={steven} />
    <Card.Content>
      <Card.Header style={textstyle}>Steven Zeng</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:k1519632@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/zengsteven/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={james} />
    <Card.Content>
      <Card.Header style={textstyle}>James Geronimo</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
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
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={joseph} />
    <Card.Content>
      <Card.Header style={textstyle}>Joseph Zhai</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
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
  </Card>,
  <Card style={cardstyle}>
  {" "}
  <Image style={imagestyle} src={michael} />
  <Card.Content>
    <Card.Header style={textstyle}>Michael Florip</Card.Header>
    <Card.Meta style={{ marginTop: "1vw" }}>
      <span style={roleStyle}>VP of Sourcing</span>
    </Card.Meta>
  </Card.Content>
  <Card.Content extra>
    <a href="mailto:michaelflorip@berkeley.edu">
      <Icon size="large" name="mail" />
    </a>
    <a href="https://www.linkedin.com/in/michaelflorip/">
      <Icon size="large" name="linkedin" />
    </a>
  </Card.Content>
</Card>,

];

const mymidtext = {
  fontFamily: "Lato",
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
  scrollSponsor() {
    document.getElementById("sponsors").scrollIntoView();
  }
  scrollWho() {
    document.getElementById("who").scrollIntoView();
  }
  scrollCommittee() {
    document.getElementById("committees").scrollIntoView();
  }
  scrollTeam() {
    document.getElementById("team").scrollIntoView();
  }
  scrollMission() {
    document.getElementById("mission").scrollIntoView();
  }
  scrollMission() {
    document.getElementById("mission").scrollIntoView();
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
      <div class="wrapper" style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #D2F2F0 11%, #FFFFFF 15%, #FFFFFF 30%, #CCF0E5 50%, #DFF7F2 60%, #FFFFFF 80%)",
        width: "133vw",
      }}>
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
          <Image style={{position: 'relative',
          top: "0vw",
          top: "0vw",
          // marginTop: '3vw',
          left: "0vw",
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
          // marginBottom: '0vw',
          // height: "70vw",
          // maxHeight: "80vw",
          width: "100%",
          maxWidth: "100%",
          }}
          src={story}></Image>
        </div>
        <h1
          style={{
          top:"15vw",
          width: "100%",
          height: "auto",
          textAlign: "center",
          color: "white",
          margin: 'auto',
          // marginBottom:'10vw',
          //marginTop: "5vw",
          position: "absolute",
          // transform: "translate(-50%, -50%)",
          fontFamily: "Lato",
          fontWeight: "bold",
          fontSize: "6vw",
          lineHeight: "6vw",
        }}
        >ABOUT US
        </h1>
        {/* <div>
          <Image src={bottomleft}
          style= {{
            left:"0vw",
            top:"0vw",
            position: "relative",
            height: "18vw",
            maxHeight: "18vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
        </div> */}
        <Grid entered style={gridoffset}>
          {/* onClick scroll handlers are redundant, consider removing */}
          <Grid.Row
            width={16}
            columns={5}
            style={{
              backgroundColor: "#D2F2F0",
              width: "100vw",
              backgroundColor: "#D2F2F0",
              width: "100vw",
              height: "7vw",
              marginTop: "-3vw",
              position: "relative",
            }}
          >
            <Grid.Column width={3} style={aboutlinks2}>
              <div onClick={this.scrollWho} style={aboutlinks}>
                <a href="#who" style= {{
                  color: "#000000",
                  textDecoration: "none",
                }}>
                  Who We Are
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div onClick={this.scrollMission} style={aboutlinks}>
                <a href="#mission" style= {{
                  color: "#000000",
                  textDecoration: "none",
                }}>
                  Mission & Values
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div onClick={this.scrollCommittee} style={aboutlinks}>
                <a href="#committees" style= {{
                  color: "#000000",
                  textDecoration: "none",
                }}>
                  Our Committees
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div onClick={this.scrollTeam} style={aboutlinks}>
                <a href="#team" style= {{
                  color: "#000000",
                  textDecoration: "none",
                }}>
                  Executive Team
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div onClick={this.scrollSponsor} style={aboutlinks3}>
                <a href="#sponsors" style= {{
                  color: "#000000",
                  textDecoration: "none",
                }}>
                  Sponsors & Collaborators
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
          <div id="who">
          </div>
          <Grid.Row centered columns={1} style={{ marginBottom: "7vw" }}>
          <div
            style={{
              zIndex: "1",
              position: "relative",
              marginBottom: "-25vw",
            }}
            >
          </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                top: "25vw",
                left: "1vw",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2vw",
                lineHeight: "6vw",
                color: "black",
                marginBottom: "3vw",
                alignText: "center",
              }}
            >
            <div style={{
              height: "20vw",
              width: "100vw",
            }}>
              <img src={linesOne} style={{
                position: "absolute",
                left: "-10vw",
                width: "160vw",
                height: "20vw",
              }}></img>
            </div>
            <span id="whoWeAre">Who We Are</span>
            </div>
            <div
              centered
              style={{
                position: "relative",
                textShadow: "none",
                width: "89vw",
                top: "22vw",
                left: "23vw",
                zIndex: "4",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "2.1vw",
                lineHeight: "2.5vw",
                color: "black",
                alignText: "center",
              }}
            >
              Data Science Society is UC Berkeley's first student-run, not-for-profit organization 
              focused on data science and its interdisciplinary applications. Since our founding in 
              2016, we have united students from a wide range of disciplines behind our shared 
              passion for all things data.
          </div>
          </Grid.Row>
          {/* <Grid entered style={gridoffset}> */}
          <Grid.Row
            width={10}
            columns={4}
            style={{
              // backgroundColor: "#8CD6D1",
              width: "50%",
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
          <Grid.Row centered columns={1} style={{ marginBottom: "7vw" }}>
          <div
            style={{
              position: "relative",
              textShadow: "none",
              top: "15vw",
              left: "1vw",
              zIndex: "3",
              fontFamily: "Lato",
              fontStyle: "43vw",
              fontWeight: "bold",
              fontSize: "2vw",
              lineHeight: "6vw",
              color: "black",
              marginBottom: "3vw",
              alignText: "center",
            }}
          >
          <span>Mission and Values</span>
          </div>
          <div id="mission">
          </div>
          <div
            centered
            style={{
              position: "relative",
              textShadow: "none",
              width: "92vw",
              top: "13vw",
              left: "23vw",
              zIndex: "4",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "2.1vw",
              lineHeight: "2.5vw",
              color: "black",
              alignText: "center",
            }}
            >
              Our mission is to foster a strong data science community on campus by advocating
              for educational workshops, professional events, and corporate projects. Our educational 
              and consulting initiatives have impacted thousands of students in a variety of majors 
              across campus and given them the technical and soft skills needed to thrive in an 
              increasingly data-centric world.`
          </div>
        </Grid.Row>
        <div id="committees">
          </div>
        <Grid.Row centered columns={1} style={{ marginBottom: "7vw" }}>
          <div
            style={{
              zIndex: "1",
              position: "relative",
              marginBottom: "-25vw",
            }}
            >
          </div>
          <div
            style={{
              position: "absolute",
              textShadow: "none",
              width: "50vw",
              top: "15vw",
              left: "44vw",
              zIndex: "3",
              fontFamily: "Lato",
              fontStyle: "43vw",
              fontWeight: "bold",
              fontSize: "3vw",
              lineHeight: "4vw",
              color: "black",
              marginBottom: "7vw",
              alignText: "center",
            }}
          >
          <span>How We Achieve This Mission: Our Committees</span>
          </div>
          <div>
            <Image src={rectangle}
            style= {{
              position: 'relative',
              top: "48vw",
              left: '49vw',
              height: "0.75vw",
              maxHeight: "1.5vw",
              width: "40vw",
              // dated design, adjusting opacity instead of deleting to maintain space
              opacity: "0",
            }}>
            </Image>
          </div>
          <div
          style={{
            position: "relative",
            textShadow: "none",
            top: "50vw",
            left: "1.5vw",
            zIndex: "3",
            fontFamily: "Lato",
            fontStyle: "43vw",
            fontWeight: "bold",
            fontSize: "2vw",
            lineHeight: "6vw",
            color: "black",
            marginBottom: "2.5vw",
            alignText: "center",
          }}
          >
          <span id="academicDevelopment">Academic Development Committee</span>
          </div>
          <div
            centered
            style={{
              position: "relative",
              textShadow: "none",
              width: "82vw",
              top: "50vw",
              left: "28vw",
              zIndex: "4",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "2.1vw",
              lineHeight: "2.5vw",
              color: "black",
              marginBottom: "5vw",
              alignText: "center",
            }}
          >
            The academic development committee directs our decal program open to
            all skill levels and students and hosts a variety of educational workshops for the
            greater campus community.
            <br></br>
            <br></br>
            <a href="./joinus" style={{
              color: "#77B8B3",
              fontStyle: "italic",
              textDecoration: "none",
            }}>Join Acadev →</a>
          </div>
          <div
            style={{
              position: "relative",
              textShadow: "none",
              top: "50vw",
              left: "1vw",
              zIndex: "3",
              fontFamily: "Lato",
              fontStyle: "43vw",
              fontWeight: "bold",
              fontSize: "2vw",
              lineHeight: "6vw",
              color: "black",
              marginBottom: "2.5vw",
              alignText: "center",
            }}
          >
          <span id="socialGood">Social Good Committee</span>
          </div>
          <div
            centered
            style={{
              position: "relative",
              textShadow: "none",
              width: "87vw",
              top: "50vw",
              left: "26vw",
              zIndex: "4",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "2.1vw",
              lineHeight: "2.5vw",
              color: "black",
              marginBottom: "5vw",
              alignText: "center",
            }}
            >
              We are passionate about contributing to tech for good by identifying 
              data-driven insights and actionable solutions for the missions of 
              non-profit organizations. The Social Good committee acts as a consulting
              committee for nonprofits with social good initiatives.
              <br></br>
              <br></br>
              <a href="./joinus" style={{
                color: "#77B8B3",
                fontStyle: "italic",
                textDecoration: "none",
              }}>Join Social Good →</a>
          </div>
          <div
            style={{
              position: "relative",
              textShadow: "none",
              top: "50vw",
              left: "1vw",
              zIndex: "3",
              fontFamily: "Lato",
              fontStyle: "43vw",
              fontWeight: "bold",
              fontSize: "2vw",
              lineHeight: "6vw",
              color: "black",
              marginBottom: "2.5vw",
              alignText: "center",
            }}
          >
          <span id="consulting">Consulting Committee</span>
          </div>
          <div
            centered
            style={{
              position: "relative",
              textShadow: "none",
              width: "85vw",
              top: "50vw",
              left: "26vw",
              zIndex: "4",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "2.1vw",
              lineHeight: "2.5vw",
              color: "black",
              marginBottom: "10vw",
              alignText: "center",
            }}
            >
              We are passionate about working with corporate clients 
              to provide data-driven insights and actionable solutions through 
              advanced analytical methods.
              <br></br>
              <br></br>
              <a href="./joinus" style={{
                color: "#77B8B3",
                fontStyle: "italic",
                textDecoration: "none",
              }}>Join Consulting →</a>
          </div>
        </Grid.Row>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            
          </Grid>
          <Grid.Row centered width={12} style={{ marginTop: "35vw" }}>
            <div id="team" style={{
              height: "5vw",
            }}>
            </div>
            {/* {CustomTitle({ title: "Our Executive Team", id: "team" })} */}
            <div
            style={{
              position: "absolute",
              textShadow: "none",
              width: "61vw",
              top: "5vw",
              left: "38vw",
              zIndex: "3",
              fontFamily: "Lato",
              fontStyle: "43vw",
              fontWeight: "bold",
              fontSize: "3.5vw",
              lineHeight: "4vw",
              color: "black",
              marginBottom: "5vw",
              alignText: "center",
            }}
          >
            <span>Meet Our Executive Team</span>
          </div>
          <div>
            <Image src={rectangle}
            style= {{
              position: 'relative',
              top: "4vw",
              left: '1.5vw',
              height: "0.75vw",
              maxHeight: "1.5vw",
              width: "40vw",
              marginBottom: "10vw",
              // dated design, adjusting opacity instead of deleting to maintain space
              opacity: "0",
            }}>
            </Image>
          </div>
            <Card.Group centered>{leadershipCards}</Card.Group>
            ``
          </Grid.Row>
          <div id="sponsors">
          </div>
          <Grid.Row style={{ marginTop: "7vw", marginLeft: "17vw" }}>
          <div
            style={{
              position: "absolute",
              textShadow: "none",
              width: "45vw",
              top: "0vw",
              left: "29vw",
              zIndex: "3",
              fontFamily: "Lato",
              fontStyle: "43vw",
              fontWeight: "bold",
              fontSize: "3.5vw",
              lineHeight: "4vw",
              color: "black",
              marginBottom: "10vw",
              alignText: "center",
            }}
          >
            <span>Sponsors</span>
            </div>
            <div>
              <Image src={rectangle}
              style= {{
                position: 'relative',
                top: "4vw",
                left: '31vw',
                height: "0.75vw",
                maxHeight: "1.5vw",
                width: "40vw",
                marginBottom: "10vw",
                // dated design, adjusting opacity instead of deleting to maintain space
                opacity: "0",
              }}>
              </Image>
            </div>
          </Grid.Row>
          <Grid.Row>
            <Image.Group size={"medium"}>
              <Image
                src={deepnote}
                style={{ 
                  top: "-8vw",
                  // marginLeft: "-3px", 
                  width: "25vw", 
                  // marginTop: "3vw" 
                }}
              ></Image>
              <Image
                src={decal}
                style={{
                  top: "-8vw",
                  // marginLeft: "5vw",
                  width: "20vw",
                  // marginTop: "-7vw",
                }}
              ></Image>
            </Image.Group>
          </Grid.Row>
          {/* {CustomTitle({ title: "Our Partners", id: "partners" })} */}
          <Grid.Row centered>
            <div
              style={{
                textShadow: "none",
                width: "60vw",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "3.5vw",
                lineHeight: "4vw",
                color: "black",
                margin: "auto",
                alignText: "center",
              }}
            >
            <span>Current and Past Collaborators</span>
            </div>
            <div>
              <Image src={rectangle}
              style= {{
                position: 'relative',
                top: "15vw",
                left: '50vw',
                height: "0.75vw",
                maxHeight: "1.5vw",
                width: "40vw",
                // dated design, adjusting opacity instead of deleting to maintain space
                opacity: "0",
              }}>
              </Image>
            </div>
            </Grid.Row>
            <Grid.Row centered>
            <Image.Group
              size={"medium"}
              style={{ marginTop: "3vw", marginBottom: "0vw" }}
            >
              <Image
                style={{ width: "15vw" }}
                src={cdss}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={data8}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "25vw" }}
                src={pcs}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={cal}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={cal}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
            >
              <Image
                style={{ width: "15vw" }}
                src={eab}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={blueprint}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "25vw" }}
                src={uea}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={bids}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
            >
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
            >
              <Image
                style={{ width: "15vw" }}
                src={haasds}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "18vw" }}
                src={saas}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "18vw" }}
                src={hbsa}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "20vw" }}
                src={ascend}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "18vw" }}
                src={saas}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "18vw" }}
                src={hbsa}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "20vw" }}
                src={ascend}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
            >
              <Image
                style={{ width: "15vw" }}
                src={pbl}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "20vw" }}
                src={mlab}
              ></Image>
              <Image
                style={{ marginLeft: "6vw", width: "18vw" }}
                src={ecode}
              ></Image>
              <Image
                style={{ left: "3vw", marginLeft: "2vw", width: "25vw" }}
                src={nib}
              ></Image>
              <Image
                style={{ left: "3vw", marginLeft: "2vw", width: "25vw" }}
                src={nib}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <div
              style={{
                position: "absolute",
                textShadow: "none",
                width: "45vw",
                top: "0vw",
                left: "46vw",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2.5vw",
                lineHeight: "4vw",
                color: "black",
                marginBottom: "10vw",
                marginTop: "10vw",
                alignText: "center",
              }}
            >
            {/* <span>Where We Go</span>
            </div>
            <div>
              <Image src={rectangle}
              style= {{
                position: 'relative',
                top: "15vw",
                left: '1.5vw',
                height: "0.75vw",
                maxHeight: "1.5vw",
                width: "55vw",
                marginBottom: "17vw"
              }}>
              </Image> */}
            </div>
            </Grid.Row>
        </Grid>
        <div style={{
              height: "35vw",
            }}>
              <img src={linesTwo} style={{
                position: "absolute",
                width: "180vw",
                left: "-10vw",
                marginTop: "0vw",
                zIndex: "2",
                height: "40vw",
              }}></img>
            </div>
      </div>
    );
  }
}
export default About;
