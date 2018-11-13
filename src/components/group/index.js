import React from 'react'
import classnames from 'classnames'

const Group = props => {
  const { className, title, component, children, ...others } = props
  let Component = component || 'div'
  return (
    <Component className={classnames(['vx-group', className])} {...others}>
      {title && <div  className="vx-group--title">{title}</div>}
      <div className="vx-group--inner">
        {children}
      </div>
    </Component>
  )
}

export default Group
