import React from 'react'
import classnames from 'classnames'
import { Flexbox, FlexboxItem } from '../flexbox'

const Cell = (props) => {
  const { title, value, className, icon, arrow, ...others } = props
  return (
    <Flexbox 
      {...others}
      align="center"
      justify="center"
      className={classnames(['vx-cell', { 'vx-cell-access': arrow}, className])}>
      <div className="vx-cell-hd">
        {icon}
      </div>
      <FlexboxItem className="vx-cell-bd">
        {title}
      </FlexboxItem>
      <div className="vx-cell-ft">
        {value}
      </div>
    </Flexbox>
  )
}

export default Cell
