import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,Embed } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import andi from './Leadership Headshots/andi.jpg'
import kate from './Leadership Headshots/kate.jpg'
import roshan from './Leadership Headshots/roshan.jpg'
import kanu from './Leadership Headshots/kanu.jpg'
import charlie from './Leadership Headshots/charlie.jpg'
import alleanna from './Leadership Headshots/alleanna2.jpeg'
import steph from './Leadership Headshots/steph.jpg'
import uma from './Leadership Headshots/uma.png'
import varunmi from './Leadership Headshots/varunmi.jpeg'
import varunmu from './Leadership Headshots/varunmu.jpg'
import arjun from './Leadership Headshots/arjun.jpg'
import edlyft from './Leadership Headshots/edlyft-logo.jpg'
import asuc from './Leadership Headshots/asuc_logo.png'
import berkeley from './Leadership Headshots/berkeley_cdss_logo.png'
import berkeley2 from './Leadership Headshots/berkeley-eecs-logo.jpg'
import wids from './Leadership Headshots/wids-berkeley-logo.jpg'
import sponsor1 from './Leadership Headshots/dsnexus-logo.png'
import sponsor2 from './Leadership Headshots/leadcenter_logo.png'
import sponsor3 from './Leadership Headshots/haas-ds-club-logo.png'
import gaya from './Leadership Headshots/gayatri.png'
import eric from './Leadership Headshots/eric.jpg'
import samir from './Leadership Headshots/samir.jpeg'











let endpoint = "http://localhost:8080";
const gridoffset = {
          marginLeft:"62px",
          marginTop: "42px",
          textAlign:"center",
          fontFamily: "Montserrat"
};



