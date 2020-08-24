import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Accordion,Segment } from "semantic-ui-react";
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

        <Header style={mybigtext}> Services</Header>
    
        <Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
                <Grid.Column>

                    <Segment style={{height:"906px",width:"588px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
                    <Header style={mymidtext}>
                    Consulting
                    </Header>
                    <div>
                    Consulting teams consist of 2 Project Managers, 4-6 Consultants, and 1 Project Mentor, all of whom sign non-disclosure agreements. We engage with 5 clients each semester.

<br></br><br></br>Contact us below to receive our consulting pitch slide deck and work samples.                  </div>
                    </Segment>

                </Grid.Column>
                <Grid.Column>
                    <Grid.Row>
                    <Segment style={{height:"906px",width:"588px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
                    <Header style={mymidtext}>
                    Sponsorships
                    </Header>
                    <div>
                    We offer sponsorship opportunities for our clients. We possess a significant footprint on campus through our 2-unit course for 90 students, weekly workshops open to all UC Berkeley students with an average of 50 attendees, and highly coveted sponsored events.

<br/> <br/>Contact us below to receive our sponsorship booklet.                    </div>                 
                    </Segment>
                    </Grid.Row>

              
                </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>

)

}
}
export default Education;
