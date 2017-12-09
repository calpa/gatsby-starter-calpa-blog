import React from 'react';

import Carousel from '../../../components/Carousel';
import { items } from '../../../../data/config';

const Bootstrap = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>Bootstrap Components</h2>
        <p>Carousel</p>
        <Carousel items={items} />
      </div>
    </div>
  </div>
);

export default Bootstrap;
