const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

const moment = require('moment');

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /bad-module/,
      loader: 'null-loader',
    });
  }
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date
              }
            }
          }
        }
      }
    `).then((result) => {
      const posts = result.data.allMarkdownRemark.edges;

      const postInPage = 6;
      const pages = Math.ceil(posts.length / postInPage);

      for (let index = 1; index < pages; index += 1) {
        createPage({
          path: `page/${index}`,
          component: path.resolve('./src/templates/page.js'),
          context: {
          // Data passed to context is available in page queries as GraphQL variables.
            limit: postInPage,
            skip: index * postInPage,
          },
        });
      }

      posts.map(({ node }) => {
        let { date } = node.frontmatter;
        date = moment(date).locale('zh-hk').format('YYYY/MM/DD');
        createPage({
          path: date + node.fields.slug,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
          // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
