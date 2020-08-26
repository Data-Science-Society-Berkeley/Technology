import React, { Component } from "react";
import axios from "axios";
import { Card, Header,Button, Form, Input, Icon,List,Segment,Container,Grid } from "semantic-ui-react";
import { withRouter, BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

let endpoint = "http://localhost:8080/test";
const footer = {
  color: "#FFFFFF",
  fontFamily: "Rubik",
  fontSize: "16px",
  letterSpacing: "0.57px",
  lineHeight: "30px",
};
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Segment vertical style={{ width: '100%',marginTop: '0px',marginBottom: '0px',height: '450px',background: '#FFFFFF' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
          <Grid.Column width={2}>
          <Icon.Group size='huge' style={{marginLeft:"0px",marginTop:"0px"}}>
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
          </Grid.Column>
            <Grid.Column width={3}>
              <div  class='lumber-io' >
              General
                  </div>
              <List link inverted>
                <List.Item as='a' style={footer}> Past Work </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
            <div  class='info' >
                INFO
            </div>
              <List link inverted>
                <List.Item as='a' style={footer}> Terms of Use</List.Item>
                <List.Item as='a' style={footer}>Privacy Policy</List.Item>
                <List.Item as='a' style={footer}>Knowledge Base</List.Item>
                <List.Item as='a' style={footer}>Help Desk</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
            <div  class='info' >
                SUPPORT
            </div>
            <List link inverted>
              <List.Item as='a' style={footer}> Help Desk </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
                <Icon inverted size={"big"} style={{ width: '31px',height: '37px' }} name='facebook'/> 
                <Icon  inverted size={"big"} style={{ width: '31px',height: '37px' }} name='instagram'/> 
                <Icon  inverted size={"big"} style={{ width: '31px',height: '37px' }} name='twitter'/> 
                <Icon inverted size={"big"} style={{ width: '31px',height: '37px' }} name='youtube'/> 

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div style={{ textAlign: 'center',color: "#BBBBBB", fontFamily: "Rubik",
      fontSize: "16px",letterSpacing: "0.57px",lineHeight: "19px",marginTop: '30px'}}>
        <Icon name='copyright outline'/>
      Copyright 2019. All rights reserved
      </div>
    </Segment>
    )

}
}
export default Footer;