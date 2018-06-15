import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Picker from './Picker'

class Select extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    max: PropTypes.number
  }
  static defaultProps = {
    placeholder: '请选择',
    max: 1
  }
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      label: this.props.max === 1 ? '' : []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  render () {
    let {disabled, placeholder} = this.props
    return (
      <div className="vx-select" onClick={this.handleClick} disabled={disabled}>
        <button type="button" data-placeholder={placeholder}>{this.state.label}</button>
      </div>
    );
  }
  handleChange (value) {
    let label = []
    if (this.props.max === 1) {
      React.Children.map(this.props.children, item => {
        if (value === item.props.value) {
          label.push(item.props.label || item.props.children)
        }
      })
    } else {
      React.Children.map(this.props.children, item => {
        if (value.indexOf(item.props.value) > -1) {
          label.push(item.props.label || item.props.children)
        }
      })
    }
    this.setState({label: label.join(',')}, () => {
      this.props.onChange && this.props.onChange(value)
      this.handleClose()
    })
  }
  handleClose (value = false) {
    this.setState({
      open: value
    }, () => {
      let node = ReactDOM.findDOMNode(this.vnode).parentNode
      setTimeout(() => {
        node.parentNode && node.parentNode.removeChild(node)
      }, 1000)
      // this.vnode.forceUpdate()
    })
  }
  handleClick () {
    let node = document.createElement('div')
    this.vnode = ReactDOM.render(
      <Picker
        open={false}
        value={this.props.value}
        max={this.props.max}
        onClose={this.handleClose}
        onChange={this.handleChange}>
          {this.props.children}
      </Picker>,
      node
    )
    // this.handleClose(true)
  }
}

export default Select;
