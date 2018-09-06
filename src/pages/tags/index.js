import React, { Component } from 'react';

import Link from 'gatsby-link';
import dayjs from 'dayjs';
import Tag from '../../components/Tag';
import Header from '../../components/Header';

const splitTag = (raw = '') => raw.split(', ');

const parseDate = date => dayjs(date).format('YYYY/MM/DD');
const tagCenter = 'col-12 col-md-10 col-lg-8 m-auto';

const getTag = (item) => {
  const { tags, url, createdDate } = item.node;

  if (tags) {
    const date = parseDate(createdDate);
    const postPath = url === 'about' ? url : `${date}/${url}`;
    return {
      tags: splitTag(item.node.tags),
      title: item.node.title,
      url: postPath,
      createdDate,
    };
  }
  return item;
};

const Item = ({ url = '', title = '', createdDate = '' }) => (
  <li key={title}>
    <Link href={url} to={url}>
      {title} ({parseDate(createdDate)})
    </Link>
  </li>
);

const TagSession = ({
  tag = 'tag',
  articles = [],
  url = '',
  isActive = false,
}) => (
  <div className={tagCenter} id={tag}>
    <h3
      style={{
        color: isActive ? 'red' : 'black',
      }}
    >
      {tag}:
    </h3>
    <ol>
      {articles.map(article => (
        <Item
          url={article.url}
          title={article.title}
          createdDate={article.createdDate}
          key={article.title}
        />
      ))}
    </ol>
  </div>
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
    const temp = edges.map(item => getTag(item));

    // debugger;
    temp.forEach((x) => {
      const { title, url, createdDate } = x;

      for (let i = 0, n = x.tags.length; i < n; i += 1) {
        const item = { title, url, createdDate };
        if (tags[x.tags[i]]) {
          tags[x.tags[i]].push(item);
        } else {
          tags[x.tags[i]] = [item];
        }
      }
    });
    this.setState({ tags });
  }

  render() {
    const tags = Object.keys(this.state.tags).sort();
    const { header } = this.props.data;

    return (
      <div className="row">
        <Header
          img={header.headerImage}
          title={header.title}
          titleVisible={header.titleVisible}
          subTitle={header.subTitle}
          subTitleVisible={header.subTitleVisible}
        />
        <div className={tagCenter}>
          {tags.map(item => (
            <Tag name={item} count={this.state.tags[item].length} key={item} />
          ))}
        </div>

        {tags.map(tag => (
          <TagSession
            tag={tag}
            articles={this.state.tags[tag].filter((v, i, a) => a.indexOf(v) === i,)}
            isActive={decodeURI(this.props.location.hash) === `#${tag}`}
            key={tag}
          />
        ))}
      </div>
    );
  }
}

export const pageQuery = graphql`
  query myTags {
    header(purpose: { eq: "Tags" }) {
      headerImage
      title
      titleVisible
      subTitle
      subTitleVisible
    }
    tags: allContentfulMarkdown {
      edges {
        node {
          tags
          title
          url
          createdDate
        }
      }
    }
  }
`;

export default TagPage;
