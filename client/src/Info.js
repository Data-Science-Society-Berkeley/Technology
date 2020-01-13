import React, { Component,useReducer } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Table,Segment,List,Container,Accordion } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Order from "./order_prim"
import Formx from "./Formx"
let endpoint = "http://localhost:8080/";
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
    background: "#759E33",
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
        orders:[<Order/>,<Order/>,<Order/>],
        expanded:[false,false],

    };
      this.join=this.join.bind(this);

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
    console.log(value.target.value)
  };
  join(){
      // this function makes a call to our backend with the current email in the box
      // TODO call the backend from here
      console.log(this.state["email"])
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    //TODO the icon should acutally by a 48 by 48 right now it is 30 by 30
    render() {
    return (
        <div>
        <div class="info-top">
        <div class="info-header" > <u>SOFT WOOD BUNDLE </u> </div>
       <Link to="/lumber"><Icon className="info-exit" size='big' name="close"/> </Link>
        </div>
        <div>
        <Link to="/checkout"><Button className="info-button">SELECT THIS BUNDLE </Button></Link>
        
        </div>
        <Grid style={third_offset}>
            <Grid.Row columns={1} style={{marginTop:"0px"}}>
            <Card padded={false} fluid style={{width:"1287px",height: "100%"}}>
        <span class="info-expand" >Market Size</span>
       <ExtraContentAccordion   onClick={this.toggleCard0.bind(this)}
            content="Some Market Analysis to be filled in"
            open={this.state.expanded[0]}
          />
            </Card>
            </Grid.Row>
            </Grid>


<Grid style={gridoffset}>
    <Grid.Row columns={2} style={{marginTop:"0px",width:"624px",height:"451px"}}>
                <Grid.Column style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <Card padded={false} fluid style={{width:"624px",height:"451px"}}>
                        <div class="info-text">Circle Graph</div>
                    <div class="info-describe">Short Description</div>
                    </Card>
                    </Grid.Column>
                    <Grid.Column style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <Card padded={false} fluid style={{width:"624px",height:"451px"}}>
                        <div class="info-text" >Line Graph</div>
                    <div class="info-describe">Short Description</div>
                    </Card>
                    </Grid.Column>
            </Grid.Row>
            </Grid>
            <Grid style={second_offset}>
            <Grid.Row columns={1} style={{marginTop:"0px"}}>
            <Card padded={false} fluid style={{width:"1287px",height: "100%"}}>
        <span class="info-expand" >About this mill</span>
        <ExtraContentAccordion onClick={this.toggleCard1.bind(this)}
            content="Some Market Analysis to be filled in"
            open={this.state.expanded[1]}
          />
            </Card>
            </Grid.Row>
            </Grid>
            <Grid style={gridoffset}>
            <Grid.Row columns={2}>
                <Grid.Column style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <Card padded={false} fluid style={{width:"624px",height:"451px"}}>
                        <div class="info-text" >Bar Graph</div>
                    <div class="info-describe">Short Description</div >
                    </Card>
                    </Grid.Column>
                    <Grid.Column style={{paddingLeft:"0px",paddingRight:"0px"}}>
                    <Card padded={false} fluid style={{width:"624px",height:"451px"}}>
                        <div class="info-text" >Line Graph</div>
                    <div class="info-describe">Short Description</div>
                    </Card>
                    </Grid.Column>
            </Grid.Row>
            </Grid>
            <Link to="/checkout"> <Button className="info-button" style={{marginTop:"40px",marginBottom:"115px"}}>SELECT THIS BUNDLE </Button>
            </Link>
  </div>
)
}
}
export default Info;
