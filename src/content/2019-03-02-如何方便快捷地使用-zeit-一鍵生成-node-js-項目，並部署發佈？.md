---
slug: now-quick-start-a-simple-way-to-skip-the-boilerplate-and-start-new-projects
title: 如何方便快捷地使用 ZEIT 一鍵生成 Node.js 項目，並一鍵發佈？
date: 2019-03-04T01:00:00.000Z
description: >-
  ZEIT 平台提供了免費的網站空間平台給開發者，我們可以透過 ZEIT 平台來部署 Node.js, Express.js, Koa.js
  等應用。如果你有寫過 Node.js 應用，又想找個免費空間部署這些應用的話，那麼 ZEIT 會是一個不錯的選擇。
tags:
  - ZEIT
  - NOW
  - React
  - 免費
  - 實用
headerImage: 'https://i.imgur.com/Lgfa2Eu.png'
templateKey: blog-post
---
## 前言

ZEIT 平台提供了免費的網站空間平台給開發者，我們可以透過 ZEIT 平台來部署 Node.js, Express.js, Koa.js 等應用。如果你有寫過 Node.js 應用，又想找個免費空間部署這些應用的話，那麼 ZEIT 會是一個不錯的選擇。

![Get started from templates](https://i.imgur.com/BUOnJID.png)

如果你沒有註冊過 ZEIT 的話，那麼你可以到 https://zeit.co/ 註冊一下。

## 註冊流程

在過去，基本上需要超過 5-10 分鐘，操作超過 10 個步驟才能讓新用戶完成整個登錄流程。而這一次的發佈版本，他們簡化了這個流程為 4 個部分：

1. 基本配置

創建你的個人信息，用來展示你的個人專頁和面板

2. GitHub 整合

安裝 GitHub 應用

3. 創建團隊

創建一個 ZEIT 團隊，方便其他人共同協作

4. 創建項目

這個是最後一步，而 ZEIT 平台提供了很多快速開始的模板，例如 React, GatsbyJS, Express, Apollo GraphQL 等。

![Imgur](https://i.imgur.com/7g3lGjp.png)

## 命令行

除了透過網站生成之外，你也可以透過命令行工具：

### 安裝方法

你可以透過 [ZEIT 官網](https://zeit.co/download)提供 Now Desktop 安裝桌面應用。當你安裝的時候，你也一拼安裝命令行工具了。

![Now Desktop](https://i.imgur.com/yVgAhe3.png)

或者是你也可以透過 npm 下載：

```bash
npm install -g now
```

### 使用方法

在命令行輸入 `now init` 就會看到下面的提示：

![now init](https://i.imgur.com/d0Tdhi8.jpg)

它會提示當前的 Now 版本信息，然後讓你選擇超過 40 個模板的其中一個模板。

比如說我現在正在學習 koa.js，想要部署 koa.js 應用，那麼我可以選擇 nodejs-koa。

## 部署

我們只需要在命令行輸入 `now` 命令就可以了。

這一次使用的命令如下，總共不超過十行輸入：

![All](https://i.imgur.com/0aBGW0B.jpg)

ZEIT 會對於我們提交的這個版本生成一條唯一的地址，比如說 https://nodejs-koa-2uzmvez4q.now.sh/

打開之後就會見到 Hello from koa.js! 的返回信息。

## 後記

筆者最近在學習如何使用 Node.js 打造全棧項目，那麼透過 ZEIT 這個平台，我就可以多多寫 Node.js 應用了。

## 參考資料

1. [Introducing Quick Start and New Onboarding Process](https://zeit.co/blog/introducing-quick-start-and-new-onboarding-process)
