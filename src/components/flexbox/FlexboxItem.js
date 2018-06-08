import React from 'react'
import PropTypes from 'prop-types'

export default class FlexboxItem extends React.Component{
  static contextTypes = {
    gutter: PropTypes.number
  }
  static propTypes = {
    flex: PropTypes.string,
    order: PropTypes.string,
    width: PropTypes.string
  }
  static defaultProps = {
    flex: '1'
  }
  render () {
    const { children, style, flex, order, width, gutter, ...others } = this.props
    let styles = {
      ...style,
      marginLeft: `${gutter/2}px`,
      flex,
      order
    }
    if (width) {
      styles = {
        ...style,
        marginLeft: `${gutter/2}px`,
        width
      }
    }
    return (
      <div 
        {...others} style={styles}>
          {children}
      </div>
    )
  }
}
