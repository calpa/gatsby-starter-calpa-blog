import React from 'react';

import { parseImgur } from '../../api/images';

const Image = ({ href, title, text }) => (
  <img
    className="lozad"
    data-src={parseImgur(href, 'large')}
    title={title || text}
    alt={title || text}
  />
);

export default Image;
