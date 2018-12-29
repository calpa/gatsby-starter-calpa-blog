/* eslint-disable react/prop-types,react/destructuring-assignment */
// Components
import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Helmet from 'react-helmet';

import 'gitalk/dist/gitalk.css';

import { getPath } from '../../api';
import Sidebar from '../../components/Sidebar';
import ShareBox from '../../components/ShareBox';
import SEO from '../../components/SEO';

import { config } from '../../../data';

import './index.scss';

const { gitalk, url } = config;

// Prevent webpack window problem
const isBrowser = typeof window !== 'undefined';
const Gitalk = isBrowser ? require('gitalk') : undefined;

class Guestbook extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  componentDidMount() {
    // Gitalk
    const GitTalkInstance = new Gitalk({
      ...gitalk,
      id: `${url}/guestbook/`,
    });
    GitTalkInstance.render('gitalk-container');
  }

  render() {
    const { totalCount, edges } = this.data.latestPosts;
    const guestbookURL = getPath();

    const description = '留言簿';
    const image = 'https://i.imgur.com/kjt2x52.png';

    return (
      <div className="row post guestbook">
        <Helmet>
          <title>留言簿</title>
        </Helmet>

        <Sidebar totalCount={totalCount} posts={edges} post />
        <div className="col-lg-6 col-md-12 col-sm-12 order-10 d-flex flex-column content">
          <h2>
            留言簿
            <ShareBox url={guestbookURL} />
          </h2>
          <div id="gitalk-container" className="col-12" />
        </div>

        <SEO
          url={getPath()}
          description={description}
          image={image}
          siteTitleAlt="Calpa's Blog"
          isPost={false}
        />
      </div>
    );
  }
}

export default Guestbook;

export const query = graphql`
  query GuestbookQuery {
    latestPosts: allPostMarkdown(limit: 6) {
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
