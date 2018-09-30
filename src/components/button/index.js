import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Spinner from '../spinner'
import Ripple from '../ripple'

const Button = (props) => {
  const { type, size, plain, className, disabled, nativeType, loading, ripple, children, ...others } = props
  const cls = classnames(['vx-btn', 'vx-btn--' + type, 'vx-btn--size-' + size, {
    'is-plain': plain || type === 'default',
    'is-disabled': disabled,
    'is-ripple': ripple
  }, className])
  
  return (
    <button 
      {...others}
      type={nativeType}
      disabled={disabled}
      className={cls}>
        {loading && <Spinner/>} <span>{children}</span>
        {ripple && <Ripple/>}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  ripple: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  plain: PropTypes.bool,
  nativeType: PropTypes.string
}
Button.defaultProps = {
  disabled: false,
  loading: false,
  ripple: false,
  type: 'default',
  size: 'normal',
  nativeType: 'button'
}
  
export default Button
