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
  Message,
  Segment,
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import edu from "./landing/AcaDev.png";
import engage from "./landing/engage-opacity.png";
import innovate from "./landing/innovate-opacity.png";
import educate from "./landing/education-opacity.png";
import topright from "./landing/WebsiteLandingPage-2.png";
import bottomright from "./landing/WebsiteLandingPage-2rotate.png";
import NavBar2 from "./mobilemenu";

import ocf from "./Backgrounds/ocf-hosted-penguin.svg";

let endpoint = "https://dssberkeley.com/";
const gridoffset = {
  marginLeft: "5vw",
  // marginTop: "5vw",
  textAlign: "center",
  fontFamily: "Montserrat",
  position: "relative",
  marginBottom: "33vw",
};
const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "8vw",
  fontSize: "4vw",
  color: "#FFFBFB",
  fontStyle: "normal",
  textAlign: "left",
  marginTop: "3vw",
  marginLeft: "-2vw",
};
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "6vw",
  fontSize: "3vw",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "left",
  marginTop: "-2vw",
  marginLeft: "-2vw",
};

const overlaytext = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "5vw",
  fontWeight: 500,
  fontSize: "5vw",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "center",
  // marginLeft: "7vw",
  paddingTop: "3vw",
};
const underlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2.5vw",
  fontSize: "2.5vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  paddingTop: "2vw",
};
const apply = {
  minWidth: "15vw",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "4vw",
  fontSize: "2.5vw",
  borderRadius: "3vw",
  color: "#FFC54A",
  fontStyle: "normal",
  background: "#FFFFFF",
  marginLeft: "-7vw",
};
const learn = {
  maxWidth: "26vw",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "4vw",
  fontSize: "2.5vw",
  borderRadius: "3vw",
  color: "#FFC54A",
  fontStyle: "normal",
  background: "#FFFFFF",
  marginLeft: "5vw",
};
const formStyle = {
  width: "83vw",
  height: "6vw",
  border: "1px solid #000000",
  boxSizing: "borderBox",
  backgroundColor: "transparent",
  marginTop: "1.5vw",
  marginLeft: "7vw",
  color: "#000000",
  fontSize: "1.5vw",
};
const buttonStyle = {
  width: "21vw",
  height: "5vw",
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2.5vw",
  fontSize: "1.5vw",
  color: "#FFFFFF",
  fontStyle: "normal",
  background: "#8CD6D1",
  borderRadius: "3vw",
  marginTop: "3vw",
  boxSizing: "borderBox",
  marginLeft: "70vw",
};
const value_card = {
  // minWidth: "20vw",
  height: "22vw",
  width: "22vw",
  // minHeight: "20vw",
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "4vw",
  fontSize: "2.5vw",
  borderRadius: "2vw",
  color: "#FFC54A",
  fontStyle: "normal",
  background: "#8CD6D1",
  border: "5px solid #8CD6D1",
  boxSizing: "border-box",
  boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  marginLeft: "4vw",
};
class CentralText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      normal_width: "1440px",
      normal_height: "406px",
      width: 0,
      height: 0,
    };
    this.join = this.join.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join() {
    return [
      <Card style={value_card}>
        <Card.Header
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "45vw",
            fontSize: "4vw",
            lineHeight: "4vw",
            color: "#FFFFFF",
            marginTop: "2vw",
          }}
        >
          1
        </Card.Header>
        <Link to="/services">
          <Card.Description
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "40vw",
              fontSize: "2vw",
              lineHeight: "2.5vw",
              color: "#FFFFFF",
              width: "18vw",
              marginTop: "2.5vw",
              marginBottom: "2.5vw",
              marginLeft: "1vw",
            }}
          >
            Contact us for consulting services.
          </Card.Description>
        </Link>
      </Card>,
      <Card style={value_card}>
        <Card.Header
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "45vw",
            fontSize: "4vw",
            lineHeight: "4vw",
            color: "#FFFFFF",
            marginTop: "2vw",
          }}
        >
          2
        </Card.Header>
        <Link to="/services">
          <Card.Description
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "40vw",
              fontSize: "2vw",
              lineHeight: "2.5vw",
              color: "#FFFFFF",
              width: "18vw",
              marginTop: "2.5vw",
              marginBottom: "2.5vw",
              marginLeft: "1vw",
            }}
          >
            Like what we do? Sponsor us today!{" "}
          </Card.Description>
        </Link>
      </Card>,
      <Card style={value_card}>
        <Card.Header
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "45vw",
            fontSize: "4vw",
            lineHeight: "4vw",
            color: "#FFFFFF",
            marginTop: "2vw",
          }}
        >
          3
        </Card.Header>
        <Link to="/services">
          <Card.Description
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "40vw",
              fontSize: "2vw",
              lineHeight: "2.5vw",
              color: "#FFFFFF",
              width: "18vw",
              marginTop: "2.5vw",
              marginBottom: "2.5vw",
              marginLeft: "1vw",
            }}
          >
            Connect with us and let’s host an event!{" "}
          </Card.Description>
        </Link>
      </Card>,
    ];
  }
  loginUser = () => {
    let email = this.state.email;
    axios
      .post(
        endpoint + "/api/email",
        {
          email,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        if (res.status == 200) {
          this.setState({ success: true });
        } else {
          // throw an error for the program //TODO TEST THIS works
          // TODO when logout, clear the cookie from cache and browser..
        }
      });
  };
  onEChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  sendData(data) {
    this.props.buttonClick(data);
  }
  moveAbout() {
    document.getElementById("about").scrollIntoView();
  }
  render() {
    console.log(this.state.height, this.state.width);
    let process = this.join();
    return (
      <div style={{ marginTop: "1vw" }}>
        {/* <NavBar2 {...this.props} /> */}
        {/* <Segment style={{ padding: "8em 0em" }} vertical> */}
        <Grid divided="vertically" style={gridoffset} className="pusher">
          <Grid.Row columns={2} style={{ position: "relative" }}>
            <Grid.Column width={9}>
              <Header style={mybigtext}>Data Science Society</Header>
              <Header as="h1" style={mymidtext}>
                At Berkeley
              </Header>
              <Image
                style={{
                  height: "25vw",
                  marginTop: "3vw",
                  marginLeft: "-5vw",
                  marginBottom: "-25vw",
                }}
                floated="left"
                src={bottomright}
              ></Image>
            </Grid.Column>

            <Grid.Column
              textAlign="center"
              floated="right"
              verticalAlign="top"
              style={{ position: "absolute", left: "45%" }}
            >
              <Image
                style={{
                  height: "25vw",
                  // marginTop: "-20vw",
                  // marginBottom: "-10vw",
                  // marginRight: "1.5vw",
                  // marginLeft: "20vw",
                  // position: "absolute",
                }}
                floated="right"
                src={topright}
              ></Image>
              <Button.Group
                style={{
                  marginTop: "10vw",
                  // position: "absolute",
                  top: "100%",
                }}
              >
                <Link to="/apply">
                  <Button style={apply} circular>
                    APPLY
                  </Button>
                </Link>
                <Button onClick={this.moveAbout} style={learn} circular>
                  LEARN MORE{" "}
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid
          style={{
            width: "110%",
            backgroundColor: "white",
            marginTop: "10vw",
          }}
        >
          <Grid.Row>
            <Grid.Column
              id="about"
              style={{
                fontFamily: "Montserrat",
                marginLeft: "7vw",
                font: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "5vw",
                lineHeight: "5vw",
                color: "#8CD6D1",
                marginTop: "5vw",
              }}
            >
              About Us
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              fontFamily: "Montserrat",
              fontWeight: "21vw",
              fontSize: "2.5vw",
              lineHeight: "3vw",
              color: "#000000",
              width: "77vw",
              marginLeft: "7vw",
              marginTop: "1.5vw",
            }}
          >
            <Grid.Column width={9}>
              Building the next generation of data science leaders, educators,
              and change-makers.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column
              width={6}
              floated="right"
              verticalAlign="middle"
              style={{ height: "2.5vw", marginBottom: "4vw" }}
            >
              <Link
                to="/about"
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "42vw",
                  fontSize: "2.5vw",
                  lineHeight: "3vw",
                  color: "#FFC54A",
                  marginLeft: "10vw",
                }}
              >
                Learn More >
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* Insert HERE */}
        <Grid style={{ width: "110%" }}>
          <Grid.Row
            columns={2}
            style={{
              width: "143vw",
              height: "29vw",
              backgroundColor: "#8CD6D1",
              backgroundSize: "100%",
              zIndex: "1",
              position: "relative",
              overflow: "hidden",
              margin: "0",
            }}
          >
            <Grid.Column>
              <Image
                style={{
                  marginLeft: "7vw",
                  zIndex: "2",
                  borderStyle: "solid",
                  borderColor: "#EDE8C4",
                  borderWidth: "1vw",
                  backgroundColor: "#FFFFFF",
                  position: "absolute",
                  width: "50vw",
                  top: "50%",

                  transform: "translateY(-50%)",
                  objectFit: "contain",
                }}
                src={educate}
              ></Image>
            </Grid.Column>

            <Grid.Column centered>
              <div style={overlaytext}>educate.</div>
              <div style={underlaytext}>
                <Link to="/acadev">
                  {" "}
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 500,
                      marginRight: "5vw",
                    }}
                  >
                    {" "}
                    Learn more about our Academic Development programs >>{" "}
                  </div>{" "}
                </Link>
                <Link to="/decal">
                  {" "}
                  <div
                    style={{
                      marginTop: "2vw",
                      color: "#FFFFFF",
                      fontWeight: 500,
                    }}
                  >
                    Check out our DeCal >>
                  </div>
                </Link>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row
            columns={1}
            style={{
              width: "100%",
              height: "29vw",
              backgroundImage: `url(${innovate})`,
              backgroundSize: "100%",
            }}
          >
            <Grid.Column>
              <div style={overlaytext}>innovate.</div>
            </Grid.Column>
            <Grid.Column>
              <Link to="/consulting">
                <div style={underlaytext}>
                  Learn more about our consulting projects >>
                </div>
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            columns={1}
            style={{
              width: "143vw",
              height: "29vw",
              backgroundImage: `url(${engage})`,
              backgroundSize: "100%",
            }}
          >
            <Grid.Column>
              <div style={overlaytext}>engage.</div>
            </Grid.Column>
            <Grid.Column>
              <Link to="/events">
                <div style={underlaytext}>
                  Learn more about our campus-wide events >>
                </div>
              </Link>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column
              width={10}
              style={{
                marginLeft: "7vw",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "5vw",
                lineHeight: "5vw",
                color: "#8CD6D1",
                paddingTop: "7vw",
              }}
            >
              Work with Us
            </Grid.Column>
            <Grid.Column
              width={12}
              style={{
                marginLeft: "7vw",
                fontWeight: "300",
                fontSize: "2.5vw",
                lineHeight: "2vw",
                fontFamily: "Montserrat",
                marginTop: "3vw",
              }}
            >
              Collaborate with us and grow our data science community!
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Card.Group centered style={{ marginTop: "6vw" }}>
                {process}
              </Card.Group>
            </Grid.Column>
            <Grid.Column
              style={{
                marginLeft: "7vw",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "5vw",
                lineHeight: "5vw",
                color: "#8CD6D1",
                marginTop: "8vw",
              }}
            >
              Subscribe to our newsletter!
            </Grid.Column>
            <Grid.Column
              style={{
                marginLeft: "7vw",
                fontWeight: "300",
                fontSize: "2.5vw",
                lineHeight: "2vw",
                fontFamily: "Montserrat",
                marginTop: "3vw",
              }}
            >
              Stay updated on our events, recruiting, and other on-campus
              initiatives.{" "}
            </Grid.Column>
            <Grid.Column style={{ marginBottom: "7vw" }}>
              <Form success={this.state.success} style={{ marginTop: "7vw" }}>
                <Form.Input
                  onChange={this.onEChange}
                  style={formStyle}
                  placeholder={"E-mail"}
                />
                <Form.Button
                  onClick={this.loginUser}
                  rounded
                  style={buttonStyle}
                >
                  Submit
                </Form.Button>
                <Message
                  style={{ fontFamily: "Montserrat" }}
                  success
                  header="Form Completed"
                  content="Thanks for signing up for our newsletter!"
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* </Segment> */}
      </div>
    );
  }
}
export default CentralText;

