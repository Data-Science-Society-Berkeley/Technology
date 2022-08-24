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
  CardDescription,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomTitle from "./components/CustomTitle.js";
import CustomTitleBlack from "./components/CustomTitleBlack.js";

import ExpertiseLine from "./Consulting/ExpertiseLine.png";
import ClientLine from "./Consulting/ClientLine.png";
import BizIntelImage from "./Consulting/BizIntelImage.png";
import MLImage from "./Consulting/MLImage.png";
import SDImage from "./Consulting/SDImage.png";
import squiggle2 from "./Consulting/squiggle2.png";
import squiggle3 from "./Consulting/squiggle3.png";
import upright from "./Consulting/topRight.png";
import bottomleft from "./Consulting/bottomLeft.png";
import logo from "./Consulting/logo.png";
import flyer from "./Backgrounds/fa22.png"


import down from "./Consulting/ClientTestimonials.png";
import workwus from "./Consulting/WorkWithUs.png";


import collab from "./Consulting/consultingheader-compress-min.jpg";



let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const headerbox = {
  background: "#FFFFFF",
  border: "6px solid  #c7ebe8",
  boxSizing: "border-box",
  boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "5vw",
  height: "19vw",
  width: "70%",
  marginBottom: "5vw",
  marginTop: "6vw",
  marginLeft: "10vw",
  marginRight: "10vw",
};


const overlayboxes = {
  background: "#ffffff",
  border: ".4vw solid #8CD6D1",
  boxSizing: "border-box",
  //boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "34vw",
  width: "34vw",
  marginBottom: "4vw",
  marginTop: "4vw",
  marginLeft: "3vw",
  marginRight: "3vw",
};

const overlayboxes2 = {
  background: "#ffffff",
  border: ".4vw solid #FFC54A",
  boxSizing: "border-box",
  //boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "34vw",
  width: "34vw",
  marginBottom: "4vw",
  marginTop: "4vw",
  marginLeft: "3vw",
  marginRight: "3vw",
};

const cardHeader = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "3vw",
  fontSize: "2.5vw",
  color: "#000000",
  textAlign: "center",
  marginTop: "3vw",
};

const cardDescription = {
  marginTop: "1vw",
  // marginBottom: "10vw",
  marginLeft: "1.5vw",
  marginRight: "1.5vw",
  fontFamily: "Montserrat",
  fontSize: "1.5vw",
  lineHeight: "2vw",
  textAlign: "center",
};

const cardImageSyle = {
  width: "15vw",
  margin: "1vw auto",
  marginTop: '3vw',
  backgroundColor: 'transparent',
}

var circleStyle = {
  padding: "1vw",
  marginLeft: "-3vw",
  marginTop: "-9vw",
  display: "inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width: "8vw",
  height: "8vw",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "43vw",
  fontSize: "5vw",
  lineHeight: "6vw",
  color: "#FFFFFF",
  textAlign: "center",
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
  lineHeight: "44px",
  fontSize: "36px",
  color: "#8CD6D1",
  fontStyle: "normal",
  marginTop: "19px",
};
const consult = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2vw",
  fontSize: "1.5vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "left",
  width: "80%",
  marginLeft: "4vw",
  verticalAlign: "middle",
};
const smallconsult = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "22px",
  fontSize: "18px",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  width: "915px",
  marginLeft: "49px",
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

const link = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "80px",
};
class Consulting extends Component {
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
  testa() {
    document.getElementById("testa").scrollIntoView();
  }
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
        {/* <h1
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
        >Join Us
        </h1> */}

