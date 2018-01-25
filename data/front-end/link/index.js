import javascript from './javascript';
import css from './css';
import others from './others';

const links = [{
  source: 'HTML',
  target: '前端',
},
{
  source: 'CSS',
  target: '前端',
},
{
  source: 'JavaScript',
  target: '前端',
},
...javascript,
...css,
...others];

export default links;
