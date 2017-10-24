import React from 'react';

import Link from 'gatsby-link';

const back = () => {
  if (window.location.pathname.indexOf('page') === -1) {
    return '/';
  }

  const currentPage = +window.location.pathname.split('/')[2];
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
