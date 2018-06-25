import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export default class Qrcode extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  }
  static defaultProps = {
    height: 200,
    width: 200,
    text: ''
  }
  render () {
    let {children, className,...others} = this.props
    return (
      <div ref="$el" style={{display:'inline-block'}} className={classnames(['qr-code',className])} {...others}></div>
    )
  }
  componentDidMount () {
    this.$el = this.refs.$el
    require.ensure([], (r) => {
      let QRCode = require('qrcodejs2')
      this.$$qrcode = new QRCode(this.$el, {
        ...this.props
      })
    })
  }
  componentDidUpdate (prevProps) {
    if (prevProps.text !== this.props.text && this.$$qrcode) {
      this.$$qrcode.clear()
      this.$$qrcode.makeCode(this.props.text)
    }
  }
}
