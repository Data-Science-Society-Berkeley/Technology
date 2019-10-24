import React, { Fragment, Component  } from 'react';
import "./App.css";
import { Container } from "semantic-ui-react";
import ToDoList from "./To-Do-List";
import header from "./header";
import Login from './Login';
import Menu from './Menu';
import Helmet from 'react-helmet';
import CentralText from './CentralText';
import { withRouter, BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
const Notfound = () => <Redirect to="/register"/>
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: "",
    };
  }
    sendData(data) {
      this.setState({
      zipcode:data
    });
    };
render () {
    const { redirect  } = this.state;
    if (this.state.zipcode) {
               return <Redirect to='/quote'/>;
    }
    return (
        <Router>
<Menu />
<Switch>
    <Route exact path ='/quote' render={(props) => <ToDoList {...props} />} />
    <Route exact path ='/' render={(props) => <CentralText {...props} buttonClick={this.sendData.bind(this)} />} />
    </Switch>
    </Router>
)};
}
export default withRouter(App);
