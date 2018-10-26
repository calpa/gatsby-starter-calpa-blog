const { posts, headers } = require('../data');

const getMockPosts = (type) => {
  console.log(type);
  switch (type) {
    case 'blogPost':
      return posts;
    case 'headers':
      return headers;
    default:
      return posts;
  }
};

module.exports = getMockPosts;
