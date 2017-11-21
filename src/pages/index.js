import React from 'react';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import BackPage from '../components/BackPage';
import NextPage from '../components/NextPage';
import Pagination from '../components/Pagination';

import { parseDate, isFirstPage, isLastPage, getPath } from '../api/';
import { getDefaultPicture } from '../api/images';
import { getFirstParagraph } from '../api/text';
import './index.scss';

const HomePage = ({ data, location }) => (
  <div className="row pb-5">
    <Sidebar
      totalCount={data.latestPosts.totalCount}
      posts={data.latestPosts.edges}
    />

    <div className="col-xl-8 col-lg-8 col-md-12 col-xs-12 order-2" >
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
      <div className="row order-3 w-100 justify-content-around">
        <Pagination pathname={location.pathname} />
      </div>
    </div>

    <SEO
      url={getPath()}
      description="Calpa's Blog"
      image="https://i.imgur.com/kjt2x52.png"
      siteTitleAlt="Calpa's Blog"
      isPost={false}
    />
  </div>
);

export default HomePage;

export const pageQuery = graphql`
  query getAllPosts {
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
      sort: {order: DESC, fields: [createdDate]},
      limit: 6
    ) {
      totalCount
      edges {
        node {
          title
          createdDate
          url
          headerImgur
          headerBackgroundColor
          content
        }
      }
    }
  }
`;
