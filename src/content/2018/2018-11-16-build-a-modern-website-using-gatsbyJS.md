---
templateKey: blog-post
id: 20181116a
title: GatsbyJS 入門（一）：打造開箱即用的現代化前端網站
slug: /2018/11/16/build-a-modern-website-using-gatsbyJS/
date: 2018-11-16T03:48:03.125Z
description: GatsbyJS 是一個現代化開發網站的網站產生系統，擁有完整、豐富且開源的生態圈。它利用 React + GraphQL 產生的多頁面應用，讓前端工程師，編輯，用戶都感到滿意。就讓我們一步步地探索這個系統吧。
tags:
  - 閱讀
---

## 前言

GatsbyJS 是一個現代化開發網站的網站產生系統，擁有完整、豐富且開源的生態圈。它利用 React + GraphQL 產生的多頁面應用，讓前端工程師，編輯，用戶都感到滿意。就讓我們一步步地探索這個系統吧。

## GatsbyJS

![Imgur](https://i.imgur.com/D5wP4Zr.jpg)

GatsbyJS 是一個擁有超過 2 萬 Stars，3500 forks 的 React 網站生成系統。

![Imgur](https://i.imgur.com/LEuNXsM.jpg)

從技術的角度來說，GatsbyJS 就是混合了 React, react-router, webpack, babel 還有 GraphQL 的系統，達到數據層和 UI 層徹底分離，打造快速網站，而不失 SEO 的現代前端開發模式。

GatsbyJS 提供接口，讓你可以輕鬆獲取你的遠端數據庫。無論是傳統的 Wordpress, 現代的 Contentful，突發奇想的 github CMS, 還是一個 json 檔案，它都可以無痛地接入到這個系統裡面。

舉個例子，博客系統現在是使用 Contentful CMS，讓我可以從任意地方訪問 Contentful 網站進行修改，無需本地改任何代碼。

透過系統提供的生命週期鉤子，你可以在其中將數據加工，處理，拼接，然後生成你所需要的數據源。

然後，你可以使用 React 編寫組件化的網站，加上自己的樣式，預處理器，例如 SCSS，styled-components。

值得一提的是，你可以使用 React 的生命週期，例如，利用 [lozad.js 懶加載圖片](/2018/09/27/lozadjs-highly-performant-light-configurable-lazy-loader-in-pure-JS-no-dependencies/)。

它可以生成靜態頁面，也就是說生成的是完整的網站文件夾，直接上傳文件夾到網站空間，例如 Github Pages, Netlify，就可以把網站跑起來了。

![Imgur][4]

它已經廣泛應用於一些知名的網站，例如： ReactJS.org，Airbnb 旗下的 Engineering & Data Science 網站。

## 網站進化越來越複雜

![Imgur](https://i.imgur.com/UhJUfQe.jpg)

在傳統的全棧項目，我們需要把所有服務放在同一個平台，比如說 WordPress ，它提供一個一站式的內容管理，展示平台，大大方便了管理內容的人去開發博客，電商平台。然而，現在我們會細分系統架構，避免耦合性高，一個系統崩潰全崩潰的問題。

> 術業有專攻，不要造輪子

現在，我們會使用不同的服務來達到這件事情，例如我們會使用 algolia 來做搜尋服務， stripe 做付款服務，google analytics 做網站統計服務，travisCI 做自動化測試。

## 網站角色

![Imgur][2]

以前，工程師需要負責開發前端視圖層，維護後端數據庫，優化網站性能等的工作，而現在，分工化讓這些工序都可以由專門的人去負責，其中包括前端開發者，內容發佈者，網站訪問者，下面將會詳細展開：

### 前端工程師

作為一個前端工程師角度出發，我們追求速度，用戶體驗。如何可以提供一個更加快速，更加好的網站給全球各地的用戶。

![Lighthouse 3.0](https://i.imgur.com/gHKHkks.jpg)

我們會利用一些網站性能調優開發工具，例如：[Lighthouse, Puppeteer][6]，來測試，改進網絡應用質量。

![以用戶為中心的績效指標](https://i.imgur.com/J1Fgbxi.jpg)

這些用戶可能來自遠方，網絡信號未必會很好，出現掉線和網絡異常是經常有的事。他們對於網站的性能，加載速度就有更加高的需求。我們可能可以用 PWA，又或者懶加載的工具，例如 [lozad.js][8] 來解決這個問題。

### 編輯

為了最優化內容，一些公司會出現專門編寫文案的編輯，內容管理者。

![Imgur](https://i.imgur.com/hW3BbU6.jpg)

他們關心如何修改文章，挑選適合的圖片，並使用簡單容易的編輯器，例如富文本編輯器。

與其等待版本上線後才能看到效果，他們更加希望可以使用富文本編輯器，或者其他的可即時展示的編輯器，然後訪問項目的地址。

這個時候，如果他們不滿意效果，只需要重新修改文章，然後發佈就行。

### 訪問用戶

隨著智能手機的普及，網站用戶也開始使用不同的設備來訪問網站。

就以我的博客為例，有四成的用戶就是使用手機來訪問網站的。

![Imgur](https://i.imgur.com/1596Xw7.jpg)

他們關心網站的加載速度，不願意等待太長時間。

他們也會關心網站是否佔用太多流量，比如說圖片加載太多，優化太少的話，他們會覺得流量沒了有點傷心。。。

為了滿足用戶需求，前端工程師每天都在進化，提供更加好的網站。他們會使用更加受到社區認可，維護性好的項目，減少開發時的坑，例如如何使用 React 開發網站，而不失 SEO 的優勢，又例如如何達到前後端分離，數據層和展示層分離。

## 架構

GatsbyJS 打造了一個完整的生命週期，以及可以讓開發者接入的插件模式。

如果我需要使用某些工具的話，我只需要在 gatsby-config.js 寫入插件名稱，然後 npm install 一下就好了。

![Imgur][10]

GatsbyJS 擁有的豐富插件讓開發者可以無痛地安裝，移除插件，並且享受更加好的版本插件來避免版本過舊的版本特定問題。

![Imgur](https://i.imgur.com/bXS8alL.jpg)

插件以 `gatsby-plugin-` 開頭：

| 插件                    | 用處                         |
| ----------------------- | ---------------------------- |
| feed                    | 製作 RSS Feed                |
| manifest                | 應用程序緩存                 |
| netlify                 | Netlify 網站空間最優化       |
| nprogress               | 進度條                       |
| offline                 | 離線應用                     |
| react-helmet            | 修改 Head 部分               |
| sass                    | sass 預處理器                |
| sentry                  | Sentry 錯誤捕獲平台          |
| sitemap                 | 站點地圖                     |
| webpack-bundle-analyzer | Webpack 版本的打包詳細分析器 |
| link                    | react-router 路由封裝        |

### React

為了避免大量的 DOM 操作而導致的網頁性能問題，我們會使用 React 來操作虛擬 DOM，然後生成一個組件化的網站。

另外，為了避免重複造輪子，我們會使用組件化的開發方式。

### Webpack

這個在現代化前端工程裡面很常見，這裡簡單說一下：它打包不同的 html, js, css 文件，然後把他們壓縮，加密，劣化，讓我們可以放到 CDN 上面。

### Babel

為了兼容不同瀏覽器支持的 JavaScript 版本，我們可以使用 Babel。例如說將 async/await 向下兼容到 promise。如果你想了解關於異步操作，文章。

### ESLint

我們可以使用代碼風格檢測，校正工具例如 ESLint，來統一團隊的代碼風格，不但可以避免 Git 操作上面的不必要更改，還可以避免犯下低級錯誤，例如拼寫，函數變量創建但未使用。

### 版本管理

我們會使用 Git 來達到版本管理，開分支，合拼分支，然後跑自動化測試，最後部署。

萬一有問題，我們還可以快速的使用二分法排查版本錯誤，然後通知網站維護者（自己）進行版本回退。

我們可以使用 Webhooks 讓編輯改完文章後發送請求到 Netlify 來達到自動測試，部署，發佈的流程。

![Imgur][12]

## 後記

![Imgur][7]

透過 GatsbyJS，我可以享受架構前端項目的樂趣，擁抱開源社區的優勢，不斷改進我的博客框架。

而透過 Netlify，我可以享受到服務器不中斷下發佈新網站，而且可以提供校對版本給校對者，然後才發佈文章。就算是有問題也可以快速後退，DEBUG，然後發佈。

![Imgur](https://i.imgur.com/CrHbd55.jpg)

如果你希望測試一下 GatsbyJS 為你帶來的速度體驗的話，其實你就已經體驗到了，因為，這個博客就是使用 GatsbyJS，以及使用最近完成改版任務的 [gatsby-starter-calpa-blog][16]。

歡迎透過開箱即用的沙盒環境，試玩 [GatsbyJS + Cotentful 的博客系統 (CodeSandbox)](https://codesandbox.io/s/github/calpa/gatsby-starter-calpa-blog)。

下次，我將會講述如何連接 GatsbyJS 到遠端數據庫，例如 Contentful。

## 參考鏈接

1. [GatsbyJS 官網][17]
2. [Rise of the Content Mesh: Webcast with Contentful and Gatsby][18]
3. [gatsby-starter-calpa-blog - Github][16]

[1]: https://i.imgur.com/gHKHkksl.jpg
[2]: https://i.imgur.com/sLvOHUx.jpg
[3]: https://i.imgur.com/D5wP4Zr.jpg
[4]: https://i.imgur.com/uiAprbx.jpg
[5]: https://i.imgur.com/UhJUfQe.jpg
[6]: /2018/09/24/tooling-for-web-lighthouse-puppeteer-and-beyond/
[7]: https://i.imgur.com/hW3BbU6.jpg
[8]: /2018/09/27/lozadjs-highly-performant-light-configurable-lazy-loader-in-pure-JS-no-dependencies/
[9]: https://i.imgur.com/IRuEwCR.jpg
[10]: https://i.imgur.com/Gg1QC0V.jpg
[11]: https://i.imgur.com/7X5r088.jpg
[12]: https://i.imgur.com/Ga64jRD.jpg
[13]: https://i.imgur.com/P49VpAW.png
[14]: https://i.imgur.com/1596Xw7.jpg
[15]: https://i.imgur.com/psjI0wd.gif
[16]: https://github.com/calpa/gatsby-starter-calpa-blog
[17]: https://www.gatsbyjs.org/
[18]: https://www.gatsbyjs.com/content-mesh-contentful
