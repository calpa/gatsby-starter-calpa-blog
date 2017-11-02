import React from 'react';

import config from '../../../data/config';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <p className="copyright text-muted">
            Copyright &copy; {config.title} {new Date().getFullYear()}<br />
            Theme by Calpa Liu
          </p>
          <hr />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
