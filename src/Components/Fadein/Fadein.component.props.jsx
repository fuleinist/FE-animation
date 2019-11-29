import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element, 
  show: PropTypes.bool, 
  animation: PropTypes.instanceOf({
    duration: PropTypes.number, 
    delay: PropTypes.oneOfType([PropTypes.number, PropTypes.func]), 
  })
}

const defaultProps = {}

export { propTypes, defaultProps };