import React from 'react'
import classnames from 'classnames'

const Icon = (props) => {
  const { className,  ...others } = props
  return (
    <i 
      {...others}
      className={classnames(['vx-iconfont', className])}>
    </i>
  )
}

export default Icon
