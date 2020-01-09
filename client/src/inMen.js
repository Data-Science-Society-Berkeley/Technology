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
const tabText = {
  width: "109px",	
    color: "#595959",	
    fontFamily: "Rubik",	
    fontSize: "16px",	
    letterSpacing: "0.57px",	
    lineHeight: "19px",	
    marginLeft: "48px",
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
  fontFamily: "Rubik Regular",
  fontSize: "16px",
  letterSpacing: "0.57px",
  lineHeight: "19px",
  background: "#F6F7F6",
  color: "#595959",
  fontWeight: "300",
};
const phone= {
  color: "#3F691A",
};
class InMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      <Menu  style={{marginTop: '19px', boxShadow: "none",
  border: "none",}}>
      <Menu.Item style={tabs}>
        <Link to={"/lumber"}>
        <div style={tabText}>
            My best deals
            </div>
            </Link>
      </Menu.Item >
      <Menu.Item style={tabs}>
      <Link to={"/orders"}>
        <div style={tabText}>
            My Orders
            </div>
            </Link>
      </Menu.Item >
      <Menu.Item style={tabs}>
      <Link to={"/profile"}>
        <div style={tabText}>
            Edit Profile
            </div>
            </Link>
      </Menu.Item >

      <Grid.Column style={rightText} fluid >
        <table style={boxedText}>
        <tr>

        <td style={insideTextL}>
            These deals end in
            </td>
            <td style={insideTextR}>
            10. 21. 24
            </td>
            </tr>
            </table>
          <Button style={buttonStyle}>
            Log Out
          </Button>
      </Grid.Column >
      </Menu>
      </div>
    )

}
}

export default InMenu;
