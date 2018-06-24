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
    fastClose: true
  }
  render () {
    const { direction, full, style, onClose, className, fastClose, inner, ...others } = this.props
    if (this.state.open) {
      let node = this.node
      if (!node) {
        node = this.node = document.createElement('div')
        document.body.appendChild(node)
      }
      return ReactDOM.createPortal(
        <div className={classnames(["vx-popup", className])} style={{...style,display: 'block'}} {...others}>
          <Overlay onClick={this.handleClose} />
          {inner || <div className={
            classnames([
              'vx-popup-inner',
              `vx-popup-${direction}`,
              `popup-slide-${direction}-enter`,
              {
                'vx-full': full, 
                'vx-flexbox': direction === 'center',
                'vx-flexbox-align-center': direction === 'center',
                'vx-flexbox-content-center': direction === 'center',
              }])}
               onClick={this.handleClose}>
            {this.props.children}
          </div>}
        </div>,
        node
      )
    }
    return null
  }
  handleClose (e) {
    if (e.target.classList.contains('vx-popup-inner') || e.target.classList.contains('vx-overlay')) {
      if (this.props.fastClose && this.props.onClose) {
        this.props.onClose()
      }
    }
  }
  componentDidMount () {
    this.node && this.node.querySelector('.vx-popup-inner') && this.node.querySelector('.vx-popup-inner').classList.remove(`popup-slide-${this.props.direction}-enter`)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      let node = this.node.querySelector('.vx-popup-inner')
      if (nextProps.open) {
        this.setState({
          open: nextProps.open
        }, () => {
          setTimeout(() => {
            node && node.classList.remove(`popup-slide-${this.props.direction}-enter`)
          }, 100)
        })
      } else {
        node && node.classList.add(`popup-slide-${this.props.direction}-enter`)
        setTimeout(() => {
          this.setState({
            open: nextProps.open
          })
        }, 300)
      }
    }
  }
}
