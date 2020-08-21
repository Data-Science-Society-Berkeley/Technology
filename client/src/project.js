import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
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
  marginLeft: "32px",
  marginRight: "848px",
  marginTop: "6px",
  marginBottom: "0px",
  height: "57px",	
  width: "410px",
  color: "#3F691A",
  fontFamily: "Rubik",
  fontSize: "48px",
  fontWeight: "300",
  letterSpacing: "1.71px",
  lineHeight: "42px",
  textAlign: "left",

};
const  icon_style = {
  color: "#3F691A",
};
const description_formatting = {
  marginLeft: "32px",
  marginRight: "1053px",
  marginTop: "24px",
  textAlign: "left",
  width: "205px",
};
const  seller = {
  marginLeft: "32px",
  marginRight: "1017px",
  marginTop: "0px",
  marginBottom: "33px",
  width: "241px",
  color: "#BBBBBB",
  fontFamily: "Rubik",
  fontSize: "20px",
  fontWeight: "500",
  letterSpacing: "0.71px",
  lineHeight: "24px",
  textAlign: "left",

};
//232 left is the margin when its at 876
// should be 425 normally
const  assist = {
  marginLeft: "425px",
  marginRight: "38px",
  marginTop: "33px",
  marginBottom: "16px",
  width: "183px",
  color: "#FFFFFF",
  background: "#3F691A",
  fontFamily: "Rubik",
  fontSize: "14.22px",
  fontWeight: "500",
  letterSpacing: "0.71px",
  lineHeight: "16px",
  textAlign: "center",
};
const  second_assist = {
  marginLeft: "425px",
  marginRight: "38px",
  marginTop: "0px",
  marginBottom: "29px",
  width: "183px",
  color: "#595959",
  background: "#",
  fontFamily: "Rubik",
  fontSize: "14.22px",
  fontWeight: "500",
  letterSpacing: "0.71px",
  lineHeight: "16px",
  textAlign: "center",
  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
};
class Project extends Component {
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
  updateState(){
    this.props.updateState(this.props)
  }
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
  // fix right margin for the first column formatting since now with respect to the column boundry
  // as opposed to card boundry
  render() {
    //TODO fix the arriving Wednesday, so that it gets the right day of the week
    return (
    
      <Card style={{marginLeft:"43px",width:"1290px",height:"234px"}}>
          <Menu borderless>
        <Menu.Item>
          <div class="order-placed" > Project Creation Date
            <br/>
            {this.props.date}
         </div>
        </Menu.Item>
        <Menu.Item>
          <div class="order-placed">Total Leads
            <br/>
            CDN ${this.props.total}
          </div>
        </Menu.Item>
        </Menu>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
        <div class="arriving" style={description_formatting} > Under Analysis </div>
    <div  style={headline}> {this.props.type}</div>
        </Grid.Column>
        <Grid.Column>
        <Link to={`/client/project:${this.props.id}`}> <Button  onClick={this.updateState} style={assist}> PROJECT DETAILS</Button> </Link>
          <Button style={second_assist}>DELETE PROJECT</Button>
          </Grid.Column>
        </Grid.Row>
        </Grid>

    </Card>
    );
  }
}
export default Project;
