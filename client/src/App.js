import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Button,Container, Menu } from "semantic-ui-react";
import Login from './Login';
import Profile from './Profile';
import Registration from './Register';
import MasterDriver from './MasterDriver';
import MasterCar from './MasterCar';
import MasterRate from './MasterRate';
import Footer from './footer'
import Info from './Info';
import Orders from './Order';
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
      page: '',
    };
  }
      // our send data function sets the state correctly to use the data passed on by the child component
    login(){
      console.log(3)
      this.setState({
        page:'/login'
      });
    }
    sendData(data) {
      this.setState({
      zipcode:data
    });
    };
    //TODO this also needs to validate all the forms of the kids
    // Requires Learning how to have access to your child components and call functions inside them
    moveDriver(){
        console.log("Moving to the Driver Info Page")
        this.setState({
            vehicleCompletion:true,
        });
    };
    //TODO this also needs to validate all the forms of the kids
    // Requires Learning how to have access to your child components and call functions inside them
    moveToRate(){
        console.log("Moving to the Rate Info Page")
        this.setState({
            driverCompletion:true,
        });
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
    <NavBar {...props} login={this.login.bind(this)}/>
    <CentralText {...props} buttonClick={this.sendData.bind(this)} />
    </div>
    } 
    />
    <Route exact path ='/lumber' render={(props) => 
    <div >
    <InMenu {...props} />
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    <BestDeals {...props} buttonClick={this.sendData.bind(this)} />
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
      <Route exact path ='/orders' render={(props) => 
    <div>
    <InMenu {...props} />
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    <Orders {...props}/>
    <Footer/>
    </div>
    </div>
    }/>
       <Route path ='/soft:id' render={(props) => 
    <div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
    <Info {...props} />
    </div>
    }/>
        <Route path ='/check:id' render={(props) => 
        <div >
            <Checkout {...props} buttonClick={this.sendData.bind(this)} />
        </div>
    }/>
    <Route exact path ='/register' render={(props) => <Registration {...props} />}/>
    <Route exact path ='/login' render={(props) => <Login {...props} />}/>
    <Route exact path ='/quote/vehicles' render={(props) => <MasterCar {...props} routeChange={this.moveDriver.bind(this)} />}/>
    </Switch>
    </div>
    </Router>
)};
}
export default withRouter(App);
