---
templateKey: blog-post
id: 20181123a
title: GatsbyJS 入門（二）：如何以 Starter 快速架構網站
slug: /2018/11/23/gatsbyjs-2-how-to-use-starter-to-initiate-project/
date: 2018-11-23T03:48:03.125Z
description: 上次我們提到 GatsbyJS，它是一個可以獲取任意數據，並生成靜態化網站的系統。這一次，就讓我們以 Calpa 的技術博客作為例子來開始架構網站吧。
tags:
  - GatsbyJS
  - ReactJS
  - JavaScript
  - 前端
---

## 前言

上次我們提到 GatsbyJS，它是一個可以獲取任意數據，並生成靜態化網站的系統。這一次，就讓我們以 Calpa 的技術博客作為例子來開始架構網站吧。

> [GatsbyJS 入門（一）：打造開箱即用的現代化前端網站](/2018/11/16/build-a-modern-website-using-gatsbyJS/)

## 前提

1. Git
2. Node：從 8.5.0 或更高版本開始的任何 8.x 版本

## 從零開始啟動項目

GatsbyJS 提供了一個命令行工具，我們可以使用它來快速啟動項目。

![Imgur](https://i.imgur.com/1mK1Qhl.jpg)

gatsby new 命令的默認 Starter 為：

[https://github.com/gatsbyjs/gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default.git)

![Imgur](https://i.imgur.com/uEb7Hks.jpg)

如果你想體驗我的博客風格的話，你也可以選擇使用我的博客的 Starter:

[https://github.com/calpa/gatsby-starter-calpa-blog](https://github.com/calpa/gatsby-starter-calpa-blog)

![Imgur](https://i.imgur.com/zVDKqPG.png)

## 運行方法

1. 安裝 gatsby-cli
   `npm install —global gatsby-cli`
2. 命令來建立 Gatsby 的項目文件夾
   `gatsby new my-awesome-blog https://github.com/calpa/gatsby-starter-calpa-blog`
3. 開始跑工程
   `cd my-awesome-blog npm start`
   你的網站會在 [localhost:8000](http://localhost:8000) 裡面運行。
4. 開始寫代碼
   你可以使用任意編輯器來編輯代碼，如果你修改 src/pages/\*.js，例如 404.js。

保存之後你就可以看到你的瀏覽器是實時同步的。

如果想要透過 GraphQL 解析數據層，你也可以訪問 [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)。

![Imgur](https://i.imgur.com/AeDRACF.jpg)

值得一提的是：

在運行 gatsbyjs-starter-calpa-blog 的時候，它會自動打開 Webpack Bundle Analyser，路徑是 [127.0.0.1:8888](http://127.0.0.1:8888/)。你可以透過這個打包分析器來閱讀打包代碼的組成部分，然後進行優化。

## GatsbyJS 網站架構

```
    .
    ├── data
    │   └── template
    ├── gatsby
    ├── public
    ├── scripts
    ├── src
    │   ├── api
    │   ├── components
    │   ├── pages
    │   │   ├── guestbook
    │   │   └── tags
    │   ├── reducers
    │   ├── styles
    │   └── templates
    └── static
        └── favicons
```

1. `/data` : 放置網站的數據，例如配置(config), 頁面頂部大圖(header), 文章 (posts)
   這裡會有兩種配置方法，
   一：是在同一個項目裡面開發頁面框架，修改文章數據。
   二：是使用遠端數據庫，例如 Contentful 來獲取數據，本地不作數據儲存。
2. `/data/template`: 網站數據模板，你可以參考如何本地的默認配置，然後進行修改。
3. `/scripts`: 所需要運行的非 gatsby 腳本
4. `/src`: 所有你在前端看到的代碼，例如頁面模板，展示層
5. `/gatsby`: 專門放置 Gatsby 構建代碼，已細分為獲取數據，構建，部署，瀏覽器運行的不同生命週期。
6. `/static`: 你可以把需要直接複製貼上的檔案放到這個目錄下，GatsbyJS 會調用 fs.copy 來直接複製貼上到 public 目錄
7. `/public`: GatsbyJS 生成的靜態網站文件夾

系統是使用模板式的設計，模板為首頁的列表設計，和文章的內文設計，他們位於 `/src/templates/page.js` 以及 `/src/templates/blog-post.js`。

## 部署項目

如果你對於項目感到滿意的話，那麼你可以運行 gatsby build，GatsbyJS 會優化網站，並產生 HTML 和每個路由對應的 JavaScript 代碼檔案。

你可以使用 gatsby serve 來啟動一個本地服務器，來瀏覽生成的網站效果。

## 後記

這個系列應該會寫十篇左右，每週出一篇。

> [GatsbyJS 入門（一）：打造開箱即用的現代化前端網站](/2018/11/16/build-a-modern-website-using-gatsbyJS/)
