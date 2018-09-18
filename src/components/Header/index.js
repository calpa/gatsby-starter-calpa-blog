import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Tag from '../Tag';
import JueJin from '../JueJin';

import { parseImgur } from '../../api/images';

const Header = ({
  img,
  title,
  subTitle,
  tags,
  jueJinId,
  authorImage,
  authorName,
}) => (
  <div className="col-12 header" style={{ padding: 0 }} id="header">
    <div
      className="img-container"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${img})`,
        marginTop: -58,
      }}
    >
      {title && <h1 className="u-title">{title}</h1>}
      {subTitle && (
        <div className="u-subtitle">
          <div className="m-left">
            {authorImage && (
            <img
              src={parseImgur(authorImage, 'small-square')}
              className="author-image"
              alt={authorName}
            />
            )}
            <span className="author-name">{authorName}</span>
          </div>
          <span className="text">{subTitle}</span>{' '}
          {jueJinId && <JueJin jueJinId={jueJinId} />}
        </div>
      )}

      <div className="tag">
        {tags && tags.map(tag => <Tag name={tag} key={tag} />)}
      </div>
    </div>
  </div>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  jueJinId: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  subTitle: '',
  tags: [],
  jueJinId: '',
  authorName: '',
  authorImage: '',
};

export default Header;
