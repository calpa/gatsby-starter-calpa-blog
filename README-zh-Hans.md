## Calpa 的技术博客脚手架

[![GitHub license](https://img.shields.io/github/license/calpa/gatsby-starter-calpa-blog.svg)](https://github.com/calpa/gatsby-starter-calpa-blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/gatsby-starter-calpa-blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/gatsby-starter-calpa-blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog)
[![Greenkeeper badge](https://badges.greenkeeper.io/calpa/gatsby-starter-calpa-blog.svg)](https://greenkeeper.io/)
[![Build Status](https://api.travis-ci.org/calpa/gatsby-starter-calpa-blog.svg?branch=master)](https://github.com/calpa/gatsby-starter-calpa-blog/blob/master/.travis.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/calpa/gatsby-starter-calpa-blog/badge)](https://www.codefactor.io/repository/github/calpa/gatsby-starter-calpa-blog)

[繁體中文](README-zh-Hant.md) | [简体中文](README-zh-Hans.md) | [English](README.md)

![HomePage](https://i.imgur.com/6Xd4yVQ.png)

透过这个腳手架，你可以快速建立一个如同 [Calpa's Blog](https://calpa.me) 的博客系统。

## 功能

### 系统架构

1. GatsbyJS v2，更加快速
1. Google Analytics
1. 支持离线操作
1. Web App Manifest
1. Netlify 网站优化
1. 精美评论区 (powered by [Gitalk](https://github.com/gitalk/gitalk))
1. 高速解析 Markdown (基于[remarkable](https://github.com/jonschlinkert/remarkable))
1. 支持站点地图

### 设计

1. 响应式设计
1. 懒加载（图片） (基于 [lozad.js](https://github.com/ApoorvSaxena/lozad.js))
1. 自动加载 Font Awesome (基于 [react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
1. 流畅滑动设计 (基于 [smooth-scroll](https://github.com/cferdinandi/smooth-scroll))
1. 分页设计
1. 展示博客系统的组件 (基於 [storybook](https://github.com/storybooks/storybook))

### 数据来源

1. 源自 [Contentful][1]，壹个灵活且易于使用的内容管理系统
1. 经过系统更新后，你可以使用任意的数据库

### 可自定的地方

如果你觉得这个系统需要更加完善的话，你可以从下面的地方入手：

1. 搜索引擎优化
1. 使用 SCSS 来自定义样式
1. 数据来源

## 快速入门

### 使用 Netlify 部署

你可以使用以下按钮来构建和部署博客的一个副本：

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/calpa/gatsby-starter-calpa-blog" target="_blank"><img src=" https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

在你点击上面的按钮之后，你就会赋予 Netlify 取得你的 Github 授权，以及选择仓库名称。 Netlify 会自动创建一个仓库，并且复制那里的文件。

之后，它会自动构建和部署一个新的网站，为你带来一个完整的博客系统。

你也可以使用 Contentful 作为你的内容管理系统。

### 使用 Codesandbox 来写代码

你可以使用以下按钮来尝试修改博客系统的代码：

[![Edit blog](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/calpa/gatsby-starter-calpa-blog/tree/master/)

如果你喜欢 [我的博客](https://calpa.me)，请给个 star，多谢。以下是如何使用这个博客系统的教程：

## 前提

1. Git
2. Node：从 8.5.0 或更高版本开始的任何 8.x 版本
3. fork 本项目 （想要贡献的话）
4. 在本地计算机上克隆本项目

## 开发

如何运行？

1. 安装 Gatsby-CLI

```
npm install --global gatsby-cli
```

2. 使用 Gatsby 启动器创建新的 Gatsby 项目，`awesome-blog`是您博客的文件夹

```
gatsby new awesome-blog https://github.com/calpa/gatsby-starter-calpa-blog
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

   如果您使用的是[Contentful 的预览 API](https://www.contentful.com/developers/docs/references/content-preview-api/)，那么所有未发布的内容都将可用。

## 配置

在 `data/config`编辑 exports 的对象

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

[Gitalk](https://gitalk.github.io/) 的配置部分：

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

[Calpa 的博客](https://calpa.me) 目前正在使用[Netlify](https://www.netlify.com/)，当然，您可以使用 Github Pages 作为替代方案。

- Github Pages

  `npm run deploy` 将博客部署到 Github Pages

- Netlify

  自动部署

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

[1]: https://www.contentful.com/ "Contentful"
