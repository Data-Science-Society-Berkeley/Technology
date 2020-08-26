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
import story from './Decal Images/DecalHeader.JPG'
import daily from './Decal Images/dailyactivity.jpg'
import decal1 from './Decal Images/decal-imageleft.jpg'
import decal2 from './Decal Images/decal-imageright.jpg'
import datalab from './Decal Images/DeCal_Logo.png'
import arrow from './Decal Images/Arrow.png'
import leftarrow from './Decal Images/OrangeArrow2.png'
import rightarrow from './Decal Images/OrangeArrow1.png'

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
    lineHeight: "78px",
    fontSize: "64px",
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
            <div style={{zIndex:"1",position:"relative"}}>
      <Image src={story} style={{width:"120%",height:"auto",zIndex:"2"}}>
      </Image>
      <div style={{width:"100%",textAlign:"center",background: "rgba(140, 214, 209, 0.6)"}}>
      <span style={{position: "absolute",top:"50%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> Essential Tools for Data Science
DeCal</span>
<span style={{position: "absolute",left:"25%",top:"75%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
<span style={{fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"0px"}}>6 </span> <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"10px",font:"Montserrat"}}>Semesters Completed</span></span>
      <div style={{background: "rgba(140, 214, 209, 0.6)",zIndex:"2",position: "absolute",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0}}></div>
      <span style={{position: "absolute",left:"70%",top:"75%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
      <span style={{marginLeft:"151px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px",fontStyle:"normal",fontWeigt:"normal"}}> 400+ <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>Students Taught</span> </span>
</span>
      </div>

     </div>
        <Grid centered >
        <Grid.Row style={{marginTop:"100px"}}>
        <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"-680px",marginTop:"33px",marginRight:"-185px"}}> </div > 
<div style={link}>
       What We Do
       </div>  
</Grid.Row>
<Grid.Row>
  <Grid.Column verticalAlign="top" width={7} style={{color:"#000000",textAlign:"left",lineHeight:"35px",fontSize:"29px",fontWeight:"300px",fontStyle:"normal",fontFamily:"Montserrat",marginLeft:"110px",marginRight:"128px",marginBottom:"81px",marginTop:"56px"}}>

  Everywhere, data is being collected and used to make <strong> decisions </strong> –- starting from your news feed in the morning, to the Instagram stories you binge during lunch, and even the best transit routes back home.
  <Image src={arrow} style={{marginLeft:"0px",marginTop:"85px"}}>

</Image>
  </Grid.Column>
  <Grid.Column verticalAlign="top" width={6}>
    <Image src={daily} style={{height:"535px",width:"535px"}}>

    </Image>
  </Grid.Column>
  <Grid.Row style={{color:"#000000",textAlign:"right",lineHeight:"35px",fontSize:"29px",fontWeight:"300px",fontStyle:"normal",fontFamily:"Montserrat",marginLeft:"400px",marginRight:"403px",marginBottom:"81px",marginTop:"-145px"}}>
  This DeCal introduces <strong>EVERYONE</strong> to the fascinating world of data analytics and insight. There are absolutely <strong> NO prerequisites</strong>, and people of <strong>ALL majors, backgrounds, and interests</strong> are actively encouraged to apply! 
  </Grid.Row>
  <Grid.Row centered >
    <Image.Group style={{margin:"0 auto"}}>
      <Image src={decal1} style={{height:"353px",width:"635px",marginRight:"50px"}}>
      </Image>
      <Image src={decal2} style={{height:"353px",width:"636px"}} >

      </Image>
    </Image.Group>
    <Grid.Row centered style={{marginTop:"0px"}}>
      <div style={{
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "73px",
    fontSize: "48px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
    marginTop:"87px"
  }}>
        <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"315px",marginTop:"53px",marginRight:"-185px",marginBottom:"-45px"}}> </div > 
       The Course
       <Image src={datalab} style={{height:"204px",width:"551px",margin:"0 auto",marginBottom:"56px"}}>
