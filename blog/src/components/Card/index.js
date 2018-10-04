import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import { parseImgur } from '../../api/images';

import './index.scss';

import { parseUrl } from '../../api/url';

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
  content,
  tags,
}) => {
  const postUrl = parseUrl(date, url);
  const finalTags = tags.split(', ');

  return (
    <div className="col-sm-12 pb-4">
      <div className="custom-card">
        {headerImage && (
          <CardHeader
            url={postUrl}
            image={headerImage}
            backgroundColor={headerBackgroundColor}
          />
        )}
        <div className="data">
          <div className="content">
            <div className="stats">
              <span className="date">{date}</span>
              {finalTags.map(tag => <Tag name={tag} key={tag} />)}
            </div>
            <Link to={postUrl} href={postUrl}>
              <h4 className="title">{title}</h4>
            </Link>
            <p className="d-none d-md-block">{content}</p>
            <Link to={postUrl} href={postUrl}>
              ....繼續閱讀全文內容
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

Card.defaultProps = {
  headerImage: '',
  tags: '',
};

export default Card;
