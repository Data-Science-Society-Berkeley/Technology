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
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomTitle from "./components/CustomTitle.js";

import evelyn from "./PM Headshots/evelyn.jpeg";
import steven from "./Leadership Headshots/steven.jpeg";
import andi from "./Leadership Headshots/andi.jpg";
import charlie from "./Leadership Headshots/charlie.jpg";
import ingrid from "./PM Headshots/ingrid.jpeg";
import aditi from "./PM Headshots/aditi.jpeg";
import rithik from "./PM Headshots/rithik.jpeg";
import spencer from "./PM Headshots/spencer.jpeg";
import story from "./SocialGood/sgheader_short.jpg";
import medic from "./SocialGood/medic-logo.png";
import mep from "./SocialGood/MEP-logo.jpg";
import ctn from "./SocialGood/CTN-logo.png";
import techsoup from "./SocialGood/techsoup-logo.png"
import graphic1 from "./SocialGood/sggraphic.svg";

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
  //maxHeight: "100vw",
  margin: "2.5vw"
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
  fontWeight: 300,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
};

const bodyText = {
  fontFamily: "Montserrat",
  fontStyle: "light",
  textAlign: "center",
  fontWeight: "21vw",
  fontSize: "2vw",
  lineHeight: "3vw",
  marginTop: "4vw",
  marginLeft: "15vw",
  marginRight: "15vw"
}
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


class Social extends Component {
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
  scrollMission() {
    document.getElementById("mission").scrollIntoView();
  }
  scrollTeam() {
    document.getElementById("team").scrollIntoView();
  }
  scrollProjects() {
    document.getElementById("projects").scrollIntoView();
  }
  render() {
    return (
      <div>
        {/* <div style={{ zIndex: "1", position: "relative"}}>
          <Image
            src={story}
            style={{ width: "100%", zIndex: "2" }}
          ></Image>
          <div
            style={{
              background: "rgba(140, 214, 209, 0.6)",
              zIndex: "2",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          >
          </div>
        </div> */}

            {/* <span
              style={{
                // position: "absolute",
                // top: "10%",
                // left: "10%",
                // zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                fontSize: "5vw",
                lineHeight: "5vw",
                // color: "#FFFFFF"
                color: "#8CD6D1",
                textAlign: "center"
              }}
            >
              Social Good
            </span>
            <br/>
            <span
              style={{
                // position: "absolute",
                // top: "20%",
                // left: "10%",
                // zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "light",
                fontSize: "3vw",
                lineHeight: "4vw",
                //color: "#FFFFFF",
                color: "#8CD6D1",
                marginRight: "20%",
              }}
            >
              We are passionate about working with non-profit organizations to provide data-driven insights and actionable solutions through advanced analytical methods.
            </span> */}
            
        {/*
          </div>         
        </div>
        */}

        <Grid centered>
          <div
            style={{
              background: "#8CD6D1",//"rgba(140, 214, 209, 0.6)",
              zIndex: "2",
              width: "100%",
              height: "100%",
              marginTop: ".5vw",
              top: 0,
              left: 0,
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                fontSize: "5vw",
                lineHeight: "5vw",
                color: "#FFFFFF",
                textAlign: "left",
                marginTop: "5vw",
                marginLeft: "10vw",
                zIndex: "1"
              }}>
                The Social Good Committee
              </p>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "light",
                fontSize: "3vw",
                lineHeight: "4vw",
                color: "#FFFFFF",
                textAlign: "left",
                marginBottom: "5vw",
                marginLeft: "10vw",
                marginRight: "20%",
                zIndex:"1"
            }}>
              We are passionate about working with non-profit organizations to provide data-driven insights and actionable solutions through advanced analytical methods.
            </p>
          </div>
          <Grid.Row
            columns={3}
            style={{
              backgroundColor: "rgba(140, 214, 209, 0.85)",//"#8CD6D1",
              width: "100%",
              height: "7vw",
              position: "relative",
            }}
          >
            <Grid.Column width={4}>
              <div onClick={this.scrollMission} style={aboutlinks}>
                Mission
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={{ aboutlinks2 }}>
              <div onClick={this.scrollTeam} style={aboutlinks}>
                Our Team
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={{ aboutlinks2 }}>
              <div onClick={this.scrollProjects} style={aboutlinks}>
                Past Projects
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid centered >
          {CustomTitle({ title: "Our Mission" , id: "mission"})}
        </Grid>

        <p style={bodyText}
          >
          Data science has exploded in popularity due to its influence on the business landscape. The technological capabilities with data has provided 
          business with a competitive advantage, opportunity to optimize efficiency, and in essence, more profit. 
          <br/>
          <br/>
          We seek to combine these same tools with a human-centered, datafied way of thinking to promise and act for change. We want to use the power of 
          data science in service of humankind and offer creative solutions to support organizations addressing the world’s most urgent societal challenges.
        </p>

