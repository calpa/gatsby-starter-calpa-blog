import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import { isBrowser } from '../../api';

class Content extends Component {
  constructor(props) {
    super(props);
    const { post } = this.props;
    this.post = post;
  }

  componentDidMount() {
    // lazy loads elements with default selector as '.lozad'
    // Prevent WebPack build fail
    if (isBrowser()) {
      // Initialize library
      const observer = lozad('.lozad', {
        load(el) {
          /* eslint-disable no-param-reassign */

          el.src = el.dataset.src;
          el.onload = () => {
            el.classList.add('animated');
            el.classList.add('fadeIn');
          };
          /* eslint-enable */
        },
      });
      observer.observe();
    }
  }

  render() {
    const { post } = this.props;
    return (
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: post }}
        style={{
          padding: 30,
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
