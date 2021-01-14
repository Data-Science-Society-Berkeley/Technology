import React from "react";
import { Grid } from "semantic-ui-react";

function CustomTitle(props) {
  return (
    <Grid.Row id={props.id} style={{ marginTop: "6vw" }} centered>
      <Grid.Column width={3} style={{ position: "relative" }}>
        <div
          style={{
            height: "1vw",
            background: "#FFC54A",
            marginTop: "2.5vw",
            left: "30%",
            position: "relative",
          }}
        ></div>
      </Grid.Column>
      <Grid.Column
        style={{
          fontFamily: "Montserrat",
          fontWeight: 500,
          lineHeight: "5.5vw",
          fontSize: "4vw",
          color: "#8CD6D1",
          position: "relative",
          // left: "-7vw",
          textAlign: "center",
        }}
        width={10}
      >
        {props.title}
      </Grid.Column>
      <Grid.Column width={3}>
        <div
          style={{
            height: "1vw",
            background: "#FFC54A",
            marginTop: "2.5vw",
            right: "30%",
            position: "relative",
          }}
        ></div>
      </Grid.Column>
    </Grid.Row>
  );
}

export default CustomTitle;
