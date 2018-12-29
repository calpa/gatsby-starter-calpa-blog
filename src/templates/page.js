/* eslint react/prop-types: 0 */
import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';
import { parseDate, getPath, getMaxPages } from '../api';
import { getFirstParagraph } from '../api/text';
import ShareBox from '../components/ShareBox';

const getTitle = (pageNumber = '1') => {
  if (pageNumber === '1') {
    return '首頁';
  }
  return `第 ${pageNumber} 頁`;
};

const Page = ({ data, location }) => (
  <div className="row homepage">
    <Header
      img={data.header.headerImage}
      title={data.header.title}
      titleVisible={data.header.titleVisible}
      subTitle={data.header.subTitle}
      subTitleVisible={data.header.subTitleVisible}
    />
    <Sidebar
      totalCount={data.latestPosts.totalCount}
      posts={data.latestPosts.edges}
    />
    <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
      <div className="row">
        {data.pagePosts.edges.map(({ node }, index) => (
          <Card
            title={node.title}
            date={parseDate(node.createdDate)}
            url={node.url}
            headerSize={node.headerSize}
            headerImage={node.headerImgur}
            headerBackgroundColor={node.headerBackgroundColor || 'ededed'}
            key={node.title}
            index={index}
            content={getFirstParagraph(node.content)}
            tags={node.tags}
          />
        ))}
      </div>
      <Pagination
        pageCount={getMaxPages(data.allPosts.edges.length)}
        pathname={location.pathname}
      />
    </div>
    <div className="col-xl-2 col-lg-1 order-3" />
    <ShareBox url={location.href} hasCommentBox={false} />
    <SEO
      title={getTitle(location.pathname.split('/')[2])}
      url={getPath()}
      description="Calpa's Blog"
      image="https://i.imgur.com/kjt2x52.png"
      siteTitleAlt="Calpa's Blog"
      isPost={false}
    />
  </div>
);

export default Page;

export const pageQuery = graphql`
  query getNextPage($limit: Int, $skip: Int) {
    header(purpose: { eq: "Home" }) {
      headerImage
      title
      titleVisible
      subTitle
      subTitleVisible
    }
    allPosts: allPostMarkdown(sort: { fields: [createdDate], order: DESC }) {
      edges {
        node {
          id
        }
      }
    }
    latestPosts: allPostMarkdown(
      limit: 6
      sort: { fields: [createdDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          title
          url
          createdDate
        }
      }
    }
    pagePosts: allPostMarkdown(
      sort: { order: DESC, fields: [createdDate] }
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
          tags
        }
      }
    }
  }
`;
