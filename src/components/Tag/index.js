import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count }) => (
  <a href={`/tags/#${name}`} key={name} className="header-tag">
    {name}
    &nbsp;
    {count}
  </a>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number || PropTypes.string,
};

Tag.defaultProps = {
  count: '',
};

export default Tag;
