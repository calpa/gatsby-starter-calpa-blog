import React, { Component } from 'react';
import PropTypes from 'prop-types';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/graph';

class LearningMap extends Component {
  componentDidMount() {
    this.initPie();
  }

  componentDidUpdate() {
    this.initPie();
  }

  initPie() {
    const { options = {} } = this.props; // 外部传入的data数据
    const myChart = echarts.init(this.ID); // 初始化echarts

    // 设置options
    myChart.setOption(options);
    window.onresize = () => {
      myChart.resize();
    };
  }

  render() {
    const { width, height } = this.props;
    return (<div
      ref={ID => this.ID = ID}
      style={{ width, height }}
    />);
  }
}

LearningMap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

LearningMap.defaultProps = {
  width: '100%',
  height: '200px',
};

export default LearningMap;
