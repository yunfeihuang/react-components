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
    history: PropTypes.bool,
    direction: PropTypes.string,
    onClose: PropTypes.func,
    fastClose: PropTypes.bool
  }
  static defaultProps = {
    open: false,
    full: false,
    direction: 'bottom',
    fastClose: true,
    history: true
  }
  render () {
    const { direction, full, style, className, showClose, header, footer, title, inner} = this.props
    if (this.state.open) {
      let node = this.node
      if (!node) {
        node = this.node = document.createElement('div')
        document.body.appendChild(node)
      }
      return ReactDOM.createPortal(
        <div className={classnames(["vx-popup", className])} style={{...style,display: 'block'}}>
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
                <FlexboxItem className="vx-popup--nav-title">{title}</FlexboxItem>
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
  getPushURL () {
    let array = [window.location.href.split('#')[0], window.location.hash]
    array.push(window.location.hash ? (window.location.href.indexOf('?') === -1 ? '?' : '&') : '#')
    array.push('popup=' + Math.random().toString(36).substr(2))
    return array.join('')
  }
  pushState () {
    if (this.props.history) {
      if (window.location.href.indexOf('popup=') > -1) {
        window.history.back()
      }
      setTimeout(() => {
        window.history.pushState({}, '', this.getPushURL())
        let handlePopstate = this.handlePopstate = () => {
          this.props.onClose && this.props.onClose()
          this.popStateBack && this.popStateBack()
          window.removeEventListener('popstate', handlePopstate)
        }
        window.addEventListener('popstate', handlePopstate)
      }, 16)
    }
  }
  goBack () {
    window.removeEventListener('popstate', this.handlePopstate)
    this.props.history && window.location.href.indexOf('popup=') > -1 && window.history.back()
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
        this.pushState()
        this.setState({
          open: nextProps.open
        })
      } else {
        this.goBack()
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
