import React from 'react';
import Overlay from '../overlay';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition'

class Confirm extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    cancel: PropTypes.bool,
    history: PropTypes.bool,
    title: PropTypes.string,
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
  }
  static defaultProps = {
    open: false,
    cancel: true,
    history: true,
    cancelText: '取消',
    confirmText: '确定',
    confirmComponent: 'button',
    confirmProps: {
      type: 'button'
    }
  }
  constructor (props) {
    super(props)
    this.state = {open: this.props.open,in: this.props.open}
    this.handleCancel = this.handleCancel.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleExited = this.handleExited.bind(this)
  }
  render () {
    let {children, className, title, cancelText, confirmText, confirmComponent, confirmProps, cancel} = this.props
    let ConfirmComponent = confirmComponent
    const transitionState = {
      entering: 'enter',
      entered: 'enter-active',
      exiting: 'leave-active',
      exited: 'leave-active'
    }
    return (
      <div className={classnames(["vx-confirm", className])} style={{display:this.state.open ? 'table' : 'none'}}>
        <Overlay open={this.state.in} />
        <div className="vx-confirm--wrapper">
          <Transition in={this.state.in} timeout={300} onExited={this.handleExited}>
            {state => {
              return (<div className={`vx-confirm--inner confirm-scale-${transitionState[state]}`}>
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
              </div>)
            }}
          </Transition>
        </div>
      </div>
    );
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
  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.props.open) {
      if (nextProps.open) {
        this.pushState()
        this.setState({
          open: nextProps.open
        }, () => {
          this.setState({
            in: nextProps.open
          })
        })
      } else {
        this.goBack()
        this.setState({
          in: nextProps.open
        })
      }
    }
  }
  handleExited () {
    this.setState({
      open: false
    }, () => {
      this.props.onClose && this.props.onClose()
    })
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
    this.setState({
      in: false
    })
  }
}

export default Confirm;
