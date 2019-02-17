---
templateKey: blog-post
id: 20181203a
title: 基於 GatsbyJS 的博客系統正式開源：gatsby-starter-calpa-blog，及其使用方法
slug: /2018/12/03/gatsby-starter-calpa-blog-release-open-source/
date: 2018-12-03T03:48:03.125Z
description: 感謝各位這些年來閱讀我的博客文章，以及優化博客系統框架，現在，我將為你帶來一個前後端徹底分離，而且可以一鍵啟動的博客框架。
tags:
  - 閱讀
---

## 前言

感謝各位這些年來閱讀我的博客文章，以及優化博客系統框架，現在，我將為你帶來一個前後端徹底分離，而且可以一鍵啟動的博客框架。

如果你希望閱讀英文版本的話，那麼 Github 的 Repo 上面也有提供詳細的文檔。

![HomePage][1]

透過這個 Starter，你可以快速建立一個如同 [Calpa's Blog][2] 的博客系統。

## 功能

### 系統架構

1. GatsbyJS v2，更加快速
1. Google Analytics
1. 支持離線操作
1. Web App Manifest
1. Netlify 網站優化
1. 精美評論區 (powered by [Gitalk][3])
1. 高速解析 Markdown (基於[remarkable][4])
1. 支持站點地圖

### 設計

1. 響應式設計
1. 懶加載（圖片） (基於 [lozad.js][5])
1. 自動加載 Font Awesome (基於 [react-fontawesome][6])
1. 流暢滑動設計 (基於 [smooth-scroll][7])
1. 分頁設計
1. 展示博客系統的組件 (基於 [storybook][8])

### 數據來源

1. 源自 [Contentful][9]，壹個靈活且易於使用的內容管理系統
1. 經過系統更新後，你可以使用任意的數據庫

### 可自定的地方

如果你覺得這個系統需要更加完善的話，你可以從下面的地方入手：

1. 搜索引擎優化
1. 使用 SCSS 來自定義樣式
1. 數據來源

如果你喜歡 [我的博客][2]，請給個 star，多謝。以下是如何使用這個博客系統的教程：

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

   1. `npm start` 啟動熱重載開發服務器 (基於[Gatsby][10])
   2. `open http://localhost:8000` 在您喜歡的瀏覽器中打開

5. 連接 [Contentful][9] 服務器

   1. 將以下配置添加到`.env.development`文件中

   ```
   API_SPACE_ID = Your Contentful Space ID
   API_TOKEN = Your Content Delivery (Preview) API - access token
   ```

   如果您使用的是[Contentful 的預覽 API][11]，那麽所有未發布的內容都將可用。

   1. 您也可以使用其他服務器，只要你提供給 GraphQL 的數據符合系統數據結構。

## 配置

在 `data/config`編輯 exports 的對象

註意壹下: [想要查找 theme_color 十六進制代碼，請單擊此處。][12]

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

配置[Gitalk][13]

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

有兩個可配置的 Headers ，分別為 [主頁][2] 和 [標簽頁][14]頂部的 #header 。

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

我的博客目前正在使用[Netlify][15]，當然，您可以使用 Github Pages 作為替代方案。

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
- 查 [GatsbyJS 調試文檔][16]

## 後記

這個博客系統，是我大學時代一直編寫，然後再進化迭代的一個項目。

[1]: https://i.imgur.com/6Xd4yVQ.png
[2]: https://calpa.me
[3]: https://github.com/gitalk/gitalk
[4]: https://github.com/jonschlinkert/remarkable
[5]: https://github.com/ApoorvSaxena/lozad.js
[6]: https://github.com/FortAwesome/react-fontawesome
[7]: https://github.com/cferdinandi/smooth-scroll
[8]: https://github.com/storybooks/storybook
[9]: https://www.contentful.com/ "Contentful"
[10]: https://www.gatsbyjs.org/
[11]: https://www.contentful.com/developers/docs/references/content-preview-api/
[12]: https://www.colorhexa.com/
[13]: https://gitalk.github.io/
[14]: /tags/
[15]: https://www.netlify.com/
[16]: https://www.gatsbyjs.org/docs/debugging-html-builds/
