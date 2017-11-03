import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import Head from './Head';
import Footer from '../components/Footer';
import './index.scss';

const Layout = ({ children, location }) => (
  <div className="layout">
    <Head />
    <Navbar location={location} />

    <div className="container">
      {children()}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
