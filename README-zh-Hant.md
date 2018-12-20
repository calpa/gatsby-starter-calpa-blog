## Calpa 的技術博客 Starter

[![GitHub license](https://img.shields.io/github/license/calpa/gatsby-starter-calpa-blog.svg)](https://github.com/calpa/gatsby-starter-calpa-blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/calpa/gatsby-starter-calpa-blog/pulls)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/calpa/gatsby-starter-calpa-blog.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fcalpa%2Fblog)
[![Greenkeeper badge](https://badges.greenkeeper.io/calpa/gatsby-starter-calpa-blog.svg)](https://greenkeeper.io/)
[![Build Status](https://api.travis-ci.org/calpa/gatsby-starter-calpa-blog.svg?branch=master)](https://github.com/calpa/gatsby-starter-calpa-blog/blob/master/.travis.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/calpa/gatsby-starter-calpa-blog/badge)](https://www.codefactor.io/repository/github/calpa/gatsby-starter-calpa-blog)

[繁體中文](README-zh-Hant.md) | [简体中文](README-zh-Hans.md) | [English](README.md)

![HomePage](https://i.imgur.com/6Xd4yVQ.png)

透過這個 Starter，你可以快速建立一個如同 [Calpa's Blog](https://calpa.me) 的博客系統。

## 功能

### 系統架構

1. GatsbyJS v2，更加快速
1. Google Analytics
1. 支持離線操作
1. Web App Manifest
1. Netlify 網站優化
1. 精美評論區 (powered by [Gitalk](https://github.com/gitalk/gitalk))
1. 高速解析 Markdown (基於[remarkable](https://github.com/jonschlinkert/remarkable))
1. 支持站點地圖

### 設計

1. 響應式設計
1. 懶加載（圖片） (基於 [lozad.js](https://github.com/ApoorvSaxena/lozad.js))
1. 自動加載 Font Awesome (基於 [react-fontawesome](https://github.com/FortAwesome/react-fontawesome))
1. 流暢滑動設計 (基於 [smooth-scroll](https://github.com/cferdinandi/smooth-scroll))
1. 分頁設計
1. 展示博客系統的組件 (基於 [storybook](https://github.com/storybooks/storybook))

### 數據來源

1. 源自 [Contentful][1]，壹個靈活且易於使用的內容管理系統
1. 經過系統更新後，你可以使用任意的數據庫

### 可自定的地方

如果你覺得這個系統需要更加完善的話，你可以從下面的地方入手：

1. 搜索引擎優化
1. 使用 SCSS 來自定義樣式
1. 數據來源

## 快速入門

### 使用 Netlify 部署

你可以使用以下按鈕來構建和部署博客的一個副本：

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/calpa/gatsby-starter-calpa-blog" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

在你點擊上面的按鈕之後，你就會賦予 Netlify 取得你的 Github 授權，以及選擇倉庫名稱。Netlify 會自動創建一個倉庫，並且複製那裡的文件。

之後，它會自動構建和部署一個新的網站，為你帶來一個完整的博客系統。

你也可以使用 Contentful 作為你的內容管理系統。

### 使用 Codesandbox 來寫代碼

你可以使用以下按鈕來嘗試修改博客系統的代碼：

[![Edit blog](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/calpa/gatsby-starter-calpa-blog/tree/master/)

如果你喜歡 [我的博客](https://calpa.me)，請給個 star，多謝。

## 前提

1. Git
2. Node：從 8.5.0 或更高版本開始的任何 8.x 版本
3. fork 本項目 （想要貢獻的話）
4. 在本地計算機上克隆本項目

## 開發

如何運行?

1. 安裝 Gatsby-CLI

```shell
npm install --global gatsby-cli
```

2. 使用 Gatsby 啟動器創建新的 Gatsby 項目，`awesome-blog`是您博客的文件夾

```shell
gatsby new awesome-blog https://github.com/calpa/gatsby-starter-calpa-blog
```

3. 打開文件夾

```shell
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

   如果您使用的是[Contentful 的預覽 API](https://www.contentful.com/developers/docs/references/content-preview-api/)，那麽所有未發布的內容都將可用。

   1. 您也可以使用其他服務器，只要你提供給 GraphQL 的數據符合系統數據結構。

## 配置

在 `data/config`編輯 exports 的對象

註意壹下: [想要查找 theme_color 十六進制代碼，請單擊此處。](https://www.colorhexa.com/)

```JavaScript
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

```JavaScript
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

```JavaScript
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

[Calpa 的博客](https://calpa.me) 目前正在使用[Netlify](https://www.netlify.com/)，當然，您可以使用 Github Pages 作為替代方案。

- Github Pages

  `npm run deploy` 將博客部署到 Github Pages

- Netlify

  自動部署

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

[1]: https://www.contentful.com/ "Contentful"
