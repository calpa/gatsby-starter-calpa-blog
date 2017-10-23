// Coponents
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import 'gitalk/dist/gitalk.css';

// import ReactMarkdown from 'react-markdown';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

import './blog-post.scss';
import './toc.scss';

// import config from '../../data/config';

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
    const gitalk = new Gitalk({
      clientID: '18255f031b5e11edd98a',
      clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
      repo: 'blog',
      owner: 'calpa',
      admin: ['calpa'],
      distractionFreeMode: true,
    });
    gitalk.render('gitalk-container');
  }

  render() {
    const post = this.data.markdownRemark;
    return (
      <div className="row blog-post">
        <Helmet>
          <title>{post.frontmatter.title}</title>
        </Helmet>
        <div className="col-sm-12">
          <h1>{post.frontmatter.title}</h1>
        </div>

        <Sidebar post />

        <Content post={post.internal.content} />

        <div id="gitalk-container" className="col-sm-12 order-12" />

      </div>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      tableOfContents
      internal {
        content
      }
      frontmatter {
        title
      }
    }
  }
`;
