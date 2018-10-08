import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Dropdown = ({ pages, text }) => (
  <div className="dropdown show page-item">
    <button
      className="btn page-link dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {text}
    </button>

    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      {pages.map((_, index) => (
        <Link className="dropdown-item" href={_} to={_} key={_}>
          {index + 1}
        </Link>
      ))}
    </div>
  </div>
);

Dropdown.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.string.isRequired,
};

export default Dropdown;
