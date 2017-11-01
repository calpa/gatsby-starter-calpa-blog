import React from 'react';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

import BackPage from '../components/BackPage';
import NextPage from '../components/NextPage';

import { parseDate, isFirstPage, isLastPage } from '../api/';
import { getDefaultPicture } from '../api/images';

import './index.scss';

const HomePage = ({ data }) => (
  <div className="row pb-5">
    <Sidebar />

    <div className="col-xl-8 col-lg-8 col-md-12 col-xs-12 order-2" >
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <Card
            title={node.frontmatter.title}
            date={parseDate(node.frontmatter.date)}
            url={node.frontmatter.parent}
            headerSize={node.frontmatter.headerSize}
            headerImage={node.frontmatter.headerImage || getDefaultPicture()}
            headerBackgroundColor={node.frontmatter.headerBackgroundColor || 'ededed'}
            key={node.frontmatter.title}
            index={index}
          />
        ))}
      </div>
    </div>

    <div className="row order-3 w-100 justify-content-around">
      {!isFirstPage() && <BackPage /> }
      {!isLastPage() && <NextPage />}
    </div>
  </div>
);

export default HomePage;

export const pageQuery = graphql`
    query getAllPosts {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 6
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
