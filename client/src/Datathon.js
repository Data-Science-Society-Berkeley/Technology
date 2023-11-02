import React, { Component } from "react";
import {
  Image, SegmentInline,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

// image/asset import
import datathon_mascot from "./Datathon/datathon_mascot.png";
import down_arrow from "./Datathon/down_arrow.png";
import dss_logo from "./Backgrounds/DSS-logo-white.png";
import bdab_logo from "./Datathon/bdab_logo.png";
import saas_logo from "./Datathon/saas_logo.png";
import csua_logo from "./Datathon/csua_logo.png";
import caldata_logo from "./Datathon/caldata_logo.png";
import clight_technologies_logo from "./Datathon/clight_technologies_logo.png";
import doordash_logo from "./Datathon/doordash_logo.png";
import primerica_logo from "./Datathon/primerica_logo.png";
import singlestore_logo from "./Datathon/singlestore_logo.png";

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
const clubRow = {
  width: "100%",
  margin: "0",
  padding: "0 0 1em 0",
  textAlign: "left",
}
const blurbContainer = {
  width: "100%",
  margin: "0 auto",
  textAlign: "left",
  padding: "0% 15% 0% 15%",
}
const intro = {
  width: "100%",
  backgroundColor: "#20302bDF",
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
  width: "12em",
  maxWidth: "40%",
  height: "14em",
  margin: "1%",
  padding: "2.5vh",
  borderRadius: "20px",
  backgroundColor: "#20302b99",
  overflow: "hidden",
  textAlign: "center",
  fontSize: "1em",
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
  width: "25em",
  maxWidth: "50%",
  height: "12em",
  maxHeight: "40vw",
  textAlign: "right",
}
const statCardInner = {
  width: "90%",
  height: "90%",
  fontSize: "1.5em",
  fontWeight: "bold",
  backgroundColor: "#dedede",
  color: "#222222",
  borderRadius: "2vh",
  padding: "3vw 0 0 2vw",
  boxShadow: "0 0 10px #444444",
  overflow: "hidden",
}
const statCardInnerWide = {
  width: "95%",
  height: "95%",
  minHeight: "10vh",
  fontSize: "1.5em",
  fontWeight: "bold",
  backgroundColor: "#dededeEF",
  color: "#222222",
  borderRadius: "2vh",
  padding: "3vw 2vw 0 0",
  boxShadow: "20px 20px 20px #00000044",
  overflow: "hidden",
}
const statNum = {
  fontFamily: "Oswald, sans-serif",
  fontSize: "3em",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
  lineHeight: "1.2em",
  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}
const statDesc = {
  fontFamily: "Oswald, sans-serif",
  fontSize: "1.2em",
  fontWeight: "bold",
  margin: "0",
  padding: "0",
  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}
const sponsorContainer = {
  display: "inline-block",
  width: "45%",
  maxWidth: "15em",
  height: "18vh",
  margin: "1%",
  padding: "0",
  background: "#edededdf",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "10px 15px 15px #00000044",
}
const sponsorLogo = {
  maxWidth: "100%",
  maxHeight: "18vh",
}
const trackCard = {
  width: "100%",
  margin: "auto",
}
const trackCardInner = {
  width: "90%",
  height: "50vh",
  margin: "3vw",
  padding: "2.5vh",
  borderRadius: "20px",
  background: "linear-gradient(160deg, rgba(142,73,73,0.3) 0%, rgba(18,101,90,0.6) 37%, rgba(68, 87, 23,0.3) 100%)",
  boxShadow: "15px 20px 20px #00000044",
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
const countdownContainer = {
  width: "85%",
  height: "100%",
  margin: "0 auto",
  textAlign: "center",
  padding: "2em 0 2em 0",
  background: "#dededeDF",
  borderRadius: "1em",
  boxShadow: "10px 20px 20px #00000044",
}
const countdown = {
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#eeeeee",
  padding: "2vh 0 2vh 0",
  backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}
const countdownTimer = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0",
  fontSize: "3em",
  color: "#222222",
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
          <div class="titleText" style={{
            maxWidth: "60%",
            width: "60%",
            fontSize: "6vw",
            margin: "0 auto",
            padding: "1% 0% 0 0",
            display: "inline-block",
          }}>
            <div class="clubRow" style={{...clubRow}}>
              <a href="https://dssberkeley.com/">
                <Image src={dss_logo} style={{
                  display: "inline-block",
                  width: "0.55em",
                  margin: "0.05em 0.2em 0 2em",
                }}/>
              </a>
              <a href="https://bd.berkeley.edu/">
                <Image src={bdab_logo} style={{
                  display: "inline-block",
                  width: "0.8em",
                  margin: "0.05em 0.2em 0 0",
                }}/>
              </a>
              <a href="https://saas.berkeley.edu/">
                <Image src={saas_logo} style={{
                  display: "inline-block",
                  width: "0.85em",
                  margin: "0.05em 0.2em 0 0",
                }}/>
              </a>
              <a href="https://www.csua.berkeley.edu/">
                <Image src={csua_logo} style={{
                  display: "inline-block",
                  width: "0.5em",
                  margin: "0.05em 0.2em 0 0",
                }}/>
              </a>
            </div>
            <p>5th Annual
              <br></br>
              Datathon for
              <br></br>
              Social Good
            </p>
            <p style={{
              fontSize: "0.35em",
            }}>
              November 11th-12th, 2023 &mdash; UC Berkeley Cory Hall
              <br></br>
              Co-hosted by DSS, BDAB, SAAS, and CSUA
            </p>
            <div class="registerButton" style={{
              margin: "3vw 0 0 0",
            }}>
              <a href="https://www.eventbrite.com/e/5th-annual-datathon-for-social-good-tickets-748231991027?aff=oddtdtcreator" style={{
                display: "inline-block",
                color: "#222222",
                fontSize: "0.5em",
                fontWeight: "bold",
                textDecoration: "none",
              }}>
                <div style={{
                  backgroundColor: "#eeeeeeDF",
                  maxWidth: "40vw",
                  width: "30vw",
                  height: "5vw",
                  margin: "0 1vw 0 0",
                  borderRadius: "4vw",
                  padding: "0.3vw 0 0 0",
                }}>
                  <div style={{
                    backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Register Now
                  </div>
                </div>
              </a>
              <a href="https://tinyurl.com/Datathon2023TeamFormation" style={{
                display: "inline-block",
                color: "#222222",
                fontSize: "0.5em",
                fontWeight: "bold",
                textDecoration: "none",
              }}>
                <div style={{
                  backgroundColor: "#eeeeeeDF",
                  maxWidth: "40vw",
                  width: "25vw",
                  height: "5vw",
                  margin: "0 auto",
                  borderRadius: "4vw",
                  padding: "0.3vw 0 0 0",
                }}>
                  <div style={{
                    backgroundImage: "linear-gradient(90deg, rgba(78,97,53,1) 47%, rgba(18,101,86,1) 85%, rgba(8,69,55,1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                    Find a Team
                  </div>
                </div>
              </a>
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
              marginBottom: "0vw",
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
              Datathon where both beginners and experienced hackers can apply data science 
              techniques to solve real-world problems and will contribute to the field 
              of data science. Our values include:
            </p>
            <div class="spacer" style={{...spacer}}></div>
          </div>
        </div>
        <div class="datathonValues">
          <div>
            <div class="valueCards" style={{
              maxWidth: "100%",
              textAlign: "center",
            }}>
              <div class="valueCard" style={{...valueCard}}>
                👋🏽<i><b>Accessibility</b></i>
                <br></br>
                We are dedicated towards public service and the 
                education of our community.
              </div>
              <div class="valueCard" style={{...valueCard}}>
                🌎<i><b>Diversity</b></i>
                <br></br>
                We believe that diversity in background and in thought 
                is the greatest conduit of understanding.
              </div>
              <div class="valueCard" style={{...valueCard}}>
                🤝<i><b>Collaboration</b></i>
                <br></br>
                We work together to serve our community and strive to 
                create impact through group-led efforts. 
              </div>
              <div class="valueCard" style={{...valueCard}}>
                🧠<i><b>Integrity</b></i>
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
          maxWidth: "90%",
          margin: "0 auto",
        }}>
          <p class="subtitle" style={{...subtitle}}>In the past we've hosted...</p>
          <div class="spacer" style={{...spacer}}></div>

          {/* row 1 */}
          <div>
            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{...statNum}}>4</p>
                <p style={{...statDesc}}>Datathons</p>
              </div>
            </div>
            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{...statNum}}>200+</p>
                <p style={{...statDesc}}>Attendees</p>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div>
            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{...statNum}}>60+</p>
                <p style={{...statDesc}}>Projects</p>
              </div>
            </div>

            <div class="statCardWide" style={{...statCardWide}}>
              <div class="statCardInnerWide" style={{...statCardInnerWide}}>
                <p style={{...statNum}}>20+</p>
                <p style={{...statDesc}}>Companies</p>
              </div>
            </div>
          </div>

          <br></br>
          <p style={{fontSize: "1.2em"}}>Now it's your turn to participate in Datathon!</p>
        </div>
          
        <div class="blurbContainer" style={{...blurbContainer}}>
          <div class="spacer" style={{...spacer}}></div>

          <div class="theme">
            <p style={{...subtitle}}>This year's theme is...</p>
            <p style={{
              fontSize: "2em",
            }}><i>Public Health and Healthcare</i></p>
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

          <div class="sponsors">
            <p style={{...subtitle}}>Sponsors</p>
            <p style={{textAlign: "center"}}>
              We are grateful to our sponsors for their support of
              the Datathon for Social Good.
            </p>
              <div style={{
                width: "100%",
                margin: "2em auto 2em auto",
                textAlign: "center",
              }}>
                {/* Rows of 2 sponsors each, but size up to one per row for mobile */}
                <div class="sponsorLogo" style={{...sponsorContainer}}>
                  <a href="https://innovation.ca.gov/who-we-are/caldata/">
                    <img src={caldata_logo} style={{
                      maxWidth: "50%",
                      ...sponsorLogo
                      }}></img>
                  </a>
                </div>
                <div class="sponsorLogo" style={{...sponsorContainer}}>
                  <a href="https://www.clighttechnologies.com/">
                    <img src={clight_technologies_logo} style={{...sponsorLogo}}></img>
                  </a>
                </div>
                <div class="sponsorLogo" style={{...sponsorContainer}}>
                  <a href="https://www.doordash.com/">
                    <img src={doordash_logo} style={{...sponsorLogo}}></img>
                  </a>
                </div>
                <div class="sponsorLogo" style={{...sponsorContainer}}>
                  <a href="https://www.primerica.com/public/">
                    <img src={primerica_logo} style={{...sponsorLogo}}></img>
                  </a>
                </div>
                <div class="sponsorLogo" style={{...sponsorContainer}}>
                  <a href="https://www.singlestore.com/">
                    <img src={singlestore_logo} style={{...sponsorLogo}}></img>
                  </a>
                </div>
              </div>
            <p style={{textAlign: "center"}}>
              Interested in sponsoring Datathon? Please contact us at
              <br></br>
              <a href="mailto:dss.berkeley@gmail.com" style={{
                color: "#eeeeee",
              }}>
                <b><i> dss.berkeley@gmail.com</i></b>
              </a>
              .
            </p>
          </div>

          <div class="spacer" style={{...spacer}}></div>

          <div class="tracks">
            <p style={{...subtitle}}>Tracks</p>
            <p>
              This year, our datathon features two tracks: Public Health and Healthcare.
              Read more about them both below:
            </p>
            <div class="trackCard" style={{...trackCard}}>
              <div class="trackCardInner" style={{...trackCardInner}}>
                <p style={{
                  fontSize: "1.6em",
                }}><i>Public Health</i></p>
                <p>
                  Our Public Health track focuses on the health of populations and communities.
                  Datasets for this track have been graciously provided by our sponsor CalData.
                </p>
                <div style={{
                    margin: "0 auto",
                    textAlign: "center",
                  }}>
                  <a href="https://innovation.ca.gov/who-we-are/caldata/" target="_blank" rel="noopener noreferrer">
                    <img src={caldata_logo} alt="CalData" style={{...sponsorLogo}}></img>
                  </a>
                </div>
              </div>
            </div>

            <div class="trackCard" style={{...trackCard}}>
              <div class="trackCardInner" style={{...trackCardInner}}>
                <p style={{
                  fontSize: "1.6em",
                }}><i>Healthcare</i></p>
                <p>
                  Our Healthcare track focuses on the health of individuals and on patient care.
                  Datasets for this track have been graciously provided by our sponsor
                  C. Light Technologies.
                </p>
                <div style={{
                    margin: "0 auto",
                    textAlign: "center",
                  }}>
                  <a href="https://www.clighttechnologies.com/" target="_blank" rel="noopener noreferrer">
                    <img src={clight_technologies_logo} alt="C. Light Technologies" style={{...sponsorLogo}}></img>
                  </a>
                </div>

              </div>
            </div>

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
        </div>
        <div class="spacer" style={{...spacer}}></div>

        <div class="countdownContainer" style={{...countdownContainer}}>
          <div class="countdown" style={{...countdown}}>
            <p style={{
              textAlign: "center",
              color: "black",
              ...subtitle}}>Ready to jump in?</p>
            <p style={{
              textAlign: "center",
              fontSize: "1.5em",
              color: "black",
            }}>Kickoff is in:</p>
            {
              //Stolen from w3schools
              //Display the countdown timer in an element
            }
            <p id="countdownTimer" style={{...countdownTimer}}></p>
          </div>
        </div>

        <div class="bigSpacer" style={{...bigSpacer}}></div>
        <div class="bigSpacer" style={{...bigSpacer}}></div>

      </div>
    );
  }
}
export default Datathon;