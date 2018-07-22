import React from 'react'
import classnames from 'classnames'
import Input from '../input'

export default class Password extends React.Component {
  static defaultProps= {
    icons: [
      '<span class="vx-password-text-icon">abc</span>',
      '<span class="vx-password-pwd-icon"></span>'
    ]
  }
  constructor (props) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.state = {
      type: this.props.type || 'password'
    }
  }
  render () {
    let {children, className, style, icons, ...others} = this.props
    return (
      <div className={classnames(['vx-password'])} style={style}>
        <Input {...others} type={this.state.type}/>
        <button
          className="vx-password-switch"
          type="button"
          onClick={this.handleSwitch}>
          <i style={{display: this.state.type === 'password' ? '' : 'none'}} dangerouslySetInnerHTML={{__html: icons[0]}}></i>
          <i style={{display: this.state.type === 'password' ? 'none' : ''}}dangerouslySetInnerHTML={{__html: icons[1]}}></i>
        </button>
      </div>
    )
  }
  handleSwitch () {
    this.setState({
      type: this.state.type === 'password' ? 'text' : 'password'
    })
  }
}
