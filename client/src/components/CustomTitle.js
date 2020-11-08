import React from 'react';
import { Grid } from "semantic-ui-react";

function CustomTitle(props) {
  return (
    <Grid.Row id={props.id} style={{ marginTop: "80px" }} centered>
      <Grid.Column width={2}>
        <div style={{ width: "200px", height: "13px", background: "#FFC54A", margin: "30px 0px" }}> </div >
      </Grid.Column>
      <Grid.Column style={{
        fontFamily: "Montserrat", fontWeight: 500, lineHeight: "78px", fontSize: "64px", color: "#8CD6D1", fontStyle: "normal",
        position: "relative", left: "-100px", textAlign: "center"
      }} width={11}>
        {props.title}
      </Grid.Column>
    </Grid.Row>
  );
}

export default CustomTitle