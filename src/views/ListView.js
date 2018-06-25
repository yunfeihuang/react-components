import React from 'react';
import { Layout, Nav, Body, ListView, Flexbox, FlexboxItem, Img, Divider } from '@/components'
class Demo extends React.Component {
  constructor (props) {
    super(props)
    let list = this.getList()
    this.state = {
      list,
      loading: false,
      end: false // 是否还没有更多
    }
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="ListView"/>
        <Body slot="body" style={{overflow:'visible'}}>
          <ListView
            style={{height:'100%',background:'#fff',position: 'absolute',width: '100%'}}
            onPullUp={this.handlePullup.bind(this)}
            onPullDown={this.handlePulldown.bind(this)}
            loading={this.state.loading}
            end={this.state.end}>
          {this.state.list.map((item,index) => {
            return (
              <div key={index}>
                <Flexbox  align="center" className="list-view-item" gutter={20} style={{padding:'5px'}}>
                  <Img className="avatar" src={item.src} style={{width:'60px',height: '60px'}}/>
                  <FlexboxItem>
                    <h4 style={{margin:'0'}}>{item.name}(按我向左滑动)</h4>
                    <div>{item.date}</div>
                  </FlexboxItem>
                </Flexbox>
                <Divider/>
              </div>
            )
          })}
          </ListView>
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
  handlePullup (e) {
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => { // 模拟ajax请求
        let list = [...this.state.list]
        list = list.concat(this.getList())
        this.setState({
          loading: false,
          list: list,
          end: list.length >= 60
        })
      }, 1000)
    })
  }
  handlePulldown (e) {
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => { // 模拟ajax请求
        let list= this.getList()
        list = list.concat(this.state.list)
        this.setState({
          loading: false,
          list: list
        })
      }, 1000)
    })
  }
}

export default Demo;
