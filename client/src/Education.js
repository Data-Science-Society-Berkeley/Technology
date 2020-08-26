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
  fontWeight: "normal",
  lineHeight: "97px",
          fontSize: "64px",
          color:"#8CD6D1",
    width:"438px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"74px",
    marginBottom:"42px",
};
  const heading = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "44px",
    fontSize: "36px",
    color:"#000000",
    fontStyle: "normal",
    textAlign:"left",
  };
  const textstyle = {
    fontFamily: "Montserrat",
    fontWeight: 300,
            fontSize: "20px",
            color:"#000000",
            lineHeight:"24px",
            marginLeft:"34px",
            marginRight:"50px",
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
  lineHeight: "29px",
  fontSize: "24px",
  color:"#000000",
  fontStyle: "normal",
  marginLeft:"34px",
  marginBottom:"45px",
  textAlign:"left",
  marginTop:"24px",
};
const pasttext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "29px",
  fontSize: "24px",
  color:"#0000000",
  fontStyle: "normal",
  textAlign:"left",
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

        <div style={mybigtext}> Education</div>
        
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
                <Grid.Column>
                <Link to="/gm">
                    <div id="education" type="education" style={{height:"255px",width:"666px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat",background:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #8CD6D1"}}>
                    <div style={mymidtext}>
                    AcaDev GM Program Page                    </div>
                    <div style={textstyle}>
                    This page contains a schedule for the semester as well as all relevant materials regarding workshops and group projects for the DSS General Membership Program.                     </div>
                    </div>
                    </Link>

                </Grid.Column>
                <Grid.Column>
                    <Grid.Row>
                    <Link to="decallearn">
                    <div style={{height:"255px",width:"666px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat",background:"linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #8CD6D1"}}>
                    <div style={mymidtext}>
                    DeCal Student Course Page                    </div>
                    <div style={textstyle}>
                    This page contains a schedule for the semester as well as all past lectures and course materials of INFO 98: Essential Tools for Data Science.                    </div>                 
                    </div>
                    </Link>
                    
                    </Grid.Row>

              
                </Grid.Column>
  </Grid.Row>
  <Grid.Row style={{marginLeft:"10px"}} columns={1}>
  <div style={{height:"105px",width:"1367px",font:"Montserrat"}}>
  <div style={heading}>
  Past GM Projects (Coming Soon!)                     </div>
                    <div style={pasttext}>
                    This section is still under development. You can check out some of the Spring 2020 projects by clicking <a href="https://drive.google.com/drive/folders/1HCiPnsaOvwIy7iLUflbjczMVNmSKEHOf" style={{color:"#FFC54A"}}to="/gm"> here.     </a>          
                         </div>    
  </div>
  <div style={{height:"105px",width:"1367px",font:"Montserrat"}}>
  <div style={heading}>
  Past Materials (Coming Soon!)                 </div>
                    <div style={pasttext}>
                    This section is still under development. You can check out DSS’ past academic workshops and events 
on our Facebook page <a href="https://www.facebook.com/dssberkeley/events/" style={{color:"#FFC54A"}}to="/gm"> here.     </a>          
                         </div>    
  </div>
  </Grid.Row>
<Grid.Row>
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
