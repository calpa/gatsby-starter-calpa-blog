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
        {data.allContentfulMarkdown.edges.map(({ node }, index) => (
          <Card
            title={node.title}
            date={parseDate(node.createdDate)}
            url={node.url}
            headerSize={node.headerSize}
            headerImage={node.headerImgur || getDefaultPicture()}
            headerBackgroundColor={node.headerBackgroundColor || 'ededed'}
            key={node.title}
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
    allContentfulMarkdown(
      sort: {order: DESC, fields: [createdDate]},
      limit: 6
    ) {
      edges {
        node {
          title
          createdDate
          url
          headerImgur
          headerBackgroundColor
        }
      }
    }
  }
`;
