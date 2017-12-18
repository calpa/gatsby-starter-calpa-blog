import { navigateTo } from 'gatsby-link';
import { getCurrentPage, getMaxPages } from './index';

const gotoPage = async (url, show = false) => {
  if (show === true) {
    await window.$('.collapse').collapse('show');
  } else {
    await window.$('.collapse').collapse('hide');
  }

  await navigateTo(url);
};

const parseMarkdownUrl = (date, rawUrl) => (
  `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}/`
);

const parseUrl = (date, rawUrl) => {
  if (rawUrl === 'about') {
    return '/about/';
  }
  return `/${date}/${rawUrl}/`;
};

const minusOnePage = (currentPage) => {
  if (currentPage - 1 >= 0) {
    return currentPage - 1;
  }

  return -1;
};

const addOnePage = (currentPage) => {
  const maxPages = getMaxPages();

  if (currentPage + 1 <= maxPages) {
    return currentPage + 1;
  }
  return -1;
};

const parsePageUrl = (index) => {
  if (index > 0) {
    return `/page/${index}`;
  } else if (index === 0) {
    return '/';
  }
  return -1;
};

const handlePreviousPage = () => {
  const index = minusOnePage(getCurrentPage());

  return parsePageUrl(index);
};

const handleNextPage = () => {
  const index = addOnePage(getCurrentPage());

  return parsePageUrl(index);
};

export default {
  parseMarkdownUrl,
  parseUrl,
  handlePreviousPage,
  handleNextPage,
  gotoPage,
};
