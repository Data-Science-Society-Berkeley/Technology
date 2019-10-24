import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';

import Formx from "./Formx"
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "90px"
};
const mybigtext = {
    marginRight: '25px',
    marginLeft: "25px",
          fontSize: "50px",
          fontFamily: "Akkurat",
          fontWeight: "lighter"
};
const mymidtext = {
    marginRight: '15px',
    marginLeft: "15px",
    fontSize: "20px",
    fontFamily: "Akkurat",
    fontWeight: "lighter"
};
class CentralText extends Component {
  constructor(props) {
    super(props);
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    render() {
    return (
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
    <Grid.Column>
        <Grid divided='vertically'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h1'style={mybigtext}>
                        Drive Less. Save More
                        On Car Insurance.
                        </Header>
                    </Grid.Column>
            </Grid.Row>
    <Grid.Row columns={1}>
      <Grid.Column>
      <Header as= 'h1' style={mymidtext}>
        Car insurance based on how much you drive.
        Pay a low base rate then just pennies per mile.
        <br/>
        </Header>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Formx buttonClick={this.sendData.bind(this)}/>
    </Grid.Row>
    </Grid>
    </Grid.Column>
  </Grid.Row>
  </Grid>
)

}
}
export default CentralText;
