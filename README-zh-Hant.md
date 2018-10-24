## Calpa技術博客的腳手架

[![GitHub license](https://img.shields.io/github/license/calpa/blog.svg)](https://github.com/calpa/blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog)
[![Greenkeeper badge](https://badges.greenkeeper.io/calpa/blog.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/travis-ci/travis-web.svg?branch=master)](https://github.com/calpa/blog/blob/master/.travis.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/calpa/blog/badge)](https://www.codefactor.io/repository/github/calpa/blog)

![HomePage](https://i.imgur.com/6Xd4yVQ.png)

Calpa技術博客的腳手架

如果妳喜歡 [我的博客](https://calpa.me)，請給個star，多謝。

## 功能

1. 響應式設計
2. 高速解析Markdown (基於[remarkable](https://github.com/jonschlinkert/remarkable))
3. 支持站點地圖
4. 自動加載Font Awesome(基於 [react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
5. 源自[Contentful][1]，壹個靈活且易於使用的內容管理系統

## 前提

1. Git
2. Node：從8.5.0或更高版本開始的任何8.x版本
3. fork本項目 （想要貢獻的話）
4. 在本地計算機上克隆本項目

## 開發

如何運行?

1. 安裝 Gatsby-CLI

```
npm install --global gatsby-cli
```

2. 使用Gatsby啟動器創建新的Gatsby項目，`awesome-blog`是您博客的文件夾

```
gatsby new awesome-blog https://github.com/calpa/blog
```

3. 打開文件夾

```
cd awesome-blog
```

4. 運行開發服務器

   1. `npm start` 啟動熱重載開發服務器 (基於[Gatsby](https://www.gatsbyjs.org/))
   2. `open http://localhost:8000` 在您喜歡的瀏覽器中打開

5. 連接 [Contentful][1] 服務器

   1. 將以下配置添加到`.env.development`文件中

   ```
   API_SPACE_ID = Your Contentful Space ID
   API_TOKEN = Your Content Delivery (Preview) API - access token
   ```

   如果您使用的是[Contentful的預覽API](https://www.contentful.com/developers/docs/references/content-preview-api/)，那麽所有未發布的內容都將可用。

## 配置

在 `data/config`編輯exports的對象

註意壹下: [想要查找 theme_color 十六進制代碼，請單擊此處。](https://www.colorhexa.com/)

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

## 內容模型

1. 帖子

要創建帖子，只需提供以下對象模型：

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

有兩個可配置的 Headers ，分別為 [主頁](https://calpa.me) 和 [標簽頁](https://calpa.me/tags/)頂部的 #header 。

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

[Calpa的博客](https://calpa.me) 目前正在使用[Netlify](https://www.netlify.com/)，當然，您可以使用 Github Pages 作為替代方案。

- Github Pages

  `npm run deploy` 將博客部署到Github Pages

- Netlify

  自動部署

## TODO

1. 自動更新帖子頁數。

## 故障排除

- 對於 `window is defined`, 引包前檢查 window :

  ```JavaScript
  if (typeof window !== `undefined`) {
    const module = require("module");
  }
  ```

- `npm run reset` 清除本地緩存
- 查 [GatsbyJS 調試文檔](https://www.gatsbyjs.org/docs/debugging-html-builds/)

## 貢獻

請閱讀 [CONTRIBUTING.md](.github/CONTRIBUTING.md) 獲取更多信息。

## 聯系

如果您對此項目感興趣，請隨時聯系[Calpa Liu](calpaliu@gmail.com)。

感謝您的貢獻...... :)

[1]: https://www.contentful.com/        "Contentful" 
