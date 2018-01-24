import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, count }) => (
  <button
    className="btn btn-warning"
    style={{
      margin: 5,
    }}
  >
    {name === '' ? '沒有標籤' : name}: {count}
  </button>
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
