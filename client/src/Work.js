import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import event1 from './Events/dssdatathon 2.png'
import event2 from './Events/operationanalyticseventbannerdss (1).png'

const localizer = momentLocalizer(moment)
let endpoint = "http://localhost:8080";
const gridoffset = {
          marginLeft:"62px",
          marginTop: "42px",
          textAlign:"center",
          fontFamily: "Montserrat"
};

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightred',
    },
  })

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
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
    marginTop:"33px",
  };
class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        events:[],
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
      var temp = [{
        title: "DSS Welcome Session",
        start: moment().add(7, 'days'),
        end: moment().add(7, 'days'),
      }]
    return (
        <div>

        <Header style={mybigtext}> EVENTS </Header>
        <Header style={mymidtext}> External Calendar </Header>
        <Calendar 
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={temp}
      components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
      style={{ marginLeft:"200px",height:"800px" }}
    />

    <div style={link}>
    Subscribe to our external calendar to keep up to date on all of our public events via Google Calendar!
    </div>

    <Header style={mymidtext}> Past Events </Header>
    <Grid style={{marginLeft:"101px"}}>
    <Grid.Row>
    <Image>

    </Image>
    <Image src={event2}>

    </Image>

    </Grid.Row>
    <Grid.Row>
    Title 
    <br/>
Date 
<br/>
Description
<br/>
Facebook Page Link
    </Grid.Row>

    <Grid.Row>
 <Image src={event1}>

    </Image>
    <Image style={{marginLeft:"57px"}}src={event1}>
      
    </Image>

    </Grid.Row>
    <Grid.Row>
    Title 
    <br/>
Date 
<br/>
Description
<br/>
Facebook Page Link
    </Grid.Row>

    <Grid.Row>
    <Image src={event1}>

</Image>
<Image style={{marginLeft:"57px"}} src={event1}>
  
</Image>

    </Grid.Row>
    <Grid.Row>
    Title 
    <br/>
Date 
<br/>
Description
<br/>
Facebook Page Link
    </Grid.Row>


    </Grid>

  </div>

)

}
}
export default Work;
