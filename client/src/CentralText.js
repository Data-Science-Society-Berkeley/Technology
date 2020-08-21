import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

let endpoint = "http://localhost:8080";
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
)

}
}
export default CentralText;
