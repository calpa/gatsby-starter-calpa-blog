---
templateKey: blog-post
id: 20180328a
title: 知乎無限 live 數據流網站
slug: /2018/03/28/zhihu-unlimited-lives-website/
date: 2018-03-28T03:48:03.125Z
description: 一直收聽知乎無限 live 的時候，我都會想：如何才能更有效率地收聽這些計畫內的 live 呢？於是我心血來潮，把無限 live 的資料拿了下來，然後做一個數據流的網站。這個網站展示和源碼已經放在 Github。這個項目可能適合那些喜歡看到很多數據的同學。。。
tags:
  - 閱讀
---

## 前言

一直收聽知乎無限 live 的時候，我都會想：如何才能更有效率地收聽這些計畫內的 live 呢？於是我心血來潮，把無限 live 的資料拿了下來，然後做一個數據流的網站。這個網站展示和源碼已經放在 Github。這個項目可能適合那些喜歡看到很多數據的同學。。。

![Overview][2]

## 主要功能

1. 展示所有無限 live 計畫下面 live 資料，包括：日期，費用，參加人數，分數，以及講者。
1. 提供過濾名稱功能
1. 提供每頁展示特定資料數量的選項（10,20,100）。

## 數據庫

透過簡單的 nodejs 腳本來獲取知乎 API，並儲存到 [zhihu-unlimited-live][3]

[1]: https://github.com/calpa/zhihu-unlimited-web
[2]: https://i.imgur.com/TaTf7dq.jpg
[3]: https://github.com/calpa/zhihu-unlimited-live
