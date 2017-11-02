import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import { getBody } from '../../api/text';
// import config from '../../../data/config';

class Content extends Component {
  constructor(props) {
    super(props);
    this.post = this.props.post;
  }

  componentDidMount() {
    // lazy loads elements with default selector as '.lozad'
    const observer = lozad();
    observer.observe();
  }

  render() {
    return (
      <div className="col-lg-12 col-sm-12 post-container order-md-2">
        <div
          dangerouslySetInnerHTML={{ __html: getBody(this.post) }}
        />
        <hr />
      </div>
    );
  }
}

Content.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Content;
