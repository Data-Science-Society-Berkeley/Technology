import React, { Component } from "react";
import {
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

// image/asset import
import datathon_mascot from "./Datathon/datathon_mascot.png";
import down_arrow from "./Datathon/down_arrow.png";
import register_button from "./Datathon/register_button.png";

// countdown timer script stolen from w3schools
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  const countDownDate = new Date("Nov 11, 2023 00:00:00").getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownTimer").innerHTML = "00d 00h 00m 00s";
  }
}, 1000);

const title = {

}
const h1 = {
  fontFamily: "Montserrat, sans-serif",
}
const wrapper = {
  width: "100%",
  maxWidth: "100%",
  background: "background: rgb(142,73,73)",
  background: "linear-gradient(170deg, rgba(142,73,73,1) 0%, rgba(18,101,90,1) 37%, rgba(161,177,109,1) 100%)",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "2.2em",
  color: "#eeeeee",
  margin: "0",
  padding: "0",
  textAlign: "center",
}
const header = {
  width: "100%",
  background: "linear-gradient(145deg, rgba(142,73,73,1) 0%, rgba(18,101,90,1) 37%, rgba(161,177,109,1) 100%)",
  margin: "0",
  padding: "0",
  textAlign: "center",
  fontSize: "3em",
  fontWeight: "bold",
}
const blurbContainer = {
  width: "100%",
  margin: "0 auto",
  textAlign: "left",
  padding: "0% 15% 0% 15%",
}
const intro = {
  width: "100%",
  backgroundColor: "#5f5f5f",
  padding: "5% 20% 5% 20%",
  fontSize: "1em",
  textAlign: "left",
}
const subtitle = {
  fontSize: "2em",
  fontWeight: "bold",
  margin: "0",
  padding: "0 0 1vw 0",
}
const valueCard = {
  display: "inline-block",
  width: "40vh",
  maxWidth: "40vw",
  height: "40vh",
  maxHeight: "40vw",
  margin: "20px",
  padding: "3vh",
  borderRadius: "20px",
  backgroundColor: "#44444499",
  overflow: "hidden",
  textAlign: "center",
}
const statCard = {
  display: "inline-block",
  width: "25%",
  maxWidth: "25%",
  height: "40vh",
  maxHeight: "40vw",
  margin: "0",
  padding: "0",
}
const statCardWide = {
  display: "inline-block",
  width: "50%",
  maxWidth: "50%",
  height: "40vh",
  maxHeight: "40vw",
  textAlign: "right",
}
const statCardInner = {
  width: "90%",
  height: "90%",
  fontSize: "1.5em",
  fontWeight: "bold",
  backgroundColor: "#ededed",
  color: "#222222",
  borderRadius: "2vh",
  padding: "3vw 0 0 2vw",
  boxShadow: "0 0 10px #444444",
  overflow: "hidden",
}
const statCardInnerWide = {
  width: "95%",
  height: "95%",
  fontSize: "1.5em",
  fontWeight: "bold",
  backgroundColor: "#ededed",
  color: "#222222",
  borderRadius: "2vh",
  padding: "3vw 2vw 0 0",
  boxShadow: "20px 20px 20px #00000044",
  overflow: "hidden",
}
const faqQ = {
  fontSize: "1.2em",
  padding: "0 0 0vw 0",
}
const faqA = {
  fontSize: "1em",
  padding: "0 0 1vw 0",
  marginLeft: "2vw",
}
const countdownTimer = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0",
  textAlign: "center",
  fontSize: "4em",
}

const spacer = {
  width: "100%",
  height: "70px",
  margin: "0 auto",
  padding: "0",
  textAlign: "center",
}
const bigSpacer = {
  width: "100%",
  height: "500px",
  margin: "0 auto",
  padding: "0",
  textAlign: "center",
  fontSize: "30px",
}

