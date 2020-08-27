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
//import story from './About/OurStory.jpg'
import story from './About/OurStory-Compressed-min.jpg'
import popout from './About/popoutDesign.png'
import ret from './About/RetreatPic.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import youtubeback from './About/youtubevideo-cover.jpg'












let endpoint = "http://localhost:8080";
const gridoffset = {
          marginTop: "42px",
          textAlign:"center",
          fontFamily: "Montserrat"
};



const mybigtext = {
  fontFamily: "Montserrat",
  fontWeight: 500,
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
          marginTop:"15px",
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
fontFamily:"Montserrat",
fontSize:"20px",
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
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:stephanie.lu@berkeley.edu">
        <Icon size="large"  name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
        <Icon size="large" name='linkedin' />
        </a>
      </Card.Content>
</Card>,<Card style={cardstyle}>    <Image style={imagestyle} src={roshan}/>
  <Card.Content>
  <Card.Header style={textstyle}>Roshan Lodha</Card.Header>
  <Card.Meta>
          <span className='date'>Director of Acadev</span>
        </Card.Meta>
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
      </Card.Content>
      <Card.Content extra>
        <a href="mailto:grover.kanu@berkeley.edu">
          <Icon size="large"  name='mail' />
          </a>
          <a href="https://www.linkedin.com/in/kanu-grover-a89983187/">
          <Icon size="large"  name='linkedin' />
          </a>
        </Card.Content>
  </Card>
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
    scrollJoin(){
      document.getElementById( 'join' ).scrollIntoView();
    }
    scrollWho(){
      document.getElementById( 'who' ).scrollIntoView();
    }
    scrollFind(){
      document.getElementById( 'place' ).scrollIntoView();
    }
    scrollTeam(){
      document.getElementById( 'team' ).scrollIntoView();
    }
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
     <div onClick={this.scrollWho}>
     Who we are
     </div>

     </Grid.Column>
   <Grid.Column style={aboutlinks}>
   <div onClick={this.scrollJoin}>
   Why Join?

   </div>
     </Grid.Column>
     <Grid.Column style={aboutlinks}>
     <div onClick={this.scrollFind}>
     Find your place

     </div>
       </Grid.Column>
       <Grid.Column style={aboutlinks}>
       <div onClick={this.scrollTeam}>
       Our Team

       </div>
       </Grid.Column>
    

     </Grid.Row>
     
    <Grid.Row centered columns={1} style={{marginBottom:"100px"}}>
    <div style={{marginTop:"100px"}}>
    <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"150px",marginTop:"93px",marginRight:"-185px",marginBottom:"-40px"}}> </div>
    <div id="who" style={header}> 
    Who We Are</div>
    </div>

    <Grid.Column style={{marginLeft:"170px",marginRight:"auto",marginTop:"33px"}}>
    <div style={{fontSize:"36px",lineHeight:"44px",fontWeight:"500px",marginTop:"22px",color:"#B6E5D7",fontFamily:"Montserrat",textAlign:"center",marginLeft:"-280px"}}> A family of passionate individuals looking to make a change.</div>
    <div style={{fontSize:"29px",lineHeight:"35px",fontWeight:"normal",marginTop:"56px",color:"#C4C4C4",fontFamily:"Montserrat",textAlign:"center",marginLeft:"200px",marginRight:"400px"}}>
    Data Science Society is UC Berkeley's first student-run, not-for-profit organization focused on data science and its interdisciplinary applications. Since our founding in 2016, we have united students from a wide range of disciplines behind our shared passion for all things data.
    </div>
    </Grid.Column>

  </Grid.Row>
  <Grid.Row>
  <div style={{zIndex:"1",position:"relative"}}>
  <Image src={popout} style={{zIndex:"2"}}>
  </Image>
  <div style={{position: "relative", textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",top: "-405px",left:"-320px", zIndex: "3",fontFamily:"Montserrat",fontStyle:"600",fontWeight:"bold",fontSize:"64px",lineHeight:"78px",color:"#FFFFFF",marginBottom:"40px"}}>
    <span >
      Our mission
    </span>
    <div style={{position: "relative",textShadow:"none" ,width:"859px",top: "32px",left:"420px", zIndex: "4",fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal",fontSize:"27px",lineHeight:"33px",color:"#FFFFFF",textAlign:'left'}}> 
  We aim to foster a strong data science community on campus by advocating data science education and practice through our various committees and internal and external programs. Our educational and consulting initiatives have impacted hundreds of students in a variety of majors across campus and given them the technical and soft skills needed to thrive in an increasingly data-centric world.
</div>
  </div>

 
  </div>
  </Grid.Row>
  <Grid.Row width={12} centered style={{marginTop:"-250px"}}>
  <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"-735px",marginTop:"43px",marginRight:"-185px",marginBottom:"-80px"}}> </div>
  <div id="join"  style={header}> Why Join?</div>
  </Grid.Row>
  <Grid.Row width={12} centered>
  <div style={{fontSize:"36px",lineHeight:"44px",fontWeight:"500px",marginTop:"-120px",color:"#B6E5D7",fontFamily:"Montserrat",marginBottom:"94px"}}> Simple. To be a part of our family.</div>

  </Grid.Row>
  <Grid.Row>
  <Image src={ret}style={{width:"100%",height:"auto"}}>

  </Image>

  </Grid.Row>
  <Grid.Column>
    
    </Grid.Column>
    <Grid.Column>
    
    </Grid.Column>
  <Grid.Row centered>
  </Grid.Row>
  
  <Grid.Row centered style={{fontFamily:"Montserrat",fontStyle:"normal",fontSize:"48px",lineHeight:"59px",color:" #8CD6D1"}}>
  Check out our Fall 2020 Recruitment Video!
  </Grid.Row>
<Grid.Row width={12} centered style={{marginBottom:"100px"}}>

  <div style={{width:"1100px",border: "10px solid #B6E5D7",boxSizing: "borderBox",marginBottom:"0px",marginTop:"70px"}}>
                    <Embed
                    id='XW7Zkzf7_C8'
                    source='youtube'
                    placeholder={youtubeback}
  />
                    </div>
  </Grid.Row>
    <Grid.Row width={12} centered>
    <div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"-655px",marginTop:"43px",marginRight:"-185px",marginBottom:"-80px"}}> </div>
  <div style={header} id="place">  Find your place</div>
  </Grid.Row>
    <Grid.Row centered columns={3}  style={{marginTop:"56px"}}>
      <Grid.Column style={{}}>
      <div style={execstyle1}>
      <div style={{marginLeft:"31px",paddingTop:"30px"}}>
      Executive <br/>  Team
      </div>
      <div style={{fontSize:"18px",lineHeight:"22px",marginTop:"109px",marginLeft:"25px"}}>
      Our team of execs is in charge of all the club operations. 

