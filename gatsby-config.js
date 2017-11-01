module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Calpa&apos;s Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/_posts/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