        <div>
          <Image style={{position: 'relative',
          top: "5vw",
          // marginTop: '5vw',
          left: "1.5vw",
          right: "1.5vw",
          bottom: "15vw",
          // margin: 'auto',
          // margintop: "10vw",
          marginBottom: '15vw',
          height: "58vw",
          // maxHeight: "28vw",
          // width: "115vw",
          // maxWidth: "28vw",
          }}
          src={flyer}></Image>
        </div>
        {/* <div>
          <Image src={bottomleft}
          style= {{
            left:"5vw",
            top:"55vw",
            position: "absolute",
            height: "18vw",
            maxHeight: "18vw",
            width: "30vw",
            maxWidth: "30vw",
          }}>
          </Image>
        </div> */}
        {/* <div>
          <Image src={squiggle2}
          style= {{
            left:"-5vw",
            bottom:"-35vw",
            position: "relative",
            height: "15vw",
            maxHeight: "18vw",
            width: "40vw",
            maxWidth: "40vw",
          }}>
          </Image>
        </div> */}
        {/* <Grid centered>
        <Grid.Row centered style={headerbox}>
            <Card.Group centered>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  borderRadius: "5vw",
                  width: "10%",
                  height: "14vw",
                  // marginTop: "10vw",
                  marginLeft: "0",
                  marginRight: "0",
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
                    // marginLeft: "8%",
                    marginRight: "0",
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
                  width: "25%",
                  height: "14vw",
                  marginLeft: "0%",
                  marginRight: "7.5vw",
                }}
              >
                <div
                  style={{
                    fontSize: "3.5vw",
                    lineHeight: "4vw",
                    fontWeight: "21vw",
                    fontFamily: "Montserrat",
                    marginTop: "4vw",
                    // marginLeft: "2vw",
                    // marginRight: "2vw",
                    color: '#8CD6D1',
                  }}
                >Ongoing Projects
                </div>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  // border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  // borderRadius: "3vw",
                  width: "30%",
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
                    left:"20vw",
                    marginLeft: "30%",
                    marginRight: "0",
                    fontSize: "8vw",
                    lineHeight: "8vw",
                    color: '#8CD6D1',
                    fontWeight: "501",

                  }}
                >
                  38
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
                  marginRight: "3vw",
                }}
              >
                <div
                  style={{
                    fontSize: "3.5vw",
                    lineHeight: "4vw",
                    fontWeight: "21vw",
                    fontFamily: "Montserrat",
                    marginTop: "4vw",
                    // marginLeft: "3vw",
                    // marginRight: "2vw",
                    color: '#8CD6D1',
                  }}
                >
                  Completed Projects
                </div>
              </div>
            </Card.Group>
          </Grid.Row>
        </Grid> */}


        <Grid centered>
          <Grid.Row>

            <Grid.Row
              style={{
                color: "#000000",
                marginTop: "1vw",
                marginBottom: "5vw",
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "2vw",
                fontWeight: "21vw",
                fontStyle: "normal",
                fontFamily: "Montserrat",
                marginLeft: "30vw",
                marginRight: "30vw",
              }}
            >

            Hey there! Thank you so much for taking the time to learn about DSS. On this page you will find all the different ways you can get involved with DSS, as well as what our recruitment timeline will look like for the upcoming semester. To stay up to date with all our events, including our recruitment events, you can add <a href="https://calendar.google.com/calendar/u/2?cid=Y185Y3JuZnBpdWR1Z2RjdGZoa3JxMmFiZHR0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">our external calendar</a> to receive invites on everything. If you have any questions, feel free to reach out to us at <a href="mailto:info@dss.berkeley.edu">info@dss.berkeley.edu</a>. We hope to see you very soon!

            </Grid.Row>
            <div>
              <Image
                src={squiggle3}
                style={{
                  left: "-10%",
                  width: "70vw",
                  position: "absolute",
                  top: "70%",
                  bottom: "5%"
                }}
              ></Image>
            </div>
          </Grid.Row>

          {CustomTitleBlack({ title: "How To Get Involved" })}
          <div style= {{maxWidth: "30vw"}}>
            <Image src={ExpertiseLine}></Image>
          </div>

