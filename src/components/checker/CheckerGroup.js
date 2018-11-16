import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CheckerGroup = props => {
  let {children, className, onChange, disabled, ...others} = props
  let handleChange = e => {
    let value = null
    if (props.max === 1) {
      value = [e.target.value]
    } else {
      if (e.target.checked && props.max !== 0 && props.max === props.value.length) {
        console.log('max:', props.max)
      } else {
        value = [...props.value]
        if (e.target.checked) {
          value.indexOf(e.target.value) === -1 && value.push(e.target.value)
        } else {
          value.splice(value.indexOf(e.target.value), 1)
        }
      }
    }
    value && onChange && onChange(value)
  }
  let cloneChildren = React.Children.map(children, item => {
    if (item) {
      return React.cloneElement(item, {
        $parent: {
          ...others,
          onChange: handleChange
        }
      })
    }
    return item
  })
  return (
    <div className={classnames(["vx-checker-group", className])} disabled={disabled} {...others}>
      {cloneChildren}
    </div>
  );
}
CheckerGroup.propsTypes = {
  value: PropTypes.array,
  max: PropTypes.number,
  onChange: PropTypes.func
}
CheckerGroup.defaultProps = {
  value: [],
  max: 0,
}

export default CheckerGroup;
