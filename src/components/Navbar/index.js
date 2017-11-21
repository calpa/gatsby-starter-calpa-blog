import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';

import './index.scss';

const search = (e) => {
  e.preventDefault();
  const query = document.getElementById('nav-search').value;
  navigateTo(`/search?query=${query}`);
};

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

const NavbarClass = [
  'navbar', 'navbar-expand-md',
  'sticky-top',
  'custom-navbar',
];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.location = this.props.location;
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 55;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <nav className={`${NavbarClass.join(' ')} ${this.state.isTop === true ? 'navbar-light' : 'navbar-dark is-fixed'}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="brand-logo">Calpa</span> 's Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
            {this.props.location.pathname !== '/search' &&
              <form
                className="form-inline my-2 my-lg-0"
                onSubmit={e => search(e)}
              >
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" id="nav-search" />
                <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            }
            <NavItem url="/about/" name="瀏覽簡介" />
            <NavItem url="/fonts/" name="字體" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
