import React, { Component } from 'react';

import LearningMap from '../../../components/LearningMap';
import options from '../../../../data/front-end';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {},
    };
  }

  componentWillMount() {
    this.setState({ options });
  }

  render() {
    return (
      <div className="container">
        <h3>前端學習圖譜</h3>
        {this.state.options &&
          <LearningMap
            width="50%"
            height="100vh"
            options={this.state.options}
          />
        }
      </div>
    );
  }
}
export default Learning;
