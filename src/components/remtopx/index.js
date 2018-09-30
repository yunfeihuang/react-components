import React from 'react'
import PropTypes from 'prop-types'

export default class Img extends React.Component{
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    even: PropTypes.bool,
    component: PropTypes.string
  }
  static defaultProps = {
    component: 'div',
    even: false
  }
  constructor (props) {
    super(props)
    this.state = {
      style: {}
    }
    this.handleResize = this.handleResize.bind(this)
  }
  render () {
    const { style, width, height, even, component, children, ...others} = this.props
    let Component = component
    return (
      <Component style={this.state.style} {...others}>
        {children}
      </Component>
    )
  }
  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize () {
    this.setState({
      style: this.getStyle()
    })
  }
  getStyle () {
    let fontSize = document.documentElement.style.fontSize
    let width = ''
    let height = ''
    if (fontSize) {
      fontSize = parseInt(fontSize, 10)
      if (this.props.width) {
        width = Math.round(fontSize * this.props.width)
        if (this.props.even && width % 2) {
          width++
        }
      }
      if (this.props.height) {
        height = Math.round(fontSize * this.props.height)
        if (this.props.even && height % 2) {
          height++
        }
      }
    }
    return {
      width: `${width}px`,
      height: `${height}px`
    }
  }
}
