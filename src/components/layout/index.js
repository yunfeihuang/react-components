import React from 'react'
import classnames from 'classnames'
import { Flexbox } from '../flexbox'

const Layout = (props) => {
  const { children, className, bodyComponent, ...others } = props
  let slots = {
    others: []
  }
  React.Children.map(children, item => {
    if (item.props.slot) {
      if (!slots[item.props.slot]) {
        slots[item.props.slot] = []
      }
      slots[item.props.slot].push(item)
    } else {
      slots.others.push(item)
    }
  })
  return (
    <div className={classnames(['vx-layout', className])} {...others}>
      <Flexbox className="vx-layout--flexbox" direction="column">
        {slots['header']}        
        {slots['body']}
        {slots['footer']}
      </Flexbox>
      {slots['others']}
    </div>
  )
}

export default Layout
