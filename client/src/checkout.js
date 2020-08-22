import React, { Component } from "react";
import axios from "axios";
import {Grid,Card,Divider,Icon,Button,Menu,Popup  } from "semantic-ui-react";
import { Link  } from 'react-router-dom';
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "24px",
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
const navbar = {
  color: "#759E33",
  fontFamily: "Overpass",	
  fontSize: "16px",	
  fontWeight: 600,
  lineHeight: "25px",
  marginLeft: "13px",
  marginTop: "9px",
  marginBottom: "0px",
};
const call = {
  height: "24px",	
    width: "333px",	
    color: "#BBBBBB",	
    fontFamily: "Rubik",	
    fontSize: "20px",	
    letterSpacing: "0.71px",
    marginTop: "29px",
    marginLeft: "352px",
    marginRight: "24px",
    lineHeight: "24px",
    whiteSpace: "nowrap",
};
const gridS = {
  height: "74px",	
  width: "1366px",	
};
const tabs = {
  height: "60px",	
  width: "206px",	
};
const phone= {
  color: "#3F691A",
};
const tabText = {
  width: "109px",	
    color: "#595959",	
    fontFamily: "Rubik",	
    fontSize: "16px",	
    letterSpacing: "0.57px",	
    lineHeight: "19px",	
    marginTop: "21px",
    marginBottom: "20px",
    textAlign: "center"};
const buttonStyle = {
      marginRight: "24px",
      marginLeft: "1000px",
      marginTop: "5px",
      marginBottom: "20px",
      height: "45px",	
      width: "136px",
      fontFamily: "Rubik",
      fontSize: "16px",
      letterSpacing: "0.57px",
      lineHeight: "19px",
      background: "#F6F7F6",
      color: "#595959",
      fontWeight: "400",
    };
const border_select = {
      borderBottom: "2px solid #3F691A",
      marginLeft: "32px",
    };
