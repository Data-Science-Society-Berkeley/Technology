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
  Segment,
  List,
  GridColumn,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomTitle from "./components/CustomTitle.js";
import CustomTitleBlack from "./components/CustomTitleBlack.js";

import gmLine from "./Acadev Images/gmLine.png";
import workshopLine from "./Acadev Images/workshopLine.png";
import yellowUnderline from "./Acadev Images/yellowUnderline.png";
import CMImage from "./Acadev Images/CMImage.png";
import GMImage from "./Acadev Images/GMImage.png";
import WSImage from "./Acadev Images/WSImage.png";
import acadev_back from "./Acadev Images/acadevBack.png";
import squiggly1 from "./Acadev Images/squiggly1.png";
import squiggly2 from "./Acadev Images/squiggly2.png";
import squiggly3 from "./Acadev Images/squiggly3.png";
import upright from "./Acadev Images/upRight.png";
import bottomleft from "./Acadev Images/bottomLeft.png";


import haas from "./Acadev Images/haasdatascienceclub 1.png";
import bids from "./Acadev Images/Berkeley_Institute_for_Data_Science_-_Logo 1.png";
import saas from "./Acadev Images/saaslogo_square 1.png";
import pcs from "./Acadev Images/pcsberkeley 1.png";
import cal from "./Acadev Images/calactuarialleague 1.png";
import pbl from "./Acadev Images/pbl 1.png";
import mlab from "./Acadev Images/mlabberkeley.png";
import uea from "./Acadev Images/berkuea 1.png";
import berk from "./Acadev Images/cdssberk 1.png";
import data8 from "./Acadev Images/data8logo 1.png";
import sabrina from "./Leadership Headshots/SabrinaHeadshot.jpeg";
import story from "./Acadev Images/AcaDevBanner-compress-min.jpg";
import haas2 from "./Acadev Images/hbsa.jpg";
import ascend from "./Acadev Images/Ascend-Logo.jpg";
import marlon from "./Leadership Headshots/marlon.jpeg";
import pranati from "./Leadership Headshots/pranati.jpeg";
import michelle from "./Leadership Headshots/michelle.jpeg";

let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "97px",
  fontSize: "64px",
  color: "#8CD6D1",
  width: "438px",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "74px",
  marginBottom: "42px",
};

const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "73px",
  fontSize: "48px",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "30px",
  marginTop: "19px",
};
const link = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "80px",
};
const button = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "center",
  background: "#8CD6D1",
  marginLeft: "15vw",
  marginRight: "15vw",
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

const headerbox = {
  background: "#FFFFFF",
  border: "6px solid  #c7ebe8",
  // borderStyle: 'groove',
  boxSizing: "border-box",
  // boxshadow: "120px 80px 40px 20px #0ff",
  // boxShadow: "5px 4px 10px 1px rgba(0, 0, 0, 0.1)",
  boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "5vw",
  height: "17vw",
  width: "70%",
  marginBottom: "5vw",
  marginTop: "-3.5vw",
  marginLeft: "10vw",
  marginRight: "10vw",
  // position: "absolute",
};

const overlayboxes = {
  background: "#ffffff",
  border: ".4vw solid #FFC54A",
  boxSizing: "border-box",
  //boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "37.5vw",
  width: "37.5vw",
  marginBottom: "4vw",
  marginTop: "4vw",
  marginLeft: "5vw",
  marginRight: "5vw",
};
// const overlayboxes2 = {
//   background: "#F8F8F8",
//   border: "5px solid #8CD6D1",
//   boxSizing: "border-box",
//   boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
//   borderRadius: "20px",
//   height: "456px",
//   width: "456px",
//   marginBottom: "70px",
//   marginLeft: "438px",
//   marginTop: "80px",
// };
const cardHeader = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "3vw",
  fontSize: "2.75vw",
  color: "#000000",
  textAlign: "center",
  
  marginTop: "1.5vw",
};

const cardUnderlineStyle = {
  height: "auto",
  maxHeight: "28vw",
  width: "auto",
  maxWidth: "28vw",
  margin: "1vw auto",
};

