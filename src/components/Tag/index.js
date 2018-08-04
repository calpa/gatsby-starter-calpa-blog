import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count }) => (
  <a href={`/tags#${name}`} key={name} className="header-tag">{name} {count || ''}</a>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
};

Tag.defaultProps = {
  count: 0,
};

export default Tag;
