import React from 'react';
import Link from 'gatsby-link';
import LazyLoad from 'react-lazyload';

import './index.scss';

const parseUrl = (date, rawUrl) => (
  `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}`
);

const getDefaultPicture = () => (
  Math.random() > 0.5 ? 'kkKoV4d.jpg' : 'YexhzBP.jpg'
);

const Card = ({
  title, date, url, headerImage, headerBackgroundColor,
}) => (
  <Link to={parseUrl(date, url)}>
    <div className="card">
      <LazyLoad height={200}>
        <img
          className="card-img-top"
          src={`https://i.imgur.com/${headerImage || getDefaultPicture()}:`}
          alt={`${title}`}
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
