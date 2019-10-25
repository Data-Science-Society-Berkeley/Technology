import React, { Component } from "react";
import { Header,Button,Form } from 'semantic-ui-react'

const style = {
    button: {
        width: "500px",
        background: "White",
        margin:"auto",
        display: "inlineBlock",
        marginTop: "40px",
        height:"125px"
    },
}
class AddDriver extends Component{
  constructor(props) {
    super(props);
  }
  onSubmit = () => {
          this.props.createDriver();
  };
    render() {
        return (
            <div style={style.button}>
            <div style = {{marginLeft:"20px",marginRight:"20px"}}>
            <Header> </Header>
            <div>
            Your coverage depends on it, so please add all eligible drivers to your quote. Once added, you can include or (in most states) exclude them from your quote.
            </div>
            <Button type='submit' fluid onClick={this.onSubmit}> Add Another Driver </Button>
            </div>
            </div>
        )
    }
}
export default AddDriver
