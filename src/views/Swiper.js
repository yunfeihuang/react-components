import React from 'react';
import { Layout, Body, Nav, Swiper, SwiperItem } from '@/components'

class Demo extends React.Component {
  state = {
    images: [
      'http://assets.bittyos.com/images/swiper/01.jpg',
      'http://assets.bittyos.com/images/swiper/02.jpg',
      'http://assets.bittyos.com/images/swiper/03.jpg',
      'http://assets.bittyos.com/images/swiper/04.jpg',
      'http://assets.bittyos.com/images/swiper/05.jpg'
    ],
    active: 0,
    options: {
      speed: 500
    }
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Swiper"/>
        <Body slot="body">
          <Swiper active={this.state.active} options={this.state.options} onChange={this.handleChange.bind(this)}>
            {this.state.images.map((item,index) =>{
              return (
                <SwiperItem key={index}>
                  <img src={item} alt="" style={{maxWidth:'100%'}} />
                </SwiperItem>
              )
            })}
          </Swiper>
        </Body>
      </Layout>
    );
  }
  handleChange (active) {
    console.log(active)
    this.setState({
      active
    })
  }
}

export default Demo;
