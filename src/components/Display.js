import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="component-display">
    <div>{value}</div>
  </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
