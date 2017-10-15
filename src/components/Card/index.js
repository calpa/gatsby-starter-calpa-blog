import React from 'react';
import Link from 'gatsby-link';

import './index.scss';

const parseUrl = (date, rawUrl) => (
  date+'/'+rawUrl.match(/_posts[\/](.*).md/)[1]
)

const Card = ({title, date, url}) => (
  <Link to={parseUrl(date, url)}>
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-date">{date}</p>
    </div>
  </Link>
);

export default Card;
