import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, className, value, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onClick: PropTypes.func.isRequired,
};

export default Button;
