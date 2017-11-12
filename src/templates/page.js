import Page from '../pages/';

export default Page;

export const pageQuery = graphql`
query getNextPage($limit: Int, $skip: Int) {
  latestPosts: allContentfulMarkdown(limit: 6) {
    totalCount
    edges {
      node {
        title
        url
      }
    }
  }

  pagePosts: allContentfulMarkdown(
        sort: {order: DESC, fields: [createdDate]}
        limit: $limit
        skip: $skip
    ) {

      edges {
       node {
         title
         createdDate
         url
         headerImgur
         content
       }
     }
  }
}
`;
