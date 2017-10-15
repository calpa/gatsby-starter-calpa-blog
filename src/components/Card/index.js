import React from 'react';
import Link from 'gatsby-link';

import './index.scss';

const parseUrl = (date, rawUrl) => (
  date+'/'+rawUrl.match(/_posts[\/](.*).md/)[1]
)

const Card = ({title, date, url}) => (
  <Link to={parseUrl(date, url)}>
    <div className="wrapper">
      <div
        className="card-header"
      />
      <div className="data">
        <div className="content">
          <div className="stats"><span className="date">{date}</span></div>
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </div>
  </Link>
);

export default Card;
