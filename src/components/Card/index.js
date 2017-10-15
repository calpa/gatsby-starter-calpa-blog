import React from 'react';
import Link from 'gatsby-link';
import LazyLoad from 'react-lazyload';

import './index.scss';

const parseUrl = (date, rawUrl) => (
  `${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}`
);

const Card = ({
  title, date, url, headerImage, headerBackgroundColor,
}) => (
  <Link to={parseUrl(date, url)}>
    <div className="card">
      <LazyLoad height={200}>
        <img
          className="card-img-top"
          src={`https://i.imgur.com/${headerImage}`}
          alt="Calpa"
        />
      </LazyLoad>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{date}</p>
      </div>
    </div>
  </Link>
);

export default Card;
