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
import classroom from "./Decal Images/classroom.png";
import sparkleLeft from "./Decal Images/sparkleLeft.png"
import test4 from "./Decal Images/test 4.png";
import squiggly2 from "./Decal Images/squiggly2.png";
import pen from "./Decal Images/pen.png";
import test5 from "./Decal Images/test 5.png";
import course from "./Decal Images/course.png"
import test6 from "./Decal Images/test 5.png";

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
  background: "#FFFFFF",
  border: "5px solid #8CD6D1",
  boxSizing: "border-box",
  borderRadius: "3vw",
  width: "100%",
  height: "7.5vw",
  marginTop: "-1.5vw",
  fontSize: "3.5vw",
  lineHeight: "1.5vw",
  fontWeight: "400",
  fontFamily: "Montserrat",
  color: "#000000"
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
const headerbox = {
  background: "#FFFFFF",
  border: "6px solid  #c7ebe8",
  boxSizing: "border-box",
  boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "5vw",
  height: "17vw",
  width: "70%",
  marginBottom: "5vw",
  marginTop: "-3.5vw",
  marginLeft: "10vw",
  marginRight: "10vw",
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
          <h1
           style={{
             display: "flex",
             justifyContent: "center",
             top: "20vw",
             width: "100%",
             height: "auto",
             textAlign: "center",
             color: "black",
             position: "absolute",
             fontFamily: "Montserrat",
             fontWeight: "bold",
             fontSize: "6vw",
             lineHeight: "6vw"
           }}>
             Decal
          </h1>
          
          <div>
            <Image style={{
              position: "relative",
              top: "20vw",
              left: "52vw",
              right: "50vw",
              height: "28vw",
              maxHeight: "28vw",
              width: "28vw",
              maxWidth: "28vw",
            }}
            src={classroom}></Image>
          </div>
          <div>
            <Image style={{
              left: "5vw",
              top: "3.04vw",
              position: "relative",
              height: "18vw",
              maxHeight: "18vw",
              width: "30vw",
              maxWidth: "30vw"
            }}
            src={sparkleLeft}></Image>
          </div>
          <p style={{
            color: "#000000",
            marginTop: "7vw",
            textAlign: "center",
            lineHeight: "4vw",
            fontSize: "2.95vw",
            fontFamily: "Montserrat",
            marginLeft: "20vw",
            marginRight: "20vw",
          }}>
            DeCal introduces everyone to the <br /><strong style={{color: "#8CD6D1" }}> {" "}fascinating world of data analytics.</strong>
          </p>

          <div style={{
            paddingBottom: "0",
          }}>
            <Image style={{
              position: "relative",
              left: "-22vw",
              top: "-4.5vh",
              height: "15.8vw",
              maxHeight: "15.8vw",
              width: "67vw",
              maxWidth: "67vw",
              zIndex: 0
            }}
            src={test4}></Image>
          </div>
          <div style={{
            position: "relative",
            top: "-1.26vh",
            zIndex: 1,
            marginBottom: "0px"
          }}>
            <Grid centered>
            <Grid.Row centered style={headerbox}>
              <Card.Group centered>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid none",
                    boxSizing: "border-box",
                    borderRadius: "5vw",
                    width: "10%",
                    height: "14vw",
                    fontFamily: "Montserrat",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "15.15vw",
                      marginTop: "4vw",
                      fontSize: "8vw",
                      lineHeight: "8vw",
                      color: '#8CD6D1',
                      fontWeight: "501",
                    }}
                  >
                    6
                  </div>
                </div>
                <div
                  style={{
                    background: "#FFFFFF",
                    boxSizing: "border-box",
                    width: "20%",
                    height: "14vw",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "22vw",
                      fontSize: "3vw",
                      lineHeight: "4vw",
                      fontWeight: "21vw",
                      fontFamily: "Montserrat",
                      marginTop: "4vw",
                      color: '#8CD6D1',
                    }}
                  >
                    <p>Semesters <br/>Completed</p>
                  </div>
                </div>
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid none",
                    boxSizing: "border-box",
                    borderRadius: "5vw",
                    width: "10%",
                    height: "14vw",
                    fontFamily: "Montserrat",
                    margintop: "10vw"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "56.36vw",
                      marginTop: "4vw",
                      fontSize: "8vw",
                      lineHeight: "8vw",
                      color: '#8CD6D1',
                      fontWeight: "501",
                    }}
                  >
                    400+
                  </div>
                </div>
                <div
                  style={{
                    background: "#FFFFFF",
                    boxSizing: "border-box",
                    width: "20%",
                    height: "14vw",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "80vw",
                      fontSize: "3vw",
                      lineHeight: "4vw",
                      fontWeight: "21vw",
                      fontFamily: "Montserrat",
                      marginTop: "4vw",
                      color: '#8CD6D1',
                    }}
                  >
                    <p>Students <br/>Taught</p>
                  </div>
                </div>
              </Card.Group>
            </Grid.Row>
          </Grid>
        </div>
        <div>
            <Image style={{
              position: "absolute",
              left: "80vw",
              height: "29.07vh",
              maxHeight: "29.07vw",
              width: "53.55vw",
              maxWidth: "53.55vw",
              zIndex: 0,
              marginTop: "-6.5vh"
            }}
            src={squiggly2}></Image>
        </div>
        <p style={{
            color: "#000000",
            marginTop: "7vw",
            textAlign: "center",
            lineHeight: "4vw",
            fontSize: "2.95vw",
            fontFamily: "Montserrat",
            marginLeft: "20vw",
            marginRight: "20vw",
          }}>
            There are <strong style={{color: "#8CD6D1" }}> {" "}no prerequisites,</strong> and people of <strong style={{color: "#8CD6D1" }}> {" "}ALL <br/> majors, backgrounds</strong>, and <strong style={{color: "#8CD6D1" }}> {" "}interests</strong> are actively <br/>encouraged to apply!
          </p>
          <div style={{
            paddingBottom: "0",
          }}>
            <Image style={{
              position: "relative",
              left: "9vw",
              top: "-10vh",
              height: "26vw",
              width: "26vw",
              zIndex: 0
            }}
            src={pen}></Image>
          </div>
          <div>
            <Image style={{
              position: "relative",
              top: "-14vh",
              right: "-73%",
              height: "9.56vh",
              width: "37.95vw",
              zIndex: 0
            }}
            src={test5}></Image>
          </div>
        <div style={{
          position: "relative",
          marginTop: "-16vh"
        }}>
          <Grid centered>
            <Grid.Row centered>
              <div style={{
                width: "100%",
                marginTop: "-1vh"
              }}>
                <div style={{
                  marginBottom: "7vw"
                }}>
                  <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                    textAlign: "center",
                    color: "black",
                    position: "absolute",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "6vw",
                    lineHeight: "6vw"
                  }}>
                    The Course
                  </h1>
                </div>
                <div style={{
                }}>
                  <Image style={{
                    justifyContent: "center",
                    position: "relative",
                    marginLeft: "47vw",
                    marginBottom: "2vw",
                    width: "40vw",
                    height: "1.36vh"
                  }}
                  src={course}>
                  </Image>
                </div>
                <div>
                  <Image
                    src={datalab}
                    style={{
                      position: "relative",
                      marginLeft: "45vw",
                      marginBottom: "-2vw",
                      height: "14vw",
                      width: "39vw",
                    }}
                  ></Image>
                </div>
              </div>
            </Grid.Row>
            <Grid.Row
              style={{
                textAlign: "center",
                lineHeight: "4vw",
                fontSize: "2.95vw",
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
            <Grid.Row style={{ marginBottom: "19vw" }}>
            <div>
              <div>
                  <Image style={{
                    position: "absolute",
                    left: "-15vw",
                    width: "86vw",
                    height: "16vh",
                    transform: "rotate(18deg)",
                    transform: "scaleX(-1)"
                  }}
                  src={test6}>
                  </Image>
                </div>
                <div>
                  <Link to="/decallearn">
                    <Button style={button}>Course Page</Button>
                  </Link>
                </div>
              </div>
            </Grid.Row>

            <div style={{
                width: "100%",
                marginTop: "-1vh"
              }}>
                <div style={{
                  marginBottom: "7vw"
                }}>
                  <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                    textAlign: "center",
                    color: "black",
                    position: "absolute",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "6vw",
                    lineHeight: "6vw"
                  }}>
                    Decal Directors
                  </h1>
                </div>
                <div style={{
                }}>
                  <Image style={{
                    position: "relative",
                    marginLeft: "40vw",
                    marginBottom: "2vw",
                    width: "53vw",
                    height: "1.36vh"
                  }}
                  src={course}>
                  </Image>
                </div>
              </div>
            <Grid.Row style={{ marginTop: "4vw" }}>
              <Card.Group centered>
                <Card style={cardstyle}>
                  {" "}
                  <Image style={imagestyle} src={kate} />
                  <Card.Content>
                    <Card.Header style={textstyle}>Kate Miller</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={roleStyle}>Director of DeCal</span>
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
                    <Card.Header style={textstyle}>Uma K</Card.Header>
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={roleStyle}>Director of DeCal</span>
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
                    <Card.Meta style={{ marginTop: "1vw" }}>
                      <span style={roleStyle}>Director of DeCal</span>
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
            <div>
              <Image style={{
                position: "absolute",
                left: "88vw",
                height: "41vh",
                maxHeight: "41vw",
                width: "50vw",
                maxWidth: "50vw",
                zIndex: 0,
                marginTop: "-20vw",
                transform: "scaleY(-1)"
              }}
              src={squiggly2}></Image>
            </div>
            <div style={{
                width: "100%",
                marginTop: "-1vh"
              }}>
                <div style={{
                  marginTop: "20vw",
                }}>
                  <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                    textAlign: "center",
                    color: "black",
                    position: "absolute",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "6vw",
                    lineHeight: "6vw",
                    color: "#8CD6D1"
                  }}>
                    Our Sponsors
                  </h1>
                </div>
              </div>
            <Grid.Row>
              <Image.Group
                style={{
                  margin: "auto",
                  marginBottom: "5vw",
                  marginTop: "10vw",
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
                marginBottom: "1vw",
                marginTop: "4vw",
                lineHeight: "2vw",
              }}
            ></Grid.Row>
          </Grid>
        </div>
        <div style={{
          marginTop: "-12vw",
          width: "100%",
        }}>
          <p style={{
            alignText: "center",
            marginBottom: "2vw",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "2vw",
            lineHeight: "29px",
            textAlign: "center",
            color: "#000000"
          }}>DataCamp offers a free 6 month premium membership to participating students!</p>
        </div>
        <div style={{
          height: "30vh"
        }}></div>
      </div>
    );
  }
}
export default Decal;
