import React, { Component } from 'react';
import { Layout, Nav, Cell, Group } from '@/components'

class Home extends Component {
  render() {
    return (
      <Layout className="home">
        <Nav slot="header" isBack={false} title="Vx UI Demo"/>
        <div slot="body">
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
            <Cell title="Switch" arrow={true} to="/demos/switch" />
          </Group>
          <Group title="对话弹框">
            <Cell title="Actionsheet" arrow={true} to="/demos/actionsheet" />
            <Cell title="Popup" arrow={true} to="/demos/popup" />
          </Group>
        </div>
      </Layout>
    );
  }
}

export default Home;
