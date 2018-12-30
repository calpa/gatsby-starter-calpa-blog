/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */

// Components
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import md5 from 'md5';
import dayjs from 'dayjs';

import 'gitalk/dist/gitalk.css';

import { parseChineseDate, getPath } from '../api';
import { getFirstParagraph } from '../api/text';
import { parseImgur } from '../api/images';

import ExternalLink from '../components/ExternalLink';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import SEO from '../components/SEO';

import TableOfContent from '../components/TableOfContent';
import Header from '../components/Header';

import ShareBox from '../components/ShareBox';

import { getUrl } from '../api/url';

import { config } from '../../data';

// Styles
import './blog-post.scss';

const {
  url, name, iconUrl, gitalk,
} = config;

const bgWhite = { padding: '10px 15px', background: 'white' };

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

    // 一開始的時候是直接調用 document.title 作為 id
    // 不過在 2018年 3月 1日 Github 有標籤字數限制
    // 2018年 9月 9日後直接使用 id

    const issueDate = '2018-03-01';
    const idDate = '2018-09-09'; // 修理遺留代碼錯誤
    const { createdDate, title } = this.data.content.edges[0].node;
    let { id } = this.data.content.edges[0].node;

    let finalTitle = title;
    if (dayjs(createdDate).isAfter(issueDate)) {
      finalTitle = `${title} | Calpa's Blog`; // For Create Github Issue

      if (dayjs(createdDate).isBefore(idDate)) {
        id = md5(title);
      }
    } else {
      const pathname = getPath();
      const lastSymbol = pathname[pathname.length - 1] === '/' ? '' : '/';
      id = `${url}${pathname}${lastSymbol}`;
    }

    const GitTalkInstance = new Gitalk({
      ...gitalk,
      title: finalTitle,
      id,
    });
    GitTalkInstance.render('gitalk-container');
  }

  render() {
    const { previous, node, next } = this.data.content.edges[0];

    const {
      title,
      headerImgur,
      createdDate,
      content,
      id,
      toc,
      tags,
      jueJinLikeIconLink,
      jueJinPostLink,
    } = node;

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
          authorName={name}
          authorImage={iconUrl}
          subTitle={parseChineseDate(createdDate)}
          jueJinLikeIconLink={jueJinLikeIconLink}
          jueJinPostLink={jueJinPostLink}
        />
        <Sidebar totalCount={totalCount} posts={edges} post />
        <div className="col-lg-6 col-md-12 col-sm-12 order-10 d-flex flex-column content">
          <Content post={content} uuid={id} title={title} />

          <div className="m-message" style={bgWhite}>
            如果你覺得我的文章對你有幫助的話，希望可以推薦和交流一下。歡迎
            <ExternalLink
              href="https://github.com/calpa/gatsby-starter-calpa-blog"
              title="關注和 Star 本博客"
            />
            或者
            <ExternalLink
              href="https://github.com/calpa/"
              title="關注我的 Github"
            />
            。
          </div>

          <div className="m-change-page" style={bgWhite}>
            <p>更多文章：</p>
            {previous && (
              <p>
                <a href={getUrl(previous)}>{previous.title}</a>
              </p>
            )}
            {next && (
              <p>
                <a href={getUrl(next)}>{next.title}</a>
              </p>
            )}
          </div>
        </div>

        <ShareBox url={url + getUrl(node)} />
        <TableOfContent toc={toc} />
        <div id="gitalk-container" className="col-sm-8 col-12 order-12" />
        <SEO
          title={title}
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

export const pageQuery = graphql`
  fragment post on PostMarkdownConnection {
    edges {
      node {
        id
        title
        url
        createdDate
      }
    }
  }

  fragment postLink on PostMarkdown {
    title
    url
    createdDate
  }

  query BlogPostQuery($index: Int) {
    content: allPostMarkdown(
      sort: { fields: createdDate, order: DESC }
      limit: 1
      skip: $index
    ) {
      ...post
      edges {
        node {
          content: html
          headerImgur
          toc
          tags
          jueJinLikeIconLink
          jueJinPostLink
        }
        previous {
          ...postLink
        }
        next {
          ...postLink
        }
      }
    }
    latestPosts: allPostMarkdown(
      limit: 6
      sort: { fields: [createdDate], order: DESC }
    ) {
      totalCount
      ...post
    }
  }
`;

export default BlogPost;
