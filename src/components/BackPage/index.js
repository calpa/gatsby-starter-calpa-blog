import React from 'react';

import Link from 'gatsby-link';

import { isPage, getCurrentPage } from '../../api';

const back = () => {
  if (isPage()) {
    return '/';
  }

  const currentPage = getCurrentPage();
  const index = currentPage - 1;

  if (index === 0) {
    return '/';
  }

  return `/page/${index}`;
};

const NextPage = () => (
  <Link to={back()}>
    <button type="button" className="btn btn-info">Newer Posts</button>
  </Link>
);

export default NextPage;
