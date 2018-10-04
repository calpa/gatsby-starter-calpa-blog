import React from 'react';
import PropTypes from 'prop-types';

const ChangePageButton = ({ title, url }) => (
  <p>
    <a href={url}>{title}</a>
  </p>
);

ChangePageButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ChangePageButton;
