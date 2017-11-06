import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

// import lozad from 'lozad';

import { parseImgur } from '../../api/images';

import './index.scss';

import { parseUrl } from '../../api/url';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
});

const Card = ({
  title, date, url, headerImage, headerBackgroundColor, content,
}) => (
  <div className="col-sm-12 pb-4">
    <Link
      to={parseUrl(date, url)}
      href={parseUrl(date, url)}
    >
      <div className="custom-card">
        <div
          className="wrapper"
          style={imageStyle(headerImage, headerBackgroundColor)}
        >
          <div className="header" />
          <div className="data">
            <div className="content">
              <div className="stats"><span className="date">{date}</span></div>
              <h4 className="title">{title}</h4>
              <p className="d-none d-md-block">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string.isRequired,
  headerBackgroundColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
