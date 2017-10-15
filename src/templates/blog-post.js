import React, { Component } from 'react';

import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';

import ReactMarkdown from 'react-markdown';

import Sidebar from '../components/Sidebar';

import './blog-post.scss';
import './toc.scss';

const getBody = (mdFile) => {
  // As Gastby's markdownRemark add '---' at the beginnings
  // We need to extract the body part only
  const secondHR = mdFile.indexOf('---', 4) + 3;
  const body = mdFile.slice(secondHR);

  return body;
};

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
      repo: 'calpa.github.io',
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

        <div className="col-sm-12">
          <h1>{post.frontmatter.title}</h1>
        </div>

        <Sidebar post />

        <div className="col-lg-8 col-sm-8 post-container order-md-2">
          <ReactMarkdown source={getBody(post.internal.content)} />
          <hr />
        </div>

        <div className="col-lg-2 col-sm-4 order-md-3">
          <ReactMarkdown source={post.tableOfContents} className="toc-wrap" />
        </div>

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
