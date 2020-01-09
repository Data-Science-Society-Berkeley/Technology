import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card,Checkbox,Divider, Header, Form, Input,Dropdown, Icon, Label,Button,Table,Segment,List,Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Type from "./lumtype"
import Formx from "./Formx"
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
      text: '1 x 3',
      value: '1 x 3',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: '1x4',
        text: '1 x 4',
        value: '1 x 4',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: '1x6',
        text: '1 x 6',
        value: '1 x 6',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: '1x8',
        text: '1 x 8',
        value: '1 x 8',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: '2x2',
        text: '2 x 2',
        value: '2 x 2',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: '2x4',
        text: '2 x 4',
        value: '2 x 4',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
        key: '2x6',
        text: '2 x 6',
        value: '2 x 6',
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
                        Lumber Preferences
                    </div>
                    <div>
                    <Button style={{marginLeft:"24px",background:"#3F691A"}} compact className="success-check-wood" icon='check circle outline' content='Hardwood' />
                    <Button style={{marginLeft:"16px",background:"#FFFFFF"}} className="fail-check-wood"  content='Softwood' /> 
                    <Button style={{marginLeft:"16px",background:"#3F691A"}} className="success-check-wood" icon='check circle outline' content='Maple' /> 
                    <Button style={{marginLeft:"16px",background:"#FFFFFF"}} className="fail-check-wood" content='Oak' />
                    </div>
        <Form.Field>
            <div class="lumber-preferences" style={{marginBottom:"6.83px"}}> 
                Length Preferences
            </div>
        <Form.Dropdown style={{marginLeft:".5px",marginBottom:"16.5px",marginRight:"394.5px",width:"208px"}}
        placeholder='Select Length(ft)'
        fluid
        selection
        options={friendOptions}
  />
        </Form.Field>    
        </Form>
                    </Card>
                    <Card style={{marginTop:"16px",marginLeft:"16px",marginRight:"29px",marginBottom:"0px",width:"637px",height:"120px"}}>
                    <div class="email">Email</div>
                    <Form>
                    <Form.Field style={{marginLeft:"26px",marginRight:"0px",marginBottom:"39px",width:"613px"}}>
                        <Checkbox style={{fontSize:"16px",fontHeight:"24px"}} className="terms" label='Yes, I would like lumber.io to contact me about new bundles and other
                        promotional information' />
                        </Form.Field>
                        </Form>
                    </Card>
                    <Card style={{marginTop:"16px",marginLeft:"16px",marginRight:"29px",width:"637px",height:"108px"}}>
                    <div style={{marginTop:"17px",marginLeft:"21px",marginRight:"377px"}}>
                    <div class="payment-method">Payment Method </div> <span class="change-copy"> Change </span>
                    </div>
                    <Divider style={{marginTop:"10px",marginBottom:"9px"}}/>
                   <Card.Description  style={{marginLeft:"32px",marginBottom:"18px"}}>
                       <Icon size="large" name="cc visa">
                       </Icon>
                       <span class="ending-card" >Ending in 0001</span>
                   </Card.Description>
                    </Card>
                    </Grid.Column>
            </Grid.Row>
  </Grid>
    </div>
)

}
}
export default Profile;
