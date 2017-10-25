import React from 'react';
import { navigateTo } from 'gatsby-link';

import './index.scss';

const parseUrl = (date, rawUrl) => (
  `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}`
);

const getDefaultPicture = () => (
  Math.random() > 0.5 ? 'kkKoV4d.jpg' : 'YexhzBP.jpg'
);

const parseImgur = (headerImage, size = 'large') => {
  let subfix;
  // s = Small Square (90×90)
  // b = Big Square (160×160)
  // t = Small Thumbnail (160×160)
  // m = Medium Thumbnail (320×320)
  // l = Large Thumbnail (640×640)
  // h = Huge Thumbnail (1024×1024)

  switch (size) {
    case 'small-square':
      subfix = 's';
      break;
    case 'big-square':
      subfix = 'b';
      break;
    case 'small':
      subfix = 't';
      break;
    case 'medium':
      subfix = 'm';
      break;
    case 'large':
      subfix = 'l';
      break;
    default:
      subfix = 'h';
  }

  headerImage = headerImage || getDefaultPicture();

  const resizedImage = headerImage.replace(/(.*)\.(.*)/, `$1${subfix}.$2`);

  return `https://i.imgur.com/${resizedImage}`;
};

const Card = ({
  title, date, url, headerImage, headerBackgroundColor, index,
}) => (
  <div className="col-sm-6 pb-4">
    <div
      className="card text-black bg-light border-info"
      onClick={() => navigateTo(parseUrl(date, url))}
      role="button"
      tabIndex={index}
    >
      <img
        className="card-img-top"
        src={parseImgur(headerImage)}
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
