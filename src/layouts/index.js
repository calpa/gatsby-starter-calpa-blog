import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import Head from './Head';
import Footer from '../components/Footer';
import './index.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
  });
}

const Layout = ({ children, location }) => (
  <div className="layout fadeIn">
    <Head />
    <Navbar location={location} />

    <div className="container-fluid">
      {children()}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
