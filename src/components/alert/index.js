import React from 'react'
import Confirm from '../confirm';

let Alert = props => {
  let {children, ...others} = props
  return (
    <Confirm {...others} cancel={false}>{children}</Confirm>
  )
}

export default Alert;
