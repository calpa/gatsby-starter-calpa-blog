import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ title, list }) => (
  <li className="nav-item dropdown">
    <button
      type="button"
      className="nav-link dropdown-toggle btn-link"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >{title}
    </button>
    <div className="dropdown-menu">
      {list.map(item => (
        <a
          className="dropdown-item"
          href={item.href}
          key={item.title}
        >{item.title}
        </a>
      ))}
    </div>
  </li>
);

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Dropdown;
