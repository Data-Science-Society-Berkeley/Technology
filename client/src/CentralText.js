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
import engage from "./landing/engage.jpg";
import innovate from "./landing/innovate.jpg";
import educate from "./landing/educate.jpg";
import topright from "./landing/WebsiteLandingPage-2.png";
import bottomright from "./landing/WebsiteLandingPage-2rotate.png";
import recruitbanner from "./landing/dssfall2021recruitment.png";
import NavBar2 from "./mobilemenu";
import rectangleSingle from "./landing/rectangleSingle.png";
import rectangleGroup from "./landing/rectangleGroup.png";
import squiggly1 from "./landing/squiggly1.png";
import squiggly2 from "./landing/squiggly2.png";
import frontsplash from "./landing/frontsplash.png";
import landingSquiggle from "./landing/landing_squiggle.png";
import landingSquiggle2 from "./landing/landing_squiggle2.png";

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
  fontSize: "3.5vw",
  color: "#FFFBFB",
  fontStyle: "normal",
  textAlign: "left",
  marginTop: "-7vw",
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
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  // marginLeft: "7vw",
  marginTop: "2vw",
};

const underlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2.2vw",
  fontSize: "2vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "3vw",
};
const apply = {
  minWidth: "15vw",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "3vw",
  fontSize: "2.5vw",
  borderRadius: "1.5vw",
  color: "#000000",
  fontStyle: "normal",
  background: "#D2F2F0",
  marginLeft: "-7vw",
};
const learn = {
  maxWidth: "26vw",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "3vw",
  fontSize: "2.5vw",
  borderRadius: "1.5vw",
  color: "#000000",
  fontStyle: "normal",
  background: "#D2F2F0",
  marginLeft: "2vw",
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
            Interested in what we do? Sponsor us!{" "}
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
        <Image
                style={{
                  height: "25vw",
                  position: "absolute",
                  top: "0",
                  width: "160vw",
                  height: "auto",
                  zIndex: "-1",
                  margin: "auto",
                }}
                src={frontsplash}
              ></Image>
        {/* <NavBar2 {...this.props} /> */}
        {/* <Segment style={{ padding: "8em 0em" }} vertical> */}
        <Grid divided="vertically" style={gridoffset} className="pusher">
          <Grid.Row columns={2} style={{ 
              position: "relative",
              marginTop: "5vw",
            }}>
            <Grid.Column width={9}>
              <Header style={mybigtext}>Data Science Society</Header>
              <Header as="h1" style={mymidtext}>
                At Berkeley
              </Header>
              {/* <Image
                style={{
                  height: "25vw",
                  marginTop: "3vw",
                  marginLeft: "-5vw",
                  marginBottom: "-25vw",
                }}
                floated="left"
                src={bottomright}
              ></Image> */}

              {/* <Image
                style={{
                  height: "25vw",
                  marginTop: "-15vw",
                    //marginBottom: "30vw",
                  marginLeft: "10vw",
                  
                    // position: "absolute",
                }}
                floated="right"
                src={recruitbanner}
              ></Image> */}

            </Grid.Column>
            
            {/* <Grid.Column width={18}>
              <Image
                  style={{
                    height: "30vw",
                    marginTop: "10vw",
                    //marginBottom: "30vw",
                    marginRight: "60vw",
                    marginLeft: "-20vw",
                    // position: "absolute",
                  }}
                  
                  src={recruitbanner}
                ></Image>
              </Grid.Column> */}

            <Grid.Column
              textAlign="center"
              floated="right"
              verticalAlign="top"
              style={{ position: "absolute", left: "45%" }}
            >
              <Image
                style={{
                  height: "22vw",
                  opacity: "0",
                  // marginTop: "-20vw",
                  // marginBottom: "-10vw",
                  // marginRight: "1.5vw",
                  // marginLeft: "20vw",
                  // position: "absolute",
                }}
                floated="right"
                src={topright}
              ></Image>

              {/* <Image
                style={{
                  //height: "30vw",
                  marginTop: "-0.5vw",
                    //marginBottom: "30vw",
                  //marginLeft: "10vw",
                  
                    // position: "absolute",
                }}
                
                src={recruitbanner}
              ></Image> */}
              

              

              <Button.Group
                style={{
                  position: "absolute",
                  top: "30vw",
                  right: "3vw",
                }}
              >
                <Link to="/joinus">
                  <Button style={apply} circular>
                    Join Us
                  </Button>
                </Link>
                <Button onClick={this.moveAbout} style={learn} circular>
                  Learn More{" "}
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* Beginning of segment after header image */}
        <Grid
          style={{
            width: "110%",
            background: "#FFFFFF",
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
                fontSize: "4vw",
                lineHeight: "4vw",
                color: "#000000",
                marginTop: "3vw",
              }}
            >
              <div>We are DSS.</div>
              {/* <div>
                <Image
                  src={rectangleGroup}
                  style={{ width: "27vw", marginTop: "1vw" }}
                ></Image>
              </div> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              fontFamily: "Montserrat",
              fontSize: "2.2vw",
              lineHeight: "3vw",
              color: "#000000",
              width: "77vw",
              marginLeft: "7vw",
              marginTop: "1.5vw",
            }}
          >
            <Grid.Column width={10}>
              Data Science Society is Berkeley’s first undergraduate data science-focused 
              student organization, building the next generation of data 
              science leaders, educators, and changemakers. Our mission is
              to actively foster a strong data science community on campus
              via our educational and consulting initiatives.
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column
              width={6}
              floated="left"
              verticalAlign="middle"
              style={{ height: "2.5vw", marginBottom: "6vw" }}
            >
              <Link
                to="/about"
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: "42vw",
                  fontSize: "2.5vw",
                  lineHeight: "2vw",
                  color: "#EFB53A",
                  marginLeft: "7vw",
                }}
              >
                Learn More 
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* Insert HERE */}


        <Image 
          src={landingSquiggle}
          style={{
            minWidth: "160vw",
            height: "25vw",
            marginTop: "-7vw",
            marginLeft: "-15vw",
            position: "absolute",
          }}
          ></Image>
        <Grid style={{ 
          width: "110%",
          background: "linear-gradient(150deg, #CCF6FA 0%, #FFFFFF 60%, #FFFFFF 75%, #FFEECC 100%)",
          padding: "15vw 0vw 0vw 0vw"
          }}>
          <Grid.Row
            columns={2}
            style={{
              width: "143vw",
              height: "29vw",
              backgroundColor: "#00000000",
              backgroundSize: "100%",
              zIndex: "1",
              position: "relative",
            }}
          >
            <Grid.Column
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                style={{
                  marginLeft: "7vw",
                  zIndex: "2",
                  backgroundColor: "#cccccc",
                  width: "70vw",
                }}
                src={educate}
              ></Image>
            </Grid.Column>

            <Grid.Column
              width={6}
              style={{
                marginLeft: "5vw",
                position: "absolute",
                top: "40%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div style={{
                fontFamily: "Montserrat",
                marginLeft: "15vw",
                font: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "4vw",
                lineHeight: "4vw",
                color: "#000000",
                marginTop: "5vw",
              }}
              >Educate.</div>
              {/* <div>
                <Image
                  src={rectangleSingle}
                  style={{ width: "25vw", margin: "auto", marginTop: ".5vw" }}
                ></Image>
              </div> */}
              <div style={underlaytext}>
                <Link to="/acadev">
                  {" "}
                  <div
                    style={{
                      color: "#000000",
                      marginRight: "5vw",
                      marginBottom: "1vw",
                    }}
                  >
                    Learn about our Academic Development committee 🡒
                  </div>
                </Link>
                <div
                  style={{
                    color: "#000000",
                    marginRight: "5vw",
                    marginBottom: "1vw",
                  }}
                >
                  or
                </div>
                <Link to="/decal">
                  {" "}
                  <div
                    style={{
                      marginRight: "5vw",
                      color: "#000000",
                    }}
                  >
                    Learn about our DeCal 🡒
                  </div>
                </Link>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row
            columns={2}
            style={{
              width: "100%",
              height: "29vw",
              backgroundColor: "#0000",
              backgroundSize: "100%",
              position: "relative",
            }}
          >
            {/* <div>
              <Image
                src={squiggly1}
                style={{
                  left: "0%",
                  width: "25vw",
                  position: "absolute",
                  top: "0%",
                }}
              ></Image>
            </div> */}
            <Grid.Column
              width={6}
              style={{
                position: "absolute",
                top: "40%",
                transform: "translateY(-50%)",
                marginLeft: "7vw",
              }}
            >
              <div style={{
                fontFamily: "Montserrat",
                marginLeft: "16vw",
                font: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "4vw",
                lineHeight: "4vw",
                color: "#000000",
                marginTop: "5vw",
              }}
              >Innovate.</div>
              {/* <div>
                <Image
                  src={rectangleSingle}
                  style={{ width: "25vw", margin: "auto", marginTop: ".5vw" }}
                ></Image>
              </div> */}
              <Link to="/consulting">
                <div style={underlaytext}>
                  Learn about our consulting projects 🡒
                </div>
              </Link>
            </Grid.Column>
            <Grid.Column
              style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                style={{
                  marginRight: "7vw",
                  zIndex: "2",
                  backgroundColor: "#cccccc",
                  width: "70vw",
                }}
                src={innovate}
              ></Image>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row
            columns={2}
            style={{
              // width: "143vw",
              height: "29vw",
              backgroundSize: "100%",
              zIndex: "1",
              position: "relative",
            }}
          >
            {/* <div>
              <Image
                src={squiggly2}
                style={{
                  left: "70%",
                  width: "40vw",
                  position: "absolute",
                  top: "0%",
                }}
              ></Image>
            </div> */}
            <Grid.Column
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                style={{
                  marginLeft: "7vw",
                  zIndex: "2",
                  backgroundColor: "#cccccc",
                  width: "70vw",
                }}
                src={engage}
              ></Image>
            </Grid.Column>

            <Grid.Column
              width={6}
              style={{
                marginLeft: "5vw",
                position: "absolute",
                top: "45%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div style={{
                fontFamily: "Montserrat",
                marginLeft: "16vw",
                font: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "4vw",
                lineHeight: "4vw",
                color: "#000000",
                marginTop: "3vw",
              }}
              >Engage.</div>
              {/* <div>
                <Image
                  src={rectangleSingle}
                  style={{ width: "25vw", margin: "auto", marginTop: "1vw" }}
                ></Image>
              </div> */}
              <div style={underlaytext}>
                <Link to="/acadev">
                  {" "}
                  <div
                    style={{
                      color: "#000000",
                      marginRight: "2vw",
                    }}
                  >
                    {" "}
                    Learn about our campus-wide events 🡒{" "}
                  </div>{" "}
                </Link>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} >
            <Grid.Column
              width={10}
              style={{
                marginLeft: "7vw",
                marginTop: "4vw",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "4vw",
                lineHeight: "5vw",
                color: "#000000",
              }}
            >
              Work with Us
            </Grid.Column>
            <Grid.Column
              width={12}
              style={{
                marginLeft: "7vw",
                fontWeight: "300",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontFamily: "Montserrat",
                marginTop: "1vw",
              }}
            >
              Collaborate with us and grow our data science community!
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Card.Group centered style={{ marginTop: "1vw" }}>
                {process}
              </Card.Group>
            </Grid.Column>
            <Grid.Column
              style={{
                marginLeft: "7vw",
                fontWeight: "300",
                fontSize: "2vw",
                lineHeight: "2vw",
                fontFamily: "Montserrat",
                marginTop: "2vw",
              }}
            >
              Want to stay updated on our events, recruiting, and other on-campus
              initiatives?{" "}
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
                marginBottom: "7vw" }}>
              Join our mailing list <a href="https://airtable.com/shr084vc5JtxBydJK">here!</a>
              {/* <Form success={this.state.success} style={{ marginTop: "7vw" }}>
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
              </Form> */}
            </Grid.Column>
          </Grid.Row>
          <div id="aboutFooterSpacer" style = {{height: "20vw"}}></div>
        </Grid>
        <Image 
          src={landingSquiggle2}
          style={{
            minWidth: "160vw",
            height: "50vw",
            marginTop: "-27vw",
            marginLeft: "-15vw",
            position: "absolute",
            zIndex: "2",
          }}
          ></Image>
        {/* </Segment> */}
      </div>
    );
  }
}
export default CentralText;

// what is this?? I don't know! hahaha please write comments - James
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
