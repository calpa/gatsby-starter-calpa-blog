import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import { isBrowser } from '../../api';
import { getContent } from '../../api/text';

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
      <div
        dangerouslySetInnerHTML={{ __html: this.state.html }}
      />
    );
  }
}

Content.propTypes = {
  post: PropTypes.string.isRequired,
  // uuid: PropTypes.string.isRequired,
  // title: PropTypes.string.isRequired,
};

export default Content;
