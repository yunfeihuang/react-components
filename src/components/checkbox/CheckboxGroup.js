import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CheckboxGroup = props => {
  let {children, className, divider, inline, iconStyle, onChange, ...others} = props
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
          inline,
          iconStyle,
          onChange: handleChange
        }
      })
    }
    return item
  })
  return (
    <div className={classnames(["vx-checkbox-group", {'is-divider': divider && !inline}, className])} {...others}>
      {cloneChildren}
    </div>
  );
}
CheckboxGroup.propsTypes = {
  value: PropTypes.array,
  divider: PropTypes.bool,
  inline: PropTypes.bool,
  max: PropTypes.number,
  direction: PropTypes.string,
  iconStyle: PropTypes.string,
  onChange: PropTypes.func
}
CheckboxGroup.defaultProps = {
  value: [],
  divider: true,
  max: 0,
  inline: false,
  direction: 'normal'
}

export default CheckboxGroup;
