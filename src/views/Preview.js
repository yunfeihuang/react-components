import React from 'react';
import { Layout, Body, Nav, Preview, Img } from '@/components'

class Demo extends React.Component {
  state = {
    images: [
      {
        src: 'http://assets.bittyos.com/images/swiper/01.jpg'
      },
      {
        src: 'http://assets.bittyos.com/images/swiper/02.jpg'
      },
      {
        src: 'http://assets.bittyos.com/images/swiper/03.jpg'
      },
      {
        src: 'http://assets.bittyos.com/images/swiper/04.jpg'
      },
      {
        src: 'http://assets.bittyos.com/images/swiper/05.jpg'
      }
    ]
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Preview(点击图片浏览图片)"/>
        <Body slot="body">
          {this.state.images.map((item,index) => {
            return (
              <Img
                key={index} 
                loading={true}
                src={item.src}
                onLoad={this.handleLoad.bind(this,index)}
                onClick={this.handleClick.bind(this,index)}/>
            )
          })}
        </Body>
        <Preview list={this.state.images} ref="preview"/>
      </Layout>
    );
  }
  handleLoad (index, e) {
    let windowWidth = window.innerWidth
    let img = e.target
    let natural = {
      w: img.naturalWidth,
      h: img.naturalHeight
    }
    let item = {
      src: img.src,
      w: natural.w > windowWidth ? windowWidth : natural.w,
      h: natural.w > windowWidth ? natural.h / natural.w * windowWidth : natural.h
    }
    let state = {...this.state}
    state.images[index] = item
    this.setState(state)
  }
  handleClick (index) {
    this.refs.preview.open(index)
  }
}

export default Demo;
