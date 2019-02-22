import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/Card';
import SEO from '../components/SEO';

// eslint-disable-next-line react/prop-types
const TagPage = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const { tag } = pageContext;
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
        &nbsp;Articles in&nbsp;
        {tag}
      </div>

      {edges.map(({ node }) => (
        <Card {...node.frontmatter} key={node.id} />
      ))}

      <SEO
        title={tag}
        url={`/tag/${tag}`}
        siteTitleAlt="Calpa's Blog"
        isPost={false}
        description={tag}
        image="https://i.imgur.com/M795H8A.jpg"
      />
    </div>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query tagQuery($tag: [String!]) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: $tag } } }
    ) {
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
