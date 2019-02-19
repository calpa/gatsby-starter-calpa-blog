/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import ShareBox from '../components/ShareBox';

const Page = ({ data, location }) => {
  const { totalCount, edges } = data.latestPosts;
  return (
    <div
      className="row homepage"
      style={{
        marginTop: 20,
      }}
    >
      <Sidebar totalCount={totalCount} posts={edges} post />
      <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
        {data.content.edges.map(({ node }) => (
          <Card {...node.frontmatter} key={node.fields.slug} />
        ))}
      </div>
      <div className="col-xl-2 col-lg-1 order-3" />
      <ShareBox url={location.href} hasCommentBox={false} />
    </div>
  );
};

export default Page;

export const pageQuery = graphql`
  fragment cardData on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      id
      title
      url: slug
      date
      tags
      description
      headerImage
    }
  }
  query BlogQuery {
    content: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          ...cardData
        }

        previous {
          ...cardData
        }

        next {
          ...cardData
        }
      }
    }

    latestPosts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 6
    ) {
      totalCount
      edges {
        node {
          ...cardData
        }
      }
    }
  }
`;
