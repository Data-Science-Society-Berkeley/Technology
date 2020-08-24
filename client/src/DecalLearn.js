import React, { Component } from "react";
import axios from "axios";
import { Image,Grid,Card, Header, Form, Input, Icon, Button,List,Table } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import berk from './Decal Images/berkeleyischool-logo-alternate-blue-lg.png'
import datacamp from './Decal Images/datacamp-logo 1.png' 
import decal from './Decal Images/decalberkeleylogo 1.png'
import kate from './Leadership Headshots/kate.jpg'
import uma from './Leadership Headshots/uma.png'
import gaya from './Leadership Headshots/gayatri.png'

import steph from './Leadership Headshots/steph.jpg'
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
  lineHeight: "59px",
          fontSize: "48px",
          color:"#8CD6D1",
    width:"100%px",
    fontStyle: "normal",
    textAlign:"left",
    marginLeft:"64px",
    marginBottom:"42px",
};

  const button = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "29px",
    fontSize: "24px",
    color:"#FFFFFF",
    fontStyle: "normal",
    textAlign:"center",
    background: "#8CD6D1",
    marginLeft:"70px",
  };
  const textstyle = {
    fontFamily: "Montserrat",
    fontWeight: 300,
            fontSize: "37px",
            color:"#8CD6D1",
  }
  const cardstyle = { 
    width:"400px",
   // height: "800px",
    marginBottom:"10px",
    marginleft:"20px",
    textAlign:"center",
};
const imagestyle = {
  height: "400px",
  maxHeight: "400px",
  width: "400px",
  maxWidth: "400px",
};
const mymidtext = {marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "600",
fontSize: "24px",
lineHeight: "29px"}
const link = {
    fontFamily: "Montserrat",
    fontWeight: 300,
    lineHeight: "73px",
    fontSize: "48px",
    color:"#8CD6D1",
    fontStyle: "normal",
    textAlign:"center",
    marginTop:"20px",
  };
