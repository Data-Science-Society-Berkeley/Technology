//PolicyCard
import React, { Component } from "react";
import { Header, Button, Form,Menu,Segment,Divider,Card,Dropdown,Image } from "semantic-ui-react";
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
class Rate extends Component {
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
      <Card style={{marginLeft:"auto",marginRight:"0px" }}>
        <Segment>
        <Image src='https://www.metromile.com/quote/assets/images/vehicles/generic_coupe.png' wrapped ui={false} size="mini" centered="true" />
          <Header as="h3" textAlign={'center'}>2009 INFINITI G37
VIN: *************4395 </Header>
          <Divider section />
          <Header as="h3" textAlign={'center'}>$200</Header>
          <Divider section />

          <Form>
        
            <Form.Field>
              <label>Comphrensive Deductible</label>
              <Menu widths={3}>
                <Menu.Item
                  className="header"
                  name="250"
                  active={this.state.activeItem === "250"}
                  onClick={this.handleItemClick}
                >
                  {" "}
                  250{" "}
                </Menu.Item>
                <Menu.Item
                  className="header"
                  active={this.state.activeItem === "500"}
                  onClick={this.handleItemClick}
                  name="500"
                >
                  {" "}
                500{" "}
                </Menu.Item>
                <Menu.Item
                  className="header"
                  active={this.state.activeItem === "750"}
                  onClick={this.handleItemClick}
                  name="750"
                >
                  {" "}
                  750{" "}
                </Menu.Item>
              </Menu>
              </Form.Field>
              <Form.Field>
              <label>Collision Deductible</label>
              <Menu widths={2}>
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
export default Rate;


