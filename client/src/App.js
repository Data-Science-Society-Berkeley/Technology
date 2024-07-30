import React, { Fragment, Component } from "react";
import "./App.css";
import { Button, Container, Menu, Image, Header } from "semantic-ui-react";
import Login from "./Login";
import About from "./About.js";
import CentralText from "./CentralText";
import Decal from "./Decal";
import Work from "./Work";
import apply from "./Backgrounds/dssfall2020-recruitmentbanner.png";

import Consulting from "./Consulting";
import Contact from "./Contact";
import Cookies from "js-cookie";
import Service from "./Services.js";
import GeneralMember from "./generalmember.js";
import Join from "./Join-Us";
import Datathon from "./Datathon";

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
import { Helmet } from "react-helmet";
import WebFont from "webfontloader";
import ReactGA from "react-ga";
import background from "./Backgrounds/Rectangle1.png";
import background1 from "./Backgrounds/dsswallpapergif.gif";

ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize("UA-175785074-1");
WebFont.load({
  google: {
    families: ["Montserrat:300,400,700", "Oswald:300,400,700", "sans-serif"],
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
      currentpage: "",
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
    console.log(value);
    if (!value) {
      return (
        <Switch>
          <Route
            path="/zoom"
            component={() => {
              window.location.href = "https://berkeley.zoom.us/j/4802333671";
              return null;
            }}
          />
          <Route
            exact
            path="/datathon"
            render={(props) => (
              <div>
                <Datathon />
                <Footer></Footer>
              </div>
            )}
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
              window.location.href =
                "https://airtable.com/appKnoH5lNfaQ8dQe/shrV6AL4ZXX2A7hJ2";
              return null;
            }}
          />
          <Route
            path="/applydecal"
            component={() => {
              window.location.href = "https://forms.gle/zUr8Vp7NRTap7NM48";
              return null;
            }}
          />
          <Route
            exact
            path="/externalcalendar"
            component={() => {
              window.location.href =
                "https://calendar.google.com/calendar/u/2?cid=Y185Y3JuZnBpdWR1Z2RjdGZoa3JxMmFiZHR0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

              return null;
            }}
          />
          <Route
            exact
            path="/coffee"
            component={() => {
              window.location.href =
                "https://dssberkeley.notion.site/DSS-Spring-2024-Coffee-Chat-Sign-Ups-e8c1d224a1814704adccd03d768e2300?pvs=4";
              return null;
            }}
          />
          <Route
            path="/forum"
            component={() => {
              window.location.href = "https://tinyurl.com/2p838txu";
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
            path="/blog"
            component={() => {
              window.open(
                "https://medium.com/@dssberkeley",
                "_blank" // Open Medium in a new tab.
              );
              window.location.href = "./"; // TODO: Redirect back to last page. Currently redirects to home page regardless of where you are.
              return null;
            }}
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
            path="/decal"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <GeneralMember></GeneralMember>
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/data-198"
            component={() => {
              window.location.href =
                "https://jegeronimo.github.io/dss-data-198/";
              return null;
            }}
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
            path="/gm"
            render={(props) => (
              <div>
                <Helmet
                  bodyAttributes={{ style: "background-color : #ffffff" }}
                />
                <NavBar {...props} />
                <GeneralMember></GeneralMember>
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
            path="/datathon"
            render={(props) => (
              <div
                style={{
                  marginTop: "0px",
                  marginRight: "0px",
                  background: "#F6F7F6",
                  width: "1450px",
                }}
              >
                <Datathon />
                <Footer></Footer>
              </div>
            )}
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
                <Footer></Footer>
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
                <NavBar2 {...props} componentid={Consulting} />
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
                <NavBar2 {...props} componentid={GeneralMember} />
                <Footer></Footer>
              </div>
            )}
          />

          <Route
            exact
            path="/data-198"
            component={() => {
              window.location.href =
                "https://jegeronimo.github.io/dss-data-198/";
              return null;
            }}
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
                <NavBar2 {...props} componentid={"services"} />
                <Footer></Footer>
              </div>
            )}
          />
          <Route
            exact
            path="/blog"
            component={() => {
              window.open(
                "https://medium.com/@dssberkeley",
                "_blank" // Open Medium in a new tab.
              );
              window.location.href = "./"; // TODO: Redirect back to last page. Currently redirects to home page regardless of where you are.
              return null;
            }}
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
                <Footer></Footer>
              </div>
            )}
          />

          <Route
            path="/datathon"
            render={(props) => (
              <div
                style={{
                  fontSize: "1.8vw",
                }}
              >
                <Datathon />
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
