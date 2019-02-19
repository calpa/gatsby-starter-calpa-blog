import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/Card';

// eslint-disable-next-line react/prop-types
const TagPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <div className="container">
      <div
        className="row"
        style={{
          fontSize: 20,
          margin: 15,
        }}
      >
        {edges.length}
        &nbsp;Articles in Total
      </div>

      {edges.map(({ node }) => (
        <Card {...node.frontmatter} key={node.id} />
      ))}
    </div>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query tagQuery($tag: [String!]) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: $tag } } }) {
      edges {
        node {
          id
          frontmatter {
            id
            url: slug
            title
            date
            tags
            headerImage
            description
          }
        }
      }
    }
  }
`;
