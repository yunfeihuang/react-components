import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Input from '../input'
import Password from '../password'
import Confirm from '../confirm'

function Prompt (props) {
  const [value, setValue] = useState(props.inputProps.value || '')
  const handleConfirm = ()  => {
    props.onConfirm && props.onConfirm(value)
  }
  let {children, inputProps, className, style, disabled, ...others} = props
  let _children = children
  if (!_children) {
    if (inputProps && inputProps.type === 'password') {
      _children = <Password {...inputProps} value={value} className={classnames(['vx-prompt-input',inputProps.className])} onInput={setValue}/>
    } else {
      _children = <Input {...inputProps} value={value} className={classnames(['vx-prompt-input',inputProps.className])}  onInput={setValue}/>
    }
  }
  return (
    <Confirm {...others} style={style} className={classnames(['vx-prompt',{'is-disabled': children ? disabled : !value}, className])} onConfirm={handleConfirm}>{_children}</Confirm>
  )
}
Prompt.propTypes = {
  inputProps: PropTypes.object
}
Prompt.defaultProps = {
  inputProps: {}
}
  
export default Prompt
