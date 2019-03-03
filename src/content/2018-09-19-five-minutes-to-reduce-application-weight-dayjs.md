---
templateKey: blog-post
id: 5j0nC7bLx6IQiW8aUAAoo4
title: 如何使用輕量級的 day.js 處理複雜日期？
slug: /2018/09/19/five-minutes-to-reduce-application-weight-dayjs/
date: 2018-09-19T03:48:03.125Z
description: day.js 可以提供處理日期的方法，並且和 Moment.js 擁有一模一樣的方法。使用輕量 day.js 能夠大大省下用戶需要加載的體積，加速網站加載速度。
tags:
  - JavaScript
  - 前端
---

## 前言

day.js 可以提供處理日期的方法，並且和 Moment.js 擁有一模一樣的方法。使用輕量 day.js 能夠大大省下用戶需要加載的體積，加速網站加載速度。

## 特點

> Moment.js 的 2kB 輕量化方案，擁有同樣強大的 API

> Day.js 是一個輕量的處理時間和日期的 JavaScript 庫，和 Moment.js 的 API 設計保持完全一樣. 如果您曾經用過 Moment.js, 那麼您已經知道如何使用 Day.js

不僅這樣，它還兼容全瀏覽器，支持 Chain 操作，不會修改原本的數據。

![Imgur](https://i.imgur.com/Ei7qV1q.jpg)

## 安裝

1. 透過 NPM:

```shell
npm install dayjs --save
```

```
import dayjs from 'dayjs'
// const dayjs = require('dayjs');
dayjs().format();
```

2. CDN

```
<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/dayjs"></script>
<script>
  dayjs().format();
</script>
```

## 如何使用

Day.js 和 Moment.js 的 API 設計保持完全一樣。

如果你使用過後者的話，你也可以毫無壓力轉移到 Day.js。

如果你沒有使用過的話，這裡會是一個簡單的日期處理例子：

```js
dayjs("2018-09-19"); // 解析

dayjs().format("{YYYY} MM-DDTHH:mm:ss SSS [Z] A"); // 加格式

dayjs()
  .set("month", 3)
  .month(); // 把月份改為三月

dayjs().add(1, "second"); // 加一秒
```

你也可以透過[官方文檔](https://github.com/iamkun/dayjs/blob/master/docs/en/API-reference.md)查閱 API。

### 國際化 I18n

需手動加載，按需加載

```js
import "dayjs/locale/es"; // 按需加載

dayjs.locale("es"); // 全局使用西班牙語

dayjs("2018-05-05")
  .locale("zh-tw")
  .format(); // 局部使用繁體中文
```

如果你有興趣了解源碼的話，可以打開 `/src/locale/`。

這裡是繁體中文的在地化處理：

```js
import dayjs from "dayjs";

const locale = {
  name: "zh-tw",
  weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
  weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
  weekdaysMin: "日_一_二_三_四_五_六".split("_"),
  months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
    "_"
  ),
  monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
  ordinal: n => `${n}日`,
  relativeTime: {
    future: "%s內",
    past: "%s前",
    s: "幾秒",
    m: "1 分鐘",
    mm: "%d 分鐘",
    h: "1 小時",
    hh: "%d 小時",
    d: "1 天",
    dd: "%d 天",
    M: "1 個月",
    MM: "%d 個月",
    y: "1 年",
    yy: "%d 年"
  }
};

dayjs.locale(locale, null, true);

export default locale;
```

### 插件

另外，它允許加載插件，你了解過之後也可以自己寫一個插件

```js
import advancedFormat from "dayjs/plugin/advancedFormat"; // 按需加載插件

dayjs.extend(advancedFormat); // 使用插件

dayjs().format("Q Do k kk X x"); // 使用擴展後的API
```

## 實戰部分

我的博客已經使用 `dayjs` 作為日期處理工具。
以本篇文章的日期為例：

1. RSS 訂閱 (feed.xml)

```js
const url = `${site.siteMetadata.siteUrl}/${dayjs(edge.node.createdDate).format(
  "YYYY/MM/DD"
)}/${edge.node.url}`;

const date = dayjs(edge.node.createdDate).format("MMMM DD, YYYY, h:mm A");
```

2. 博客文章日期

```js
const date = dayjs(createdDate).format("YYYY/MM/DD");
```

3. 內文日期

```js
const date = dayjs(createdDate).format("YYYY/MM/DD");
```

4. Gitalk 評論區
   從上一篇文章可以得知，2018 年 3 月 1 日 Github 有標籤字數限制。

另外，我在 2018 年 9 月 9 日後直接使用 id 作為查詢的 id。

```js
const issueDate = "2018-03-01";
const idDate = "2018-09-09"; // 修理遺留代碼錯誤
const { createdDate, title } = this.data.content.edges[0].node;
let { id } = this.data.content.edges[0].node;

let finalTitle = title;
if (dayjs(createdDate).isAfter(issueDate)) {
  finalTitle = `${title} | Calpa's Blog`; // For Create Github Issue

  if (dayjs(createdDate).isBefore(idDate)) {
    id = md5(title);
  }
} else {
  const pathname = getPath();
  const lastSymbol = pathname[pathname.length - 1] === "/" ? "" : "/";
  id = `${url}${pathname}${lastSymbol}`;
}
```

## 後記

要輕量化你的網站，其實可以很容易。除了在 Webpack 上面下手，也可以從選擇素材入手。

## 參考資料

1. [Github - iamkun/dayjs](https://github.com/iamkun/dayjs)
