import moment from 'moment';
import { maxPages } from '../../data/config';

// Prevent webpack window problem
const isBrowser = () => typeof window !== 'undefined';

const isPage = () => (isBrowser() ? window.location.pathname.indexOf('page') === -1 : false);

const getCurrentPage = () => {
  if (isBrowser() === true) {
    const str = window.location.pathname;
    if (str.indexOf('page') !== -1) {
      // Return the last pathname in number
      return +window.location.pathname.match(/page[/](\d)/)[1];
    }
  }

  return 0;
};

const getPath = () => (isBrowser ? window.location.href : '');

const getMaxPages = () => maxPages;

const overflow = () => getCurrentPage() === getMaxPages();

const parseDate = date => moment(date).locale('zh-hk').format('YYYY/MM/DD');

const parseChineseDate = date => moment(date).locale('zh-hk').format('L');

const isFirstPage = () => (isBrowser() ? isPage() : false);

const isLastPage = () => (isBrowser() ? overflow() : false);

export {
  isBrowser, isPage,
  getCurrentPage, getMaxPages,
  overflow, parseDate,
  isFirstPage, isLastPage,
  parseChineseDate,
  getPath,
};
