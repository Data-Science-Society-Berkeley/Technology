import React, { Component } from "react";
import axios from "axios";
import {
  CheckBox,
  Button,
  Image,
  Grid,
  Card,
  Dropdown,
  Menu,
  Header,
  Form,
  Input,
  Icon,
  Segment,
  Container,
  Label,
  Divider,
  List
} from "semantic-ui-react";
import Formx from "./Formx";
const style = {
  hang: {
    fontFamily: "Akkurat",
    background: "inherit",
    fontWeight: "lighter",
    borderColor: "white"
  }
};
const  header = {
  fontWeight: "500",
  fontSize: "20px",
  fontFamily: "Rubik",
  color: "#595959",
  height: "24px",	
  width: "95px",
  letterSpacing: "0.71px",
  lineHeight: "24px",
  textDecoration: "underline",
  marginTop: "20px",
  marginLeft: "17px",
  marginRight: "255px",




};
const  headline = {
  marginLeft: "13px",
  marginRight: "36px",
  marginTop: "6px",
  marginBottom: "0px",
  height: "85px",	
  width: "318px",
  color: "#3F691A",
  fontFamily: "Rubik",
  fontSize: "42px",
  fontWeight: "300",
  letterSpacing: "1.5px",
  lineHeight: "42px",
    textAlign: "left",

};
const  icon_style = {
  color: "#3F691A",
};
const description_formatting = {
  marginLeft: "13px",
  marginRight: "15px",
  marginTop: "2px",
  textAlign: "left",

  // Get this padding bottom precisely
  paddingBottom: "30px",
  height: "88px",	
  width: "339px",
};
class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carYear: "",
      carMake: "",
      carModel: "",
      carStyle: ""
    };
  }

  //<div style={{marginLeft:"13px",marginTop:"10px",marginRight:"36px",width:"318px",height:"49px"}}>
  //Selling for 10,000
//</div>
  //TODO friend options should after the first dropdown be dynamically rendered from our backend, because we know what brands had cars in 2020 or 2019, and keep narrowing
  //more and more
  yearError() {
    // If they made a selection it wouldn't be none
    if (this.state.carYear == "") {
      console.log("I detected an error in the year");
    }
  }
  handleChange = (e, { value }) => {
    this.setState({ carYear: value });
    this.props.stateLink(this.props.identifier, this.state);
  };
  checkError() {
    console.log("I got called!!");
  }
  render() {
    return (
      <Card style={{marginLeft:"43px",width:"367px",height:"397px"}}>
        <Header as="h3" textAlign={'center'} style={header}> Essential </Header>
        <div  textAlign={'left'} style={headline}>SOFT WOOD BUNDLE        <span style={{fontFamily:"Rubik",letterSpacing:".43px",lineHeight:"17px",fontSize:"12px",width:"127px",height:"17px",marginRight:"0px"}} >      View more detail &gt; </span> </div>
        <div style={{marginLeft:"13px",marginTop:"10px",marginRight:"36px",width:"318px",height:"49px",textAlign:"left"}}>
          Selling for 
          <div style={{color:"#3F691A",fontFamily:"Rubik",fontSize:"21px",fontWeight:"500",letterSpacing:".43px",lineHeight:"24px"}}>$10,000 <Icon color={'grey'} name='question circle outline'/>
          </div>
          </div>
       
        <Divider section style={{marginTop:"15px",marginBottom:"15px"}}/>
          <div style={description_formatting}>
          Key Traits
          <List>
            <List.Item>
            <List.Icon style={icon_style} name='square full' />
    <List.Content>Find the best price</List.Content>
            </List.Item>
            <List.Item>
            <List.Icon style={icon_style} name='square full' />
    <List.Content>Ability to track your orders</List.Content>
            </List.Item>
            <List.Item>
            <List.Icon style={icon_style} name='square full' />
    <List.Content>24 hours phone support </List.Content>
            </List.Item>
          </List>
          </div>
          <Divider section style={{marginTop:"0px",marginBottom:"0px"}}/>
          <Button style={{paddingLeft:"16px",paddingTop:"13px",paddingBottom:"13px",paddingRight:"16px",marginLeft:"24px",marginTop:"15px",marginRight:"24px",marginBottom:"16px",width:"319px",height:"42px",background:"#3F691A",color:"#FFFFFF"}}> SELECT </Button>



    </Card>
    );
  }
}
export default Type;
