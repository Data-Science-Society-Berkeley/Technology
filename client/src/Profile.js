import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card,Checkbox,Divider, Header, Form, Input,Dropdown, Icon, Label,Button,Table,Segment,List,Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "32px",
          fontFamily: "	OverpassSemiBold",
          background: "#F6F7F6",
          paddingBottom: "40px",
          width : "1366px",

};
const friendOptions = [
    {
      key: '1x3',
      text: 'Option1',
      value: 'Option1',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: '1x4',
        text: 'Option2',
        value: 'Option2',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: '1x6',
        text: 'Option3',
        value: 'Option3',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: '1x8',
        text: 'Option4',
        value: 'Option4',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: '2x2',
        text: 'Option5',
        value: 'Option6',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: '2x4',
        text: 'Option7',
        value: 'Option7',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
        key: '2x6',
        text: 'Option8',
        value: 'Option8',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]
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
    marginLeft: "34.5px",
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
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
        types:[],
        favorites:[["Hardwood",true],["Softwood",false],["Maple",true],["Oak",false]],
    };
      this.setStyle = this.setStyle.bind(this);
      this.join=this.join.bind(this);
      this.setButton=this.setButton.bind(this);
      console.log(this.state.favorites)

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
    setButton = (e, data) => {
      // access to e.target here
      console.log(data,data.index);
      const fav = this.state.favorites.slice()
      fav[data.index][1] = !fav[data.index][1]
      this.setState({favorites: fav})
  }
    setStyle(){
      //TODO ensure first guys margin is effectively 24 
      const favorites = this.state.favorites;
      console.log(favorites,favorites[0])
      var result = [];
      for (var i = 0; i < favorites.length; ++i) {
          var margin_left = i == 0? "24px":"16px"
          console.log(favorites[i][1])
          if (favorites[i][1]){
            result.push(<Button style={{marginLeft:margin_left,background:"blue",color:"white"}} index={i} onClick={this.setButton} className="success-check-wood" icon='check circle outline' content={favorites[i][0]} />);
          } else {
            result.push(<Button style={{marginLeft:margin_left,background:"#FFFFFF",color:"#6699ff"}} index={i} onClick={this.setButton} className="fail-check-wood"  content={favorites[i][0]}  /> );
          }
      }
      return result
    }
    render() {
      let return_array = this.setStyle()
    return (
<div>
<Grid fluid divided='vertically' style={gridoffset}>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <h1  style={{marginLeft: "46px",marginBottom: "0px",width: "129px",height: "35px"}} class='edit-profile'>Edit Profile</h1>
                    <h2  style={{marginLeft: "46px",marginTop: "0px"}} class='short-description'>Short Description</h2>
                    <Card style={{marginLeft:"46px",width:"637px",height:"467px"}}>
                        <h1 class="details" style={{marginLeft:"10px",marginTop:"16px",marginBottom:"16px"}}>Details</h1>
                      <Form>
                      <Form.Field>
                          <div class="email-address" style={{marginLeft:"10px",marginBottom:"7.5px"}}>Name:</div>
                          <input style={{marginLeft:"10px",marginRight:"21px",width:"607px"}}/>
                        </Form.Field>
                        <Form.Field style={{marginTop:"16px"}}>
                          <div class="email-address"  style={{marginLeft:"10px",marginBottom:"7.5px"}}>Email Address</div>
                          <input style={{marginLeft:"10px",marginRight:"21px",width:"607px"}}/>
                        </Form.Field>
                        <Form.Field style={{marginTop:"16px"}}>
                          <div class="email-address"  style={{marginLeft:"10px",marginBottom:"7.5px"}}>Password</div>
                          <input style={{marginLeft:"10px",marginRight:"21px",width:"607px"}}/>
                        </Form.Field>
                        <Form.Field style={{marginTop:"16px"}}>
                          <div class="email-address"  style={{marginLeft:"10px",marginBottom:"7.5px"}}>Street address and/or postal code (postal)</div>
                          <input style={{marginLeft:"10px",marginRight:"21px",width:"607px"}}/>
                        </Form.Field>
                        <Form.Field style={{marginTop:"16px",marginBottom:"31px"}}>
                          <div class="email-address"  style={{marginLeft:"10px",marginBottom:"7.5px"}}> Phone number (optional) </div>
                          <input style={{marginLeft:"10px",marginRight:"21px",width:"607px"}}/>
                        </Form.Field>
                      </Form>
                    </Card>
                    <Form style={{marginLeft:"46px",width:"372px"}}>
                    <Form.Field>
                          <div style={{marginBottom:"7.5px"}} class="email-address"  >Verify your current password to save changes</div>
                          <input/>
                        </Form.Field>
                        <div>
                        <Button className="group">SAVE CHANGES</Button>
                        <Button className="cancel">CANCEL </Button>
                            </div>
                    </Form>
                    </Grid.Column>
                    <Grid.Column>
                    <Card style={{marginTop:"84px",marginLeft:"16px",marginRight:"29px",width:"637px",marginBottom:"0px",height:"208px"}}>
                    <Form style={{marginLeft:"24px",marginTop:"16px",marginBottom:"16.5px"}}>
                    <div class="lumber-preferences" style={{marginBottom:"8px"}}> 
                        Social Handle Preferences
                    </div>
                    <div>
                      {return_array}
                    </div>
        <Form.Field>
            <div class="lumber-preferences" style={{marginBottom:"6.83px"}}> 
                Dropdown Preferences
            </div>
        <Form.Dropdown style={{marginLeft:".5px",marginBottom:"16.5px",marginRight:"394.5px",width:"208px"}}
        placeholder='Select an Option'
        fluid
        selection
        options={friendOptions}
  />
        </Form.Field>    
        </Form>
                    </Card>
                    </Grid.Column>
            </Grid.Row>
  </Grid>
    </div>
)

}
}
export default Profile;
