import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Container, Image, Menu,Button,Portal,Header,Card ,Form ,Input,Divider,Icon} from 'semantic-ui-react';
import PasswordStrengthBar from 'react-password-strength-bar';
import validator from 'validator';

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
    Location: "",
    buyer: false,
    seller: false,
    // TEMPORARY FOR DEV LINK this with whatever page needs it?
    emailOpen: false,
    // TODO set these to the correct default values
    errEmail: false,
    errName: false,
    errPassword: false,
    // not answering these is acceptable
   // errLumber: false,
   // errLength: false,
    errLoc: false,
    errSubmit: false,
    errSeller: false,
    errBuyer: false,

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
  this.closeEmail=this.closeEmail.bind(this);

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
  onLChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ Location: value.target.value });
  };
  onPChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ password: value.target.value });
  };
  onStrengthChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    if (value){
    console.log(value)
    this.setState({ passwordStrength: value });
    }
  };
  onTypeChange = (e, data) => {
    // TODO if its an invalid email we can prompt them for an error later
    // Can someone be both a buyer and seller?
    if (data.name == "buyer"){
      this.setState({ buyer: data.checked });
    } else {
      this.setState({ seller: data.checked });
    }
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
      if (!(validator.isEmail(this.state.email))) {
        validated = false
        this.setState({
          errEmail: true
      });
      } 
      if (!(this.state["passwordStrength"] > 2)){
        validated = false
        this.setState({
          errPassword: true
      });
      } 
      // if (!this.state["preferredLumber"]){
      //   validated = false
      //   this.setState({
      //     errLumber: true
      // });
      //} 
      // if (!this.state["preferredLength"]){
      //   validated = false
      //   this.setState({
      //     errLength: true
      // });
      // }
      if (this.state["Location"].length === 0){
        validated = false
        this.setState({
          errLoc: true
      });
      }
      if (!(this.state["buyer"] || this.state["seller"])){
        validated = false
        this.setState({
          errLength: true
      });
      } 
      if (validated){
        var response = this.registerUser()
        // if token not valid 
        // if response not valid throw an error on the page
        this.setState({ 
          open: false,
        })
        this.props.history.push("lumber")
      }
    }
    
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClose = () => {
    this.setState({ open: false })
  }
  closeEmail = () => {
    this.setState({ emailOpen: false })
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
    var result = [];
    for (var i = 0; i < favorites.length; ++i) {
        var margin_left = i == 0|| i == 6? "2px":"16px"
        var margin_right = i == 5? "50px":"0px"

        console.log(favorites[i][1])
        if (favorites[i][1]){
          result.push(<Button style={{marginLeft:margin_left,marginRight:margin_right,marginBottom:"16px",height:"36px",background:"#0F4210"}} index={i} type={"lum"} onClick={this.setButton} className="cho-reg-choices" icon='check circle outline' content={favorites[i][0]} />);
        } else {
          result.push(<Button style={{marginLeft:margin_left,marginRight:margin_right,marginBottom:"16px",height:"36px",background:"#FFFFFF"}} index={i} type={"lum"} onClick={this.setButton} className="reg-choices"  content={favorites[i][0]}  /> );
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
        <Form.Input  
        error={this.state.errEmail}
        value={this.state.email}
        onChange={this.onEChange}
        style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",marginRight:"21px",width:"607px",marginBottom:"16px"}}/>
      </Form.Field>
      <Form.Field style={{marginTop:"16px",marginBottom:"0px"
    }}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Password (at least 8 characters)</div>
        <Form.Input  type="Password" 
          error={this.state.errPassword}
          value={this.password}
          onChange={this.onPChange}
        style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",
        marginRight:"21px",width:"607px"}}/>
        <PasswordStrengthBar onChangeScore={this.onStrengthChange} style={{marginTop:"5px",marginBottom:"0px"}} password={this.state.password} />
      </Form.Field>
      <Form.Field style={{marginTop:"16px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Location</div>
        <Form.Input 
             error={this.state.errLoc}
             value={this.state.Location}
             onChange={this.onLChange}
         style={{color:"#595959",	fontFamily: "Rubik",
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
                <Form.Input     
                error={this.state.errBuyer}>
                <Form.Checkbox 
                name={'buyer'}
                value={this.state.buyer}
                onChange={this.onTypeChange}
                label='Buyer' />
                </Form.Input>
                <Form.Input
                error={this.state.errSeller}
                >
                <Form.Checkbox 
                name={'seller'}
                value={this.state.seller}
                onChange={this.onTypeChange}
                label='Seller' />
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
    // FOR NOW FOR TESTING
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
            open={this.state.open}
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
                <Menu.Item className='menu-text' name='register' onClick={this.handleItemClick} active={this.state.activeItem == 'register'} >Register (1 of 2 steps)</Menu.Item>
                <Menu.Item className='menu-text' name='prefer' onClick={this.handleItemClick} active={this.state.activeItem == 'prefer'} >Preference (2 of 2 steps)</Menu.Item>
              </Menu>
             {displaycard}
             <Divider style={{marginTop:"0px",marginBottom:"5px"}}/>
    <div style={{display:"flex",height:"55px"}}>
      <div class="sign-in"> Already have an account? <Link to='/login' style={{color:"#3F691A"}}><u>Sign in</u></Link></div>
      <Button floated='right' size="large" 
      style={{background:"#FFFFFF",float:"right",height:"42px",width: "120px",marginBottom:"13px",	
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.2)"}}
      onClick={this.handleClose}>
<div className="button-text" style={{color:"#3F691A"}}>CANCEL</div></Button>
      </div>
            </Card>
            </div>
          </Portal>
            </Menu.Item>
            </Menu.Menu>
      </Menu>
      <Portal
      open={this.state.emailOpen}
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
                height: '326px',
                width: '403px',
                marginLeft: '519px',
                marginRight: '518px',
                position: 'relative',
                top: '196px',
                background: '#FFFFFF',
                zIndex: 1,
              }}
            >   
            <Icon style={{color:'#AAAAAA',marginLeft: '40px',marginRight: '346px',marginTop: '27px'}}
            size={'small'}name='close'/>    
               <Icon onClick={this.closeEmail} style={{color:'#AAAAAA',marginLeft: '167px',marginRight: '166px',marginTop: '22px'}}
            size={'huge'}name='mail outline'/>        
            <div className='email-head'>
            We sent you an email!  
            </div>  
            <div className='email-text'>
              Please find in your email instructions to recover your password 
              </div>
              <Button  className="button-text"
                style={{width:"96px",height: "36px",marginLeft:"150px",marginRight:"157px",
                marginTop:"2px",marginBottom:"12px",paddingRight:"16px",paddingLeft:"16px"}}  
                 onClick={this.closeEmail} >
                  <div className='email-but'>
                    GOT IT
                    </div>
                </Button>
            </Card>      
            </div>
        </Portal>
      </div>
    )

}
}

export default NavBar;
