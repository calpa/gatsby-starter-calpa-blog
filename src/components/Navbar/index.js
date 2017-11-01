import React from 'react';
import Link, { navigateTo } from 'gatsby-link';

const search = (e) => {
  e.preventDefault();
  const query = document.getElementById('nav-search').value;
  navigateTo(`/search?query=${query}`);
};

const Navbar = ({ location }) => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top mb-3">
    <Link className="navbar-brand" to="/">Calpa's Blog</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
      {location.pathname !== '/search' &&
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={e => search(e)}
        >
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" id="nav-search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      }

      <ul className="navbar-nav mr-2">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
