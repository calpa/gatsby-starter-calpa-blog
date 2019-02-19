import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count }) => (
  <a href={`/tag/${name}`} className="header-tag">
    {name}
    &nbsp;
    {count}
  </a>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tag.defaultProps = {
  count: '',
};

export default Tag;
