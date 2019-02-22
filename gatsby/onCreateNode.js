const { createFilePath } = require('gatsby-source-filesystem');

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    // 如果 markdown 的 frontmatter 裡面有 slug 的話，直接讀就可以了
    let { slug = '' } = node.frontmatter;

    if (slug === null || slug.trim() === '') {
      slug = createFilePath({ node, getNode, basePath: 'pages' });
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
