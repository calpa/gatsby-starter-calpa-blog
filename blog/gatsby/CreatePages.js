const path = require('path');
const dayjs = require('dayjs');
const { redirectors } = require('../data/config');

module.exports = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;

  redirectors.forEach(({ fromPath, toPath = '/' }) => {
    createRedirect({ fromPath, redirectInBrowser: true, toPath });
    // Uncomment next line to see forEach in action during build
    console.log(`Redirecting: ${fromPath} To: ${toPath}`);
  });

  return new Promise((resolve) => {
    graphql(`
      {
        allContentfulMarkdown(sort: { fields: [createdDate], order: DESC }) {
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
      // console.log(result);
      const posts = result.data.allContentfulMarkdown.edges;
      // console.log(posts);
      const postInPage = 6;
      const pages = Math.ceil(posts.length / postInPage);

      for (let index = 0; index < pages; index += 1) {
        createPage({
          path: `page/${index + 1}`,
          component: path.resolve('./src/templates/page.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            limit: postInPage,
            skip: index * postInPage,
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
      resolve();
    });
  });
};