const cardImageSyle = {
  width: "15vw", 
  margin: "1vw auto",
  marginTop: '2vw',
  backgroundColor: 'transparent',
}

const circleStyle = {
  padding: ".75vw",
  marginLeft: "-3vw",
  marginTop: "-7vw",
  // display: "inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width: "7vw",
  height: "7vw",
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "5vw",
  lineHeight: "6vw",
  color: "#FFFFFF",
  textAlign: "center",
};
const info = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  marginLeft: "8vw",
  marginRight: "8vw",
  width: "80%",
};
const cardDescription = {
  marginTop: ".75vw",
  // marginBottom: "10vw",
  marginLeft: "1.5vw",
  marginRight: "1.5vw",
  fontFamily: "Montserrat",
  fontSize: "1.5vw",
  lineHeight: "2vw",
  textAlign: "center",
};
const bulletedPoints = {
  textAlign: "left",
  fontFamily: "Montserrat",
  fontSize: "1.25vw",
  lineHeight: "2vw",
};
const whatYoullDo = {
  textAlign: "left",
  fontFamily: "Montserrat",
  fontSize: "1.5vw",
  lineHeight: "2vw",
  fontStyle: "normal",
  marginLeft: "-1vw",
};

class Acadev extends Component {
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
    //

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
        <h1
          style={{
          top:"20vw",
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
          fontSize: "6vw",
          lineHeight: "6vw",
        }}
        >Academic Development    
        </h1>
        
