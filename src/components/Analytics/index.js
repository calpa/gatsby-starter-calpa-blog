import React from 'react';

import Clap from './Clap';

const Analytics = ({ data }) => (
  <div>
    {data.map(clap =>
      (<Clap
        title={clap.title}
        countTotal={clap.countTotal}
        key={clap.title}
      />))}
  </div>
);

export default Analytics;
