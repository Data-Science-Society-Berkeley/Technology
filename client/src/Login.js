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
const form_formatting = { marginLeft: "41px", marginRight: "91px", };
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
        <Grid.Column width={4} style={card_formatting } >
        <Card.Group fluid >

          <Card fluid> 
      <h2 className= "not-registered-yet"> Not Registered Yet?</h2>
      <Card.Description className= "register-now-to-buy" style={description_formatting}>
              Register now to buy and sell lumber. It's easy and free!
            </Card.Description>
            <Link style={lip} to={"register"}>
            <Button  color={"green"} size={"mini"} fluid={false} style={button_formatting}>
                REGISTER NOW
              </Button>
              </Link>
          </Card>
          <Card fluid>
            
      <Card.Header className="did-you-know" >Did you know...
</Card.Header>
      <Card.Description style={description_formatting} className="the-best-lumber-are">
            The best lumber are often not bought at the best price.
Statistics show that money is lost when there are too many
steps in the purchasing process.
            </Card.Description>
            <div className="learn-more">
          Learn More
          </div>
          </Card>
       
          </Card.Group>

        

        </Grid.Column>



        <Grid.Column width={10} style={card_formatting } className="the-best-lumber-are">
          <Card fluid >
          <Header as="h2" style={login_formatting } className="sign-in">
            Sign In
          </Header>
            <Form size="large" style={form_formatting}>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email address"
                error={this.state.errEmail}
                value={this.state.email}
                onChange={this.onEChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="Password"
                error={this.state.errPassword}
                value={this.password}
                onChange={this.onPChange}
              />
  <Form.Checkbox label='Keep me signed in' />

              <Form.Button color="blue" size="large" style={submit} onClick={this.validateForm}>
                <div className="button-text">SIGN IN</div>
              </Form.Button>
            </Form>
          </Card>
        </Grid.Column>
      </Grid>

)};
}
export default Login;
