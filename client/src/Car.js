import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Segment, Container} from "semantic-ui-react";
import Formx from "./Formx";
import carsData from "./carsData";



const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '0em',
    padding: '0em 0em',
    // width: '50px'
  },
  last: {
    marginBottom: '300px',
  },
  segment: {
    width: '250px',
    marginLeft: '2em',
  },
}


function Car(props) {
  return (
    <div className = "carCard">
      <Header as='h3' textAlign='center' style={style.h3}/>
        <Container text>
          <Segment style={style.segment}> Car Name: {props.name}</Segment>
          <Segment style={style.segment}> Recovery?   Yes <input type="checkbox" /> No <input type="checkbox" /> </Segment>
          <Segment style={style.segment}> Uber?  Yes <input type="checkbox" /> No <input type="checkbox" /></Segment>
          <Segment style={style.segment}> Usage: {props.Usage}</Segment>
          <Segment style={style.segment}> Vin: {props.Vin}</Segment>

        </Container>
    </div>

  )
}
export default Car





