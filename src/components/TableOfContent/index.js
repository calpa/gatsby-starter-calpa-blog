/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import './toc.scss';

const TableOfContent = ({ __html }) => (
  <div className="col-lg-2 col-md-2 d-none d-lg-block order-11 toc-wrap">
    <ul>
      <div dangerouslySetInnerHTML={{ __html }} />
    </ul>
  </div>
);

TableOfContent.propTypes = {
  __html: PropTypes.string.isRequired,
};

export default TableOfContent;
