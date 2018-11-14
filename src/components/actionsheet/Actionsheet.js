import React from 'react';
import Popup from '../popup';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Actionsheet = props => {
  let {children, className, title, cancelText, cancel, type, onClick, onClose, ...others} = props
  
  let handleClose = () => {
    onClose && onClose()
  }
  let handleClick = value => {
    onClick && onClick(value)
    handleClose()
  }
  let direction = type === 'menu' ? 'center' : 'bottom'
  let cloneChildren = React.Children.map(children, item => {
    if (item) {
      return React.cloneElement(item, {
        onClick: handleClick.bind(this, item.props.value)
      })
    }
    return item
  })
  let cls = classnames(["vx-actionsheet", {'vx-actionsheet--menu': type === 'menu'}, {'is-not-title': !title}, className])
  return (
    <Popup className={cls} {...others} direction={direction}>
      <div className="vx-actionsheet--inner" >
        {title && <div className="vx-actionsheet--title">
          {title}
        </div>
        }
        <div className="vx-actionsheet--items">
          {cloneChildren}
        </div>
        {cancel && <div className="vx-actionsheet--cancel" onClick={handleClose}>
          {cancelText}
        </div>
        }
      </div>
    </Popup>
  );
}
Actionsheet.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  cancel: PropTypes.bool,
  cancelText: PropTypes.string,
  title: PropTypes.string,
  fastClose: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func
}
Actionsheet.defaultProps = {
  type: 'default',
  open: false,
  cancel: false,
  cancelText: '取消',
  title: '',
  fastClose: true
}

export default Actionsheet;
