import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import edu from './landing/AcaDev.png'
import collab from './landing/Rectangle66.png'
import socialize from './landing/Rectangle69.png'
import socialgood from './landing/SocialGood.png'

let endpoint = "https://dssberkeley.com/";
const gridoffset = {
          marginLeft:"164px",
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
    textAlign:"left"


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
    color:"#3F6491",
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
  <div style={{width:"2000px",height:"206px",backgroundColor:"white",marginRight:"600px"}}>
  <Header style={{marginLeft:"64px",font:"Montserrat",fontStyle:"normal",fontWeight:"600",fontSize:"64px",lineHeight:"78px",color:"#8CD6D1",width:"289px"}}>
    about us
  </Header>

  </div>
  <div columns={1}style={{width:"1440px",height:"406px",backgroundImage:`url(${edu})`}}>
  <div style={overlaytext}>
  educate.
  </div>
</div>
<div columns={1}style={{width:"1440px",height:"406px",backgroundImage:`url(${collab})`}}>
<div style={overlaytext}>
  collaborate.
  </div></div>
<div columns={1}style={{width:"1440px",height:"406px",backgroundImage:`url(${socialize})`}}>
<div style={overlaytext}>
  socialize.
  </div>
</div>
 <div columns={1}style={{width:"1440px",height:"406px",backgroundImage:`url(${socialgood})`}}>
 <div style={overlaytext}>
  engage.
  </div>
</div>
<div style={{width:"1440px",height:"1019px",backgroundColor:"white"}}>


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
                          <Icon name="mail" style={{marginLeft:"100px",color:"#8CD6D1"}}>

                          </Icon>
                          <Icon name="instagram" style={{marginLeft:"130px",color:"#8CD6D1"}}>

                            </Icon>
                            <Icon name="facebook" style={{marginLeft:"210px",color:"#8CD6D1"}}>

                            </Icon>
                            <Icon name="linkedin" style={{marginLeft:"290px",color:"#8CD6D1"}}>

                            </Icon>
                            <Icon name="youtube" style={{marginLeft:"370px",color:"#8CD6D1"}}>

                            </Icon>
                        </Icon.Group>
                        </div>
</div>

  </div>
)

}
}
export default CentralText;