          <Card.Group centered>
            <Card style={overlayboxes}>
              {/* <Image style={cardImageSyle} src={MLImage}></Image> */}
              <Card.Header style={cardHeader}>Apply to a committee</Card.Header>
              <div style={cardDescription}>
              Apply to join a DSS committee if you are interested in working on Consulting/Social Good projects or are interested in helping facilitate the DSS Decal as an Academic Development committee member. Check out some of our committee pages to learn more about each committee.
              </div>
              <Button.Group centered>
              <Link to="applycommittee" style={{marginRight: '4vw'}}>
                <Button onclick={"window.location='http://dssberkeley.com/applycommittee'"} style={{
                  background: "#FFFFFF",
                  border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  borderRadius: "3vw",
                  width: "100%",
                  height: "5vw",
                  marginTop: "8vw",
                  // marginBottom: "1%",
                  marginLeft: "50%",
                  marginRight: "1vw",
                  fontSize: "2.5vw",
                  lineHeight: "2vw",
                  fontWeight: 200,
                  fontFamily: "Montserrat",
                }}>
                  <div
                    style={{
                      marginTop: "-0.5vw",
                      marginBottom: "-0.5vw",
                      marginLeft: "0vw",
                      marginRight: "0vw",
                    }}
                  >
                    Apply
                  </div>
                </Button>
              </Link>
            </Button.Group>
            </Card>
            <Card style={overlayboxes2}>
              {/* <Image style={cardImageSyle} src={BizIntelImage}></Image> */}
              <Card.Header style={cardHeader}>
                Register for Decal
              </Card.Header>
              <div style={cardDescription}>
              Ever wonder what all the rage about data science is? Our DeCal offers a fun introduction to the world of data! In this DeCal you will work in teams to develop your own original data science project from scratch, with weekly mini-lectures and workshops, and access to mentorship. This course is designed for students with introductory-level data science experience. 
              </div>
              <Button.Group centered>
              <Link to="applydecal" style={{marginRight: '4vw'}}>
                <Button onclick={"window.location='http://dssberkeley.com/applydecal'"} style={{
                  background: "#FFFFFF",
                  border: "5px solid #FFC54A",
                  boxSizing: "border-box",
                  borderRadius: "3vw",
                  width: "100%",
                  height: "5vw",
                  marginTop: "4vw",
                  // marginBottom: "1%",
                  marginLeft: "50%",
                  marginRight: "1vw",
                  fontSize: "2.5vw",
                  lineHeight: "2vw",
                  fontWeight: 200,
                  fontFamily: "Montserrat",
                }}>
                  <div
                    style={{
                      marginTop: "-0.5vw",
                      marginBottom: "-0.5vw",
                      marginLeft: "0vw",
                      marginRight: "0vw",
                    }}
                  >
                    Enroll
                  </div>
                </Button>
              </Link>
            </Button.Group>
            </Card>
            <Card style={overlayboxes}>
              {/* <Image style={cardImageSyle} src={SDImage}></Image> */}
              <Card.Header style={cardHeader}>
                Join Mailing List
              </Card.Header>
              <div style={cardDescription}>
              Interested in what DSS has to offer but don’t have the bandwidth to be a Decal student or committee member? Join the Mailing List and keep in touch with us for any events we put out! 
              </div>
              <Button.Group centered>
              <Link to="mailinglist" style={{marginRight: '4vw'}}>
                <Button onclick={"window.location='http://dssberkeley.com/mailinglist'"} style={{
                  background: "#FFFFFF",
                  border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  borderRadius: "3vw",
                  width: "100%",
                  height: "5vw",
                  marginTop: "14vw",
                  // marginBottom: "1%",
                  marginLeft: "30%",
                  marginRight: "1vw",
                  fontSize: "2.5vw",
                  lineHeight: "2vw",
                  fontWeight: 200,
                  fontFamily: "Montserrat",
                }}>
                  <div
                    style={{
                      marginTop: "-0.5vw",
                      marginBottom: "-0.5vw",
                      marginLeft: "0vw",
                      marginRight: "0vw",
                    }}
                  >
                    Subscribe
                  </div>
                </Button>
              </Link>
            </Button.Group>
            </Card>
          </Card.Group>

          <Grid.Row centered columns={1} style={{marginTop: "6vw"}}>
            <div>
              <Image
                src={squiggle2}
                style={{
                  right: "0%",
                  width: "50vw",
                  position: "absolute",
                  top: "-100%",
                }}
              ></Image>
            </div>
            {/* <Button.Group centered>
              <Link style={{marginRight: '4vw'}}>
                <Button onClick={this.testa} style={{
                  background: "#FFFFFF",
                  border: "5px solid #8CD6D1",
                  boxSizing: "border-box",
                  borderRadius: "3vw",
                  width: "100%",
                  height: "7.5vw",
                  marginTop: "-1.5vw",
                  marginBottom: "-1.5vw",
                  //marginLeft: "5%",
                  //marginRight: "1vw",
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
                    Client Testimonials
                  </div>
                </Button>
              </Link>
              <Link to="services">
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
                    Work With Us
                  </div>
                </Button>
              </Link>
            </Button.Group> */}
            {/* <div>
              <Image
                src={squiggle3}
                style={{
                  left: "0%",
                  width: "30vw",
                  position: "absolute",
                  top: "60%",
                }}
              ></Image>
            </div> */}
          </Grid.Row>




          {/* {CustomTitleBlack({ title: "Project Managers" })}
          <Grid.Row>
            <div
              style={{
                marginLeft: "4vw",
                marginTop: "4vw",
                marginRight: "4vw",
              }}
            >
            </div>
          </Grid.Row> */}
          {CustomTitleBlack({ title: "Frequently Asked Questions" })}
          <div style= {{maxWidth: "50vw"}}>
            <Image src={ClientLine}></Image>
          </div>

          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <div style={consult}>
            </div>
          </Grid.Row>
          <Grid.Row
              style={{
                color: "#000000",
                marginTop: "1vw",
                marginBottom: "5vw",
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "2vw",
                fontWeight: "21vw",
                fontStyle: "normal",
                fontFamily: "Montserrat",
                marginLeft: "10vw",
                marginRight: "10vw",
              }}
            >

            In past semesters, our members have reported these questions as being most frequently asked. 
            If you have further questions, email <a href="mailto:info@dss.berkeley.edu"> info@dss.berkeley.edu </a>      or schedule a coffee chat at     <a href="coffee"> dssberkeley.com/coffee. </a>

            </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Consulting;
