import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom';
import { Flexbox, FlexboxItem } from '../flexbox'

const Cell = props => {
  const { className, title, value, icon, arrow, to, children, ...others } = props
  let Component = to ? Link : 'div'
  return (
    <Flexbox 
      component={Component}
      to={to}
      align="center"
      justify="center"
      className={classnames(['vx-cell', {'vx-cell--access': arrow}, className])}
      {...others}>
      <div className="vx-cell--hd">
        {icon}
      </div>
      <FlexboxItem className="vx-cell--bd">
        {title}
      </FlexboxItem>
      <div className="vx-cell--ft">
        {value || children}
      </div>
    </Flexbox>
  )
}

export default Cell
