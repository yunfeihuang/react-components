import React from 'react'
import classnames from 'classnames'

let Spinner = function (props) {
  let {children, className, color, primaryColor, ...others} = props
  let style = {}
  if (color && primaryColor) {
    style = {
      'borderColor': `${primaryColor} ${color} ${color} ${color}`
    }
  } else if (color) {
    style = {
      'borderColor': `${color}`
    }
  }
  else if (primaryColor) {
    style = {
      'borderTopColor': `${color}`
    }
  }
  return (
    <div { ...others} className={classnames(["vx-spinner-wrapper", className])}>
      <div className="vx-spinner" style={style}></div>
      {children}
    </div>
  )
}

export default Spinner;
