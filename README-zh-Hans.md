## Calpa技术博客的脚手架

[![GitHub license](https://img.shields.io/github/license/calpa/blog.svg)](https://github.com/calpa/blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog)
[![Greenkeeper badge](https://badges.greenkeeper.io/calpa/blog.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://github.com/calpa/blog/blob/master/.travis.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/calpa/blog/badge)](https://www.codefactor.io/repository/github/calpa/blog)

![HomePage](https://i.imgur.com/6Xd4yVQ.png)

Calpa技术博客的脚手架

如果你喜欢 [我的博客](https://calpa.me)，请给个star，多谢。

## 功能

1. 响应式设计
2. 高速解析Markdown (基于[remarkable](https://github.com/jonschlinkert/remarkable))
3. 支持站点地图
4. 自动加载Font Awesome(基于 [react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
5. 源自[Contentful][1]，一个灵活且易于使用的内容管理系统

## 前提

1. Git
2. Node：从8.5.0或更高版本开始的任何8.x版本
3. fork本项目 （想要贡献的话）
4. 在本地计算机上克隆本项目

## 开发

如何运行?

1. 安装 Gatsby-CLI

```
npm install --global gatsby-cli
```

2. 使用Gatsby启动器创建新的Gatsby项目，`awesome-blog`是您博客的文件夹

```
gatsby new awesome-blog https://github.com/calpa/blog
```

3. 打开文件夹

```
cd awesome-blog
```

4. 运行开发服务器

   1. `npm start` 启动热重载开发服务器 (基于[Gatsby](https://www.gatsbyjs.org/))
   2. `open http://localhost:8000` 在您喜欢的浏览器中打开

5. 连接 [Contentful][1] 服务器

   1. 将以下配置添加到`.env.development`文件中

   ```
   API_SPACE_ID = Your Contentful Space ID
   API_TOKEN = Your Content Delivery (Preview) API - access token
   ```

   如果您使用的是[Contentful的预览API](https://www.contentful.com/developers/docs/references/content-preview-api/)，那么所有未发布的内容都将可用。

## 配置

在 `data/config`编辑exports的对象

注意一下: [想要查找 theme_color 十六进制代码，请单击此处。](https://www.colorhexa.com/)

```
module.exports = {
  title: 'your blog title here',
  maxPages: 12
  meta: {
    description: 'blog description',
    keyword: 'blog, JavaScript',
    theme_color: '#hexcode',
    favicon: 'https:yourimageurl.com',
    google_site_verification: 'your google verification hash',
  },
  name: 'your name',
  email: 'your_email@gmail.com',
  iconUrl: 'https://youricon.jpg',
  License: 'by',
  url: 'https://yourblog.me',
  about: '/2018/05/01/about-your-name/',
  // Sidebar
  zhihuUsername: 'your zhiu user name here',
  githubUsername: 'your github user name here',
  friends: [
    {
      title: 'friend title',
      href: 'link to their blog',
    }
  ]
```

插件的配置文件:

```
gaOptimizeId: 'GTM-WHP7SC5',
gaTrackId: 'UA-84737574-3',
navbarList: [
  {
    href: '/stats/',
    title: 'stat title',
  },
  {
    href: '/tags/',
    title: 'tags',
  },
  {
    href: '/guestbook/',
    title: 'guestbook',
  },
  {
    href: '/2018/10/04/about-your-blog/',
    title: 'your title',
  },
],
redirectors: [
  {
    fromPath: '/',
    toPath: '/page/1',
  },
],
```

配置[Gitalk](https://gitalk.github.io/)

```
gitalk: {
    clientID: '18255f031b5e11edd98a',
    clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
    repo: 'calpa.github.io',
    owner: 'calpa',
    admin: ['calpa'],
    distractionFreeMode: true,
  },
}
```

## 内容模型

1. 帖子

要创建帖子，只需提供以下对象模型：

```json
{
  "name": "Post",
  "fields": {
    "title": "Post Title",
    "headerImgur": "header Image Link",
    "headerBackgroundColor": "#66ccff",
    "tags": "tag1, tag2, tag3",
    "url": "awesome-post",
    "createdDate": "new Date() or other dayjs supported datetime value",
    "content": "your markdown content",
    "jueJinLikeIconLink": "掘金 Badge Icon Url",
    "jueJinPostLink": "掘金 Post Url"
  }
}
```

2. Headers

有两个可配置的 Headers ，分别为 [主页](https://calpa.me) 和 [标签页](https://calpa.me/tags/)顶部的 #header 。

```json
{
  "name": "Headers",
  "fields": {
    "purpose": "Tags or Home",
    "headerImage": "header Image",
    "createdDate": "new Date() or other dayjs supported datetime value",
    "title": "Display Title",
    "titleVisible": "Do you want to show your title in the header?",
    "subTitle": "Display a smaller wordings",
    "subTitleVisible": "Do you want to show a smaller wordings in the header?"
  }
}
```

## 部署

[Calpa的博客](https://calpa.me) 目前正在使用[Netlify](https://www.netlify.com/)，当然，您可以使用 Github Pages 作为替代方案。

- Github Pages

  `npm run deploy` 将博客部署到Github Pages

- Netlify

  自动部署

## TODO

1. 自动更新帖子页数。

## 故障排除

- 对于 `window is defined`, 引包前检查 window :

  ```JavaScript
  if (typeof window !== `undefined`) {
    const module = require("module");
  }
  ```

- `npm run reset` 清除本地缓存
- 查 [GatsbyJS 调试文档](https://www.gatsbyjs.org/docs/debugging-html-builds/)

## 贡献

请阅读 [CONTRIBUTING.md](.github/CONTRIBUTING.md) 获取更多信息。

## 联系

如果您对此项目感兴趣，请随时联系[Calpa Liu](calpaliu@gmail.com)。

感谢您的贡献...... :)

[1]: https://www.contentful.com/        "Contentful" 
