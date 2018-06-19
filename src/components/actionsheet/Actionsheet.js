import React from 'react';
import Popup from '../popup';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Actionsheet extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    open: PropTypes.bool,
    cancel: PropTypes.bool,
    cancelText: PropTypes.string,
    title: PropTypes.string,
    fastClose: PropTypes.bool,
    onClose: PropTypes.func
  }
  static defaultProps = {
    type: 'default',
    open: false,
    cancel: false,
    cancelText: '取消',
    title: '',
    fastClose: true
  }
  constructor (props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
  }
  render () {
    let {children, className, title, cancelText, cancel, type, onClick, ...others} = this.props
    let direction = type === 'menu' ? 'center' : 'bottom'
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          onClick: this.handleClick.bind(this, item.props.value)
        })
      }
      return item
    })
    let cls = classnames(["vx-actionsheet", {'vx-actionsheet-menu': type === 'menu'}, {'is-not-title': !title},className])
    return (
      <Popup className={cls} {...others} direction={direction}>
        <div className="vx-actionsheet-inner" >
          {title && <div className="vx-actionsheet-title">
            {title}
          </div>
          }
          <div className="vx-actionsheet-items">
            {cloneChildren}
          </div>
          {cancel && <div className="vx-actionsheet-cancel" onClick={this.handleClose}>
            {cancelText}
          </div>
          }
        </div>
      </Popup>
    );
  }
  handleClick (value) {
    this.props.onClick && this.props.onClick(value)
    this.handleClose()
  }
  handleClose () {
    this.props.onClose && this.props.onClose()
  }
}

export default Actionsheet;
