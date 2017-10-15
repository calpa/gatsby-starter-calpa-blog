import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Head from './Head.js';

import './index.scss'

const Layout = ({ children }) => (
  <div>
    <Head />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;
