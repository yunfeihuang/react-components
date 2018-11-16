import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
const mapFlexLayout = {
  direction: {
    column: `flexbox--column`
  },
  wrap: {
    wrap: `flexbox--wrap`
  },
  justify: {
    center: `flexbox--content-center`
  },
  align: {
    center: `flexbox--align-center`
  }
}
const Flexbox = props => {
  const { className, direction, wrap, justify, align, children, component, ...others } = props
  let array = ['vx-flexbox']
  for (let name in mapFlexLayout) {
    if (props[name] && mapFlexLayout[name][props[name]]) {
      array.push('vx-' + mapFlexLayout[name][props[name]])
    }
  }
  
  array.push(className)
  const cls = classnames(array)
  let cloneChildren = React.Children.map(children, (item) => {
    if (item) {
      return React.cloneElement(item, {
        gutter: props.gutter
      })
    }
    return item;
  })
  
  let Component = component || 'div'
  return (
    <Component 
      {...others}
      className={cls}>
        {cloneChildren}
    </Component>
  )
}
Flexbox.propTypes = {
  direction: PropTypes.string,
  wrap: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  gutter: PropTypes.number
}
Flexbox.defaultProps = {
  direction: 'normal',
  wrap: 'normal',
  align: 'normal',
  justify: 'normal',
  gutter: 0
}

export default Flexbox