View our current team below!
      </div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div style={execstyle2}>
      <div style={{marginLeft:"33px",paddingTop:"30px"}}>
      Project <br/> Manager
      </div>
      <div style={{fontSize:"18px",lineHeight:"22px",marginTop:"88px",marginLeft:"25px"}}>
      Project managers apply their past consulting experience and analytics expertise to lead our teams. Typically, we have 10 PMs to lead 5 consulting projects per semester. 
      </div>
</div>
      </Grid.Column>
      <Grid.Column >
      <div style={execstyle3}>
      <div style={{marginLeft:"37px",paddingTop:"30px"}}>
      Committee Member
      </div>
      <div style={{fontSize:"18px",lineHeight:"22px",marginTop:"90px",marginLeft:"25px"}}>
      CMs hold the responsibilities of their respective committees: Academic Development, Consulting, DeCal and Social Good! They can also join our internal committees like Tech and Culture. 
      </div>
</div>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row centered columns={3} style={{marginTop:"69px"}}>
    <Grid.Column>
    <div style={execstyle4}>
      <div style={{marginLeft:"31px",paddingTop:"30px"}}>
      General <br/>  Member
      </div>
      <div style={{fontSize:"18px",lineHeight:"22px",marginTop:"84px",marginLeft:"25px"}}>
      GMs complete semester-long research projects under the guidance of our Academic Development committee. 
      </div>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div style={execstyle5}>
      <div style={{marginLeft:"33px",paddingTop:"30px"}}>
      DeCal <br/> Student
      </div>
      <div style={{fontSize:"18px",lineHeight:"22px",marginTop:"84px",marginLeft:"25px"}}>
      DeCal students enroll in our 2-unit course: Essential Tools for Data Science and learn various DS topics that prepare you for industry. This is completely student-run by our DeCal committee. 
      </div>
</div>
      </Grid.Column>
      <Grid.Column>
      <div style={execstyle6}>
      <div style={{marginLeft:"37px",paddingTop:"30px"}}>
      Senior<br/> Advisor
      </div>
      <div style={{fontSize:"18px",lineHeight:"22px",marginTop:"84px",marginLeft:"25px"}}>
      Our Senior Advisors are made up of students who have been committee members for 2+ semesters! Their obligations vary from advising consulting teams to guest lecturing to holding internal coffee chats! 
      </div>
</div>
      </Grid.Column>
    </Grid.Row>
<Grid.Row centered width={12} style={{marginTop:"100px"}}>
<div style={{position:"relative",width:"189px",height:"13px",background: "#FFC54A",left:"-655px",marginTop:"43px",marginRight:"-185px",marginBottom:"-80px"}}> </div>
                    <div id="team" style={mybigtext}> Our Exec Team</div>
                    <Card.Group centered style={{marginTop:"56px"}}>
                    {leadershipCards} 
                    </Card.Group>
``
                    </Grid.Row>
                    

  <Grid.Row style={{marginTop:"100px",marginLeft:"240px"}}>
  <Header style={mybigtext}> Our Sponsors</Header>
  </Grid.Row>
  <Grid.Row style={{marginTop:"56px",marginLeft:"240px"}} >
  <Image.Group size={"medium"}>
  <Image src={berkeley}  style={{marginLeft:"1px"}}>

</Image>
<Image src={berkeley2} style={{marginLeft:"40px",width:"447px",marginTop:"-100px"}}>

</Image>
    
    <Image src={asuc} style={{marginLeft:"151px"}}>

    </Image>
    </Image.Group>
<Image.Group>
    <Image src={datacamp}>

</Image>
    <Image src={wids}>

    </Image>
    <Image src={edlyft}>

</Image>
  </Image.Group>

  </Grid.Row>
  <Grid.Row style={{marginTop:"20px",marginLeft:"240px"}}>
  <Header style={mybigtext}> Our Partners</Header>
  </Grid.Row>
  <Grid.Row style={{marginTop:"56px",marginLeft:"240px"}} >
<Image.Group size={"medium"} style={{marginTop:"30px",marginBottom:"100px"}}>
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
