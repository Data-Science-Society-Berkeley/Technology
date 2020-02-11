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
  List,
  Popup,
} from "semantic-ui-react";
import { Link} from 'react-router-dom';

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
  color: "black",
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
const  custom_line_height = {
  lineHeight: "17px",
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
    this.updateState = this.updateState.bind(this)
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
  updateState(){
    this.props.updateState(this.props)
  }
  handleChange = (e, { value }) => {
    this.setState({ carYear: value });
    this.props.stateLink(this.props.identifier, this.state);
  };
  checkError() {
    console.log("I got called!!");
  }
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClose = () => {
    this.setState({ open: false })
  }
  // The link from the View more info should be a variable link later...
  render() {
    console.log(this.props)
    // TODO fix the link instead of just linking to softwood, dynamically create a route
    // TODO fix the key traits
    // TODO fix the essential
    return (
      <Card style={{marginLeft:"43px",width:"367px",height:"397px"}}>
        <Header as="h3" textAlign={'center'} style={header}> Client </Header>
        <div  textAlign={'left'} style={headline}>
          {this.props.type}
           </div>

        <div class="lumber-text" style={{lineHeight: "17px",marginLeft:"13px",marginTop:"10px",marginRight:"36px",width:"318px",height:"49px",textAlign:"left"}}>
          Selling for 
          <div style={{color:"black",fontFamily:"Rubik",fontSize:"21px",fontWeight:"500",letterSpacing:".43px",lineHeight:"24px"}}>{this.props.price}
          <Popup className="pop-up" content=''
                       trigger={<Icon color={'grey'} name="question circle outline" />} />
          </div>
          </div>
       
        <Divider section style={{marginTop:"15px",marginBottom:"15px"}}/>
          <div style={description_formatting}>
          </div>
          <Divider section style={{marginTop:"0px",marginBottom:"0px"}}/>
          <Link to={`/client:${this.props.id}`}>
          <Button onClick={this.updateState} style={{paddingLeft:"16px",paddingTop:"13px",paddingBottom:"13px",paddingRight:"16px",marginLeft:"24px",marginTop:"15px",marginRight:"24px",marginBottom:"16px",width:"319px",height:"42px",background:"#6699FF",color:"#FFFFFF"}}> SELECT </Button>
          </Link>
    </Card>
    );
  }
}
export default Type;
