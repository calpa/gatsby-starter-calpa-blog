import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Tag = ({ name, count }) => (
  <Link
    className={`btn ${count > 5 ? 'btn-danger' : 'btn-warning'}`}
    style={{
      margin: 5,
    }}
    href={`#${name}`}
  >
    {name === '' ? '沒有標籤' : name}: {count}
  </Link>
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
