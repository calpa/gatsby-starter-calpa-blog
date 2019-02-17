---
templateKey: blog-post
id: 20180907a
title: Google Chrome 69 地址欄隱藏子域名後暴露的安全問題
date: 2018-09-07T03:48:03.125Z
slug: /2018/09/07/google-chrome-69-url-hidden-www-security-issue/
description: 定期更新軟件可以修復其自身的漏洞，即使是 Google Chrome，它的更新也是有安全問題的。在 Chrome 69 的版本裡面，`www` 被認定為 `trivial` 的子域名，因而隱藏了它之前的字眼。雖然可以提升一點用戶體驗，但卻帶來了另外一個風險點。。。
tags:
  - GoogleChrome
  - 地址欄
  - 安全
  - Mac
---

## 前言

定期更新軟件可以修復其自身的漏洞，即使是 Google Chrome，它的更新也是有安全問題的。在 Chrome 69 的版本裡面，`www` 被認定為 `trivial` 的子域名，因而隱藏了它之前的字眼。雖然可以提升一點用戶體驗，但卻帶來了另外一個風險點。。。

## 瀏覽器隱藏域名

> In the Omnibox, hide the scheme and **trivial** subdomains from steady state displayed URLs. Hidden portions are restored during editing. For Mac, this flag will have no effect unless MacViews is enabled. – Mac, Windows, Linux, Chrome OS, Android

這裡是說多功能框（地址欄），會自動隱藏 `scheme` 和不重要的子域名。而這些部分在編輯地址欄的時候會重新出現。

## 問題

然而，瀏覽器隱藏 `https://www` 這個字時，不完整的 url 讓我們無法識別一些網站的正確性，比如說以下的這些例子：

| 網站             | 正確                        | 錯誤                | 顯示             |
| ---------------- | --------------------------- | ------------------- | ---------------- |
| NTP Pool Project | http://www.pool.ntp.org     | pool.ntppool.org    | pool.ntppool.org |
| citibank         | https://www.citibank.com.sg | citibank.com.sg     | citibank.com.sg  |
| tumblr           | https://www.tumblr.com/     | http://m.tumblr.com | tumblr.com       |

![tumblr.com](https://i.imgur.com/qNfNkxV.jpg)

可能你會覺得用戶會很小心地輸入域名，所以隱藏子域名不會構成問題，那麼下面這個例子就是一個很大的問題了：

`http://www.example.www.example.com/` 會被縮寫為 `example.example.com`

![example.com](https://i.imgur.com/xIc1KVo.jpg)

頂部的地址欄會把`www`前面的都刪去，只顯示後面的字，無論是怎麼說，兩個 url 根本不一樣的。

## 解決方法

1. 手動在地址欄輸入`chrome://flags/#omnibox-ui-hide-steady-state-url-scheme-and-subdomains` 禁止 `Omnibox UI Hide Steady-State URL Scheme and Trivial Subdomains`

![chrome://flags/#omnibox-ui-hide-steady-state-url-scheme-and-subdomains](https://i.imgur.com/TrZNfdQ.jpg)

2. 加入討論，改變 Chrome 的默認做法

## 後記

Google Chrome 還是蠻多人用的，一更新就有很多人馬上更新了。我也不例外，雖然是看到地址欄的時候感覺怪怪的，但是沒有做過邊際測試的話，還是沒有發現這個問題的。。。

如果你有什麼想法的話，可以到 Hacker News 裡面留言，或者在下方留言。

## 參考資料

1. [Incorrect transforms when stripping subdomains - Issue 881410](https://bugs.chromium.org/p/chromium/issues/detail?id=881410)
2. [Chrome 69: “www.” subdomain missing from URL - Hacker News](https://news.ycombinator.com/item?id=17927972)
