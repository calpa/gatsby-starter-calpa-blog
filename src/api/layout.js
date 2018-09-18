import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/layout';

function wrapLayout(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isWrapped: true,
      };
    }

    render() {
      return (
        <Layout>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
}

export const wrapGraphQL = ({ query, children }) => (
  <StaticQuery query={graphql(query)} render={data => <div>{children}</div>} />
);

export default wrapLayout;
