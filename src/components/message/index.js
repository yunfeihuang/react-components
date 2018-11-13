import React from 'react'
import classnames from 'classnames'

const Message = props => {
  const { children, className, type, ...others } = props
  return (
    <div 
      {...others}
      className={classnames(['vx-message', 'vx-message--' + type, className])}>
        {children}
    </div>
  )
}
Message.defaultProps = {
  type: 'warning'
}

export default Message