class DecalLearn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
      };
      this.join=this.join.bind(this);

  }
  loadTable(){
    return (<Table >
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell class='col-md-1 center'><b>Week</b></Table.HeaderCell>
            <Table.HeaderCell class='col-md-1'><b>Date</b></Table.HeaderCell>
            <Table.HeaderCell class='col-md-3'><b>Lecture</b></Table.HeaderCell>
            <Table.HeaderCell class='col-md-2'><b>Resources</b></Table.HeaderCell>
            <Table.HeaderCell class='col-md-2'><b>Assignments</b></Table.HeaderCell>
            <Table.HeaderCell class='col-md-2'><b>Lecturers</b></Table.HeaderCell>

        </Table.Row>
    </Table.Header>

    <Table.Body id='wk1'>
        <Table.Row>
            <Table.Cell rowspan="2" class="center">
                1
                <br/>
            </Table.Cell>
            <Table.Cell class="center">
                Monday, 2/10/20
            </Table.Cell>
            <Table.Cell>
                Welcome, Logistics & Python Bootcamp
            </Table.Cell>
            <Table.Cell>
              <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=172sgj7HjJvmUqFUS4Ocouv-FnJ_gPkyLbaihw6-KDEE"><b>Slides</b></a>

            </Table.Cell>
            <Table.Cell>
              None
            </Table.Cell>
            <Table.Cell>
                All
            </Table.Cell>
        </Table.Row>

    </Table.Body>
    <Table.Body id='wk2'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              2
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 2/14/20
          </Table.Cell>
          <Table.Cell>
              Data Manipulation and Wrangling: Pandas Part 1
          </Table.Cell>
          <Table.Cell>
<a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1OLtEp6Ib5VJ6OiikBZQcplcvLLxOL7kSkBgkGQVBlvM"><b>Slides</b></a>
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href=" https://learn.datacamp.com/courses/pandas-foundations"> <b>DataCamp</b> </a> (Chapter 1),
            <a rel="noopener noreferrer" target="_blank" href=" https://bcourses.berkeley.edu/courses/1492303/quizzes/2302206"><b>Quiz</b></a>
          </Table.Cell>
          <Table.Cell>
              Marta, Luke
          </Table.Cell>
      </Table.Row>

    </Table.Body>
    <Table.Body id='wk3'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              3
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 3/2/20
          </Table.Cell>
          <Table.Cell>
              Data Manipulation and Wrangling: Pandas Part 2
          </Table.Cell>
          <Table.Cell>
<a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1cD9pbU1TeYRA_jufeEtfBkpdnEvtxvZU"><b>Slides</b></a>
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="-https://learn.datacamp.com/courses/data-manipulation-with-pandas"><b>DataCamp</b></a> (Chapter 2),
            <a rel="noopener noreferrer" target="_blank" href="https://bcourses.berkeley.edu/courses/1492303/quizzes/2305108"><b>Quiz</b></a>
          </Table.Cell>
          <Table.Cell>
              Avik
          </Table.Cell>
      </Table.Row>

    </Table.Body>
    <Table.Body id='wk4'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              4
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 3/9/20
          </Table.Cell>
          <Table.Cell>
              SQL
          </Table.Cell>
          <Table.Cell>
<a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1ofo6dIbE8ZIqrAGtQ4qWdYZCDmsIZRe_mcD0r7uFwUU"><b>Slides</b></a>
          </Table.Cell>
          <Table.Cell>
<a rel="noopener noreferrer" target="_blank" href="https://learn.datacamp.com/courses/inTable.Rowoduction-to-sql"><b>DataCamp</b></a> (Chapter 1)
          </Table.Cell>
          <Table.Cell>
              Naman, Kanu
          </Table.Cell>
      </Table.Row>

    </Table.Body>
    <Table.Body id='wk5'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              5
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 3/16/20
          </Table.Cell>
          <Table.Cell>
              Statistical Models: NumPy for Linear and Logistic Regression
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1wLObHOpNv58GqpFOqP4aH84xu6KZfXHcVKn8-uNBFHM"><b>Slides</b></a>,
<a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=gWF0ExMa9dI&list=PLr1YvQvFwnNLWnamwLjdHKEmAv61Pwa5M"><b>YouTube</b></a>
          </Table.Cell>
          <Table.Cell>
            None
          </Table.Cell>
          <Table.Cell>
              Nikhil, Elton, Jae
          </Table.Cell>
      </Table.Row>

    </Table.Body>
    <Table.Body id='wk6'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              6
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 3/30/20
          </Table.Cell>
          <Table.Cell>
              Data Visualization and Exploratory Data Analysis
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/open?id=1xsSkryUMDsVn3dzNNSesyO4kxau23M8ncn6TLoiClO0"><b>Slides</b></a>,
<a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=VqkT0cWgp0I&list=PLrLqdyL0AkkTo_rOVEynNDhEKU9nhDU6R
">YouTube</a>
          </Table.Cell>
          <Table.Cell>
<a rel="noopener noreferrer" target="_blank" href="https://learn.datacamp.com/courses/data-visualization-for-everyone"><b>DataCamp (Optional)</b></a> (Chapter 1),
<a rel="noopener noreferrer" target="_blank" href="https://bcourses.berkeley.edu/courses/1492303/quizzes/2305108"><b>Quiz</b></a>
          </Table.Cell>
          <Table.Cell>
              Dhruv, Uma
          </Table.Cell>
      </Table.Row>

    </Table.Body>
    <Table.Body id='wk7'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              7
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 4/6/20
          </Table.Cell>
          <Table.Cell>
              Speadsheets
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/presentation/d/1xSzpGfNrwX2GH0O-ZN9d-QEmDBAN66G2VYVu6moMR6U/edit?usp=sharing"><b>Slides</b></a>,
            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/playlist?list=PLr1YvQvFwnNLFsQ6NniLzs3zRI6d1Zrr2"><b>YouTube</b></a>
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="https://learn.datacamp.com/courses/inTable.Rowoduction-to-spreadsheets"><b>DataCamp (Optional)</b></a> (Chapters 1 and 2)
          </Table.Cell>
          <Table.Cell>
              Avik, Gayatri, Varun, Kate, Naman
          </Table.Cell>
      </Table.Row>

    </Table.Body>
    <Table.Body id='wk8'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              8
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 4/13/20
          </Table.Cell>
          <Table.Cell>
              Tableau
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/presentation/d/1L1dvAOGslcDHeQ1K_-eH33cDwVqtibbZLaGuaZSrWwA/edit?usp=sharing"><b>Slides</b></a>,
            <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=_GamGKPR1CQ&list=PLr1YvQvFwnNKOsCFJKKvlQ2nZZw5O8ujc"><b>YouTube</b></a>
          </Table.Cell>
          <Table.Cell>
            <a rel="noopener noreferrer" target="_blank" href="https://www.datacamp.com/users/sign_in?redirect=https://learn.datacamp.com/courses/inTable.Rowoduction-to-tableau"><b>DataCamp (Optional)</b></a> (Chapter 1)
          </Table.Cell>
          <Table.Cell>
              Jae, Naman, Kanu, Kate, Avik, Elton, Varun, Gayatri.Rowi
          </Table.Cell>
      </Table.Row>

    </Table.Body>

    <Table.Body id='wk9'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              9
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 4/20/20
          </Table.Cell>
          <Table.Cell>
              Exploring Seaborn In-Depth
          </Table.Cell>
          <Table.Cell>
<a target="_blank" href="Matplotlib_Seaborn_Lecture.zip" download="Seaborn.ipynb"><b>Notebook</b></a>,
<a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/playlist?list=PLr1YvQvFwnNLXd63ZDY1hnJAgQNSlqL--"><b>YouTube</b></a>
          </Table.Cell>
          <Table.Cell>
          </Table.Cell>
          <Table.Cell>
              Kanu
          </Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Body id='wk10'>
      <Table.Row>
          <Table.Cell rowspan="2" class="center">
              10
              <br/>
          </Table.Cell>
          <Table.Cell class="center">
              Monday, 4/27/20
          </Table.Cell>
          <Table.Cell>
              Special Topic Guest Leture
          </Table.Cell>
          <Table.Cell>
<a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/playlist?list=PL8vMYRBYmK6vwKwtZ0RyNT3fLPW8Lm6sZ"><b>YouTube</b></a>
          </Table.Cell>
          <Table.Cell>

          </Table.Cell>
          <Table.Cell>
              Dhruv
          </Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table> 
    )
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
        <Grid>
<Grid.Row>

        <Header style={mybigtext}> DeCal: Essential Tools for Data Science | Fall 2020 </Header>
        </Grid.Row>

        <div style={{marginBottom:"50px",marginLeft:"64px", 
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "300",
fontSize: "24px",
lineHeight: "29px"}}>
        <Grid.Row>

  <div >
<b style={mymidtext}>Essential Tools for Data Scientists</b>  | Spring 2020       </div>
<div style={{marginLeft:"197px"}}>
Welcome to Data Science Society at Berkeley&rsquo;s very own DeCal: Essential Tools for Data Scientists! This course is geared towards exposing students to essential data science skills that are
                        demanded in industry and are meant to be taken as a follow-up or alongside Data 8. The course covers the bits of data science and machine learning that aren’t traditionally taught in the classroom
                        like advanced Pandas and Seaborn, and visualization dashboards that will challenge you, sharpen your skills and elevate you in the internship game.
                        <br/>
                        In this course, you will learn everything you need to know from the ground up from an introduction on Python, to software like Excel and Tableau, to other essential skills through a personalized
                        data science project that includes data cleaning, visualization, statistical analysis, and machine learning.
</div>
        </Grid.Row>

<div style={{marginLeft:"0px"}}>
<Grid.Row>

<Header  >
  <b style={mymidtext}>Logistics</b>
</Header>
<List style={{marginLeft:"60px"}}>
<List.Item>
<b>Time</b>: Mondays, 6:30 - 8:30 PM 
</List.Item>
<List.Item>
<b>Location</b>: Moffitt 101 
</List.Item>
<List.Item>
<b>Email</b>: <a href="mailto: decal@dss.berkeley.edu"> <b> decal@dss.berkeley.edu </b> </a>
</List.Item>
<List.Item>
<b>Office Hours</b>: <a href="https://calendar.google.com/calendar?cid=YmVya2VsZXkuZWR1X21hdjJqYjcxODloNTJnN3Boc2xtZmU0ZTBvQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"> <b>Calendar</b></a> 
</List.Item>
<List.Item>
<b>Piazza</b>: <a href="https://piazza.com/class/k6fjdl1bk7p2jb"> <b>INFO 98</b> </a> 
</List.Item>

</List>
        </Grid.Row>
        <Grid.Row>

<Header  >
  <b style={mymidtext}> Prerequisites</b>
</Header>
<div style={{marginLeft:"197px"}}>
There are no formal prerequisites for this course. It is recommended to have some level of basic programming experience in Python, but not required. We want you to learn as much as possible and will help you get up to speed quickly!
</div>
<Header  >
  <b style={mymidtext}> Grading</b>
</Header>
<List style={{marginLeft:"60px"}}>
<List.Item>
Attendance: 20% (2 Drops)</List.Item>
<List.Item>
Labs: 20% (2 Drops)</List.Item>
<List.Item>
Final Project: 50%</List.Item>
<List.Item>
Reading Quizzes: 10% (2 Drops)
</List.Item>

</List>
<Header style={{marginLeft:"60px"}}>
  Schedule
</Header>
        </Grid.Row>
        <Grid.Row>

{this.loadTable()}
</Grid.Row>

</div>
        <Grid.Row>

       <Header style={link}>
       DeCal Course Staff
       </Header>   
       <Card.Group centered style={{}}>
       <Card style={cardstyle}> <Image style={imagestyle} src={kate}/>    
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
      <a href="mailto:roshanlodha@berkeley.edu">
        <Icon name='mail' />
        </a>
        <a href="http://linkedin.com/in/roshanlodha">
        <Icon name='linkedin' />
        </a>
      </Card.Content>
</Card>
<Card style={cardstyle}>    <Image  style={imagestyle} src={uma}  />
<Card.Content>
<Card.Header style={textstyle}>Uma Krishnaswamy</Card.Header>
<Card.Meta>
        <span className='date'>Director of DeCal</span>
      </Card.Meta>
      <Card.Description>
      Uma is a director of DeCal.      
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="mailto:alleanna@berkeley.edu">
        <Icon name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/alleanna-clark-5b37aa16a/ ">
        <Icon name='linkedin' />
        </a>
      </Card.Content>
</Card>
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
      <a href="mailto:stephanie.lu@berkeley.edu">
        <Icon name='mail' />
        </a>
        <a href="https://www.linkedin.com/in/stephanie-l-705a29175/">
        <Icon name='linkedin' />
        </a>
      </Card.Content>
</Card>
</Card.Group>
       </Grid.Row>
  </div>
  </Grid>
  </div>

)

}
}
export default DecalLearn;
