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
import recruitbanner from "./landing/dssfall2021recruitment.png";
import NavBar2 from "./mobilemenu";
import rectangleSingle from "./landing/rectangleSingle.png";
import rectangleGroup from "./landing/rectangleGroup.png";
import squiggly1 from "./landing/squiggly1.png";
import squiggly2 from "./landing/squiggly2.png";
import homepageBanner from './Homepage/homepage.jpg';
import rightarrow from './Homepage/ArrowRight.png'
import stats from './Homepage/stats.png'
import gradientOne from './Homepage/homepagegradient1.png';
import gradientTwo from './Homepage/homepagegradient2.png';
import linesOne from './Homepage/linesOne.png';
import linesTwo from './Homepage/linesTwo.png';
import NavBar from './Menu.js'
import mlIcon from './Services Images/mlIcon.jpg'
import sweIcon from './Services Images/sweIcon.jpg'
import businessIcon from './Services Images/businessIcon.jpg'

import ocf from "./Backgrounds/ocf-hosted-penguin.svg";

let endpoint = "https://dssberkeley.com/";
const banner = {
  //display: "inline-block",
  position: "relative",
  textAlign: "center",
  width: "100%",
  height: "auto",
  gridColumn: "span 3",
  margin: "0",
}

//try having the bannerText take up a box worth of space or smth or try editing w/o the image first, so I don't have to manually input all these measurements
const bannerText = {
  color: "white",
  fontSize: "64px",
  fontFamily: "Montserrat", 
  fontWeight: "600",
  position: "absolute",
  top: "-7vw",
  bottom: "1em",
  right: "1em",
  left: "1em",
  background: "rgba($accent, .8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  resize: "none",

  
  //textShadow: "1px 0 0 #333333, 0 -1px 0 #333333, 0 1px 0 #333333, -1px 0 0 #333333"
}


const bannerImg = {
  width: "100%",
  height: "auto",
  padding: "0",
  gridColumn: "span 3",
}

const whiteSpaceContainer = {
  position: "relative",
  textAlign: "center",
  width: "100%",
  height: "auto",
  gridColumn: "span 3",
}

const whiteSpaceText = {
  margin: "50px 0px 20px 0px",
  position: "relative",
  color: "black",
  fontSize: "max(3vw, 28px)",
  fontWeight: "Bold",
  fontFamily: "Montserrat", 
  gridColumn: "span 3",

}
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
  color: "#000000",
  fontStyle: "normal",
  textAlign: "left",
  marginTop: "3vw",
  marginLeft: "3vw",
};
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "6vw",
  fontSize: "3vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "left",
  marginTop: "-3.5vw",
  marginLeft: "3vw",
};

const mylittletext = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "left",
  marginTop: "1vw",
  marginLeft: "3vw",
};

const link = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  lineHeight: "2vw",
  fontSize: "2vw",
  color: "#77B8B3",
  fontStyle: "italic",
  textDecoration: 'none',
  textAlign: "left",
  marginTop: "3vw",
  marginLeft: "1.5vw",
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
  marginTop: "2vw",
};

const overlaytextCustom = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
  lineHeight: "5vw",
  fontWeight: 500,
  fontSize: "5vw",
  color: "#8CD6D1",
  fontStyle: "normal",
  textAlign: "center",
  // marginLeft: "7vw",
  marginTop: "5vw",
};

const underlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "2.5vw",
  fontSize: "2.5vw",
  color: "#000000",
  fontStyle: "normal",
  textAlign: "center",
  marginTop: "3vw",
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
                  {/*Services Banner + Intro*/}
        <div>
          <figure style={banner}>
            {/**style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", margin: "-8px -8px 1.3rem -8px", gap: "5px"} */}
              <img style={bannerImg} src={homepageBanner}></img>
              {/* <NavBar {...props} /> didn't work here :() */}
          </figure>
        </div>
        <Grid divided="vertically" style={gridoffset} className="pusher">
          <Grid.Row columns={3} style={{ position: "relative" }}>
            <Grid.Column width={8}>
              <Header style={mybigtext}>DATA SCIENCE SOCIETY</Header>
              <Header as="h1" style={mymidtext}>
                AT BERKELEY
              </Header>
              <Header style={mylittletext}>Berkeley’s first undergraduate data-science focused student organization. Actively fostering a strong data science community on campus via our consulting and educational initiatives.</Header>
              <Header style={link}>
                <Link to="/about" style={link}>About us</Link>
                <Image
                style={{
                  position: "dynamic",
                  left: "1%",
                  width: "2vw",
                  marginTop: "0vw",
                }}
                src={rightarrow}
                onclick=""
                ></Image>
              </Header>
              
              <br></br>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image
                style={{
                  height: "25vw",
                  marginTop: "3vw",
                  marginLeft: "1vw",
                  position: "dynamic",
                }}
                floated="left"
                src={stats}
              ></Image>

            </Grid.Column>

            <Grid.Column width={15}>
              <Image
                style={{
                  marginTop: "1vw",
                  position: "absolute", 
                  width: "100%",
                  height: "40vw",
                }}
                src={gradientOne}
              >
              </Image>
              <Image
                style={{
                  marginTop: "1vw",
                  position: "absolute", 
                  width: "150%",
                  marginBottom: "25vw"
                }}
                src={linesOne}
                ></Image>
                <Image
                style={{
                  marginTop: "20vw",
                  position: "absolute", 
                  width: "100%",
                  height: "40vw",
                }}
                src={gradientTwo}
              >
              </Image>
              <Image
                style={{
                  marginTop: "20vw",
                  position: "absolute", 
                  width: "150%",
                }}
                src={linesTwo}
                ></Image>
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
