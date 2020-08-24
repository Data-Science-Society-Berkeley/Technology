import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Button,Container, Menu,Image,Header } from "semantic-ui-react";
import Login from './Login';
import Registration from './Register';
import About from './about'
import Committees from './committees'
import CentralText from './CentralText';
import Decal from './Decal';
import DecalLearn from './DecalLearn.js';

import Acadev from './Acadev';
import Consulting from './Consulting';
import Work from './Work';
import Contact from './Contact'
import Social from './Social.js'
import Education from './Education.js'
import Service from './Services.js'
import GeneralMember from './generalmember.js'
import Culture from './Culture.js'

import MobileMenu from './mobilemenu.js'
import MobileLanding from './mobilelanding.js'




import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
import NavBar from './Menu';
import InMenu from './inMen';
import {Helmet} from 'react-helmet';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';
import background from './Backgrounds/Rectangle1.png'
import background1 from './Backgrounds/dsswallpapergif.gif'

ReactGA.pageview(window.location.pathname + window.location.search);
ReactGA.initialize('UA-175785074-1');
WebFont.load({
  google: {
    families: ['Montserrat:300,400,700', 'sans-serif']
  }
});

class App extends Component {
  constructor(props) {
    super(props)
    // we track the zipcode in state because we need to pass this onto the next page we load
    this.state = {
      clientname: 'Client Name',
      projectname: 'Project Name',
      clientid: 'Client Name',
      projectid: 'Client Name',
    };
  }
    sendData(data) {
      console.log(data)
      if (data.type){
      this.setState({
      clientname:data.type,
      clientid:data.id,
    });
      }
    };
    sendProject(data) {
      console.log(data,777)
      if (data.type){
      this.setState({
      projectname:data.type,
      projectid:data.id,
    });
      }
    };
    resize() {
      let currentMobile = (window.innerWidth <= 760);
      if (currentMobile !== this.state.mobile) {
        this.setState({mobile: currentMobile});
      }
    }
    componentDidMount(){
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
    }
render () {
  ReactGA.pageview(window.location.pathname + window.location.search);
    const { redirect  } = this.state;
    // redirecting to the driver page, because the zipcode has been entered and the this.state.vehicleCompletion is True
    // encodes our logic for loading the correct components with respect to each route
    if (this.state.mobile){
      return (<Switch>
        <Route  path ='/' render={(props) => 
        <div>

        <MobileMenu {...props}/>
        <MobileLanding {...props}/>
        </div>
        } 
        />
        </Switch>)

    }
    return (
        <Router>
        <div className="myroot">
<Switch>
    <Route exact path ='/' render={(props) => 
    <div>
    <NavBar {...props}/>
    <CentralText {...props} buttonClick={this.sendData.bind(this)} />
    </div>
    } 
    />
        <Route exact path ='/culture' render={(props) => 
    <div>
    <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <InMenu {...props} />
    <Culture {...props}></Culture>
    </div>
    }/>
    <Route exact path ='/about' render={(props) => 
    <div>
    <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <About/>
    </div>
    }/>
    <Route exact path ='/commitees' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <Committees></Committees>
    </div>
    }/>
     <Route exact path ='/consulting' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <Consulting></Consulting>
    </div>
    }/>
      <Route exact path ='/acadev' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <Acadev></Acadev>
    </div>
    }/>
       <Route exact path ='/generalmember' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <GeneralMember></GeneralMember>
    </div>
    }/>
      <Route exact path ='/decal' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <Decal></Decal>
    </div>
    }/>
        <Route exact path ='/decallearn' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <DecalLearn></DecalLearn>
    </div>
    }/>
       <Route exact path ='/socialgood' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <Social></Social>
    </div>
    }/>
      <Route exact path ='/events' render={(props) => 
    <div>
            <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props}/>
    <Work></Work>
    </div>
    } 
    />
       <Route exact path ='/services' render={(props) => 
    <div>
                    <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props}/>
    <Service></Service>
    <div style={{backgroundColor:"#8CD6D1",marginRight:"-500px",marginTop:"-61px",paddingBottom:"150px"}}>
    <Contact ></Contact>
    </div>
    </div>
    } 
    />
      <Route exact path ='/education' render={(props) => 
    <div>
                <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props}/>
    <Education></Education>
    </div>
    } 
    />
       <Route exact path ='/login' render={(props) => 
    <div style={{backgroundImage:`url(${background1})`,paddingTop:"0px",paddingBottom:"150px",width:"140%",height:"1010px",marginLeft:"00px"}}>
                    <Helmet bodyAttributes={{style: 'background-color : #000000'}}/>
    <Login {...props} ></Login>
    </div>
    } 
    />
       <Route path ='/client:id' render={(props) =>  
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    </div>
    }/>
        <Route path ='/client/project:id' render={(props) => 
        <div >
        </div>
    }/>
    <Route exact path ='/register' render={(props) => <Registration {...props} />}/>
    </Switch>
    </div>
    </Router>
)};
}
export default withRouter(App);

