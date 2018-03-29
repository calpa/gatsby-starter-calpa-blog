import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';

const Tag = ({ name, count }) => (
  <a
    className={`btn ${count > 5 ? 'btn-danger' : 'btn-warning'}`}
    style={{
      margin: 5,
    }}
    href={`#${name}`}
    data-scroll
  >
    {name === '' ? '沒有標籤' : name}: {count}
  </a>
);

Tag.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};

Tag.defaultProps = {
  name: '',
  count: 0,
};

export default Tag;
