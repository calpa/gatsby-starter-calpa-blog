import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import { getBody } from '../../api/text';
import config from '../../../data/config';

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
      <div>
        <div className="col-lg-12 col-sm-12 post-container order-md-2">
          <div
            dangerouslySetInnerHTML={{ __html: getBody(this.post) }} // eslint-disable-line
          />
          <hr />
        </div>

        {config.post.tableOfContents &&
          <div className="col-lg-2 col-sm-4 order-md-3" />
        }
      </div>
    );
  }
}

Content.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Content;
