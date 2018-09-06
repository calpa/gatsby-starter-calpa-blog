import dayjs from 'dayjs';
import { maxPages } from '../../data/config';

// Prevent webpack window problem
const isBrowser = () => typeof window !== 'undefined';

const isPage = () =>
  (isBrowser() ? window.location.pathname.indexOf("page") === -1 : false);

const getPageNumber = () =>
  (isBrowser() ? +window.location.pathname.match(/page[/](\d)/)[1] : -1);

const getCurrentPage = () => {
  if (isBrowser() === true) {
    const str = window.location.pathname;
    if (str.indexOf('page') !== -1) {
      // Return the last pathname in number
      return getPageNumber();
    }
  }

  return 0;
};

const getPath = () => (isBrowser() ? window.location.href : '');

const getMaxPages = () => maxPages;

// Array.fill() is added by trial and error
const getPages = () =>
  new Array(getMaxPages()).fill().map((_, index) => `/page/${index + 1}`);

const overflow = () => getCurrentPage() === getMaxPages();

const parseDate = date => dayjs(date).format('YYYY/MM/DD');

const parseChineseDate = date => dayjs(date).format('DD/MM/YYYY');

const isFirstPage = () => (isBrowser() ? isPage() : false);

const isLastPage = () => (isBrowser() ? overflow() : false);

export {
  isBrowser,
  isPage,
  getCurrentPage,
  getMaxPages,
  getPages,
  overflow,
  parseDate,
  isFirstPage,
  isLastPage,
  parseChineseDate,
  getPath,
  getPageNumber,
};
