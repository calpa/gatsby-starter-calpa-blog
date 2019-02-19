---
templateKey: blog-post
id: 20170702a
title: "Uncaught ReferenceError: regeneratorRuntime is not defined 解決方法"
date: 2018-07-29T03:48:03.125Z
slug: /2018/07/29/regenerator-runtime-is-not-defined/
description: async/await 能讓開發者享受異步操作的快感，解決回調地獄的問題。然而，編譯器對於 async/await 的編譯有時候卻不和我們想象中的一樣。透過安裝正確插件，或改回 Promise 版本，我們可以解決這個問題。
tags:
  - JavaScript
---

## 前言

async/await 能讓開發者享受異步操作的快感，解決回調地獄的問題。然而，編譯器對於 async/await 的編譯有時候卻不和我們想象中的一樣。透過安裝正確插件，或改回 Promise 版本，我們可以解決這個問題。

## 解決方法

之前在[Gatsbyjs async/await 更新報錯解決方法](/2018/03/21/gatsybjs-async-await-upgrade-bug-solution/) 就已經提及過，使用 babel-plugin-transform-runtime 就好了。

```
npm install --save-dev babel-plugin-transform-runtime
```

然後在 `.babelrc` 裡面填寫：

```
{
  "plugins": ["transform-runtime"]
}
```

或加入自定義選項：

```
{
  "plugins": [
    ["transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
  ]
}
```

因為 Babel 會不斷更新，所以具體配置請到官網查閱，或點擊下面的鏈接。

其實你也可以使用`babel-polyfill`，不過它會包含 `regenerator runtime` 及 `core-js`，打包的體積會變得很大。

## 參考資料

1. [babel-plugin-transform-runtime - Babel](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav)
1. [babel-polyfill - Babel](https://babeljs.io/docs/en/babel-polyfill/)
