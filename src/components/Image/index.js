import React from 'react';

import { parseImgur } from '../../api/images';

import './index.scss';

const Image = ({ href, title, text }) => (
  <img
    className="lozad mb-3 align-self-center resized"
    data-src={parseImgur(href, 'large')}
    title={title || text}
    alt={title || text}
  />
);

export default Image;
