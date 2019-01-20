import React from 'react';
import CarouselItem from './CarouselItem';

import { config } from '../../../data';

const { carouselItems } = config;

const Controller = () => (
  <React.Fragment>
    <a
      className="carousel-control-prev"
      href="#carouselIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </React.Fragment>
);

const Carousel = () => (
  <div
    id="carouselIndicators"
    className="carousel slide"
    data-ride="carousel"
    style={{
      padding: 15,
    }}
  >
    {/* 暫不支持 indicators */}
    <div className="carousel-inner">
      {carouselItems.map((item, index) => (
        <CarouselItem
          imageSrc={item.src}
          active={index === 0}
          key={item.src}
          target={item.target}
        />
      ))}
    </div>
    {carouselItems.length > 1 && <Controller />}
  </div>
);

export default Carousel;
