import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import berk from './Decal Images/berkeleyischool-logo-alternate-blue-lg.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import decal from './Decal Images/decalberkeleylogo 1.png'
import kate from './Leadership Headshots/kate.jpg'
import uma from './Leadership Headshots/uma.png'

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

        <Header style={mybigtext}> Decal</Header>
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
The academic development committee hosts a variety of educational workshops for the greater campus community, and directs our general membership (GM) program open to all skill levels and students. We run the workshops in a collaborative setting to encourage learning with peers and to connect students across disciplines. We also partner with other campus organizations such as the Haas Data Science club to provide tailored workshops to their student base. The GM program provides members with a mentor and weekly lectures to work on a semester-long project to put skills into practice, especially those not always emphasized in course curriculum and present at a Berkeley Data Science Research Symposium to complete the semester.         </div>
        <Button.Group style={{marginLeft:"292px"}}>
          <Button style={button}>
          Course Listing
          </Button>
          <Button style={button}>
          Course Landing Page
          </Button>
        </Button.Group>
       <Header style={link}>
       Acadev Co-Directors
       </Header>   
       <Card.Group style={{marginLeft:"120px"}}>
       <Card style={cardstyle}> <Image style={imagestyle} src={kate}/>    
       <Card.Content>
<Card.Header style={textstyle}>Kate Miller</Card.Header>
<Card.Meta>
        <span className='date'>Director of Decal</span>
      </Card.Meta>
      <Card.Description>
        Kate is a director of Decal.
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
        <span className='date'>Director of Decal</span>
      </Card.Meta>
      <Card.Description>
      Alleanna is a director of Academic Development.      
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
<Card style={cardstyle}>    <Image  style={imagestyle} src={uma}  />
<Card.Content>
<Card.Header style={textstyle}>Gayatri Babel</Card.Header>
<Card.Meta>
        <span className='date'>Director of Decal</span>
      </Card.Meta>
      <Card.Description>
      Stephanie is a director of Decal.
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
       <div style={{marginLeft:"249px"}}>
       <div >
         <span style={{fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px"}}>6 </span> <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"386px",font:"Montserrat"}}>Semesters Completed</span>
       <span style={{marginLeft:"151px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px",fontStyle:"normal",fontWeigt:"normal"}}> 64 <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>Workshops Hosted</span> </span>
       </div>
       </div>
  </div>
  <Header style={{fontSize:"30px",lineHeight:"37px",font:"Montserrat",marginLeft:"613px",fontStyle:"normal",fontWeight:"normal"}}>
    Sponsored By
  </Header>
  <Image.Group style={{marginLeft:"108px",marginBottom:"73px"}}>
    <Image style={{marginRight:"70px"}}src={decal}>

    </Image>
    <Image style={{marginRight:"39px"}}src={berk}>
      
      </Image>
      <Image src={datacamp}>
      
      </Image>
  </Image.Group>
  </div>

)

}
}
export default Decal;
