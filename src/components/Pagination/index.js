import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Dropdown from './Dropdown';

import { getPages } from '../../api';
import { handlePreviousPage, handleNextPage } from '../../api/url';

const PageItem = ({ number, content, url }) => (
  <li className={`page-item${number < 0 ? ' disabled' : ''}`}>
    <Link
      className="page-link"
      to={`${typeof content === 'string' ? url : `/page/${number}`}`}
      href={`${typeof content === 'string' ? url : `/page/${number}`}`}
    >
      {content || number}
    </Link>
  </li>
);

const getPageNumber = pathname => pathname.split('/')[2];

const Pagination = ({ pathname }) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <PageItem
        number={handlePreviousPage(getPageNumber(pathname))}
        content="Previous"
        url={handlePreviousPage(getPageNumber(pathname))}
      />
      <li className="page-item">
        <Dropdown pages={getPages()} text={getPageNumber(pathname)} />
      </li>
      <PageItem
        number={handleNextPage(getPageNumber(pathname))}
        content="Next"
        url={handleNextPage(getPageNumber(pathname))}
      />
    </ul>
  </nav>
);

Pagination.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Pagination;
