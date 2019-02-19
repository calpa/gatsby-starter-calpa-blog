---
templateKey: blog-post
id: 20170702a
title: React 應用輕量化（一）Source Map
date: 2017-08-27T03:48:03.125Z
slug: /2017/08/27/react-app-optimization-1-source-map
description: create-react-app 提供了很方便的創建 React 應用途徑。它已經把 webpack, Babel, Autoprefixer, ESLint, Jest 等常用工具打包進去。可以說是一個非常方便，好用的製造 React 應用工具。當我打算把包裝好的檔案推上去的時候，我卻發現打包之後的檔案大小有點大，因此我就開始優化這個網頁應用了。第一點我優化的地方就是 Source Map。
tags:
  - React
  - 前端
---

`create-react-app` 提供了很方便的創建 React 應用途徑。它已經把 webpack, Babel, Autoprefixer, ESLint, Jest 等常用工具打包進去。可以說是一個非常方便，好用的製造 React 應用工具。當我打算把包裝好的檔案推上去的時候，我卻發現打包之後的檔案大小有點大，因此我就開始優化這個網頁應用了。第一點我優化的地方就是 Source Map。

如果你細心看 README.md 的話，你會發現下面這一句，它把 Source Map 也打包進去。。。

> A build script to bundle JS, CSS, and images for production, with sourcemaps.

在測試環境中，我們可以透過 sourcemap 找到 bundle 過後的對應項目組件，這個是蠻方便的。

但是，在生產環境中，如果有 sourcemap 的話，就會直接暴露項目中的架構，以及檔案，同時會增加網站大小。。。

## 解決方法

### 快速方法

排除 `*.map`，避免部署 sourcemap 到上面。。。

這個方法並不能從根源解決問題，因為產生 sourcemap 需時較長，另外，也會產生一個不需要的檔案大小略大的 sourcemap 檔案。

### 徹底方法

1. `npm run eject`，如果你沒有 Eject 過的話。

Eject 是一個特殊命令，把 `create-react-app` 的懶人包變成自定義的項目。在 Eject 之前，請想清楚你是否需要掌握項目的每一個細節。

對應日新月異的產品需求以及開發需求，我選擇 Eject。比如說 SCSS，CSS 模組化。

2. 用你喜歡的文字編輯器 或 IDE 打開 `/config/webpack.config.prod.js`

3. 刪除或注釋第五十三行 `devtool: 'source-map'`

在上面你可以看到這樣的注釋：

> // We generate sourcemaps in production. This is slow but gives good results.
> // You can exclude the \*.map files from the build during deployment.

它這裡寫就是說產生 sourcemap 會給出好的結果，雖然產生時間會更加長。。。

另外，你可以排除 `*.map`，避免部署 Source Map 到上面。。。

## 參考資料

1. [create-react-app README](https://github.com/facebookincubator/create-react-app)
1. [Disable webpack production sourcemaps](https://github.com/facebookincubator/create-react-app/issues/2005)
