import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Dropdown from './Dropdown';

import { getPages } from '../../api';
import { handlePreviousPage, handleNextPage } from '../../api/url';

const PageItem = ({ number, content }) => (
  <li className={`page-item${number < 0 ? ' disabled' : ''}`}>
    <Link className="page-link" to={`${number}`} href={number}>
      {content || number}
    </Link>
  </li>
);

const getPageNumber = pathname => pathname.split('/')[2];

const Pagination = ({ pathname, pageCount }) => {
  const currentPageNumber = getPageNumber(pathname);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <PageItem
          number={handlePreviousPage(currentPageNumber)}
          content="Previous"
        />
        <li className="page-item">
          <Dropdown pages={getPages(pageCount)} text={currentPageNumber} />
        </li>
        <PageItem
          number={handleNextPage(currentPageNumber, pageCount)}
          content="Next"
        />
      </ul>
    </nav>
  );
};

PageItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  content: PropTypes.string.isRequired,
};

Pagination.propTypes = {
  pathname: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Pagination;
