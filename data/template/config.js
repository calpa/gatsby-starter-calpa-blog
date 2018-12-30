const blog = {
  title: 'Calpa 的技術博客',
  maxPostsInPage: 10,
  meta: {
    description: 'Calpa 的技術博客，開發日常，以及遇到的坑',
    keyword: 'calpa, blog, JavaScript',
    theme_color: '#384f7c',
    favicon: 'https://i.imgur.com/PO9Y4fT.jpg',
    google_site_verification: '',
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
  friends: [],
  // Plugins
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-84737574-3',
  navbarList: [
    {
      href: '/stats/',
      title: 'Blog Stats',
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
  stats: {
    title: '過去三十日數據',
    description: '過去三十日數據',
    image: 'https://i.imgur.com/VjBWiSt.png',
  },
};

// Contentful API model
const data = {
  items: [
    {
      fields: {
        blog,
      },
    },
  ],
};

module.exports = { data };
