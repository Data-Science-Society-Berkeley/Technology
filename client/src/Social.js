import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import berk from './Decal Images/berkeleyischool-logo-alternate-blue-lg.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import decal from './Decal Images/decalberkeleylogo 1.png'
import charlie from './Leadership Headshots/charlie.jpg'
import story from './SocialGood/20191109_150334.jpg'
import hype from './SocialGood/SoialGoodPic.png'
import heart from './SocialGood/dssg1.jpeg'
import arrow from './SocialGood/Arrow3.png'




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
    lineHeight: "78px",
    fontSize: "64px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
  };
class Social extends Component {
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
      <span style={{position: "absolute",top:"50%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> Social Good
</span>
<span style={{position: "absolute",left:"25%",top:"75%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
<span style={{fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"0px"}}>2 </span> <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"10px",font:"Montserrat"}}>Projects per Semester</span></span>
      <div style={{background: "rgba(140, 214, 209, 0.6)",zIndex:"2",position: "absolute",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0}}></div>
      <span style={{position: "absolute",left:"70%",top:"75%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> 
      <span style={{marginLeft:"151px",fontSize:"96px",lineHeight:"117px",font:"Montserrat",marginTop:"10px",fontStyle:"normal",fontWeigt:"normal"}}> 5 <span style={{fontSize:"20px",lineHeight:"37px",textAlign:"center",width:"227px",font:"Montserrat"}}>researchers per team </span> </span>
</span>
      </div>

     </div>
<Grid centered>
<Grid.Row style={{marginTop:"130px"}}>
<Header style={link}>
Committee Origin       
</Header>  
</Grid.Row>
<Grid.Row columns={2} >
  <Grid.Column verticalAlign="top" width={4} style={{color:"#000000",textAlign:"left",lineHeight:"35px",fontSize:"29px",fontWeight:"300px",fontStyle:"normal",fontFamily:"Montserrat",marginLeft:"129px",marginRight:"128px",marginBottom:"81px",marginTop:"56px"}}>

  Data science has exploded in popularity due to its influence on the business landscape. The technological capabilities with data has provided business with a competitive advantage, opportunity to optimize efficiency, and in essence, more profit. 
<Image src={arrow} style={{marginLeft:"500px"}}>

</Image>
  </Grid.Column>
  <Grid.Column verticalAlign="top" style={{marginBottom:"153px",marginTop:"56px"}} >
    <Image inline src={hype} style={{height:"383px",width:"382px",marginTop:"-120px"}}>
    </Image>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  <div style={{zIndex:"1",position:"relative"}}>
      <Image src={heart} style={{width:"120%",height:"auto",zIndex:"2"}}>
      </Image>
      <div style={{width:"100%",textAlign:"center",background: "rgba(140, 214, 209, 0.6)"}}>
      <span style={{position: "absolute",top:"10%",left:"65%",textAlign:"left",fontWeight:"300px",zIndex: "3",width:"508px",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal",fontSize:"36px",lineHeight:"44px",color:"#000000"}}> We seek to use these same tools and our datafied way of thinking to promise and act for change. We want to use the power of data science in service of humankind and offer creative solutions to address the world’s most urgent societal challenges.</span>
      </div>

     </div>
 <Grid centered>
 <Grid.Row style={{marginTop:"94px"}}>
 <div style={link}>
       Our Team
       </div>   
 </Grid.Row>
  <Grid.Row style={{marginTop:"56px"}}>

       <Card.Group centered>
       <Card style={cardstyle}> <Image style={imagestyle} src={charlie}/>    
       <Card.Content>
<Card.Header style={textstyle}>Charlie Duarte</Card.Header>
<Card.Meta>
        <span className='date'>Director of 'Good</span>
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
  <Grid.Row style={{marginTop:"100px"}}>
  <Grid.Column style={{color:"#8CD6D1",textAlign:"center",lineHeight:"59px",fontSize:"48px",fontWeight:"500px",fontStyle:"normal",fontFamily:"Montserrat",marginBottom:"98px",marginLeft:"190px",marginRight:"190px"}}>
  This Fall 2020 Semester is the first semester for the Social Good committee. Stay tuned for updates!</Grid.Column>
  </Grid.Row>
  </Grid>
  </div>

)

}
}
export default Social;
