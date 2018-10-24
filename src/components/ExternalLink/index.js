import React from 'react';

import PropTypes from 'prop-types';

const ExternalLink = ({
 href, title, target, className, 
}) => (
  <a
    href={href}
    rel="external nofollow noopener noreferrer"
    target={target}
    className={className}
  >
    {title}
  </a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
};

ExternalLink.defaultProps = {
  target: '_blank',
  className: '',
};

export default ExternalLink;
