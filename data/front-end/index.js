import links from './link';
import data from './data';

const options = {
  title: {
    text: '前端學習圖譜',
    top: 'top',
    left: 'center',
  },
  tooltip: {},
  legend: [{
    tooltip: {
      show: true,
    },
    selectedMode: 'false',
    bottom: 20,
    data: ['HTML', 'CSS', 'JavaScript'],
  }],
  toolbox: {
    show: true,
    feature: {
      dataView: {
        show: true,
        readOnly: true,
      },
      restore: {
        show: true,
      },
      saveAsImage: {
        show: true,
      },
    },
  },
  animationDuration: 3000,
  animationEasingUpdate: 'quinticInOut',
  series: [{
    name: '前端學習圖譜',
    type: 'graph',
    layout: 'force',
    force: {
      repulsion: 200,
    },
    data,
    links,
    categories: [{
      name: 'HTML',
    }, {
      name: 'CSS',
    }, {
      name: 'JavaScript',
    }],
    focusNodeAdjacency: true,
    roam: true,
    label: {
      normal: {
        show: true,
        position: 'top',
      },
    },
    lineStyle: {
      normal: {
        color: 'source',
        curveness: 0,
        type: 'solid',
      },
    },
  }],
};


export default options;
