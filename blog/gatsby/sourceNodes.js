const asyncForEach = require('../src/api/asyncForEach');
const getPosts = require('./getPosts');
const { getContent } = require('../src/api/text');

// Create node for createNode function
const processDatum = (datum, html = '', toc = []) => ({
  id: datum.sys.id,
  parent: 'Contentful',
  children: [],
  internal: {
    type: 'ContentfulMarkdown',
    contentDigest: datum.fields.content,
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
    const { html, toc } = await getContent(datum.fields.content);
    createNode(processDatum(datum, html, toc));
  });
};

module.exports = async ({ actions }) => {
  const { createNode } = actions;
  // Create nodes here, generally by downloading data
  // from a remote API.

  await makeNode({ contentType: 'blogPost', createNode });
  // await makeNode({ contentType: 'about', createNode });
  // Make changable headers
  const { data } = await getPosts('headers');
  data.items.forEach((datum) => {
    const node = {
      id: datum.sys.id,
      parent: 'Headers',
      children: [],
      internal: {
        type: 'Header',
        contentDigest: datum.fields.headerImage,
      },
      ...datum.fields,
    };
    createNode(node);
  });
};
