import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Accordion } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import berk from './Decal Images/berkeleyischool-logo-alternate-blue-lg.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import decal from './Decal Images/decalberkeleylogo 1.png'
import charlie from './Leadership Headshots/charlie.jpg'

let endpoint = "http://localhost:8080";
const gridoffset = {
          marginLeft:"62px",
          marginTop: "42px",
          textAlign:"center",
          fontFamily: "Montserrat"
};



const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "97px",
          fontSize: "64px",
          color:"#8CD6D1",
    width:"438px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"74px",
    marginBottom:"42px",
};

  const button = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "29px",
    fontSize: "24px",
    color:"#FFFFFF",
    fontStyle: "normal",
    textAlign:"center",
    background: "#8CD6D1",
    marginLeft:"70px",
  };
  const textstyle = {
    fontFamily: "Montserrat",
    fontWeight: 300,
            fontSize: "37px",
            color:"#8CD6D1",
  }
  const cardstyle = { 
    width:"400px",
   // height: "800px",
    marginBottom:"10px",
    marginleft:"20px",
};
const imagestyle = { 
  height: "auto",
  maxHeight: "500px",
  width: "auto",
  maxWidth: "400px",
}; 
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "73px",
  fontSize: "48px",
  color:"#8CD6D1",
  fontStyle: "normal",
  textAlign:"center",
  marginLeft:"30px",
  marginTop:"19px",
};
const link = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "29px",
    fontSize: "24px",
    color:"#000000",
    fontStyle: "normal",
    textAlign:"left",
  };
class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
      };
      this.join=this.join.bind(this);

  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join(){
      console.log(14)
      let email = this.state.email
      axios
      .post(
        endpoint + "/api/joinnow",
        {
      email
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res);
      });
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    render() {
      const { activeIndex } = this.state

    return (
        <div>

        <Header style={mybigtext}> Education</Header>
        
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
                <Grid.Column>

                    <div style={{height:"255px",width:"666px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
                    <Header style={link}>
                    AcaDev GM Links
                    </Header>
                    <div>
                    This page contains a schedule for the semester as well as all relevant materials regarding workshops and group projects
                    </div>
                    </div>

                </Grid.Column>
                <Grid.Column>
                    <Grid.Row>
                    <div style={{height:"255px",width:"666px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
                    <Header style={link}>
                    DeCal Student Links
                    </Header>
                    <div>
                    This page contains a schedule for the semester as well as all past lectures and course materials.   
                    </div>                 
                    </div>
                    </Grid.Row>

              
                </Grid.Column>
  </Grid.Row>
  <Grid.Row style={{marginLeft:"10px"}} columns={1}>
  <div style={{height:"105px",width:"1367px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
  <Header style={link}>
                    Past Materials
                    </Header>
                    <div>
                    Below are past workshops and events put on by DSS throughout our time as a club.                    
                    </div>    
  </div>
  <Accordion style={{margin:"auto"}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          2020
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            TBD
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          2019
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            TBD
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          2018
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            TBD
          </p>
          <p>
            TBD
          </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          2017
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            TBD
          </p>
          <p>
            TBD
          </p>
        </Accordion.Content>
      </Accordion>
  </Grid.Row>
  </Grid>
 
  </div>

)

}
}
export default Education;
