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
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
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
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        let date = node.frontmatter.date;
        date = moment(date).format('YYYY/MM/DD');
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
