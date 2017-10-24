import React from 'react';

import Link from 'gatsby-link';

const maxPages = 8;

const addOnePage = (currentPage) => {
  if (currentPage + 1 < maxPages) {
    return currentPage + 1;
  }
  return 1;
};

const handleNextPage = () => {
  const index = addOnePage(+window.location.pathname.split('/')[2]);

  return `/page/${index}`;
};

const NextPage = () => (
  <Link to={handleNextPage()}>
    <button type="button" className="btn btn-info">Older Posts</button>
  </Link>
);

export default NextPage;
