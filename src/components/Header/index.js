import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Header = ({ img = '' }) => (
  <div className="col-12 header" style={{ padding: 0 }}>
    <div
      className="img-container"
      style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${img})`,
          }}
    />
  </div>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Header;
