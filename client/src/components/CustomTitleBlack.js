import React from "react";
import { Grid } from "semantic-ui-react";

function CustomTitleBlack(props) {
  return (
    <Grid.Row id={props.id} style={{ marginTop: "4vw" }} centered>
      <Grid.Column
        style={{
          fontFamily: "Montserrat",
          fontWeight: 900,
          lineHeight: "5.5vw",
          fontSize: "4vw",
          color: "#000000",
          position: "relative",
          // left: "-7vw",
          textAlign: "center",
        }}
        width={10}
      >
        {props.title}
      </Grid.Column>
    </Grid.Row>
    
  );
}

export default CustomTitleBlack;
