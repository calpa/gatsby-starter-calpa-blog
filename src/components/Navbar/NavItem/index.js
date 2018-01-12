import React from 'react';
import PropTypes from 'prop-types';

import { gotoPage } from '../../../api/url';

const NavItem = ({ url, name }) => (
  <li className="nav-item">
    <button
      className="nav-link btn btn-link"
      href={url}
      to={url}
      onClick={() => gotoPage(url)}
    >{name}
    </button>
  </li>
);

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
