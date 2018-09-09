// Components
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import md5 from 'md5';
import dayjs from 'dayjs';

import 'gitalk/dist/gitalk.css';

import { parseChineseDate, getPath } from '../api/';
import { getFirstParagraph } from '../api/text';
import { parseImgur } from '../api/images';

import ExternalLink from '../components/ExternalLink';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
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
    // let title = document ? document.title : '';
    const { createdDate, title } = this.data.content.edges[0].node;
    let finalTitle = title;
    if (dayjs(createdDate).isAfter(issueDate)) {
      finalTitle = `${title} | Calpa's Blog`; // For Create Github Issue
      id = md5(title);
    }
    const gitalk = new Gitalk({
      clientID: '18255f031b5e11edd98a',
      clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
      repo: 'calpa.github.io',
      owner: 'calpa',
      admin: ['calpa'],
      distractionFreeMode: true,
      title: finalTitle,
      id,
    });
    gitalk.render('gitalk-container');
  }

  render() {
    const {
      title,
      headerImgur,
      createdDate,
      content,
      id,
      toc,
      tags,
      jueJinId,
    } = this.data.content.edges[0].node;

    const { totalCount, edges } = this.data.latestPosts;

    let finalTags = [];
    if (tags) {
      finalTags = tags.split(',').map((item) => {
        if (item) {
          return item.trim();
        }
        return '';
      });
    }
    const image = parseImgur(headerImgur, 'large');
    const header = parseImgur(headerImgur, 'header');

    return (
      <div className="row post order-2">
        <Header
          img={header}
          title={title}
          tags={finalTags}
          subTitle={`日期： ${parseChineseDate(createdDate)}`}
          jueJinId={jueJinId}
        />
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Sidebar totalCount={totalCount} posts={edges} post />
        <div className="col-lg-6 col-md-12 col-sm-12 order-10 d-flex flex-column content">
          <Content post={content} uuid={id} title={title} />
          <p style={{ padding: '10px 15px', background: 'white' }}>
            如果你覺得我的文章對你有幫助的話，希望可以推薦和交流一下。歡迎
            <ExternalLink
              href="https://github.com/calpa/blog"
              title="關注和 Star 本博客"
            />
            或者
            <ExternalLink
              href="https://github.com/calpa/"
              title="關注我的 Github"
            />
            。
          </p>
        </div>
        <TableOfContent toc={toc} />
        <div id="gitalk-container" className="col-sm-8 col-12 order-12" />
        <SEO
          url={getPath()}
          description={getFirstParagraph(content)}
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
  fragment post on ContentfulMarkdownConnection {
    edges {
      node {
        id
        title
        url
        createdDate
      }
    }
  }

  query BlogPostQuery($index: Int) {
    content: allContentfulMarkdown(limit: 1, skip: $index) {
      ...post
      edges {
        # 文章數據
        node {
          content: html
          headerImgur
          toc
          tags
          jueJinId
        }
        previous {
          id
          title
        }
        next {
          id
          title
        }
      }
    }
    latestPosts: allContentfulMarkdown(limit: 6) {
      totalCount
      ...post
    }
  }
`;