const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "97px",
          fontSize: "64px",
          color:"#8CD6D1",
    width:"438px",
    fontStyle: "normal",
    textAlign:"left"
};
const header = {
  fontFamily: "Montserrat",
  fontWeight: 600,
  lineHeight: "97px",
          fontSize: "64px",
          color:"#8CD6D1",
    width:"1020px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"300px"
};
const cardstyle = {
    width:"400px",
   // height: "800px",
    marginBottom:"10px",
    marginleft:"20px",
};
const imagestyle = {
  height: "400px",
  maxHeight: "400px",
  width: "400px",
  maxWidth: "400px",
};
const textstyle = {
  fontFamily: "Montserrat",
  fontWeight: 300,
          fontSize: "37px",
          color:"#8CD6D1",
}
const leadershipCards = [
<Card style={cardstyle}>
<Image src={andi} style={imagestyle}  />
<Card.Content>
      <Card.Header style={textstyle}>Andi Halim</Card.Header>
      <Card.Meta>
        <span className='date'>President</span>
      </Card.Meta>
      <Card.Description>
        Andi is the President of DSS.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:andihalim@berkeley.edu">
        <Icon size="large" name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/andihalim/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>
<Image src={eric} style={imagestyle}  />
<Card.Content>
      <Card.Header style={textstyle}>Eric Gan</Card.Header>
      <Card.Meta>
        <span className='date'>Internal Vice President</span>
      </Card.Meta>
      <Card.Description>
        Eric is the Internal Vice President of DSS.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:ericgan@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/eric-gan/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image style={imagestyle} src={varunmu} />
<Card.Content>
<Card.Header style={textstyle}>Varun Murthy</Card.Header>
<Card.Meta>
        <span className='date'>External Vice President</span>
      </Card.Meta>
      <Card.Description>
        Varun is the External Vice President of DSS.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:murthy@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://linkedin.com/in/Murthy1999">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image style={imagestyle} src={roshan}/>
<Card.Content>
<Card.Header style={textstyle}>Roshan Lodha</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
      </Card.Meta>
      <Card.Description>
        Roshan is a director of Academic Development.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:roshanlodha@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="http://linkedin.com/in/roshanlodha">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image  style={imagestyle} src={alleanna}  />
<Card.Content>
<Card.Header style={textstyle}>Alleanna Clark</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
      </Card.Meta>
      <Card.Description>
      Alleanna is a director of Academic Development.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:alleanna@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image  style={imagestyle} src={steph}  />
<Card.Content>
<Card.Header style={textstyle}>Stephanie Lu</Card.Header>
<Card.Meta>
        <span className='date'>Director of Acadev</span>
      </Card.Meta>
      <Card.Description>
      Stephanie is a director of Academic Development.
            </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:stephanie.lu@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
        <Icon size="large" name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image  style={imagestyle} src={kate}  />
<Card.Content>
<Card.Header style={textstyle}>Kate Miller</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
        Kate is a director of DeCal.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:katevmiller@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/kate-miller-7a884719b/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image  style={imagestyle} src={uma}  />
<Card.Content>
<Card.Header style={textstyle}>Uma Krishnawamy</Card.Header>
<Card.Meta>
<span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
      Uma is a director of DeCal.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:umakrishnaswamy@berkeley.edu">
        <Icon size="large" name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/uma-k-369ba4122/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image  style={imagestyle} src={gaya}  />
<Card.Content>
<Card.Header style={textstyle}>Gayatri Babel</Card.Header>
<Card.Meta>
<span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
      Gayatri is a director of DeCal.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:gbabel@berkeley.edu">
        <Icon size="large"  name='mail' size="large" />
        </a>
        <a href="https://www.linkedin.com/in/gayatri-babel/">
        <Icon size="large"  name='linkedin' size='large' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image  style={imagestyle} src={samir}  />
<Card.Content>
<Card.Header style={textstyle}>Samir Puranik</Card.Header>
<Card.Meta>
<span className='date'>Director of Consulting</span>
      </Card.Meta>
      <Card.Description>
      Samir is a director of Consulting.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:samir.puranik@berkeley.edu">
        <Icon size='large' name='mail' />
        </a>
        <a href="https://linkedin.com/in/samir-puranik">
        <Icon name='linkedin' size='large' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image style={imagestyle} src={charlie}  />
<Card.Content>
<Card.Header style={textstyle}>Charlie Duarte</Card.Header>
<Card.Meta>
        <span className='date'>VP of Finance & Director of Social Good</span>
      </Card.Meta>
      <Card.Description>
        Charlie is VP of Finance and Director of Social Good.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:charlieduarte@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/charlie-duarte/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image style={imagestyle} src={arjun}  />
<Card.Content>
<Card.Header style={textstyle}>Arjun Mishra</Card.Header>
<Card.Meta>
        <span className='date'>VP of Tech</span>
      </Card.Meta>
      <Card.Description>
        Arjun is VP of Tech.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:arjunmishra@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/arjun-mishra-8163b7149/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image style={imagestyle} src={varunmi}  />
<Card.Content>
<Card.Header style={textstyle}>Varun Mittal</Card.Header>
<Card.Meta>
        <span className='date'>VP of Marketing</span>
      </Card.Meta>
      <Card.Description>
        Varun is the VP of Marketing.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:varunmittal@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/varun-mittal-727559181/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
<Card style={cardstyle}>    <Image style={imagestyle} src={kanu}  />
<Card.Content>
<Card.Header style={textstyle}>Kanu Grover</Card.Header>
<Card.Meta>
        <span className='date'>VP of Culture</span>
      </Card.Meta>
      <Card.Description>
        Kanu is the VP of Culture.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:grover.kanu@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/kanu-grover-a89983187/">
        <Icon size="large"  name='linkedin' />
        </a>
      </Card.Content>
</Card>,
]


