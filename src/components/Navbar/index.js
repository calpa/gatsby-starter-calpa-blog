import React from 'react';

const pages = [];

const Navbar = () => (
  <nav className="navbar navbar-default navbar-custom navbar-fixed-top" id="nav-top">
    <div className="container-fluid">
      <div className="navbar-header page-scroll">
        <button type="button" className="navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand animated pulse" href="/">
          <span className="brand-logo">Calpa</span><span className="brand-blog">'s Blog</span>
        </a>
      </div>

      <div id="huxblog_navbar">
        <div className="navbar-collapse">
          <ul className="nav navbar-nav navbar-center title-calpa display-none">
            <li><a href="/">Home</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">Home</a>
            </li>
            {
              pages.forEach(function(page){
                if(page.title){
                  if (page.title !== '404') {
                    <li>
                      <a href="<%= config.root %><%= page.path.replace('index.html', '') %>">
                        {page.title}
                      </a>
                    </li>
                  }
                }
              })
            }
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
