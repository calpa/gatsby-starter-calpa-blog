import React from 'react';

import ExternalLink from '../ExternalLink';
import config from '../../../data/config';

import './index.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="architecture">
            Build with
            {' '}
            <ExternalLink href="https://www.gatsbyjs.org/" title="GatsbyJS" />
            {' '}
and
            {' '}
            <ExternalLink href="https://reactjs.org/" title={`React ${React.version}`} />
.
            Hosted on
            {' '}
            <ExternalLink href="https://www.netlify.com/" title="Netlify" />
.
            <br />
            The code is open source and available at
            {' '}
            <ExternalLink href="https://github.com/calpa/gatsby-starter-calpa-blog" title="Github" />
.
          </p>
          <p className="copyright">
            Copyright &copy;
            {' '}
            {config.title}
            {' '}
            {new Date().getFullYear()}
            {' '}
Theme by Calpa Liu
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
