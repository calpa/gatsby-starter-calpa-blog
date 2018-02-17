import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count }) => (
  <a
    className="btn btn-warning"
    style={{
      margin: 5,
    }}
    href={`#${name}`}
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