{
  /* <Grid style={{ width: "110%", backgroundColor: "white" }}>
<Grid.Row
  columns={1}
  style={{
    width: "143vw",
    height: "29vw",
    backgroundImage: `url(${educate})`,
    backgroundSize: "100%",
  }}
>
  <Grid.Column>
    <div style={overlaytext}>educate.</div>
  </Grid.Column>

  <Grid.Column>
    <div style={underlaytext}>
      <Link to="/acadev">
        {" "}
        <div style={{ color: "#000000" }}>
          {" "}
          Learn more about our Academic Development programs >>{" "}
        </div>{" "}
      </Link>
      <Link to="/decal">
        {" "}
        <div style={{ marginTop: "2vw", color: "#000000" }}>
          Check out our DeCal >>
        </div>
      </Link>
    </div>
  </Grid.Column>
</Grid.Row>
<Grid.Row
  columns={1}
  style={{
    width: "100%",
    height: "29vw",
    backgroundImage: `url(${innovate})`,
    backgroundSize: "100%",
  }}
>
  <Grid.Column>
    <div style={overlaytext}>innovate.</div>
  </Grid.Column>
  <Grid.Column>
    <Link to="/consulting">
      <div style={underlaytext}>
        Learn more about our consulting projects >>
      </div>
    </Link>
  </Grid.Column>
</Grid.Row>
<Grid.Row
  columns={1}
  style={{
    width: "143vw",
    height: "29vw",
    backgroundImage: `url(${engage})`,
    backgroundSize: "100%",
  }}
>
  <Grid.Column>
    <div style={overlaytext}>engage.</div>
  </Grid.Column>
  <Grid.Column>
    <Link to="/events">
      <div style={underlaytext}>
        Learn more about our campus-wide events >>
      </div>
    </Link>
  </Grid.Column>
</Grid.Row> */
}
