import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import { isBrowser } from '../../api';

class Content extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.post;
  }

  componentDidMount() {
    // lazy loads elements with default selector as '.lozad'
    // Prevent WebPack build fail
    if (isBrowser()) {
      const observer = lozad();
      observer.observe();
    }
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.props.post }}
        style={{
          padding: 15,
          background: 'white',
        }}
      />
    );
  }
}

Content.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Content;
