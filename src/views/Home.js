import React from 'react';
import { Layout, Body, Nav, Cell, Group } from '@/components'

class Home extends React.Component {
  render() {
    return (
      <Layout className="home">
        <Nav slot="header" isBack={false} title="Vx UI Demo"/>
        <Body slot="body">
          <Group title="basic">
            <Cell title="Button" arrow={true} to="/demos/button" />
            <Cell title="Layout" arrow={true} to="/demos/layout" />
            <Cell title="Flexbox" arrow={true} to="/demos/flexbox" />
            <Cell title="Nav" arrow={true} to="/demos/nav" />
            <Cell title="Group" arrow={true} to="/demos/group" />
            <Cell title="Cell" arrow={true} to="/demos/cell" />
            <Cell title="Divider" arrow={true} to="/demos/divider" />
            <Cell title="Message" arrow={true} to="/demos/message" />
          </Group>
          <Group title="form表单">
            <Cell title="Input" arrow={true} to="/demos/input" />
            <Cell title="Password" arrow={true} to="/demos/password" />
            <Cell title="Switch" arrow={true} to="/demos/switch" />
            <Cell title="Checkbox" arrow={true} to="/demos/checkbox" />
            <Cell title="Radio" arrow={true} to="/demos/radio" />
            <Cell title="Select" arrow={true} to="/demos/select" />
          </Group>
          <Group title="对话弹框">
            <Cell title="Actionsheet" arrow={true} to="/demos/actionsheet" />
            <Cell title="Alert" arrow={true} to="/demos/alert" />
            <Cell title="Confirm" arrow={true} to="/demos/confirm" />
            <Cell title="Popup" arrow={true} to="/demos/popup" />
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Home;
