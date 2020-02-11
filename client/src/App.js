import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Button,Container, Menu } from "semantic-ui-react";
import Login from './Login';
import Profile from './Profile';
import Registration from './Register';
import Footer from './footer'
import Info from './Info';
import Upload from './Analytics';
import Checkout from './checkout';


import BestDeals from './bestdeals';

import InMenu from './inMen';

import CentralText from './CentralText';
import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
import NavBar from './Menu';
const mydriverboundry = {
    margin: "auto",
};
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
    <Route exact path ='/home' render={(props) => 
    <div >
    <InMenu {...props} />
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    <BestDeals {...props} updateState={this.sendData.bind(this)} />
    <Footer/>
    </div>
    </div>
    }/>
    <Route exact path ='/profile' render={(props) => 
    <div>
    <InMenu {...props} />
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    <Profile {...props} buttonClick={this.sendData.bind(this)} />
    <Footer/>
    </div>
    </div>
    }/>
       <Route path ='/client:id' render={(props) => 
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    <Info {...props} name={this.state.clientname} updateState={this.sendProject.bind(this)} />
    </div>
    }/>
        <Route path ='/client/project:id' render={(props) => 
        <div >
            <Upload {...props} name={this.state.projectname} clientid={this.state.clientid} buttonClick={this.sendData.bind(this)} />
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
