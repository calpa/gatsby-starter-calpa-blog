/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Head from './Head';
import Footer from '../Footer';
import AddToHomePrompt from './AddToHomePrompt';
import './index.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
  });
}

const Layout = ({ children }) => (
  <div className="layout">
    <Head />
    <Navbar />

    <div className="container-fluid">{children}</div>
    <Footer />
    <AddToHomePrompt />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
