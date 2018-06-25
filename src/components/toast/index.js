import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spinner'
import Icon from '../icon'
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
    destroy: false
  }
  render () {
    let {className, align, type, children, style} = this.props
    const iconCode = {
      success: '&#xe654;',
      warn: '&#xe653;',
      fail: '&#xe605;'
    }
    return (
      <div ref="$el" className={classnames(['vx-toast', className])} style={style}>
        <div className={classnames(['vx-toast-inner', 'vx-toast-' + align])}>
          <div className="vx-toast-content">
            {type !== 'default' && iconCode[type] && <Icon dangerouslySetInnerHTML={{__html: iconCode[type]}}></Icon>}
            {type === 'loading' && <Spinner color="#999" primaryColor="#fff" className="vx-toast-spinner"/>}
            {(iconCode[type] || type === 'loading') && <br/>}
            {children}
          </div>
        </div>
      </div>
    )
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
