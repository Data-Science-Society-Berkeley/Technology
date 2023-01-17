import React, { Fragment, Component } from "react";
import "./App.css";
import { Button, Container, Menu, Image, Header } from "semantic-ui-react";
import Login from "./Login";
import Registration from "./Register";
import About from "./about";
import Committees from "./committees";
import CentralText from "./CentralText";
import Decal from "./Decal";
import DecalLearn from "./DecalLearn.js";
import apply from "./Backgrounds/dssfall2020-recruitmentbanner.png";

import Acadev from "./Acadev";
import Consulting from "./Consulting";
import Work from "./Work";
import Contact from "./Contact";
import Cookies from "js-cookie";
import Social from "./Social.js";
import Education from "./Education.js";
import Service from "./Services.js";
import GeneralMember from "./generalmember.js";
import Hierarchy from "./hierarchy";
import Join from "./Join-Us"
import Culture from "./Culture.js";

import Footer from "./footer";
import MobileMenu from "./mobilemenu.js";
import MobileLanding from "./mobilelanding.js";

import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import NavBar from "./Menu";
import NavBar2 from "./mobilemenu";
import InMenu from "./inMen";
import { Helmet } from "react-helmet";
import WebFont from "webfontloader";
import ReactGA from "react-ga";
import background from "./Backgrounds/Rectangle1.png";
import background1 from "./Backgrounds/dsswallpapergif.gif";

ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize("UA-175785074-1");
WebFont.load({
  google: {
    families: ["Montserrat:300,400,700", "sans-serif"],
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    // we track the zipcode in state because we need to pass this onto the next page we load
    this.state = {
      clientname: "Client Name",
      projectname: "Project Name",
      clientid: "Client Name",
      projectid: "Client Name",
    };
  }
  sendData(data) {
    console.log(data);
    if (data.type) {
      this.setState({
        clientname: data.type,
        clientid: data.id,
      });
    }
  }
  sendProject(data) {
    console.log(data, 777);
    if (data.type) {
      this.setState({
        projectname: data.type,
        projectid: data.id,
      });
    }
  }
  culture() {
    let value = Cookies.get("session_token");
    if (!value) {
      return (
        <Switch>
          <Route
            path="/zoom"
            component={() => {
              window.location.href = "https://berkeley.zoom.us/j/92287537123";
              return null;
            }}
          />
          <Route
            path='/datathon'
            component={() => {
              window.location.href = "https://www.eventbrite.com/e/450550156647";
              return null;
            }}
          />
          <Route
            path='/tej'
            component={() => {
              window.location.href = "https://berkeley.zoom.us/j/9748494523";
              return null;
            }}
          />
          <Route
            path='/shoutouts'
            component={() => {
              window.location.href = "https://airtable.com/shr5OyNH5Rv7RastW";
              return null;
            }}
          />
          <Route
            path='/preetha'
            component={() => {
              window.location.href = "https://berkeley.zoom.us/j/4802333671";
              return null;
            }}
          />
          <Route
            path='/nicole'
            component={() => {
              window.location.href = "https://berkeley.zoom.us/my/nicolepark";
              return null;
            }}
          />
          <Route
            path='/technotes'
            component={() => {
              window.location.href = "https://www.notion.so/dssberkeley/FALL-2022-Notes-a1e7ebcf7e0e46d2ae623fbfe5cf9c24";
              return null;
            }}
          />
          <Route
            path='/kuhu'
            component={() => {
              window.location.href = "https://berkeley.zoom.us/my/kuhusharma";
              return null;
            }}
          />
          <Route
            path='/marlon'
            component={() => {
              window.location.href = "https://berkeley.zoom.us/my/marflon";
              return null;
            }}
          />
          <Route
            path="/join"
            component={() => {
              window.location.href = "https://dssberkeley.com/joinus";
              return null;
            }}
          />
          <Route
            path="/mailinglist"
            component={() => {
              window.location.href = "https://airtable.com/shr084vc5JtxBydJK";
              return null;
            }}
          />
          <Route
            path="/apply"
            component={() => {
              window.location.href = "https://airtable.com/shrRNcB5mOQLn4sb9";
              return null;
            }}
          />
          <Route
            path="/applydecal"
            component={() => {
              window.location.href = "https://tinyurl.com/dssdecalapp";
              return null;
            }}
          />
          <Route
            path="/externalcalendar"
            component={() => {
              window.location.href = "https://calendar.google.com/calendar/u/0?cid=Y185Y3JuZnBpdWR1Z2RjdGZoa3JxMmFiZHR0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
              return null;
            }}
          />
          <Route
            path="/coffee"
            component={() => {
              window.location.href = "https://www.notion.so/DSS-Spring-2023-Coffee-Chat-Sign-ups-f2f3665698de491988f6a6d64060ae69";
              return null;
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <NavBar {...props} />
                <CentralText
                  style={{ paddingBottom: "500px" }}
                  {...props}
                  buttonClick={this.sendData.bind(this)}
                />
                <Footer></Footer>
              </div>
            )}
          />
          {/* <Route
            exact
            path="/join"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />

                <div
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "59px",
                    fontSize: "48px",
                    fontWeight: "300",
                    fontFamily: "Montserrat",
                    marginTop: "56px",
                    marginBottom: "56px",
                    marginLeft: "180px",
                    marginRight: "180px",
                  }}
                >
                  Applications for Spring 2022 are now closed. Please check back at the beginning of next semester!
                  <br />
                  <br />
                </div>
              </div>
            )}
          /> */}

          <Route
            exact
            path="/shoutouts"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>

                <iframe
                  class="airtable-embed"
                  src="https://airtable.com/embed/shraY96qjV1X6O09w?"
                  frameborder="0" onmousewheel="" width="100%" height="2849"

                  style={{
                    background: "transparent",
                    border: "1px solid #ccc",
                  }}>
                  </iframe>
              </div>
            )}
          />
          <Route
            exact
            path="/dares"
            render={(props) => (
              <div>
                {/* makes background white on page you're going to*/}
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                <iframe
                  class="airtable-embed"
                  src="https://airtable.com/embed/shraY96qjV1X6O09w?"
                  frameborder="0" onmousewheel="" width="100%" height="2849"

                  style={{
                    background: "transparent",
                    border: "1px solid #ccc",
                  }}>
                  </iframe>
              </div>
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <About />
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/commitees"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Committees></Committees>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/joinus"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Join></Join>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/consulting"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Consulting></Consulting>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/acadev"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Acadev></Acadev>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/gm"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <GeneralMember></GeneralMember>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/decal"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Decal></Decal>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/decallearn"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <DecalLearn></DecalLearn>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/socialgood"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Social></Social>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/events"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Work></Work>
                <div style={{ marginTop: "10px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Service></Service>
                <div
                  style={{
                    backgroundColor: "#8CD6D1",
                    marginRight: "-500px",
                    marginTop: "0px",
                    paddingBottom: "150px",
                  }}
                >
                  <Contact></Contact>
                </div>

                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    marginTop: "55px",
                    paddingBottom: "50px",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontHeight: "29px",
                  }}
                >
                  You can also reach us through our email or social medias
                  listed below.
                </div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/education"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Education></Education>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <div
                style={{
                  backgroundImage: `url(${background1})`,
                  paddingTop: "0px",
                  paddingBottom: "150px",
                  width: "140%",
                  height: "1010px",
                  marginLeft: "00px",
                }}
              >
                <Helmet
                  bodyAttributes={{ style: "background-color : #000000" }}
                />
                <Login {...props} culture={this.culture.bind(this)}></Login>
              </div>
            )}
          />
          <Route
            path="/client:id"
            render={(props) => (
              <div
                style={{
                  marginTop: "0px",
                  marginRight: "0px",
                  background: "#F6F7F6",
                  width: "1450px",
                }}
              ></div>
            )}
          />
          <Route path="/client/project:id" render={(props) => <div></div>} />
          <Route
            exact
            path="/register"
            render={(props) => <Registration {...props} />}
          />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route
            path="/zoom"
            component={() => {
              window.location.href = "https://berkeley.zoom.us/j/92287537123";
              return null;
            }}
          /><Route
          path="/family"
          component={() => {
            window.location.href = "https://trusting-montalcini-b87ad0.netlify.app/";
            return null;
          }}
        />
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <NavBar {...props} />
                <CentralText
                  style={{ paddingBottom: "500px" }}
                  {...props}
                  buttonClick={this.sendData.bind(this)}
                />
                <Footer></Footer>
              </div>
            )}
          />
          {/* <Route
            exact
            path="/join"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Image src={apply} style={{ height: "300px" }}></Image>

                <div
                  style={{
                    color: "#000000",
                    textAlign: "center",
                    lineHeight: "59px",
                    fontSize: "48px",
                    fontWeight: "300",
                    fontFamily: "Montserrat",
                    marginTop: "56px",
                    marginBottom: "56px",
                    marginLeft: "180px",
                    marginRight: "180px",
                  }}
                >
                  Applications open Thursday, August 27, 2020 at 12:00 Pacific
                  Standard Time. Follow our socials to stay updated!
                  <br />
                  <br />
                  Join our Discord at discord.gg/nrSntva !
                </div>
              </div>
            )}
          /> */}
          <Route
            exact
            path="/joinus"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Acadev></Acadev>
                <Footer></Footer>
              </div>
            )}
          />
          {Culture}
          <Route
            exact
            path="/about"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <About />
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/commitees"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Committees></Committees>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/consulting"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Consulting></Consulting>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/acadev"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Acadev></Acadev>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/gm"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <GeneralMember></GeneralMember>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          {/* <Route
            exact
            path="/family"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Hierarchy></Hierarchy>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          /> */}
          <Route
            exact
            path="/decal"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Decal></Decal>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/decallearn"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <DecalLearn></DecalLearn>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/socialgood"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Social></Social>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/culture"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <InMenu {...props} />
                <Culture {...props}></Culture>
              </div>
            )}
          />
          <Route
            exact
            path="/events"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Work></Work>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/services"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Service></Service>
                <div
                  style={{
                    backgroundColor: "#8CD6D1",
                    marginRight: "-500px",
                    marginTop: "0px",
                    paddingBottom: "150px",
                  }}
                >
                  <Contact></Contact>
                </div>

                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    marginTop: "55px",
                    paddingBottom: "50px",
                    textAlign: "center",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontHeight: "29px",
                  }}
                >
                  You can also reach us through our email or social medias
                  listed below.
                </div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/education"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <Education></Education>
                <div style={{ marginTop: "100px" }}></div>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <div
                style={{
                  backgroundImage: `url(${background1})`,
                  paddingTop: "0px",
                  paddingBottom: "150px",
                  width: "140%",
                  height: "1010px",
                  marginLeft: "00px",
                }}
              >
                <Helmet
                  bodyAttributes={{ style: "background-color : #000000" }}
                />
                <Login {...props} culture={this.culture.bind(this)}></Login>
              </div>
            )}
          />
          <Route
            path="/client:id"
            render={(props) => (
              <div
                style={{
                  marginTop: "0px",
                  marginRight: "0px",
                  background: "#F6F7F6",
                  width: "1450px",
                }}
              ></div>
            )}
          />
          <Route path="/client/project:id" render={(props) => <div></div>} />
          <Route
            exact
            path="/register"
            render={(props) => <Registration {...props} />}
          />
        </Switch>
      );
    }
  }
  resize() {
    let currentMobile = window.innerWidth <= 1000;
    if (currentMobile !== this.state.mobile) {
      this.setState({ mobile: currentMobile });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const { redirect } = this.state;
    // redirecting to the driver page, because the zipcode has been entered and the this.state.vehicleCompletion is True
    // encodes our logic for loading the correct components with respect to each route
    if (this.state.mobile) {
      return (
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <NavBar2 {...props} componentid={CentralText} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/about"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={About} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/commitees"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Committees} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/consulting"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Consulting} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/acadev"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Acadev} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/gm"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={GeneralMember} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/decal"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Decal} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/decallearn"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={DecalLearn} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/socialgood"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Social} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/events"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Work} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/services"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={"services"} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/education"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Education} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/register"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Registration} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />

          <Route
            exact
            path="/joinus"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar2 {...props} componentid={Join} />
                {/* <Footer></Footer> */}
              </div>
            )}
          />
        </Switch>
      );
    }
    const login = this.culture();
    return (
      <Router>
        <div className="myroot">{login}</div>
      </Router>
    );
  }
}
export default withRouter(App);
