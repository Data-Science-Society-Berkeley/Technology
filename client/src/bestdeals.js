import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Table,Segment,List,Container,Portal,Menu,Divider } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Client from "./client"
import Formx from "./Formx"
import validator from 'validator';
let endpoint = "http://localhost:8080/";
const gridoffset = {
          marginTop: "19.5px",
          textAlign:"center",
          fontFamily: "	OverpassSemiBold",
          background: "#F6F7F6",
          paddingBottom: "40px",
          width: "1366px",

};
const form_formatting = { marginLeft: "36px", marginRight: "32px",marginTop: "25px" };
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
    marginLeft: "10px",

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
const buttonoffset = {
  marginTop: "19.5px",
  marginLeft: "550px",
  textAlign:"center",
  fontFamily: "	OverpassSemiBold",
  width: "200px",

};
class BestDeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
        types:[],
        email: "",
        name: "",
        Location: "",
        // TEMPORARY FOR DEV LINK this with whatever page needs it?
        emailOpen: false,
        // TODO set these to the correct default values
        errEmail: false,
        errName: false,
        errLoc: false,
        errSubmit: false,
    };
      this.validateForm = this.validateForm.bind(this)
      this.updateState = this.updateState.bind(this)

  }
  onEChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  onLChange = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ Location: value.target.value });
  };
  componentDidMount() {
    this.getBundles();
  }
  getBundles = () => {
    axios.get(endpoint + "auth/api/clientfetch",{
        withCredentials: true,
    }).then(res => {
    if (res.data) {
      this.setState({
        types: res.data.map(driver => {
          return (
              <Client updateState={this.updateState} id={driver._id} type={driver.companyname} owner={driver.email} location={"Meta Data"}
              price={"Num Leads"} traits={"traits"} />
          );
        })
      });
    } else {
      this.setState({
        types: []
      });
    }
  });
};
registerUser = () => {
  let email = this.state.email
  let company_name = this.state.Location
  axios
  .post(
    endpoint + "auth/api/register/client",
    {
  email,company_name
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
  .then(res => {
    console.log(res.data)
    this.setState({
      types: this.state.types.concat(<Client updateState={this.updateState} id={res.data._id} type={this.state.Location} />)
    })
  });
};
addClient(){
  // we doubly display the card on the page and ping our backend with the update
  
  this.registerUser()
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
  if (this.state["Location"].length === 0){
    validated = false
    this.setState({
      errLoc: true
  });
  }
  if (validated){
    var response = this.addClient()
    this.setState({ 
      open: false,
    })
  }
}
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
    console.log(value.target.value)
  };
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClose = () => {
    this.setState({ open: false })
  }
  updateState(data) {
        this.props.updateState(data);
    };
    render() {
    return (
<div>
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={1}>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Card.Group>{this.state.types}
                    </Card.Group>
                    </Grid.Column>
            </Grid.Row>
            <Portal
            closeOnTriggerClick
            openOnTriggerClick
            trigger={
              <Button  onClick={this.add}style={buttonoffset} > Add Client</Button>
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
                height: '309px',
                width: '707px',
                marginLeft: '399px',
                marginRight: '362.5px',
                position: 'relative',
                top: '100px',
                background: '#F6F7F6',
                zIndex: 1,
              }}
            >     
              <Menu className='menu-text' fluid widths={1} size={"massive"} style={{height: "60px",marginBottom: "0px"}}>
                <Menu.Item className='menu-text' >Create Client</Menu.Item>
              </Menu>
              <Form style={form_formatting}>
      <Form.Field style={{marginTop:"0px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Email Address:</div>
        <Form.Input  
        error={this.state.errEmail}
        value={this.state.email}
        onChange={this.onEChange}
        style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",marginRight:"21px",width:"607px",marginBottom:"16px"}}/>
      </Form.Field>
      <Form.Field style={{marginTop:"16px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Client Name</div>
        <Form.Input 
             error={this.state.errLoc}
             value={this.state.Location}
             onChange={this.onLChange}
         style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",marginRight:"21px",width:"607px",marginBottom:"23.5px"}}/>
      </Form.Field>
    </Form >
             <Divider style={{marginTop:"0px",marginBottom:"5px"}}/>
    <div style={{display:"flex",height:"55px"}}>
      <Button size="large" style={{background:"#FFFFFF",
      height:"42px",width: "120px",marginBottom:"13px",
      marginLeft:"17px",
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.2)"}} onClick={this.validateForm} >
        Done
      </Button>

      <Button size="large" 
      style={{background:"#FFFFFF",float:"right",height:"42px",width: "120px",marginBottom:"13px",
      marginLeft:"450px",
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.2)"}}
      onClick={this.handleClose} >
<div className="button-text" style={{color:"blue"}}>CANCEL</div></Button>
      </div>
            </Card>
            </div>
          </Portal>
  </Grid.Row>
  </Grid>
    </div>
)

}
}
export default BestDeals;
