import React, { Component } from "react";
import axios from "axios";
import {
  Image,
  Grid,
  Card,
  Header,
  Form,
  Input,
  Icon,
  Segment,
  Container,
  Divider,
  Label
} from "semantic-ui-react";
const style = {
    hang: {
      fontFamily: "Akkurat",
      background: "inherit",
      fontWeight: "lighter",
      color: "Black"
    }
  };
// TODO change the containers to be dynamically loaded for each car 
function RateToggle(props) {
  return (
    <Card style={{width:"440px"}}>
    <Segment>
    <Header as='h3'> Projected Monthly Cost</Header>
    <Header as ='h1' color={"green"}> $200.00 </Header>
    <p style={style.hang}>Based on the factors below.</p>
    <Divider section />
        <Container fluid style={style.hang}> Infinity G37 </Container>
        <Divider section />
        <Container fluid style={style.hang}> Lexus 350 </Container>
        <Divider section />
        <Container fluid style={style.hang}> Lexus 570 </Container>
      </Segment>
    </Card>
   
  );
}
export default RateToggle;
