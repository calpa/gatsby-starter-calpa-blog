---
templateKey: blog-post
id: 20181022a
title: "網站性能調優開發工具: Lighthouse, Puppeteer 以及進階部分丨 Google 開發者大會 2018"
slug: /2018/09/24/tooling-for-web-lighthouse-puppeteer-and-beyond/
date: 2018-09-24T03:48:03.125Z
description: 這次 Google 開發者大會請來了 Lighthouse 的工程師 - Eric Bidelman ，分享如何簡單地使用 Lighthouse, Puppeteer 來自動化我們日常的流程。它是一個開源的自動化工具，用於改進網絡應用質量。您只需要提供網址，它就測試該頁面，並生成頁面性能報告。你可以看看採取哪些措施來改進您的應用。
tags:
  - Google
  - Chrome
  - 前端
  - Puppeteer
---

## 前言

這次 Google 開發者大會請來了 Lighthouse 的工程師 - Eric Bidelman ，分享如何簡單地使用 Lighthouse, Puppeteer 來自動化我們日常的流程。它是一個開源的自動化工具，用於改進網絡應用質量。您只需要提供網址，它就測試該頁面，並生成頁面性能報告。你可以看看採取哪些措施來改進您的應用。

![Imgur](https://i.imgur.com/ARyraks.jpg)

![Imgur](https://i.imgur.com/gHKHkks.jpg)

![Imgur](https://i.imgur.com/pXW7qgy.jpg)

Lighthouse 重視用戶的首次加載頁面速度，頁面首次顯示內容速度，有意義的內容顯示速度，以及可以交互的時間。

![以用戶為中心的績效指標](https://i.imgur.com/J1Fgbxi.jpg)

以一個頁面加載的周期為例，首先頁面會發送第一個字節給用戶，然後顯示一些非空白的圖像，然後顯示有意義的內容，然後展示所有內容，允許用戶點擊或其他操作，然後完結整個加載週期。

![頁面加載週期](https://i.imgur.com/2mme4VN.jpg)

## 使用方法

運行 Lighthouse 的方式有兩種：作為 Chrome 擴展程序運行，或作為命令行工具運行。 Chrome 擴展程序提供了用戶友好的界面，方便讀取報告。而命令行工具允許您將 Lighthouse 集成到持續集成系統。

### 開發者工具

你只需要打開 Chrome 的開發者工具，點擊 `Audits`，然後就可以看到 Lighthouse 界面：

![DevTools](https://i.imgur.com/DQwskEa.jpg)

### 擴展程序

你可以到 [chrome web store][1] 下載並安裝 Lighthouse Chrome 擴展程序。

![Chrome Extension](https://i.imgur.com/KvuQ16h.jpg)

### 命令行工具

除了使用瀏覽器之外，你也可以使用命令行工具來調試你的網站。

![Node CLI](https://i.imgur.com/X4fpanA.jpg)

需求：Node.js >= 5

1. 全局安裝 lighthouse

```
npm install -g lighthouse
```

1. 然後輸入你的頁面

```
lighthouse https://example.com
```

lighthouse 會自動生成 HTML 報告，你也可以使用 JSON 格式。

![Report](https://i.imgur.com/X1lxLiL.jpg)

## 自動化部分

你也可以利用 TravisCI 來自動分析改動後的代碼對於頁面性能的影響。

![Github + Travis](https://i.imgur.com/R0OKQAr.jpg)

![結果](https://i.imgur.com/RHvgA2y.png)

你只需要在 `.travis.yml` 裡面加入以下代碼：

```yml
language: node_js
script:
  - npm run lint
  - npm run build
after_success:
  - ."./travis/deploy_pr_gae.sh"
  - export LH_MIN_PASS_SCORE=96
  - export LH_TEST_URL=https://your.staging.server.com/
  - node travis/runlighthouse.js $LH_TEST_URL $LH_MIN_PASS_SCORE
```

更多詳情可以觀看講師在 Github 上面的分享：[ebidel/lighthouse-ci][2]

## Puppeteer

![Puppeteer](https://i.imgur.com/vwN5JcX.jpg)

### 底層

在談 Puppeteer 之前，我們需要提到上面是 `Headless Chrome`。簡單來說，它是一個沒有視圖層的谷歌瀏覽器。

![Headless Chrome](https://i.imgur.com/ktY3lpv.jpg)

它允許你使用最新的瀏覽器來測試頁面，使用所有最新的屬性，比如說 CSS Grid 格局，Web 推送通知等。

最重要的是，它暴露開發者工具的可編程接口，比如說網絡狀況，模擬設備，代碼覆蓋率。

![DevTools Protocol](https://i.imgur.com/vMo88ml.jpg)

例如你可以打開一個 WebSocket，然後監聽瀏覽器發生了什麼操作，比如說 CSS 的 `getStyleSheetText`，DOM 的`markUndoableState`等。

你也可以到官網閱讀更加豐富的文檔：https://chromedevtools.github.io/devtools-protocol/

### 實戰部分

大部分你手動在瀏覽器裡面做的事情，它都可以做到。例如：

1. 截圖並生成 PDF
2. 自動填寫表格，UI 測試，鍵盤輸入
3. 測試 Chrome 插件

### 安裝方法

![Imgur](https://i.imgur.com/XxzcQK9.jpg)

它會下載最新版本的 Chromium，以及暴露封裝好的接口出來給開發者使用。

值得注意的是，它的源碼有很多 `async/await` 的操作，你也可以這樣操作你的代碼。

```
npm i puppeteer --save
```

講師也提供了很多例子，方便學習使用 Puppeteer。

### 截屏

![PPTR 101: 截屏](https://i.imgur.com/x5djmV4.jpg)

比如說我要把 `https://example.com` 頁面截圖，保存為 `example.png`。我只需要寫幾行代碼
：

```js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
```

### 頁面數據

你只需要使用 `page.metrics()` 方法就可以了，它會返回一個頁面數據對象。

![頁面數據](https://i.imgur.com/repZUj6.jpg)

### 代碼覆蓋率

![代碼覆蓋率](https://i.imgur.com/Orkl2hI.jpg)

你可以使用 `page.coverage` 裡面的方法 `startJSCoverage()`，`startCSSCoverage()` 來開始測試覆蓋率。以及使用 `stopJSCoverage()`, `stopCSSCoverage()` 來結束測試。

### 攔截網絡請求

![Youtube](https://i.imgur.com/npNy9qb.jpg)

你可以攔截圖片的請求，甚至是把圖片的請求換成其他請求，例如 http 直接上 https，或圖片換成佔位圖。

### 生成報告

![生成 PDFs](https://i.imgur.com/kmTHWVM.jpg)

你可以通過代碼生成 PDF，例如使用`page.pdf()` 方法。

更多用法可以到官網查閱 [pdf 章節](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions)

## PPTRAAS

以上這些個案都是一些重複出現的日常例子。 [Puppeteer as a service][3] 就把以上這些代碼做了封裝，只需在 url 後續加入 `url` 參數，便可使用服務。

![截圖](https://i.imgur.com/im579Z8.png)

例如你可以使用 `https://pptraas.com/screenshot?url=https://example.com/` 來截圖。

更多例子可以到 [Puppeteer as a service][3] 來使用服務。

## 其他優質的工具

![NDB](https://i.imgur.com/Y0sXMNl.jpg)

Node Debugger 可以讓你打開瀏覽器裡面的開發者工具來調試 Node 程序。

![Page Speed Insights](https://i.imgur.com/w4mVEpe.jpg)

Page Speed Insights 可以讓你透過谷歌的平台來測試裡的網站，並生成報告。

## 後記

這次可謂乾貨滿滿，收穫豐富。我之前以為這些工具過於專業，艱澀難懂，沒想到只需要按幾個按鈕，寫幾行代碼，甚至不需要寫代碼便可以測試自己的網站。

就讓我好好地利用這些工具來優化我的[個人博客][4]吧（笑

## 參考資料

1. [Github - ebidel/lighthouse-ci][2]
1. [Github - GoogleChrome/lighthouse][5]
1. [Puppeteer as a service][3]
1. [Tools for Web Developers - Lighthouse][6]

[1]: https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en
[2]: https://github.com/ebidel/lighthouse-ci
[3]: https://pptraas.com/
[4]: https://calpa.me/
[5]: https://github.com/GoogleChrome/lighthouse
[6]: https://developers.google.com/web/tools/lighthouse/

以下為掘金上面的谷歌開發者大會專欄（只有簡體）：

![](https://user-gold-cdn.xitu.io/2018/9/23/166062d49459b3cd?w=1280&h=200&f=png&s=50510)

[閱讀更多 Google 開發者大會 2018 技術乾貨](https://juejin.im/e/gdd)
