import { isBrowser } from './index';

const refreshToolBox = () => (
  isBrowser ? window.addthis.toolbox('.addthis_toolbox') : false
);

export default {
  refreshToolBox,
};
