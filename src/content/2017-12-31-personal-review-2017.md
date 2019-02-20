---
templateKey: blog-post
id: https://calpa.me/2017/12/31/personal-review-2017/
title: 又到了年度總結的季節 ﹣ 我的 2017 前端開發回顧
slug: /2017/12/31/personal-review-2017/
date: 2017-12-31T03:48:03.125Z
description: 從最初的失望與後悔，到最後的興奮與感動，2017年可以算是充滿挑戰與機遇的一年。雖然我依然是一個非科班學生，但是這沒有阻止我轉行成為前端工程師，反而成為向前邁進的動力之一。如果沒有這些經歷，我也不會發現自己對於編程的那份熱愛。。。在此，就讓我回顧一下這一年在自學編程轉行的經歷吧。在開始這篇文章之前，我先戴上頭盔，以防意外。
tags:
  - 前端
  - 回顧
---

## 前言

從最初的失望與後悔，到最後的興奮與感動，2017 年可以算是充滿挑戰與機遇的一年。雖然我依然是一個非科班學生，但是這沒有阻止我轉行成為前端工程師，反而成為向前邁進的動力之一。如果沒有這些經歷，我也不會發現自己對於編程的那份熱愛。。。在此，就讓我回顧一下這一年在自學編程轉行的經歷吧。在開始這篇文章之前，我先戴上頭盔，以防意外。

## 學習 JavaScript

JavaScript 可以說是前端工程師必須學習的語言之一。

一開始的時候，我是跟著知乎上面的一些學習方法，並整理為 [打好 JavaScript 基礎的 6 個步驟](/2017/05/21/learn-javascript-in-six-steps/)。我抱著好奇心的心態在 Facebook 的台灣前端社區裡面發文，沒想到的是，這篇文章吸引了很多讀者，讓我堅定了自己學習的路線。

## 我的博客

![Imgur](https://i.imgur.com/cmJLkkV.png)

這個博客是 2017 年 1 月 時創建的。當時是 Hexo + Github Pages 的靜態構建博客系統來完成，它的概念是很不錯的，把網站的主題和文章分開，要修改主題的時候就直接修改源代碼就行，不會影響到文章。但是還是有一個問題，就是文章需要放置在當前目錄裡面，也就是說沒有做到異地修改文章的功能。

![最初的樣子](https://i.imgur.com/AKVHvQy.png)

網上有一些配置，比如說 Hexo-Admin，我也是有修改一番，但是改著改著，越來越多功能想要添加。

因此我就開始查找其他的解決方法，最初我是沒有用 GatsbyJS 的，因為它使用的 GraphQL 蠻難去學習的。。。

過了一陣子，[React 官網](Reactjs.org) 使用 GatsbyJS，讓我也很好奇到底為什麼會使用它。

博客初版

![Imgur](https://i.imgur.com/gGLl6P4.png)

相關文章：

1. [為什麼要寫技術博客？](https://calpa.me/2017/05/30/why-i-write-blog-post/)
1. [【圖多】《遠征成功﹣﹣一個香港人北上杭州豬場的前端面試之路》](/2017/09/30/hang-zhou-interview-summary/)
1. [2017 年香港開源年會後記](/2017/06/14/hong-kong-open-sources-conference-remarks/)

## 前端框架

不管黑貓白貓，能抓到老鼠的就是好貓。這裡就先簡單說說我對他們的感覺吧。

一開始學習前端開發的時候，我是利用 Angular 去開發小型項目的。在那個戰火紛飛的時代（雖然現在也是），Angular 給我一種大教堂的感覺，可以在裡面找到我所需要的東西，不需要自己去配置那麼多。可能是當時對於 node.js 和 npm 不太了解，所以經常會遇到各種`package 找不到的問題`。

在利用 React 開發網站的時候，感覺 React 很簡單，純潔，給我一種菜市場的感覺。我可以根據需求，去市場自己挑貨。如果看過那些工具上的源代碼，都不喜歡的話，自己寫一個也是可以的。當我在挑貨的時候，便會需要考慮到各方面的因素，比如說是否繼續有人維護，Github 上面的 Stars 數目，npm 每個月下載量等等。

暑假的時候，我到了深圳實習，寫 Vue.js。它確實一個不錯的框架，對於初學者也是非常的友善。

在使用過這些框架之後，我覺得其實框架只是一個輔助的工具，好好地寫代碼才是重點。對於那些選擇困難癥的患者，更加是應該碼上起行。

### 前端工具

在開發網站的過程中，也是對於一些前端的常見工具有了一點的了解。比如說 Webpack, Babel, ESLint。這些也算是標配吧。

相關文章：

- [前端性能優化必備工具清單](https://calpa.me/2017/06/19/front-end-performance-check-list/)

### UI

一開始的話，我是用 Bootstrap 3 來構建一個很普通的網站。詳見 HackJam，當時是直接寫進去 HTML 的。也沒有用什麼框架幫忙。

![HackJam 2016](https://i.imgur.com/38Lsoxs.png)

現在開發的時候，如果可以配置 SCSS 預處理器，我會盡量以 SCSS 代替純 CSS 來寫樣式，因為它可以簡單處理 CSS 比重問題，以及提高代碼複用性。

## 黑客松

我曾經參加八次黑客松，並在微軟舉辦的 ImagineHack 中取得第二名，最受歡迎獎，並在 TechCrunch 2017 黑客松深圳站取得第三名。

作為一個科大學生，參加科大舉辦的比賽也是很正常的吧，賽後寫了 [HackUST 2017 回顧](/2017/04/23/hackUST-2017-hackathon-summary/)。

ImagineHack 比賽時，我是沒有期待自己會獲勝的，畢竟自己初出茅廬，而且那個時候掌握的技能非常有限。這次比賽讓我發現原來參加黑客松是那麼的有趣。

而 TechCrunch 黑客松，則是讓我開啟了前往中國之路。也是之後我到深圳南山工作的伏筆吧。

相關文章：
[參加八次黑客馬拉松的個人體會與總結](/2017/11/06/hackathon-summary/)

### 印象最深刻的事

1. 兼容不同的瀏覽器，例如 IE。

一些非常好用的屬性是不能用的，因為舊版本的 IE 沒有支持這些屬性。

[box-shadow](https://caniuse.com/#search=box-shadow): IE 9

[flex](https://caniuse.com/#search=flex): IE 10, 11 (Partially Supported)

更多的兼容性要求可以在 [Can I use ? 網站](https://caniuse.com/) 裡面查詢。

2. 為什麼 Caps Lock 和 Control 互換了？

![Imgur](https://i.imgur.com/9lIiA7A.png)

### 學習時遇到的趣事

The Nature of Code 教如何利用 p5.js 模擬一些大自然的生命變化。這個時候，我發現原來用 Mac 寫代碼是可以那麼有趣的。

互聯網上有非常多的教學，免費教人學習編程。例如 MIT, Harvard，它們將課程的影片, 素材以及功課上傳，並且可以互相交流。

## 展望 2018 年

1. 用心把 SICP 看完，做完。
1. 繼續學習 (CI/CD)
1. Node.js
1. 做一個全棧的項目
1. 研究研究白色相簿 2

## 延伸文章 (2018 年)

- 前端框架
- 前端工具
- 在線學習課堂
- [White Album Font Generator](https://codepen.io/calpa/pen/WdjgzM)

## 參考資料

- [StatCounter Global Stats](http://gs.statcounter.com/)
