import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import culture1 from './Culture/SocialGood.png'
import culture2 from './Culture/SocialGood-1.png'
import culture3 from './Culture/SocialGood-2.png'
import Cookies from "js-cookie";
let endpoint = "https://dssberkeley.com";
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
    width:"838px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"74px",
    marginBottom:"42px",
};


const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "29px",
  fontSize: "24px",
  color:"#8CD6D1",
  fontStyle: "normal",
  textAlign:"center",
  marginLeft:"10px",
  marginTop:"19px",
};
const link = {
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: "29px",
    fontSize: "24px",
    fontStyle: "normal",
    textAlign:"center",
    color:"#000000"
  };
  const buttonStyle = {
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: "44px",
    fontSize: "28px",
    fontStyle: "normal",
    textAlign:"center",
    color:"#75BDD3",
    background:"#000000",
    width:"350px",
    height:"44px",
    marginTop:"74px",
    marginLeft:"-80px",
  };
class Culture extends Component {
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
        // This is a hack we need to validate that this session_token is within the redis cache, otherwise you could just set a fake cookie and make this work....
        let value = Cookies.get("session_token");
         console.log(Cookies.get())
	 console.log(value,2)
	 if (!value){
            //this.props.history.push("/")
        }
    return (
        <div>

        <Header style={mybigtext}> Internal Culture</Header>
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={3}>
                <Grid.Column>
                    <div style={{height:"588px",width:"350px",border: "1px solid #000000",boxSizing: "borderBox",backgroundImage:`url(${culture1})`}}> 
                    <Header style={mymidtext}> <Link to="decal"style={link}>Socials</Link></Header>
                    We offer sponsorship opportunities for our clients. We possess a significant footprint on campus through our 2-unit course for 90 students, weekly workshops open to all UC Berkeley students with an average of 50 attendees, and highly coveted sponsored events.
<br/>
Contact us below to receive our sponsorship booklet.
                    </div>
                    <Button circular style={buttonStyle}>
                    <div style={{marginTop:"-22px"}}>
                        Take me there
                        </div>

                    </Button>
                </Grid.Column>
                <Grid.Column>
                <div style={{height:"588px",width:"350px",border: "1px solid #000000",boxSizing: "borderBox",backgroundImage:`url(${culture2})`}}>
                <Header style={mymidtext}> <Link to="acadev" style={link}>Big-Little</Link></Header>
                
                 </div>
                 <Button circular style={buttonStyle}>
                    <div style={{marginTop:"-22px"}}>
                        Take me there
                        </div>

                    </Button>

                </Grid.Column>
                <Grid.Column>
                <div style={{height:"588px",width:"350px",border: "1px solid #000000",boxSizing: "borderBox",backgroundImage:`url(${culture3})`}}> 
                <Header style={mymidtext}> <Link to="consulting" style={link}>Hangouts</Link></Header>

                </div>
                <Button circular style={buttonStyle}>
                    <div style={{marginTop:"-22px"}}>
                        Take me there
                        </div>

                    </Button>
                </Grid.Column>

  </Grid.Row>
  </Grid>
  </div>

)

}
}
export default Culture;

