import React from 'react';

import moment from 'moment';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

import BackPage from '../components/BackPage';
import NextPage from '../components/NextPage';

import './index.scss';

import { maxPages } from '../../data/config';

const parseDate = date =>
  moment(date).format('YYYY/MM/DD');


const HomePage = ({ data }) => (
  <div className="row pb-5">
    <Sidebar />

    <div className="
      col-xl-8
      col-lg-8
      col-md-12
      col-xs-12
      order-2
      "
    >
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card
            title={node.frontmatter.title}
            date={parseDate(node.frontmatter.date)}
            url={node.frontmatter.parent}
            headerSize={node.frontmatter.headerSize}
            headerImage={node.frontmatter.headerImage}
            headerBackgroundColor={node.frontmatter.headerBackgroundColor}
            key={node.frontmatter.title}
          />
        ))}
      </div>
    </div>

    <div className="row order-3 w-100 justify-content-around">
      {window.location.pathname.indexOf('page') !== -1 && <BackPage /> }
      {window.location.pathname.split('/')[2] !== maxPages && <NextPage />}
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
