import React, { Component,useReducer } from "react";
import axios from "axios";
import { Image,Grid,Card, Portal,Header, Form, Input, Icon, Button,Table,Segment,List,Container,Accordion } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Formx from "./Formx"
import FormData from 'form-data';
let endpoint = "http://localhost:8080/";
const gridoffset = {
          textAlign:"center",
          fontFamily: "	OverpassSemiBold",
          width: "1366px",
          height: "465px",
          marginLeft: "43px",
          marginTop:"20px",
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
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //cars:[<Car identifier={0} stateLink={this.updateState.bind(this)} />],
        expanded:[false,false],
        name:"Project Name",
        upload:false,
        open:false,


    };
      this.join=this.join.bind(this);
      this.closeEmail=this.closeEmail.bind(this);

  }
  closeEmail = () => {
    this.setState({ open: false })
  }  
  uploadCSV = () => {
    console.log(this.state.csv)
    let form = new FormData();
    // Second argument  can take Buffer or Stream (lazily read during the request) too.
    // Third argument is filename if you want to simulate a file upload. Otherwise omit.
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    form.append('file', new Blob([this.state.csv], { type: 'text/csv' }));
    console.log(this.props)
    form.append('id', this.props.match.params.id.substring(1));

    axios.post(endpoint + "auth/api/project/upload", form, config
    ).then(result => {
      // Handle result…
      if (result.status == 200){
        this.setState({upload: false,uploadErr : false,open:true})
      } else {
        this.setState({uploadErr: true })
      }
    });
  };
  handleChange = (event) => {
    this.setState({
      csv: event.target.files[0],
      upload: true,
    },
    this.uploadCSV
    )
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
        <div class="info-header" > <u>{this.props.name} </u> </div>
       <Link to="/lumber"><Icon className="info-exit" size='big' name="close"/> </Link>
        </div>
        <div>
        <Input
        style={{marginLeft:"50px"}}
   type="file"
   ref={(input) => { this.filesInput = input }}
   name="file"
   icon='file text outline'
   iconPosition='left'
   label='Upload CSV'
   labelPosition='right'
   placeholder='UploadCSV...'
   onChange={this.handleChange}
   loading={this.upload}
   error={this.uploadErr}
 />        
        </div>
        <Grid style={third_offset}>
            <Grid.Row columns={1} style={{marginTop:"0px"}}>
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
            <Portal
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
            <Icon  onClick={this.closeEmail}  style={{color:'#AAAAAA',marginLeft: '40px',marginRight: '346px',marginTop: '27px'}}
            size={'small'}name='close'/>    
               <Icon style={{color:'#AAAAAA',marginLeft: '167px',marginRight: '166px',marginTop: '22px'}}
            size={'huge'}name='mail outline'/>        
            <div className='email-head'>
            We uploaded your CSV!  
            </div>  
            <div className='email-text'>
              We will have some updates for you soon!
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
export default Upload;
