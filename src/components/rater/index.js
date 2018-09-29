import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Rater extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
    star: PropTypes.string,
    color: PropTypes.string,
    gutter: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    gutter: '',
    max: 5,
    star: '★',
    disabled: false,
  }
  render () {
    let {className, disabled, value, max, color, gutter, star, ...others} = this.props
    let items = []
    for (let i = 1; i <= max; i++) {
      items.push(
        <span
          key={i}
          className={classnames(['vx-rater--item', {'is-active':i <= value}])}
          style={{color: i <= value && color ? color : '', marginLeft: gutter}}
          onClick={this.handleClick.bind(this, i)}>
          {star}
        </span>
      )
    }
    return (
      <div className={classnames(["vx-rater", className])} disabled={disabled} {...others}>
        {items}
      </div>
    )
  }
  handleClick (value) {
    if (value !== this.props.value) {
      this.props.onChange && this.props.onChange(value)
    }
  }
}

export default Rater;
