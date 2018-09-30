import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Popup from '../popup'
import Picker from '../picker'

export default class Img extends React.Component{
  static propTypes = {
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
  static defaultProps = {
    history: true,
    pickers: [],
    cancelText: '取消',
    confirmText: '完成',
  }
  constructor (props) {
    super(props)
    this.state = {
      myPickers: this.props.pickers
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleCloseAfter = this.handleCloseAfter.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  render () {
    const {open, history, cancelText, confirmText, placeholder} = this.props
    return (
      <Popup open={open} history={history} onClose={this.handleClose}
        header={
          <div className={classnames(['vx-flexbox','vx-popup-picker--header'])}>
            <button type="button" className="vx-popup-picker--cancel" onClick={this.handleCancel}>{cancelText}</button>
            <button type="button" className={classnames(['vx-flexbox--item','vx-popup-picker--placeholder'])}>{placeholder}</button>
            <button type="button" className="vx-popup-picker--confirm" onClick={this.handleConfirm}>{confirmText}</button>
          </div>
        }
        >
        <div className={classnames(['vx-flexbox','vx-popup-picker'])}>
          {
            open && this.state.myPickers && this.state.myPickers.map((item, index) => {
              return (
                <Picker
                  className={classnames(['vx-flexbox--item','vx-popup-picker--item'])}
                  key={index}
                  value={item.value}
                  placeholder={item.placeholder}
                  options={item.options}
                  onChange={this.handleChange.bind(this, index)}
                />
              )
            })
          }
        </div>
      </Popup>
    )
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.pickers !== this.props.pickers) {
      this.setState({
        myPickers: nextProps.pickers
      })
    }
  }
  handleCancel () {
    this.props.onClose && this.props.onClose()
  }
  handleClose () {
    this.props.onClose && this.props.onClose()
  }
  handleCloseAfter () {
    this.props.onCloseAfter && this.props.onCloseAfter()
  }
  handleConfirm () {
    this.props.onConfirm && this.props.onConfirm()
    let value = this.state.myPickers.map(item => {
      return {
        value: item.value
      }
    })
    if (!this.props.value || value.toString() !== this.props.value.toString()) {
      this.props.open && this.props.onChange && this.props.onChange(value)
    }
    this.handleClose()
  }
  handleChange (index, value) {
    let pickers = JSON.parse(JSON.stringify(this.state.myPickers))
    pickers[index].value = value
    this.setState({
      myPickers: pickers
    }, () => {
      this.props.onPickerChange && this.props.onPickerChange(value, index)
    })
  }
}
