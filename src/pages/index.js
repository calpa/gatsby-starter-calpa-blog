import React, { Component } from 'react';
import Link from 'gatsby-link';

import moment from 'moment';
import Card from '../components/Card'
import Navbar from '../components/Navbar';

const parseDate = (date) => (
  moment(date).format('YYYY/MM/DD')
)

const HomePage = ({data}) => (
      <div>
        <Navbar />
        <h2>博客文章</h2>
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <Card
            title={node.frontmatter.title}
            date={parseDate(node.frontmatter.date)}
            url={node.frontmatter.parent}
            headerSize={node.frontmatter.headerSize}
            headerImage={node.frontmatter.headerSize}
            headerBackgroundColor={node.frontmatter.headerBackgroundColor}
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
            parent
            headerImage
            headerSize
            headerBackgroundColor
          }
        }
      }
    }
  }
`;
