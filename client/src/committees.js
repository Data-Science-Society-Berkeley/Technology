import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

let endpoint = "http://localhost:8080";
const gridoffset = {
          marginLeft:"62px",
          marginTop: "42px",
          textAlign:"center",
          fontFamily: "Montserrat"
};



const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "97px",
          fontSize: "64px",
          color:"#8CD6D1",
    width:"438px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"74px",
    marginBottom:"42px",
};


const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "73px",
  fontSize: "48px",
  color:"#8CD6D1",
  fontStyle: "normal",
  textAlign:"center",
  marginLeft:"30px",
  marginTop:"19px",
};
const link = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "73px",
    fontSize: "48px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
  };
class Commit extends Component {
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

        <Header style={mybigtext}> TEAMS</Header>
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={3}>
                <Grid.Column>
                    <div style={{height:"588px",width:"434px",border: "1px solid #000000",boxSizing: "borderBox"}}> 
                    <Header style={mymidtext}> <Link to="decal"style={link}>Decal</Link></Header>
                    </div>
                </Grid.Column>
                <Grid.Column>
                <div style={{height:"588px",width:"434px",border: "1px solid #000000",boxSizing: "borderBox"}}>
                <Header style={mymidtext}> <Link to="acadev" style={link}>Acadev</Link></Header>
                
                 </div>

                </Grid.Column>
                <Grid.Column>
                <div style={{height:"588px",width:"434px",border: "1px solid #000000",boxSizing: "borderBox"}}> 
                <Header style={mymidtext}> <Link to="consulting" style={link}>Consulting</Link></Header>

                </div>

                </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>

)

}
}
export default Commit;
