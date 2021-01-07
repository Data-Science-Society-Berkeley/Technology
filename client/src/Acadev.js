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
import roshan from "./Leadership Headshots/roshan.jpg";
import alleanna from "./Leadership Headshots/alleanna2.jpeg";
import steph from "./Leadership Headshots/steph.jpg";
import story from "./Acadev Images/AcaDevBanner-compress-min.jpg";
import haas2 from "./Acadev Images/hbsa.jpg";
import ascend from "./Acadev Images/Ascend-Logo.jpg";

let endpoint = "http://localhost:8080";
const gridoffset = {
  marginLeft: "62px",
  marginTop: "42px",
  textAlign: "center",
  fontFamily: "Montserrat",
};

const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  fontSize: "2.5vw",
  color: "#8CD6D1",
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

// const cardstyle = {
//   width: "25vw",
//   // height: "25vw",
//   marginBottom: "1vw",
//   marginleft: "22vw",
//   textAlign: "center",
// };
// const imagestyle = {
//   height: "25vw",
//   maxHeight: "25vw",
//   width: "25vw",
//   maxWidth: "25vw",
// };
const cardstyle = {
  width: "300px",
  // height: "800px",
  marginBottom: "10px",
  marginleft: "20vw",
  // paddingLeft: "5vw",
  textAlign: "center",
};
const imagestyle = {
  height: "300px",
  maxHeight: "300px",
  width: "300px",
  maxWidth: "300px",
};
const overlayboxes = {
  background: "#F8F8F8",
  border: ".5vw solid #8CD6D1",
  boxSizing: "border-box",
  boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "32vw",
  width: "32vw",
  marginBottom: "5vw",
  marginTop: "6vw",
  marginLeft: "10vw",
  marginRight: "10vw",
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
const generalmember = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "3vw",
  fontSize: "2vw",
  color: "#000000",
  textAlign: "center",
  marginLeft: "2vw",
  marginTop: "1.5vw",
};
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
  fontSize: "1.25vw",
  lineHeight: "2vw",
  textAlign: "Left",
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
        <div style={{ zIndex: "1", position: "relative" }}>
          <Image src={story}></Image>
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
                lineHeight: "6vw",
              }}
            >
              Academic Development
            </span>
            <span
              style={{
                position: "absolute",
                top: "55%",
                left: "5%",
                right: "50%",
                zIndex: "3",
                fontFamily: "Montserrat",
              }}
            >
              <span
                style={{
                  fontSize: "5vw",
                  lineHeight: "5vw",
                  // fontWeight: "normal",
                }}
              >
                4{" "}
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5vw",
                }}
              >
                Semesters of General Membership Completed
              </span>
            </span>

            <span
              style={{
                position: "absolute",
                top: "55%",
                left: "60%",
                right: "5%",
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
                350+{" "}
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5vw",
                }}
              >
                Past General Members
              </span>
            </span>
            <span
              style={{
                position: "absolute",
                top: "90%",
                left: "50%",
                right: "10%",
                transform: "translate(-50%, -50%)",
                zIndex: "3",
                fontFamily: "Montserrat",
                lineHeight: "7vw",
              }}
            >
              <span
                style={{
                  fontSize: "5vw",
                  lineHeight: "9vw",
                  font: "Montserrat",
                }}
              >
                64{" "}
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5vw",
                  lineHeight: "2.5vw",
                  textAlign: "center",
                  font: "Montserrat",
                  fontWeight: "light",
                }}
              >
                Workshops Hosted
              </span>{" "}
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
          </div>
        </div>

        <Grid centered>
          <Grid.Row></Grid.Row>

          {CustomTitle({ title: "What We Do" })}
          <Grid.Row
            style={{
              color: "#000000",
              marginTop: "2vw",
              textAlign: "center",
              lineHeight: "4vw",
              fontSize: "2vw",
              fontWeight: "21vw",
              fontStyle: "normal",
              fontFamily: "Montserrat",
              marginLeft: "25vw",
              marginRight: "25vw",
            }}
          >
            The academic development committee hosts a variety of educational
            workshops for the greater campus community , and directs our general
            membership (GM) program open to all skill levels and students.
          </Grid.Row>

          {CustomTitle({ title: "Our Initiatives" })}
          <Grid.Row centered>
            <Card.Group centered>
              <Card style={overlayboxes}>
                <Card.Header style={generalmember}>
                  General Membership
                </Card.Header>
                <div style={circleStyle}> 1</div>

                <Card.Description style={cardDescription}>
                  We provide members with a mentor and weekly lectures covering
                  the data science lifecycle and project collaboration. Our goal
                  is to get you to a completed data science research project by
                  the end of the semester.
                  <br />
                  <List bulleted>
                    <List.Header style={whatYoullDo}>
                      What you’ll do:
                      <br />
                    </List.Header>
                    <List.Item style={bulletedPoints}>
                      Collaborate with students to develop a semester long
                      project of your choosing.
                    </List.Item>
                    <List.Item style={bulletedPoints}>
                      Present at the Berkeley Data Science Research Symposium
                      and create a publication to post on our website.
                    </List.Item>
                  </List>
                </Card.Description>
              </Card>
              <Card style={overlayboxes}>
                <Card.Header style={generalmember}>Workshops</Card.Header>
                <div style={circleStyle}> 2</div>
                <Card.Description style={cardDescription}>
                  Collaborate with students from a variety of backgrounds and
                  other organizations to educate the campus community of
                  practical problems, phenomena and tools related to data
                  science.
                  <br />
                  <List bulleted>
                    <List.Header style={whatYoullDo}>
                      What you’ll do:
                    </List.Header>

                    <List.Item style={bulletedPoints}>
                      Communicate with your fellow team members and other orgs
                      to develop workshop materials
                    </List.Item>
                    <List.Item style={bulletedPoints}>
                      Present to a wide audience and support the campus data
                      science community!
                    </List.Item>
                  </List>
                </Card.Description>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row centered columns={2}>
            <Button.Group centered>
              <Link to="education">
                <Button style={button}>Past GM Projects</Button>
              </Link>
              <Link to="education">
                <Button style={button}>Past Workshops</Button>
              </Link>
            </Button.Group>
          </Grid.Row>
          <Grid.Row
            centered
            columns={2}
            style={{ marginTop: "8vw", right: "3vw" }}
          >
            <Grid.Column width={6} textAlign="center">
              <Link to="/apply">
                <div style={info}>
                  <strong style={{ color: "#FFC54A" }}>
                    Interested in teaching?{" "}
                  </strong>
                  Apply to become an AcaDev Committee Member!
                </div>
              </Link>
            </Grid.Column>
            <Grid.Column width={6} textAlign="center">
              <Link to="/apply">
                <div style={info}>
                  <strong style={{ color: "#FFC54A" }}>
                    {" "}
                    Interested in learning?{" "}
                  </strong>
                  Apply to become a General Member!
                </div>
              </Link>
            </Grid.Column>
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
          {CustomTitle({ title: "AcaDev Directors" })}
          <Grid.Row>
            <Card.Group stackable doubling style={{ marginTop: "5vw" }}>
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={alleanna} />
                <Card.Content>
                  <Card.Header style={textstyle}>Alleanna Clark</Card.Header>
                  <Card.Meta>
                    <span className="date">Director of Acadev</span>
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
                <Image style={imagestyle} src={steph} />
                <Card.Content>
                  <Card.Header style={textstyle}>Stephanie Lu</Card.Header>
                  <Card.Meta>
                    <span className="date">Director of Acadev</span>
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
              <Card style={cardstyle}>
                {" "}
                <Image style={imagestyle} src={roshan} />
                <Card.Content>
                  <Card.Header style={textstyle}>Roshan Lodha</Card.Header>
                  <Card.Meta>
                    <span className="date">Director of Acadev</span>
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
            </Card.Group>
          </Grid.Row>

          <Grid.Row></Grid.Row>
          {CustomTitle({ title: "Current and Past Collaborations" })}
          <Grid.Row>
            <Image.Group style={{ marginLeft: "14vw", marginRight: "14vw" }}>
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
          <Grid.Row centered style={{ marginBottom: "9vw", marginTop: "4vw" }}>
            <div
              style={{
                background: "#FFFFFF",
                border: "5px solid #8CD6D1",
                boxSizing: "border-box",
                borderRadius: "3vw",
                width: "25%",
                height: "14vw",
                marginLeft: "8%",
                marginRight: "5%",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontWeight: "21.5vw",
                fontFamily: "Montserrat",
              }}
            >
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
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "5px solid #8CD6D1",
                boxSizing: "border-box",
                borderRadius: "3vw",
                width: "40%",
                height: "14vw",
                marginLeft: "8%",
                marginRight: "7vw",
              }}
            >
              <div
                style={{
                  fontSize: "2vw",
                  lineHeight: "2vw",
                  fontWeight: "21vw",
                  fontFamily: "Montserrat",
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
                  Contact us here >>
                </div>
              </Link>
            </div>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Acadev;
