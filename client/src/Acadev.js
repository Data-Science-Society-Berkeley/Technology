import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Segment, List, GridColumn } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import CustomTitle from './components/CustomTitle.js'

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
import story from './Acadev Images/AcaDevBanner-compress-min.jpg'
import haas2 from './Acadev Images/hbsa.jpg'
import ascend from './Acadev Images/Ascend-Logo.jpg'




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
    fontWeight: 500,
    lineHeight: "78px",
    fontSize: "64px",
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
    marginleft:"320px",
    textAlign:"center",

};
const imagestyle = {
  height: "400px",
  maxHeight: "400px",
  width: "400px",
  maxWidth: "400px",
};
const overlayboxes = {
  background: "#F8F8F8",
  border: "5px solid #8CD6D1",
  boxSizing: "border-box",
  boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
  height:"456px",
  width:"456px",
  marginBottom:"70px",
  marginTop:"80px",
  marginLeft:"55px"
  }
  const overlayboxes2 = {
    background: "#F8F8F8",
    border: "5px solid #8CD6D1",
    boxSizing: "border-box",
    boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    height:"456px",
    width:"456px",
    marginBottom:"70px",
    marginLeft:"438px",
    marginTop:"80px",

    }
    const generalmember = {
        fontFamily: "Montserrat",
        fontWeight: 300,
        lineHeight: "44px",
        fontSize: "36px",
        color:"#000000",
        fontStyle: "normal",
        textAlign:"center",
        marginLeft:"50px",
        marginTop:"20px"
    }
  var circleStyle = {
    padding:10,
    marginLeft:-44,
    marginTop:"-100px",
    display:"inline-block",
    backgroundColor: "#8CD6D1",
    borderRadius: "50%",
    width:100,
    height:100,
    fontFamily:"Montserrat",
    fontStyle:"normal",
    fontWeight:"600",
    fontSize:"72px",
    lineHeight:"88px",
    color:"#FFFFFF",
    textAlign:"center",
  };
  const info = {
    fontFamily: "Montserrat",
    fontWeight: 500,
    lineHeight: "37px",
    fontSize: "30px",
    color:"#000000",
    fontStyle: "normal",
    textAlign:"center",
    marginLeft:"121px",
    width:"80%"
}

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
     //       


    return (
        <div>
           <div style={{zIndex:"1",position:"relative"}}>
      <Image src={story} style={{width:"120%",height:"auto",zIndex:"2"}}>
      </Image>
      <div style={{width:"100%",textAlign:"center",background: "rgba(140, 214, 209, 0.6)"}}>
      <span style={{position: "absolute",top:"50%",left:"2%" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
      <span style={{fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px"}}>4 </span> <span style={{fontSize:"30px",fontWeight:"500px",fontStyle:"normal",lineHeight:"37px",textAlign:"center",width:"386px",font:"Montserrat"}}>Semesters of General Membership Completed</span>
      </span>
      <span style={{position: "absolute",top:"40%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}>
Academic Development</span>
      <span style={{position: "absolute",top:"50%",left:"60%" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
      <span style={{marginLeft:"51px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px"}}> 350+ <span style={{fontSize:"30px",fontWeight:"500px",fontStyle:"normal",lineHeight:"37px",textAlign:"center",width:"386px",font:"Montserrat"}}>Past General Members</span> </span>
</span>
      <span style={{position: "absolute",top:"80%",left:"50%" ,transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
      <span style={{marginLeft:"251px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px",fontStyle:"normal",fontWeigt:"normal"}}> 64 <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>Workshops Hosted</span> </span>
</span>
      <div style={{background: "rgba(140, 214, 209, 0.6)",zIndex:"2",position: "absolute",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0}}></div>
      </div>
      </div>

        <Grid centered >
        <Grid.Row>
        </Grid.Row>
  

{CustomTitle({title: "What We Do"})}
<Grid.Row style={{color:"#000000",marginTop:"28px",textAlign:"center",lineHeight:"35px",fontSize:"29px",fontWeight:"300px",fontStyle:"normal",fontFamily:"Montserrat",marginLeft:"400px",marginRight:"400px",marginBottom:"20px"}}>
The academic development committee hosts a variety of  educational workshops for the greater campus community , and directs our general membership (GM) program open to all skill levels and students. 
</Grid.Row>

{CustomTitle({title: "Our Initiatives"})}
<Grid.Row centered columns={1}>
  <Card.Group centered >
  <Card style={overlayboxes}>
  <Card.Header style={generalmember}>
    General Membership
  </Card.Header>
  <div style={circleStyle}> 1</div>

  <Card.Description style={{marginTop:"40px",marginLeft:"25px",marginRight:"20px",fontFamily:"Monteserrat",fontSize:"18px",lineHeight:"22px",fontStyle:"normal",textAlign:"Left"}}>
  We provide members with a mentor and weekly lectures covering the data science lifecycle and project collaboration. Our goal is to get you to a completed data science research project by the end of the semester.
<br/>
<br/>

      <List bulleted>
      <List.Header style={{textAlign:"left",fontFamily:"Monteserrat",fontSize:"22px",lineHeight:"22px",fontStyle:"normal",marginLeft:"-15px"}}>
      What you’ll do:
      <br/>
      </List.Header>
      <List.Item>
      Collaborate with students to develop a   semester long project of your choosing.
      </List.Item>
      <List.Item>
      Present at the Berkeley Data Science Research Symposium and create a publication to post on the DSS website.    
      </List.Item>
       </List>

           </Card.Description>
  </Card>
  <Card style={overlayboxes2}>
  <Card.Header style={generalmember}>
    Workshops
  </Card.Header>
  <div style={circleStyle}> 2</div>
  <Card.Description style={{marginTop:"40px",marginLeft:"25px",marginRight:"20px",fontFamily:"Monteserrat",fontSize:"18px",lineHeight:"22px",fontStyle:"normal",textAlign:"Left"}}>
  Collaborate with students from a variety of backgrounds and other organizations to educate the campus community of practical problems, phenomena and tools related to data science. 
  <br/>
  <br/>
  <List bulleted style={{marginTop:"40px"}}>
<List.Header style={{textAlign:"left",fontFamily:"Monteserrat",fontSize:"22px",lineHeight:"22px",fontStyle:"normal",marginLeft:"-15px"}}>

What you’ll do:
<br/>
</List.Header>

<List.Item>

       Communicate with your fellow team members and other orgs to develop workshop materials
       </List.Item>
       <List.Item>

       Present to diverse audiences and support the data science community, both on and off-campus!
       </List.Item>
       </List>

 </Card.Description>

  </Card>
  </Card.Group>
</Grid.Row>
<Grid.Row centered columns={2} >
       <Button.Group centered style={{margin:"auto"}}>         
       <Link to="education">
        <Button style={button}>
          Past GM Projects
          </Button>
          </Link>
          <Link to="education">
          <Button style={button}>
          Past Workshops
          </Button>
          </Link>
        </Button.Group>
        </Grid.Row>
        <Grid.Row centered columns={3} style={{marginTop:"128px"}}>
        <Grid.Column width={3}  textAlign="center" >
        <Link to="/apply">
        <div style={info}>
        <strong style={{color:"#FFC54A"}}>Interested in teaching? </strong>
Apply to become an AcaDev Committee Member!
</div>
        </Link>

        </Grid.Column>
        <Grid.Column width={3} textAlign="center" >
        <Link to="/apply">
        <div style={info}>
        <strong style={{color:"#FFC54A"}}> Interested in learning? </strong>
Apply to become a General Member!
</div>
        </Link>

        </Grid.Column>

<Grid.Column width={4} textAlign="center" >
<Link to="/decal">
<div style={info}>
<strong style={{color:"#FFC54A"}}> Interested in being a part of our DeCal instead? </strong>
Check out the DeCal Committee Page. 
</div>
</Link>

        </Grid.Column>

   
        


        </Grid.Row>
{CustomTitle({title: "AcaDev Directors"})}
       <Grid.Row>
       <Card.Group stackable doubling style={{marginTop:"56px"}}>
<Card style={cardstyle}>    <Image  style={imagestyle} src={alleanna}  />
<Card.Content>
<Card.Header style={textstyle}>Alleanna Clark</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
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
        <span className='date'>Director of Acadev</span>
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
        <span className='date'>Director of Acadev</span>
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

<Grid.Row>
</Grid.Row>
{CustomTitle({title: "Current and Past Collaborations"})}
        <Grid.Row>

        <Image.Group style={{marginLeft:"195px",marginRight:"195px"}}>
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
        <Image src={mlab}  style={{marginRight:"62px"}}>

        </Image>
        <Image src={uea}  style={{marginRight:"96px"}}>

</Image>
       <Image src={bids}  style={{marginRight:"72px"}}>

</Image>
  <Image src={berk} style={{marginRight:"68px"}}>
        </Image>
        <Image src={data8}  style={{marginRight:"62px"}}>
        </Image>
        <Image src={haas2}  style={{marginRight:"13px"}}>
        </Image>
        <Image src={ascend}  style={{marginRight:"13px",height:"114px",width:"299px"}}>
        </Image>
        </Image.Group>
        </Grid.Row>
<Grid.Row centered style={{marginBottom:"128px",marginTop:"56px"}}>
<div style={{background:"#FFFFFF",border:"5px solid #8CD6D1",boxSizing:"border-box",borderRadius:"45px",
width:"25%",height:"167px",marginLeft:"8%",marginRight:"5%",fontSize:"24px",lineHeight:"29px",fontWeight:"300px",fontFamily:"Montserrat"}}>
<div style={{marginTop:"23px",marginLeft:"22px",marginRight:"22px"}}>
Check out our <Link to="/events"><strong style={{color:"#FFC54A"}}> Events</strong></Link> page to view our past academic collaborations.
</div>
</div>
<div style={{background:"#FFFFFF",border:"5px solid #8CD6D1",boxSizing:"border-box",borderRadius:"45px",width:"40%",height:"167px",marginLeft:"8%",marginRight:"100px"}}>
<div style={{fontSize:"24px",lineHeight:"29px",fontWeight:"300px",fontFamily:"Montserrat",marginTop:"23px",marginLeft:"22px",marginRight:"22px"}}>
Interested in DSS hosting a workshop for you? Interested in co-hosting a workshop with us? 
</div>
<Link to="/services">
<div style={{color:"#FFC54A",marginTop:"50px",fontSize:"24px",lineHeight:"29px",fontWeight:"300px",fontFamily:"Montserrat",marginTop:"23px",marginLeft:"22px",marginRight:"22px"}}>
Contact us here >>
</div>
</Link>
</div>

</Grid.Row>
        </Grid>
  </div>

)

}
}
export default Acadev;
