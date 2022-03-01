import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Popup from '../popup'
import Picker from '../picker'
function PopupPicker (props) {
  const [myPickers, setMyPickers] = useState(props.pickers)
  function handleCancel () {
    props.onClose && props.onClose()
  }
  function handleClose () {
    props.onClose && props.onClose()
  }
  function handleCloseAfter () {
    props.onCloseAfter && props.onCloseAfter()
  }
  function handleConfirm () {
    props.onConfirm && props.onConfirm()
    let value = myPickers.map(item => {
      return {
        value: item.value
      }
    })
    if (!props.value || value.toString() !== props.value.toString()) {
      props.open && props.onChange && props.onChange(value)
    }
    handleClose()
  }
  function handleChange (index, value) {
    let pickers = JSON.parse(JSON.stringify(myPickers))
    pickers[index].value = value
    setMyPickers(pickers, () => {
      props.onPickerChange && props.onPickerChange(value, index)
    })
  }
  useEffect(() => {
    setMyPickers(props.pickers)
  }, [props.pickers])
  const {open, history, cancelText, confirmText, placeholder} = props
  return (
    <Popup open={open} history={history} onClose={handleClose}
      header={
        <div className={classnames(['vx-flexbox','vx-popup-picker--header'])}>
          <button type="button" className="vx-popup-picker--cancel" onClick={handleCancel}>{cancelText}</button>
          <button type="button" className={classnames(['vx-flexbox--item','vx-popup-picker--placeholder'])}>{placeholder}</button>
          <button type="button" className="vx-popup-picker--confirm" onClick={handleConfirm}>{confirmText}</button>
        </div>
      }
      >
      <div className={classnames(['vx-flexbox','vx-popup-picker'])}>
        {
          open && myPickers && myPickers.map((item, index) => {
            return (
              <Picker
                className={classnames(['vx-flexbox--item','vx-popup-picker--item'])}
                key={index}
                value={item.value}
                placeholder={item.placeholder}
                options={item.options}
                onChange={handleChange.bind(null, index)}
              />
            )
          })
        }
      </div>
    </Popup>
  )
}
PopupPicker.propTypes = {
  open: PropTypes.bool,
  history: PropTypes.bool,
  pickers: PropTypes.array,
  placeholder: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onChange: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  onCloseAfter: PropTypes.func,
  onPickerChange: PropTypes.func
}
PopupPicker.defaultProps = {
  history: true,
  pickers: [],
  cancelText: '取消',
  confirmText: '完成',
}

export default PopupPicker
