import React from 'react';
import { Layout, Body, Nav, Tab, TabItem, Img, Sticky} from '../components'

class Demo extends React.Component {
  state = {
    active: 'recommed',
    items: [
      {name: 'recommed', label: '推荐'},
      {name: 'it', label: '科技'},
      {name: 'active', label: '活动'},
      {name: 'find', label: '发现'}
    ]
  }
  render() {
    let items = this.state.items.map((item, index) => {
      return <TabItem name={item.name} key={index}>{item.label}</TabItem>
    })
    return (
      <Layout>
        <Nav slot="header" title="Sticky-往上滚动Tab栏会固定位置"/>
        <Body slot="body" style={{background:'#fff', lineHeight:2.5}}>
          <Img src="http://assets.bittyos.com/images/swiper/01.jpg" style={{minHeight:'100px'}}/>
          <Sticky>
            <Tab active={this.state.active} onChange={this.handleChange.bind(this)} underlineWidth="auto">
              {items}
            </Tab>
          </Sticky>
          <div>
              新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。

        学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
              新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。

        学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
          </div>
        </Body>
      </Layout>
    );
  }
  handleChange (value) {
    this.setState({
      active: value
    })
  }
}

export default Demo;
