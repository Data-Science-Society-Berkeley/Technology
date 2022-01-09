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
import story from "./SocialGood/sgheader.jpeg";
import medmobile from "./SocialGood/MedicMobile.png";
import mep from "./SocialGood/MEP-logo.svg";


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
        <div style={{ zIndex: "1", position: "relative"}}>
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
            <span
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                fontSize: "5vw",
                lineHeight: "5vw",
                color: "#FFFFFF"
              }}
            >
              Social Good
            </span>
            
            <span
              style={{
                position: "absolute",
                top: "20%",
                left: "10%",
                zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "light",
                fontSize: "3vw",
                lineHeight: "4vw",
                color: "#FFFFFF"
              }}
            >
              We are passionate about working with non-profit organizations to provide data-driven insights and actionable solutions through advanced analytical methods.
            </span>

          </div>         
        </div>
        <Grid centered>
          <Grid.Row
            columns={3}
            style={{
              backgroundColor: "#8CD6D1",
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

        <Grid centered>
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
          <Grid.Row style={{ marginTop: "4vw" }}>
            <Card.Group centered>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={medmobile} />
                <Card.Content>
                  <Card.Header style={textstyle}>Medic</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Shippable Maps for the Community Health Toolkit [Fall '21]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>Medic builds world-class, open-source software that supports health workers delivering equitable care 
                    that reaches the hardest-to-reach communities.
                    
                    Medic serves as the technical lead and a core contributor to the Community Health Toolkit, which helps health 
                    workers ensure safe deliveries, track outbreaks faster, treat illnesses door-to-door, keep stock of essential 
                    medicines, communicate about emergencies, and more.</p>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={mep} />
                <Card.Content>
                  <Card.Header style={textstyle}>Mara Elephant Project</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Maasai Mara Elephant Speed Maps [Spring '21, Fall '20]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>MEP protects elephants to conserve the greater Mara ecosystem. MEP’s focus on elephant protection in the Maasai Mara, 
                    Kenya in turn increases the protection of wildlife, communities and habitat in our expanding areas of operation. 
                    Their boots on the ground rangers, applied research and collaborative approach help work towards their goal to maintain a 
                    harmonic balance between wildlife, communities and habitat and move the Mara from conflict to co-existence.</p>
                </Card.Content>
              </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={medmobile} />
                <Card.Content>
                  <Card.Header style={textstyle}>Medic</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Shippable Maps for the Community Health Toolkit [Fall '21]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>Medic builds world-class, open-source software that supports health workers delivering equitable care 
                    that reaches the hardest-to-reach communities.
                    
                    Medic serves as the technical lead and a core contributor to the Community Health Toolkit, which helps health 
                    workers ensure safe deliveries, track outbreaks faster, treat illnesses door-to-door, keep stock of essential 
                    medicines, communicate about emergencies, and more.</p>
                </Card.Content>
              </Card>

            </Card.Group>
            <Card.Group centered>
              <Card style={cardstyle}>
                  <Image style={imagestyle} src={medmobile} />
                  <Card.Content>
                    <Card.Header style={textstyle}>Medic</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={roleStyle}>Shippable Maps for the Community Health Toolkit [Fall '21]</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <p>Medic builds world-class, open-source software that supports health workers delivering equitable care 
                      that reaches the hardest-to-reach communities.
                      
                      Medic serves as the technical lead and a core contributor to the Community Health Toolkit, which helps health 
                      workers ensure safe deliveries, track outbreaks faster, treat illnesses door-to-door, keep stock of essential 
                      medicines, communicate about emergencies, and more.</p>
                  </Card.Content>
                </Card>

              <Card style={cardstyle}>
                <Image style={imagestyle} src={medmobile} />
                <Card.Content>
                  <Card.Header style={textstyle}>Medic</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>Shippable Maps for the Community Health Toolkit [Fall '21]</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <p>Medic builds world-class, open-source software that supports health workers delivering equitable care 
                    that reaches the hardest-to-reach communities.
                    
                    Medic serves as the technical lead and a core contributor to the Community Health Toolkit, which helps health 
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
