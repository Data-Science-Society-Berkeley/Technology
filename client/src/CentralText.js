import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button, GridColumn } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import edu from './landing/AcaDev.png'
import collab from './landing/Rectangle66.png'
import socialize from './landing/Rectangle69.png'
import socialgood from './landing/SocialGood.png'
import ocf from  './Backgrounds/ocf-hosted-penguin.svg'

let endpoint = "https://dssberkeley.com/";
const gridoffset = {
          marginLeft:"184px",
          marginTop: "67px",
          textAlign:"center",
          fontFamily: "Montserrat"
};
const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "110px",
          fontSize: "78px",
          color:"#FFFBFB",
    fontStyle: "normal",
    textAlign:"left",
    marginTop:"35px"


};
const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "76px",
  fontSize: "50px",
  color:"#FFFFFF",
  fontStyle: "normal",
  textAlign:"left"
};

const overlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "78px",
  fontSize: "64px",
  color:"#00000",
  fontStyle: "normal",
  textAlign:"left",
  marginLeft:"74px",
  paddingTop:"83px",
}
const underlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "37px",
  fontSize: "30px",
  color:"#000000",
  fontStyle: "normal",
  textAlign:"left",
  marginLeft:"74px",
  paddingTop:"85px",
};
const apply = {
    minWidth : "325px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: "55px",
    fontSize: "36px",
    borderRadius: "40px",
    color:"#FFC54A",
    fontStyle: "normal",
    background: "#FFFFFF",
};
const learn = {
  minWidth : "325px",
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "55px",
  fontSize: "36px",
  borderRadius: "40px",
  color:"#FFC54A",
  fontStyle: "normal",
  background: "#FFFFFF",
  marginLeft:"40px",
};
const formStyle = {
  width: "1168px",
  height: "88px",
  border: "1px solid #000000",
  boxSizing:"borderBox",
  backgroundColor:"transparent",
  marginTop:"22px",
  marginLeft:"93px",
  color:"#000000"
  };
  const buttonStyle = { width: "289px"
, height: "76px",fontFamily: "Montserrat",
fontWeight: 300,
lineHeight: "37px",
fontSize: "24px",
color:"#FFFFFF",
fontStyle: "normal",
background: "#8CD6D1",
borderRadius: "40px",
marginTop:"44px",
boxSizing:"borderBox",
marginLeft:"980px",
 };
 const value_card = {
  minWidth : "284px",
  height:"306px",
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "55px",
  fontSize: "36px",
  borderRadius: "40px",
  color:"#FFC54A",
  fontStyle: "normal",
  background: "#8CD6D1",
  border: "5px solid #8CD6D1",
  boxSizing:"border-box",
  boxShadow:"5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
  borderRadius:"20px",
};
class CentralText extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        normal_width:"1440px",
        normal_height:"406px",
        width: 0, height: 0
      };
      this.join=this.join.bind(this);
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join(){
    return [<Card style={value_card}>
    <Card.Header style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"600px",fontSize:"48px",lineHeight:"59px",color:"#FFFFFF"}}>
    1
    </Card.Header>
    <Card.Description style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"500px",fontSize:"28px",lineHeight:"34px",color:"#FFFFFF",width:"258px"}}>
    Contact us for consulting services.
    </Card.Description>
    </Card>,<Card style={value_card}>
    <Card.Header style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"600px",fontSize:"48px",lineHeight:"59px",color:"#FFFFFF"}}>
    2
    </Card.Header>
    <Card.Description style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"500px",fontSize:"28px",lineHeight:"34px",color:"#FFFFFF",width:"258px"}}>
    Like what we do? Sponsor us today!    </Card.Description>
    </Card>,<Card style={value_card}>
    <Card.Header style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"600px",fontSize:"48px",lineHeight:"59px",color:"#FFFFFF"}}>
    3
    </Card.Header>
    <Card.Description style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"500px",fontSize:"28px",lineHeight:"34px",color:"#FFFFFF",width:"258px"}}>
    Connect with us and let’s host an event!    </Card.Description>
    </Card>]
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    render() {
      console.log(this.state.height,this.state.width)
      let process = this.join()
    return (
      <div>
<Grid centered divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
                <Grid.Column>
                    <Header as='h1'style={mybigtext}>
                        Data Science Society
                        </Header>
                        <Header as= 'h1' style={mymidtext}>
                          At Berkeley
                        </Header>
                    </Grid.Column>

                    <Grid.Column textAlign="bottom" floated="right" verticalAlign="middle">
                      <Button.Group style={{marginRight:"10px"}}>

                      <Button style={apply} circular>APPLY</Button>
                      <Button style={learn} circular>LEARN MORE </Button>
                      </Button.Group>

                    </Grid.Column>
  </Grid.Row>
  </Grid>
  <Grid style={{width:"110%",backgroundColor:"white",marginTop:"229px"}}>
  <Grid.Row >
  <Header style={{marginLeft:"74px",font:"Montserrat",fontStyle:"normal",fontWeight:"600",fontSize:"64px",lineHeight:"78px",color:"#8CD6D1",paddingTop:"69px"}}>
    About Us
  </Header>
  </Grid.Row>
  <Grid.Row  style={{fontFamily:"Montserrat",fontWeight:"300px",fontSize:"48px",lineHeight:"59px",color:"#000000",width:"1082px",marginLeft:"74px",marginTop:"50px"}}>
<Grid.Column width={7}>
Building the next generation of data science leaders, educators, and change-makers.
</Grid.Column>

  </Grid.Row>
  <Grid.Row columns={1}>
  <Grid.Column width={6} floated="right" verticalAlign="middle" style={{width:"364px",height:"38px",marginBottom:"52px"}}>
  <Link to="/about" style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"600px",fontSize:"36px",lineHeight:"44px",color:"#FFC54A"}}>
