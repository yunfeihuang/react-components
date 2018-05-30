import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Flexbox extends React.Component{
  static childContextTypes = {
    gutter: PropTypes.number
  }
  static propTypes = {
    direction: PropTypes.string,
    wrap: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string
  }
  static defaultProps = {
    direction: 'normal',
    wrap: 'normal',
    align: 'normal',
    justify: 'normal'
  }
  getChildContext () {
    return {
      gutter: this.props.gutter
    }
  }
  render () {
    let mapFlexLayout = {
      direction: {
        column: `flexbox-column`
      },
      wrap: {
        wrap: `flexbox-wrap`
      },
      justify: {
        center: `flexbox-content-center`
      },
      align: {
        center: `flexbox-align-center`
      }
    }

    const { className, direction, wrap, justify, align, children, ...others } = this.props
    let array = ['vx-flexbox']
    for (let name in mapFlexLayout) {
      if (this.props[name] && mapFlexLayout[name][this.props[name]]) {
        array.push('vx-' + mapFlexLayout[name][this.props[name]])
      }
    }
    
    array.push(className)
    const cls = classnames(array)
    return (
      <div 
        {...others}
        className={cls}>
          {children}
      </div>
    )
  }
}
