const data = {
  items: [
    {
      sys: {
        id: 'asdasdad',
      },
      fields: {
        purpose: 'Home',
        headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
        createdDate: `${new Date()}`,
        title: 'Hello, World!',
        titleVisible: true,
        subTitle: "Calpa's Blog Starter",
        subTitleVisible: true,
      },
    },
    {
      sys: {
        id: 'sdfsdfxzxczxc',
      },
      fields: {
        purpose: 'GuestBook',
        headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
        createdDate: '2018-07-21T12:00+08:00',
        title: 'GuestBook',
        titleVisible: true,
        subTitle: 'write your subtitle here',
        subTitleVisible: true,
      },
    },
    {
      sys: {
        id: 'qwejkasdasd',
      },
      fields: {
        purpose: 'Tags',
        headerImage: 'https://i.imgur.com/ebCJ61b.jpg',
        createdDate: '2018-07-21T12:00+08:00',
        title: 'Tags',
        titleVisible: true,
        subTitle: 'write your subtitle here',
        subTitleVisible: true,
      },
    },
  ],
};

const response = {
  data,
  code: 200,
  message: 'Mock Headers',
};

module.exports = response;
