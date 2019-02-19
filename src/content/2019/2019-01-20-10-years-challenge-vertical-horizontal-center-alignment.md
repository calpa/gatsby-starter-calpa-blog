---
templateKey: blog-post
id: 20190120q
title: 十年挑戰之水平垂直置中
slug: /2019/01/20/10-years-challenge-vertical-horizontal-center-alignment/
date: 2019-01-20T03:48:03.125Z
description: 相比起當年的水平置中手法，現在達到相同效果的方法多了很多，例如 Flex, Grid 等。就讓我們趁著 Facebook 回顧當年今日的浪潮重溫一下吧。
tags:
  - CSS
  - 回顧
---

## 前言

相比起當年的水平置中手法，現在達到相同效果的方法多了很多，例如 Flex, Grid 等。就讓我們趁著 Facebook 回顧當年今日的浪潮重溫一下吧。

## HTML 代碼

這裡我們用的 HTML 代碼很簡單，只有一個父組件和一個子組件。

```html
<div class="container">
	<div class="child">
		2008<br/>
		絕對定位
	</div>
</div>
```

### 2009 版本

![2009](https://i.imgur.com/6mShkGv.jpg)

我們可以使用父組件絕對定位，加子組件相對定位，同時改變子組件的 top 位置，來垂直置中。然後用 text-align: center 來水平置中。

```scss
.container {
  width: 300px;
  height: 300px;
  background: white;
  border: 1px solid black;

  position: relative;

  .child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
  }
}
```

[Codepen 參考鏈接](https://codepen.io/calpa/pen/pqMNBN?editors=1100)

### 2019 版本

方法一：

修改父組件為 flex，加 justify-content: center 達到水平置中，align-items: center 達到垂直置中，混合一起就是水平垂直置中了。

![Imgur](https://i.imgur.com/SNCmkbG.jpg)

CSS 代碼如下：

```scss
.container {
  width: 300px;
  height: 300px;
  background: black;

  display: flex;
  // justify-content: center;
  // align-items: center;

  .child {
    margin: auto;
    color: white;
  }
}
```

[Codepen 參考鏈接](https://codepen.io/calpa/pen/LMwbwg?editors=0100)

### One more thing

![Imgur](https://i.imgur.com/szd71iY.jpg)

相比起十年前的 JavaScript 生態，現在的發展可以說是完全不同了。。。