        <Image
            src={graphic1}
            style={{display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "5vw"}}
        ></Image>

        <Grid centered>
          {CustomTitle({ title: "Our Team" , id: "team"})}
          <Grid.Row style={{ marginTop: "4vw" }}>
            <Card.Group centered>

              <Card style={cardstyle}>
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
              
              <Card style={cardstyle}>
                <Image style={imagestyle} src={evelyn} />
                <Card.Content>
                  <Card.Header style={textstyle}>Evelyn Lu</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:yunerlu@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/evelyn-lu-026450153/">
                    <Icon size="large" name="linkedin" />
                  </a>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={rithik} />
                <Card.Content>
                  <Card.Header style={textstyle}>Rithik Goli</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:rithikgoli@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/rithikgoli824/">
                    <Icon size="large" name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
            
            </Card.Group>
            <Card.Group centered>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={ingrid} />
                <Card.Content>
                  <Card.Header style={textstyle}>Ingrid Chien</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:ingrid070401@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/ingridchien/">
                    <Icon size="large" name="linkedin" />
                  </a>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={aditi} />
                <Card.Content>
                  <Card.Header style={textstyle}>Aditi Raja</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:aditiraja@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/aditi-raja">
                    <Icon size="large" name="linkedin" />
                  </a>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={spencer} />
                <Card.Content>
                  <Card.Header style={textstyle}>Spencer Jenkins</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:spencerrjenkins@berkeley.edu">
                    <Icon size="large" name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/spencer-r-jenkins/">
                    <Icon size="large" name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              
            </Card.Group>
          </Grid.Row>
        </Grid>

        <Grid centered>
          {CustomTitle({ title: "Past Projects" , id: "projects"})}
          <Grid.Row style={{ marginTop: "4vw", marginBottom: "4vw"}}>
            <Card.Group centered>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={medic} />
                <Card.Content>
                  <Card.Header style={textstyle}>Medic</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Shippable Maps for the Community Health Toolkit [FA '21]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>Medic builds world-class, open-source software that supports health workers delivering equitable care 
                    that reaches the hardest-to-reach communities.
                    
                    They are the technical lead to the Community Health Toolkit, which helps health 
                    workers ensure safe deliveries, track outbreaks faster, treat illnesses door-to-door, keep stock of essential 
                    medicines, communicate about emergencies, and more.</p>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={ctn} />
                <Card.Content>
                  <Card.Header style={textstyle}>Community Tech Network</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Decreasing Senior Citizen Social Isolation [FA '21]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>Community Tech Network is a nonprofit organization whose mission is to unite organizations and volunteers to transform lives 
                    through digital literacy! 
                    CTN seeks to improve the quality of life, the capacity, and the self-sufficiency of CTN’s learners, trainers, and our partner 
                    organizations.</p>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                  <Image style={imagestyle} src={techsoup} />
                  <Card.Content id="card-top">
                    <Card.Header style={textstyle}>TechSoup</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={roleStyle}>Revenue Analysis of Nonprofit Technology Sales [FA '21]</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <p>TechSoup is a nonprofit international network of non-governmental organizations (NGOs) that provides technical support 
                      and technological tools to other nonprofits. 
                      
                      Based in SF and founded in 1987, TechSoup supports nonprofits, charities, and libraries by providing access to donations and 
                      discounts on software, hardware, and services from major brands.</p>
                  </Card.Content>
                </Card>

            </Card.Group>
            <Card.Group centered>
              <Card style={cardstyle}>
                  <Image style={imagestyle} src={mep} />
                  <Card.Content>
                    <Card.Header style={textstyle}>Mara Elephant Project</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw",  }}>
                      <span style={roleStyle}>Maasai Mara Elephant Speed Maps [SP '21]</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <p>MEP envisions the existence of a stable elephant population co-existing peacefully with people across the Greater
                       Mara Ecosystem. Their collaboratibe approach of boots on the ground rangers and applied research has disrupted poaching in the region 
                       and combatted conflict and habitat loss.</p>
                  </Card.Content>
                </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={medic} />
                <Card.Content>
                  <Card.Header style={textstyle}>Medic</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Shippable Maps for the Community Health Toolkit [FA '21]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>Medic builds world-class, open-source software that supports health workers delivering equitable care 
                    that reaches the hardest-to-reach communities.
                    
                    They are the technical lead to the Community Health Toolkit, which helps health 
                    workers ensure safe deliveries, track outbreaks faster, treat illnesses door-to-door, keep stock of essential 
                    medicines, communicate about emergencies, and more.</p>
                </Card.Content>
              </Card>
            </Card.Group>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Social;
