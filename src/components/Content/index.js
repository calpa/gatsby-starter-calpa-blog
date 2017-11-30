import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import Clap from '../Clap';

import { isBrowser } from '../../api';
import { getContent } from '../../api/text';
// import config from '../../../data/config';

class Content extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.post;
    this.state = {
      html: '',
    };
  }

  async componentWillMount() {
    const { html } = await getContent(this.post);
    // lazy loads elements with default selector as '.lozad'
    this.setState({ html });
    // Prevent WebPack build fail
    if (isBrowser()) {
      const observer = lozad();
      observer.observe();
    }
  }

  render() {
    return (
      <div className="col-lg-12 col-sm-12 post-container order-md-2">
        <div
          dangerouslySetInnerHTML={{ __html: this.state.html }}
        />
        <hr />
        <Clap />
      </div>
    );
  }
}

Content.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Content;
