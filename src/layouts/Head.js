import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
  <Helmet
    defaultTitle="Calpa's Blog"
  >
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />

    <script src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
  </Helmet>
);

export default Head;
