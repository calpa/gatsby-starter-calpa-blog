import React from 'react';

import Link from 'gatsby-link';

import Dropdown from './Dropdown';

import { getMaxPages, getPages } from '../../api';
import { handlePreviousPage, handleNextPage } from '../../api/url';

const PageItem = ({ number, content, url }) => (
  <li className={`page-item${number < 0 ? ' disabled' : ''}`}>
    <Link
      className="page-link"
      to={`${typeof content === 'string' ? url : `/page/${number}`}`}
      href={`${typeof content === 'string' ? url : `/page/${number}`}`}
    >{content || number}
    </Link>
  </li>
);

const Pagination = () => (
  <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <PageItem
        number={handlePreviousPage()}
        content="Previous"
        url={handlePreviousPage()}
      />
      <PageItem number={1} />
      <PageItem number={2} />
      <li className="page-item">
        <Dropdown pages={getPages()} />
      </li>
      <PageItem number={getMaxPages() - 1} />
      <PageItem number={getMaxPages()} />
      <PageItem
        number={handleNextPage()}
        content="Next"
        url={handleNextPage()}
      />
    </ul>
  </nav>
);

export default Pagination;
