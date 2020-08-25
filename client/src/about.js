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
import join from './About/JoinUs.jpg'
import story from './About/OurStory.jpg'
import popout from './About/popoutDesign.png'













let endpoint = "http://localhost:8080";
const gridoffset = {
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
const aboutlinks = {
  fontFamily: "Montserrat",
  fontWeight: "normal",
          fontSize: "36px",
          lineHeight:"44px",
          color:"#FFFFFF",
          textAlign:"center",
          marginTop:"25px",
}
const overlayboxes = {
background: "#FFFFFF",
border: "5px solid #8CD6D1",
boxSizing: "border-box",
boxShadow: "5px 4px 10px 2px rgba(0, 0, 0, 0.25)",
borderRadius: "20px",
height:"236px",
width:"284px",
marginLeft:"150px",
marginBottom:"70px",
}

var circleStyle = {
  padding:10,
  marginLeft:-34,
  marginTop:"-50px",
  display:"inline-block",
  backgroundColor: "#8CD6D1",
  borderRadius: "50%",
  width:100,
  height:100,
  fontFamily:"Montserrat",
  fontStyle:"normal",
  fontWeight:"600",
  fontSize:"72px",
  lineHeight:"88px",
  color:"#FFFFFF",
  textAlign:"center",
};
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
      <div>
       <div style={{zIndex:"1",position:"relative"}}>
      <Image src={story} style={{width:"120%",height:"auto",zIndex:"2"}}>
      </Image>
      <div style={{width:"100%",textAlign:"center",background: "rgba(140, 214, 209, 0.6)"}}>
      <span style={{position: "absolute",top:"50%",transform: "translate(-50%, -50%)" ,zIndex: "3",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"bold",fontSize:"72px",lineHeight:"88px",color:"#FFFFFF"}}> OUR STORY</span>
      <div style={{background: "rgba(140, 214, 209, 0.6)",zIndex:"2",position: "absolute",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0}}></div>
      </div>

     </div>
     <Grid entered style={gridoffset}>
     <Grid.Row width={16} columns={4} style={{backgroundColor:"#8CD6D1",width:"100%",height:"97px",marginTop:"-45px"}}>
     <Grid.Column width={4} style={aboutlinks}>
     Who we are
     </Grid.Column>
   <Grid.Column style={aboutlinks}>
       Why Join?
     </Grid.Column>
     <Grid.Column style={aboutlinks}>
       Find your place
       </Grid.Column>
       <Grid.Column style={aboutlinks}>
       Our Team
       </Grid.Column>
    

     </Grid.Row>
     
    <Grid.Row centered columns={1} style={{marginBottom:"90px"}}>
    <div style={header}> Who We Are</div>
    <Grid.Column style={{marginLeft:"170px",marginRight:"auto"}}>
    <div style={{fontSize:"36px",lineHeight:"44px",fontWeight:"500px",marginTop:"22px",color:"#B6E5D7",fontFamily:"Montserrat"}}> A family of passionate individuals looking to make a change.</div>
    <div style={{fontSize:"29px",lineHeight:"35px",fontWeight:"normal",marginTop:"22px",color:"#C4C4C4",fontFamily:"Montserrat"}}>
    Data Science Society is UC Berkeley's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications. Since our founding in 2016, we have united students from a wide range of disciplines behind our shared passion for all things data.
    </div>
    </Grid.Column>

  </Grid.Row>
  <Grid.Row>
  <div style={{zIndex:"1",position:"relative"}}>
  <Image src={popout} style={{zIndex:"2"}}>
  </Image>
  <div style={{position: "relative", textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",top: "-442px",left:"-340px", zIndex: "3",fontFamily:"Montserrat",fontStyle:"600",fontWeight:"bold",fontSize:"64px",lineHeight:"78px",color:"#FFFFFF"}}>
    <span >
      Our mission
    </span>
    <div style={{position: "relative",width:"859px",top: "32px",left:"420px", zIndex: "4",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal",fontSize:"27px",lineHeight:"33px",color:"#FFFFFF"}}> 
  We aim to foster a strong data science community on campus by advocating data science education and practice through our various committees and internal and external programs. Our educational and consulting initiatives have impacted hundreds of students in a variety of majors across campus and given them the technical and soft skills needed to thrive in an increasingly data-centric world.
</div>
  </div>

 
  </div>
  </Grid.Row>
  <Grid.Row width={12} centered>
  <div style={header}> Why Join?</div>
  </Grid.Row>
  <Grid.Row width={12} centered>
  <div style={{fontSize:"36px",lineHeight:"44px",fontWeight:"500px",marginTop:"22px",color:"#B6E5D7",fontFamily:"Montserrat",marginBottom:"50px"}}> Simple. To be a part of our family.</div>

  </Grid.Row>
  <Grid.Row  width={6} centered>
  <Card.Group  centered>
  <Card style={overlayboxes}>
  <Card.Header/>
  <div style={circleStyle}> 1</div>
  <Card.Description style={{marginTop:"40px"}}>
  At essence, a social community! MemDev, Big/Little, and more!
  </Card.Description>

  </Card>
  <Card style={overlayboxes}>
  <Card.Header/>
  <div style={circleStyle}> 2</div>
  <Card.Description style={{marginTop:"40px"}}>
  Career-driven, help get you to where you want to be.  </Card.Description>
  </Card>
  <Card style={overlayboxes}>
  <Card.Header/>
  <div style={circleStyle}> 3</div>
  <Card.Description style={{marginTop:"40px"}}>
  Work to support the entire campus + extend outside its boundaries in data science initiatives.   </Card.Description>
  </Card>
  <Card style={overlayboxes}>
  <Card.Header/>
  <div style={circleStyle}> 4 </div>
  <Card.Description style={{marginTop:"40px"}}>
  Diversity in cultural and academic backgrounds! Strive to encompass all of   </Card.Description>
  </Card>
  <Card style={overlayboxes}>
  <Card.Header/>
  <div style={circleStyle}> 5 </div>
  <Card.Description style={{marginTop:"40px"}}>
  A variety of roles that can satisfy what you want to do  </Card.Description>
  </Card>
  </Card.Group>
  </Grid.Row>
  <Grid.Row columns={2}>
  <Grid.Column>
    
    </Grid.Column>
    <Grid.Column>
    
    </Grid.Column>

  </Grid.Row>
  <Grid.Row centered>
  </Grid.Row>
<Grid.Row width={12} centered>

  <div style={{width:"1100px",border: "10px solid #B6E5D7",boxSizing: "borderBox",marginBottom:"81px",marginTop:"70px"}}>
                    <Embed
                    id='XW7Zkzf7_C8'
                    source='youtube'
  />
                    </div>
  </Grid.Row>
  <Image fluid src={join} style={{marginTop:"120px",zIndex:2}}>
    </Image>
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
  </div>
 
)

}
}
export default About;