        <div>
          <Image style={{position: 'relative',
          top: "20vw",
          // marginTop: '5vw',
          left: "50vw",
          right: "50vw", 
          // bottom: "15vw",
          // margin: 'auto',
          // margintop: "10vw",
          // marginBottom: '22vw',
          height: "28vw",
          maxHeight: "28vw",
          width: "28vw",
          maxWidth: "28vw",
          }}
          src={acadev_back}></Image>
        </div>
        <div>
          <Image src={bottomleft}
          style= {{
            left:"5vw",
            top:"6vw",
            position: "relative",
            height: "18vw",
            maxHeight: "18vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
          <div>
          <Image src={squiggly3}
          style= {{
            left:"0vw",
            top:"-5vw",
            position: "relative",
            height: "25vw",
            maxHeight: "25vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
        </div>
        </div>
        <Grid centered>
        <Grid.Row centered style={headerbox}>
            <Card.Group centered>
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid none",
                  boxSizing: "border-box",
                  borderRadius: "5vw",
                  width: "10%",
                  height: "14vw",
                  // marginTop: "10vw",
                  // marginLeft: "2%",
                  // marginRight: "5%",
                  // fontSize: "2vw",
                  // lineHeight: "2vw",
                  // fontWeight: "21.5vw",
                  fontFamily: "Montserrat",
                  margintop: "10vw"
                }}
              >
                <div
                  style={{
                    marginTop: "4vw",
                    marginLeft: "2%",
                    // marginRight: "2vw",
                    fontSize: "8vw",
                    lineHeight: "8vw",
                    color: '#8CD6D1',
                    fontWeight: "501",

                  }}
                >
                  4
                </div>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  // borderRadius: "3vw",
                  width: "20%",
                  height: "14vw",
                  // marginLeft: "8%",
                  // marginRight: "7vw",
                }}
              >
                <div
                  style={{
                    fontSize: "3vw",
                    lineHeight: "4vw",
                    fontWeight: "21vw",
                    fontFamily: "Montserrat",
                    marginTop: "2vw",
                    // marginLeft: "2vw",
                    // marginRight: "2vw",
                    color: '#8CD6D1',
                  }}
                >
                  Semesters of General Membership
                </div>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  // borderRadius: "3vw",
                  width: "10%",
                  height: "14vw",
                  // marginLeft: "8%",
                  // marginRight: "5%",
                  // fontSize: "2vw",
                  // lineHeight: "2vw",
                  // fontWeight: "21.5vw",
                  fontFamily: "Montserrat",
                }}
              >
                <div
                  style={{
                    marginTop: "4vw",
                    marginLeft: "2%",
                    // marginRight: "2vw",
                    fontSize: "8vw",
                    lineHeight: "8vw",
                    color: '#8CD6D1',
                    fontWeight: "501",

                  }}
                >
                  64
                </div>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  // borderRadius: "3vw",
                  width: "20%",
                  height: "14vw",
                  // marginLeft: "8%",
                  // marginRight: "7vw",
                }}
              >
                <div
                  style={{
                    fontSize: "3vw",
                    lineHeight: "4vw",
                    fontWeight: "21vw",
                    fontFamily: "Montserrat",
                    marginTop: "4vw",
                    // marginLeft: "2vw",
                    // marginRight: "2vw",
                    color: '#8CD6D1',
                  }}
                >
                  Workshops hosted
                </div>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  // borderRadius: "3vw",
                  width: "17%",
                  height: "14vw",
                  marginLeft: "2%",
                  // marginRight: "5%",
                  // fontSize: "2vw",
                  // lineHeight: "2vw",
                  // fontWeight: "21.5vw",
                  fontFamily: "Montserrat",
                }}
              >
                <div
                  style={{
                    marginTop: "4vw",
                    // marginLeft: "2vw",
                    // marginRight: "2vw",
                    fontSize: "8vw",
                    lineHeight: "8vw",
                    color: '#8CD6D1',
                    fontWeight: "501",

                  }}
                >
                  350+{" "}
                </div>{" "}
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  borderRadius: "5vw",
                  width: "20%",
                  height: "14vw",
                  // marginLeft: "8%",
                  // marginRight: "2%",
                }}
              >
                <div
                  style={{
                    fontSize: "3vw",
                    lineHeight: "4vw",
                    fontWeight: "21vw",
                    fontFamily: "Montserrat",
                    marginTop: "4vw",
                    // marginLeft: "2vw",
                    marginRight: "2vw",
                    color: '#8CD6D1',
                  }}
                >
                  Past General Members
                </div>
              </div>
            </Card.Group>
          </Grid.Row>
        </Grid>

        <Grid centered>
          <Grid.Row></Grid.Row>
          
          <Grid.Row
            style={{
              color: "#000000",
              marginTop: "7vw",
              textAlign: "center",
              lineHeight: "4vw",
              fontSize: "2vw",
              fontWeight: "21vw",
              fontStyle: "normal",
              fontFamily: "Montserrat",
              marginLeft: "20vw",
              marginRight: "20vw",
            }}
          >
            The academic development committee hosts a variety of 
            educational workshops for the 
            <strong style={{ color: "#8CD6D1" }}> {" "}
              greater campus community {" "}
            </strong> 
            , and directs our general membership (GM) program open to 
            <strong style={{ color: "#8CD6D1" }}> {" "}
              all skill levels and students {" "}
            </strong>.
            <div>
              <Image
                src={squiggly1}
                style={{
                  right: "-22%",
                  width: "70vw",
                  position: "absolute",
                  top: "-130%",
                }}
              ></Image>
            </div>
          </Grid.Row>

          <Grid.Row>
            <div>
              <Image
                src={squiggly2}
                style={{
                  left: "-20%",
                  width: "50vw",
                  position: "absolute",
                  top: "-10%",
                }}
              ></Image>
            </div>
            {CustomTitleBlack({ title: "General Membership" })}
          </Grid.Row>
          
          <div style={{maxWidth: "50vw"}}>
            <Image src={gmLine}></Image>
          </div>

          <Grid.Row centered style={{ marginBottom: "-1.75vw", marginTop: "2vw" }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "5px solid #8CD6D1",
                boxSizing: "border-box",
                borderRadius: "3vw",
                width: "55%",
                height: "9vw",
                marginLeft: "5%",
                marginRight: "5%",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontWeight: "21.5vw",
                fontFamily: "Montserrat",
              }}
            >
              <div
                style={{
                  marginTop: "2vw",
                  marginLeft: "2vw",
                  marginRight: "2vw",
                }}
              >
                We hope to help students just starting out 
                in Data Science to complete their first Data 
                Science research project!
              </div>
            </div>
          </Grid.Row>
          
          <Grid.Row centered>
            <Card.Group centered>
              <Card style={overlayboxes}>
                <Card.Header style={cardHeader}>
                  Committee Member
                </Card.Header>
                <Image style={cardUnderlineStyle} src={yellowUnderline}></Image>
                <Image style={cardImageSyle} src={CMImage}></Image>
                <Card.Description style={cardDescription}>
                  Act as a mentor for projects and 
                  teach relevant skills for  research! 
                  Conduct  lectures covering Data 
                  Science and project collaboration!
                </Card.Description>
              </Card>
              <Card style={overlayboxes}>
                <Card.Header style={cardHeader}>General Member</Card.Header>
                <div>
                  <Image style={cardUnderlineStyle} src={yellowUnderline}></Image>
                </div>
                
                <Image style={cardImageSyle} src={GMImage}></Image>
                <Card.Description style={cardDescription}>
                  Collaborate and develop a 
                  semester-long project of your 
                  choosing! Present at the Berkeley 
                  Data Science Research Symposium 
                  and publish on the DSS website!
                </Card.Description>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row centered columns={1} style={{marginBottom: "-1.5vw"}}>
            
            <Button.Group centered>
              <Link to="education">
                <Button style={{
                  background: "#FFFFFF",
                  border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  borderRadius: "3vw",
                  width: "100%",
                  height: "7.5vw",
                  marginTop: "-1.5vw",
                  marginBottom: "-1.5vw",
                  //marginLeft: "5%",
                  //marginRight: "5%",
                  fontSize: "2.5vw",
                  lineHeight: "2vw",
                  fontWeight: 200,
                  fontFamily: "Montserrat",
                }}>
                  <div
                    style={{
                      marginTop: "-0.5vw",
                      marginLeft: "0vw",
                      marginRight: "0vw",
                    }}
                  >
                    Apply to become a General Member! 
                  </div>
                </Button>
              </Link>
            </Button.Group>
            <div>
              <Image
                src={squiggly1}
                style={{
                  right: "-10%",
                  width: "70vw",
                  position: "absolute",
                  top: "0%",
                }}
              ></Image>
            </div>
          </Grid.Row>
          
          
          <Grid.Row
            centered
            columns={2}
            style={{ marginTop: "4vw", right: "3vw" }}
          >
            
            {/* No Decal Spring 2021 rip:( */}
            {/* <Grid.Column width={4} textAlign="center">
              <Link to="/decal">
                <div style={info}>
                  <strong style={{ color: "#FFC54A" }}>
                    {" "}
                    Interested in being a part of our DeCal instead?{" "}
                  </strong>
                  Check out the DeCal Committee Page.
                </div>
              </Link>
            </Grid.Column> */}
          
          </Grid.Row>
          {CustomTitleBlack({ title: "Workshops" })}
          <Grid.Row>
          <div style={{maxWidth: "27vw"}}>
            <Image src={workshopLine}></Image>
          </div>
          
          <Grid.Row centered style={{ marginBottom: "0vw", marginTop: "3.5vw" }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "5px solid #8CD6D1",
                boxSizing: "border-box",
                borderRadius: "3vw",
                width: "55%",
                height: "12vw",
                //marginLeft: "5%",
                //marginRight: "5%",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontWeight: "21.5vw",
                fontFamily: "Montserrat",
                margin: 'auto',
              }}
            >
              <div
                style={{
                  marginTop: "2vw",
                  marginLeft: "2vw",
                  marginRight: "2vw",
                }}
              >
                Collaborate with students from a variety of backgrounds 
                and other organizations to educate the campus 
                community of practical problems, phenomena and tools 
                related to data science. 
              </div>
            </div>
          </Grid.Row>

          <Grid.Row centered>
            <Card.Group centered>
              <Card style={overlayboxes}>
                <Image src={WSImage} style={{
                  width: "19vw", 
                  margin: "1vw auto",
                  marginTop: '3vw',
                  backgroundColor: 'transparent',}}
                ></Image>
                <Card.Description style={cardDescription}>
                  Communicate with fellow team 
                  members and other organizations 
                  to develop workshop materials! 
                  Teach diverse audiences and 
                  support the data science 
                  community on and off-campus!
                </Card.Description>
              </Card>
            </Card.Group>
          </Grid.Row>
          

          <Grid.Row centered style={{ marginBottom: "3vw", marginTop: "0vw"}}>
            <Card.Group centered>
              <Card style={{
                background: "#FFFFFF",
                border: "5px solid #8CD6D1",
                boxSizing: "border-box",
                borderRadius: "3vw",
                width: "25%",
                height: "14vw",
                //marginLeft: "8%",
                //marginRight: "5%",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontWeight: "21.5vw",
                fontFamily: "Montserrat",
              }}>
                <div
                style={{
                  marginTop: "3vw",
                  marginLeft: "2vw",
                  marginRight: "2vw",
                }}
                >
                  Check out our{" "}
                  <Link to="/events">
                    <strong style={{ color: "#FFC54A" }}> Events</strong>
                  </Link>{" "}
                  page to view our past academic collaborations.
                </div>
              </Card>
              <Card style={{
                background: "#FFFFFF",
                border: "5px solid #8CD6D1",
                boxSizing: "border-box",
                borderRadius: "3vw",
                width: "40%",
                height: "14vw",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontWeight: "21vw",
                fontFamily: "Montserrat",
                //marginLeft: "8%",
                //marginRight: "7vw",
              }}>
                <div
                style={{
                  marginTop: "2vw",
                  marginLeft: "2vw",
                  marginRight: "2vw",
                }}
              >
                Interested in DSS hosting a workshop for you? Interested in
                co-hosting a workshop with us?
              </div>
                <Link to="/services">
                  <div
                    style={{
                      color: "#FFC54A",
                      fontSize: "2vw",
                      lineHeight: "2vw",
                      fontWeight: "21vw",
                      fontFamily: "Montserrat",
                      marginTop: "2vw",
                      marginLeft: "2vw",
                      marginRight: "2vw",
                    }}
                  >
                    Contact us here 
                  </div>
                </Link>
              </Card>
            </Card.Group>
          </Grid.Row>
          
          </Grid.Row>
          {CustomTitleBlack({ title: "AcaDev Directors" })}
          <Grid.Row>
            <Card.Group style={{ marginTop: "5vw" }}>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={marlon} />
                <Card.Content>
                  <Card.Header style={textstyle}>Marlon Fu</Card.Header>
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
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={michelle} />
                <Card.Content>
                  <Card.Header style={textstyle}>Michelle Li</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Director of Acadev</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:mko357@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/michelle-l-6ba957135/">
                    <Icon size="large" name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={pranati} />
                <Card.Content>
                  <Card.Header style={textstyle}>Pranati Modumodi</Card.Header>
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
              </Card>
            </Card.Group>
          </Grid.Row>


          <Grid.Row></Grid.Row>
          {CustomTitle({ title: "Current and Past Collaborations" })}
          <Grid.Row>
            <Image.Group style={{ marginLeft: "14vw", marginRight: "14vw", marginBottom: "7vw" }}>
              <Image src={haas} style={{ marginRight: "5vw" }}></Image>
              <Image src={saas} style={{ marginRight: "4.5vw" }}></Image>
              <Image src={pcs} style={{ marginRight: "5vw" }}></Image>
              <Image src={cal} style={{ marginRight: "5vw" }}></Image>
              <Image src={pbl} style={{ marginRight: "5vw" }}></Image>
              <Image src={mlab} style={{ marginRight: "5vw" }}></Image>
              <Image src={uea} style={{ marginRight: "7vw" }}></Image>
              <Image src={bids} style={{ marginRight: "5vw" }}></Image>
              <Image src={berk} style={{ marginRight: "5vw" }}></Image>
              <Image src={data8} style={{ marginRight: "4.5vw" }}></Image>
              <Image src={haas2} style={{ marginRight: "1vw" }}></Image>
              <Image
                src={ascend}
                style={{ marginRight: "1vw", height: "8vw", width: "21vw" }}
              ></Image>
            </Image.Group>
          </Grid.Row>
          
        </Grid>
      </div>
    );
  }
}
export default Acadev;