import React from 'react';

import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { parseDate } from '../../../api/';
import { parseUrl } from '../../../api/url';

import './index.scss';

const LatestPost = ({ posts }) => (
  <div className="latest-post">
    <p>最新文章</p>
    {posts.map(({ node }) =>
      (<Link
        to={parseUrl(parseDate(node.createdDate), node.url)}
        key={node.url}
      >{node.title}
       </Link>))}
  </div>
);


LatestPost.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default LatestPost;
