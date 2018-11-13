import dayjs from 'dayjs';
import { config } from '../../data';

const { maxPostsInPage } = config;

// Prevent webpack window problem
const isBrowser = () => typeof window !== 'undefined';

const getPageNumber = () => (isBrowser() ? +window.location.pathname.match(/page[/](\d)/)[1] : -1);

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

const getPath = () => (isBrowser() ? window.location.pathname : '');

const getMaxPages = amount => Math.ceil(amount / maxPostsInPage);

// Array.fill() is added by trial and error
const getPages = amount => new Array(amount).fill().map((_, index) => `/page/${index + 1}`);

const overflow = () => getCurrentPage() === getMaxPages();

const parseDate = date => dayjs(date).format('YYYY/MM/DD');

const parseChineseDate = date => dayjs(date).format('DD/MM/YYYY');

export {
  isBrowser,
  getCurrentPage,
  getMaxPages,
  getPages,
  overflow,
  parseDate,
  parseChineseDate,
  getPath,
  getPageNumber,
};
