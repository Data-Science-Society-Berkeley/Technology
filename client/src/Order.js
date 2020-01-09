import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Table,Segment,List,Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Order from "./order_prim"
import Formx from "./Formx"
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "19.5px",
          textAlign:"center",
          fontFamily: "	OverpassSemiBold",
          background: "#F6F7F6",
          paddingBottom: "40px",
          width: "1366px",
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
    width : "601px",
    height: "57px",
    marginLeft: "42.5px",
    marginRight: "722.5",
};
const rightTable = {
    color: "#595959",
    fontFamily: "Rubik",
    fontSize: "16px",
    letterSpacing: "0.57px",
    lineHeight: "19px",
    textAlign: "center",

};
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
        orders:[<Order/>,<Order/>,<Order/>],

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
<Grid fluid divided='vertically' style={gridoffset}>
    <Grid.Row columns={1}>
            <Grid.Row columns={1} stretched>
                <Grid.Column>
                    <Table celled columns style={tableStyle}>
                        <Table.Body>
                            <Table.Row>
                            <Table.Cell >
                                <div style={rightTable}>
                                All Orders
                                    </div>
                            </Table.Cell>
                            <Table.Cell>
                            <div style={rightTable}>
                                Open Orders
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                            <div style={rightTable}>
                                Cancelled Order
                                </div>
                            </Table.Cell>
                            </Table.Row>
                </Table.Body>
  </Table>
                    <Card.Group>{this.state.orders}</Card.Group>
                    </Grid.Column>
            </Grid.Row>
  </Grid.Row>
  </Grid>
)

}
}
export default Orders;
