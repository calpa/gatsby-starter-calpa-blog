import React from 'react';
import Link from 'gatsby-link';

import './index.scss';

const Card = ({title, date}) => (
  <Link to={title}>
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-date">{date}</p>
    </div>
  </Link>
);

export default Card;
