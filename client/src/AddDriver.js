import React, { Component } from "react";
import { Button } from 'semantic-ui-react'

const style = {
    button: {
        background: "White",
        position: 'absolute',
        left: '50%',
        marginLeft: '-50px',
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
            <Button style={style.button} label="Add Driver" onClick={this.onSubmit}/>
        )
    }
}
export default AddDriver
