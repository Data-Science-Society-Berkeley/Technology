import React, { Fragment  } from 'react';
import "./App.css";
import { Container } from "semantic-ui-react";
import ToDoList from "./To-Do-List";
import header from "./header";
import Login from './Login';
import Menu from './Menu';
import Helmet from 'react-helmet';
import CentralText from './CentralText';
function App() {
return (
    <div>
    {/*
      We should replace Menu with a functional component*/}
    <Menu />
    <CentralText />
    </div>

);
}

export default App;
