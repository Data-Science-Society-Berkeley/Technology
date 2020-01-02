//PolicyCard
import React, { Component } from "react";
import { Header, Button, Form,Menu,Segment,Divider,Card,Dropdown } from "semantic-ui-react";
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
class PolicyCard extends Component {
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
  //TODO implement inline calendar
  render() {
    return (
      <Card style={{ width: "440px",marginLeft:"auto",marginRight:"0px" }}>
        <Segment>
          <Header as="h3" textAlign={'center'}> Policy-Level Coverage</Header>
          <Divider section />
          <Form>
              <Form.Field>
              <Dropdown
          placeholder='Select Employment Status'
          fluid
          selection
          options={friendOptions}
        />
              </Form.Field>
        
            <Form.Field>
              <label>Medical Payments</label>
              <Menu widths={3}>
                <Menu.Item
                  className="header"
                  name="Yes"
                  active={this.state.activeItem === "Yes"}
                  onClick={this.handleItemClick}
                >
                  {" "}
                  Yes{" "}
                </Menu.Item>
                <Menu.Item
                  className="header"
                  active={this.state.activeItem === "No"}
                  onClick={this.handleItemClick}
                  name="No"
                >
                  {" "}
                  No{" "}
                </Menu.Item>
              </Menu>
            </Form.Field>
          </Form>
        </Segment>
      </Card>
    );
  }
}
export default PolicyCard;
