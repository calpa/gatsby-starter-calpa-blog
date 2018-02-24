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

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link
    to={url}
    href={url}
  >
    <div
      className="wrapper"
      style={imageStyle(image, backgroundColor)}
    />
  </Link>
);

const Card = ({
  title, date, url, headerImage, headerBackgroundColor, content,
}) => (
  <div className="col-sm-12 pb-4">
    <div className="custom-card">
      {headerImage && <CardHeader url={parseUrl(date, url)} image={headerImage} backgroundColor={headerBackgroundColor} />}
      <div className="data">
        <div className="content">
          <div className="stats"><span className="date">{date}</span></div>
          <Link
            to={parseUrl(date, url)}
            href={parseUrl(date, url)}
          >
            <h4 className="title">{title}</h4>
          </Link>
          <p className="d-none d-md-block">{content}</p>
          <Link
            to={parseUrl(date, url)}
            href={parseUrl(date, url)}
          >
            ....繼續閱讀全文內容
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  headerImage: '',
};

export default Card;
