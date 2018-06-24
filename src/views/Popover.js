import React from 'react';
import { Layout, Nav, Body, Popover, Button, Divider, Flexbox, FlexboxItem} from '@/components'

class Demo extends React.Component {
  render() {
    let menu = (
      <div className="popover-menu" style={{lineHeight: '0.92rem',width:'2.5rem'}}>
        <div onClick={this.handleClick}>扫一扫</div>
        <Divider />
        <div onClick={this.handleClick}>找朋友</div>
        <Divider />
        <div onClick={this.handleClick}>收付款</div>
      </div>
    )
    return (
      <Layout>
        <Nav slot="header" title="Popover"/>
        <Body slot="body" style={{padding:'0.2rem'}}>
          <Flexbox style={{marginBottom:'400px'}}>
            <FlexboxItem>
              <Popover trigger={<Button>left top</Button>}>
                {menu}
              </Popover>
            </FlexboxItem>
            <FlexboxItem style={{textAlign:'right'}}>
              <Popover trigger={<Button>right top</Button>}>
                {menu}
              </Popover>
            </FlexboxItem>
          </Flexbox>
          <Flexbox>
            <FlexboxItem>
              <Popover trigger={<Button>left bottom</Button>}>
                {menu}
              </Popover>
            </FlexboxItem>
            <FlexboxItem style={{textAlign:'right'}}>
              <Popover trigger={<Button>right bottom</Button>}>
                {menu}
              </Popover>
            </FlexboxItem>
          </Flexbox>
        </Body>
      </Layout>
    );
  }
  handleClick (e) {
    console.log(e.target.innerHTML)
  }
}

export default Demo;
