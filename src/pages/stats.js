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

    const OneSignal = window ? window.OneSignal : [];

    OneSignal.push(() => {
      OneSignal.init({
        appId: 'b40b0217-b229-44cc-adb3-093d00acfaa2',
      });
    });
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

export default wrapLayout(StatsPage);
