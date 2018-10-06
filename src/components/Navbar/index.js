import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GithubCorner from '../GithubCorner';

import NavItem from './NavItem';
import { gotoPage } from '../../api/url';
import { navbarList } from '../../../data/config';
import './index.scss';

const NavbarClass = [
  'navbar',
  'navbar-expand-md',
  'sticky-top',
  'custom-navbar',
];

const Navbar = () => (
  <nav id="m-navbar" className={`${NavbarClass.join(' ')} navbar-night`}>
    <div className="container">
      <button
        type="button"
        className="navbar-brand btn btn-default"
        onClick={() => gotoPage('/')}
      >
        <span className="brand-logo">Calpa</span> &apos;s Blog
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <GithubCorner url="https://github.com/calpa/blog" />
      <div
        className="collapse navbar-collapse flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-2">
          {navbarList.map(item => (
            <NavItem
              url={item.href}
              name={item.title}
              list={item.list}
              key={item.href}
            />
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
