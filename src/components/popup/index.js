import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Overlay from '../overlay'
  
export default class Popup extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    full: PropTypes.bool,
    direction: PropTypes.string,
    onClose: PropTypes.func
  }
  static defaultProps = {
    open: false,
    full: false,
    direction: 'bottom'
  }
  render () {
    const { direction, full, style, onClose } = this.props
    if (this.props.open) {
      let node = document.createElement('div')
      document.body.appendChild(node)
      return ReactDOM.createPortal(
        <div className="vx-popup" style={{display: 'block'}}>
          <Overlay onClick={onClose} />
          <div className={
              classnames([
                'vx-popup-inner',
                'vx-popup-' + direction,
                {
                  'vx-full': full, 
                  'vx-flexbox': direction === 'center',
                  'vx-flexbox-align-center': direction === 'center',
                  'vx-flexbox-content-center': direction === 'center',
                }
                ])}>
            {this.props.children}
          </div>
        </div>,
        node
      )
    }
    return null
  }
}
