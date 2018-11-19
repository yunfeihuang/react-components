import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Accordion extends React.Component{
  static propTypes = {
    mutex: PropTypes.bool
  }
  static defaultProps = {
    mutex: true
  }
  constructor (props) {
    super(props)
    this.state = {value: []}
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }
  render () {
    let {children, className, mutex, ...others} = this.props
    let cloneChildren = React.Children.map(children, (item) => {
      if (item) {
        return React.cloneElement(item, {
          toOpen: this.open,
          toClose: this.close,
          value: this.state.value
        })
      }
      return item;
    })
    return (
      <div className={classnames(["vx-accordion", className])} data-mutex={mutex} {...others}>
        {cloneChildren}
      </div>
    );
  }
  open (name) {
    if (!this.props.mutex) {
      if (this.state.value.indexOf(name) === -1) {
        this.setState({
          value: [...this.state.value, name]
        })
      } else {
        this.close(name)
      }
    } else {
      this.setState({
        value: this.state.value[0] === name ? [] : [name]
      })
    }
  }
  close (name) {
    let value = this.state.value.filter(item => {
      return item !== name
    })
    this.setState({value})
  }
}

export default Accordion;
