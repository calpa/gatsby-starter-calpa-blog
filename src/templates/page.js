import Page from '../pages/';

export default Page;

export const pageQuery = graphql`
    query getPosts($limit: Int, $skip: Int) {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: $limit
        skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            parent
            headerImage
            headerSize
            headerBackgroundColor
          }
        }
      }
    }
  }
`;
