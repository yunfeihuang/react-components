import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Picker from './Picker'
import Arrow from '../arrow'
import {Flexbox, FlexboxItem} from '../flexbox'

class Select extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    max: PropTypes.number,
    popupDirection: PropTypes.string,
    separator: PropTypes.string,
    arrow: PropTypes.bool,
    onChange: PropTypes.func
  }
  static defaultProps = {
    placeholder: '请选择',
    separator: ',',
    max: 1,
    arrow: true,
    arrowProps: {}
  }
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      focus: false,
      label: this.props.max === 1 ? '' : []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  componentDidUpdate (prevProps) {
    if (JSON.stringify(this.props.value) !== JSON.stringify(prevProps.value)) {
      let label = this.getLabel(this.props.value)
      this.setState({label: label.join(this.props.separator)})
    }
  }
  render () {
    let {disabled, placeholder, separator, arrow, arrowProps, children, prepend, append, className, popupDirection, max, ...others} = this.props
    return (
      <div className={classnames(["vx-select", {'is-disabled': disabled, 'is-focus': this.state.focus}, className])} onClick={this.handleClick} {...others}>
        <Flexbox className="vx-select--inner" align="center">
          {prepend}
          <FlexboxItem>
            <button type="button" data-placeholder={placeholder}>{this.state.label}</button>
          </FlexboxItem>
          {arrow && !append && <Arrow {...arrowProps} direction="down"/>}
          {append}
        </Flexbox>
      </div>
    );
  }
  handleChange (value) {
    let label = this.getLabel(value)
    this.setState({label: label.join(this.props.separator)}, () => {
      this.props.onChange && this.props.onChange(value)
    })
  }
  getLabel (value) {
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
    return label
  }
  handleClose (value = false) {
    this.setState({
      open: value,
      focus: false
    }, () => {
      this.node && ReactDOM.unmountComponentAtNode(this.node)
    })
  }
  handleClick () {
    this.setState({
      focus: true
    })
    let node = this.node = document.createElement('div')
    ReactDOM.render(
      <Picker
        open={false}
        value={this.props.value}
        title={this.props.placeholder}
        max={this.props.max}
        direction={this.props.popupDirection}
        fastClose={this.props.max === 1}
        onClose={this.handleClose}
        onChange={this.handleChange}>
          {this.props.children}
      </Picker>,
      node
    )
  }
}

export default Select;
