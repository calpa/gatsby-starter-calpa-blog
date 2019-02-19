---
templateKey: blog-post
id: 9f0a92e6be07e6513b33a4dd292e77e4
title: "Gitalk Error: Validation Failed. 442 報錯解決方法"
slug: /2018/03/10/gitalk-error-validation-failed-442-solution/
date: 2018-03-10T03:48:03.125Z
description: "最近忙著大學的事情，少了時間寫博客文章。可是沒想到在過去那一篇文章發佈之後，就遇到 Gitalk 評論區出現 Error: Validation Failed. 這樣的問題，在 Github 上面和網友討論之後，想出了一個解決方法，希望可以拋磚引玉。"
tags:
  - 閱讀
  - JavaScript
---

## 前言

最近忙著大學的事情，少了時間寫博客文章。可是沒想到在過去那一篇文章發佈之後，就遇到 Gitalk 評論區出現 `Error: Validation Failed.` 這樣的問題，在 Github 上面和網友討論之後，想出了一個解決方法，希望可以拋磚引玉。

## 問題

![Request Payload](https://i.imgur.com/G3fhUVV.jpg)

Github 更新了關於 Issue 字數的限制，利用 location.pathname 的話創建 Issue 的 Tag 的話，很容易超過 50 字。

## 方法

這是原本的配置，也是 Github Repo 上面的入門方法。

```js
const gitalk = new Gitalk({
  clientID: "Github Application Client ID",
  clientSecret: "Github Application Client Secret",
  repo: "Github repo",
  owner: "Github repo owner",
  admin: [
    "Github repo owner and collaborators, only these guys can initialize github issues"
  ],
  id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false // Facebook-like distraction free mode
});
```

### 解決思路

如果直接修改 id 的賦值的話，那麼當 Gitalk 尋找以前的標籤的時候，便會出現找不到 Issue，自動創建一個新討論區的問題。。。

這很明顯不是我們需要的設計，我們是想要繼續運用那一個 Issue。

於是我便想了一下最近的 Issue 和以前的 Issue 的區別，其中一個就是時間的分別。

因為我遇到這個問題是 2018 年 3 月，所以用這個時間分開 id 的賦值就好了，比如把標題 (title) 設置成 id：

```js
const issueDate = "2018-03-01";

if (moment(createdDate).isAfter(issueDate)) {
  id = title;
}
```

這樣的話，其實就可以了。但如果文章的標題很長的話，那又會超出 50 字的限制。。。那麼用 md5 把字數縮短一下就好了。它既帶有唯一的特性，也可以限制字數。

首先安裝 md5 工具: `npm install md5`
然後在你寫入 Gitalk 評論區的地方寫入以下代碼：

```js
import md5 from "md5";

id = md5(title);
```

如果你是使用 React 或者想要觀看代碼更改的話，那麼你可以查看我的 Commit Log： https://github.com/calpa/blog/commit/88c83f66b070655e645581783097f019e6539c0e#diff-b334c7299860c69226f3d8a8f4a36c1f

如果你覺得實用的話，不妨 Star 一下以獲得之後的最新更新。

## 相關鏈接

1. [md5](https://www.npmjs.com/package/md5)
2. [gitalk/gitalk](https://github.com/gitalk/gitalk)
