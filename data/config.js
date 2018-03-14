const internalLinks = {
  navbarList: [{
    href: '/tags',
    title: '分類',
  },
    // {
    //   href: '/categories/',
    //   title: '技術分類',
    //   list: [
    //     {
    //       href: '/front-end',
    //       title: '前端',
    //     },
    //   ],
    // },
  {
    href: '/guestbook/',
    title: '留言簿',
  },
  {
    href: '/2016/12/31/about-calpa-liu/',
    title: '關於作者',
  },
  {
    href: '/demo/',
    title: '實驗室',
  },
  ],
  demoList: [{
    href: 'demo/count',
    title: '字數統計',
  },
  {
    href: 'demo/redux',
    title: 'Redux 例子',
  },
  {
    href: 'demo/gun',
    title: 'Gun 例子',
  },
  {
    href: 'demo/route',
    title: '前端路線圖',
  },
  {
    href: 'demo/fonts',
    title: '字體',
  },
  {
    href: 'demo/bootstrap',
    title: 'Bootstrap 組件',
  },
  {
    href: 'demo/popmotion',
    title: 'Popmotion',
  },
  ],
};

const config = {
  title: 'Calpa',
  maxPages: 8, // TODO: Update this automatically
  meta: {
    description: 'Calpa 的技術博客，開發日常，以及遇到的坑',
    keyword: 'calpa, blog, JavaScript',
    theme_color: '#384f7c',
    favicon: 'https://i.imgur.com/PO9Y4fT.png',
    google_site_verification: 'riZBcestky7i9xY__A-5J-2EE65T75X1u-zgbss37Io',
  },
  SEOTitle: "Calpa's Blog",
  email: 'calpaliu@gmail.com',
  License: 'by',
  url: 'https://calpa.me',
  // Sidebar
  zhihu_username: 'piao-xue-wu-ying',
  github_username: 'calpa',
  friends: [{
    title: '娜酱骑士团',
    href: 'http://blog.shanamaid.top/',
  }, {
    title: 'Clarence Blog',
    href: 'https://clarencec.github.io/',
  }, {
    title: 'F2EX',
    href: 'http://f2ex.cn/',
  }, {
    title: '晚晴幽草轩',
    href: 'https://jeffjade.com/',
  }, {
    title: 'MacPlay',
    href: 'https://macplay.github.io/',
  }],
  // Plugins
  ga_track_id: 'UA-84737574-3',
  ga_domain: 'auto',
  anchorjs: true,
  pace: true,
  fancybox: true,
  gitalk: true,
  algolia: {
    applicationID: 'ABS4QV1E9V',
    apiKey: 'd9adae0b31ed52fc0f6c4c75aad428bf',
    indexName: 'blog',
  },
  ...internalLinks,
  items: [{
    src: 'https://picsum.photos/1024/300?random',
    alt: 'First slide',
  },
  {
    src: 'https://picsum.photos/1024/400?random',
    alt: 'Second slide',
  },
  {
    src: 'https://picsum.photos/1024/500?random',
    alt: 'Third slide',
  },
  ],
};

module.exports = config;
