import React, { Component } from 'react';

import Tag from '../../components/Tag';

const splitTag = (raw = '') => raw.split(', ');

const getTag = (item) => {
  if (item.node.tags) {
    return {
      tags: splitTag(item.node.tags),
      title: item.node.title
    }
  }
  return item;
};

const flatten = (arr = []) => arr.reduce(
  (acc, cur) => acc.concat(cur), [],
);

const TagSession = ({ tag, articles }) => (
  <div className="row" id={tag}>
    <div className="col">
      <h3>{tag}:</h3>
      <div>
        {articles.map(title => (<p key={title}>{title}</p>))}
      </div>
    </div>
</div>
)

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
    const temp = edges.map(item => getTag(item));

    // debugger;
    temp.forEach((x) => {
      for (var i = 0, n = x.tags.length; i < n; i += 1) {
        const { title } = temp[i];

        if (tags[x.tags[i]]) {
          tags[x.tags[i]].push(title);
        }
        else {
          tags[x.tags[i]] = [title];
        }
      }
    });
    this.setState({ tags });
  }

  render() {
    const tags = Object.keys(this.state.tags).sort();

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
                count={this.state.tags[item].length}
                key={item}
              />))
            }
          </div>
        </div>

        {tags.map(tag => (
          <TagSession
            tag={tag}
            articles={[...new Set(this.state.tags[tag])]}
            key={tag}
          />
          )
        )}
      </div>
    );
  }
}

export const pageQuery = graphql `
query myTags {
  tags: allContentfulMarkdown {
    edges {
      node {
        tags
        title
      }
    }
  }
}
`;

export default TagPage;
