import React from 'react';

import PropTypes from 'prop-types';

import { ShareButtons, generateShareIcon } from 'react-share';

// import { addthis } from '../../../data/config';

// import { refreshToolBox } from '../../api/addthis';

const {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');

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
    <TelegramShareButton
      url={url}
      className="d-inline-block"
    >
      <TelegramIcon
        size={32}
        round
      />
    </TelegramShareButton>
    <WhatsappShareButton
      url={url}
      className="d-inline-block"
    >
      <WhatsappIcon
        size={32}
        round
      />
    </WhatsappShareButton>
  </div>
);

ShareBox.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShareBox;