let endpoint = "http://localhost:8080";
class Datathon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.join = this.join.bind(this);
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
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
      <div class="wrapper" style={{...wrapper}}>

        <div class="header" style={{...header}}>
          <div style={{
            maxWidth: "60%",
            width: "60%",
            fontSize: "6vw",
            margin: "0 auto",
            padding: "7% 0% 0 0",
            display: "inline-block",
          }}>
            <p>5th Annual
              <br></br>
              Datathon for
              <br></br>
              Social Good
            </p>
            <p style={{
              fontSize: "0.3em",
            }}>
              November 11th-12th, 2023 &mdash; UC Berkeley Corey Hall
              <br></br>
              Co-hosted by DSS, BDAB, SAAS, and CSUA
            </p>
            <div class="registerButton" style={{
              margin: "3vw 0 0 0",
            }}>
              <Link style={{
                color: "#222222",
                fontSize: "0.4em",
                fontWeight: "bold",
                textDecoration: "none",
              }}>
                <div style={{
                  backgroundColor: "#eeeeee",
                  maxWidth: "40vw",
                  width: "40vw",
                  height: "5vw",
                  margin: "0 auto",
                  borderRadius: "4vw",
                  padding: "0.7vw 0 0 0",
                }}>
                  Register Now
                </div>
              </Link>
            </div>
          </div>
          <div style={{
            maxWidth: "40%",
            margin: "0 auto",
            padding: "7% 5% 0 0",
            display: "inline-block",
          }}>
            <Image src={datathon_mascot} style={{
              maxWidth: "40vw",
              paddingBottom: "0%",
            }}></Image>
          </div>
          <div style={{
            width: "100%",
            maxWidth: "100%",
            margin: "10vw auto 0 auto",
            padding: "0",
            position: "relative",
          }}>
            <Image src={down_arrow} style={{
              maxWidth: "5vw",
              margin: "0 auto",
              opacity: "0.3",
            }}></Image>
          </div>
        </div>

        <div class="intro" style={{...intro}}>
          <p>
            <i>
              From November 11th to 12th, 2023, join us on the UC Berkeley campus for an 
              inspiring and collaborative weekend. Students from diverse backgrounds and 
              disciplines will come together for 24 hours to tackle real-world challenges
              involving data. 
              <br></br>
              The Datathon is not just a competition &mdash; it's 
              an opportunity to be a part of something bigger, to make a tangible impact 
              in relevant critical areas.
            </i>
          </p>
        </div>

        <div class="blurbContainer" style={{...blurbContainer}}>
          <div class="spacer" style={{...spacer}}></div>

          <div class="datathonValues">
            <p style={{...subtitle}}>Mission and Values</p>
            <p style={{textAlign: "left"}}>
              We aim to guide students in challenging themselves and gaining a deeper 
              understanding of global development through data. We hope to establish a 
              Datathon where both beginner and experienced hackers can apply data science 
              techniques to solve real-world problems and will contribute to the field 
              of data science. Our values include:
            </p>
            <div class="spacer" style={{...spacer}}></div>

            <div>
              <div class="valueCards" style={{
                maxWidth: "100%",
                textAlign: "center",
              }}>
                <div class="valueCard" style={{...valueCard}}>
                  👋🏽<i>Accessibility</i>
                  <br></br>
                  We are dedicated towards public service and the 
                  education of our community.
                </div>
                <div class="valueCard" style={{...valueCard}}>
                  🌎<i>Diversity</i>
                  <br></br>
                  We believe that diversity in background and in thought 
                  is a conduit of understanding.
                </div>
                <div class="valueCard" style={{...valueCard}}>
                  🤝<i>Collaboration</i>
                  <br></br>
                  We work together to serve our community strive to 
                  create meaningful impact through group-led efforts. 
                </div>
                <div class="valueCard" style={{...valueCard}}>
                  🧠<i>Integrity</i>
                  <br></br>
                  We hold each other accountable and encourage others to 
                  speak to their experiences and values.
                </div>
              </div>
            </div>
          </div>

          <div class="spacer" style={{...spacer}}></div>

          <div class="stats" style={{
            textAlign: "center",
          }}>
            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "3em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>4</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.7em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Past Datathons</p>
              </div>
            </div>
            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "3em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>200+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Attendees</p>
              </div>
            </div>
            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "3em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>60+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Projects</p>
              </div>
            </div>

            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "3em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>20+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Companies</p>
              </div>
            </div>
{/*
            <div class="statCard" style={{...statCard}}>
              <div class="statCardInner" style={{...statCardInner}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>60+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>Projects</p>
              </div>
            </div>
            <div class="statCard" style={{...statCard}}>
              <div class="statCardInner" style={{...statCardInner}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>50+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>Mentors</p>
              </div>
            </div>
            <div class="statCard" style={{...statCard}}>
              <div class="statCardInner" style={{...statCardInner}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>20+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>Companies</p>
              </div>
            </div>
            <div class="statCard" style={{...statCard}}>
              <div class="statCardInner" style={{...statCardInner}}>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>20+</p>
                <p style={{
                  fontFamily: "Impact, sans-serif",
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                  lineHeight: "1.2em",
                }}>Workshops</p>
              </div>
            </div> */}
          
            </div>
          <div class="spacer" style={{...spacer}}>

          </div>

          <div class="theme">
            <p style={{...subtitle}}>This year's theme is...</p>
            <p style={{
              fontSize: "2em",
            }}><i>Healthcare and Public Health</i></p>
            <p>
              As we navigate a rapidly changing world, the significance of public 
              well-being has never been more profound.
              With the advent of big data and cutting-edge technology, there is a unique 
              opportunity to address pressing issues that affect individuals and 
              communities worldwide. From improving patient care to enhancing disease 
              surveillance and healthcare access, the possibilities are endless. This 
              year's Datathon invites you to explore the vast landscape of healthcare 
              and public health, using data as the compass for change.
            </p>
          </div>

          <div class="spacer" style={{...spacer}}></div>

          <div class="faq">
            <p style={{...subtitle}}>FAQ</p>
            <div>
              <p style={{...faqQ}}>
                <i>What is a Datathon?</i>
              </p>
              <p style={{...faqA}}>
              A Datathon is a data-focused hackathon where participants use their 
              creativity and data science skills to build, test, and explore 
              solutions using data.
              </p>

              <p style={{...faqQ}}>
                <i>Do I need experience to attend?</i>
              </p>
              <p style={{...faqA}}>
                Not at all! Our Datathon provides different dataset tracks to 
                accommodate varying experience levels. Whether you're a beginner 
                or an experienced data scientist, there's a place for you to 
                participate and learn.
              </p>

              <p style={{...faqQ}}>
                <i>Is this event limited to UC Berkeley undergraduate students?</i>
              </p>
              <p style={{...faqA}}>
                Nope! The Datathon is open to anyone and everyone who is interested 
                in participating. We welcome participants from diverse backgrounds 
                and institutions.
              </p>

              <p style={{...faqQ}}>
                <i>Do I have to come with a team?</i>
              </p>
              <p style={{...faqA}}>
                No, you don't have to come with a team. While teamwork is strongly
                encouraged, you can sign up as an individual. You may also try to 
                join a team before the event kickoff through our Slack and other resources.
              </p>

              <p style={{...faqQ}}>
                <i>What resources are available at the Datathon?</i>
              </p>
              <p style={{...faqA}}>
                We will offer a variety of resources to enhance your experience, including
                workshops, tech talks, and access to industry mentors. Our goal is to
                provide you with valuable guidance and knowledge to help you succeed
                in the Datathon.
              </p>

              <p style={{...faqQ}}>
                <i>How are projects judged at the Datathon?</i>
              </p>
              <p style={{...faqA}}>
                Projects are typically evaluated based on criteria such as creativity,
                technical innovation, impact, and presentation quality. Our judges, who are
                experts in the field, assess the projects and provide feedback based on a rubric.
              </p>

            </div>
          </div>

          <div class="spacer" style={{...spacer}}></div>

          {/*
          <div class="speakers">
            <h2>Speakers</h2>
            <p>
              This year's Datathon will feature speakers from ______.
            </p>
          </div>
          */}

          {/*
          <div class="faq">
            <h2>FAQ</h2>
          </div>
          */}
          
          {/*
          <div class="sponsors">
            <p style={{...subtitle}}>Sponsors</p>
            <p>
              This year's Datathon is sponsored by SingleStory.
            </p>
          </div>
          */}

          <div class="spacer" style={{...spacer}}></div>

          <div class="countdown">
            <p style={{
              textAlign: "center",
              ...subtitle}}>Ready to jump in?</p>
            <p style={{textAlign: "center"}}>Kickoff in:</p>
            {
              //Stolen from w3schools
              //Display the countdown timer in an element
            }
            <p id="countdownTimer" style={{...countdownTimer}}></p>
          </div>

          <div class="bigSpacer" style={{...bigSpacer}}></div>

        </div>

      </div>
    );
  }
}
export default Datathon;