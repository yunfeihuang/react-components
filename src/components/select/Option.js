import PropTypes from 'prop-types';

const Option = props => {
  return null
}
Option.propsTypes = {
  value: PropTypes.String,
  disabled: PropTypes.bool,
  label: PropTypes.String
}
Option.defaultProps = {
  disabled: false
}
export default Option;
