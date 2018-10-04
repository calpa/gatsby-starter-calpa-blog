import React from 'react';
import PropTypes from 'prop-types';
import './toc.scss';

const TableItem = ({ url, name }) => (
  <li>
    <a href={url} data-scroll>
      {name}
    </a>
  </li>
);

TableItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const TableOfContent = ({ toc }) => (
  <div className="col-lg-2 d-none d-lg-block order-11 toc-wrap">
    <ul>
      {toc.map(item => <TableItem url={`#${item}`} name={item} key={item} />)}
    </ul>
  </div>
);

TableOfContent.propTypes = {
  toc: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableOfContent;
