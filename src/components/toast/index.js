import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spinner'
import classnames from 'classnames'

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
    open: false,
    destroy: false,
    spinnerProps: {
      color:"#999",
      primaryColor:"#fff"
    }
  }
  render () {
    let {className, align, type, children, style} = this.props
    return (
      <div ref="$el" className={classnames(['vx-toast', className])} style={style}>
        <div className={classnames(['vx-toast-inner', 'vx-toast-' + align])}>
          <div className="vx-toast-content">
            {this.renderIcon()}
            {type !== 'default' && <br/>}
            {children}
          </div>
        </div>
      </div>
    )
  }
  renderIcon () {
    let type = this.props.type
    if (type === 'loading') {
      return <Spinner {...this.props.spinnerProps} className="vx-toast-loading"/>
    } else if (type !== 'default') {
      return <i className={classnames(['vx-toast-icon',`vx-toast-${type}`])}></i>
    }
    return null
  }
  componentDidMount () {
    this.openChange(this.props.open)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        this.openChange(this.props.open)
      } else {
        if (!this.props.duration) {
          this.refs.$el.style.display = 'none'
        }
      }
    }
  }
  openChange (value) {
    if (value) {
      requestAnimationFrame(() => {
        this.refs.$el.style.display = 'table'
      })
      this.props.duration && setTimeout(() => {
        requestAnimationFrame(() => {
          this.refs.$el.style.display = 'none'
          this.props.onClose && this.props.onClose()
          if (this.destroy) {
            console.log('destroy')
          }
        })
      }, this.props.duration)
    }
  }
}

export default Toast;
