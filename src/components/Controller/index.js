import React from 'react';
import PropTypes from 'prop-types';

// Controll the number
const Controller = ({ increment, decrement }) => (
  <div className="d-flex justify-content-around">
    <button
      onClick={() => increment()}
      className="btn btn-success"
    >增加
    </button>
    <button
      onClick={() => decrement()}
      className="btn btn-danger"
    >減少
    </button>
  </div>
);

Controller.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default Controller;