// Link to the home page, but keep signed in when clicking on Lumber.io but log out purely
// when using the logout button
function MenuBar(props) {
  return (
    <div>
    <Grid fluid padded={false} columns={2} style={gridS}>
      <Grid.Row fluid stye={greenBut}>
      <Grid.Column>
      <Link to={"/"} style={navbar}>
    Lumber.io
    </Link>
    </Grid.Column>
    <Grid.Column >
      <div style={call}>              Call <span style={phone}>778-329-3030</span> for assistance </div>
          </Grid.Column>
  </Grid.Row>
  </Grid>
  <Menu  fluid style={{marginTop: '19px', boxShadow: "none",border: "none",}}>
  <Menu.Item style={tabs}>
  <div style={border_select}>
    <div style={tabText}>
        Summary
        </div>
        </div>

  </Menu.Item >
  <div style={{width: '1160px'}}>
  <Link to={"/"}>
  <Button style={buttonStyle} floated='right'>
            Log Out
          </Button>
  </Link>
        </div>
  </Menu>
  </div>
  );
}
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orderInfo:[],

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
<MenuBar/>
<div style={{ marginTop: "0px",marginRight: "0px", background: "#F6F7F6",width: "1450px"}}>
<Grid fluid divided='vertically' style={gridoffset}>
            <Grid.Row columns={2}>
                <Grid.Column>
                <Card style={{marginLeft:"33px",width:"606px",height:"137px"}}>
                  <div class='date' >
                    Guaranteed Delivery date: Jan 6. 2020
                  </div>
                  <Divider style={{marginTop:"0px",marginLeft:"21px",marginRight:"24px",marginBottom:"16px"}}/>
                  <div class='type'>
                    SOFT WOOD BUNDLE
                    <span class='change-order'>Change</span>
                  </div>

                  <div class='seller'>
                    SOLD BY IAMCANADAMILL
                  </div>
    </Card>
    <Card style={{marginLeft:"33px",width:"606px",height:"231px"}}>
                  <div class='shipping-details' >
                    Shipping Details <span class='change-order'>Change</span>
                  </div>
                  <Divider style={{marginTop:"0px",marginLeft:"21px",marginRight:"24px",marginBottom:"18px"}}/>
                  <div class='address'>
                    First Name Last Name
                    <br/>
                    1234-00 crescent street
                    <br/>
                    Toronto, Ontario 1A2 3B4
                    <br/>
                    Canada
                    <br/>
                    Phone 7781231234
                    <br/>
                    <br/>
                    <span style={{marginLeft:"0px"}} class='change-order'>Add Delivery Instructions</span>
                  </div>
    </Card>
    <Card.Group itemsPerRow={2 } style={{marginLeft:"33px",marginRight:"0px",width:"606px",height:"123px"}}>
    <Card style={{marginLeft:"0px",width:"289px",height:"123px"}}>
                    <div style={{marginTop:"17px",marginLeft:"21px",marginRight:"30px"}}>
                    <div class="payment-method">Payment Method </div> <span class="change-copy"> Change </span>
                    </div>
                    <Divider style={{marginTop:"10px",marginBottom:"9px"}}/>
                   <Card.Description  style={{marginLeft:"32px",marginBottom:"18px"}}>
                       <Icon size="large" name="cc visa">
                       </Icon>
                       <span class="ending-card" >Ending in 0001</span>
                   </Card.Description>
                    </Card>
                    <Card style={{marginLeft:"13px",marginRight:"0px",width:"289px",height:"123px"}}>
                    <div style={{marginTop:"17px",marginLeft:"21px",marginRight:"30px"}}>
                    <div class="payment-method"> Billing Address </div> <span class="change-copy"> Change </span>
                    </div>
                    <Divider style={{marginTop:"10px",marginBottom:"9px"}}/>
                   <Card.Description  style={{marginLeft:"32px",marginBottom:"18px"}}>
                       <span class="ending-card" >Same as shipping address</span>
                   </Card.Description>
                    </Card>

    </Card.Group>
    </Grid.Column>
                    <Grid.Column>
                    <Card style={{marginTop:"0px",marginLeft:"16px",marginRight:"285px",width:"398px",marginBottom:"0px",height:"396px"}}>
                    <Card.Header>
                    <Button className="checkout-button"> PLACE YOUR ORDER </Button>
                    </Card.Header>
                    <div className="checkout-header">
                      Order Summary
                    </div>
                    <div className="checkout-info">
                      Items: <span class="checkout-amount">CDN$ 9500.99</span>
                      <br/>
                      Shipping & Handling <span class="checkout-amount">CDN$ 9500.99</span>
                    </div>
                    <Divider style={{marginLeft:"24px",marginRight:"22px"}}/>
                    <div className="checkout-info">
                      Total before tax: <span class="checkout-amount">CDN$ 9609.61</span>
                      <br/>
                      Estimated GST/HST: <span class="checkout-amount">CDN$ 14.73</span>
                      <br/>
                      Estimated PST/RST/QST: <span class="checkout-amount">CDN$ 29.39</span>
                    </div>
                    <Divider style={{marginLeft:"24px",marginRight:"22px",marginBottom:"9px",marginTop:"9px"}}/>
                    <div class="total-header">
                      Total 
                      <div class="total-cdn">
                        CDN$ 9999
                      </div>
                    </div>
                    <div class="savings-footer">
                      <div class="savings-checkout">
                      <Popup className="pop-up" content='On average, a lumber trader would take 7-12% commision from each trade. You save by using lumber.io'
                      trigger={<Icon name="info circle" />} />
                      <span style={{float:"right"}}>	My Savings:			CDN$700 - $1200</span>
                      </div>
                    </div>
                    </Card>
                    </Grid.Column>
            </Grid.Row>
  </Grid>
  </div>
    </div>
)

}
}
export default Checkout;
