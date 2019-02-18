---
templateKey: blog-post
id: 5SIw48tWTK8SU4giyUqcSI
title: 從博客系統回顧我的 2018 年前端生涯
slug: /2018/12/24/front-end-blog-system-review-2018/
date: 2018-12-24T03:48:03.125Z
description: 時光飛逝，我已從大學畢業成為前端工程師。回想這一年，我完成了三件事情：改版博客系統，讓不同用戶可以快速啟動項目，它是我第一個過百 Star 數的項目；翻譯並校對技術文章，學習了不少前端實用的技術；對博客系統框架的 GatsbyJS，ReactJS 技術研究。
tags:
  - GatsbyJS
  - ReactJS
---

# 前言

時光飛逝，我已從大學畢業成為前端工程師。回想這一年，我完成了三件事情：改版博客系統，讓不同用戶可以快速啟動項目，它是我第一個過百 Star 數的項目；翻譯並校對技術文章，學習了不少前端實用的技術；對博客系統框架的 GatsbyJS，ReactJS 技術研究。

感謝大學友人及一眾程序員的相助。

## 改版博客系統

![Imgur][6]

在編寫博客文章的時候，我經常身兼三職，編寫博客系統的前端程序員，專心寫文章的編輯，以及保證網站服務質量的網站維護者。

1. 前端工程師：我希望可以使用最新最快的技術，同時保證服務是穩定的，文章可以正常顯示。
1. 編輯：我在編寫文章的時候，我希望可以看到預覽的效果。
1. 網站維護者：網站有問題的時候，可以快速回退到正常的版本，避免線上事故繼續發生。

不僅如此，我也希望可以給校對者，對於每一個版本分別進行校對。

為了更好地實現這些目標，我選擇使用 GatsbyJS + Netlify + Contentful，來達到這件事情。

![Imgur][5]

### GatsbyJS

它是一個基於 ReactJS 的靜態網站生成系統，可以讀取任意數據，並且生成現代化前端網站。

![Imgur][1]

### Netlify

它是一站式網站空間託管，生成平台。支持 node.js 環境生成，npm 腳本，每個分支都可以生成獨立的預覽網站。

![Imgur][2]

### Contentful

基於雲的內容管理平台，可以編寫 markdown 文本，支持實時預覽 markdown 功能。

![Imgur][3]

### 成果

在過去的一年，我可以不斷地更新博客系統，而且保證服務的穩定性。

我對於這樣的配置是十分滿意的，因為在香港科技大學裡面有很多電腦，以及很多地方可以收到 WIFI 信號。我只需要找一台電腦就可以登錄 Contentful，開始寫文章。

而我更加可以訪問我的服務器，打開 vim 編輯器，進行比較大膽的代碼嘗試。

因為 Netlify 會鎖版本，如果構建失敗的話，那麼你將不會看到錯誤版本，而是看到最後一個成功的版本。

## 博客再進化

在過去的幾個月，我發現有些博客系統裡面的配置項是會變動，比如說友情鏈接，導航欄，數據頁面。

這些不應該作為 commit 的一部分，相反，它們應該是可以線上配置的。

所以我花了一點時間，把博客的配置項也抽出來，從 Contentful 服務器獲取。

而你所看到的 gatsby-starter-calpa-blog，就是我這幾個月所優化博客系統成果。

![Imgur][4]

還記得在上一次寫[《前端工程師的日常修煉清單》][7]，Github 上的博客系統 Star 數目是 62，而現在已經是超過 100 Star 數目的一個多人協作項目。

感謝各位。

### 快速入門

#### 使用 Netlify 部署

透過 Netlify，我可以快速部署任意前端項目，並體驗當中的樂趣。

![Imgur][8]

你可以使用[這個鏈接][9]來構建和部署博客系統。

在你點擊上面的按鈕之後，你就會賦予 Netlify 取得你的 Github 授權，以及選擇倉庫名稱。Netlify 會自動創建一個倉庫，並且複製那裡的文件。

