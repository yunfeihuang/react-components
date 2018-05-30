import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = (props) => {
  const { type, size, plain, className, disabled, nativeType, children, ...others } = props
  const cls = classnames(['vx-btn', 'vx-btn-' + type, 'vx-btn-size-' + size, {
    'is-plain': plain,
    'is-disabled': disabled,
  }, className])
  
  return (
    <button 
      {...others}
      type={nativeType}
      disabled={disabled}
      className={cls}>
        {children}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  plain: PropTypes.bool,
  nativeType: PropTypes.string
}
Button.defaultProps = {
  disabled: false,
  type: 'default',
  size: 'normal',
  nativeType: 'button'
}
  
export default Button
