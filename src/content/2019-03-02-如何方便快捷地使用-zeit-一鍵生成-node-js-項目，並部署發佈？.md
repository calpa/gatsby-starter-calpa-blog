---
slug: /how-to-deploy-nodejs-application-via-zeit-free-plan
title: 如何透過 ZEIT 方便快捷地部署免費的 Node.js 項目？
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
id: a13adea8-84f6-5965-904e-9a2f5a5f1c1e
---

## 前言

ZEIT 平台提供了免費的網站空間平台給開發者，我們可以透過 ZEIT 平台來部署 Node.js, Express.js, Koa.js 等應用。如果你有寫過 Node.js 應用，又想找個免費空間部署這些應用的話，那麼 ZEIT 會是一個不錯的選擇。

![Get started from templates](https://i.imgur.com/BUOnJID.png)

如果你沒有註冊過 ZEIT 的話，那麼你可以到 https://zeit.co/ 註冊一下。

## 註冊流程

在過去，基本上需要 5-10 分鐘，超過 10 個步驟才能完成整個新人註冊流程。而這次更新後，流程只有 4 個部分：

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

它會提示當前的 Now 版本信息，然後讓你從超過 40 個模板選擇其中一個模板。

比如說我現在正在學習 koa.js，想要部署 koa.js 應用，那麼我可以選擇 nodejs-koa。

這個命令行工具就會自動生成一個 `index.js`，返回 'Hello from koa.js!' 的字句的 DEMO。

```js
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
  ctx.body = 'Hello from koa.js!';
});

module.exports = app.callback();
```

命令行工具會同時生成 `now.json`，它是項目當前在平台上面的設置。

```json
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@now/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/index.js" }]
}
```

上面是說項目使用 now 第二個版本，然後構建的時候需要使用 `@now/node` 來構建 `index.js`，然後把所有路徑路由到 `index.js`，也就是我們的主應用裡面。

你可以在[這個 ZEIT 的官方文檔](https://zeit.co/docs/v2/deployments/configuration)找到更多關於 `now.json` 的配置項描述。

## 部署

我們只需要在命令行輸入 `now` 命令就可以了。

這一次使用的命令如下，總共不超過十行輸入：

![All](https://i.imgur.com/0aBGW0B.jpg)

ZEIT 會對於我們提交的這個版本生成一條唯一的地址，比如說 https://nodejs-koa-2uzmvez4q.now.sh/

打開之後就會見到 `Hello from koa.js!` 的返回信息。

## ZEIT 平台計劃

ZEIT 2.0 版本提供了兩個計劃，免費和付費。

### 免費

![Imgur](https://i.imgur.com/kZbGWlA.png)

免費的計劃允許有無限次請求平台的數量，使用第三方域名，每個月免費 100 GB 流量。

每天可以有 1000 次的構建指令，構建項目所需要的費用也是不需要的。

不過它對於每一次匿名函數所運行的時間有所限制，每一次不能超過 10 秒。而每天只會輸出 1000 行的日誌。每個文件最大只能夠是 100MB，總共佔用的地方不能超過 100GB。

那麼對於規模小的項目來說，其實也用不著那麼大的空間，所以一般來說不會超出上限。

如果你喜歡這個平台的話，而又覺得上述的限制影響了項目的功能，那麼你可以使用付費的無限計劃。起步價為一個月美金 \$0.99。

## 後記

筆者最近在學習如何使用 Node.js 打造全棧項目，那麼透過 ZEIT 這個平台，我就可以多多寫 Node.js 應用了。

## 參考資料

1. [Introducing Quick Start and New Onboarding Process](https://zeit.co/blog/introducing-quick-start-and-new-onboarding-process)
