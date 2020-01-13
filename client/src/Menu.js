import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Image, Menu,Button,Portal,Header,Card ,Form ,Input,Divider} from 'semantic-ui-react';
let endpoint = "http://localhost:8080";

const mynav = {
    background: "inherit",
    height: "75%",
    color: "#759E33",
    fontFamily: "Overpass",	
    fontSize: "16px",	
    fontWeight: 600,
    lineHeight: "25px",
    boxShadow: "none",
    border: "none"
};
// since menu has 10 margin
const form_formatting = { marginLeft: "36px", marginRight: "32px",marginTop: "10px" };
const pref_formatting = { marginLeft: "37px", marginRight: "20px",marginTop: "25px" };

const submit = {
  marginRight: "519px",
  marginBottom: "42px",
  background: "#3F691A"
};
const navbar = {
  color: "#759E33",
  fontFamily: "Overpass",	
  fontSize: "16px",	
  fontWeight: 600,
  lineHeight: "25px",
  marginLeft: "100px",
};
const greenBut = {
  background: "#759E33",
  color: "white",
};
const lip = {
  color: "#759E33",
};
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    activeItem: "register",
    email: "",
    name: "",
    password: "",
    preferredLumber: "hardwood",
    preferredLength: "100",
    Location: "SF",
    // TODO set these to the correct default values
    errEmail: false,
    errName: false,
    errPassword: false,
    errLumber: false,
    errLength: false,
    errLoc: false,
    errSubmit: false,
    favorites:[["Hardwood",false],["Softwood",false],["Maple",false],["Oak",false],
    ["Spruce",false],["Pine",false],["Fir",false],["Cedar",false],["Other",false]],
    lengths:[["1 x 3",false],["1 x 4",false],["1 x 6",false],["1 x 8",false],
    ["2 x 2",false],["2 x 4",false],["2 x 6",false]],

  };
  this.loadCard = this.loadCard.bind(this)
  this.loadNext = this.loadNext.bind(this)
  this.validateForm = this.validateForm.bind(this)
  this.registerUser= this.registerUser.bind(this)
  this.setLumStyle = this.setLumStyle.bind(this);
  this.setLenStyle = this.setLenStyle.bind(this);
  this.setButton=this.setButton.bind(this);


  }
  registerUser = () => {
    let email = this.state.email
    let name = this.state.name
    let password = this.state.password
    axios
    .post(
      endpoint + "/api/register",
      {
    email,name,password
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      console.log(res);
    });
  };
  onEChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  onNChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ name: value.target.value });
  };
  onPChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ password: value.target.value });
  };
  checkPass(x){
    if (x.length > 1){
      return true
    }
    return false
  }
  loadNext(){
    this.setState({ activeItem: "prefer" });
  }
  validateForm(){
      // this function makes a call to our backend with the current email in the box
      // TODO call the backend from here
      var validated = true
      if (!this.state["email"]){
        validated = false
        this.setState({
          errEmail: true
      });
      } 
      if (!this.state["name"]){
        validated = false
        this.setState({
          errName: true
      });

      } 
      if (!this.checkPass(this.state["password"])){
        validated = false
        this.setState({
          errPassword: true
      });
      } 
      if (!this.state["preferredLumber"]){
        validated = false
        this.setState({
          errLumber: true
      });
      } 
      if (!this.state["preferredLength"]){
        validated = false
        this.setState({
          errLength: true
      });
      } 
      if (!this.state["Location"]){
        validated = false
        this.setState({
          errLength: true
      });
      } 
      if (validated){
        console.log(3)
        var response = this.registerUser()
        // if token not valid 
        // if response not valid throw an error on the page
      }
    }
    
  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }
  setButton = (e, data) => {
    // access to e.target here
    console.log(data,data.index);
    if (data.type == "lum"){
    const fav = this.state.favorites.slice()
    fav[data.index][1] = !fav[data.index][1]
    this.setState({favorites: fav})
    } else {
      const len = this.state.lengths.slice()
      len[data.index][1] = !len[data.index][1]
      this.setState({lengths: len})
    }
}
  setLumStyle(){
    //TODO ensure first guys margin is effectively 24 
    const favorites = this.state.favorites;
    console.log(favorites,favorites[0])
    var result = [];
    for (var i = 0; i < favorites.length; ++i) {
        var margin_left = i == 0|| i == 6? "2px":"16px"
        console.log(favorites[i][1])
        if (favorites[i][1]){
          result.push(<Button style={{marginLeft:margin_left,marginBottom:"16px",height:"36px",background:"#0F4210"}} index={i} type={"lum"} onClick={this.setButton} className="cho-reg-choices" icon='check circle outline' content={favorites[i][0]} />);
        } else {
          result.push(<Button style={{marginLeft:margin_left,marginBottom:"16px",height:"36px",background:"#FFFFFF"}} index={i} type={"lum"} onClick={this.setButton} className="reg-choices"  content={favorites[i][0]}  /> );
        }
    }
    return result
  }
  setLenStyle(){
    //TODO ensure first guys margin is effectively 24 
    const favorites = this.state.lengths;
    var result = [];
    for (var i = 0; i < favorites.length; ++i) {
        var margin_left = i == 0 ? "2px":"16px"
        if (favorites[i][1]){
          result.push(<Button style={{marginLeft:margin_left,marginBottom:"16px",height:"36px",background:"#0F4210"}} index={i} onClick={this.setButton} className="cho-reg-choices" icon='check circle outline' content={favorites[i][0]} />);
        } else {
          result.push(<Button style={{marginLeft:margin_left,marginBottom:"16px",height:"36px",background:"#FFFFFF"}} index={i} onClick={this.setButton} className="reg-choices"  content={favorites[i][0]}  /> );
        }
    }
    return result
  }
  loadCard(){
    if (this.state.activeItem == 'register'){
      return  <Form style={form_formatting}>
      <Form.Field style={{marginTop:"16px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Email Address:</div>
        <input style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",marginRight:"21px",width:"607px",marginBottom:"16px"}}/>
      </Form.Field>
      <Form.Field style={{marginTop:"16px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Password (at least 8 characters)</div>
        <input  type="password" style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",
        marginRight:"21px",width:"607px",marginBottom:"15px"}}/>
      </Form.Field>
      <Form.Field style={{marginTop:"16px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Location</div>
        <input  style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",marginRight:"21px",width:"607px",marginBottom:"23.5px"}}/>
      </Form.Field>
      <Form.Button color="blue" size="large" style={submit} onClick={this.loadNext} >
<div className="button-text">NEXT</div>
</Form.Button>
    </Form >
    }
    let return_lum = this.setLumStyle()
    let return_len = this.setLenStyle()
    return <Form style={pref_formatting}>
                <Form.Group widths='equal' inline style={{marginLeft:"3px"}}>
                <Form.Input>
                <Form.Checkbox label='Buyer  ' />
                </Form.Input>
                <Form.Input>
                <Form.Checkbox label='Seller' />
                </Form.Input>
                </Form.Group>
                <Form.Field style={{marginTop:"16px",marginLeft:"3px"}}>
                <div class="email-address"  style={{marginBottom:"6.5px"}}>Preferred Lumber:</div>
                {return_lum}
                </Form.Field>
                <Form.Field style={{marginTop:"16px"}}>
                <div class="email-address"  style={{marginBottom:"6.5px"}}>Preferred Length:</div>
                {return_len}
                </Form.Field>
                <Button  className="button-text"
                style={{width:"120px",height: "42px",marginLeft:"0px",marginTop:"2px",marginBottom:"16px"}}   onClick={this.validateForm}  
                content="REGISTER">
                </Button>
                <Card.Content>
                <div style={{marginLeft:"4px",marginBottom:"18px"}} className="register">By clicking Register, you agree to our <Link style={{color:"#3F691A"}}>
                  Terms of Use and Privacy Policy</Link></div>
                </Card.Content>
      </Form>
  }
  render() {
    let displaycard = this.loadCard()
    return (
      <div className='NavBar'>
      <Menu style={mynav} borderless={true}>
          <Menu.Item style={navbar} className=".ui.table" >
          <Link to={"/"} style={lip}>
        Lumber.io
        </Link>

        </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item style={navbar}>
            Product
            </Menu.Item>
            <Menu.Item style={navbar}>
            Testamonials
            </Menu.Item>
            <Menu.Item style={navbar}>
            Contact
            </Menu.Item>
            <Menu.Item header >
            <Portal
            closeOnTriggerClick
            openOnTriggerClick
            trigger={
              <Button content='Login/Sign In' style={greenBut} />
            }
            onOpen={this.handleOpen}
            onClose={this.handleClose}
          >
            <div
            style={{
                height: '100%',
                width: '1366px',
                left: '0px',
                position: 'fixed',
                top: '0px',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1,
                overflowX:'hidden',
              }}>
            <Card
              style={{
                height: '509px',
                width: '707px',
                marginLeft: '399px',
                marginRight: '362.5px',
                position: 'relative',
                top: '100px',
                background: '#F6F7F6',
                zIndex: 1,
              }}
            >
              <Menu className='menu-text' fluid widths={2} size={"massive"} style={{height: "60px",marginBottom: "0px"}}>
                <Menu.Item className='menu-text' active={this.state.activeItem == 'register'} >Register (1 of 2 steps)</Menu.Item>
                <Menu.Item className='menu-text' active={this.state.activeItem == 'prefer'} >Preference (2 of 2 steps)</Menu.Item>
              </Menu>
             {displaycard}
             <Divider style={{marginTop:"0px",marginBottom:"18px"}}/>
    <div style={{display:"flex",height:"55px"}}>
      <div class="sign-in"> Already have an account? <Link to='/login' style={{color:"#3F691A"}}><u>Sign in</u></Link></div>
      <Button floated='right' size="large" 
      style={{background:"#FFFFFF",float:"right",height:"42px",width: "120px",marginBottom:"13px",	
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.2)"}}>
<div className="button-text" style={{color:"#3F691A"}}>CANCEL</div></Button>
      </div>
            </Card>
            </div>
          </Portal>
            </Menu.Item>
            </Menu.Menu>
      </Menu>
      </div>
    )

}
}

export default NavBar;
