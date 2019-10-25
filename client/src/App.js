import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Container } from "semantic-ui-react";
import Login from './Login';
import MasterDriver from './MasterDriver';
import MasterCar from './MasterCar';
import Menu from './Menu';
import CentralText from './CentralText';
import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
const Notfound = () => <Redirect to="/register"/>
const mydriverboundry = {
    margin: "auto",
};
class App extends Component {
  constructor(props) {
    super(props)
    // we track the zipcode in state because we need to pass this onto the next page we load
    this.state = {
      zipcode: "",
      quote: true,
      vehicleCompletion: false,
    };
  }
    // our send data function sets the state correctly to use the data passed on by the child component
    sendData(data) {
      this.setState({
      zipcode:data
    });
    };
    moveDriver(){
        console.log("Moving to the Driver Info Page")
        this.setState({
            vehicleCompletion:true,
        });
    };
    moveToRate(){
        console.log("Moving to the Rate Info Page")
        //this.setState({
        //    vehicleCompletion:true,
        //});
    };
render () {
    const { redirect  } = this.state;
    // redirecting to the driver page, because the zipcode has been entered and the this.state.vehicleCompletion is True
    if (this.state.zipcode && this.state.vehicleCompletion){
      this.setState({
      vehicleCompletion:false,
    });
        return <Redirect to='/quote/drivers'/>;
    }
    // redirect to the vehicle page because the zipcode has been entered and we need another variable to track that we only call this once
    if (this.state.zipcode && this.state.quote) {
                // contemplate removing this code with a this.history.push
      this.setState({
      quote:false,
    });
        return <Redirect to='/quote/vehicles'/>;
    }
    // encodes our logic for loading the correct components with respect to each route
    return (
        <Router>
        <div className="myroot">
<Menu />
<Switch>
    // We define the index page that will always load whenever the user uses the site
    <Route exact path ='/' render={(props) => <CentralText {...props} buttonClick={this.sendData.bind(this)} />} />
    // We define the quote route, for when the user enters a zipcode and clicks submit, this route will get matched and render the correct page for this.
    <Route exact path ='/quote/vehicles' render={(props) => <MasterCar {...props} routeChange={this.moveDriver.bind(this)} />}/>
    <Route exact path ='/quote/drivers' render={(props) => <MasterDriver {...props} routeChange={this.moveToRate.bind(this)} style={mydriverboundry} />}/>
    </Switch>
    </div>
    </Router>
)};
}
export default withRouter(App);
