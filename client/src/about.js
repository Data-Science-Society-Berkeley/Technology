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


import varunmi from "./Leadership Headshots/varun.jpeg";
import edlyft from "./Leadership Headshots/edlyft-logo.jpg";
import asuc from "./Leadership Headshots/asuc_logo.png";
import berkeley from "./Leadership Headshots/berkeley_cdss_logo.png";
import berkeley2 from "./Leadership Headshots/berkeley-eecs-logo.jpg";
import wids from "./Leadership Headshots/wids-berkeley-logo.jpg";
import sponsor1 from "./Leadership Headshots/dsnexus-logo.png";
import sponsor2 from "./Leadership Headshots/leadcenter_logo.png";
import sponsor3 from "./Leadership Headshots/haas-ds-club-logo.png";
import arnav from "./Leadership Headshots/arnav.jpeg";
import sabrina from "./Leadership Headshots/sabrina.jpeg";
import labanya from "./Leadership Headshots/labanya.jpeg";
import alina from "./Leadership Headshots/alina.jpeg";
import marlon from "./Leadership Headshots/marlon.jpeg";
import pranati from "./Leadership Headshots/pranati.jpeg";
import steven from "./Leadership Headshots/steven.jpeg";
import michelle from "./Leadership Headshots/michelle.jpeg";
import siddhant from "./Leadership Headshots/siddhant.jpeg";
import elton from "./Leadership Headshots/EltonHeadshot.jpg";

import pm from "./About/pmgroup.jpeg";
import exec from "./About/exec.jpeg";
import commit from "./About/CommitteeMember.jpg";
import socgood from "./About/socgoodgroup.jpeg";
import gen from "./About/GeneralMember.jpg";
import decal from "./About/DeCal.png";
import senior from "./About/SeniorAdvisor.png";
import join from "./About/JoinUs.jpg";
//import story from './About/OurStory.jpg'
import story from "./About/OurStory-Compressed-min.jpg";
import popout from "./About/popoutDesign.png";
import ret from "./About/RetreatPic.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import youtubeback from "./About/youtubevideo-cover.jpg";
import upright from "./About/cross_up.png";
import bottomleft from "./About/cross_down.png";
import rectangle from "./About/rectangle.png";



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
  fontWeight: "normal",
  fontSize: "2.5vw",
  lineHeight: "3vw",
  height: "3vw",
  color: "#FFFFFF",
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
    <Image src={arnav} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Arnav Patel</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:arnavp418@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/arnavpatel360/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    <Image src={siddhant} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Siddhant Satapathy</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Internal Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:sidsata@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/siddhant-satapathy/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image src={marlon} style={imagestyle}/>
    <Card.Content>
      <Card.Header style={textstyle}>Marlon Fu</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>External Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:marlonfu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/marlonfu/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={michelle} />
    <Card.Content>
      <Card.Header style={textstyle}>Michelle Li</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Technology</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:mko357@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href= "https://www.linkedin.com/in/michelle-l-6ba957135/">
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
        <span style={roleStyle}>VP of Marketing</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:sabrinaywu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/sabrinayihwu/">
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
    <Card.Content extra>
      <a href="mailto:sabrinaywu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/sabrinayihwu/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
  {" "}
  <Image style={imagestyle} src={alina} />
  <Card.Content>
    <Card.Header style={textstyle}>Alina Trinh</Card.Header>
    <Card.Meta style={{ marginTop: "1vw" }}>
      <span style={roleStyle}>VP of Finance</span>
    </Card.Meta>
  </Card.Content>
  <Card.Content extra>
    <a href="mailto:tutrinh@berkeley.edu">
      <Icon size="large" name="mail" />
    </a>
    <a href="https://www.linkedin.com/in/tu-trinh/">
      <Icon size="large" name="linkedin" />
    </a>
  </Card.Content>
</Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={alina} />
    <Card.Content>
      <Card.Header style={textstyle}>Alina Trinh</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Consulting</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:tutrinh@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/tu-trinh/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={angeline} />
    <Card.Content>
      <Card.Header style={textstyle}>Angeline Lee</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:marlonfu@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/marlonfu/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={pranati} />
    <Card.Content>
      <Card.Header style={textstyle}>Pranati Modumudi</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:pmodumudi@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/pranatimodumudi/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={pranati} />
    <Card.Content>
      <Card.Header style={textstyle}>Pranati Modumudi</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:pmodumudi@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/pranatimodumudi/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={steven} />
    <Card.Content>
      <Card.Header style={textstyle}>Steven Chen</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Social Good</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:schen1822@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/steven-z-chen">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>
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
      <div>
        <div>
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
        </div>
        <div>
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
        </div>
        <h1
          style={{
          top:"20vw",
          width: "100%",
          height: "auto",
          textAlign: "center",
          color: "black",
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
        <div>
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
        </div>
        <div>
          <Image style={{position: 'relative',
          top: "20vw",
          // marginTop: '3vw',
          left: "30vw",
          right: "30vw",
          bottom: "15vw",
          // margin: 'auto',
          // margintop: "10vw",
          marginBottom: '15vw',
          height: "38vw",
          maxHeight: "38vw",
          width: "71vw",
          maxWidth: "71vw",
          }}
          src={story}></Image>
        </div>
        <div>
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
              marginRight: screenSizeResult,
              marginLeft: screenSizeResult,
            }}
          >
            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  borderStyle: "solid",
                  borderColor: "#8CD6D1",
                  borderWidth: ".5vw",
                  borderRadius: "3vw",
                  minWidth: "28vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "5vw",
                  }}
                >
                  Executive Team
                </div>
                <Image
                  src={exec}
                  style={{ width: "25vw", margin: "2vw auto" }}
                ></Image>
                <div
                  style={{
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
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
                  borderStyle: "solid",
                  borderColor: "#FFC54A",
                  borderWidth: ".5vw",
                  borderRadius: "3vw",
                  minWidth: "28vw",
                  // marginLeft: screenInterMarginResult,
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "5vw",
                  }}
                >
                  Project Manager
                </div>
                <Image
                  src={pm}
                  style={{ width: "25vw", margin: "2vw auto" }}
                ></Image>
                <div
                  style={{
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
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
                  borderStyle: "solid",
                  borderColor: "#8CD6D1",
                  borderWidth: ".5vw",
                  borderRadius: "3vw",
                  minWidth: "28vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "5vw",
                  }}
                >
                  Committee Member
                </div>
                <Image
                  src={socgood}
                  style={{ width: "25vw", margin: "2vw auto" }}
                ></Image>
                <div
                  style={{
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
                    width: "25vw",
                    margin: "2vw auto",
                    alignText: "center",
                    marginBottom: "3.5vw",
                  }}
                >
                  CMs take charge of their committees: Academic Development,
                  Consulting, DeCal, and Social Good!
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            centered
            columns={3}
            style={{
              marginTop: "5vw",
              marginRight: screenSizeResult,
              marginLeft: screenSizeResult,
            }}
          >
            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  borderStyle: "solid",
                  borderColor: "#FFC54A",
                  borderWidth: ".5vw",
                  borderRadius: "3vw",
                  minWidth: "28vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "5vw",
                  }}
                >
                  General Member
                </div>
                <Image
                  src={commit}
                  style={{ width: "25vw", margin: "2vw auto" }}
                ></Image>
                <div
                  style={{
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
                    width: "25vw",
                    margin: "2vw auto",
                    alignText: "center",
                    marginBottom: "3.5vw",
                  }}
                >
                  GMs complete and present semester-long research projects under
                  the guidance of our Academic Development committee.
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  borderStyle: "solid",
                  borderColor: "#8CD6D1",
                  borderWidth: ".5vw",
                  borderRadius: "3vw",
                  minWidth: "28vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "5vw",
                  }}
                >
                  Decal Student
                </div>
                <Image
                  src={decal}
                  style={{ width: "25vw", margin: "2vw auto" }}
                ></Image>
                <div
                  style={{
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
                    width: "25vw",
                    margin: "2.25vw auto",
                    alignText: "center",
                  }}
                >
                  DeCal students enroll in our DeCal - run by our DeCal
                  committee - and learn about industry relevant DS tools.
                </div>
              </div>
            </Grid.Column>

            <Grid.Column>
              <div
                style={{
                  textAlign: "center",
                  borderStyle: "solid",
                  borderColor: "#FFC54A",
                  borderWidth: ".5vw",
                  borderRadius: "3vw",
                  minWidth: "28vw",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "5vw",
                  }}
                >
                  Senior Advisor
                </div>
                <Image
                  src={senior}
                  style={{ width: "25vw", margin: "2vw auto" }}
                ></Image>
                <div
                  style={{
                    fontSize: "2vw",
                    lineHeight: "2.5vw",
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
