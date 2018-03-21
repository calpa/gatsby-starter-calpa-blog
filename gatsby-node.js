const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const moment = require('moment');
const axios = require('axios');

const { getContent } = require('./src/api/text.js');

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'n3ctvxixp1mr';
const API_TOKEN = '22acebb1f8d8c45324d922831c49a56d2b2d317d1f72c9d6326c462046ecc13a';

// Get All Post from Contentful
const getPosts = async (contentType) => {
  const order = '-fields.createdDate';
  const POST_URL = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries`;
  const res = await axios.get(POST_URL, {
    params: {
      order,
      content_type: contentType,
      access_token: API_TOKEN,
    },
  }).catch((err) => {
    console.log(err);
  });
  return res;
};

// Create node for createNode function
const processDatum = (datum, html = '') => ({
  id: datum.sys.id,
  parent: 'Contentful',
  children: [],
  internal: {
    type: 'ContentfulMarkdown',
    contentDigest: datum.fields.content,
  },
  html,
  ...datum.fields,
});

const asyncForEach = async (array = [], callback = () => {}) => {
  for (let i = 0, n = array.length; i < n; i += 1) {
    await callback(array[i], i, array);
  }
};

const makeNode = async ({ contentType, createNode }) => {
  const { data } = await getPosts(contentType);

  // Process data into nodes.
  // Async forEach function is used in here,
  // please refer to the blog

  asyncForEach(data.items, async (datum) => {
    const { html } = await getContent(datum.fields.content);
    createNode(processDatum(datum, html));
  });
};

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;
  // Create nodes here, generally by downloading data
  // from a remote API.

  await makeNode({ contentType: 'blogPost', createNode });
  // await makeNode({ contentType: 'about', createNode });
  // Make changable headers
  const { data } = await getPosts('headers');
  const node = {
    id: data.items[0].sys.id,
    parent: 'Headers',
    children: [],
    internal: {
      type: 'Header',
      contentDigest: data.items[0].fields.headerImage,
    },
    ...data.items[0].fields,
  };

  createNode(node);
};

// Add custom webpack config
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /bad-module/,
      loader: 'null-loader',
    });
  }
  if (stage === 'build-javascript') {
    // config.merge({
    //   resolve: {
    //     alias: {
    //       react: 'nervjs',
    //       'react-dom': 'nervjs',
    //     },
    //   },
    // });
    config.plugin(
      'remove-hljs-lang', webpack.ContextReplacementPlugin,
      [
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'python', 'bash'].join('|')})$`),
      ],
    );
    config.plugin('ignore-moment-locale', webpack.IgnorePlugin, [/^\.\/locale$/, [/moment$/]]);
    // config.plugin('webpack-bundle-analyzer', BundleAnalyzerPlugin, []);
  }
};

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['transform-decorators-legacy', 'transform-regenerator']),
});

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
        allContentfulMarkdown(sort: {fields:[createdDate], order: DESC}) {
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
        const { createdDate, url, id } = node;
        const date = moment(createdDate).locale('zh-hk').format('YYYY/MM/DD');
        const postPath = url === 'about' ? url : `${date}/${url}`;
        return createPage({
          path: postPath,
          component: path.resolve('./src/templates/blog-post.js'),
          context: {
          // Data passed to context is available in page queries as GraphQL variables.
            id,
          },
        });
      });
      resolve();
    });
  });
};
