import React, { Component } from "react";
import axios from "axios";
import request from 'superagent'
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import event5 from './Events/quoratechtalk.jpg'
import event4 from './Events/dssdatathon-img.jpg'
import event3 from './Events/dssdatathon-crop.jpg'
import event2 from './Events/operationanalytics-img.jpg'
import event1 from './Events/operationanalyticseventbannerdss.jpg'
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
const bluediv = {
width: "543px",
height: "13px",
background: "#8CD6D1"
}
const rightcol = {
  fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px",
color: "#000000",
textAlign:"left",
marginRight:"300px",
marginLeft:"-100px",
}
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
  componentDidMount = () => {
    this.getEvents()
  }
  getEvents () {
    let CALENDAR_ID = 'c_9crnfpiudugdctfhkrq2abdttc%40group.calendar.google.com'
    request
      .get(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${"AIzaSyBoBAcwgo80fBv7A6DQvBWGxpzVuf0AJ1E"}`)
      .end((err, resp) => {
        if (!err) {
          const events = []
          JSON.parse(resp.text).items.map((event) => {
            events.push({
              start: event.start.dateTime,
              end: event.end.dateTime,
              title: event.summary,
            })
          })
          this.setState({events:events});
        }
      })
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

        <Header style={mybigtext}> EVENTS </Header>
        <Header style={mymidtext}> External Calendar </Header>
        <a href="https://calendar.google.com/calendar?cid=Y185Y3JuZnBpdWR1Z2RjdGZoa3JxMmFiZHR0Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t">
        <Button style={{background:"#FBFBFB",border:"border: 3px solid #E5E5E5",color: "#8CD6D1",fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "500",
fontSize: "16px",
lineHeight: "20px",
marginLeft:"79.5%"}}>
          Subscribe to this Calendar
        </Button>
        </a>
        <Calendar 
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      events={this.state.events}
      components={{
      timeSlotWrapper: ColoredDateCellWrapper,
    }}
      style={{ marginLeft:"200px",height:"800px",marginRight:"200px" }}
    />

    <div style={link}>
    Subscribe to our external calendar above to keep up to date on all of our public events via Google Calendar!    </div>
    <div style={{textAlign:"center",marginTop:"100px"}}>
    <div style={{marginBottom:"56px"}}>
    <div style={mymidtext}> Past Events </div>
    </div>

    <Grid >
    <Grid.Row style={{width:"655px",height:"258x",marginLeft:"72px",marginBottom:"28px"}} >
    <Grid.Column width={8}>
    <Image src={event1} style={{width:"655px",height:"258x"}}>
    </Image>
    <Image src={event2} style={{width:"653px",height:"230px"}}>
    </Image>
    </Grid.Column>
    <Grid.Column width={6}>
    <div style={rightcol}>
    <strong>Operation: Analytics, a Tech & Business Industry Speaker Series </strong><br/>
Thursday, February 27, 2020<br/>
6:00 PM - 8:30 PM <br/>
C230 Cheit Hall<br/>
<br/>
A series of tech talks by product scientists, data scientists, operations managers, and project managers from a variety of industry-leading companies (Google, Amazon, Uber, Indeed, Nike, Eaze, Goodera). 
<br/>
<br/>
Co-Hosted with Phi Beta Lambda and the Student Association of Applied Statistics. 
<br/>
<br/>
- 100+ in attendance! <br/>
- 8 industry speakers<br/> 

    </div>
    </Grid.Column>
    </Grid.Row>
    <div style={bluediv}>

    </div>
    <Grid.Row coluns={2} style={{width:"655px",height:"258x",marginLeft:"72px",marginBottom:"42px",marginTop:"39px"}}>
    <Grid.Column width={8}>
    <Image src={event3} style={{width:"651px",height:"307px"}}>
    </Image>
    <Image src={event4} style={{width:"651px",height:"307px"}}>
    </Image>
    </Grid.Column>
    <Grid.Column width={6}>
    <div style={rightcol}>
   <strong> DSS Datathon for Social Good</strong>  <br/>
Start: Friday, Nov 8, 2019 at 5:00 PM <br/>
End: Saturday, Nov 9, 2019 at 5:00 PM <br/>
Chou Hall N500, Faculty Building F320 <br/>
<br/>
Come participate in UC Berkeley’s first social-good focused datathon hosted by IBM, Data Science Society and Latinx Business Club, to create intriguing visualizations to highlight a problem in the Bay Area, or come up with a solution to an existing problem. <br/>
<br/>
Sponsored by IBM. Co-Hosted with Latinx Business Club.  <br/>
<br/>
- 16 projects presented and judged by the end of competition! <br/>
- 215+ attendees on the first day! <br/>
- Top 3 teams were invited to tour IBM San Francisco Offices and chat with employees. <br/>

    </div>
    </Grid.Column>
    </Grid.Row>
    <div style={bluediv}>

</div>
    <Grid.Row style={{width:"655px",height:"258x",marginLeft:"72px",marginTop:"39px",marginBottom:"42px"}}>
    <Grid.Column width={8}>
    <Image src={event5} style={{width:"643px",height:"336px"}}>
    </Image>
    </Grid.Column>
    <Grid.Column width={6}>
    <div style={rightcol}>
    <strong>Quora Tech Talk  </strong><br/>
Thursday, September 12, 2019 <br/>
8:00 PM<br/>
Hearst Field Annex A1<br/>
<br/>
Come learn about Internship / New Grad opportunities at Quora while also listening to Data Scientists talk about how they use data at the company!<br/>
<br/>
- 180+ in attendance ; 870+ Facebook RSVPs<br/>
- Follow-up Mountain View headquarters tour + lunch with Quora Data Science team for DSS members<br/>
    </div>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row centered>
      <div style={{width:"461px",height:"127px",background:"#8CD6D1"}}>
      <div style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal",fontSize:"18px",lineHeight:"22px",textAlign:"center",color:"#FFFFFF",marginTop:"22px",marginLeft:"19px"}}>
      The Past Events section is still in development. 
      <br/>
      <br/>
Check out our <u><a href="https://www.facebook.com/dssberkeley/events/" style={{color:"#EDE8C4"}}> Facebook</a></u> to learn more about what we have hosted in the past!
      </div>
      </div>
    </Grid.Row>
    </Grid>
    </div>

  </div>

)

}
}
export default Work;
