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

import paypal from "./Consulting/paypallogo.png";
import paypallogo2 from "./Consulting/paypallogo.jpg";
import metromile from "./Consulting/metromilelogo.jpg";
import monday from "./Consulting/monday.comlogo.png";
import simmer from "./Consulting/simmer.png";
import sofi from "./Consulting/sofilogo.png";
import amp from "./Consulting/amplab.png";
import berkeleycrisis from "./Consulting/berkeleycrisisinterventionteam.jpg";
import compliance from "./Consulting/complianceai-logo.png";
import edify from "./Consulting/edifyaisunset.jpg";
import fair from "./Consulting/fairvote.png";
import fti from "./Consulting/fticonsulting.jpg";
import hcup from "./Consulting/hcup.jpg";
import kiva from "./Consulting/kiva.png";
import kyocera from "./Consulting/kyocera-vector-logo.png";
import nom from "./Consulting/nommery.png";
import ongo from "./Consulting/ongoscienceinc.png";
import oust from "./Consulting/oustlabs.png";
import pegasus from "./Consulting/pegasusanalytics.png";
import venmo from "./Consulting/venmo.png";
import openride from "./Consulting/openride.png";
import down from "./Consulting/ClientTestimonials.png";
import workwus from "./Consulting/WorkWithUs.png";

