import React from 'react';
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

};
const form_formatting = { marginLeft: "41px", marginRight: "91px", };
//TODO make the bottom card on the left side reactive like the top one...
export default () => (
      <Grid columns={2} padded={true} >
        <Grid.Column width={4} style={card_formatting } >
        <Card.Group fluid >

          <Card fluid> 
      <h2 className= "not-registered-yet"> Not Registered Yet?</h2>
      <Card.Description className= "register-now-to-buy" style={description_formatting}>
              Register now to buy and sell lumber. It's easy and free!
            </Card.Description>

            <Button  color={"green"} size={"mini"} fluid={false} style={button_formatting}>
                REGISTER NOW
              </Button>
          </Card>
          <Card fluid>
            
      <Card.Header className="did-you-know" >Did you know...
</Card.Header>
      <Card.Description style={description_formatting} className="the-best-lumber-are">
            The best lumber are often not bought at the best price.
Statistics show that money is lost when there are too many
steps in the purchasing process.
            </Card.Description>
            <div className="learn-more">
          Learn More
          </div>
          </Card>
       
          </Card.Group>

        

        </Grid.Column>



        <Grid.Column width={10} style={card_formatting } className="the-best-lumber-are">
          <Card fluid >
          <Header as="h2" style={login_formatting } className="sign-in">
            Sign In
          </Header>
            <Form size="large" style={form_formatting}>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="Password"
              />
  <Form.Checkbox label='Keep me signed in' />

              <Form.Button color="blue" size="large" style={submit} >
                <div className="button-text">SIGN IN</div>
              </Form.Button>
            </Form>
          </Card>
        </Grid.Column>
      </Grid>

);
