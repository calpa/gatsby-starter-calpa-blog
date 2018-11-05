import { navigate } from 'gatsby';
import dayjs from 'dayjs';

const getUrl = ({ createdDate, url }) => `/${dayjs(createdDate).format('YYYY/MM/DD')}/${url}`;

const gotoPage = async (url, show = false) => {
  if (show === true) {
    await window.$('.collapse').collapse('show');
  } else {
    await window.$('.collapse').collapse('hide');
  }

  await navigate(url);
};

const parseMarkdownUrl = (date, rawUrl) => `/${date}/${rawUrl.match(/_posts[/](.*).md/)[1]}/`;

const parseUrl = (date, rawUrl) => {
  if (rawUrl === 'about') {
    return '/about/';
  }
  return `/${date}/${rawUrl}/`;
};

const minusOnePage = (currentPage) => {
  if (currentPage - 1 >= 1) {
    return currentPage - 1;
  }

  return -1;
};

const addOnePage = (currentPage = 0, maxPages = 1) => {
  if (currentPage + 1 < maxPages) {
    return currentPage + 1;
  }
  return -1;
};

const parsePageUrl = (index) => {
  if (index > 0) {
    return `/page/${index}`;
  }
  if (index === 0) {
    return '/';
  }
  return -1;
};

const handlePreviousPage = (pageNumber) => {
  const index = minusOnePage(+pageNumber);

  return parsePageUrl(index);
};

const handleNextPage = (pageNumber, maxPages) => {
  const index = addOnePage(+pageNumber, maxPages);

  return parsePageUrl(index);
};

export {
  getUrl,
  parseMarkdownUrl,
  parseUrl,
  handlePreviousPage,
  handleNextPage,
  gotoPage,
};
