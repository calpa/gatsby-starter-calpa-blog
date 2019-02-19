---
templateKey: blog-post
id: 前端工程師的日常修煉清單
title: 前端工程師的日常修煉清單
slug: /2018/11/05/front-end-daily-improving-learning-list/
date: 2018-11-05T03:48:03.125Z
description: 學習如逆水行舟，不進則退。透過這個清單，我可以不斷學習前端知識，掌握更新的技能，天天進化。
tags:
  - 閱讀
  - 清單
  - 前端
  - JavaScript
---

## 前言

學習如逆水行舟，不進則退。透過這個清單，我可以不斷學習前端知識，掌握更新的技能，天天進化。

## 清單

### 輸入部分

#### 參加技術大會，分享會

如果可以的話，當然是到現場參與技術大會，從而更加投入，專心地學習技術。

不行的話，那麼看影片也是可行的。

以下為我有注意過的技術大會：

1. 谷歌開發者大會

透過參加由 [Google 舉辦的技術大會][1]，我學到如何簡單地使用 Lighthouse, Puppeteer 來自動化我們日常的流程。它是一個開源的自動化工具，用於改進網絡應用質量。您只需要提供網址，它就測試該頁面，並生成頁面性能報告。

![Imgur][2]

2. JSConf

JS Conference 是一個專門以 JavaScript 出發去探討各種各樣技術的大會，每次都會為我帶來新的想法和概念。

![Imgur][3]

Youtube 上的 [JSConf 頻道][4]會將世界各地大部分的會議影片發放出來，每段影片都由十多分鐘到三十分鐘。有興趣的話，可以選擇自己感興趣的影片來看，而不是順序。

#### 參加導師制度

如果公司裡面是有一些比較經驗豐富的員工，那麼可以把他們看作導師。遇到問題的時候，先透過[提問問題的藝術][5]裡面的方法解決問題，然後問高質量的問題。

#### 閱讀經典源碼

透過閱讀優秀的代碼，可以避免踩坑，在研究 ReactJS.org 的官網時，我便學習了不少的技巧去開發 GatsbyJS 的個人博客系統。以下是幾個我會去看源碼的項目：

1.  [reactjs/reactjs.org][6]
    學習如何更加優雅地使用 GatsbyJS 框架
1.  [DIYgod/RSSHub][7]
    如何利用 axios + cheerio 進行網絡爬蟲，並以 RSS (JSON) 的形式發佈
1.  [reduxjs/redux-thunk][8]
    Thunk middleware for Redux

### 閱讀開源項目 Pull Request 的改動

透過閱讀 PRs，我們可以知道系統存在著什麼問題？如何解決這個問題？有沒有人以同樣方法解決過問題？

#### 觀看教程和會議視頻

Youtube 上有很多不錯的頻道：

1. [Google Developers][9]
2. [Talks at Google][10]
3. [JSConf][4]

另外，[EggHead][11] 有一些免費的教程作為進階部分，雖然它是一個收費平台，但它把技術點說得很清楚。

還記得大學實習的時候，實習的公司就很好地讓我收看了一些收費視頻來提升自己的技術水平。

#### 瀏覽最新的技術發展

比如說瀏覽 Hacker News，Medium 等文章，這裡舉幾個不錯的 Medium 頻道：

![Imgur][12]

1. [Hacker Noon][13]
   ![Imgur][14]
1. [freeCodeCamp][15]
   ![Imgur][16]

另外，也可以訪問一下不同地區的程序員社區，以產生火花。

1. [Hacker News][17]
   ![Imgur][18]
1. [Github Explore][19]
   ![Imgur][20]
1. [掘金 - 發簡體中文的技術文章社區][21]
   ![Imgur][22]
1. [Qiita - 日本程序員社區][23]
   ![Imgur][24]

### 處理部分

這個時候，就是深化技術的部分，要麼從上往下，要麼從下往上走。

如果覺得有趣的技術點，那麼就要記下來。
如果覺得沉悶的技術，那麼就要知道為什麼會說得那麼沉悶。。。

### 輸出部分

#### 寫技術文章

如果只是閱讀的話，那麼停留知其然不知其所以然的層面。透過寫作，我們可以整理自己的思路。而輸出到不同的社群裡面，可以讓不同的人也參與其中，達到思想交叉而產生火花。

#### 翻譯文章

透過翻譯文章，我們可以了解如何更加精確地了解國外優秀程序員的想法，模仿，從而提升自己的技術水平。

#### 校對翻譯文章

這裡我也要感謝掘金給予的機會，讓我可以閱讀那麼多的文章，並更加準確地了解如何使用這些概念，詞彙。

#### 擁有自己的技術棧

