import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({ src, alt, index }) => (
  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  </div>
);

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  index: PropTypes.number.isRequired,
};

CarouselItem.defaultProps = {
  alt: '',
};

export default CarouselItem;
