import React, {useState} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {Flexbox, FlexboxItem} from '../flexbox'
import Arrow from '../arrow'

function Input (props) {
  let [focus, setFocus] = useState(false)
  const handleChange = (e) => {
    props.onChange && props.onChange (e.target.value)
  }
  const handleInput = (e) =>{
    props.onInput && props.onInput (e.target.value)
  }
  const handleFocus = () =>{
    setFocus(true)
  }
  const handleBlur = () =>{
    setFocus(false)
  }
  let {children, className, style, prepend, append, arrow, arrowProps, clear, border, ...others} = props
  let getClassName  = () => {
    return classnames([
      'vx-input--wrapper',
      {
        'is-focus': focus,
        'is-clear': !!others.value && clear,
        'vx-input--prepend': prepend,
        'vx-input--append': append,
        'is-disabled': others.disabled,
        'is-border': border
      }, 
      className
    ])
  }
  return (
    <div
      style={style}
      className={getClassName()}
      >
      <Flexbox component="label" align="center"
        className={classnames(['vx-input--inner'])}
        >
          {prepend}
          <FlexboxItem>
            <input {...others} 
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange} onInput= {handleInput}/>
          </FlexboxItem>
          {append}
          {arrow && !append && <Arrow {...arrowProps} direction="down"/>}
      </Flexbox>
    </div>
  )
}
Input.propTypes = {
  clear: PropTypes.bool,
  border: PropTypes.bool,
  arrow: PropTypes.bool,
  onChange: PropTypes.func,
  onInput: PropTypes.func
}
Input.defaultProps = {
  border: true,
  clear: true,
  arrow: false,
  arrowProps: {}
}
export default Input
