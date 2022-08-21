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
  marginTop: "1.5vw",
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
        >Consulting
        </h1>

        <div>
          <Image style={{position: 'relative',
          top: "20vw",
          // marginTop: '5vw',
          left: "50vw",
          right: "50vw",
          bottom: "15vw",
          // margin: 'auto',
          // margintop: "10vw",
          marginBottom: '15vw',
          height: "28vw",
          maxHeight: "28vw",
          width: "28vw",
          maxWidth: "28vw",
          }}
          src={logo}></Image>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <Grid centered>
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
        </Grid>


        <Grid centered>
          <Grid.Row>

            <Grid.Row
              style={{
                color: "#000000",
                marginTop: "7vw",
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

              We believe that the best way to learn about the innovative and
              pioneering data science techniques is to work with companies in
              industry. Our past clients include a wide range of companies from
              industry-leaders like PayPal to unicorn startups such as SoFi, all
              who have been impacted by the work Data Science Society provides.
            </Grid.Row>
            <div>
              <Image
                src={squiggle3}
                style={{
                  left: "-10%",
                  width: "70vw",
                  position: "absolute",
                  top: "60%",
                }}
              ></Image>
            </div>
          </Grid.Row>

          {CustomTitleBlack({ title: "Our Expertise" })}
          <div style= {{maxWidth: "30vw"}}>
            <Image src={ExpertiseLine}></Image>
          </div>

          <Card.Group centered>
            <Card style={overlayboxes}>
              <Image style={cardImageSyle} src={MLImage}></Image>
              <Card.Header style={cardHeader}>Machine Learning</Card.Header>
              <div style={cardDescription}>
                NLP, Predictive Analysis, Data Mining, Clustering, Modeling
              </div>
            </Card>
            <Card style={overlayboxes2}>
              <Image style={cardImageSyle} src={BizIntelImage}></Image>
              <Card.Header style={cardHeader}>
                Business Intelligence
              </Card.Header>
              <div style={cardDescription}>
                Visualizations, Customer Segmentation, Price Optimization,
                Customer Churn, Operations Effeciency
              </div>
            </Card>
            <Card style={overlayboxes}>
              <Image style={cardImageSyle} src={SDImage}></Image>
              <Card.Header style={cardHeader}>
                Software Development
              </Card.Header>
              <div style={cardDescription}>
                Warehousing, Systems Integration, Cloud Computing,
                Front-End Development, Back-End Development
              </div>
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
                  top: "-180%",
                }}
              ></Image>
            </div>
            <Button.Group centered>
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
            </Button.Group>
            <div>
              <Image
                src={squiggle3}
                style={{
                  left: "0%",
                  width: "30vw",
                  position: "absolute",
                  top: "60%",
                }}
              ></Image>
            </div>
          </Grid.Row>




          {CustomTitleBlack({ title: "Project Managers" })}
          <Grid.Row>
            <div
              style={{
                marginLeft: "4vw",
                marginTop: "4vw",
                marginRight: "4vw",
              }}
            >
            </div>
          </Grid.Row>
          {CustomTitleBlack({ title: "Client Testimonials" })}
          <div style= {{maxWidth: "50vw"}}>
            <Image src={ClientLine}></Image>
          </div>

          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “Our team worked with DSS to analyze and model our member
                behavior. The consultants delivered high quality presentations
                of their insights. Their metrics, visualizations, and model
                provided new perspectives for us to consider when evaluating
                engagement. The team was very professional and skilled, and they
                were a pleasure to work with.” - Michelle Leahy, Business
                Operations Manager, Data & Engineering at SoFi
              </div>
            </div>
          </Grid.Row>
          {CustomTitle({ title: "Past Clients" })}
          <Grid.Row style={{ marginTop: "3vw" }}>
          </Grid.Row>
        </Grid>
        <div
          style={{
            fontSize: "1.5vw",
            fontStyle: "normal",
            fontFamily: "Montserrat",
            marginLeft: "28vw",
            marginRight: "28vw",
            marginBottom: "8vw",
            marginTop: "4vw",
            lineHeight: "2vw",
            textAlign: "center",
          }}
        >
          Additionally, we offer our clients sponsorship opportunities to
          connect our clients with UC Berkeley’s top talent, from setting up
          events (Info-sessions, Career Fairs, Case Competitions, Hackathons,
          and Coffee Chats) to compiling extensive Resume Booklets.
        </div>
      </div>
    );
  }
}
export default Consulting;
