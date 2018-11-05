module.exports = {
  title: 'Calpa 的技術博客',
  maxPostsInPage: 10,
  meta: {
    description: 'Calpa 的技術博客，開發日常，以及遇到的坑',
    keyword: 'calpa, blog, JavaScript',
    theme_color: '#384f7c',
    favicon: 'https://i.imgur.com/PO9Y4fT.jpg',
    google_site_verification: 'riZBcestky7i9xY__A-5J-2EE65T75X1u-zgbss37Io',
  },
  name: 'calpa',
  email: 'calpaliu@gmail.com',
  iconUrl: 'https://i.imgur.com/kjt2x52.jpg',
  License: 'by',
  url: 'https://calpa.me',
  about: '/2018/05/01/about-calpa-liu/',
  // Sidebar
  wordings: ['江南憶，最憶是杭州', '一名愛寫文章的前端工程師'],
  zhihuUsername: 'piao-xue-wu-ying',
  githubUsername: 'calpa',
  friends: [
    {
      title: '娜酱骑士团',
      href: 'http://blog.shanamaid.top/',
    },
    {
      title: 'Clarence Blog',
      href: 'https://clarencec.github.io/',
    },
    {
      title: 'F2EX',
      href: 'http://f2ex.cn/',
    },
    {
      title: '晚晴幽草轩',
      href: 'https://jeffjade.com/',
    },
    {
      title: 'MacPlay',
      href: 'https://macplay.github.io/',
    },
  ],
  // Plugins
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-84737574-3',
  navbarList: [
    {
      href: '/stats/',
      title: '網站數據',
    },
    {
      href: '/tags/',
      title: '分類',
    },
    {
      href: '/guestbook/',
      title: '留言簿',
    },
    {
      href: '/2018/05/01/about-calpa-liu/',
      title: '關於作者',
    },
  ],
  redirectors: [
    {
      fromPath: '/',
      toPath: '/page/1/',
    },
  ],
  gitalk: {
    clientID: '18255f031b5e11edd98a',
    clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
    repo: 'calpa.github.io',
    owner: 'calpa',
    admin: ['calpa'],
    distractionFreeMode: true,
  },
};
