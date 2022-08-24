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
  fontSize: "1vw",
  fontStyle: "normal",
  lineHeight: "1.5vw",
};
const iconDesc = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "1vw",
  fontStyle: "normal",
  lineHeight: "1.5vw",
  marginLeft: "1.5vw",
  marginTop: "0px",
  verticalAlign: "middle",
};
const link = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "1vw",
  fontStyle: "normal",
  lineHeight: "1.5vw",
  fontWeight: "600",
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
          height: "43vw",
          background: "#E5E5E5",
        }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <div style={{ marginLeft: "-20%", marginTop: "1.5vw" }}>
                <Image inline src={logo} style={{ width: "5vw" }}></Image>
                <div
                  style={{
                    marginLeft: "7vw",
                    marginTop: "-3vw",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "21vw",
                    fontSize: "1.5vw",
                    lineHeight: "2vw",
                  }}
                >
                  DATA SCIENCE SOCIETY
                </div>
              </div>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: "1vw", marginTop: "1.5vw" }}>
              <Grid.Column width={8}>
                {/* <Icon.Group size="huge" style={{ marginLeft: "-20%" }}> */}
                <div style={{ fontSize: "3vw" }}>
                  <a href="mailto:info@dss.berkeley.edu">
                    <Icon
                      name="mail outline"
                      style={{
                        marginBottom: "1vw",
                        color: "#8CD6D1",
                        width: "3vw",
                      }}
                    ></Icon>
                  </a>
                  <span style={iconDesc}>
                    <span style={{ marginLeft: ".5vw" }}> Email</span>{" "}
                  </span>
                  <br />
                  <a href="https://www.instagram.com/dssberkeley/">
                    {" "}
                    <Icon
                      name="instagram"
                      style={{ marginBottom: "1vw", color: "#8CD6D1" }}
                    />
                    <span style={iconDesc}> Instagram</span>
                  </a>{" "}
                  <br />
                  <a href="https://www.facebook.com/dssberkeley">
                    {" "}
                    <Icon
                      name="facebook"
                      style={{ marginBottom: "1vw", color: "#8CD6D1" }}
                    ></Icon>
                    <span style={iconDesc}> Facebook</span>
                  </a>
                  <br />
                  <a href="https://www.linkedin.com/company/data-science-society-at-berkeley/">
                    {" "}
                    <Icon
                      name="linkedin"
                      style={{ marginBottom: "1vw", color: "#8CD6D1" }}
                    ></Icon>
                    <span style={iconDesc}> LinkedIn</span>
                  </a>
                  <br />
                  <a href="https://www.youtube.com/channel/UCBj7xVI8e_jlEAznyVetWIQ/">
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
              <Grid.Column width={2}>
                <div style={link}>General</div>
                <List link inverted>
                  <Link to="/about">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      About us{" "}
                    </List.Item>
                  </Link>
                  <br /> <br />
                  <Link to="/acadev">
                    <List.Item as="a" style={footer}>
                      {" "}
                      AcaDev
                    </List.Item>
                  </Link>
                  <br /> <br />
                  <Link to="/consulting">
                    <List.Item as="a" style={footer}>
                      {" "}
                      Consulting{" "}
                    </List.Item>
                  </Link>
                  <br /> <br />
                  {/* <Link to="/decal">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      DeCal{" "}
                    </List.Item>
                  </Link>
                  <br /> <br /> */}
                  <Link to="socialgood">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      Social Good{" "}
                    </List.Item>
                  </Link>
                  <br /> <br />
                  <Link to="/services">
                    {" "}
                    <List.Item as="a" style={footer}>
                      {" "}
                      Services{" "}
                    </List.Item>
                  </Link>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <div style={link}>Past Work </div>
                <List link inverted>
                  <Link to="/consulting">
                    <List.Item as="a" style={footer}>
                      {" "}
                      Consulting
                    </List.Item>{" "}
                  </Link>{" "}
                  <br />
                  <br />
                  <Link to="/events">
                    <List.Item as="a" style={footer}>
                      Events
                    </List.Item>{" "}
                  </Link>
                  <br /> <br />
                  {/* <Link to="/education">
                    {" "}
                    <List.Item as="a" style={footer}>
                      Workshops
                    </List.Item>
                  </Link>
                  <br /> <br /> */}
                  <Link to="/gm">
                    {" "}
                    <List.Item as="a" style={footer}>
                      GM Projects
                    </List.Item>{" "}
                  </Link>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <div style={link}>
                  <div style={{ width: "15vw" }}>Program Pages </div>
                </div>
                <List link inverted>
                  <Link to="/gm">
                    <List.Item as="a" style={footer}>
                      {" "}
                      General Membership{" "}
                    </List.Item>
                  </Link>
                  {/* <br /> <br />
                  <Link to="/decallearn">
                    <List.Item as="a" style={footer}>
                      DeCal Course{" "}
                    </List.Item>
                  </Link>{" "} */}
                  <br />
                  <br />
                </List>
              </Grid.Column>
              <Grid.Column
                width={2}
                style={{ marginRight: "-7vw", marginLeft: "3vw" }}
              >
                <Link to="/services">
                  {" "}
                  <div style={link}>Contact Us </div>{" "}
                </Link>
                <List link inverted>
                  <Link to="/join">
                    <List.Item as="a" style={link}>
                      {" "}
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
