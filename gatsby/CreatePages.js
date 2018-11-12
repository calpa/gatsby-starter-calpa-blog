const path = require('path');
const dayjs = require('dayjs');
const { config } = require('../data');

const { redirectors = [], maxPostsInPage } = config;

module.exports = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  redirectors.forEach(({ fromPath, toPath = '/' }) => {
    createRedirect({ fromPath, redirectInBrowser: true, toPath });
    // Uncomment next line to see forEach in action during build
    console.log(`Redirecting: ${fromPath} To: ${toPath}`);
  });

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPostMarkdown(sort: { fields: [createdDate], order: DESC }) {
          edges {
            node {
              title
              createdDate
              id
              url
            }
          }
        }
      }
    `).then((result) => {
      if (result.error) {
        console.error(result.error);
        return reject();
      }
      const posts = result.data.allPostMarkdown.edges;
      const pages = Math.ceil(posts.length / maxPostsInPage);

      for (let index = 0; index < pages; index += 1) {
        createPage({
          path: `page/${index + 1}`,
          component: path.resolve('./src/templates/page.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            limit: maxPostsInPage,
            skip: index * maxPostsInPage,
          },
        });
      }

      posts.map(({ node }, index) => {
        const { createdDate, url } = node;
        const date = dayjs(createdDate).format('YYYY/MM/DD');
        const postPath = url === 'about' ? url : `${date}/${url}`;
        return createPage({
          path: postPath,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            index,
          },
        });
      });
      return resolve();
    });
  });
};
