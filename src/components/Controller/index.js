import React from 'react';
import PropTypes from 'prop-types';

// Controll the number
const Controller = ({ increment, decrement }) => (
  <div>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>Decrement</button>
  </div>
);

Controller.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Controller;
