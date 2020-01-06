import { Link } from 'react-router-dom';
import React, { Fragment, Component  } from 'react';
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
      Icon,
      List,
      Input,

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
  background: "#3F691A"
};
const lip = {
  color: "white",
};
const form_formatting = { marginLeft: "41px", marginRight: "91px", };
//TODO make the bottom card on the left side reactive like the top one...

let endpoint = "http://localhost:8080";

class Registration extends Component {
  constructor(props) {
    super(props)
    // we track the zipcode in state because we need to pass this onto the next page we load
    this.state = {
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
    };
    this.validateForm = this.validateForm.bind(this)
    this.registerUser= this.registerUser.bind(this)

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
  render () {
    const { redirect  } = this.state;

   
    return (
      <Grid columns={2} padded={true} >
      <Grid.Column width={4} style={card_formatting } >
      <Card.Group fluid >

        <Card fluid> 
    <h2 className= "not-registered-yet"> Already Registered?</h2>
    <Card.Description className= "register-now-to-buy" style={description_formatting}>
            Sign in to start your best deal.
          </Card.Description>
          <Link to={"login"} style={lip}>
          <Button  color={"green"} size={"mini"} fluid={false} style={button_formatting}>
              SIGN IN
            </Button>
            </Link>
        </Card>
        <Card fluid>
          
    <Card.Header className="did-you-know" >Why Register?
</Card.Header>
    <Card.Description style={description_formatting} className="the-best-lumber-are">
          To enhance your Lumber.io experience and help you to stay safe and secure, you now need to register to:
          <List>
            <List.Item>
            <List.Icon name='users' />
    <List.Content>Find the best price</List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='users' />
    <List.Content>Ability to track your orders</List.Content>
            </List.Item>
            <List.Item>
            <List.Icon name='users' />
    <List.Content>24 hours phone support </List.Content>
            </List.Item>

            <List.Item>
            <List.Icon name='users' />
    <List.Content>and much more</List.Content>
            </List.Item>

          </List>
          </Card.Description>
        </Card>
     
        </Card.Group>

      

      </Grid.Column>



      <Grid.Column width={10} style={card_formatting } className="the-best-lumber-are">
        <Card fluid >
        <Header as="h2" style={login_formatting } className="sign-in">
          Register
        </Header>
          <Form size="large" style={form_formatting}>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email address"
              control={Input}
              error={this.state.errEmail}
              value={this.state.email}
              onChange={this.onEChange}
            />
               <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Name"
              error={this.state.errName}
              value={this.state.name}
              onChange={this.onNChange}

            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password(At least 8 characters)"
              type="Password"
              error={this.state.errPassword}
              value={this.password}
              onChange={this.onPChange}
            />
               <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Retype Password"
              type="Password"
              error={this.state.errPassword}
            />
<Form.Group widths='equal' inline>
<Form.Input>
<Form.Checkbox label='Buyer  ' />
</Form.Input>
<Form.Input>
<Form.Checkbox label='Seller' />
</Form.Input>
</Form.Group>


            <Form.Button color="blue" size="large" style={submit} onClick={this.validateForm} >
              <div className="button-text">REGISTER</div>
            </Form.Button>
          </Form>
        </Card>
      </Grid.Column>
    </Grid>

)};
}
export default Registration;

