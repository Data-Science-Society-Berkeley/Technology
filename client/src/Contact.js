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
      Checkbox,Input

} from 'semantic-ui-react';
let endpoint = "https://dssberkeley.com";
const gridoffset = {
    marginTop: "67px",
    textAlign:"center",
    fontFamily: "Montserrat",
};
const mybigtext = {
fontFamily: "Montserrat",
fontWeight: 600,
lineHeight: "110px",
    fontSize: "96px",
    color:"#FFFBFB",
width:"438px",
fontStyle: "normal",
textAlign:"left",
marginLeft:"10%",
marginTop:"10%",
marginBottom:"400px",

};
const mymidtext = {
fontFamily: "Montserrat",
fontWeight: 600,
lineHeight: "76px",
fontSize: "50px",
color:"#FFFFFF",
width:"300px",
fontStyle: "normal",
textAlign:"left",
marginLeft:"10%"

};
const formStyle = {
    width: "662px",
    height: "88px",
    border: "2px solid #FFFAFA",
    boxSizing:"borderBox",
    backgroundColor:"transparent",
    marginTop:"22px",
    color:"#FFFFFF",
    borderRadius: "15px",
    fontSize:"24px",
    };
    const formStyle2 = {
      width: "662px",
      height: "243px",
      border: "2px solid #FFFAFA",
      boxSizing:"borderBox",
      backgroundColor:"transparent",
      marginTop:"22px",
      color:"#FFFFFF",
      borderRadius: "15px",
      fontSize:"24px",
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
    let name = this.state.name
    let message= this.state.message

    axios
    .post(
      endpoint + "/api/email",
      {
    email,name,message
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

    this.setState({ name: value.target.value });
  };
  onMChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ message: value.target.value });
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
        <Grid divided='vertically' style={gridoffset}>
        <Grid.Row columns={2}>
                    <Grid.Column verticalAlign="center">
                        <Header as='h1'style={mybigtext}>
                            Contact us Here!
                            </Header>
                        </Grid.Column>

                        <Grid.Column floated="left">
                          <Form style={{marginTop:"5%",marginRight:"75%"}}>
                              <input onChange={this.onPChange} style={formStyle} width={6}  id="text" placeholder='Name' />
                              <br/>
                              <input style={formStyle} onChange={this.onEChange} width={6} id="text" placeholder='E-mail' />

                              <Form.TextArea style={formStyle2}  onChange={this.onMChange} id="text" placeholder='Message' />

                              <Form.Button width={6} onClick={this.loginUser} rounded style={buttonStyle}>
                                  SUBMIT
                              </Form.Button>
                          </Form>
                        </Grid.Column>
      </Grid.Row>
      </Grid>

)};
}
export default Login;
