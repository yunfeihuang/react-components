import React from 'react'
import classnames from 'classnames'

const Divider = (props) => {
  const { children, className, ...others } = props
  return (
    <div 
      {...others}
      className={classnames(['vx-divider', className])}>
        {children}
    </div>
  )
}

export default Divider
