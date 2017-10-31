import React from 'react';

import Link from 'gatsby-link';

const NotFoundPage = ({ data }) => (
  <div>
    <h4>找不到你的網頁，本站所有頁面為：</h4>
    {data.allSitePage.edges.map(page => (
      <Link to={page.node.path} href={page.node.path}>
        <li>{page.node.path}</li>
      </Link>
    ))}
  </div>
);

export const pageQuery = graphql`
query getAllPages {
  allSitePage {
    edges {
      node {
        path
      }
    }
  }
}
`;

export default NotFoundPage;
