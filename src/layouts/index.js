import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';
import Head from './Head';

import './index.scss';

const Layout = ({ children }) => (
  <div>
    <Head />
    <Navbar />

    <div className="container-fluid">
      <div className="row">
        {children()}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
