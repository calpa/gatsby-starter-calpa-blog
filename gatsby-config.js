module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/_posts/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    }
  ],
}