</Image>
       </div>  

    </Grid.Row>
    <Grid.Row style={{color:"#000000",textAlign:"center",lineHeight:"35px",fontSize:"29px",fontWeight:"300px",fontStyle:"normal",fontFamily:"Montserrat",marginLeft:"129px",marginRight:"128px",marginBottom:"128px"}}>
    Our goal is to educate people with little to no experience in the field about the languages, software, and other tools that data scientists across the globe use daily. We place a special emphasis on practical tools not otherwise emphasized in Berkeley academic curricula. </Grid.Row>
  </Grid.Row>
  <Grid.Row style={{marginBottom:"113px"}}>
  <Link to='/decallearn'>
  <Button style={button}>
          Course Page
          </Button>
          </Link>
  </Grid.Row>
</Grid.Row>
   
<Grid.Row columns={2} >
<Grid.Column>
</Grid.Column>
</Grid.Row>
<Grid.Row centered columns={2} >
<Grid.Column style={{color:"#8CD6D1",textAlign:"center",lineHeight:"59px",fontSize:"48px",fontWeight:"500px",fontStyle:"normal",fontFamily:"Montserrat",marginBottom:"98px"}}>
Join DSS and 
apply to be a TA!
<Image src={rightarrow} style={{marginLeft:"600px",marginTop:"60px",transform:"rotate(10deg)"}}>
</Image>
</Grid.Column>
<Grid.Column style={{color:"#8CD6D1",textAlign:"center",lineHeight:"59px",fontSize:"48px",fontWeight:"500px",fontStyle:"normal",fontFamily:"Montserrat",marginBottom:"98px"}}>
Apply to be a student!
<Image src={leftarrow} style={{marginLeft:"300px",marginTop:"60px",transform:"rotate(-15deg"}}>
</Image>
</Grid.Column>
</Grid.Row>
<Grid.Row centered style={{marginTop:"-50px"}}>
          <Button style={button}>
          <Link to="/apply" style={{color:"white"}}>
          Fall 2020 App
          </Link> 
          </Button>
        </Grid.Row>
        <Grid.Row style={{marginTop:"100px"}}>
        <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"-650px",marginTop:"60px",marginRight:"-185px",marginBottom:"-200px"}}> </div > 
       <Header style={link}>
       DeCal Directors
       </Header>   
       </Grid.Row>
       <Grid.Row style={{marginTop:"56px"}}>
       <Card.Group centered >
       <Card style={cardstyle}> <Image style={imagestyle} src={kate}/>    
       <Card.Content>
<Card.Header style={textstyle}>Kate Miller</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
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
<Card style={cardstyle}>    <Image  style={imagestyle} src={uma}  />
<Card.Content>
<Card.Header style={textstyle}>Uma Krishnaswamy</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
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
<Card style={cardstyle}>    <Image  style={imagestyle} src={gaya}  />
<Card.Content>
<Card.Header style={textstyle}>Gayatri Babel</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
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
</Card.Group>
       </Grid.Row>
       <Grid.Row>
       <div style={{margin:"auto"}}>
        
       </div>
       </Grid.Row>
  <Grid.Row style={{marginTop:"60px"}}>
  <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"-675px",marginTop:"60px",marginRight:"-185px",marginBottom:"-200px"}}> </div > 
  <Header style={link}>
       Our Sponsors
       </Header>   
  </Grid.Row>
  <Grid.Row>
  <Image.Group style={{margin:"auto",marginBottom:"73px",marginTop:"56px"}}>
    <Image style={{marginRight:"70px"}}src={decal}>

    </Image>
    <Image style={{marginRight:"39px"}}src={berk}>
      
      </Image>
      <Image src={datacamp}>
      
      </Image>
  </Image.Group>
  
  </Grid.Row>
  <Grid.Row style={{fontFamily:"Monteserrat",fontSize:"24px",marginLeft:"165px",marginRight:"165px",marginBottom:"120px",marginTop:"56px",lineHeight:"29px"}}>
  *DataCamp offers a free 6 month premium membership to participating students!
  </Grid.Row>
  </Grid>
  </div>

)

}
}
export default Decal;
