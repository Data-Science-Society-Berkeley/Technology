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
import kate from "./Leadership Headshots/kate.jpg";
import uma from "./Leadership Headshots/uma.png";
import gaya from "./Leadership Headshots/gayatri.png";
import story from "./Decal Images/DecalHeader-compress-min.JPG";
import daily from "./Decal Images/dailyactivity.jpg";
import decal1 from "./Decal Images/decal-imageleft.jpg";
import decal2 from "./Decal Images/decal-imageright.jpg";
import datalab from "./Decal Images/DeCal_Logo.png";
import arrow from "./Decal Images/Arrow.png";
import leftarrow from "./Decal Images/OrangeArrow2.png";
import rightarrow from "./Decal Images/OrangeArrow1.png";

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
  marginLeft: "124px",
  marginBottom: "42px",
};

const button = {
  fontFamily: "Montserrat",
  fontWeight: "21vw",
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "center",
  background: "#8CD6D1",
};
const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "2.5vw",
  color: "#8CD6D1",
};
const cardstyle = {
  width: "300px",
  // height: "800px",
  marginBottom: "10px",
  marginleft: "20vw",
  textAlign: "center",
};
const imagestyle = {
  height: "300px",
  maxHeight: "300px",
  width: "300px",
  maxWidth: "300px",
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
class Decal extends Component {
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
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "35%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "5vw",
                lineHeight: "5vw",
              }}
            >
              {" "}
              Essential Tools for Data Science DeCal
            </span>
            <span
              style={{
                position: "absolute",
                left: "20%",
                top: "75%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
              }}
            >
              <span
                style={{
                  fontSize: "5vw",
                  lineHeight: "5vw",
                  font: "Montserrat",
                }}
              >
                6{" "}
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5vw",
                  textAlign: "center",
                  font: "Montserrat",
                }}
              >
                Semesters Completed
              </span>
            </span>
            <div
              style={{
                background: "rgba(140, 214, 209, 0.5)",
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
                  lineHeight: "5vw",
                  font: "Montserrat",
                }}
              >
                400+{" "}
                <span
                  style={{
                    fontSize: "2.5vw",
                    textAlign: "center",
                  }}
                >
                  Students Taught
                </span>
              </span>
            </span>
          </div>
        </div>
        <Grid centered>
          {CustomTitle({ title: "What We Do" })}
          <Grid.Row>
            <Grid.Column
              verticalAlign="top"
              width={7}
              style={{
                textAlign: "left",
                lineHeight: "2.5vw",
                fontSize: "2vw",
                fontWeight: "21.5vw",
                fontFamily: "Montserrat",
                marginBottom: "6vw",
                marginTop: "4vw",
              }}
            >
              Everywhere, data is being collected and used to make{" "}
              <strong> decisions </strong> –- starting from your news feed in
              the morning, to the Instagram stories you binge during lunch, and
              even the best transit routes back home.
              <Image
                src={arrow}
                style={{ marginLeft: "0px", marginTop: "6vw", height: "25vw" }}
              ></Image>
            </Grid.Column>
            <Grid.Column verticalAlign="top" width={6}>
              <Image
                src={daily}
                style={{ height: "38vw", width: "38vw" }}
              ></Image>
            </Grid.Column>
            <Grid.Row
              style={{
                textAlign: "right",
                lineHeight: "2.5vw",
                fontSize: "2vw",
                fontWeight: "21vw",
                fontFamily: "Montserrat",
                marginLeft: "28vw",
                marginRight: "28vw",
                marginBottom: "5vw",
                marginTop: "-10vw",
              }}
            >
              This DeCal introduces <strong>EVERYONE</strong> to the fascinating
              world of data analytics and insight. There are absolutely{" "}
              <strong> NO prerequisites</strong>, and people of{" "}
              <strong>ALL majors, backgrounds, and interests</strong> are
              actively encouraged to apply!
            </Grid.Row>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group>
              <Image
                src={decal1}
                style={{
                  height: "20vw",
                  marginLeft: "10vw",
                  marginRight: "5vw",
                }}
              ></Image>
              <Image
                src={decal2}
                style={{ height: "20vw", marginRight: "10vw" }}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <break></break>
          {CustomTitle({ title: "The Course" })}
          <Grid.Row centered>
            <Image
              src={datalab}
              style={{
                height: "14vw",
                width: "39vw",
              }}
            ></Image>
          </Grid.Row>
          <Grid.Row
            style={{
              // color: "#000000",
              textAlign: "center",
              lineHeight: "2.5vw",
              fontSize: "2vw",
              fontWeight: "21vw",
              fontFamily: "Montserrat",
              marginLeft: "15vw",
              marginRight: "15vw",
              marginBottom: "5vw",
            }}
          >
            Our goal is to educate people with little to no experience in the
            field about the languages, software, and other tools that data
            scientists across the globe use daily. We place a special emphasis
            on practical tools not otherwise emphasized in Berkeley academic
            curricula.
          </Grid.Row>
          <Grid.Row style={{ marginBottom: "5vw" }}>
            <Link to="/decallearn">
              <Button style={button}>Course Page</Button>
            </Link>
          </Grid.Row>

          <Grid.Row centered columns={2}>
            <Grid.Column
              style={{
                color: "#8CD6D1",
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "3vw",
                fontWeight: "28vw",
                fontFamily: "Montserrat",
                marginBottom: "7vw",
                left: "5%",
                right: "50%",
              }}
            >
              Join DSS and apply to be a TA!
              {/* <Image
                src={rightarrow}
                style={{
                  marginLeft: "43vw",
                  marginTop: "4vw",
                  transform: "rotate(10deg)",
                }}
              ></Image> */}
            </Grid.Column>
            <Grid.Column
              style={{
                color: "#8CD6D1",
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "3vw",
                fontWeight: "28vw",
                fontFamily: "Montserrat",
                marginBottom: "7vw",
                right: "5%",
              }}
            >
              Apply to be a student!
              {/* <Image
                src={leftarrow}
                style={{
                  marginLeft: "10vw",
                  marginTop: "4vw",
                  transform: "rotate(-15deg)",
                }}
              ></Image> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{ marginTop: "-3vw" }}>
            <Button style={button}>
              <Link to="/apply" style={{ color: "white" }}>
                Fall 2020 App
              </Link>
            </Button>
          </Grid.Row>
          {CustomTitle({ title: "DeCal Directors" })}
          <Grid.Row style={{ marginTop: "4vw" }}>
            <Card.Group centered>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={kate} />
                <Card.Content>
                  <Card.Header style={textstyle}>Kate Miller</Card.Header>
                  <Card.Meta>
                    <span className="date">Director of DeCal</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:roshanlodha@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="http://linkedin.com/in/roshanlodha">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={uma} />
                <Card.Content>
                  <Card.Header style={textstyle}>Uma Krishnaswamy</Card.Header>
                  <Card.Meta>
                    <span className="date">Director of DeCal</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:alleanna@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={gaya} />
                <Card.Content>
                  <Card.Header style={textstyle}>Gayatri Babel</Card.Header>
                  <Card.Meta>
                    <span className="date">Director of DeCal</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <a href="mailto:stephanie.lu@berkeley.edu">
                    <Icon name="mail" />
                  </a>
                  <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
                    <Icon name="linkedin" />
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row>
            <div style={{ margin: "auto" }}></div>
          </Grid.Row>
          {CustomTitle({ title: "Our Sponsors" })}
          <Grid.Row>
            <Image.Group
              style={{
                margin: "auto",
                marginBottom: "5vw",
                marginTop: "4vw",
              }}
            >
              <Image
                style={{ marginRight: "5vw", height: "15vw" }}
                src={decal}
              ></Image>
              <Image
                style={{ marginRight: "3vw", height: "15vw" }}
                src={berk}
              ></Image>
              <Image
                style={{ marginRight: "3vw", height: "15vw" }}
                src={datacamp}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row
            style={{
              fontFamily: "Monteserrat",
              fontSize: "1.5vw",
              marginLeft: "12vw",
              marginRight: "12vw",
              marginBottom: "9vw",
              marginTop: "4vw",
              lineHeight: "2vw",
            }}
          ></Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Decal;
