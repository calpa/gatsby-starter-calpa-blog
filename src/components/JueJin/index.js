import React from 'react';
import PropTypes from 'prop-types';

const JueJin = ({ jueJinPostLink, jueJinLikeIconLink }) => (
  <a href={jueJinPostLink} rel="external nofollow noopener noreferrer">
    <img
      src={jueJinLikeIconLink}
      alt="JueJin Link"
      style={{
        cursor: 'pointer',
        height: '1.2rem',
        marginBottom: '0.25rem',
      }}
    />
  </a>
);

JueJin.propTypes = {
  jueJinPostLink: PropTypes.string,
  jueJinLikeIconLink: PropTypes.string,
};

JueJin.defaultProps = {
  jueJinPostLink: '',
  jueJinLikeIconLink: '',
};

export default JueJin;
