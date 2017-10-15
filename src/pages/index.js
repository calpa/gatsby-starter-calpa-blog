import React, { Component } from 'react';
import Link from 'gatsby-link';

import Card from '../components/Card'

const HomePage = ({data}) => (
      <div>
        <h2>博客文章</h2>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Card
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            key={i}/>
        ))}
      </div>
    );

export default HomePage;

export const pageQuery = graphql`
  query getAllPosts {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
      limit: 5
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
