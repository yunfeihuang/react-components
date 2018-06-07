import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Overlay from '../overlay'
  
export default class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: this.props.open}
    this.cssOpen = false
    this.handleClose = this.handleClose.bind(this)
  }
  static propTypes = {
    open: PropTypes.bool,
    full: PropTypes.bool,
    direction: PropTypes.string,
    onClose: PropTypes.func,
    fastClose: PropTypes.bool
  }
  static defaultProps = {
    open: false,
    full: false,
    direction: 'bottom',
    fastClose: false
  }
  render () {
    const { direction, full, style, onClose, className, fastClose, ...others } = this.props
    if (this.state.open) {
      let node = this.node
      if (!node) {
        node = this.node = document.createElement('div')
        document.body.appendChild(node)
      }
      return ReactDOM.createPortal(
        <div className={classnames(["vx-popup", className])} style={{...style,display: 'block'}} {...others}>
          <Overlay onClick={this.handleClose} />
          <div className={
            classnames([
              'vx-popup-inner',
              `vx-popup-${direction}`,
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
  handleClose () {
    if (this.props.fastClose && this.props.onClose) {
      this.props.onClose()
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) {
        this.setState({
          open: nextProps.open
        }, () => {
          setTimeout(() => {
           this.node.querySelector('.vx-popup-inner').style.cssText='transform: translateY(0%);'
          }, 100)
        })
      } else {
        this.node.querySelector('.vx-popup-inner').style.cssText = 'transform: translateY(100%);'
        setTimeout(() => {
          this.setState({
            open: nextProps.open
          })
        }, 300)
      }
    }
  }
}
