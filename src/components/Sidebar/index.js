import React from 'react';
// import LazyLoad from 'react-lazyload';

import PropTypes from 'prop-types';

import './index.scss';

const Sidebar = ({ post }) => (
  <header className={`mx-3 intro-header site-heading text-center col-lg-2 col-xs-12 order-lg-1 ${post === true ? 'order-11' : 'order-1'}`} >
    <div className="about-me">
      <img
        className="avatar my-3"
        src="https://i.imgur.com/kjt2x52.png"
        alt="Calpa"
      />
      <h4>Calpa</h4>
      <p className="mb-1 han-cursive">夢裡不覺秋已深</p>
      <p className="mb-3 han-cursive">餘情豈是為他人</p>
    </div>
  </header>
);

Sidebar.propTypes = {
  post: PropTypes.bool,
};

Sidebar.defaultProps = {
  post: false,
};

export default Sidebar;
