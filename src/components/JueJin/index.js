import React from 'react';
import PropTypes from 'prop-types';

const JueJin = ({ jueJinId, style }) => (
  <a
    href={`https://juejin.im/entry/${jueJinId}/detail`}
    rel="external nofollow noopener noreferrer"
  >
    <img
      src={`https://badge.juejin.im/entry/${jueJinId}/likes.svg?style=${style}`}
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
  jueJinId: PropTypes.string,
  style: PropTypes.string,
};

JueJin.defaultProps = {
  jueJinId: '',
  style: 'flat',
};

export default JueJin;