import alina from "./PM Headshots/Alina.png";
import grace from "./PM Headshots/Grace.jpg";
import pooja from "./PM Headshots/Pooja.png";
import rick from "./PM Headshots/Rick.jpeg";
import devesh from "./PM Headshots/devesh.png";
import anita from "./PM Headshots/anita.jpg";
import annie from "./PM Headshots/annie.jpg";
import advait from "./PM Headshots/advait.png";
import pranav from "./PM Headshots/pranav.png";
import erica from "./PM Headshots/erica.jpg";
import henry from "./PM Headshots/henry.jpg";

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
    let temp = [
      <Card style={cardstyle}>
        <Image src={rick} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Rick Zhang</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>Director of Consulting</span>
            {/* TODO: Remove "date" class and use regular centered text instead */}
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
        <Image src={grace} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Grace Qui</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:graceq@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/graqiu">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={pooja} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Pooja Eega</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:pooja.eega@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/pooja-eega ">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={alina} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Alina Trinh</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
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
    ];
    let temp1 = [
      <Card style={cardstyle}>
        <Image src={henry} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Henry Cheong</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:cheongh@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/cheongh/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={anita} yle={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Anita Shen</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="anitashen@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/shenanita/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={erica} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Erica Zhu</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:ericaz@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/ericazhu00/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,

      <Card style={cardstyle}>
        <Image src={annie} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Annie Dai</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:anniedai@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/annie-dai0/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
    ];
    let temp2 = [
      <Card style={cardstyle}>
        <Image src={pranav} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Pranav Sukumar</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:pranavsukumar@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/pranav-sukumar/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={advait} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Advait Marathe</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:advaitmarathe@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/advaitumarathe/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      <Card style={cardstyle}>
        <Image src={devesh} style={imagestyle} />
        <Card.Content>
          <Card.Header style={textstyle}>Devesh Agrawal</Card.Header>
          <Card.Meta style={{ marginTop: "1vw" }}>
            <span style={roleStyle}>PM</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a href="mailto:deveshagarwal@berkeley.edu">
            <Icon size="large" name="mail" />
          </a>
          <a href="https://www.linkedin.com/in/advaitumarathe/">
            <Icon size="large" name="linkedin" />
          </a>
        </Card.Content>
      </Card>,
      // <Card style={cardstyle}>
      //   <Image src={aadiraj} style={imagestyle} />
      //   <Card.Content>
      //     <Card.Header style={textstyle}>Aadiraj Batlaw</Card.Header>
      //     <Card.Meta style={{ marginTop: "1vw" }}>
      //       <span style={roleStyle}>PM</span>
      //     </Card.Meta>
      //   </Card.Content>
      //   <Card.Content extra>
      //     <a href="mailto:batlaw33375@berkeley.edu">
      //       <Icon size="large" name="mail" />
      //     </a>
      //     <a href="https://www.linkedin.com/in/aadiraj-batlaw-594785177/">
      //       <Icon size="large" name="linkedin" />
      //     </a>
      //   </Card.Content>
      // </Card>,
      // <Card style={cardstyle}>
      //   <Image src={young} style={imagestyle} />
      //   <Card.Content>
      //     <Card.Header style={textstyle}>Youngli Hong</Card.Header>
      //     <Card.Meta style={{ marginTop: "1vw" }}>
      //       <span style={roleStyle}>PM</span>
      //     </Card.Meta>
      //   </Card.Content>
      //   <Card.Content extra>
      //     <a href="mailto:youngli.hong@berkeley.edu">
      //       <Icon size="large" name="mail" />
      //     </a>
      //     <a href="https://www.linkedin.com/in/youngli-hong-a0750b158/">
      //       <Icon size="large" name="linkedin" />
      //     </a>
      //   </Card.Content>
      // </Card>,
    ];

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
                  5
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
                  33
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
              <Card.Group centered>{temp}</Card.Group>
              <Card.Group centered>{temp1}</Card.Group>
              <Card.Group centered>{temp2}</Card.Group>
            </div>
          </Grid.Row>
          {CustomTitleBlack({ title: "Client Testimonials" })}
          <div style= {{maxWidth: "50vw"}}>
            <Image src={ClientLine}></Image>
          </div>
          <Grid.Row centered style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "3vw" }}>
            <Image
              inline
              style={{
                maxHeight: "12vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={simmer}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “I have never worked with students more competent than my
                analysts at DSS... The first thing that impressed me was their
                process, which was clearly documented and thorough, but not
                cumbersome on the client... My team used machine learning models
                to understand churn-user behavior and label users as churned or
                active. When COVID-19 hit mid-project, I fully anticipated these
                students to take a step back. Instead, they doubled down. My
                team exceeded the original parameters of the projects. I'm
                chomping at the bit to hire them back.” - Richard Wu, CEO,
                Simmer (YC S19)
              </div>
            </div>
          </Grid.Row>
          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              inline
              style={{
                maxHeight: "10vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={monday}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “DSS provided us with a great experiment proposal which we are
                going to execute... The DSS team has done a tremendous job over
                a course of a semester, and I would like to thank them for all
                of their hard, professional work. I highly recommend other
                organizations to collaborate with DSS and I hope I'll be able to
                work with them again in the future.” - Omry Sitner, Business
                Development Manager at monday.com
              </div>
            </div>
          </Grid.Row>

          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              style={{
                maxHeight: "10vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={paypallogo2}
            ></Image>

            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “Working with DSS gave us great and immediately actionable
                insight into a new Blockchain project we had launched. I really
                hope we can work with DSS again on our next big project!” -
                Michael Todasco, Senior Director of Innovation at PayPal
              </div>
            </div>
          </Grid.Row>

          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              style={{
                maxHeight: "10vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={edify}
            ></Image>
            <div style={consult}>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "-1vw",
                }}
              >
                “My company hired DSS to analyze data in the winter of 2019 and
                fall of 2020, and they did an amazing job. They took the project
                seriously and I greatly appreciated the professional manner in
                which they handled it. Most importantly, they gathered insights
                from the data that were incredibly valuable and helped us in
                building a stronger product. I would definitely use DSS again!”
                - Cory Linton, CEO of edify.ai
              </div>
            </div>
          </Grid.Row>
          <Grid.Row style={{ marginLeft: "5vw", marginRight: "5vw" }}>
            <Image
              style={{
                maxHeight: "10vw",
                maxWidth: "12vw",
                verticalAlign: "middle",
              }}
              src={sofi}
            ></Image>
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
            <Image.Group style={{ marginLeft: "11vw", marginRight: "11vw" }}>
              <Image
                src={paypal}
                style={{
                  marginLeft: "4vw",
                  maxWidth: "28vw",
                  height: "14vw",
                }}
              />
              <Image
                src={sofi}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={monday}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={metromile}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={simmer}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={kyocera}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={venmo}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={edify}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={compliance}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={pegasus}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={oust}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={ongo}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={kiva}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={fair}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={nom}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={fti}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={openride}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={hcup}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={amp}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
              <Image
                src={berkeleycrisis}
                style={{ marginLeft: "5vw", maxWidth: "28vw" }}
              />
            </Image.Group>
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
