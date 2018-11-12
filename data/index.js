const template = require('./template');
const current = require('./current');

// If the environment is in https://calpa.me, then use current config
// Headers and posts are obtained from Contentful

if (process.env.isMaster) {
  module.exports = current;
} else {
  module.exports = template;
}
