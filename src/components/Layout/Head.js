import React from 'react';
import { Helmet } from 'react-helmet';
import { config } from '../../../data';

const Head = () => (
  <Helmet defaultTitle={config.title} titleTemplate={`%s | ${config.title}`}>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={config.meta.description} />
    <meta name="keyword" content={config.meta.keyword} />
    <meta name="theme-color" content={config.meta.theme_color} />
    <meta
      name="msapplication-navbutton-color"
      content={config.meta.theme_color}
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content={config.meta.theme_color}
    />
    <link
      rel="shortcut icon"
      href={
        config.meta.favicon
        || 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-128.png'
      }
    />
    <link
      rel="alternate"
      type="application/atom+xml"
      title={config.title}
      href="/atom.xml"
    />
    <meta
      name="google-site-verification"
      content={config.meta.google_site_verification}
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/solarized-light.min.css"
    />
  </Helmet>
);

export default Head;
