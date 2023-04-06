// src/components/Button.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, orange = false, wide = false,
}) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    'component-button',
    orange ? 'orange' : '',
    wide ? 'wide' : '',
  ].join(' ').trim();

  return (
    <div className={className}>
      <button type="button" onClick={handleClick}>{name}</button>
    </div>
  );
};

Button.defaultProps = {
  orange: false,
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
