import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';

import lozad from 'lozad';

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

class Card extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.date = this.props.date;
    this.url = this.props.url;
    this.headerImage = this.props.headerImage;
    this.headerBackgroundColor = this.props.headerBackgroundColor;
    this.index = this.props.index;
  }

  componentDidMount() {
    const observer = lozad();
    observer.observe();
  }

  render() {
    return (
      <div className="col-sm-6 pb-4">
        <div
          className="card text-black bg-light border-info"
          onClick={() => navigateTo(parseUrl(this.date, this.url))}
          role="button"
          tabIndex={this.index}
        >
          <img
            className="card-img-top lozad"
            data-src={parseImgur(this.headerImage)}
            alt={`${this.title}`}
          />
          <div className="card-body">
            <h4 className="card-title">{this.title}</h4>
            <p className="card-text">{this.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string.isRequired,
  headerBackgroundColor: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
