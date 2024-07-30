import React, { Component } from "react";
import { Image, Grid, Card, Icon } from "semantic-ui-react";

const gridoffset = {
  textAlign: "center",
  fontFamily: "Lato",
};
const cardstyle = {
  width: "28vw",
  maxHeight: "56vw",
  marginBottom: "1vw",
  marginleft: "2vw",
};
const imagestyle = {
  height: "28vw",
  maxHeight: "28vw",
  objectFit: "cover",
};
const textstyle = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: "3vw",
  lineHeight: "3vw",
  color: "#8CD6D1",
  marginTop: ".5vw",
};
const roleStyle = {
  fontFamily: "Lato",
  fontWeight: 300,
  fontSize: "2vw",
  lineHeight: "2vw",
  color: "#000000",
};
const aboutlinks = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "2vw",
  lineHeight: "3vw",
  height: "0vw",
  color: "black",
  whiteSpace: "nowrap",
  position: "absolute",
  top: "20%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
};
const aboutlinks2 = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "2.5vw",
  color: "black",
  marginLeft: "auto",
  left: "0vw",
  textAlign: "center",
  position: "relative",
};
const aboutlinks3 = {
  fontFamily: "Lato",
  fontWeight: "600",
  fontSize: "2vw",
  lineHeight: "3vw",
  width: "20vw",
  height: "3vw",
  color: "black",
  position: "absolute",
  top: "20%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
};
const aboutstats = {
  fontFamily: "Lato",
  fontWeight: "bold",
  fontSize: "6vw",
  color: "#FFC54A",
  textAlign: "center",
  margin: "auto",
  width: "100%",
  flexGrow: "1",
  position: "relative",
};
const aboutstats2 = {
  fontFamily: "Lato",
  fontWeight: "bold",
  minWidth: "15%",
  margin: "auto",
  color: "#FFC54A",
  textAlign: "center",
  position: "relative",
  flexGrow: "1",
};
const aboutstats3 = {
  fontFamily: "Lato",
  fontWeight: "normal",
  fontSize: "2.2vw",
  width: "100%",
  color: "black",
  textAlign: "center",
  flexGrow: "1",
};
const leadershipCards = [
  <Card style={cardstyle}>
    <Image src={"/Leadership/Sid.jpg"} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Siddharth Ramshankar</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:siddharthr@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/siddharth-ramshankar1/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    <Image src={"/Leadership/James.jpg"} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>James Geronimo</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Internal Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:jegeronimo@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/james-geronimo/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image src={"/Leadership/Michael.jpg"} style={imagestyle} />
    <Card.Content>
      <Card.Header style={textstyle}>Michael Florip</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>External Vice President</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:michaelflorip@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/michael-florip/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Austin.jpg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Austin Ardisaputra</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Technology</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:ardisaputra@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/aardisaputra/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Wilson.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Wilson Fung</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Marketing</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:fungwilson3@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/wilsonfung110403/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Joseph.jpg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Joseph Zhai</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:josephzhai@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/josephzhai/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Shreeya.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Shreeya Sethuraman</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Culture</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:shreeya.sethuraman@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/shreeya-sethuraman-0266751b0/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Fiona.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Fiona Chang</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>VP of Finance</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:fionac@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/fionacch/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Madeleine.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Madeleine Larson</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Consulting</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:madeleinelarson@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/madeleinelarson/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Nathan.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Nathan Kuo</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Social Good</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:nathanpkuo@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/nathanpkuo">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Bing.png"} />
    <Card.Content>
      <Card.Header style={textstyle}>Bing Concepcion</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:brandon_concepcion@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/brandon-concepcion-a161b4248/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Lynn.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Lynn Chien</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:lchien8@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/lynn-chien-772747113/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
  <Card style={cardstyle}>
    {" "}
    <Image style={imagestyle} src={"/Leadership/Ryan.jpeg"} />
    <Card.Content>
      <Card.Header style={textstyle}>Ryan Stevenson</Card.Header>
      <Card.Meta style={{ marginTop: "1vw" }}>
        <span style={roleStyle}>Director of Acadev</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:ryanstevenson@berkeley.edu">
        <Icon size="large" name="mail" />
      </a>
      <a href="https://www.linkedin.com/in/ryan-stevenson-315926252/">
        <Icon size="large" name="linkedin" />
      </a>
    </Card.Content>
  </Card>,
];

