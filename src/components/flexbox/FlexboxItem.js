import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class FlexboxItem extends React.Component{
  static propTypes = {
    flex: PropTypes.string,
    order: PropTypes.string,
    gutter: PropTypes.number
  }
  static defaultProps = {
    flex: '1'
  }
  render () {
    const { children, className, style, flex, order, gutter, ...others } = this.props
    let styles = {
      ...style,
      marginLeft: `${gutter}px`,
      marginRight: `${gutter}px`,
      flex,
      order
    }
    return (
      <div
        className={classnames(['vx-flexbox--item', className])}
        {...others} style={styles}>
          {children}
      </div>
    )
  }
}
