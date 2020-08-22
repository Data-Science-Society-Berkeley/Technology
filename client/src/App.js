import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Button,Container, Menu } from "semantic-ui-react";
import Login from './Login';
import Registration from './Register';
import MasterDriver from './MasterDriver';
import MasterCar from './MasterCar';
import MasterRate from './MasterRate';
import Footer from './footer'
import Navbar from './Menu';
import CentralText from './CentralText';
import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
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
<Navbar login={this.login.bind(this)}/>
<Switch>
    // We define the index page that will always load whenever the user uses the site
    <Route exact path ='/' render={(props) => <CentralText {...props} buttonClick={this.sendData.bind(this)} />} />
    // We define the quote route, for when the user enters a zipcode and clicks submit, this route will get matched and render the correct page for this.
    <Route exact path ='/login' render={(props) => <Registration {...props} />}/>
    <Route exact path ='/quote/vehicles' render={(props) => <MasterCar {...props} routeChange={this.moveDriver.bind(this)} />}/>
    <Route exact path ='/quote/drivers' render={(props) => <MasterDriver {...props} routeChange={this.moveToRate.bind(this)} style={mydriverboundry} />}/>
    <Route exact path ='/quote/rate' render={(props) => <MasterRate {...props} routeChange={this.moveToRate.bind(this)} style={mydriverboundry} />}/>
    </Switch>
    </div>
    </Router>
)};
}
export default withRouter(App);
