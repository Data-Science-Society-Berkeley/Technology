import React, { Fragment, Component  } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


import {
      Button,
      Form,
      Grid,
      Header,
      Message,
      Segment,
      Card,
      Label,
      Checkbox,

} from 'semantic-ui-react';
const header_formatting = {
  paddingTop: "25px",
  paddingBottom: "16px",
  marginLeft: "33px",
  marginRight: "158px",
  color: "#3F691A"


};
const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "110px",
      fontSize: "64px",
      color:"#FFFBFB",
  width:"863px",
  fontStyle: "normal",
  textAlign:"left",
  marginLeft:"320px",
  
  };
const description_formatting = {
  marginLeft: "33px",
  marginRight: "21px",
  // Get this padding bottom precisely
  paddingBottom: "30px",
};
const button_formatting = {
  width: "75%",
  marginLeft: "34px",
  marginRight: "23px",
  marginBottom: "35.33px",


};
const card_formatting = {
  //marginLeft: "0px",
  marginLeft: "43px",
  marginTop: "128px",

};
const login_formatting = {
  marginBottom: "22.33px",
  marginTop: "30px",
  marginLeft: "34px",
  marginRight: "608px",


};
const submit = {
  marginRight: "519px",
  marginBottom: "40px",

};
const lip = {
  color: "white",
};
const formStyle = {
  width: "635px",
  height: "88px",
  border: "2px solid #FFFAFA",
  boxSizing:"borderBox",
  backgroundColor:"transparent",
  marginTop:"22px",
  color:"#FFFFFF"
  };
  const buttonStyle = { width: "402px"
, height: "76px",fontFamily: "Montserrat",
fontWeight: 600,
lineHeight: "37px",
fontSize: "24px",
color:"#8CD6D1",
fontStyle: "normal",
background: "#FFFFFF",
borderRadius: "35px",
marginTop:"64px"
 };
//TODO make the bottom card on the left side reactive like the top one...

let endpoint = "http://localhost:8080";
//axios.defaults.withCredentials = true
class Login extends Component {
  constructor(props) {
    super(props)
    // we track the zipcode in state because we need to pass this onto the next page we load
    this.state = {
      email: "",
      password: "",
      // TODO set these to the correct default values
      errEmail: false,
      errPassword: false,
    };
    this.validateForm = this.validateForm.bind(this)
    this.loginUser= this.loginUser.bind(this)
  }
  loginUser = () => {
    let email = this.state.email
    let password = this.state.password
    axios
    .post(
      endpoint + "/api/login",
      {
    email,password
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      //console.log(res.status);
      //console.log(res);
      if (res.status == 200){
        this.props.history.push("home")
      } else {
        // throw an error for the program //TODO TEST THIS works
        // TODO when logout, clear the cookie from cache and browser..
      }
    });
  };
  onEChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  onPChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ password: value.target.value });
  };
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
      if (!this.state["password"]){
        validated = false
        this.setState({
          errPassword: true
      });
      } 
      if (validated){
        console.log(36)
        var response = this.loginUser()
        // if token not valid 
        // if response not valid throw an error on the page
      }
    

  }
  render () {
    return (
      <Grid columns={2} padded={true} >
        <Grid.Column width={1} style={card_formatting } className="the-best-lumber-are">
          <Header as="h2" style={mybigtext} >
            Data Science Society
          </Header>
                          <Form style={{marginTop:"20px",marginLeft:"300px"}}>
                              <input id="text" style={formStyle} placeholder='Name' />
                              <input id="text" style={formStyle}  placeholder='E-mail' />

                              <Form.Button rounded style={buttonStyle}>
                                  log-in
                              </Form.Button>
                          </Form>
        </Grid.Column>
      </Grid>

)};
}
export default Login;
