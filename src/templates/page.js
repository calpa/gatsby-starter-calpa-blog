import Page from '../pages/';

export default Page;

export const pageQuery = graphql`
query getNextPage($limit: Int, $skip: Int) {
  allContentfulMarkdown(
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
