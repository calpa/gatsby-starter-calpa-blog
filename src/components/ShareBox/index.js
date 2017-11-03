import React from 'react';

import PropTypes from 'prop-types';

import { ShareButtons, generateShareIcon } from 'react-share';

// import { addthis } from '../../../data/config';

// import { refreshToolBox } from '../../api/addthis';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const ShareBox = ({ url }) => (
  <div>
    <FacebookShareButton
      url={url}
      className="d-inline-block"
    >
      <FacebookIcon
        size={32}
        round
      />
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
      className="d-inline-block"
    >
      <TwitterIcon
        size={32}
        round
      />
    </TwitterShareButton>
  </div>
);

ShareBox.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShareBox;
