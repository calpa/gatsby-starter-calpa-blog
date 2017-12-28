import React from 'react';
import './index.scss';

const Clap = ({ title, countTotal }) => (
  <div className="clap-analytics row">
    <div className="col-10">
      <p>{title}</p>
    </div>
    <div className="col">
      <p>{countTotal}</p>
    </div>
  </div>
);

export default Clap;
