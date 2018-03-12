module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Calpa&apos;s Blog',
    description: 'Front End Technical Blog - Calpa',
    siteUrl: 'https://calpa.me/',
    author: 'Calpa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    /* {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://523166273f6b4f7d8a98e67d8ba4c457@sentry.io/181131',

      },
    }, */
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
        feeds: [{
          serialize: ({ query: { site, allContentfulMarkdown } }) =>
            // GraphQL query the posts from allContentfulMarkdown
            allContentfulMarkdown.edges.map((edge) => {
              const url = `${site.siteMetadata.siteUrl}${require('moment')(edge.node.createdDate).locale('zh-hk').format('YYYY/MM/DD')}/${edge.node.url}`;
              const Remarkable = require('remarkable');
              const md = new Remarkable({});
              const description = md.render(edge.node.content);

              return {
                title: edge.node.title,
                description,
                date: require('moment')(edge.node.createdDate).format('MMMM DD, YYYY, h:mm A'),
                url,
                guid: url,
              };
            }),
          query: `
              {
                  allContentfulMarkdown(limit: 10,sort: {fields: [createdDate], order: DESC}) {
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
        }],
      },
    },
    // 'gatsby-plugin-react-next', // Disable as the blog-post missing classes in refresh
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Calpa's Blog",
        short_name: 'Calpa',
        start_url: '/',
        background_color: '#ededed',
        theme_color: '#384f7c',
        display: 'standalone',
        icons: [{
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
