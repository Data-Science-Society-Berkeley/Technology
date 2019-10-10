import React, { Component } from "react";
import { Button,Image,Grid,Card, Header, Form, Input, Icon } from "semantic-ui-react";
const container = {
   display: "flex",
   marginLeft: "auto",
   marginRight: "auto"
};
const center = {
    width: "200px",
    padding: 0,
    border: "none",
    outline: "none",
    background: "none",
};
const centerblue = {
   background: "#3d72b4",
   display: "flex",
};
const white = {
    background: 'white',
};
class Formx extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div style={container}>
      < div style={white} >
        <Form>
        <Grid>
            <Grid.Column floated='left' width={6}>
            <Form.Field style={center}>
            <input placeholder='Zipcode'/>
            </Form.Field>
        </Grid.Column>
        <Grid.Column floated='right' >
            <Button size= "medium" type='submit' style={centerblue}>Submit</Button>
        </Grid.Column>
        </Grid>
        </Form>
     < /div>
    </div>
    )
  }
}
export default Formx;
