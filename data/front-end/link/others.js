const others = [
  {
    source: 'axios',
    target: 'XMLHttpRequest',
  },
  {
    source: 'HTTP',
    target: 'axios',
  },
  {
    source: 'Database',
    target: 'MongoDB',
  }, {
    source: 'Database',
    target: 'MySQL',
  }, {
    source: 'HTTP',
    target: '前端',
  }, {
    source: 'HTTP',
    target: '後端',
  }, {
    source: '後端',
    target: 'Database',
  },
  {
    source: 'HTML',
    target: 'HTML5',
  }, {
    source: 'HTTP',
    target: 'HTTP2',
  }, {
    source: 'HTTP',
    target: 'Webpack',
  }, {
    source: 'CSS',
    target: 'CSS3',
  }, {
    source: 'WebSocket',
    target: 'Socket.io',
  }, {
    source: 'Node.js',
    target: 'Express.js',
  }, {
    source: 'Node.js',
    target: 'Koa',
  }, {
    source: 'React.js',
    target: 'Redux',
  }, {
    source: '瀏覽器',
    target: 'Storage',
  }, {
    source: 'Storage',
    target: 'Local Storage',
  }, {
    source: 'Storage',
    target: 'Session Storage',
  }, {
    source: 'Storage',
    target: 'IndexDB',
  }, {
    source: '前端',
    target: '瀏覽器',
  }, {
    source: '瀏覽器',
    target: '瀏覽器渲染頁面過程',
  },
];

export default others;
