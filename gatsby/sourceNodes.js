const asyncForEach = require('../src/api/asyncForEach');
const getPosts = require('./getPosts');
const { getContent } = require('../src/api/text');

// Create node for createNode function
const processDatum = (datum, html = '', toc = []) => ({
  id: datum.sys.id,
  parent: 'Post',
  children: [],
  internal: {
    type: 'PostMarkdown',
    contentDigest: datum.fields.content || 'no-content',
  },
  html,
  toc,
  ...datum.fields,
});

const makeNode = async ({ contentType, createNode }) => {
  const { data } = await getPosts(contentType);
  // Process data into nodes.
  // Async forEach function is used in here,
  // please refer to the blog

  asyncForEach(data.items, async (datum) => {
    if (datum && datum.fields && datum.fields.content) {
      const { html, toc } = await getContent(datum.fields.content);
      createNode(processDatum(datum, html, toc));
    } else {
      console.error('cannot find content');
    }
  });
};

const createHeader = async (createNode) => {
  const { data } = await getPosts('headers');
  data.items.forEach((datum) => {
    const node = {
      id: datum.sys.id,
      parent: 'Headers',
      children: [],
      internal: {
        type: 'Header',
        contentDigest: datum.fields.headerImage || 'no-header-image',
      },
      ...datum.fields,
    };
    createNode(node);
  });
};

module.exports = async ({ actions }) => {
  const { createNode } = actions;
  // Create nodes here, generally by downloading data
  // from a remote API.

  await makeNode({ contentType: 'blogPost', createNode });

  // Make changable headers
  await createHeader(createNode);
};
