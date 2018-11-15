import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FlexboxItem = props => {
  const { children, className, style, flex, order, gutter, ...others } = props
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
FlexboxItem.propTypes = {
  flex: PropTypes.string,
  order: PropTypes.string,
  gutter: PropTypes.number
}
FlexboxItem.defaultProps = {
  flex: '1'
}

export default FlexboxItem
