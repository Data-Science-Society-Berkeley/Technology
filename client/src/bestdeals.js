import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Table } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Type from "./lumtype"
import Formx from "./Formx"
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "19.5px",
          textAlign:"center",
          fontFamily: "	OverpassSemiBold",
};
const mybigtext = {
          fontSize: "50px",
          fontWeight: "bold",

};
const mymidtext = {
    fontSize: "20px",
    fontWeight: "lighter"
};
const submit = {
    width : "50%",
    height: "180px",
    margin: "0 auto",
};
const greenBut = {
    background: "#759E33",
    color: "white",
  };
const tableStyle = {
    width : "481px",
    height: "57px",
    marginLeft: "42.5px",
    marginRight: "842.5",
};
const leftTable = {
    width : "135px",
    height: "19px",
    color: "#595959",
    fontFamily: "Rubik",
    fontSize: "16px",
    letterSpacing: "0.57px",
    lineHeight: "19px",
};
const rightTable = {
    width : "201px",
    height: "31px",
    color: "#BBBBBB",
    fontFamily: "Rubik",
    fontSize: "12px",
    letterSpacing: "0.57px",
    lineHeight: "14px",
    textAlign: "center",
    marginLeft: "19px",
    marginRight: "19.5",
    marginTop: "13.5",
    marginRight: "12.5",
};
class BestDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
        types:[<Type/>],

    };
      this.join=this.join.bind(this);

  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
    console.log(value.target.value)
  };
  join(){
      // this function makes a call to our backend with the current email in the box
      // TODO call the backend from here
      console.log(this.state["email"])
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    render() {
    return (
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={1}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Table celled columns style={tableStyle}>
                        <Table.Body>
                            <Table.Row>
                            <Table.Cell className='bundle-purchase'>
                                <div style={leftTable}>
                                Bundle Purchase
                                    </div>
                            </Table.Cell>
                            <Table.Cell>
                            <div style={rightTable}>
                                Individual Purchase (coming soon, click to learn more)
                                </div>
                            </Table.Cell>
                            </Table.Row>
                </Table.Body>
  </Table>
                    <Card.Group>{this.state.types}</Card.Group>
                    </Grid.Column>
            </Grid.Row>
  </Grid.Row>
  </Grid>
)

}
}
export default BestDeals;
