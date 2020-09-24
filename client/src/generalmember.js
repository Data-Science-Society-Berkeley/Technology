import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,List,Table } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import berk from './Decal Images/berkeleyischool-logo-alternate-blue-lg.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import roshan from './Leadership Headshots/roshan.jpg'
import alleanna from './Leadership Headshots/alleanna2.jpeg'
import steph from './Leadership Headshots/steph.jpg'

let endpoint = "http://localhost:8080";
const gridoffset = {
          marginLeft:"62px",
          marginTop: "42px",
          textAlign:"center",
          fontFamily: "Montserrat"
};

// Course list
// Add each course entry in the identical js object format inside this array
const lectures = [
  {
    week: 1,
    date: new Date('9/21/2020 PST'),
    name: "Project Workflow & Deepnote",
    link: "https://youtu.be/WtehoucrTyQ"
  }, 
]

// Styles
const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "59px",
          fontSize: "48px",
          color:"#8CD6D1",
    width:"1234px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"64px",
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
const mymidtext = {marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "600",
fontSize: "24px",
lineHeight: "29px"}
const link = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "73px",
    fontSize: "48px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
    marginTop:"10px,"
  };
class DecalLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
      };
      this.join=this.join.bind(this);

  }
  // Generate Table based on courses list
  loadTable(props){
    const lectures = props.lectures;
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'
    };
    const tableRows = lectures.map(c => 
      <Table.Row>
        <Table.Cell>
          {c.week}
        </Table.Cell>
        <Table.Cell>
          {new Intl.DateTimeFormat('default', options).format(c.date)}
        </Table.Cell>
        <Table.Cell>
          {c.name}
        </Table.Cell>
        <Table.Cell>
          <a href={c.link}>{c.link}</a>
        </Table.Cell>
      </Table.Row>
      )
    
    return (
      <Table >
      <Table.Header>
          <Table.Row>
              <Table.HeaderCell class='col-md-1 center'><b>Week</b></Table.HeaderCell>
              <Table.HeaderCell class='col-md-1'><b>Date</b></Table.HeaderCell>
              <Table.HeaderCell class='col-md-3'><b>Topic</b></Table.HeaderCell>
              <Table.HeaderCell class='col-md-3'><b>YouTube Link</b></Table.HeaderCell>
          </Table.Row>
      </Table.Header>
      <Table.Body>
          {tableRows}
      </Table.Body>
      </Table> 
    )
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
        <Grid>
        <Grid.Row >
        <Header style={mybigtext}> General Membership Program | Fall 2020</Header>
        </Grid.Row>

        <div style={{marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px"}}>

<Grid.Row>

  <div >
<b style={mymidtext}>General Membership</b>  | Fall 2020       </div>
        </Grid.Row>
        <Grid.Row>

<div style={{marginLeft:"64px",marginTop:"56px"}}>

Welcome to Data Science Society at Berkeley&rsquo;s very own General Member Program: Essential Tools for Data Scientists! This course is geared towards exposing students to essential data science skills that are
                        demanded in industry and are meant to be taken as a follow-up or alongside Data 8. The course covers the bits of data science and machine learning that aren’t traditionally taught in the classroom
                        like advanced Pandas and Seaborn, and visualization dashboards that will challenge you, sharpen your skills and elevate you in the internship game.
                        <br/>
                        <br/>
                        In this course, you will learn everything you need to know from the ground up from an introduction on Python, to software like Excel and Tableau, to other essential skills through a personalized
                        data science project that includes data cleaning, visualization, statistical analysis, and machine learning.
</div>
        </Grid.Row>

<div style={{marginLeft:"0px"}}>
<Grid.Row style={{marginTop:"56px"}}>

<Header style={{marginLeft:"60px",fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "600",
fontSize: "24px",
lineHeight: "29px",marginBottom:"56px"}}>
  Schedule
</Header>
        </Grid.Row>
        <Grid.Row>

{this.loadTable({lectures: lectures})}
</Grid.Row>


</div>

<Grid.Row style={{marginTop:"100px",marginBottom:"56px"}}>

       <Header style={link}>
       General Member Course Staff
       </Header>   
       </Grid.Row>
       <Grid.Row>

       <Card.Group centered>
<Card style={cardstyle}>    <Image  style={imagestyle} src={alleanna}  />
<Card.Content>
<Card.Header style={textstyle}>Alleanna Clark</Card.Header>
<Card.Meta>
        <span className='date'>Director of Academic Development</span>
      </Card.Meta>
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
<Card style={cardstyle}>    <Image  style={imagestyle} src={steph}  />
<Card.Content>
<Card.Header style={textstyle}>Stephanie Lu</Card.Header>
<Card.Meta>
        <span className='date'>Director of Academic Development</span>
      </Card.Meta>
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
       <Card style={cardstyle}> <Image style={imagestyle} src={roshan}/>    
       <Card.Content>
<Card.Header style={textstyle}>Roshan Lodha</Card.Header>
<Card.Meta>
        <span className='date'>Director of Academic Development</span>
      </Card.Meta>
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
</Card.Group>
</Grid.Row>

  </div>
  </Grid>
  </div>

)

}
}
export default DecalLearn;
