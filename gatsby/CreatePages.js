const path = require('path');

module.exports = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: ASC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              url
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    return posts.forEach((edge, index) => {
      const { id, frontmatter, fields } = edge.node;
      const { url, tags, templateKey } = frontmatter;

      // 允许自定义地址
      let $path = fields.slug;
      if (url) {
        $path = url;
      }

      createPage({
        path: $path,
        tags,
        component: path.resolve(`src/templates/${String(templateKey)}.js`),
        // additional data can be passed via context
        context: {
          id,
          index,
        },
      });
    });
  });
};
