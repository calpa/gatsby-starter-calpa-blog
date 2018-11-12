const template = require('./template');
const secret = require('./secret');

// If the environment is in https://calpa.me, then use current config
// Headers and posts are obtained from Contentful

if (process.env.isMaster) {
  module.exports = secret;
} else {
  module.exports = template;
}
