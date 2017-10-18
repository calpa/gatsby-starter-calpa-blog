import React from 'react';
import { navigateTo } from 'gatsby-link';

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
  <div className="col-sm-6 pb-4">
    <div
      className="card text-black bg-light border-info"
      onClick={() => navigateTo(parseUrl(date, url))}
      role="button"
    >
      <img
        className="card-img-top"
        src={`https://i.imgur.com/${headerImage || getDefaultPicture()}:`}
        alt={`${title}`}
      />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{date}</p>
      </div>
    </div>
  </div>
);

export default Card;
