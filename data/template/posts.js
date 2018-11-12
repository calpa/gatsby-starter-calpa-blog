const data = {
  items: [
    {
      sys: {
        id: 'czxkcjzxc',
        createdAt: '2017-09-21T06:01:35.114Z',
        updatedAt: '2017-09-21T06:01:35.114Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'blogPost',
          },
        },
        locale: 'zh-Hant',
      },
      fields: {
        title: 'Blog Title',
        tags: 'JavaScript',
        url: 'your-awesome-blog-post-url',
        createdDate: `${new Date()}`,
        jueJinLikeIconLink: '',
        jueJinPostLink: '',
        content: '## 前言\n\nContent\n\n## abcd\n\ncontent1123123',
        headerImgur: 'https://i.imgur.com/gf1pKau.png',
        headerBackgroundColor: 'a2c9ea',
      },
    },
  ],
};

const response = {
  data,
  code: 200,
  message: 'Mock Data',
};

module.exports = response;
