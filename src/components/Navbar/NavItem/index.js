import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ReactGA from 'react-ga';

import Dropdown from './Dropdown';
import { gotoPage } from '../../../api/url';

import './index.scss';

const NavItem = ({ url, name, list }) => {
  if (list.length === 0) {
    return (
      <Link
        className="nav-btn btn btn-link"
        href={url}
        to={url}
        onClick={() => {
          ReactGA.event({
            category: 'User',
            action: `Click nav-menu: ${name}`,
          });
          gotoPage(url);
        }}
      >
        {name}
      </Link>
    );
  }

  return <Dropdown title={name} list={list} />;
};

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};

NavItem.defaultProps = {
  list: [],
};

export default NavItem;
