const { posts, headers, configs } = require('../data');

const getMockPosts = (type) => {
  switch (type) {
    case 'blogPost':
      return posts;
    case 'headers':
      return headers;
    case 'configs':
      return configs;
    default:
      return posts;
  }
};

module.exports = getMockPosts;
