import React from 'react';
import { Layout, Body, Nav, Cell, Group } from '@/components'

class Home extends React.Component {
  render() {
    return (
      <Layout className="home">
        <Nav slot="header" isBack={false} title="Vx UI Demo@react"/>
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
            <Cell title="Textarea" arrow={true} to="/demos/textarea" />
            <Cell title="Switch" arrow={true} to="/demos/switch" />
            <Cell title="Checkbox" arrow={true} to="/demos/checkbox" />
            <Cell title="Checker" arrow={true} to="/demos/checker" />
            <Cell title="Radio" arrow={true} to="/demos/radio" />
            <Cell title="Select" arrow={true} to="/demos/select" />
            <Cell title="Range" arrow={true} to="/demos/range" />
            <Cell title="Rater" arrow={true} to="/demos/rater" />
          </Group>
          <Group title="对话弹框">
            <Cell title="Actionsheet" arrow={true} to="/demos/actionsheet" />
            <Cell title="Alert" arrow={true} to="/demos/alert" />
            <Cell title="Confirm" arrow={true} to="/demos/confirm" />
            <Cell title="Prompt" arrow={true} to="/demos/prompt" />
            <Cell title="Toast" arrow={true} to="/demos/toast" />
            <Cell title="Popup" arrow={true} to="/demos/popup" />
          </Group>
          <Group title="选项卡">
            <Cell title="Tab" arrow={true} to="/demos/tab" />
          </Group>
          <Group title="图片">
            <Cell title="Img" arrow={true} to="/demos/img" />
          </Group>
          <Group title="其他">
            <Cell title="Badge" arrow={true} to="/demos/badge" />
            <Cell title="Spinner" arrow={true} to="/demos/spinner" />
            <Cell title="Ripple" arrow={true} to="/demos/ripple" />
          </Group>
        </Body>
      </Layout>
    );
  }
}

export default Home;
