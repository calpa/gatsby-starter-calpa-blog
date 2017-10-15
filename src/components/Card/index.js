import React from 'react';

import './index.scss';

const Card = ({title, date}) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{date}</p>
  </div>
);

export default Card;
