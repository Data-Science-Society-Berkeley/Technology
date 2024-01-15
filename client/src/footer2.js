import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  Header,
  Button,
  Form,
  Input,
  Icon,
  List,
  Segment,
  Container,
  Grid,
  Image,
} from "semantic-ui-react";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import logo from "./Backgrounds/DSS-logo-black-transparent.png";
import ocf from "./Backgrounds/ocf-hosted-penguin.svg";

let endpoint = "http://localhost:8080/test";
const footer = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontStyle: "normal",
};
const iconDesc = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontStyle: "normal",
  marginLeft: "1.5vw",
  marginTop: "0px",
  lineHeight: "3vh",
  verticalAlign: "middle",
};
const link = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "600",
  margin: "-5px",
};
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Segment
        vertical
        style={{
          width: "100%",
          height: "auto",
          background: "#E5E5E5",
          marginLeft: "50px"
        }}
      >
        <Container>
          <Grid divided inverted>
            <Grid.Row>
              <Grid.Column width={16}>
                <div style={{ marginLeft: "-2vw", marginTop: "1.5vw", marginBottom: "1.5vw" }}>
                  <Image inline src={logo} style={{ width: "5vw",}}></Image>
                  <div
                    style={{
                      marginLeft:"6vw",
                      marginTop: "-3vw",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "21vw",
                      fontSize: "1.5vw",
                    }}
                  >
                    DATA SCIENCE SOCIETY
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: "1vw" }}>
              <Grid.Column width={4}>
                {/* <Icon.Group size="huge" style={{ marginLeft: "-20%" }}> */}
                <div style={{ fontSize: "3vw" }}>
                  <a href="mailto:info@dss.berkeley.edu" style={{
                    textDecoration: "none",
                  }}>
                    <Icon
                      name="mail outline"
                      style={{
                        marginBottom: "1vw",
                        color: "#8CD6D1",
                        width: "3vw",
                      }}
                    ></Icon>
                    <span style={iconDesc}>
                      <span style={{ marginLeft: ".5vw" }}>     Email</span>{" "}
                    </span>
                  </a>
                  <br />
                  <a href="https://www.instagram.com/dssberkeley/" style={{
                    textDecoration: "none",
                  }}>
                    {" "}
                    <Icon
                      name="instagram"
                      style={{ marginBottom: "1vw", color: "#8CD6D1" }}
                    />
                    <span style={iconDesc}> Instagram</span>
                  </a>{" "}
                  <br />
                  <a href="https://www.facebook.com/dssberkeley" style={{
                    textDecoration: "none",
                  }}>
                    {" "}
                    <Icon
                      name="facebook"
                      style={{ marginBottom: "1vw", color: "#8CD6D1" }}
                    ></Icon>
                    <span style={iconDesc}> Facebook</span>
                  </a>
                  <br />
                  <a href="https://www.linkedin.com/company/data-science-society-at-berkeley/" style={{
                    textDecoration: "none",
                  }}>
                    {" "}
                    <Icon
                      name="linkedin"
                      style={{ marginBottom: "1vw", color: "#8CD6D1" }}
                    ></Icon>
                    <span style={iconDesc}> LinkedIn</span>
                  </a>
                  <br />
                  <a href="https://www.youtube.com/channel/UCBj7xVI8e_jlEAznyVetWIQ/" style={{
                    textDecoration: "none",
                  }}>
                    {" "}
                    <Icon
                      name="youtube"
                      style={{
                        marginBottom: "1vw",
                        color: "#8CD6D1",
                        marginLeft: "-.25vw",
                      }}
                    ></Icon>
                    <span style={iconDesc}>
                      {" "}
                      <span style={{ marginLeft: ".4vw" }}>YouTube</span>
                    </span>
                  </a>
                </div>
                <br />
                {/* </Icon.Group> */}
              </Grid.Column>
              <Grid.Column width={3}>
                <div style={link}>General</div>
                <List link inverted>
                  <Link to="/about">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      About us{" "}
                    </List.Item>
                  </Link>
                  <br />
                  <Link to="/acadev">
                    <List.Item as="a" style={footer}>
                      {" "}
                      AcaDev
                    </List.Item>
                  </Link>
                  <br />
                  <Link to="/consulting">
                    <List.Item as="a" style={footer}>
                      {" "}
                      Consulting
                    </List.Item>
                  </Link>
                  <br />
                  {/* <Link to="/decal">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      DeCal{" "}
                    </List.Item>
                  </Link>
                  <br /> */}
                  <Link to="socialgood">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      Social Good{" "}
                    </List.Item>
                  </Link>
                  <br />
                  <Link to="/services">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      Services{" "}
                    </List.Item>
                  </Link>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <div style={link}>Past Work </div>
                <List link inverted>
                  <Link to="/consulting">
                    <List.Item as="a" style={footer}>
                      {" "}
                      Consulting
                    </List.Item>{" "}
                  </Link>{" "}
                  <br />
                  <Link to="/events">
                    <List.Item as="a" style={footer}>
                      Events
                    </List.Item>{" "}
                  </Link>
                  <br />
                  {/* <Link to="/education">
                    {" "}
                    <List.Item as="a" style={footer}>
                      Workshops
                    </List.Item>
                  </Link>
                  <br /> */}
                </List>
              </Grid.Column>
              <Grid.Column
                width={3}
                style={{ marginRight: "-7vw", marginLeft: "3vw" }}
              >
                 <Link to="/gm">
                    <List.Item as="a" style={link}>
                      {" "}
                      DeCal{" "}
                    </List.Item>
                  </Link>
                  <List link inverted>
                <Link to="/services">
                  {" "}
                  <div style={link}>Contact Us</div>
                </Link>
                </List>
                <List link inverted>
                  <Link to="/join">
                    <List.Item as="a" style={link}>
                      Join Us{" "}
                    </List.Item>
                  </Link>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered style={{ marginBottom: "1.5vw" }}>
              <div style={footer}>
                We are a student group acting independently of the University of
                California. We take full responsibility for our organization and
                this website.
              </div>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
export default Footer;