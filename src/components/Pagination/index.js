import React from 'react';

import { getMaxPages } from '../../api';

import { handlePreviousPage, handleNextPage } from '../../api/url';

const PageItem = ({ number, content, url }) => (
  <li className={`page-item ${number < 0 ? 'disabled' : ''}`}>
    <a
      className="page-link"
      href={`${typeof content === 'string' ? url : `/page/${number}`}`}
    >{content || number}
    </a>
  </li>
);

const Pagination = () => (
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <PageItem
        number={handlePreviousPage()}
        content="Latest Posts"
        url={handlePreviousPage()}
      />
      <PageItem number={1} />
      <PageItem number={2} />
      <PageItem number={-1} content="..." />
      <PageItem number={getMaxPages() - 1} />
      <PageItem number={getMaxPages()} />
      <PageItem
        number={handleNextPage()}
        content="Older Posts"
        url={handleNextPage()}
      />
    </ul>
  </nav>
);

export default Pagination;
