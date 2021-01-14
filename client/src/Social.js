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

import berk from "./Decal Images/berkeleyischool-logo-alternate-blue-lg.png";
import datacamp from "./Decal Images/datacamp-logo 1.png";
import decal from "./Decal Images/decalberkeleylogo 1.png";
import evelyn from "./PM Headshots/evelyn.png";
import steven from "./PM Headshots/steven.jpg";
import andi from "./Leadership Headshots/andi.jpg";
import charlie from "./Leadership Headshots/charlie.jpg";
import story from "./SocialGood/socialgoodheader-compress-min.jpg";
import hype from "./SocialGood/SoialGoodPic.png";
import heart from "./SocialGood/dssg1.jpeg";
import arrow from "./SocialGood/Arrow3.png";

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
              color: "#FFFFFF",
              // background: "rgba(140, 214, 209, 0.6)",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "35%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                fontSize: "5vw",
                lineHeight: "5vw",
              }}
            >
              {" "}
              Social Good
            </span>
            <span
              style={{
                position: "absolute",
                left: "25%",
                top: "75%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                // color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  fontSize: "5vw",
                  lineHeight: "5vw",
                  font: "Montserrat",
                }}
              >
                2{" "}
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5vw",
                  textAlign: "center",
                  font: "Montserrat",
                }}
              >
                Projects per Semester
              </span>
            </span>
            <div
              style={{
                background: "rgba(140, 214, 209, 0.6)",
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
            <span
              style={{
                position: "absolute",
                left: "70%",
                top: "75%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
              }}
            >
              <span
                style={{
                  fontSize: "5vw",
                  lineHeight: "5v1",
                  font: "Montserrat",
                  fontWeigt: "bold",
                }}
              >
                {" "}
                5{" "}
                <span
                  style={{
                    fontSize: "2.5vw",
                    lineHeight: "2.5vw",
                  }}
                >
                  researchers per team{" "}
                </span>{" "}
              </span>
            </span>
          </div>
        </div>
        <Grid centered>
          {CustomTitle({ title: "Committee Origin" })}
          <Grid.Row columns={2}>
            <Grid.Column
              verticalAlign="top"
              width={4}
              style={{
                color: "#000000",
                textAlign: "left",
                lineHeight: "2.5vw",
                fontSize: "2vw",
                fontWeight: "21vw",
                fontStyle: "normal",
                fontFamily: "Montserrat",
                marginLeft: "9vw",
                // marginRight: "5vw",
                marginBottom: "6vw",
                marginTop: "4vw",
              }}
            >
              Data science has exploded in popularity due to its influence on
              the business landscape. The technological capabilities with data
              has provided business with a competitive advantage, opportunity to
              optimize efficiency, and in essence, more profit.
              <Image src={arrow} style={{ marginLeft: "35vw" }}></Image>
            </Grid.Column>
            <Grid.Column
              verticalAlign="top"
              style={{ marginBottom: "11vw", marginTop: "4vw" }}
            >
              <Image
                inline
                src={hype}
                style={{ height: "27vw", width: "27vw", marginTop: "-5vw" }}
              ></Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ zIndex: "1", position: "relative" }}>
          <Image
            src={heart}
            style={{
              width: "120%",
              height: "auto",
              zIndex: "2",
              marginBottom: "5vw",
            }}
          ></Image>
          <div
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "10%",
                left: "65%",
                textAlign: "left",
                fontWeight: "21vw",
                zIndex: "3",
                width: "36vw",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "2.5vw",
                lineHeight: "3vw",
                marginRight: "5vw",
              }}
            >
              {" "}
              We seek to use these same tools and our datafied way of thinking
              to promise and act for change. We want to use the power of data
              science in service of humankind and offer creative solutions to
              address the world’s most urgent societal challenges.
            </span>
          </div>
        </div>
        <Grid centered>
          {CustomTitle({ title: "Our Team" })}
          <Grid.Row style={{ marginTop: "4vw" }}>
            <Card.Group centered>
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
              </Card>
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
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={evelyn} />
                <Card.Content>
                  <Card.Header style={textstyle}>Evelyn Lu</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:steven.chen@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/evelyn-lu-026450153/">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={steven} />
                <Card.Content>
                  <Card.Header style={textstyle}>Steven Chen</Card.Header>
                  <Card.Meta style={{ marginTop: "1vw" }}>
                    <span style={roleStyle}>PM</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:steven.chen@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/steven-z-chen/">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row style={{ marginTop: "5vw" }}>
            <Grid.Column
              style={{
                color: "#8CD6D1",
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "3vw",
                fontWeight: "36vw",
                fontStyle: "normal",
                fontFamily: "Montserrat",
                marginBottom: "7vw",
                marginLeft: "14vw",
                marginRight: "14vw",
              }}
            >
              This Fall 2020 Semester is the first semester for the Social Good
              committee. Stay tuned for updates!
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Social;
