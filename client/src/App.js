import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Button,Container, Menu } from "semantic-ui-react";
import Login from './Login';
import Registration from './Register';
import About from './about'
import Committees from './committees'
import CentralText from './CentralText';
import Decal from './Decal';
import Acadev from './Acadev';
import Consulting from './Consulting';
import Work from './Work';
import Contact from './Contact'
import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
import NavBar from './Menu';
import {Helmet} from 'react-helmet';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';
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
render () {
  ReactGA.pageview(window.location.pathname + window.location.search);
    const { redirect  } = this.state;
    // redirecting to the driver page, because the zipcode has been entered and the this.state.vehicleCompletion is True
    // encodes our logic for loading the correct components with respect to each route
    switch(this.state["page"]) {
      case '/login':
        return <Redirect to='/login'/>;
      default:
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
      <Route exact path ='/decal' render={(props) => 
    <div>
        <Helmet bodyAttributes={{style: 'background-color : #ffffff'}}/>
    <NavBar {...props} />
    <Decal></Decal>
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
    <NavBar {...props}/>
    <Contact></Contact>
    </div>
    } 
    />
      <Route exact path ='/education' render={(props) => 
    <div>
    <NavBar {...props}/>
    <Contact></Contact>
    </div>
    } 
    />
       <Route exact path ='/login' render={(props) => 
    <div>
    <NavBar {...props}/>
    <Login></Login>
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
    <Route exact path ='/login' render={(props) => <Login {...props} />}/>
    </Switch>
    </div>
    </Router>
)};
}
export default withRouter(App);
