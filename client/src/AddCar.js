import React, { Component } from "react";
import { Header, Button, Form } from "semantic-ui-react";

const style = {
  button: {
    width: "500px",
    background: "White",
    margin: "auto",
    display: "inlineBlock",
    marginTop: "40px"
  }
};
class AddCar extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = () => {
    this.props.createCar();
  };
  render() {
    return (
      <div style={style.button}>
        <div style={{ marginLeft: "0px", marginRight: "0px" }}>
          <Header> </Header>
          <Button type="submit" fluid onClick={this.onSubmit}>
            {" "}
            Create a List?{" "}
          </Button>
        </div>
      </div>
    );
  }
}
export default AddCar;
