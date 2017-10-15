---
title: 項目代碼調試：提問前要做的六個步驟
date: 2017-07-24 21:00
headerImage: ERjLSMf.jpg
headerSize: contain;
headerBackgroundColor: 0b0b0b
tags:
  - 思考
---

上天對於每個地球人都是公平的，每個人都一天只有 24 小時。為什麼有的人會停留不前，有的人卻會不斷有所成長？其中一個原因是當遇到問題時，他們解決問題的方法是非常不同的。同樣是遇到問題，與其伸手，等其他程序員幫助去解決問題，倒不如自己先嘗試各種方法，然後才問人家。。。我會在這篇文章簡單說一下在你提問之前，你可以做的六個步驟。

## 步驟

### 1. 檢查，試驗本地環境

  如果你是和其他人一齊開發項目的話，可能你會遇到 packages 安裝報錯的問題，這個時候，你應該試試安裝packages，例如`npm install`，把現有項目的 packages 更新一下，可能現有的 packages 已經不是最新的，或者有所缺乏。

  另外，你也可以看一下你自己的 npm 和 node 版本，是否因為版本號太低，而導致無法安裝某些 packages。如果是的話，請先確定是否需要用那麼新的 package 版本，然後再更新 node 版本。

### 2. Google / Bing 一下

  ![Google 一下](https://i.imgur.com/1Djy0Gj.png)

  問題就是答案，其實你直接在搜尋引擎搜尋，就會找到這些問題的解決方法。如果你問我一些技術的問題，我很可能會直接叫你 Google，因為有時候第一個搜尋結果就是你的答案。如果你已經找過，但是找不到的話，很大機會是你的搜尋字不對，你可以加一下你的項目的 package，比如說 把 react, bootstrap 等字眼加在搜尋裡面。

### 3. 閱讀官方資料

  ![Calpa's Blog Github Repo](https://i.imgur.com/kmFRumd.png)

  先閱讀 Github上面的 README.md，然後閱讀官網上對於該項目的簡介，使用方法，再看 API。你可以再看一次 Github Repo 的說明，看看有沒有自己沒注意到的地方。你也可以直接進入官網，然後看它對於各個方法，變量的說明。如果你看不到你想要的方法，你可以返回第二步，Google 一下。

### 4. 查看 Issue

  如果你還是搜不到的話，看看人家有沒有遇到類似的問題，並從中獲取靈感。

### 5. 閱讀源代碼

  有時候，開源項目的作者寫得比較匆忙，急著都沒有寫好文檔，以及測試代碼。這個時候，你直接看上面的代碼吧。。。

  如果是部署在 Github 上面的話，可以使用在線代碼搜尋插件，比如說 [Insight.io for Github](https://chrome.google.com/webstore/detail/insightio-for-github/pmhfgjjhhomfplgmbalncpcohgeijonh)。如果你已經把它 clone 下來的話，可以使用流行的編輯器進行全局搜尋，例如 Atom，Sublime。

  ![Insight.io](https://i.imgur.com/OWuA4xP.png)

  另外，你也可以使用 [lambda-view](https://github.com/Jianru-Lin/lambda-view)，閱讀 JavaScript 源代碼時，這個很好用的。
  ![lambda-view](https://i.imgur.com/kmuI2NX.png)

### 6. 出去走走，喝點水

  ![喝點水，休息一下](https://i.imgur.com/oXlUIRt.gif)

  如果你看了網上的解決方法，但覺得無從入手的話，出去走一走，喝一口水，讓大腦休息一下。有時候，我上午想不到的問題，吃個午餐，然後下午就想到解決方法了。

## 禮貌地提出問題

  如果你做了以上的步驟，還是沒有辦法解決問題的話，你可以去 Repo 的 Issue 上面說一下，先不要直接說我找到一個 bug。。。

## 後記

感覺很長時間沒有寫博客了，文筆開始生疏。這一篇文章寫的時間比以前長，可能我要努力一點才行。。。
