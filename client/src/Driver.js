import React, { Component } from "react";
import axios from "axios";
import {CheckBox,Button, Image,Grid,Card,Dropdown ,Menu,Header, Form, Input, Icon, Segment, Container,Label} from "semantic-ui-react";
import Formx from "./Formx";
const friendOptions = [
    {
            key: 'Jenny Hess',
            text: 'Jenny Hess',
            value: 'Jenny Hess',
            image: { avatar: true, src: '/images/avatar/small/jenny.jpg'  },

    },
    {
            key: 'Elliot Fu',
            text: 'Elliot Fu',
            value: 'Elliot Fu',
            image: { avatar: true, src: '/images/avatar/small/elliot.jpg'  },

    },
    {
            key: 'Stevie Feliciano',
            text: 'Stevie Feliciano',
            value: 'Stevie Feliciano',
            image: { avatar: true, src: '/images/avatar/small/stevie.jpg'  },

    },
    {
            key: 'Christian',
            text: 'Christian',
            value: 'Christian',
            image: { avatar: true, src: '/images/avatar/small/christian.jpg'  },

    },
]
const style = {
  hang: {
    fontFamily: "Akkurat",
    background: "inherit",
    fontWeight: "lighter"
  },
}


class  Driver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "",
      activeMarriage: "",
      activeTraffic: "",
      activeSus: "",
    };
  }
  handleItemClick = (e, { name  }) => this.setState({ activeItem: name  })
  handleMarriageClick = (e, { name  }) => this.setState({ activeMarriage: name  })
  handleTrafficClick = (e, { name  }) => this.setState({ activeTraffic: name  })
  handleSusClick = (e, { name  }) => this.setState({ activeSus: name  })
render (){
      const { activeItem  } = this.state
      console.log(activeItem)
    return (
    <div className = "carCard">
        <div style={{margin:"auto"}}>
        <Menu fluid vertical borderless={true} style={style.hang}>
                <Menu.Item className='header'>Arjun Mishra</Menu.Item>
                <Menu.Item className='header'>Birthday: 4/28/1999</Menu.Item>
                <Menu.Item className='header'>License:</Menu.Item>
              </Menu>
      </div>
        <div style={{marginLeft:"15px",marginRight:"15px",marginTop:"10px"}}>
      <Form>
          <Form.Field>
            <label>First Name</label>
        <Menu widths={3}>
                <Menu.Item className='header' name='Male'    active={this.state.activeItem=== 'Male'}
                onClick={this.handleItemClick} > Male </Menu.Item>
                <Menu.Item className='header'    active={this.state.activeItem === 'Female'}
                onClick={this.handleItemClick} name='Female'> Female </Menu.Item>
                <Menu.Item className='header' name='Other'    active={this.state.activeItem === 'Other'}
                onClick={this.handleItemClick}> Other </Menu.Item>
              </Menu>
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>Age first licensed in the U.S. or Canada</label>
            <input placeholder='16' />
          </Form.Field>
          <Form.Field>
            <label>Are you legally married or in a domestic partnership?</label>
        <Menu widths={2}>
                <Menu.Item className='header' name='Yes'    active={this.state.activeMarriage === 'Yes'}
                onClick={this.handleMarriageClick} > Yes </Menu.Item>
                <Menu.Item className='header'name='No'    active={this.state.activeMarriage === 'No'}
                onClick={this.handleMarriageClick} > No </Menu.Item>
              </Menu>
          </Form.Field>
         <Form.Field>
        <Dropdown
          placeholder='Select License Status'
          fluid
          selection
          options={friendOptions}
        />
          </Form.Field>
         <Form.Field>
        <Dropdown
          placeholder='Select Employment Status'
          fluid
          selection
          options={friendOptions}
        />
          </Form.Field>
          <Form.Field>
            <label>Do you have a traffic violation in the last 3 years?</label>
        <Menu widths={2}>
                <Menu.Item className='header' name='Yes'    active={this.state.activeTraffic === 'Yes'}
                onClick={this.handleTrafficClick}> Yes </Menu.Item>
                <Menu.Item className='header' name='No'    active={this.state.activeTraffic === 'No'}
                onClick={this.handleTrafficClick}> No </Menu.Item>
              </Menu>
          </Form.Field>
          <Form.Field>
            <label>License suspended or revoked in last 3 years?</label>
        <Menu widths={2}>
                <Menu.Item className='header' name='Yes'    active={this.state.activeSus === 'Yes'}
                onClick={this.handleSusClick}> Yes </Menu.Item>
                <Menu.Item className='header' name='No'    active={this.state.activeSus === 'No'}
                onClick={this.handleSusClick}>> No </Menu.Item>
              </Menu>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </div>

  )
}
}
export default Driver





