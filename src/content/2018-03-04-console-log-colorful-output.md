---
templateKey: blog-post
id: 20180304a
title: 美化 console.log 輸出
slug: /2018/03/04/about-calpa-liu/
date: 2018-03-04T03:48:03.125Z
description: console.log() 這一個方法可以說是前端工程師最常用的調試方法之一。當我在研究音樂播放器 Aplayer 源碼的時候，發現其中有一行有趣的代碼，可以在 console 裏面輸出自帶顏色的圖案，故在此記錄一下。
tags:
  - console
  - Google Chrome
  - JavaScript
---

## 前言

console.log() 方法可以說是前端工程師最常用的調試方法之一。當我在研究音樂播放器 Aplayer 源碼的時候，發現其中有一行有趣的代碼，可以在 console 裏面輸出自帶顏色的圖案，故此記錄一下。

## 方法

簡單來說就是插入 `%c` 這一個替換符，之後的句子便會加上相對應的樣式。

```javascript
console.log(
  `${"\n"} %c CALPA %c https://calpa.me ${"\n"}${"\n"}`,
  "color: #6cf; background: #030307; padding:5px 0;",
  "background: #6cf; padding:5px 0;"
);
```

然後你打開 console 便會看到這個結果：
![Colorful Logger](https://i.imgur.com/VoxnwAJ.jpg)

另外一個例子：

```javascript
console.log(
  "This is %cMy stylish message",
  "color: yellow; font-style: italic; background-color: blue;padding: 2px"
);
```

![Imgur](https://i.imgur.com/cAOYrrn.jpg)

## 備註

以上代碼已注入到博客系統中，有興趣查閱代碼的同學可以查看[源碼部分](https://github.com/calpa/blog/blob/master/gatsby-browser.js)。

## 參考資料

1. [Console - MDN](https://developer.mozilla.org/en-US/docs/Web/API/console)
2. [MoePlayer / APlayer](https://github.com/MoePlayer/APlayer/blob/master/src/js/index.js)
