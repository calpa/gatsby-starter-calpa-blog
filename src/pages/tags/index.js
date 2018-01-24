import React, { Component } from 'react';

import Tag from '../../components/Tag';

const getTag = (item) => {
  if (item.node.tags) {
    return item.node.tags;
  }
  return '';
};

const splitTag = (raw = '') => raw.split(', ');

const flatten = (arr = []) => arr.reduce(
  (acc, cur) => acc.concat(cur),
  [],
);

class TagPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {},
    };
  }

  componentWillMount() {
    const tags = {};
    const { edges } = this.props.data.tags;
    const temp = edges.map(item => splitTag(getTag(item)));
    flatten(temp).forEach((x) => { tags[x] = (tags[x] || 0) + 1; });
    this.setState({ tags });
  }

  render() {
    // TODO: sort the tags
    const tags = Object.keys(this.state.tags);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Tags</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {tags.map(item => (
              <Tag
                name={item}
                count={this.state.tags[item]}
                key={item}
              />))
            }
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
query myTags {
  tags: allContentfulMarkdown {
    edges {
      node {
        tags
      }
    }
  }
}
`;

export default TagPage;
