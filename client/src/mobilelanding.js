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
import edu from "./landing/AcaDev.png";
import collab from "./landing/Rectangle66.png";
import socialize from "./landing/Rectangle69.png";
import socialgood from "./landing/SocialGood.png";
import ocf from "./Backgrounds/ocf-hosted-penguin.svg";

let endpoint = "https://dssberkeley.com/";
const gridoffset = {
  marginLeft: "384px",
  textAlign: "center",
  fontFamily: "Montserrat",

  marginTop: "-600px",
};
const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "110px",
  fontSize: "96px",
  color: "#FFFBFB",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "60px",
};
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "76px",
  fontSize: "50px",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "lcenter",
};

const overlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "78px",
  fontSize: "64px",
  color: "#00000",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "74px",
  paddingTop: "83px",
};
const underlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "37px",
  fontSize: "30px",
  color: "#FFFFFF",
  fontStyle: "normal",
  textAlign: "left",
  marginLeft: "74px",
  paddingTop: "85px",
};
const apply = {
  width: "425px",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "55px",
  fontSize: "36px",
  borderRadius: "40px",
  color: "#FFC54A",
  fontStyle: "normal",
  background: "#FFFFFF",
};
const formStyle = {
  height: "88px",
  border: "1px solid #000000",
  boxSizing: "borderBox",
  backgroundColor: "transparent",
  marginTop: "22px",
  color: "#000000",
};
const buttonStyle = {
  height: "76px",
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "37px",
  fontSize: "24px",
  color: "#FFFFFF",
  fontStyle: "normal",
  background: "#8CD6D1",
  borderRadius: "35px",
  marginTop: "14px",
  border: "1px solid #000000",
  boxSizing: "borderBox",
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
    console.log(this.state.height, this.state.width);
    return (
      <div>
        <Grid stackable divided="vertically" style={gridoffset}>
          <Grid.Row columns={2}>
            <Grid.Column floated="right">
              <Header as="h1" style={mybigtext}>
                Data Science Society
              </Header>
              <Header as="h1" style={mymidtext}>
                At Berkeley
              </Header>
            </Grid.Column>

            <Grid.Column style={{ marginLeft: "484px", marginTop: "-250px" }}>
              <Button style={apply} circular>
                Join Us
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <div
              style={{
                width: "100%",
                height: "293px",
                backgroundColor: "white",
                marginTop: "-13px",
                marginBottom: "-13px",
              }}
            >
              <Grid.Column>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "300px",
                    fontSize: "48px",
                    lineHeight: "50px",
                    color: "#000000",
                  }}
                >
                  Building the next generation of data science leaders,
                  educators, and change-makers.
                </div>
              </Grid.Column>

              <Link to="/about">
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "600px",
                    fontSize: "36px",
                    lineHeight: "44px",
                    color: "#0376FD",
                    height: "38px",
                  }}
                >
                  <span>Learn More > </span>
                </div>
              </Link>
            </div>
          </Grid.Row>

          <div
            columns={1}
            style={{
              width: "2000px",
              height: "564px",
              backgroundImage: `url(${edu})`,
            }}
          >
            <div style={overlaytext}>educate.</div>
            <div style={underlaytext}>
              <Link to="/acadev">
                {" "}
                <div style={{ color: "#FFFFFF" }}>
                  {" "}
                  Learn more about our Academic Development programs >>{" "}
                </div>{" "}
              </Link>
              <Link to="/decal">
                {" "}
                <div style={{ marginTop: "29px", color: "#FFFFFF" }}>
                  Check out our DeCal >>
                </div>
              </Link>
            </div>
          </div>
          <div
            columns={1}
            style={{
              width: "2000px",
              height: "554px",
              backgroundImage: `url(${collab})`,
            }}
          >
            <div style={overlaytext}>innovate.</div>
            <Link to="/consulting">
              <div style={underlaytext}>
                Learn more about our consulting projects >>
              </div>
            </Link>
          </div>
          <div
            columns={1}
            style={{
              width: "2000px",
              height: "564px",
              backgroundImage: `url(${socialize})`,
            }}
          >
            <div style={overlaytext}>socialize.</div>
          </div>
          <div
            columns={1}
            style={{
              width: "2000px",
              height: "564px",
              backgroundImage: `url(${socialgood})`,
            }}
          >
            <div style={overlaytext}>engage.</div>
          </div>
          <Grid.Row>
            <div style={{ backgroundColor: "white", marginTop: "-14px" }}>
              <div
                style={{
                  marginLeft: "0px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "32px",
                  lineHeight: "45px",
                  color: "#8CD6D1",
                }}
              >
                Subscribe to our newsletter to get updates on what we do
              </div>
              <Form>
                <Input style={formStyle} placeholder={"E-mail"} />
                <Form.Button rounded style={buttonStyle}>
                  Submit
                </Form.Button>
              </Form>
              <div>
                <Icon.Group
                  size="huge"
                  style={{ marginLeft: "0px", marginTop: "100px" }}
                >
                  <a href="mailto:info@dss.berkeley.edu">
                    <Icon
                      name="mail"
                      style={{ marginLeft: "100px", color: "#8CD6D1" }}
                    ></Icon>
                  </a>
                  <a href="https://www.instagram.com/dssberkeley/">
                    {" "}
                    <Icon
                      name="instagram"
                      style={{ marginLeft: "0px", color: "#8CD6D1" }}
                    />{" "}
                  </a>

                  <a href="https://www.facebook.com/dssberkeley">
                    {" "}
                    <Icon
                      name="facebook"
                      style={{ marginLeft: "10px", color: "#8CD6D1" }}
                    ></Icon>
                  </a>
                  <a href="https://www.linkedin.com/company/data-science-society-at-berkeley/">
                    {" "}
                    <Icon
                      name="linkedin"
                      style={{ marginLeft: "10px", color: "#8CD6D1" }}
                    ></Icon>
                  </a>
                  <a href="https://www.youtube.com/channel/UCBj7xVI8e_jlEAznyVetWIQ/">
                    {" "}
                    <Icon
                      name="youtube"
                      style={{ marginLeft: "10px", color: "#8CD6D1" }}
                    ></Icon>
                  </a>
                </Icon.Group>
              </div>
            </div>
          </Grid.Row>

          <a href="https://www.ocf.berkeley.edu/">
            <Image src={ocf} style={{ marginTop: "20px" }}></Image>
          </a>
        </Grid>
      </div>
    );
  }
}
export default CentralText;
