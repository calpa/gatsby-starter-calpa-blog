import React from 'react';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import { parseDate, getPath } from '../api/';
import { getDefaultPicture } from '../api/images';
import { getFirstParagraph } from '../api/text';

const Page = ({ data, location }) => (
  <div className="row homepage">
    <Sidebar
      totalCount={data.latestPosts.totalCount}
      posts={data.latestPosts.edges}
    />
    <div className="col-lg-6 col-md-12 col-xs-12 order-2" >
      <div className="row">
        {data.pagePosts.edges.map(({ node }, index) => (
          <Card
            title={node.title}
            date={parseDate(node.createdDate)}
            url={node.url}
            headerSize={node.headerSize}
            headerImage={node.headerImgur || getDefaultPicture()}
            headerBackgroundColor={node.headerBackgroundColor || 'ededed'}
            key={node.title}
            index={index}
            content={getFirstParagraph(node.content)}
          />
        ))}
      </div>
      <Pagination pathname={location.pathname} />
    </div>
    <div className="col-lg-2 order-3" />
    <SEO
      url={getPath()}
      description="Calpa's Blog"
      image="https://i.imgur.com/kjt2x52.png"
      siteTitleAlt="Calpa's Blog"
      isPost={false}
    />
  </div>
);


export default Page;

export const pageQuery = graphql `
query getNextPage($limit: Int, $skip: Int) {
  latestPosts: allContentfulMarkdown(limit: 6) {
    totalCount
    edges {
      node {
        title
        url
        createdDate
      }
    }
  }

  pagePosts: allContentfulMarkdown(
        sort: {order: DESC, fields: [createdDate]}
        limit: $limit
        skip: $skip
    ) {

      edges {
       node {
         title
         createdDate
         url
         headerImgur
         content
       }
     }
  }
}
`;
