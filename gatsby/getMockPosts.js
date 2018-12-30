const { posts, headers, config } = require('../data');

const getMockPosts = (type) => {
  switch (type) {
    case 'blogPost':
      return posts;
    case 'headers':
      return headers;
    case 'configs':
    case 'configuration':
      return config;
    default:
      return posts;
  }
};

module.exports = getMockPosts;
