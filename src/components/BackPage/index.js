import React from 'react';

import Link from 'gatsby-link';

import { getPreviousPage } from '../../api/url';

const NextPage = () => (
  <Link to={getPreviousPage()}>
    <button type="button" className="btn btn-info">Newer Posts</button>
  </Link>
);

export default NextPage;
