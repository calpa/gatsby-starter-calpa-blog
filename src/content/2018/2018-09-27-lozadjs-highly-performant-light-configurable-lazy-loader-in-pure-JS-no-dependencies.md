---
templateKey: blog-post
id: lozadjs-highly-performant-light-configurable-lazy-loader-in-pure-JS-no-dependencies
title: lozad.js ﹣ 高性能、無依賴的純 JS 任意元素懶加載插件
slug: /2018/09/27/lozadjs-highly-performant-light-configurable-lazy-loader-in-pure-JS-no-dependencies/
date: 2018-09-27T03:48:03.125Z
description: 為了提升用戶的加載頁面速度，我們可以使用懶加載這個方法。當用戶打開頁面的時候，只需要載入首屏的資源，從而節省流量，提升加載速度。而用戶滾動到圖片佔用位置，瀏覽器才載入圖片資源。利用 `lozad.js`，我們可以簡單容易地懶加載圖片。它是一個可以單獨運行的工具，gzip 後的體積只有 910B，可以說是超輕量的工具庫。除了加載圖片之外，它還可以加載任意元素，例如 iframe，影片。在過去的一年，博客就已經啟動這個懶加載的功能了，也算是通過了眾多不同用戶的考驗了。
tags:
  - 閱讀
---

## 前言

為了提升用戶的加載頁面速度，我們可以使用懶加載這個方法。當用戶打開頁面的時候，只需要載入首屏的資源，從而節省流量，提升加載速度。而用戶滾動到圖片佔用位置，瀏覽器才載入圖片資源。利用 `lozad.js`，我們可以簡單容易地懶加載圖片。它是一個可以單獨運行的工具，gzip 後的體積只有 910B，可以說是超輕量的工具庫。除了加載圖片之外，它還可以加載任意元素，例如 iframe，影片。在過去的一年，博客就已經啟動這個懶加載的功能了，也算是通過了眾多不同用戶的考驗了。

這是官方的介紹：

> Highly performant, light and configurable lazy loader in pure JS with no dependencies for images, iframes and more, using IntersectionObserver API

## 外國友人評價

現在已經有超過 3000 個網站使用 lozad.js，以下是一些在 Github 文檔上面寫的部分例子：

![超過 3000 個網站使用 lozad.js](https://i.imgur.com/1U1ltrd.jpg)

另外，也有人在 Twitter 上面發文推薦使用 lozad.js。

![David Walsh](https://i.imgur.com/HNAJ7Gc.jpg)

![Apoorv Saxena](https://i.imgur.com/BcU4aZR.jpg)

## 安裝方法

1. npm 或 yarn

```shell
npm install --save lozad

yarn add lozad
```

2. CDN

在 head 標籤裡面加入下面代碼就可以了。

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js"></script>
```

## 使用方法

如果你已經安裝好的話，你可以使用 `import/require` 加載這個工具。

```js
import lozad from "lozad";

var lozad = require("lozad");
```

如果你是使用 CDN 的話，你可以在 `window.lozad` 裡面找到它。

1. 把你的需要懶加載的元素加一個 `lozad` 的 class

```html
<img class="lozad" data-src="image.png" />
```

2.1. 直接使用

```js
const observer = lozad(); // 默認使用 '.lozad' 選擇器
observer.observe();
```

2.2. 傳入一個元素 (Element)：

```js
const el = document.querySelector("img");
const observer = lozad(el);
observer.observe();
```

2.3. 傳入一堆節點：

```js
const el = document.querySelectorAll("img");
const observer = lozad(el);
observer.observe();
```

在第二個參數，你可以使用自定義設定：

```js
const observer = lozad(".lozad", {
  rootMargin: "10px 0px",
  threshold: 0.1
});
observer.observe();
```

## 生命週期

我們也可以自定義加載元素時使用的回調，例如 `load` 和 `loaded` 兩種狀態。

### 加載

```js
lozad(".lozad", {
  load: function(el) {
    console.log("loading element");

    // 自定義加載圖片
    el.src = el.getAttribute("data-src");
  }
});
```

### 加載完畢

```js
lozad(".lozad", {
  loaded: function(el) {
    el.classList.add("loaded");
  }
});
```

## 再次加載

如果你改動過 DOM 的話，可以再次調用 `observer.observe()` 來觀察新增元素。

```js
observer.observe();
```

## 例子

### 自適應圖片

你可以使用 `data-srcset` 來加入不同的圖片大小，適應不同設備。

```html
<!-- responsive image example -->
<img class="lozad" data-src="image.png" data-srcset="image.png 1000w, image-2x.png 2000w" />
```

### 背景圖片

只需要加入 `data-background-image` 就行。

```html
<!-- background image example -->
<div class="lozad" data-background-image="image.png">
</div>
```

### iframe

只需要加 `lozad` 的 class。

```html
<iframe data-src="embed.html" class="lozad"></iframe>
```

## 兼容性

由於它底層使用 IntersectionObserver，所以可以直接支持的瀏覽器比較少，不過對於我這個博客而言，大部分的用戶都可以支持這個 API。

![Imgur](https://i.imgur.com/TPZgcgN.jpg)

如果網站要支持比較舊的設備的話，就需要加入 polyfill。

使用 Polyfill 之後，可以支持更多瀏覽器，甚至是 IE7 和 Safari 6。

![Polyfill](https://i.imgur.com/VOssCA8.jpg)

### 安裝方法

也很簡單，只需要使用下面代碼安裝就行。

```shell
npm install intersection-observer
```

```html
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
```

## 後記

其實在你閱讀我的博客文章的時候，就已經使用了這個工具來加載圖片了。

如果你想觀看效果的話，你可以重新載入一下博客頁面。

## 參考資料

1. [ApoorvSaxena/lozad.js](https://github.com/ApoorvSaxena/lozad.js)
1. [Can I use IntersectionObserver ?](https://caniuse.com/#feat=intersectionobserver)
1. [IntersectionObserver polyfill](https://www.npmjs.com/package/intersection-observer)
