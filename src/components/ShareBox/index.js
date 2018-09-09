import React from 'react';

import PropTypes from 'prop-types';

import ExternalLink from '../ExternalLink';

import './index.scss';

const ShareBox = ({ url }) => (
  <div className="m-share-box">
    <ExternalLink
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      title=""
      className="share-button fa fa-facebook"
    />
    {/* 視覺置中 => 稍微往上偏移 */}
    <a
      className="share-button"
      style={{
        lineHeight: '1.7rem',
        color: '#337ab7',
        paddingLeft: '0.15rem',
      }}
      href="#gitalk-container"
    >
      <i className="fa fa-comment-o" />
    </a>

    <a
      className="share-button"
      href="#m-navbar"
      style={{
        lineHeight: '1.7rem',
        paddingLeft: '0.1rem',
      }}
    >
      <i className="fa fa-chevron-up" />
    </a>
  </div>
);

ShareBox.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShareBox;
