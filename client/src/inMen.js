import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container, Image, Menu,Button, Grid,Label,Icon,List  } from 'semantic-ui-react';
const mynav = {
    background: "inherit",
    height: "75%",
    color: "#759E33",
    fontFamily: "Overpass",	
    fontSize: "16px",	
    fontWeight: 600,
    lineHeight: "25px",
    
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
const greenBut = {
  height: "86px",	
};
const gridS = {
  height: "74px",	
  width: "1366px",	
};
const tabs = {
  height: "60px",	
  width: "206px",	
};
// 48 became 32 since padding of menu items
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
const rightText = {
    marginLeft: "30px",
    display: "flex",
    textAlign: "center"};
const boxedText = {
      height: "45px",
      width: "310px",
      boxSizing: "border-box",
      border: "2px solid #3F691A",
      marginTop: "5px",
      marginBottom: "16px",
      
  };
  const insideTextL = {
    height: "19px",
    width: "183px",
    color: "#3F691A",
    fontFamily: "Rubik",
    fontSize: "16px",
    letterSpacing: "0.57px",
    lineHeight: "19px",
    paddingTop: "13px",
    paddingBottom: "13px",
    boxSizing: "border-box",
    marginLeft: "16px",
    display: "table-cell",
    borderRight: "2px solid #3F691A",

};
const insideTextR = {
  height: "19px",
  width: "86px",
  color: "#3F691A",
  fontFamily: "Rubik",
  fontSize: "16px",
  fontWeight: "500px",
  letterSpacing: "0.57px",
  lineHeight: "19px",
  borderSpacing: "13px",
  marginLeft: "16px",
  display: "table-cell",
};
const buttonStyle = {
  marginRight: "24px",
  marginLeft: "225px",
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
const phone= {
  color: "#3F691A",
};



class InMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '24',   // second for timer
      minutes: '21', // minutes for timer
      hours: '10',  // hours for timer
}
this.startCountDown = this.startCountDown.bind(this);
this.tick = this.tick.bind(this);
this.startCountDown()
this.setStyle = this.setStyle.bind(this);
}
//TODO fix so that will work for hours
  tick() {
    console.log(67)
    var hour = Math.floor(this.secondsRemaining / (60*60));
    var min = Math.floor((this.secondsRemaining - (hour * 60*60))/60);
    var sec = this.secondsRemaining -(hour*3600) - (min * 60);
    console.log(sec)
    this.setState({
      hours: hour,
      minutes: min,
      seconds: sec,
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
    this.setState({
      minutes: "0" + min,
     })
    }
    if (hour < 10) {
      this.setState({
        hours: "0" + hour,
       })
      }
    this.secondsRemaining--
    }
  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    let hours = this.state.hours;
    let seconds = this.state.seconds;
    console.log(hours*3600,seconds*1,time*60)
    this.secondsRemaining = time * 60 + hours*3600 + seconds*1;
    }
    setStyle(){
      this.border_lumber_select = {
        borderBottom: this.props.location.pathname =='/lumber' ? "2px solid #3F691A" : "",
        marginLeft: "32px",
      };
      this.border_profile_select = {
        borderBottom: this.props.location.pathname =='/profile' ? "2px solid #3F691A" : "",
        marginLeft: "32px",
      };
      this.border_order_select = {
        borderBottom: this.props.location.pathname =='/orders' ? "2px solid #3F691A" : "",
        marginLeft: "32px",
      };
    }
  render() {
    this.setStyle()
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
          <div style={call}>              
          Call <span style={phone}>778-329-3030</span> for assistance </div>
              </Grid.Column>

      </Grid.Row>
      </Grid>
      <Menu size="none" style={{marginTop: '19px', paddingBottom: '0px',boxShadow: "none",
  border: "none",marginBottom: '0px',	height: "60px"}}>
      <Menu.Item style={tabs}>
      <div style={this.border_lumber_select}>
        <Link to={"/lumber"}>
        <div style={tabText}>
            My best deals
            </div>
            </Link>
            </div>
      </Menu.Item >
      <Menu.Item style={tabs}>
      <div style={this.border_order_select}>
      <Link to={"/orders"}>
        <div style={tabText}>
            My Orders
            </div>
            </Link>
            </div>
      </Menu.Item >
      <Menu.Item style={tabs}>
      <div style={this.border_profile_select}>
      <Link to={"/profile"}>
        <div style={tabText}>
            Edit Profile
            </div>
            </Link>
            </div>
      </Menu.Item >

      <Grid.Column style={rightText} fluid >
        <table style={boxedText}>
        <tr>

        <td style={insideTextL}>
            These deals end in
            </td>
            <td style={insideTextR}>
            {this.state.hours}: {this.state.minutes}: {this.state.seconds}
            </td>
            </tr>
            </table>
            <Link to={"/"}>
          <Button style={buttonStyle}>
            Log Out
          </Button>
          </Link>
      </Grid.Column >
      </Menu>
      </div>
    )

}
}

export default InMenu;
