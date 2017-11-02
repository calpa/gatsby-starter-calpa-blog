import React from 'react';

import config from '../../../data/config';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-10 col-md-offset-1 text-center">
          <p className="copyright text-muted">
            <span id="busuanzi_container_site_pv">
              本站總訪問量: <span id="busuanzi_value_site_pv"><i className="fa fa-spinner fa-spin" /></span> 次
            </span>
            <span id="busuanzi_container_site_uv">
              本站訪客數: <span id="busuanzi_value_site_uv"><i className="fa fa-spinner fa-spin" /></span> 次
            </span>
            <br />
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
