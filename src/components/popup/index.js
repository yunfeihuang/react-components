import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Overlay from '../overlay'
import {Flexbox, FlexboxItem} from '../flexbox'
  
export default class Popup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: this.props.open}
    this.cssOpen = false
    this.handleClose = this.handleClose.bind(this)
    this.close = this.close.bind(this)
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
    const { direction, full, style, onClose, className, fastClose, showClose, header, footer, title, inner, ...others } = this.props
    if (this.state.open) {
      let node = this.node
      if (!node) {
        node = this.node = document.createElement('div')
        document.body.appendChild(node)
      }
      return ReactDOM.createPortal(
        <div className={classnames(["vx-popup", className])} style={{...style,display: 'block'}} {...others}>
          <Overlay onClick={this.handleClose} />
          {inner || <Flexbox direction="column" className={
            classnames([
              'vx-popup--inner',
              `vx-popup--${direction}`,
              `popup-slide-${direction}-leave-active`,
              `popup-slide-${direction}-enter-active`,
              {
                'vx-full': full, 
                'vx-flexbox': direction === 'center',
                'vx-flexbox--align-center': direction === 'center',
                'vx-flexbox--content-center': direction === 'center',
              }])}>
              {showClose && <Flexbox align="center">
                <FlexboxItem className="vx-popup--nav-title">{{title}}</FlexboxItem>
                <i className="vx-popup--close" onClick={this.close}></i>
              </Flexbox>}
              {header}
              {direction === 'center' ? <div className="vx-popup--relative">{this.props.children}</div> : <FlexboxItem className="vx-popup--relative">{this.props.children}</FlexboxItem>}
              {footer}
          </Flexbox>}
        </div>,
        node
      )
    }
    return null
  }
  handleClose (e) {
    if (e.target.classList.contains('vx-popup--inner') || e.target.classList.contains('vx-overlay')) {
      if (this.props.fastClose && this.props.onClose) {
        this.props.onClose()
      }
    }
  }
  close () {
    this.props.onClose && this.props.onClose()
  }
  componentDidMount () {
    this.node && this.node.querySelector('.vx-popup--inner') && this.node.querySelector('.vx-popup--inner').classList.remove(`popup-slide-${this.props.direction}-leave-active`)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) {
        this.setState({
          open: nextProps.open
        })
      } else {
        if (this.node && this.node.querySelector) {
          let node = this.node.querySelector('.vx-popup--inner')
          node && node.classList.add(`popup-slide-${this.props.direction}-leave-active`)
        }
        setTimeout(() => {
          this.setState({
            open: nextProps.open
          })
        }, 300)
      }
    }
  }
  componentDidUpdate (prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        setTimeout(() => {
          if (this.node && this.node.querySelector) {
            let node = this.node.querySelector('.vx-popup--inner')
            node && node.classList.remove(`popup-slide-${this.props.direction}-leave-active`)
          }
        }, 16)
      }
    }
  }
}
