import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';

import {
  InstantSearch, Hits, SearchBox,
  Highlight, Pagination,
} from 'react-instantsearch/dom';

import qs from 'qs';

import { parseDate } from '../api';

const navigateToPost = (date, slug) => (
  `/${parseDate(date)}/${slug}`
);

const createURL = state => `?${qs.stringify(state)}`;

const updateAfter = 700;


const Post = ({ hit }) => (
  <Link
    to={navigateToPost(hit.date, hit.slug)}
    href={navigateToPost(hit.date, hit.slug)}
  >
    <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <Highlight attributeName="title" hit={hit} />
      </span>
    </div>
  </Link>
);

const searchStateToUrl = (props, searchState) =>
  (searchState ? `${props.location.pathname}${createURL(searchState)}` : '');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchState: qs.parse(props.location.search.slice(1)),
    };
  }

  onSearchStateChange(searchState) {
    clearTimeout(this.debouncedSetState);
    this.debouncedSetState = setTimeout(() => {
      const url = searchStateToUrl(this.props, searchState);
      navigateTo(url);
    }, updateAfter);
    this.setState({ searchState });
  }

  render() {
    return (
      <div>
        <InstantSearch
          appId="ABS4QV1E9V"
          apiKey="d9adae0b31ed52fc0f6c4c75aad428bf"
          indexName="blog"
          searchState={this.state.searchState}
          onSearchStateChange={e => this.onSearchStateChange(e)}
          createURL={createURL}
        >
          <SearchBox />
          <Hits hitComponent={Post} />
          <Pagination />
        </InstantSearch>
        <link rel="stylesheet" href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css" />
      </div>
    );
  }
}

export default Search;
