import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import berk from './Decal Images/berkeleyischool-logo-alternate-blue-lg.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import decal from './Decal Images/decalberkeleylogo 1.png'
import kate from './Leadership Headshots/kate.jpg'
import uma from './Leadership Headshots/uma.png'
import gaya from './Leadership Headshots/gayatri.png'

import steph from './Leadership Headshots/steph.jpg'
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
    marginLeft:"124px",
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
    textAlign:"center",

};
const imagestyle = {
  height: "400px",
  maxHeight: "400px",
  width: "400px",
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
    lineHeight: "73px",
    fontSize: "48px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
  };
class Decal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
      };
      this.join=this.join.bind(this);

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
    return (
        <div>

        <Header style={mybigtext}> DeCal</Header>
        <div style={{marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px"}}>
  <div style={{marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px"}}>
Welcome to Data Science Society at Berkeley’s very own DeCal: Essential Tools for Data Science! With the omnipresence of data in an increasingly digital world - data literacy is becoming one of the most sought after skills in every field.  Unfortunately, we believe that the data science courses at Berkeley - although beautifully designed and taught, are primarily geared towards technical majors. In addition to this, these courses are also incredibly hard to get into for non-technical/non-data science majors. This course aims to address this gap. This course is something that picks and chooses what we think are universally relevant concepts from both Introductory data science courses and Intermediate data science courses - and teaches these concepts in a way actively geared towards people of all backgrounds.

This course aims to expose students to essential data science and statistical modeling/Machine learning concepts that will not only make them a lot more employable but will also be very relevant to them irrespective of what they end up pursuing. There is a strong focus on building a statistical intuition without delving into the arcane math/programming that goes behind a lot of models using libraries like sci-kit learn.
</div>
<div style={{textAlign:"center"}}>
       <Button.Group style={{margin:"auto"}}>
          <Button style={button}>
          Course Listing
          </Button>
          <Button style={button}>
          <Link to="/decallearn" style={{color:"white"}}>
          Course Landing Page
          </Link> 
          </Button>
        </Button.Group>
        </div>
       <Header style={link}>
       DeCal Co-Directors
       </Header>   
       <Card.Group style={{marginLeft:"360px"}}>
       <Card style={cardstyle}> <Image style={imagestyle} src={kate}/>    
       <Card.Content>
<Card.Header style={textstyle}>Kate Miller</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
        Kate is a director of DeCal.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:roshanlodha@berkeley.edu">
        <Icon name='mail' />
        </a>
        <a href="http://linkedin.com/in/roshanlodha">
        <Icon name='linkedin' />
        </a>
      </Card.Content>
</Card>
<Card style={cardstyle}>    <Image  style={imagestyle} src={uma}  />
<Card.Content>
<Card.Header style={textstyle}>Uma Krishnaswamy</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
      Uma is a director of DeCal.      
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:alleanna@berkeley.edu">
        <Icon name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
        <Icon name='linkedin' />
        </a>
      </Card.Content>
</Card>
<Card style={cardstyle}>    <Image  style={imagestyle} src={gaya}  />
<Card.Content>
<Card.Header style={textstyle}>Gayatri Babel</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
      Gayatri is a director of DeCal.
            </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:stephanie.lu@berkeley.edu">
        <Icon name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
        <Icon name='linkedin' />
        </a>
      </Card.Content>
</Card>
</Card.Group>
     <div style={{textAlign:"center"}}>
       <div style={{margin:"auto"}}>
         <span style={{fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px"}}>6 </span> <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"386px",font:"Montserrat"}}>Semesters Completed</span>
       <span style={{marginLeft:"151px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px",fontStyle:"normal",fontWeigt:"normal"}}> 400+ <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>Students Taught</span> </span>
       </div>
       </div>
  </div>
  <div style={{textAlign:"center"}}>
  <Header style={{fontSize:"30px",lineHeight:"37px",font:"Montserrat",margin:"auto",fontStyle:"normal",fontWeight:"normal"}}>
    Sponsored By
  </Header>
  </div>
  <div style={{textAlign:"center"}}>
  <Image.Group style={{margin:"auto",marginBottom:"73px"}}>
    <Image style={{marginRight:"70px"}}src={decal}>

    </Image>
    <Image style={{marginRight:"39px"}}src={berk}>
      
      </Image>
      <Image src={datacamp}>
      
      </Image>
  </Image.Group>
  </div>
  </div>

)

}
}
export default Decal;
