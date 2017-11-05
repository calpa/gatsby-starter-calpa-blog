import React from 'react';

import PropTypes from 'prop-types';

const ExternalLink = ({ href, title }) => (
  <a
    href={href}
    rel="external nofollow noopener noreferrer"
  >{title}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ExternalLink;
