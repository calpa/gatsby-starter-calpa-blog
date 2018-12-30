import React, { Component } from 'react';
import lozad from 'lozad';

import SEO from '../components/SEO';

import { config } from '../../data';

const { stats } = config;

class StatsPage extends Component {
  constructor(props) {
    super(props);
    this.state = stats;
  }

  componentDidMount() {
    const observer = lozad();
    observer.observe();
  }

  render() {
    const { image, title, description } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              data-src={image}
              className="lozad"
              alt={title}
              style={{ maxHeight: '40rem' }}
            />
          </div>
        </div>

        <SEO
          url="/stats/"
          title={title}
          description={description}
          image={image}
          siteTitleAlt={title}
          isPost={false}
        />
      </div>
    );
  }
}

export default StatsPage;
