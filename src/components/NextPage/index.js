import React from 'react';

import Link from 'gatsby-link';

import { getCurrentPage, getMaxPages } from '../../api';

const addOnePage = (currentPage) => {
  const maxPages = getMaxPages();

  if (currentPage + 1 <= maxPages) {
    return currentPage + 1;
  }
  return 1;
};

const handleNextPage = () => {
  const index = addOnePage(getCurrentPage());

  return `/page/${index}`;
};

const NextPage = () => (
  <Link to={handleNextPage()}>
    <button type="button" className="btn btn-info">Older Posts</button>
  </Link>
);

export default NextPage;
