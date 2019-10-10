import React from 'react';
import { Container, Image, Menu  } from 'semantic-ui-react';
const mynav = {
    fontSize: "20px",
    fontFamily: "Akkurat",
    fontWeight: "lighter",
    background: "inherit",
};
const text = {
    fontFamily: "Akkurat",
    fontWeight: "lighter",
    color: "white",
    background: "inherit",
};
export default () => (
      <Menu style = {mynav}>
          <Menu.Item as="a" header style={text}>
        Ozone
        </Menu.Item>
            <Menu.Item as="a" name="login">
            LOGIN
            </Menu.Item>
            <Menu.Item as="a" name="register">
              CLAIMS
            </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a" name="register">
            408-621-2416
            </Menu.Item>
            </Menu.Menu>
      </Menu>

);
