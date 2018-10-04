import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import JueJin from '../JueJin';

import { parseImgur } from '../../api/images';

const Header = ({
  img,
  title,
  subTitle,
  authorImage,
  authorName,
  jueJinPostLink,
  jueJinLikeIconLink,
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
          <span className="text">{subTitle}</span>
          {jueJinPostLink &&
            jueJinLikeIconLink && (
              <JueJin
                jueJinPostLink={jueJinPostLink}
                jueJinLikeIconLink={jueJinLikeIconLink}
              />
            )}
        </div>
      )}
    </div>
  </div>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
  jueJinPostLink: PropTypes.string,
  jueJinLikeIconLink: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
  jueJinPostLink: '',
  jueJinLikeIconLink: '',
};

export default Header;
