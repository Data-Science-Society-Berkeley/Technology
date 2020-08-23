import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import haas from './Acadev Images/haasdatascienceclub 1.png'
import bids from './Acadev Images/Berkeley_Institute_for_Data_Science_-_Logo 1.png' 
import saas from './Acadev Images/saaslogo_square 1.png'
import pcs from './Acadev Images/pcsberkeley 1.png'
import cal from './Acadev Images/calactuarialleague 1.png'
import pbl from './Acadev Images/pbl 1.png'
import mlab from './Acadev Images/mlabberkeley.png'
import uea from './Acadev Images/berkuea 1.png'
import berk from './Acadev Images/cdssberk 1.png' 
import data8 from './Acadev Images/data8logo 1.png' 
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

const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
          fontSize: "37px",
          color:"#8CD6D1",
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
    lineHeight: "73px",
    fontSize: "48px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
    marginTop:"80px"
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
class Acadev extends Component {
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

        <Header style={mybigtext}> Acadev</Header>
        <div style={{marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px"}}>
The academic development committee hosts a variety of educational workshops for the greater campus community, and directs our general membership (GM) program open to all skill levels and students. We run the workshops in a collaborative setting to encourage learning with peers and to connect students across disciplines. We also partner with other campus organizations such as the Haas Data Science club to provide tailored workshops to their student base. The GM program provides members with a mentor and weekly lectures to work on a semester-long project to put skills into practice, especially those not always emphasized in course curriculum and present at a Berkeley Data Science Research Symposium to complete the semester.         </div>
<div style={{textAlign:"center"}}>
       <Button.Group style={{margin:"auto"}}>          <Button style={button}>
          Past GM Projects
          </Button>
          <Button style={button}>
          <Link to="/generalmember" style={{color:"#FFFFFF"}}>
          GM Landing Page
          </Link>
          </Button>
          <Button style={button}>
          Past Workshops
          </Button>
        </Button.Group>
        </div>
       <Header style={link}>
       Acadev Co-Directors
       </Header>
       <Card.Group style={{marginLeft:"360px"}}>
<Card style={cardstyle}>    <Image  style={imagestyle} src={alleanna}  />
<Card.Content>
<Card.Header style={textstyle}>Alleanna Clark</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
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
<Card style={cardstyle}>    <Image  style={imagestyle} src={steph}  />
<Card.Content>
<Card.Header style={textstyle}>Stephanie Lu</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
      </Card.Meta>
      <Card.Description>
      Stephanie is a director of Academic Development.
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
     <Card style={cardstyle}> <Image style={imagestyle} src={roshan}/>    
       <Card.Content>
<Card.Header style={textstyle}>Roshan Lodha</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
      </Card.Meta>
      <Card.Description>
        Roshan is a director of Academic Development.
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
</Card.Group>
<div style={{textAlign:"center"}}>
       <div style={{margin:"auto"}}>
         <span style={{fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px"}}>4 </span> <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"386px",font:"Montserrat"}}>Semesters Completed</span>
       <span style={{marginLeft:"51px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px"}}> 350+ <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>Past General Members</span> </span>
       <div>
       <span style={{marginLeft:"251px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px",fontStyle:"normal",fontWeigt:"normal"}}> 64 <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>Workshops Hosted</span> </span>
       </div>
       
       </div>
       </div>
       <Header style={link}>
       Current and Past Collaborations
              </Header>
        <Image.Group style={{marginLeft:"109px"}}>
        <Image src={haas} style={{marginRight:"72px"}}>
        </Image>
        <Image src={saas}  style={{marginRight:"62px"}}>

        </Image>
        <Image src={pcs}  style={{marginRight:"69px"}}>

</Image>
       <Image src={cal}  style={{marginRight:"72px"}}>

</Image>
       <Image src={pbl} style={{marginRight:"68px"}}>
        </Image>
        <Image src={mlab}  style={{marginRight:"13px"}}>

        </Image>
        <Image src={uea}  style={{marginRight:"96px"}}>

</Image>
       <Image src={bids}  style={{marginRight:"72px"}}>

</Image>
  <Image src={berk} style={{marginRight:"68px"}}>
        </Image>
        <Image src={data8}  style={{marginRight:"13px"}}>
        </Image>

        </Image.Group>
  </div>

)

}
}
export default Acadev;
