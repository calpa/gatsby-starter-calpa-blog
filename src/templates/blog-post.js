/* eslint-disable react/destructuring-assignment */
/* eslint react/prop-types: 0 */

// Components
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import 'gitalk/dist/gitalk.css';

import { parseChineseDate } from '../api';

import ExternalLink from '../components/ExternalLink';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import SEO from '../components/SEO';

import Header from '../components/Header';
// import TableOfContent from '../components/TableOfContent';
import ShareBox from '../components/ShareBox';

import { config } from '../../data';

// Styles
import './blog-post.scss';

const { name, iconUrl, gitalk } = config;

const bgWhite = { padding: '10px 30px', background: 'white' };

// Prevent webpack window problem
const isBrowser = typeof window !== 'undefined';
const Gitalk = isBrowser ? require('gitalk') : undefined;

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  componentDidMount() {
    const { frontmatter, id: graphqlId } = this.data.content.edges[0].node;
    const { title, id } = frontmatter;

    const GitTalkInstance = new Gitalk({
      ...gitalk,
      title,
      id: id || graphqlId,
    });
    GitTalkInstance.render('gitalk-container');
  }

  render() {
    const { node } = this.data.content.edges[0];

    const {
      html, frontmatter, fields, excerpt,
    } = node;

    const { slug } = fields;

    const { date, headerImage, title } = frontmatter;

    return (
      <div className="row post order-2">
        <Header
          img={headerImage || 'https://i.imgur.com/M795H8A.jpg'}
          title={title}
          authorName={name}
          authorImage={iconUrl}
          subTitle={parseChineseDate(date)}
        />
        <Sidebar />
        <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 order-10 content">
          <Content post={html} />
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

          <div id="gitalk-container" />
        </div>

        <ShareBox url={slug} />

        <SEO
          title={title}
          url={slug}
          siteTitleAlt="Calpa's Blog"
          isPost={false}
          description={excerpt}
          image={headerImage || 'https://i.imgur.com/M795H8A.jpg'}
        />
      </div>
    );
  }
}

export const pageQuery = graphql`
  fragment post on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      id
      title
      slug
      date
      headerImage
    }
  }

  query BlogPostQuery($index: Int) {
    content: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: $index
      limit: 1
    ) {
      edges {
        node {
          id
          html
          excerpt
          ...post
        }

        previous {
          ...post
        }

        next {
          ...post
        }
      }
    }
  }
`;

export default BlogPost;
