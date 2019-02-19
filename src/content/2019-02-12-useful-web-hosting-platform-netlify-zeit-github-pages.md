---
templateKey: blog-post
id: 20190212r
title: 那些超好用的全棧項目部署構建平台 - Netlify, ZEIT
slug: /2019/02/12/useful-web-hosting-platform-netlify-zeit-github-pages/
date: 2019-02-17T03:48:03.125Z
description: 如果你想要部署自己的前端項目的話，那麼 Netlify 提供了一個一站式的解決方法，讓你可以持續部署，以及自動開啟 HTTPS。如果你想要部署 Node.js 應用的話，那麼 ZEIT 會是另外一個解決方案。
tags:
  - Nelify
  - ZEIT
---

## 前言

如果你想要部署自己的前端項目的話，那麼 Netlify 提供了一個一站式的解決方法，讓你可以持續部署，以及自動開啟 HTTPS。如果你想要部署 Node.js 應用的話，那麼 ZEIT 會是另外一個解決方案。

## Netlify

![Netlify](https://i.imgur.com/U8fCFmE.jpg)

Netlify 提供一站式的構建，部署靜態網站。它可以實現秒級部署項目，只需要完成以下三步驟：

1. 授權 GitHub / Git 倉庫
2. 輸入構建設定
3. 點擊構建按鈕

![Imgur](https://i.imgur.com/jQD3pVh.jpg)

或者你可以使用[這個鏈接](https://app.netlify.com/start/deploy?repository=https://github.com/calpa/gatsby-starter-calpa-blog)來體驗一下如何使用 Netlify 來一分鐘完成部署現代化博客系統的工序。

### 授權連接你的 Git 倉庫

透過鏈接 Git 倉庫可以做到持續部署，也就是當你修改代碼，那麼就可以自動構建新版本。

![第一步](https://i.imgur.com/AjbTNf6.jpg)
可以是 Github，GitLab，或者是 Bitbucket

![Imgur](https://i.imgur.com/3C89msJ.jpg)

![Imgur](https://i.imgur.com/VtTb6sk.jpg)

### 輸入構建設定

![Imgur](https://i.imgur.com/2Y1kzj6.jpg)

舉個例子：
分支用 `master`，構建命令用 `npm run build`，構建完成後的文件夾是 `public`（有些項目使用 `dist`）

繼續按下一步，讓 Netlify 自動運行命令並部署你的網站

### 進階部署配置

你可以設定環境變量，甚至是使用 `netlify.toml` 來配置。

我在環境配置的地方，把秘鑰和獲取數據的地址加上，那麼就可以獲取遠端服務器上的數據。

### 主界面

![Imgur](https://i.imgur.com/xQ82GIC.jpg)

在主界面，我可以看到當前的線上環境的部署日期，比如說上圖顯示項目從 Github 獲取代碼，最後更新日期是 1 月 19 日。

Netlify 也會對於 master 分支之外的其他分支進行部署，如果你是使用多分支開發流程的話，那麼你可以一邊開發，一邊看到項目在構建之後的效果。

### 構建項目

![log](https://i.imgur.com/X04VxNZ.jpg)

如同在本地構建項目一樣，Netlify 是即時構建，然後輸出一模一樣的日誌，方便排查問題。

![log 2](https://i.imgur.com/LptnIJk.jpg)

而構建完成之後，如果是成功構建的話，那麼你就可以點擊右上角的 Preview 按鈕，然後跳到預覽網站。

![Preview](https://i.imgur.com/6FGoBUq.jpg)

### 一鍵上線

![Imgur](https://i.imgur.com/tVSZYk9.jpg)

回到部署頁面的頂部，你會看到 Deploy Successful 的字，表示已經部署成功。

如果你滿意當前的效果的話，那麼你就可以點擊 Publish deploy 的按鈕，一鍵把線上環境切換到當前版本。

### 自動部署

當我修改代碼，然後 git push 上去倉庫，那麼 Netlify 就可以自動獲取代碼，然後部署一個版本。非常方便。

### 多部署環境

當我修改代碼之後，我希望能夠有線上環境，可以透過 URL 直接訪問，查看效果。那麼 Neltify 會為每一個環境賦予獨立的地址，你可以將這些地址直接發給你的技術顧問，獲取意見

### AB 測試

![Imgur](https://i.imgur.com/BujuXfi.jpg)

Nelify 可以將流量自動分配到不同的分支上，那麼你就可以嘗試 AB 測試，甚至是多分支測試。

對於要試驗某些功能的效果，比如說引流，轉化，那麼 AB 測試會幫助不少。

### ZEIT (Now)

![ZEIT](https://i.imgur.com/ZzxM0Y8.jpg)

雖然 Netlify 提供了一個構建，部署靜態網站的方案，但我想再進一步，可以部署 Node.js 應用，比如說作為服務器返回某些網站的數據，以 JSON 格式。

那麼利用 ZEIT，我就可以寫一些 lambda function，直接讀取接口並返回數據，非常方便。

![ZEIT](https://i.imgur.com/Mci9HDR.jpg)

它是基於無服務器平台的網站部署平台。除了基本的部署 React 應用，我們還可以部署 Node.js 應用。

#### Node.js 應用

比如說我要使用 Node.js 來反饋，那麼我直接寫代碼就可以了。

```
module.exports = (req, res) => {
  res.end('Hello, World');
}
```

#### Express 應用

構建一個 Express 應用也是非常方便：

首先建立一個 `express/index.js`

```
const app = require('express')();
app.get('*', (req, res) => {
  res.send('Hello from Express.js!');
});
app.listen();
```

然後再 `now.json` 將以上代碼改為匿名函數，按需加載。

```
{
  "version": 2,
  "builds": [{ "src": "*/index.js", "use": "@now/node-server" }]
}
```

你可以訪問 [這個鏈接](https://my-express-project-pugp5a7l8.now.sh/express/) 來看到服務器返回 `Hello from Express.js!`

### One More Thing - Github Pages

![Github Pages](https://i.imgur.com/QXHqnPL.jpg)

如果你只是想寫寫 HTML，改一下模板就把事情做完，那麼你可以直接把 Github 倉庫當成文件上傳平台。Github Pages 可以將 Github 倉庫變為展示平台，只需要拖拉你的文件到網頁上面。

如果你使用的項目名稱是 `calpa.github.io` 的話，那麼你的 Github Pages 提供的地址將會是 `calpa.github.io`。如果你使用的項目名稱是其他的話，比如說 resume，那麼你的地址將會是

還記得一開始製作前端網站的時候，那些網站都是很簡單的一些單頁面應用，只有一個 html 文件，可能有一個 css 文件。直接寫 Bootstrap 的 CSS 樣式就可以解決問題。

於是，我直接把 index.html 上傳到 Github 倉庫後，其他用戶就可以訪問網站了。

## 後記

筆者現在使用 Netlify 部署自己的博客。對比起早期使用的 Github Pages，Netlify 可以鎖定版本，讓我放膽去修改代碼，無需擔心修改後錯誤版本會直接到線上環境。而且萬一有問題，可以一鍵更改博客地址對應的環境，達到秒級回歸舊版本。

## 參考資料

1. [8 React Application Deployment and Hosting Solutions for 2019](https://blog.bitsrc.io/8-react-application-deployment-and-hosting-options-for-2019-ab4d668309fd)
