import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const wrapGraphQL = (query, children) =>
  class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isWrapped: true };
    }
    render() {
      return (
        <StaticQuery
          query={graphql(query)}
          render={data => <div>{children}</div>}
        />
      );
    }
  };

export default wrapGraphQL;
