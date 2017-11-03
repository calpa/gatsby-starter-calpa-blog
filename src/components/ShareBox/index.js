import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { addthis } from '../../../data/config';

const ShareButton = ({ service }) => (
  <a className={`addthis_button_${service}`} />
);

class ShareBox extends Component {
  componentDidMount() {
    if (window.addthis) {
      window.addthis.toolbox('.addthis_toolbox');
    }
  }

  render() {
    return (
      <div className="addthis_toolbox addthis_default_style addthis_32x32_style">
        {addthis.map(service => <ShareButton service={service} key={service} />)}
      </div>
    );
  }
}

ShareButton.propTypes = {
  service: PropTypes.string.isRequired,
};

export default ShareBox;
