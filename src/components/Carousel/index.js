import React from 'react';
import Indicator from './Indicator';
import CarouselItem from './CarouselItem';
import Controller from './Controller';

const Carousel = ({ items }) => (
  <div id="carouselControls" className="carousel slide" data-ride="carousel">
    <Indicator items={items} />
    <div className="carousel-inner">
      {items.map((item, index) => (
        <CarouselItem
          src={item.src}
          alt={item.alt}
          index={index}
          key={item.alt}
        />
      ))}
    </div>
    <Controller />
  </div>
);

export default Carousel;
