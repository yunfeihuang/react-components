import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RadioGroup = props => {
  let {children, className, divider, onChange, ...others} = props
  let handleChange = value => {
    value !== props.value && onChange && onChange(value)
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
    <div className={classnames(["vx-radio-group", {'is-divider': divider}, className])} {...others}>
      {cloneChildren}
    </div>
  );
}
RadioGroup.propsTypes = {
  divider: PropTypes.bool,
  onChange: PropTypes.func
}
RadioGroup.defaultProps = {
  divider: true
}

export default RadioGroup;
