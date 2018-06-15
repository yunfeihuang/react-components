import React from 'react';
import Overlay from '../overlay';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Confirm extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    cancel: PropTypes.bool,
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
  }
  static defaultProps = {
    open: false,
    cancel: true,
    cancelText: '取消',
    confirmText: '确定'
  }
  constructor (props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  render () {
    let {children, className, cancelText, confirmText, cancel, open} = this.props
    return (
      <div className={classnames(["vx-confirm",className])} style={{display:open ? 'table' : 'none'}}>
        <Overlay />
        <div className="vx-confirm-wrapper">
          <div className="vx-confirm-inner confirm-scale-enter" ref="inner">
              <div className="vx-confirm-body">
                {children}
              </div>
              <div className="vx-confirm-footer vx-flexbox">
                {cancel && <button className="vx-flexbox-item"  type="button" onClick={this.handleCancel}>{cancelText}</button>}
                <button className="vx-flexbox-item" type="button" onClick={this.handleConfirm}>{confirmText}</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) {
        setTimeout(() => {
          this.refs.inner.classList.remove(`confirm-scale-enter`)
         }, 100)
      } else {
        setTimeout(() => {
          this.refs.inner.classList.add(`confirm-scale-enter`)
         }, 100)
      }
    }
  }
  handleConfirm () {
    this.props.onConfirm && this.props.onConfirm()
  }
  handleCancel () {
    this.props.onClose && this.props.onClose()
  }
}

export default Confirm;
