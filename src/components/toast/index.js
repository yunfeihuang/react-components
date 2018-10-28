import React from 'react'
import ReactDOM from 'react-dom'
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
      <div ref="$el" className={classnames(['vx-toast', 'vx-toast--' + align, className])} style={style}>
        <div className={classnames(['vx-toast--inner'])}>
          <div className="vx-toast--content">
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
      return <Spinner {...this.props.spinnerProps} className="vx-toast--loading"/>
    } else if (type !== 'default') {
      return <i className={classnames(['vx-toast--icon',`vx-toast--${type}`])}></i>
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
  componentWillUnmount () {
    this.$$timer && clearTimeout(this.$$timer)
  }
  css (text) {
    if (this.refs.$el && this.refs.$el.style) {
      this.refs.$el.style.cssText = text
    }
  }
  hide () {
    this.$$timer && clearTimeout(this.$$timer)
    this.css('display:block;opacity:0;')
    requestAnimationFrame(() => {
      this.css('display:none;')
      this.props.onClose && this.props.onClose()
      this.props.destroy && ReactDOM.unmountComponentAtNode(this.refs.$el)
    })
  }
  openChange (value) {
    if (value) {
      this.$$timer && clearTimeout(this.$$timer)
      requestAnimationFrame(() => {
        this.css('display:block;opacity:0;')
        requestAnimationFrame(() => {
          let width = this.refs.$el.children[0].offsetWidth + 4
          let height = this.refs.$el.children[0].offsetHeight + 4
          requestAnimationFrame(() => {
            this.css(`display:block;width:${width + 10}px;height:${height + 10}px;`)
          })
        })
      })
      if (this.props.duration) {
        this.$$timer = setTimeout(() => {
          this.hide()
        }, this.props.duration)
      }
    } else {
      this.hide()
    }
  }
}

export default Toast;
