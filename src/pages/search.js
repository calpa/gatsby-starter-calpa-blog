import React from 'react';
import Link from 'gatsby-link';

import {
  InstantSearch, Hits, SearchBox,
  Highlight, Pagination,
} from 'react-instantsearch/dom';

import { parseDate } from '../api';

const Post = ({ hit }) => (
  <Link
    to={`${parseDate(hit.date)}/${hit.slug}`}
    href={`${parseDate(hit.date)}/${hit.slug}`}
  >
    <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <Highlight attributeName="title" hit={hit} />
      </span>
    </div>
  </Link>
);

const Search = () => (
  <div>
    <InstantSearch
      appId="ABS4QV1E9V"
      apiKey="d9adae0b31ed52fc0f6c4c75aad428bf"
      indexName="blog"
    >
      <SearchBox />
      <Hits hitComponent={Post} />
      <Pagination />
    </InstantSearch>
    <link rel="stylesheet" href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css" />

  </div>
);

export default Search;
