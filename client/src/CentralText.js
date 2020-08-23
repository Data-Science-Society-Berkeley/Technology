import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import edu from './landing/AcaDev.png'
import collab from './landing/Rectangle66.png'
import socialize from './landing/Rectangle69.png'
import socialgood from './landing/SocialGood.png'
import ocf from  './Backgrounds/ocf-hosted-penguin.svg'
import ResizeImage from 'react-resize-image'

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
          fontSize: "96px",
          color:"#FFFBFB",
    width:"438px",
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
  width:"300px",
  fontStyle: "normal",
  textAlign:"left"
};

const overlaytext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "78px",
  fontSize: "64px",
  color:"#00000",
  fontStyle: "normal",
  textAlign:"left",
  marginLeft:"74px",
  paddingTop:"100px",
};
const apply = {
    width : "425px",
    fontFamily: "Montserrat",
    fontWeight: 600,
    lineHeight: "55px",
    fontSize: "36px",
    borderRadius: "40px",
    color:"#FFC54A",
    fontStyle: "normal",
    background: "#FFFFFF",
};
const formStyle = {
  width: "635px",
  height: "88px",
  border: "1px solid #000000",
  boxSizing:"borderBox",
  backgroundColor:"transparent",
  marginTop:"22px",
  marginLeft:"88px",
  color:"#000000"
  };
  const buttonStyle = { width: "402px"
, height: "76px",fontFamily: "Montserrat",
fontWeight: 600,
lineHeight: "37px",
fontSize: "24px",
color:"#8CD6D1",
fontStyle: "normal",
background: "#FFFFFF",
borderRadius: "35px",
marginTop:"14px",
border: "1px solid #000000",
boxSizing:"borderBox",
marginLeft:"88px",
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
      console.log(this.state.height,this.state.width)
    return (
      <div>
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
                <Grid.Column>
                    <Header as='h1'style={mybigtext}>
                        Data Science Society
                        </Header>
                        <Header as= 'h1' style={mymidtext}>
                          At Berkeley
                        </Header>
                    </Grid.Column>

                    <Grid.Column style={{marginLeft:"484px",marginTop:"-250px"}}>
                      <Button style={apply} circular>APPLY HERE</Button>
                    </Grid.Column>
  </Grid.Row>
  </Grid>
  <div style={{width:"100%",height:"206px",backgroundColor:"white",paddingRight:"2000px",marginTop:"229px"}}>
  <Header style={{marginLeft:"64px",font:"Montserrat",fontStyle:"normal",fontWeight:"600",fontSize:"64px",lineHeight:"78px",color:"#8CD6D1",width:"289px"}}>
    about us
  </Header>

  </div>
  <div columns={1}style={{width:"2000px",height:"564px",backgroundImage:`url(${edu})`,}}>
  <div style={overlaytext}>
  educate.
  </div>
</div>
<div columns={1}style={{width:"2000px",height:"554px",backgroundImage:`url(${collab})`}}>
<div style={overlaytext}>
  collaborate.
  </div></div>
<div columns={1}style={{width:"2000px",height:"564px",backgroundImage:`url(${socialize})`}}>
<div style={overlaytext}>
  socialize.
  </div>
</div>
 <div columns={1}style={{width:"2000px",height:"564px",backgroundImage:`url(${socialgood})`}}>
 <div style={overlaytext}>
  engage.
  </div>
</div>
<div style={{width:"2000px",height:"1019px",backgroundColor:"white"}}>


<div style={{marginLeft:"64px",font:"Montserrat",fontStyle:"normal",fontWeight:"600",fontSize:"64px",lineHeight:"78px",color:"#8CD6D1",width:"1400px",paddingTop:"398px"}}>
subscribe to our newsletter to get updates on what we do
</div>
<Form >
                              <Input style={formStyle}  placeholder={'E-mail'} />
                              <Form.Button rounded style={buttonStyle}>
                                  SUBMIT
                              </Form.Button>
                          </Form>
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
</div>
<a href="https://www.ocf.berkeley.edu/">
 <Image src={ocf} style={{marginTop:"20px"}}>

</Image>
</a>
  </div>
)

}
}
export default CentralText;
