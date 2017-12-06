import React from 'react';
import './index.scss';

const Clap = ({ title, countTotal }) => (
  <div className="clap-analytics">
    <p>{title}</p>
    <p>{countTotal}</p>
  </div>
);

export default Clap;
