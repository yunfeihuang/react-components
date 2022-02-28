import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Accordion (props) {
  const [value, setValue] = useState([])
  function close (name) {
    setValue(value.filter(item => {
      return item !== name
    }))
  }
  function open (name) {
    if (!props.mutex) {
      if (value.indexOf(name) === -1) {
        setValue([...value, name])
      } else {
        close(name)
      }
    } else {
      setValue(value[0] === name ? [] : [name])
    }
  }
  
  let {children, className, mutex, ...others} = props
  let cloneChildren = React.Children.map(children, (item) => {
    if (item) {
      return React.cloneElement(item, {
        toOpen: open,
        toClose: close,
        value: value
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
Accordion.propTypes = {
  mutex: PropTypes.bool
}
Accordion.defaultProps = {
  mutex: true
}
export default Accordion;
