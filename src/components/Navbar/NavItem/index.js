import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { gotoPage } from '../../../api/url';

const NavItem = ({ url, name, list }) => {
  if (list.length === 0) {
    return (
      <button
        className="nav-link btn btn-link"
        href={url}
        to={url}
        onClick={() => gotoPage(url)}
      >{name}
      </button>
    );
  }

  return (<Dropdown title={name} list={list} />);
};


NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.array,
};

NavItem.defaultProps = {
  list: [],
};

export default NavItem;
