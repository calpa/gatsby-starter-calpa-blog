// Coponents
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import 'gitalk/dist/gitalk.css';

import { parseChineseDate } from '../api/';
import { refreshToolBox } from '../api/addthis';
// import ReactMarkdown from 'react-markdown';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import Image from '../components/Image';
import ShareBox from '../components/ShareBox';

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
      repo: 'calpa.github.io',
      owner: 'calpa',
      admin: ['calpa'],
      distractionFreeMode: true,
    });
    gitalk.render('gitalk-container');
    refreshToolBox();
  }

  render() {
    const {
      title, headerImgur, createdDate, content,
    } = this.data.contentfulMarkdown;
    // console.log(this.data);
    return (
      <div className="row post order-2">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Sidebar post />
        <div className="col-lg-8 col-md-12 col-sm-12 order-10 d-flex flex-column">
          <h1 className="title han-sans">{title}</h1>
          <p className="date han-sans">{parseChineseDate(createdDate)}</p>
          <ShareBox />
          <Image
            href={headerImgur}
            title={title}
          />
          <Content post={content} />
        </div>

        <div id="gitalk-container" className="col-sm-12 order-12" />

      </div>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String!) {
    contentfulMarkdown(id: { eq: $id }) {
      content
      title
      createdDate
      headerImgur
    }
  }
`;
