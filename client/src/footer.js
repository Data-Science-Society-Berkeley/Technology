import React, { Component } from "react";
import axios from "axios";
import { Card, Header,Button, Form, Input, Icon,List,Segment,Container,Grid,Image } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import logo from './Backgrounds/DSS-logo-black-transparent.png'
import ocf from  './Backgrounds/ocf-hosted-penguin.svg'

let endpoint = "http://localhost:8080/test";
const footer = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontStyle:"normal",
  lineHeight: "17px",
};
const iconDesc = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "18px",
  fontStyle:"normal",
  lineHeight: "22px",
  marginLeft:"18px",
  marginTop:"0px",
  verticalAlign:"middle"
};
const link = {
  color: "#000000",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontStyle:"normal",
  lineHeight: "17px",
};
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Segment vertical style={{ width: '100%',marginTop: '0px',marginBottom: '0px',height: '600px',background: '#E5E5E5' }}>
      <Container>
        <Grid divided inverted stackable>
        <Grid.Row>
        <div style={{marginLeft:"-493px",marginTop:"24px"}}>
          <Image inline src={logo} style={{width:"74px",height:"74px"}}>
          </Image>
          <div style={{marginLeft:"100px",marginTop:"-40px",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"300px",fontSize:"24px",lineHeight:"29px"}}>
            DATA SCIENCE SOCIETY
          </div>
          </div>
        </Grid.Row>
          <Grid.Row style={{marginBottom:"10px",marginTop:"24px"}}>
          <Grid.Column width={8}>
          <Icon.Group size='huge' style={{marginLeft:"-450px",marginTop:"0px"}}>
                        <a href="mailto:info@dss.berkeley.edu"><Icon name="mail outline" style={{marginBottom:"14px",color:"#8CD6D1"}}>
                          </Icon>
                          </a>
                          <span style={iconDesc}><span style={{marginLeft:"-8px"}}> Email</span> </span>
                          <br/>
                          <a href="https://www.instagram.com/dssberkeley/"> <Icon name="instagram" style={{marginBottom:"14px",color:"#8CD6D1"}}/>
                          <span style={iconDesc}> Instagram</span>

                           </a>   <br/>

                         
                          <a href="https://www.facebook.com/dssberkeley"> <Icon name="facebook" style={{marginBottom:"14px",color:"#8CD6D1"}}>

                            </Icon>
                            <span style={iconDesc}> Facebook</span>

                            </a>
                            <br/>
                            <a href="https://www.linkedin.com/company/data-science-society-at-berkeley/"> <Icon name="linkedin" style={{marginBottom:"14px",color:"#8CD6D1"}}>

                            </Icon>
                            <span style={iconDesc}> LinkedIn</span>
                            </a>
                            <br/>
                            <a href="https://www.youtube.com/channel/UCBj7xVI8e_jlEAznyVetWIQ/"> <Icon name="youtube" style={{marginBottom:"10px",color:"#8CD6D1",marginLeft:"-8px"}}>

                            </Icon>
                            <span style={iconDesc}> <span style={{marginLeft:"-8px"}}>YouTube</span></span>
                            </a>
                            <br/>
                        </Icon.Group>
          </Grid.Column>
            <Grid.Column width={2} >
              <div  style={{link}}>
              <span style={{fontWeight:"450"}}>General </span>
                  </div>
              <List link inverted>
                <Link to="/about"> <List.Item as='a' style={footer}> About us </List.Item></Link>
                <br/>                 <br/>

                <Link to="/acadev"><List.Item as='a' style={footer}> AcaDev</List.Item></Link>
                <br/>                


                <Link to="/consulting"><List.Item as='a' style={footer}> Consulting </List.Item></Link>
                <br/>              
                <Link to='/decal'> <List.Item as='a' style={footer}> DeCal </List.Item></Link>
                <br/>
                <Link to="socialgood"> <List.Item as='a' style={footer}> Social Good </List.Item></Link>
                <br/>                <br/>


                <Link to="/services"> <List.Item as='a' style={footer}> Services </List.Item></Link>



              </List>
            </Grid.Column>
            <Grid.Column width={2}>
            <div   style={{link}}>
            <span style={{fontWeight:"450"}}>Past Work     </span>       </div>
              <List link inverted>
                <Link to="/consulting">
              <List.Item as='a' style={footer}> Consulting</List.Item>  </Link>
                <Link to="/events"><List.Item as='a' style={footer}>Events</List.Item> </Link>
                <Link to="/events"> <List.Item as='a' style={footer}>Workshops</List.Item></Link>
                <List.Item as='a' style={footer}>GM Projects</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
            <div  style={{link}} >
            <span style={{fontWeight:"450"}}> Program Pages  </span>          </div>
              <List link inverted>
                <Link to="/gm"><List.Item as='a' style={footer}> General Membership </List.Item></Link>
                <br/>                <br/>

                <Link to='/decallearn'><List.Item as='a' style={footer}>DeCal: Essential Tools for Data Science </List.Item></Link>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
            <div   style={{link}}>
            <span style={{fontWeight:"450"}}> Contact Us       </span>   </div>
              <List link inverted>
                <Link to="/apply"><List.Item as='a' style={footer}> <span style={{fontWeight:"480",color:"#000000"}}>Apply</span></List.Item></Link>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered style={{marginBottom:"22px"}}>
          <div style={footer}>
          We are a student group acting independently of the University of California. We take full responsibility for our organization and this website.

          </div>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    )

}
}
export default Footer;