// Components
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';
import md5 from 'md5';
import moment from 'moment';
// import { Motion, spring } from 'react-motion';

import 'gitalk/dist/gitalk.css';

import { parseChineseDate, getPath } from '../api/';
import { parseImgur } from '../api/images';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import ShareBox from '../components/ShareBox';
import SEO from '../components/SEO';

import TableOfContent from '../components/TableOfContent';
import Header from '../components/Header';

// Styles
import './blog-post.scss';

// Prevent webpack window problem
const isBrowser = typeof window !== 'undefined';
const Gitalk = isBrowser ? require('gitalk') : undefined;

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  componentDidMount() {
    // Gitalk
    // Due to Github Issue tags length is limited,
    // Then we need to hack the id
    const issueDate = '2018-03-01';
    let id = getPath();
    let title = document ? document.title : '';
    if (moment(this.data.content.createdDate).isAfter(issueDate)) {
      title = `${this.data.content.title} | Calpa's Blog`;
      id = md5(this.data.content.title);
    }
    const gitalk = new Gitalk({
      clientID: '18255f031b5e11edd98a',
      clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
      repo: 'calpa.github.io',
      owner: 'calpa',
      admin: ['calpa'],
      distractionFreeMode: true,
      title,
      id,
    });
    gitalk.render('gitalk-container');
  }

  render() {
    const {
      title, headerImgur, createdDate, content, id,
      toc,
    } = this.data.content;

    const { totalCount, edges } = this.data.latestPosts;
    const url = getPath();
    const image = parseImgur(headerImgur, 'large');
    const header = parseImgur(headerImgur, 'header');

    return (
      <div className="row post order-2">
        <Header
          img={header}
          title={title}
          subTitle={`日期： ${parseChineseDate(createdDate)}`}
        />
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Sidebar
          totalCount={totalCount}
          posts={edges}
          post
        />
        <div className="col-lg-6 col-md-12 col-sm-12 order-10 d-flex flex-column content">
          <ShareBox url={url} />
          <Content post={content} uuid={id} title={title} />
        </div>
        <TableOfContent toc={toc} />
        <div id="gitalk-container" className="col-sm-8 col-12 order-12" />
        <SEO
          url={getPath()}
          description={content.substring(0, 140)}
          image={image}
          siteTitleAlt="Calpa's Blog"
          isPost={false}
        />
      </div>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String!) {
    content: contentfulMarkdown(id: { eq: $id }) {
      content: html
      title
      createdDate
      headerImgur
      id
      toc
    }
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
  }
`;
