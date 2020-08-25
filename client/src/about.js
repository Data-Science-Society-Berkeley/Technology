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

import pm from './About/_MG_59681.png'
import exec from './About/group1.png'
import commit from './About/dsssp20-biglittlereveal-groupphoto1.png'
import gen from './About/operationanalytics21.png'
import decal from './About/learn.png'
import senior from './About/widsberkeleydssspring20201.png'










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
  lineHeight: "78px",
          fontSize: "64px",
          color:"#8CD6D1",
    fontStyle: "normal",
};
const header = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  lineHeight: "78px",
          fontSize: "64px",
          color:"#8CD6D1",
    fontStyle: "normal",
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
const execstyle1 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          width:"356px",
          maxWidth:"356px",
          height:"352px",
          borderRadius:"15px",
          backgroundImage:`url(${exec})`,
          margin:"0 auto"
}
const execstyle2 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          fontColor:"#FFFFFF",
          width:"356px",
          height:"352px",
          borderRadius:"15px",
          backgroundImage:`url(${pm})`,
          backgroundColor:"transparent",
          margin:"0 auto"
          
}
const execstyle3 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          fontColor:"#FFFFFF",
          width:"356px",
          height:"352px",
          borderRadius:"15px",
          backgroundImage:`url(${commit})`,
          margin:"0 auto"
}
const execstyle4 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          fontColor:"#FFFFFF",
          width:"356px",
          height:"352px",
          borderRadius:"15px",
          backgroundImage:`url(${gen})`,
          margin:"0 auto"

}
const execstyle5 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          fontColor:"#FFFFFF",
          width:"356px",
          height:"352px",
          borderRadius:"15px",
          backgroundImage:`url(${decal})`,
          margin:"0 auto"

}
const execstyle6 = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          fontColor:"#FFFFFF",
          width:"356px",
          height:"352px",
          borderRadius:"15px",
          backgroundImage:`url(${senior})`,
          margin:"0 auto"

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
<Grid entered style={gridoffset}>
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
                    </Grid.Row>
                </Grid.Column>

  </Grid.Row>
  <Grid.Row width={12} centered>
  <div style={header}> Why Join?</div>
  </Grid.Row>
  <Grid.Row width={12} centered>
  <div style={{fontSize:"36px",lineHeight:"44px",fontWeight:"500px",marginTop:"22px",color:"#B6E5D7",fontFamily:"Montserrat"}}> Simple. To be a part of our family.</div>

  </Grid.Row>

  <Grid.Row centered>
  </Grid.Row>
<Grid.Row width={12} centered>

  <div style={{width:"1100px",border: "10px solid #B6E5D7",boxSizing: "borderBox",marginBottom:"81px",marginTop:"145px"}}>
                    <Embed
                    id='XW7Zkzf7_C8'
                    source='youtube'
  />
                    </div>
  </Grid.Row>
    <Grid.Row width={12} centered>
  <div style={header}> Find your place</div>
  </Grid.Row>
    <Grid.Row centered columns={3}  style={{marginTop:"124px"}}>
      <Grid.Column style={{}}>
      <div style={execstyle1}>
      <div style={{marginLeft:"31px",paddingTop:"30px"}}>
      Executive <br/>  Team
      </div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div style={execstyle2}>
      <div style={{marginLeft:"33px",paddingTop:"30px"}}>
      Project <br/> Manager
      </div>
</div>
      </Grid.Column>
      <Grid.Column >
      <div style={execstyle3}>
      <div style={{marginLeft:"37px",paddingTop:"30px"}}>
      Committee Member
      </div>
</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={3}>
    <Grid.Column>
    <div style={execstyle4}>
      <div style={{marginLeft:"31px",paddingTop:"30px"}}>
      General <br/>  Member
      </div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div style={execstyle5}>
      <div style={{marginLeft:"33px",paddingTop:"30px"}}>
      DeCal <br/> Student
      </div>
</div>
      </Grid.Column>
      <Grid.Column>
      <div style={execstyle6}>
      <div style={{marginLeft:"37px",paddingTop:"30px"}}>
      Senior<br/> Advisor
      </div>
</div>
      </Grid.Column>
    </Grid.Row>
<Grid.Row centered width={12}>
                    <div style={mybigtext}> Our Exec Team</div>
                    <Card.Group centered itemsPerRow={3}>
                    {leadershipCards}
                    </Card.Group>
``
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
