---
title: 【翻譯】前端性能優化必備工具清單
tags:
  - Front End
  - Performance
  - Production
  - Check-list
headerImage: Vb56RuU.jpg
headerSize: contain;
headerBackgroundColor: 00d8e4
translator: Calpa
author: Youssouf El Azizi
date: 2017-06-19 20:00:00
backgroundPositionY: 50%
---

在網頁開發的世界裡，尤其是前端開發，我們會用很多時間尋找最好的設計，以及最好的內容。雖然這是沒有錯的，但是，我們會忘記去優化我們的網頁。。。這會讓用戶需要很久的時間，比如說，瀏覽器需要六秒到十秒以上才能完成整個渲染過程。。。

在這篇文章，我會分享優化網頁的檢查清單。如果你覺得我有錯漏的地方，請在下面留言。這張清單會包含一些優化搜尋引擎排名 (SEO) 的技巧，以及減少網頁加載時間的最佳實踐。

> 編者按：很多都是我聽過或從來沒有用過的工具，我還是要學習一個。。。

馬上開始！

## 那些我們忘記的基本功

### Favicon

  請不要忘記為你的網站加上它，它就好像是你的網站的 ID。無論你有沒有 favicon.ico ，用戶的瀏覽器依然會請求它。如果你忘記加上這個檔案，你的網站就會返回 404 Not Found，這會讓瀏覽器面紅。。。所以你要小心一點，避免給予用戶負面的第一印象。要解決這個問題，你可以透過 [Favicon Generator](http://realfavicongenerator.net/) 生成 favicon 和 manifest 檔案。

### Open Graph

  加上社交媒體的 meta 標籤，用戶更好地分享你的文章，同時 Google Ranking 也會提高，你可以使用 [Meta Tags](https://megatags.co/) 產生 Social meta tags。

> 譯者按：產生 Open Graph Meta Tags，我的博客也加上了 Open Graph。

## 圖片優化

### 壓縮圖像
  載入圖片會大幅地延長網頁的加載時間，甚至達到整體網頁載入時間的七成。如果可以的話，請使用 SVG，以及壓縮你的那些精緻圖像。你可以使用 [Compress PNG](http://compresspng.com/) 來幫忙壓縮圖像。


## CSS 優化

### **Autoprefixer**

  解決跨瀏覽器上的 CSS 問題。我們都會在自己喜歡的瀏覽器下寫 CSS 的規矩，而我則是使用 Chrome。雖然如此，你依然需要為這些規矩加上 prefix 來支持所有類型的瀏覽器。 Autoprefixer 會使用現在瀏覽器熱度，對各種屬性支持度的資料，來提供你所需要的 prefix。你可以透過命令行來運用它。

```bash
npm install -g postcss-cli autoprefixer
postcss *.css use autoprefixer -d build
```

你也可以使用 Webpack 設置，或者使用 [Autoprefixer CSS online](https://autoprefixer.github.io/) 。

### **Purifycss**

  刪除項目內沒有用到的 CSS 規矩。它會讀取內容 (HTML/JS/PHP) 和 CSS，然後返回必須的 CSS。它是一個非常有用的工具，如果你是在用 CSS 框架比如說 Bootstrap，這個能夠減少很多的 CSS 文檔大小。

安裝方法：
```
npm install -g purify-css
```

使用方法：
```
purifycss src/css/main.css src/css/bootstrap.css src/js/main.js — min — info — out src/dist/index.css
```

你可以在 purify-css 的 [Github Page](https://github.com/purifycss/purifycss) 中獲得更多資訊。

### minify CSS
  你可以使用 purify-css 或使用網上的[CSS Compressor](http://csscompressor.com/)。

## 減少載入時間
### [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

  PageSpeed Insights 可以用來檢查載入網頁速度，它會分別在手提電話和電腦運行測試。它會使用手提電話的 user-agent，以及 Desktop 的 user-agent。PageSpeed 會檢查網頁時候已經應用網頁的最佳實踐，並提供一個 0﹣100 的分數，同時提供如何提高分數的意見。

### GZIP
  開啟 GZIP 壓縮，是其中一個減少網頁載入速度的最快改善方法。Just Do IT，設置 GZIP，並讓你的用戶享受飛一般的感受，下圖是節省流量的效果圖。

{% img https://i.imgur.com/k7FRiSi.png 500 PICSrush GZIP 測試圖 %}

<center>PICSrush GZIP 測試圖</center>

你可以在[Check GZIP compression](https://checkgzipcompression.com/) 網站中測試你的網站是否已經開啟 GZIP 壓縮功能。

### CDN
  根據[維基百科](https://zh.wikipedia.org/zh-hk/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF)，內容傳遞網路（CDN）是指一種透過互聯網互相連接的電腦網絡系統，利用最靠近使用者的伺服器，更快地傳送檔案。簡單來說，CDN 就是一種網絡上的緩存系統。你可以使用免費的 [CloudFlare](https://www.cloudflare.com/) 來達到這個效果。

> 編者按：你可以用 cdnjs 或其他 cdn。

## 優化平台

### [Sentry](https://sentry.io/welcome/)

  對於前端工程師來說，它是一個非常正的工具。Sentry 檢查在瀏覽器環境下，是否存在任何 uncaught JavaScript exceptions，主動追蹤發生的錯誤，並提供報告。它提供豐富的 API，使得你可以自定義如何在其他地方顯示這些數據。

  它會透過 Email, SMS 或 Slack 通知你，當前端環境發生錯誤時，它亦會提供用戶回應。

### [Google Tag Manager](https://developers.google.com/tag-manager/)

  Google Tag Manager 可以一站式管理你所有會傳送到第三方，例如 Facebook 和 Twitter 的 JavaScript 代碼。透過使用它，你減少網頁的載入時間，以及更加方便地在同一個地方管理 JavaScript 代碼。

<iframe width="100%" height="300" src="https://www.youtube.com/embed/KRvbFpeZ11Y" frameborder="0" allowfullscreen></iframe>

> Thanks for reading! feel free to leave a comment if you think I miss something.

> If you think other people should read this, press the 💚 button, tweet and share the post. Remember to follow me on Medium so you can get notified about my future posts.

## 譯者的話

這次翻譯英文文章，真的是很有趣呢，不過要寫起來感覺沒有自己從零開始寫一篇那麼流暢。

一開始我是去問問人家，可不可以翻譯一下他們的文章？結果就取得同意了。

這次翻譯這一篇文章，讓我了解到很多對我來講是新的工具，比如說 Sentry 以及Google Tag Manager。我還是一個萌新，感覺前端的路還有很長要走啊。。。

{% img https://i.imgur.com/SJma5Pv.png 500 calpa blog 測試圖 %}

<center>Calpa's Blog GZIP 測試圖</center>

---

原文鏈接： [Frontend Performance Check-list For Production - Medium](https://hackernoon.com/front-end-performance-check-list-for-production-4e930cb63e8a)
原作者：[Youssouf El Azizi](https://medium.com/@yjose) <small>(Founder http://picsrush.com , React js developer)</small>
