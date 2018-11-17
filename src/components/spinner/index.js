import React from 'react'
import classnames from 'classnames'

let Spinner = props => {
  let {children, className, color, primaryColor, ...others} = props
  const style = {
    'borderTopColor': `${primaryColor}`,
    'borderRightColor': `${color}`,
    'borderBottomColor': `${color}`,
    'borderLeftColor': `${color}`
  }
  return (
    <div { ...others} className={classnames(["vx-spinner--wrapper", className])}>
      <div className="vx-spinner" style={style}></div>
      {children}
    </div>
  )
}
Spinner.defaultProps = {
  color: '',
  primaryColor: ''
}
export default Spinner;
