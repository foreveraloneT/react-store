import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.scss';

function Input({ type, className, ...props }) {
  return (
    <input
      className={classNames('Base-input', className)}
      type={type}
      {...props}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  className: '',
}

export default Input;
