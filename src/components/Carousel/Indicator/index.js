import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ index }) => (
  <li
    data-target="#carouselIndicators"
    data-slide-to={index}
    className={`${index === 0 && 'active'}`}
  />
);

Item.propTypes = {
  index: PropTypes.number.isRequired,
};

const Indicator = ({ items }) => (
  <ol className="carousel-indicators">
    {items.map((_, index) => (
      <Item index={index} key={_.alt} />
    ))}
  </ol>
);

Indicator.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Indicator;
