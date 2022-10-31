import React, { Component } from "react";
import axios from "axios";
import {
  Image,
  Grid,
  Card,
  Header,
} from "semantic-ui-react";
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

const headerbox = {
  background: "#FFFFFF",
  border: "6px solid  #c7ebe8",
  // borderStyle: 'groove',
  boxSizing: "border-box",
  // boxshadow: "120px 80px 40px 20px #0ff",
  // boxShadow: "5px 4px 10px 1px rgba(0, 0, 0, 0.1)",
  boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "5vw",
  height: "17vw",
  width: "70%",
  marginBottom: "5vw",
  marginTop: "-3.5vw",
  marginLeft: "10vw",
  marginRight: "10vw",
  // position: "absolute",
};

const overlayboxes = {
  background: "#ffffff",
  border: ".4vw solid #FFC54A",
  boxSizing: "border-box",
  //boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "1.5vw",
  height: "37.5vw",
  width: "37.5vw",
  marginBottom: "4vw",
  marginTop: "4vw",
  marginLeft: "5vw",
  marginRight: "5vw",
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
const cardHeader = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "3vw",
  fontSize: "2.75vw",
  color: "#000000",
  textAlign: "center",

  marginTop: "1.5vw",
};

const cardUnderlineStyle = {
  height: "auto",
  maxHeight: "28vw",
  width: "auto",
  maxWidth: "28vw",
  margin: "1vw auto",
};

const cardImageSyle = {
  width: "15vw",
  margin: "1vw auto",
  marginTop: '2vw',
  backgroundColor: 'transparent',
}

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
  fontSize: "1.5vw",
  lineHeight: "2vw",
  textAlign: "center",
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

class Resources extends Component {
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
              </div>
            <div style={{ margin: "auto" }}></div>
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
export default Resources;
