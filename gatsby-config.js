/* eslint-disable max-len */
/* eslint max-len: 1 */
const dayjs = require('dayjs');
const Remarkable = require('remarkable');

const extractData = (site, edge) => {
  const url = `${site.siteMetadata.siteUrl}/${dayjs(
    edge.node.createdDate,
  ).format('YYYY/MM/DD')}/${edge.node.url}`;

  const md = new Remarkable({});
  const description = md.render(edge.node.content);

  return {
    title: edge.node.title,
    description,
    date: dayjs(edge.node.createdDate).format('MMMM DD, YYYY, h:mm A'),
    url,
    guid: url,
  };
};

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Calpa&apos;s Blog',
    description: 'Front End Technical Blog - Calpa',
    siteUrl: 'https://calpa.me',
    author: 'Calpa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-webpack-bundle-analyzer',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/layout.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://fe988b5e96fc4634babe220e23464e15@sentry.io/1274827',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
         {
          site {
            siteMetadata {
              title,
              description,
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [
          {
            serialize: ({ query: { site, allPostMarkdown } }) => allPostMarkdown.edges.map(edge => extractData(site, edge)),
            query: `
              {
                  allPostMarkdown(limit: 10,sort: {fields: [createdDate], order: DESC}) {
                    edges {
                      node {
                        content
                        title
                        url
                        createdDate
                      }
                    }
                  }
                }
            `,
            output: '/feed.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Calpa's Blog",
        short_name: 'Calpa',
        start_url: '/',
        background_color: '#ededed',
        theme_color: '#384f7c',
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline', // put this after gatsby-plugin-manifest
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