這裡說的技術棧，是說如何從零開始架構一套屬於自己的前端系統，框架。博客系統雖然常見，但裡面的細節很多。。。

#### 練習編碼招式

我們可以透過 [CodePen][25] 實現一些快速的 DEMO，驗證自己的想法。

![Imgur][26]

- 透過 CodePen 實現以純 HTML, CSS 的動畫
- 透過 CodePen 做單頁面應用

而透過 [Code Sandbox][27]，可以開箱即用地構建沙盒環境，完成複雜，需要打包構建的前端現代化工程。

- 透過 CodeSandbox 做需要組件化的項目，從而可以有架構更多的項目機會

![Imgur][28]

CodeSandbox 提供很多開箱即用的模板，例如 React, Vue, React + TypeScript，讓程序員可以幾秒開一個沙盒環境。

![Imgur][29]

#### 模仿代碼

[透過 TDD 模式實現各種 npm 工具
](/2018/11/02/learn-javascript-npm-via-testing-driven-development/)後，我們再看源碼，那麼會達到事半功倍的效果。

![Imgur][30]

#### 不斷地重構代碼

看著昨天的我用千行代碼寫的項目，我就想能不能用一半的代碼來達到同樣效果。

就像打賽車遊戲一樣，每一次，都是想要達到最佳的個人記錄。

1. 透過 TDD 重構代碼，以更優雅的方式達到同樣的效果

#### 貢獻開源項目

1. Hackoberfest

在過去的十月份，我就參加了開源社區舉辦的 [Hackoberfest][31]。

![](https://i.imgur.com/kOlqzBm.jpg)

這個活動不僅讓我改善了自己項目的代碼質量，也同時回饋了開源社區一個[開箱即用的博客系統][32]：[gatsby-starter-calpa-blog][32]

![Imgur][33]

2. RSSHub

透過這個系統，我可以輕鬆地標準格式的天文台天氣 api。

## 後記

這一篇文章是我對於之前校對的文章所作出的延伸。這下，我就可以跟著這個清單來達到天天精進的日常了。

為了那些一直追趕我的人，我每天都必須成為最好的自己。

如果你想到任何可以提升技術水平或個人說的方法的話，歡迎在下面留言。

## 參考資料

1. [JS Conf - Youtube][4]
2. [ReactJS.org][6]
3. [DIYGod/RSSHub][7]
4. [reduxjs/redux-thunk][8]
5. [Google Developers - Youtube][9]
6. [Talks at Google - Youtube][10]
7. [egghead.io][11]
8. [hackernoon - Medium][13]
9. [freecodecamp.org - Medium][15]
10. [Hacker News][17]
11. [Github Explore][19]
12. [掘金][21]
13. [Qiita][23]
14. [CodePen][25]
15. [Code Sandbox][27]

[1]: /2018/09/24/tooling-for-web-lighthouse-puppeteer-and-beyond
[2]: https://i.imgur.com/ARyraks.jpg
[3]: https://i.imgur.com/FnLFrvh.jpg
[4]: https://www.youtube.com/user/jsconfeu
[5]: /2017/07/24/six-steps-to-debug-before-directly-ask-question
[6]: https://github.com/reactjs/reactjs.org
[7]: https://github.com/DIYgod/RSSHub
[8]: https://github.com/reduxjs/redux-thunk
[9]: https://www.youtube.com/user/GoogleDevelopers
[10]: https://www.youtube.com/channel/UCbmNph6atAoGfqLoCL_duAg
[11]: https://egghead.io/
[12]: https://i.imgur.com/2iUktvi.jpg
[13]: https://hackernoon.com/
[14]: https://i.imgur.com/Nj3yBsS.jpg
[15]: https://medium.freecodecamp.org/
[16]: https://i.imgur.com/zjtRSvD.jpg
[17]: https://news.ycombinator.com/
[18]: https://i.imgur.com/uftwqxb.png
[19]: https://github.com/explore
[20]: https://i.imgur.com/fZUycjw.jpg
[21]: https://juejin.im
[22]: https://i.imgur.com/9BIKd1W.jpg
[23]: http://qiita.com
[24]: https://i.imgur.com/XHOZw0C.jpg
[25]: https://codepen.io/
[26]: https://i.imgur.com/cBhmkSm.jpg
[27]: https://codesandbox.io/
[28]: https://i.imgur.com/ofag5Kf.jpg
[29]: https://i.imgur.com/O3rXDiF.jpg
[30]: https://i.imgur.com/N45ca8A.jpg
[31]: /2018/10/09/Hackoberfest-2018-support-open-source-earn-limited-edition-t-shirt/
[32]: https://github.com/calpa/gatsby-starter-calpa-blog/
[33]: https://i.imgur.com/6tBhPRx.jpg
