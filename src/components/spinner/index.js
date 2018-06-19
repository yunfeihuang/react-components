import React from 'react'
import classnames from 'classnames'

let Spinner = function (props) {
  let {children, className, color, primaryColor, ...others} = props
  let style = {}
  if (color && primaryColor) {
    style = {
      'border-color': `${primaryColor} ${color} ${color} ${color}`
    }
  } else if (color) {
    style = {
      'border-color': `${color}`
    }
  }
  else if (primaryColor) {
    style = {
      'border-top-color': `${color}`
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
