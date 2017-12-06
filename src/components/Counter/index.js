import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count }) => (
  <div>
    <p>時間: {count}s</p>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