class About extends Component {
  render() {
    return (
      <div
        class="wrapper"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #D2F2F0 11%, #FFFFFF 15%, #FFFFFF 30%, #CCF0E5 50%, #DFF7F2 60%, #FFFFFF 80%)",
          width: "133vw",
        }}
      >
        <div>
          <Image
            style={{
              position: "relative",
              top: "0vw",
              left: "0vw",
              right: "30vw",
              bottom: "15vw",
              width: "100%",
              maxWidth: "100%",
            }}
            src={"/Group Pics/Team.png"}
          ></Image>
        </div>
        <h1
          style={{
            top: "15vw",
            width: "100%",
            height: "auto",
            textAlign: "center",
            color: "white",
            margin: "auto",
            position: "absolute",
            fontFamily: "Lato",
            fontWeight: "bold",
            fontSize: "6vw",
            lineHeight: "6vw",
          }}
        >
          ABOUT US
        </h1>
        <Grid centered style={gridoffset}>
          {/* onClick scroll handlers are redundant, consider removing */}
          <Grid.Row
            centered
            width={16}
            columns={5}
            style={{
              backgroundColor: "#D2F2F0",
              width: "100%",
              height: "7vw",
              position: "relative",
            }}
          >
            <Grid.Column width={3} style={aboutlinks2}>
              <div style={aboutlinks}>
                <a
                  href="#who"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  Who We Are
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div style={aboutlinks}>
                <a
                  href="#mission"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  Mission & Values
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div style={aboutlinks}>
                <a
                  href="#committees"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  Our Committees
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div style={aboutlinks}>
                <a
                  href="#team"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  Executive Team
                </a>
              </div>
            </Grid.Column>
            <Grid.Column width={3} style={aboutlinks2}>
              <div style={aboutlinks3}>
                <a
                  href="#sponsors"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  Sponsors & Collaborators
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
          <div id="who"></div>
          <Grid.Row centered columns={1} style={{ marginBottom: "7vw" }}>
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginBottom: "-25vw",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                top: "22vw",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2.5vw",
                lineHeight: "6vw",
                color: "black",
                margin: "auto",
                width: "100vw",
              }}
            >
              <div
                style={{
                  height: "20vw",
                  width: "100vw",
                }}
              >
                <img
                  src={"Shapes/LinesOne.png"}
                  style={{
                    position: "absolute",
                    left: "-40vw",
                    width: "190vw",
                    height: "15vw",
                  }}
                  alt="Line Pattern"
                ></img>
              </div>
              <span id="whoWeAre">Who We Are</span>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                margin: "auto",
                width: "89vw",
                top: "22vw",
                zIndex: "4",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "2.1vw",
                lineHeight: "2.5vw",
                color: "black",
                textAlign: "justify",
              }}
            >
              Data Science Society is UC Berkeley's first student-run,
              not-for-profit organization focused on data science and its
              interdisciplinary applications. Since our founding in 2016, we
              have united students from a wide range of disciplines behind our
              shared passion for all things data.
            </div>
          </Grid.Row>
          {/* <Grid entered style={gridoffset}> */}
          <Grid.Row
            width={4}
            columns={4}
            style={{
              // backgroundColor: "#8CD6D1",
              marginTop: "13vw",
              position: "relative",
              flexDirection: "row",
              maxWidth: "80%",
              padding: "0",
              height: "22vw",
            }}
          >
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>42</div>
              <div style={aboutstats3}>Completed Client Projects</div>
            </Grid.Column>
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>68</div>
              <div style={aboutstats3}>Past Workshops and Events Hosted</div>
            </Grid.Column>
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>300+</div>
              <div style={aboutstats3}>Datathon Past Participants</div>
            </Grid.Column>
            <Grid.Column width={1} style={aboutstats2}>
              <div style={aboutstats}>800+</div>
              <div style={aboutstats3}>Past Members and DeCal Students</div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2.5vw",
                lineHeight: "6vw",
                color: "black",
                textAlign: "center",
              }}
            >
              <span>Mission and Values</span>
            </div>
            <div id="mission"></div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                margin: "auto",
                width: "92vw",
                zIndex: "4",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "2.1vw",
                lineHeight: "2.5vw",
                color: "black",
                textAlign: "justify",
              }}
            >
              Our mission is to foster a strong data science community on campus
              by advocating for educational workshops, professional events, and
              corporate projects. Our educational and consulting initiatives
              have impacted thousands of students in a variety of majors across
              campus and given them the technical and soft skills needed to
              thrive in an increasingly data-centric world.`
            </div>
          </Grid.Row>
          <div
            id="committees"
            style={{
              marginTop: "3vw",
            }}
          ></div>
          <Grid.Row centered columns={1}>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2.5vw",
                color: "black",
                marginBottom: "3vw",
                textAlign: "center",
              }}
            >
              <span>
                <i>How We Achieve This Mission: Our Committees</i>
              </span>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2vw",
                lineHeight: "6vw",
                color: "black",
                textAlign: "center",
              }}
            >
              <span id="academicDevelopment">
                Academic Development Committee
              </span>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                margin: "auto",
                width: "87vw",
                zIndex: "4",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "2.1vw",
                lineHeight: "2.5vw",
                color: "black",
                marginBottom: "5vw",
                textAlign: "justify",
              }}
            >
              The academic development committee directs our decal program open
              to all skill levels and students and hosts a variety of
              educational workshops for the greater campus community.
              <br></br>
              <br></br>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <a
                  href="./joinus"
                  style={{
                    color: "#77B8B3",
                    fontStyle: "italic",
                    textDecoration: "none",
                  }}
                >
                  Join Acadev →
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2vw",
                lineHeight: "6vw",
                color: "black",
                textAlign: "center",
              }}
            >
              <span id="socialGood">Social Good Committee</span>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                margin: "auto",
                width: "87vw",
                zIndex: "4",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "2.1vw",
                lineHeight: "2.5vw",
                color: "black",
                marginBottom: "5vw",
                textAlign: "justify",
              }}
            >
              We are passionate about contributing to tech for good by
              identifying data-driven insights and actionable solutions for the
              missions of non-profit organizations. The Social Good committee
              acts as a consulting committee for nonprofits with social good
              initiatives.
              <br></br>
              <br></br>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <a
                  href="./joinus"
                  style={{
                    color: "#77B8B3",
                    fontStyle: "italic",
                    textDecoration: "none",
                  }}
                >
                  Join Social Good →
                </a>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2vw",
                lineHeight: "6vw",
                color: "black",
                textAlign: "center",
              }}
            >
              <span id="consulting">Consulting Committee</span>
            </div>
            <div
              style={{
                position: "relative",
                textShadow: "none",
                margin: "auto",
                width: "87vw",
                zIndex: "4",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "2.1vw",
                lineHeight: "2.5vw",
                color: "black",
                marginBottom: "10vw",
                textAlign: "justify",
              }}
            >
              We are passionate about working with corporate clients to provide
              data-driven insights and actionable solutions through advanced
              analytical methods.
              <br></br>
              <br></br>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <a
                  href="./joinus"
                  style={{
                    color: "#77B8B3",
                    fontStyle: "italic",
                    textDecoration: "none",
                  }}
                >
                  Join Consulting →
                </a>
              </div>
            </div>
          </Grid.Row>
          <Grid.Row centered>
            {/* {CustomTitle({ title: "Our Executive Team", id: "team" })} */}
            <div
              id="team"
              style={{
                position: "relative",
                textShadow: "none",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2.5vw",
                lineHeight: "6vw",
                color: "black",
                marginBottom: "3vw",
                textAlign: "center",
                // bad practice but I have no idea where the misalignment comes from
                paddingLeft: "3vw",
              }}
            >
              <span>Meet Our Executive Team</span>
            </div>
            <Card.Group
              centered
              style={{
                marginLeft: "15px", // in px for slight differences in mobile and desktop rendering
              }}
            >
              {leadershipCards}
            </Card.Group>
            ``
          </Grid.Row>
          <div id="sponsors"></div>
          <Grid.Row style={{ marginTop: "7vw", marginLeft: "17vw" }}>
            <div
              style={{
                position: "absolute",
                textShadow: "none",
                width: "45vw",
                top: "0vw",
                left: "29vw",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "3.5vw",
                lineHeight: "4vw",
                color: "black",
                marginBottom: "10vw",
                textAlign: "center",
              }}
            >
              <span>Sponsors</span>
            </div>
            <div>
              <Image
                src={"/Shapes/Rectangle.png"}
                style={{
                  position: "relative",
                  top: "4vw",
                  left: "31vw",
                  height: "0.75vw",
                  maxHeight: "1.5vw",
                  width: "40vw",
                  marginBottom: "10vw",
                  // dated design, adjusting opacity instead of deleting to maintain space
                  opacity: "0",
                }}
              ></Image>
            </div>
          </Grid.Row>
          <Grid.Row>
            <Image.Group size={"medium"}>
              <Image
                src={"/Partners/Deepnote.png"}
                style={{
                  top: "-8vw",
                  // marginLeft: "-3px",
                  width: "25vw",
                  // marginTop: "3vw"
                }}
              ></Image>
              <Image
                src={"/Partners/Decal.png"}
                style={{
                  top: "-8vw",
                  // marginLeft: "5vw",
                  width: "20vw",
                  // marginTop: "-7vw",
                }}
              ></Image>
            </Image.Group>
          </Grid.Row>
          {/* {CustomTitle({ title: "Our Partners", id: "partners" })} */}
          <Grid.Row centered>
            <div
              style={{
                textShadow: "none",
                width: "60vw",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "3.5vw",
                lineHeight: "4vw",
                color: "black",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <span>Current and Past Collaborators</span>
            </div>
            <div>
              <Image
                src={"/Shapes/Rectangle.png"}
                style={{
                  position: "relative",
                  top: "15vw",
                  left: "50vw",
                  height: "0.75vw",
                  maxHeight: "1.5vw",
                  width: "40vw",
                  // dated design, adjusting opacity instead of deleting to maintain space
                  opacity: "0",
                }}
              ></Image>
            </div>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group
              size={"medium"}
              style={{ marginTop: "3vw", marginBottom: "0vw" }}
            >
              <Image
                style={{ width: "15vw" }}
                src={"/Partners/CDSS.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={"/Partners/Data8.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "25vw" }}
                src={"/Partners/PCS.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={"/Partners/CalActuarial.png"}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group size={"medium"}>
              <Image
                style={{ width: "15vw" }}
                src={"/Partners/EAB.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={"/Partners/Blueprint.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "25vw" }}
                src={"/Partners/UEA.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "15vw" }}
                src={"/Partners/BIDS.png"}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group size={"medium"}>
              <Image
                style={{ width: "15vw" }}
                src={"/Partners/Haas-DS.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "18vw" }}
                src={"/Partners/SAAS.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "18vw" }}
                src={"/Partners/HBSA.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "20vw" }}
                src={"/Partners/Ascend.png"}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <Image.Group size={"medium"}>
              <Image
                style={{ width: "15vw" }}
                src={"/Partners/PBL.png"}
              ></Image>
              <Image
                style={{ marginLeft: "7vw", width: "20vw" }}
                src={"/Partners/MLAB.png"}
              ></Image>
              <Image
                style={{ marginLeft: "6vw", width: "18vw" }}
                src={"/Partners/ecode.png"}
              ></Image>
              <Image
                style={{ left: "3vw", marginLeft: "2vw", width: "25vw" }}
                src={"/Partners/NIB.png"}
              ></Image>
            </Image.Group>
          </Grid.Row>
          <Grid.Row centered>
            <div
              style={{
                position: "absolute",
                textShadow: "none",
                width: "45vw",
                top: "0vw",
                left: "46vw",
                zIndex: "3",
                fontFamily: "Lato",
                fontStyle: "43vw",
                fontWeight: "bold",
                fontSize: "2.5vw",
                lineHeight: "4vw",
                color: "black",
                marginBottom: "10vw",
                marginTop: "10vw",
                textAlign: "center",
              }}
            ></div>
          </Grid.Row>
        </Grid>
        <div
          style={{
            height: "35vw",
          }}
        >
          <img
            src={"Shapes/LinesTwo.png"}
            style={{
              position: "absolute",
              width: "180vw",
              left: "-10vw",
              marginTop: "0vw",
              zIndex: "2",
              height: "40vw",
            }}
          ></img>
        </div>
      </div>
    );
  }
}

export default About;
