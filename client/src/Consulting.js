import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import paypal from './Consulting/Rectangle 47.png'
import metromile from './Consulting/Rectangle 48.png'
import monday from './Consulting/Rectangle 49.png'
import simmer from './Consulting/Rectangle 50.png'
import sofi from './Consulting/Rectangle 51.png'
import paypal1 from './Consulting/Rectangle 52.png'
import metromile2 from './Consulting/Rectangle 53.png'
import monday3 from './Consulting/Rectangle 54.png'
import simmer4 from './Consulting/Rectangle 55.png'
import sofi5 from './Consulting/Rectangle 56.png'


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


const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "44px",
  fontSize: "36px",
  color:"#8CD6D1",
  fontStyle: "normal",
  textAlign:"center",
  marginLeft:"30px",
  marginTop:"19px",
};
const consult = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "29px",
    fontSize: "24px",
    color:"#000000",
    fontStyle: "normal",
    textAlign:"center",
    width:"915px",
    marginLeft:"49px",
  };
  const smallconsult = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "22px",
    fontSize: "18px",
    color:"#000000",
    fontStyle: "normal",
    textAlign:"center",
    width:"915px",
    marginLeft:"49px",
  };
class Consulting extends Component {
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
      let temp = [<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>,<Card></Card>]
    return (
        <div>

        <Header style={mybigtext}> Consulting</Header>
        <div style={{marginBottom:"50px",marginLeft:"84px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px"}}>
Consulting Blurb
</div>
        <Card.Group>
        {temp}
        </Card.Group>
        <Header style={mymidtext}> Client Testimonials</Header>
        <Grid style={{marginLeft:"164px"}}>
        <Grid.Row>
        <Image style={{height:"90px",width:"101px"}} src={paypal}>

</Image>
<div style={consult}>
“Working with DSS gave us great and immediately actionable insight into a new Blockchain project we had launched. I really hope we can work with DSS again on our next big project!” - Michael Todasco, Senior Director of Innovation at PayPal (Spring 2020)

</div>
        </Grid.Row>
        <Grid.Row>
        <Image style={{height:"90px",width:"101px"}} src={metromile}>

</Image>
<div style={consult}>
“DSS thoroughly investigated several promising modeling approaches and was detailed, committed, and communicative in their approach. Their ability to work with big data and new technologies is a sign of the great technical skills DSS is building.” - Edwin Zhang, Data Scientist, Metromile (Spring 2020)
</div>
        </Grid.Row>      
        
        <Grid.Row>
        <Image style={{height:"90px",width:"101px"}} src={monday}>

</Image>
<div style={smallconsult}>
“Our team manages many partners around the world, helping bring our product to new regions and audiences. It is very important for us, as an organization, to make sure we provide the best service and customer experience out there, and we expect our partners to do the same. That's where DSS came in the picture, helping us come up with a methodology of measuring the customer satisfaction with the service they get from our partners. The DSS team conducted a thorough research, understanding the market but also the way we operate as an organization. They analyzed every piece of data available to its core and provided us with a great experiment proposal which we are going to execute to drive the best results. The DSS team has done a tremendous job over a course of a semester, and I would like to thank them for all of their hard, professional work. I highly recommend other organizations to collaborate with DSS and I hope I'll be able to work with them again in the future.” - Omry Sitner, Academic Partnerships and Business Development Manager at monday.com

</div>
        </Grid.Row>      
        
        <Grid.Row>
        <Image style={{height:"90px",width:"101px"}} src={simmer}>

</Image>
<div style={smallconsult}>
“I have never worked with students more competent than my analysts at DSS. We hired DSS to analyze restaurant menu data and conduct a  user churn analysis. The first thing that impressed me was their process, which was clearly documented and thorough, but not cumbersome on the client. We had two projects for them. For the menu data analysis project, they developed a pipeline to label dish items by protein, employing an external API for additional metadata. For the churn analysis project, my team used machine learning models to understand churn-user behavior and label users as churned or active. When COVID-19 hit mid-project, I fully anticipated these students to take a step back. Instead, they doubled down. My team exceeded the original parameters of the projects. I'm chomping at the bit to hire them back.” - Richard Wu, CEO, Simmer (YC S19)

</div>
        </Grid.Row>
        <Grid.Row>
        <Image style={{height:"90px",width:"101px"}}src={sofi}>

</Image>
<div style={consult}>
“Our team worked with DSS to analyze and model our member behavior. The consultants delivered high quality presentations of their insights. Their metrics, visualizations, and model provided new perspectives for us to consider when evaluating engagement. The team was very professional and skilled, and they were a pleasure to work with.” - Michelle Leahy, Business Operations Manager, Data at SoFi
</div>
        </Grid.Row>
        <Grid.Row>
        <Image.Group>
          <Image src={paypal1} />
          <Image src={metromile2} style={{marginLeft:"70px"}}/>
          <Image src={monday3} style={{marginLeft:"70px"}}/>
          <Image src={simmer4} style={{marginLeft:"70px"}}/>
          <Image src={sofi5} style={{marginLeft:"70px"}}/>

        </Image.Group>

        </Grid.Row>
        </Grid>
  </div>

)

}
}
export default Consulting;
