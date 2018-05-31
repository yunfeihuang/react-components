import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Overlay from '../overlay'
import { CSSTransition } from 'react-transition-group'
console.log('CSSTransitionGroup', CSSTransition)
  
export default class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {cssOpen: false}
  }
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
      let node = this.mountNode
      if (!node) {
        node = this.mountNode = document.createElement('div')
        document.body.appendChild(node)
      }
      this.cssOpenChange(true)
      return ReactDOM.createPortal(
        <div className="vx-popup" style={{...style,display: 'block'}}>
          <Overlay onClick={onClose} />
          <CSSTransition
            onExited={this.handleExited.bind(this)}
            in={this.state.cssOpen}
            classNames={full ? 'popup-full-slide-' + direction : 'popup-slide-' + direction}
            timeout={500}
            >
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
          </CSSTransition>
        </div>,
        node
      )
    }
    return null
  }
  handleClose () {
    this.setState({
      cssOpen: false
    })
  }
  handleExited () {
    console.log('ddddddddd')
    this.props.onClose()
  }
  cssOpenChange (value) {
    setTimeout(() => {
      this.setState({
        cssOpen: value
      })
    })
  }
}
