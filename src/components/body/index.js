import React from 'react'
import classnames from 'classnames'
import { FlexboxItem } from '../flexbox'

const Body = (props) => {
  const { children, className, ...others } = props
  return (
    <FlexboxItem className={classnames(['vx-body', className])} {...others}>
      {children}
    </FlexboxItem>
  )
}

export default Body
