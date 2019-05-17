import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import { parseImgur } from '../../api/images';

import './index.scss';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
});

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <div className="wrapper" style={imageStyle(image, backgroundColor)} />
  </Link>
);

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags = [],
}) => (
  <div className="col-sm-12 pb-4">
    <div className="custom-card">
      {headerImage && (
        <CardHeader
          url={url}
          image={headerImage}
          backgroundColor={headerBackgroundColor}
        />
      )}
      <div className="data">
        <div className="content">
          <div className="stats">
            <span className="date">{date.split('T')[0]}</span>
            {tags.map(name => (
              <Tag name={name} key={name} />
            ))}
          </div>
          <Link to={url} href={url}>
            <h4 className="title">{title}</h4>
          </Link>
          <p>{description}</p>
          <Link to={url} href={url}>
            ....繼續閱讀全文內容
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
};

export default Card;