const mymidtext = {
  fontFamily: "Montserrat",
  fontWeight: 300,
  lineHeight: "73px",
  fontSize: "48px",
  color:"#8CD6D1",
  width:"300px",
  fontStyle: "normal",
  textAlign:"center",
  marginLeft:"130px",
  marginBottom:"35px",
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
      };
      this.join=this.join.bind(this);

  }
  updateEmail = (value) => {
    // TODO if its an invalid email we can prompt them for an error later
    this.setState({ email: value.target.value });
  };
  join(){
      console.log(14)
      let email = this.state.email
      axios
      .post(
        endpoint + "/api/joinnow",
        {
      email
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
  }
    sendData(data) {
        this.props.buttonClick(data);
    };
    render() {

    return (
<Grid divided='vertically' style={gridoffset}>
    <Grid.Row columns={2}>
                <Grid.Column>
                    <Header style={mybigtext}> OUR STORY</Header>
                    <div style={{height:"740px",width:"633px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
                    Data Science Society is UC Berkeley's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications. Since our founding in 2016, we have united students from a wide range of disciplines behind our shared passion for all things data. Our mission is to foster a strong data science community on campus by advocating data science education and practice through our various committees and internal and external programs. Our educational and consulting initiatives have impacted hundreds of students in a variety of majors across campus and given them the technical and soft skills needed to thrive in a data-first world.

                    </div>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Row>
                    <Header style={mymidtext}> our mission</Header>
                    <div style={{height:"244px",width:"628px",border: "1px solid #000000",boxSizing: "borderBox",font:"Montserrat"}}>
                    Data Science Society is UC Berkeley's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications. Since our founding in 2016, we have united students from a wide range of disciplines behind our shared passion for all things data. Our mission is to foster a strong data science community on campus by advocating data science education and practice through our various committees and internal and external programs. Our educational and consulting initiatives have impacted hundreds of students in a variety of majors across campus and given them the technical and soft skills needed to thrive in a data-first world.
                    </div>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:"42px"}}>
                    <Header style={mymidtext}>our vision</Header>
                    <div style={{height:"354px",width:"628px",border: "1px solid #000000",boxSizing: "borderBox"}}>
                    <Embed
                    id='XW7Zkzf7_C8'
                    source='youtube'
  />
                    </div>
                    </Grid.Row>
                </Grid.Column>
  </Grid.Row>
  <Grid.Row>
  <Header style={header}> Why should you join DSS?</Header>
  <Grid>
    <Grid.Row columns={4}>
      <Grid.Column>
      <div style={{height:"348px",width:"301px",border: "1px solid #000000",boxSizing: "borderBox", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
      Executive Team
      </div>
      </Grid.Column>
      <Grid.Column>
      <div style={{height:"348px",width:"301px",border: "1px solid #000000",boxSizing: "borderBox", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
      Project Manager
</div>
      </Grid.Column>
      <Grid.Column>
      <div style={{height:"348px",width:"301px",border: "1px solid #000000",boxSizing: "borderBox", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
      Committee Member
</div>
      </Grid.Column>
      <Grid.Column>
      <div style={{height:"348px",width:"301px",border: "1px solid #000000",boxSizing: "borderBox", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
      Senior Advisor

</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4}>
    <Grid.Column>
    <div style={{height:"348px",width:"301px",border: "1px solid #000000",boxSizing: "borderBox", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
    General Member
</div>
      </Grid.Column>
      <Grid.Column>
      <div style={{height:"348px",width:"301px",border: "1px solid #000000",boxSizing: "borderBox", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
      DeCal Student
</div>
      </Grid.Column>
      <Grid.Column>
      <div style={{height:"226px",width:"529px",border: "1px solid #000000",boxSizing: "borderBox",marginTop:"70px", font:"Montserrat",fontSize:"36px",lineHeight:"44px",fontWeight:"300"}}>
      Internal Committee + Alumni
</div>
      </Grid.Column>
    </Grid.Row>
  </Grid>

                    <Header style={mybigtext}> LEADERSHIP</Header>
                    <Card.Group itemsPerRow={3}>
                    {leadershipCards}
                    </Card.Group>
  </Grid.Row>
  <Grid.Row>
  <Header style={mybigtext}> Our Sponsors</Header>
  <Image.Group size={"medium"}>
    <Image src={edlyft}>

    </Image>
    <Image src={berkeley}>

    </Image>
    <Image src={asuc}>

    </Image>
    <Image src={berkeley2}>

    </Image>
    <Image src={wids}>

    </Image>
  </Image.Group>

  </Grid.Row>
  <Grid.Row>
  <Header style={mybigtext}> Our Partners</Header>
<Image.Group size={"medium"} style={{marginTop:"30px"}}>
<Image style={{marginRight:"10px"}} src={sponsor1}>

</Image>
<Image style={{marginRight:"10px"}} src={sponsor2}>

</Image>
<Image style={{marginLeft:"10px"}} src={sponsor3}>

</Image>
</Image.Group>
  </Grid.Row>
  </Grid>
 
)

}
}
export default About;
