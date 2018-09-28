import React, { Component } from 'react';
import lozad from 'lozad';

import SEO from '../components/SEO';

import wrapLayout from '../api/layout';

class StatsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '過去三十日數據',
      description: '過去三十日數據',
      image: 'https://i.imgur.com/pimaXpl.png',
    };
  }

  componentDidMount() {
    const observer = lozad();
    observer.observe();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              data-src={this.state.image}
              className="lozad"
              alt={this.state.title}
              style={{ maxHeight: '40rem' }}
            />
          </div>
        </div>

        <SEO
          url="/stats/"
          title={this.state.title}
          description={this.state.description}
          image={this.state.image}
          siteTitleAlt={this.state.title}
          isPost={false}
        />
      </div>
    );
  }
}

export default wrapLayout(StatsPage);
