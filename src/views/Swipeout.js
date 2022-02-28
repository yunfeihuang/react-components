import React from 'react';
import { Layout, Nav, Body, Swipeout, Flexbox, FlexboxItem, Img } from '../components'
class Demo extends React.Component {
  constructor (props) {
    super(props)
    let list = this.getList()
    this.state = {
      list
    }
  }
  render() {
    let action = [
      <button key="1" style={{background:'#1AAD19', color:'#fff'}} onClick={this.handleAction} className="swipeout-button" slot="action" type="button">顶置</button>,
      <button key="2" style={{background:'#ffe26d', color:'#fff'}} onClick={this.handleAction} className="swipeout-button" slot="action" type="button">收藏</button>,
      <button key="3" style={{background:'#ff5500', color:'#fff'}} onClick={this.handleAction} className="swipeout-button" slot="action" type="button">删除</button>
    ]
    return (
      <Layout>
        <Nav slot="header" title="Swipeout"/>
        <Body slot="body">
          {this.state.list.map((item,index) => {
            return (
            <Swipeout action={action} key={index} open={index===1} onClose={this.handleCloseSwipeout} onOpen={this.handleOpenSwipeout}>
              <Flexbox align="center" className="list-view-item" gutter={20} style={{padding:'5px'}}>
                <Img className="avatar" src={item.src} style={{width:'40px',height: '40px'}}/>
                <FlexboxItem>
                  <h4 style={{margin:'0'}}>{item.name}(按我向左滑动)</h4>
                  <div>{item.date}</div>
                </FlexboxItem>
              </Flexbox>
            </Swipeout>
            )
          })}
        </Body>
      </Layout>
    );
  }
  getList () {
    let result = []
    for (let i = 0; i < 30; i++) {
      result.push({
        src: '/images/github.png',
        name: `item-${Date.now()}`,
        date: new Date().toLocaleString()
      })
    }
    return result
  }
  handleCloseSwipeout () {
    console.log('handleCloseSwipeout')
  }
  handleOpenSwipeout () {
    console.log('handleOpenSwipeout')
  }
  handleAction (e) {
    console.log('点击了' + e.target.innerHTML)
  }
}

export default Demo;
