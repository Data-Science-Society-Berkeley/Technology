import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Container } from "semantic-ui-react";
import ToDoList from "./To-Do-List";
import header from "./header";
import Login from './Login';
import MasterCar from './MasterCar';
import Menu from './Menu';
import Helmet from 'react-helmet';
import CentralText from './CentralText';
import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
const Notfound = () => <Redirect to="/register"/>
class App extends Component {
  constructor(props) {
    super(props)
    // we track the zipcode in state because we need to pass this onto the next page we load
    this.state = {
      zipcode: "",
    };
  }
    // our send data function sets the state correctly to use the data passed on by the child component
    sendData(data) {
      this.setState({
      zipcode:data
    });
    };
render () {
    const { redirect  } = this.state;
    // here we redirect to the correct link
    if (this.state.zipcode) {
                // contemplate removing this code with a this.history.push
        console.log("redirected")
        return <Redirect to='/quote'/>;
    }
    return (
        <Router>
<Menu />
<Switch>
    // We define the quote route, for when the user enters a zipcode and clicks submit, this route will get matched and render the correct page for this.
    <Route exact path ='/quote' component={MasterCar}/>
    // We define the index page that will always load whenever the user uses the site
    <Route exact path ='/' render={(props) => <CentralText {...props} buttonClick={this.sendData.bind(this)} />} />
    </Switch>
    </Router>
)};
}
export default withRouter(App);
