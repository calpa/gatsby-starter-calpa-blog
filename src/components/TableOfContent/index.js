import React from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import './toc.scss';

const TableItem = ({ url, name }) => (
  <li>
    <a
      href={url}
      data-scroll
    >
      {name}
    </a>
  </li>
);

TableItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const Table = ({ items }) => (
  <ul>
    {items.map(item => <TableItem url={`#${item}`} name={item} key={item} />)}
  </ul>
);

const TableOfContent = ({ toc }) => (
  <div
    className="col-lg-2 d-none d-lg-block order-11 toc-wrap"
  >
    <Table items={toc} />
  </div>
);

export default TableOfContent;