Learn More >
</Link>

  </Grid.Column>
  </Grid.Row>

  </Grid>
  <Grid style={{width:"110%",backgroundColor:"white"}}>
<Grid.Row columns={1}style={{width:"2000px",height:"564px",backgroundImage:`url(${edu})`}}>
<Grid.Column>
  <div style={overlaytext}>
  educate.
  </div>
</Grid.Column>

  <Grid.Column>
  <div style={underlaytext}>
  <Link to="/acadev"> <div style={{color:"#000000"}}>  Learn more about our Academic Development programs >> </div>  </Link>
 <Link to="/decal"> <div style={{marginTop:"29px",color:"#000000"}}>
  Check out our DeCal >>
  </div>
  
  </Link>
  
    </div>
    </Grid.Column>

</Grid.Row>
<Grid.Row columns={1}style={{width:"2000px",height:"564px",backgroundImage:`url(${collab})`}}>
<Grid.Column>
<div style={overlaytext}>
  innovate.
  </div>
  </Grid.Column>
  <Grid.Column>
  <Link to="/consulting">
  <div style={underlaytext}>
  Learn more about our consulting projects >>
  </div>
  </Link>
  </Grid.Column>
</Grid.Row>
<Grid.Row columns={1}style={{width:"2000px",height:"564px",backgroundImage:`url(${socialgood})`}}>
 <div style={overlaytext}>
  engage.
  </div>
</Grid.Row>
<Grid.Row columns={1}>
<Grid.Column width={6} style={{marginLeft:"93px",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"600",fontSize:"48px",lineHeight:"59px",color:"#8CD6D1",paddingTop:"103px"}}>
Work with Us
</Grid.Column>
<Grid.Column width={12} style={{marginLeft:"93px",fontWeight:"300",fontSize:"24px",lineHeight:"29px",fontFamily:"Montserrat"}}>
Collaborate with us and grow our data science community!
</Grid.Column>
<Grid.Column verticalAlign="center">
  <Card.Group style={{marginTop:"90px",marginLeft:"210px"}}>
    {process}
  </Card.Group>
</Grid.Column>
<Grid.Column style={{marginLeft:"93px",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"600",fontSize:"48px",lineHeight:"59px",color:"#8CD6D1",paddingTop:"134px"}}>
Subscribe to our newsletter!
</Grid.Column>
<Grid.Column style={{marginLeft:"93px",fontWeight:"300",fontSize:"24px",lineHeight:"29px",fontFamily:"Montserrat"}}>
Stay updated on our events, recruiting, and other on-campus initiatives. </Grid.Column>
<Grid.Column>
<Form >
                              <Input style={formStyle}  placeholder={'E-mail'} />
                              <Form.Button rounded style={buttonStyle}>
                                  Submit
                              </Form.Button>
                          </Form>
                          </Grid.Column>
                          <Grid.Column>
                          <div>
                        <Icon.Group size='huge' style={{marginLeft:"0px",marginTop:"100px"}}>
                        <a href="mailto:info@dss.berkeley.edu"><Icon name="mail" style={{marginLeft:"100px",color:"#8CD6D1"}}>

                          </Icon>
                          </a>
                          <a href="https://www.instagram.com/dssberkeley/"> <Icon name="instagram" style={{marginLeft:"0px",color:"#8CD6D1"}}/> </a>

                         
                          <a href="https://www.facebook.com/dssberkeley"> <Icon name="facebook" style={{marginLeft:"10px",color:"#8CD6D1"}}>

                            </Icon>
                            </a>
                            <a href="https://www.linkedin.com/company/data-science-society-at-berkeley/"> <Icon name="linkedin" style={{marginLeft:"10px",color:"#8CD6D1"}}>

                            </Icon>
                            </a>
                            <a href="https://www.youtube.com/channel/UCBj7xVI8e_jlEAznyVetWIQ/"> <Icon name="youtube" style={{marginLeft:"10px",color:"#8CD6D1"}}>

                            </Icon>
                            </a>
                        </Icon.Group>
                        </div>
                        </Grid.Column>

</Grid.Row>
</Grid>
<a href="https://www.ocf.berkeley.edu/">
 <Image src={ocf} style={{marginTop:"20px"}}>

</Image>
</a>
  </div>
)

}
}
export default CentralText;
