import React from 'react';
import Link from 'gatsby-link';

import PropTypes from 'prop-types';

const NavItem = ({ url, name }) => (
  <ul className="navbar-nav mr-2">
    <li className="nav-item">
      <Link
        className="nav-link"
        href={url}
        to={url}
        activeStyle={{
          color: 'black',
        }}
      >{name}
      </Link>
    </li>
  </ul>
);

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
