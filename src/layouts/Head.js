import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet
    defaultTitle="Calpa's Blog"
  >
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css" />
  </Helmet>
);

export default Head;
