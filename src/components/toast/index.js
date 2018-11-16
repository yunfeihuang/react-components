import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spinner'
import classnames from 'classnames'
import Transition from 'react-transition-group/Transition'

class Toast extends React.Component {
  static propTypes = {
    duration: PropTypes.number,
    align: PropTypes.string,
    open: PropTypes.bool,
    type: PropTypes.string,
    destroy: PropTypes.bool,
    onClose: PropTypes.func
  }
  static defaultProps = {
    duration: 2000,
    align: 'top',
    type: 'default',
    open: true,
    destroy: false,
    spinnerProps: {
      color:"#999",
      primaryColor:"#fff"
    }
  }
  constructor (props) {
    super(props)
    this.handleEntering = this.handleEntering.bind(this)
    this.rootId = Math.random().toString(36).substr(2)
  }
  render () {
    let {className, align, type, children, style, open} = this.props
    const transitionClass = {
      entering: 'confirm-fade-enter confirm-fade-enter-active',
      entered: 'confirm-fade-enter-active',
      exiting: 'confirm-fade-enter-active confirm-fade-leave-active',
      exited: 'confirm-fade-leave'
    }
    return (
      <Transition in={open} timeout={120} onEntering={this.handleEntering}>
        {state => {
          let display = ''
          if (state === 'entering') {
            display = 'block'
          }
          if (state === 'exited') {
            display = 'none'
          }
          return (
          <div id={this.rootId}
            className={classnames(['vx-toast', 'vx-toast--' + align, className, transitionClass[state]])}
            style={{...style,display: display}}>
            <div className={classnames(['vx-toast--inner'])}>
              <div className="vx-toast--content">
                {this.renderIcon()}
                {type !== 'default' && <br/>}
                {children}
              </div>
            </div>
          </div>)
        }}
      </Transition>
    )
  }
  renderIcon () {
    let type = this.props.type
    if (type === 'loading') {
      return <Spinner {...this.props.spinnerProps} className="vx-toast--loading"/>
    } else if (type !== 'default') {
      return <i className={classnames(['vx-toast--icon',`vx-toast--${type}`])}></i>
    }
    return null
  }
  componentDidMount () {
    if (this.props.open) {
      let node = document.getElementById(this.rootId)
      if (node){
        node.style.opacity = 0;
        this.handleEntering(node)
      }
    }
  }
  handleEntering (node) {
    let width = node.children[0].offsetWidth + 4
    let height = node.children[0].offsetHeight + 4
    requestAnimationFrame(() => {
      node.style.width = width + 'px'
      node.style.height = height + 'px'
    })
    this.$$timer && clearTimeout(this.$$timer)
    if (this.props.duration) {
      this.$$timer = setTimeout(() => {
        this.props.onClose && this.props.onClose()
      }, this.props.duration)
    }
  }
}

export default Toast;
