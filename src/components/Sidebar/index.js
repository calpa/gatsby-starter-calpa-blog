import React from 'react';
// import LazyLoad from 'react-lazyload';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import config from '../../../data/config';

import Information from './Information';
import Subscribiton from './Subscribiton';

import './index.scss';

const Icon = ({ href, name, content }) => (
  <a
    target="_blank"
    href={href}
    rel="external nofollow noopener noreferrer"
    className="custom-icon"
  >
    <span className="fa-stack fa-lg mx-1">
      <i className="fa fa-circle fa-stack-2x" />
      <i className={`fa fa-stack-1x fa-inverse ${name}`}>{content}</i>
    </span>
  </a>
);

const Sidebar = ({ post, totalCount, posts }) => (
  <header className={`intro-header site-heading text-center col-lg-2 col-xs-12 order-lg-1 ${post === true ? 'order-11' : 'order-1'}`} >
    <div className="about-me">
      <Link to="/about/" href="/about" className="name">
        <img
          className="avatar"
          src="https://i.imgur.com/kjt2x52.png"
          alt="Calpa"
        />
        <h4>Calpa</h4>
      </Link>
      <p className="mb-1">夢裡不覺秋已深</p>
      <p className="mb-3">餘情豈是為他人</p>
      <Icon
        href={`https://www.zhihu.com/people/${config.zhihu_username}`}
        content="知"
      />
      <Icon
        href={`https://github.com/${config.github_username}`}
        name="fa-github"
      />
      <Icon
        href={`mailto:${config.email}`}
        name="fa-envelope"
      />

      <Subscribiton />
      <Information
        totalCount={totalCount}
        posts={posts}
      />
    </div>
  </header>
);

Sidebar.propTypes = {
  post: PropTypes.bool,
  totalCount: PropTypes.number,
};

Sidebar.defaultProps = {
  post: false,
  totalCount: 0,
};

export default Sidebar;
