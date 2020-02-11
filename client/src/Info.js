import React, { Component,useReducer } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Table,Segment,List,Container,Portal,Accordion,Divider,Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Project from "./project"
import Formx from "./Formx"
import validator from 'validator';
let endpoint = "http://localhost:8080/";
const form_formatting = { marginLeft: "36px", marginRight: "32px",marginTop: "25px" };
const buttonoffset = {
  marginTop: "19.5px",
  marginLeft: "550px",
  textAlign:"center",
  fontFamily: "	OverpassSemiBold",
  width: "200px",

};


const gridoffset = {
          textAlign:"center",
          fontFamily: "	OverpassSemiBold",
          width: "1366px",
          height: "465px",
          marginLeft: "43px",
          marginTop:"40px",
          marginBottom:"0px",
          position:"relative",
          display:"inline-table",
          clear: "both",
};
const second_offset = {
    textAlign:"center",
    fontFamily: "	OverpassSemiBold",
    width: "1366px",
    marginLeft: "43px",
    marginTop:"40px",
    marginBottom:"0px"
};
const third_offset = {
    textAlign:"center",
    fontFamily: "	OverpassSemiBold",
    width: "1366px",
    marginLeft: "43px",
    marginTop:"40px",
    marginBottom:"0px",
    position:"relative",

};
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
    background: "#blue",
    color: "white",
  };
const tableStyle = {
    width : "601px",
    height: "57px",
    marginLeft: "42.5px",
    marginRight: "722.5",
};
const rightTable = {
    color: "#595959",
    fontFamily: "Rubik",
    fontSize: "16px",
    letterSpacing: "0.57px",
    lineHeight: "19px",
    textAlign: "center",

};
function ExtraContentAccordionClosed({ onClick }) {
    return (
      <Card.Content extra>
        <Button basic circular icon size="tiny" onClick={onClick}>
          <Icon name="plus circle" />
        </Button>
        Expand
      </Card.Content>
    );
  }
  // Credit that some of this was inspired from a link online at the following url
  // https://codesandbox.io/embed/semantic-ui-card-extra-content-toggle-kybt2
  function ExtraContentAccordionOpened({ content, onClick }) {
    return (
      <>
        <Card.Content extra>{content}</Card.Content>
        <Card.Content extra>
          <Button basic circular icon size="tiny" onClick={onClick}>
            <Icon name="minus circle" />
          </Button>
          Collapse
        </Card.Content>
      </>
    );
  }
  function ExtraContentAccordion({ open, content, onClick}) {
    return open === true ? (
      <ExtraContentAccordionOpened content={content} onClick={onClick} />
    ) : (
      <ExtraContentAccordionClosed onClick={onClick} />
    );
  }
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
        projects:[],
        expanded:[false,false],
        name:this.props.name,
        email: "",
        Location: "",
    };
      this.join=this.join.bind(this);
      this.validateForm = this.validateForm.bind(this);
      this.updateState= this.updateState.bind(this);

  }
  componentDidMount() {
    this.getProjects();
  }
  updateState(data) {
    this.props.updateState(data);
};
  getProjects = () => {
    axios.get(endpoint + "auth/api/projectfetch",{
      params: {
        clientid: this.props.match.params.id.substring(1),
      },
        withCredentials: true,
    }).then(res => {
    if (res.data) {
      this.setState({
        projects: res.data.map(driver => {
          return (
              <Project updateState={this.updateState} id={driver._id} type={driver.project_name} owner={driver.project_details} location={"Meta Data"}
              price={"Num Leads"} traits={"traits"} />
          );
        })
      });
    } else {
      this.setState({
        projects: []
      });
    }
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
  registerProject = () => {
    let project_name = this.state.email
    let project_detail = this.state.Location
    let client_id= this.props.match.params.id.substring(1)
    axios
    .post(
      endpoint + "auth/api/register/project",
      {
    project_name,project_detail,client_id
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      this.setState({
        projects: this.state.projects.concat(<Project id={res.data._id} 
          updateState={this.updateState}  type={this.state.Location} />)
      })
    });
  };
  addProject(){
    // we doubly display the card on the page and ping our backend with the update
    this.registerProject()
  }
  
  validateForm(){
    // this function makes a call to our backend with the current email in the box
    // TODO call the backend from here
    var validated = true
    if (this.state["email"].length === 0) {
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
      var response = this.addProject()
      this.setState({ 
        open: false,
      })
    }
  }
  toggleCard0(card) {
    const temp_expand = this.state.expanded.slice()
    temp_expand[0] = !temp_expand[0]
    this.setState({expanded: temp_expand})
  }
  toggleCard1(card) {
    const temp_expand = this.state.expanded.slice()
    temp_expand[1] = !temp_expand[1]
    this.setState({expanded: temp_expand})
  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClose = () => {
    this.setState({ open: false })
  }
  join(){
      // this function makes a call to our backend with the current email in the box
      // TODO call the backend from here
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    //TODO the icon should acutally by a 48 by 48 right now it is 30 by 30
    render() {
    return (
        <div>
        <div class="info-top">
        <div class="info-header" > <u>{this.state.name} </u> </div>
       <Link to="/lumber"><Icon className="info-exit" size='big' name="close"/> </Link>
        </div>
        <div>
        
        </div>
        <Grid style={third_offset}>
            <Grid.Row columns={1} style={{marginTop:"0px"}}>
            <Card padded={false} fluid style={{width:"1287px",height: "100%"}}>
        <span class="info-expand" > Client Specific Information</span>
       <ExtraContentAccordion   onClick={this.toggleCard0.bind(this)}
            content="Some Interesting Client Information"
            open={this.state.expanded[0]}
          />
            </Card>
            </Grid.Row>
            </Grid>
            <Card.Group>
              {this.state.projects}
            </Card.Group>
            <Portal
            closeOnTriggerClick
            openOnTriggerClick
            trigger={
              <Button  onClick={this.add}style={buttonoffset} > Add Project</Button>
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
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Project Name</div>
        <Form.Input  
        error={this.state.errEmail}
        value={this.state.email}
        onChange={this.onEChange}
        style={{color:"#595959",	fontFamily: "Rubik",
        fontSize: "13px",letterSpacing: ".46px",lineHeight: "17px",marginRight:"21px",width:"607px",marginBottom:"16px"}}/>
      </Form.Field>
      <Form.Field style={{marginTop:"16px"}}>
        <div class="email-address"  style={{marginBottom:"6.5px"}}>Some Project Detail</div>
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
  </div>
)
}
}
export default Info;
