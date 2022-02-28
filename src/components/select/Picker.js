import React, {useState, useEffect} from 'react';
import Popup from '../popup'
import PropTypes from 'prop-types'
import { Checkbox, CheckboxGroup} from '../checkbox'

function Picker (props) {
  const [value, setValue] = useState(props.value)
  const [open, setOpen] = useState(props.open)
  function onChange (value) {
    setOpen(false, () => {
      props.onChange && props.onChange(value)
    })
  }
  function handleChange (value) {
    if (props.max === 1) {
      onChange(value[0])
    }
    setValue(value)
  }
  function handleCancel () {
    setOpen(false)
  }
  function handleAfterClose () {
    props.onClose && props.onClose()
  }
  function handleConfirm () {
    onChange(value)
  }
  
  useEffect(() => {
    setOpen(true)
  }, [])

  let {children, max, title, cancelText, confirmText, fastClose, direction} = props
  let Checkboxs = React.Children.map(children, (item, index) => {
    return (
      <Checkbox
        value={item.props.value}
        key={index}
        disabled={item.props.disabled}
        label={item.props.label}
        >
        {item.props.children}
      </Checkbox>
    )
  })
  let myTitle = title
  if (max > 1 && value.length >= max) {
    myTitle = `选项不能超过${max}个`
  }
  return (
    <Popup open={open} fastClose={fastClose} onClose={handleCancel} onAfterClose={handleAfterClose} direction={direction}
      className="vx-select--picker"
      header={
        max !== 1 ? <div style={{}} className="vx-flexbox vx-option-picker--header">
          <button type="button" className="vx-option-picker--cancel" onClick={handleCancel}>{cancelText}</button>
          <button type="button" className="vx-flexbox--item vx-option-picker--placeholder">{myTitle}</button>
          <button type="button" disabled={!value.length} className="vx-option-picker--confirm" onClick={handleConfirm}>{confirmText}</button>
        </div> : undefined
      }
      >
      <div className="vx-option-picker--wrapper">
        <div className="vx-option-picker">
          <CheckboxGroup max={max} onChange={handleChange} value={value}>
            {Checkboxs}
          </CheckboxGroup>
        </div>
      </div>
    </Popup>
  )
}
Picker.propTypes = {
  open: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  title: PropTypes.string,
  max: PropTypes.number,
  onClose: PropTypes.func,
  onChange: PropTypes.func
}
Picker.defaultProps = {
  confirmText: '确定',
  cancelText: '取消'
}

export default Picker