之後，它會自動構建和部署一個新的網站，為你帶來一個完整的博客系統。

你也可以使用 Contentful 作為你的內容管理系統。

#### 使用 CodeSandbox 來寫代碼

CodeSandbox 提供了一個免費，而且開箱即用的沙盒寫代碼環境。

![Imgur][10]

你可以使用[這個鏈接][11]來修改我的博客系統代碼。

## 博客回顧

![](https://i.imgur.com/Ms9oZem.jpg)

在過去一年，博客成功帶來了超過 2 萬 6 千個用戶，而瀏覽量超過 7 萬。

這些流量大部分集中在 9 月份之後，原因是因為上半年，我一直在準備大學畢業的最後考驗。

十分感謝那些在大學時期就一直幫助我的好友。

### 訪問量集中區域

![](https://i.imgur.com/aUBYKYa.jpg)

身為一個前端工程師，那麼寫的文章大部分都是與前端相關的。

而今年寫過的幾篇熱門文章，都是與工具類，優化類相關的，比如說：

1. [《前端工程師的日常修煉清單》][7]
2. [lozad.js ﹣ 高性能、無依賴的純 JS 任意元素懶加載插件
   ](/2018/09/27/lozadjs-highly-performant-light-configurable-lazy-loader-in-pure-JS-no-dependencies/)
3. [網站性能調優開發工具: Lighthouse, Puppeteer 以及進階部分丨 Google 開發者大會 2018][12]
4. [五分鐘減輕你的前端應用 ﹣ day.js 篇
   ](/2018/09/19/five-minutes-to-reduce-application-weight-dayjs/)

### 流量來源

![](https://i.imgur.com/3roBwGD.jpg)

訪客來自不同地區，但主要訪客都是程序員為主。

- 從 Google 和 Baidu 搜尋過來的，大部分是看 React 相關的文章
- 掘金進來的應該是看技術文章，主要是看清單類，以及性能優化的文章
- V2EX 程序員社區主要是看我在 8 月中旬寫的[《來杭工作兩個月後的生活與工作總結
  》](/2018/08/19/summary-after-two-months-hang-zhou-life)一文。

### 流量分佈

![](https://i.imgur.com/6KHXMv5.jpg)

流量集中在在第三、四個季度，理由是我在到了杭州之後才有比較多的時間寫文章。

## 文章回顧

在這一年，我總共寫了二十幾篇文章，大概可以分為三類：

1. 生活
1. 前端優化
1. 程序員工具

### 生活

![](https://i.imgur.com/Tlby2zu.jpg)

- [來杭工作兩個月後的生活與工作總結][13]

上有天堂，下有蘇杭。來了杭州之後，我也開始習慣這裡的生活，無論是生活節奏，還是工作習慣，都有所不同。這就是我這些天來最大的體會。

![](https://i.imgur.com/kOlqzBm.jpg)

- [Hackoberfest 2018][14]

透過參加 Hacktoberfest 活動，我除了可以拿到活動的限量衣服和貼紙之外，更可以認識到世界上不同的程序員。

我看著不斷而來的討論和 Pull Requests，我找回了自己在編程上的熱情。

如果你有興趣參與開源活動，但不知道如何入手的話，它會是一個不錯的起點。

### 前端優化

- [五分鐘減輕你的前端應用 ﹣ day.js 篇][15]

  在處理時間日期的時候，除了使用原生的函數之外，便是強大的 Moment.js。不過，它的重量經常是打包體積過大問題的兇手。因而，轉而使用輕量的 day.js 的話，能夠大大省下用戶需要加載的體積，加速網站加載速度。

![](https://i.imgur.com/ARyraks.jpg)

- [網站性能調優開發工具: Lighthouse, Puppeteer 以及進階部分丨 Google 開發者大會 2018][12]

  這次 Google 開發者大會請來了 Lighthouse 的工程師 - Eric Bidelman ，分享如何簡單地使用 Lighthouse, Puppeteer 來自動化我們日常的流程。它是一個開源的自動化工具，用於改進網絡應用質量。您只需要提供網址，它就測試該頁面，並生成頁面性能報告。你可以看看採取哪些措施來改進您的應用。

  還記得這一次大會，我是請假從杭州過去上海的，雖然那兩天我沒了工資，但我卻從這一次大會學到很多知識。

  更重要的是，這一篇文章取得了超過 400 個掘金上面的程序員的喜歡數，也是為我帶來了超過 5000 閱讀量。

![](https://i.imgur.com/lKp2oyM.jpg)

- [lozad.js ﹣ 高性能、無依賴的純 JS 任意元素懶加載插件][16]

  在過去的一年，博客就已經啟動這個懶加載的功能了，也算是通過了眾多不同用戶的考驗了。

  為了提升用戶的加載頁面速度，我們可以使用懶加載這個方法。

- [前端工程師的日常修煉清單][7]

  一開始寫這一篇文章的時候，我沒有想過有這麼多人過來看文章，我只是想著如何才能做到一件事：舞台少女，天天進化。

  這篇文章得到了很多訪問量，而在掘金上就有超過**五百個**讚同。

#### 測試

- [power assert － 更智能、優雅的全方位 assert 斷言庫][17]

  在寫測試代碼時，以往我們需要翻閱文檔，學習各種 API 才能明白如何操作斷言。而現在我們可以透過 power-assert 的 assert 方法來減輕調試壓力。不僅如此，它還提供更加直觀，具體的運行效果，幫助 DEBUG。寫測試代碼，其實可以很容易。

- [透過 TDD 模式學習如何實現各種 npm 工具][18]

  在程序員的日常精進之中，閱讀優秀的代碼是必不可少的。透過 TDD 的開發模式，可以模仿那些優秀的代碼，從而提升自己代碼水平。下面介紹如何從零開始搭建 TDD 環境，並構建 isEven 代碼。

### GatsbyJS 系列

在十一月份，我開始編寫一系列關於 GatsbyJS 的文章。

GatsbyJS 是一個現代化開發網站的網站產生系統，擁有完整、豐富且開源的生態圈。它利用 React + GraphQL 產生的多頁面應用，讓前端工程師，編輯，用戶都感到滿意。

1. [GatsbyJS 入門（一）：打造開箱即用的現代化前端網站][19]

2. [GatsbyJS 入門（二）：如何以 Starter 快速架構網站][20]

3. [基於 GatsbyJS 的博客系統正式開源：gatsby-starter-calpa-blog，及其使用方法][21]

### 工具

除了參加開源項目，我還寫了兩篇關於我日常開發使用的兩個工具。

![](https://raw.githubusercontent.com/MrRio/vtop/master/docs/example.gif)

- [vtop ﹣ 一個你用了就會愛不釋手的圖形化進程管理工具][22]

![](https://i.imgur.com/6wIWbyS.jpg)

- [GitGuardian - 開箱即用的 GitHub 敏感信息洩露自動提示平台][23]

### JavaScript

作為一個前端工程師，HTML，CSS 和 JavaScript 自然是要每天去使用，每天去學習的。

而在 2018 年，我開始翻譯一些 JavaScript 的文章，學習函數式編程在 JavaScript 裡面的應用。

- [【譯】以申請大學流程來解釋 JavaScript 的 filter 方法][24]

## 展望 2019 年

在 2018 年，我從香港來到了杭州，開始了一段程序員的生活。

我希能在 2019 年，可以在前端的領域上有所沉澱，一步一步地，寫出一些具有高度關聯的技術文章。繼續發揮現有的優勢，繼續在 GatsbyJS 這個領域上面有所拓展：

- 反思博客系統的優劣點
- 如果重新構建博客系統的話，我會如何架構這個系統

就如同一般的程序員一樣，我必須滿足日常開發的業務需求，以獲得三餐溫飽的生活。

對於明年，我有以下這些盼望：

- 可以重新理解模塊化的概念：前端模塊化的進化歷史包括：CommonJS, AMD, CMD, ES6
  - [《JavaScript 模块化七日谈》(PPT)][25]
  - [《前端模块化：CommonJS,AMD,CMD,ES6》][26]
- 掌握前端編譯與構建工具
  - Webpack
  - Parcel
- 掌握編譯原理：不僅是知道前端有什麼編譯工具，還要了解編譯原理，達到知其然，知其所以然。
  - [《前端工程师为什么要学习编译原理？》][27]
  - [I finally made sense of front end build tools. You can, too.][28]
- 掌握 Web 動畫的高級特性
  - 透過 [Learn Web Animation - klrupa][29]，我可以深入淺出地了解 如何透過 HTML，CSS 去學習 Web 動畫
- 深入 JavaScript 這門前端工程師每日都要接觸的語言
  - 掌握 Proxy 特性，並且了解 immer.js 之所以能夠實現 immutable 的原因
  - 掌握 Prototype 原型鏈，明白為什麼 this 在函數，全局，以及不同情況下的各種差異之處。
  - 掌握 Class 特性，明白 Class 非 Class 的道理

## 後記

感謝各位的支持，我才得以從修讀化學工程的大學生，轉行成為一個前端工程師。

以終為始，但願可以繼續保持初心，為實現更加美好的世界貢獻自己一分力量。

[1]: https://i.imgur.com/sLvOHUx.jpg
[2]: https://i.imgur.com/LEuNXsM.jpg
[3]: https://i.imgur.com/pZs57ka.jpg
[4]: https://i.imgur.com/FCsIMrM.jpg
[5]: https://i.imgur.com/ZHvkyvG.jpg
[6]: https://i.imgur.com/vvi3sYy.jpg
[7]: /2018/11/05/front-end-daily-improving-learning-list/
[8]: https://i.imgur.com/nMdpUvg.jpg
[9]: https://app.netlify.com/start/deploy?repository=https://github.com/calpa/gatsby-starter-calpa-blog
[10]: https://i.imgur.com/n6IxCy8.jpg
[11]: https://codesandbox.io/s/github/calpa/gatsby-starter-calpa-blog/tree/master/
[12]: /2018/09/24/tooling-for-web-lighthouse-puppeteer-and-beyond/
[13]: /2018/08/19/summary-after-two-months-hang-zhou-life
[14]: /2018/10/09/Hackoberfest-2018-support-open-source-earn-limited-edition-t-shirt/
[15]: /2018/09/19/five-minutes-to-reduce-application-weight-dayjs/
[16]: /2018/09/27/lozadjs-highly-performant-light-configurable-lazy-loader-in-pure-JS-no-dependencies/
[17]: /2018/10/25/power-assert-smart-and-elegant-tools/
[18]: /2018/11/02/learn-javascript-npm-via-testing-driven-development/
[19]: /2018/11/16/build-a-modern-website-using-gatsbyJS
[20]: /2018/11/23/gatsbyjs-2-how-to-use-starter-to-initiate-project
[21]: /2018/12/03/gatsby-starter-calpa-blog-release-open-source/
[22]: /2018/08/25/vtop-graphical-activity-monitor-for-command-line/
[23]: /2018/09/08/gitguardian-prevent-public-exposure-of-secrets-in-github/
[24]: /2018/09/17/javascripts-filter-function-explained-by-applying-to-college
[25]: https://huangxuan.me/js-module-7day/#/
[26]: https://juejin.im/post/5aaa37c8f265da23945f365c
[27]: https://zhuanlan.zhihu.com/p/31096468
[28]: https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b
[29]: https://www.kirupa.com/html5/learn_animation.htm
