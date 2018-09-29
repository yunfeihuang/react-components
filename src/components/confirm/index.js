import React from 'react';
import Overlay from '../overlay';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Confirm extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    cancel: PropTypes.bool,
    title: PropTypes.string,
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
  }
  static defaultProps = {
    open: false,
    cancel: true,
    cancelText: '取消',
    confirmText: '确定',
    confirmComponent: 'button',
    confirmProps: {
      type: 'button'
    }
  }
  constructor (props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  render () {
    let {children, className, title, cancelText, confirmText, confirmComponent, confirmProps, cancel, open} = this.props
    let ConfirmComponent = confirmComponent
    return (
      <div className={classnames(["vx-confirm",className])} style={{display:open ? 'table' : 'none'}}>
        <Overlay />
        <div className="vx-confirm--wrapper">
          <div className="vx-confirm--inner confirm-scale-enter" ref="inner">
              {title && <div className="vx-confirm--title">{title}</div>}
              <div className="vx-confirm--body">
                <div className="vx-confirm--table">
                  <div className="vx-confirm--cell">
                    {children}
                  </div>
                </div>
              </div>
              <div className="vx-confirm--footer vx-flexbox">
                {cancel && <button className="vx-flexbox--item"  type="button" onClick={this.handleCancel}>{cancelText}</button>}
                <ConfirmComponent className="vx-flexbox--item" {...confirmProps} onClick={this.handleConfirm}>{confirmText}</ConfirmComponent>
              </div>
            </div>
        </div>
      </div>
    );
  }
  componentDidUpdate (prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        setTimeout(() => {
          this.refs.inner.classList.remove(`confirm-scale-enter`)
         }, 32)
      } else {
        setTimeout(() => {
          this.refs.inner.classList.add(`confirm-scale-enter`)
         }, 32)
      }
    }
  }
  handleConfirm (e) {
    if (e.target && e.target.nodeName && e.target.nodeName.toLowerCase() === 'a') {
      setTimeout(() => {
        this.props.onConfirm && this.props.onConfirm()
      }, 400)
    } else {
      this.props.onConfirm && this.props.onConfirm()
    }
  }
  handleCancel () {
    this.props.onClose && this.props.onClose()
  }
}

export default Confirm;
