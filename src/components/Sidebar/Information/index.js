import React from 'react';

import PropTypes from 'prop-types';

import Friend from '../Friend';
import LatestPost from '../LatestPost';
import './index.scss';

// eslint-disable-next-line react/prop-types
const Information = ({ totalCount, posts }) => (
  <div className="d-none d-lg-block information my-2">
    <hr />
    <p>
      共&nbsp;
      {totalCount}
      &nbsp;篇文章
    </p>
    <hr />
    <LatestPost posts={posts} />
    <hr />
    <Friend />
  </div>
);

Information.propTypes = {
  totalCount: PropTypes.number.isRequired,
  posts: PropTypes.array,
};

Information.defaultProps = {
  posts: [],
};

export default Information;
