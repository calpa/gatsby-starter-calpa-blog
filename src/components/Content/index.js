import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ post }) => (
  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: post }}
    style={{
      padding: 30,
      background: 'white',
    }}
  />
);

Content.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Content;
