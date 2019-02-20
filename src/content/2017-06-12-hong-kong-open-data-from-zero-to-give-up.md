---
templateKey: blog-post
id: 20171106a
title: 香港開放數據平台 - 從入門到放棄
date: 2017-06-12T03:48:03.125Z
slug: /2017/06/12/hong-kong-open-data-from-zero-to-give-up/
description: 經過 2017 年香港開源年會之後，我都沒有去看香港的開放數據做得怎麼樣。今天香港正懸掛八號風球，正好是一個機會去了解一下。香港政府有一個開放數據平台，資料一線通，以多種檔案格式提供多個政府部門類別，機構的一些查詢資料，比如說天氣預報，中學教育統計資料。值得注意的是，這些檔案並不是 ODF，而是 xls, xml, csv, json, gif, txt, tif。。。
tags:
  - 前端
  - JavaScript
  - API
---

## 前言

經過 2017 年香港開源年會之後，我都沒有去看香港的開放數據做得怎麼樣。今天香港正懸掛八號風球，正好是一個機會去了解一下。香港政府有一個開放數據平台，資料一線通，以多種檔案格式提供多個政府部門類別，機構的一些查詢資料，比如說天氣預報，中學教育統計資料。值得注意的是，這些檔案並不是 ODF，而是 xls, xml, csv, json, gif, txt, tif。。。

## 使用 API

第一眼看到的時候，我就想可不可以直接複製貼上測試一下，結果發現是不行的。。。

![](https://i.imgur.com/cwI9gp7.png)

"歷史檔案文件列表應用程式界面" 其實這個名字會不會有點長，我在閱讀下文的時候看到這麼長的字也很難聯想到剛才有看過。而且如果直接在瀏覽器輸入第一句的話，只會返回 400 Bad Request。。。

```
{
  "message" : "REQUEST ERROR: start parameter missing"
}
```

## 香港天文台提供的數據

如果想要獲取香港天文台在平台上，2016 年 1 月 1 日到 1 月 2 日的開放資料，就可以輸入這一句到命令行里：

```shell
curl https://api.data.gov.hk/v1/historical-archive/list-files?start=20160101&end=20160102&provider=hk-hko
```

返回的結果太長，prettify 後的檔案更加是高達 362 行。。。

有興趣的話，你可以透過[這個鏈接](https://gist.github.com/calpa/11b75ce631d9a3809e17fb6b9ed15d6b)看一下。。。

這個看起來不錯，有很多東西在裡面。但是，你可能會發現數據結構有點奇怪，一個數組去儲存所有的資料，這裡我就不展開了。

如果看到最後，你就會發現 **file-count** 提供文檔總數，其實直接計算一下 **file** 的長度就可以了，上面的例子共有 21 份文檔。

```JavaScript
file.length // 21
file-count // 21
```

![](https://i.imgur.com/Hik48CC.png)

你可以進去下載數據，比如說進入[本港地區天氣報告](http://rss.weather.gov.hk/rss/CurrentWeather_uc.xml)，但你會發現它把最重要的資料放了在 description 裡面，用一個 tr, td, td 的形式展現出來，這就不如你用 HTML 展現吧。。。

## XML

> 與許多 HTML 元素不同的是，XML 元素的基礎是其功能，而非其格式。你不應該根據標記，就假定任何的格式或樣式。相反地， XML 把版面配置留給樣規。樣規是獨立的文件，把元素配上樣式。

如果寫 XML 的話，最重要是把資料都顯示出來，格式都是其次的。在 XML 中，我們可以自由地定義標籤，充分地表達自己的意思。也許，我應該之後寫一篇關於 XML 的文章。。。

本來，我是想繼續寫的，但是看到那些莫名其妙的查詢方法，以及查詢的[香港天文台開放數據網頁](https://data.gov.hk/tc-data/provider/hk-hko)都只有 xml 格式，我就簡短寫一下就算了。

如果你好奇為什麼我會提到 ODF 的話，你可以去看一下台灣政府是[如何推動開放數據](https://onepiece.nchu.edu.tw/cofsys/plsql/odf)。

## 後記

我也不知道為什麼[特首博客的 RSS ](http://www.ceo.gov.hk/chi/blog/rss/blog_rss.xml)會報錯。。。

## 參考資料

1. [ODF 政府文件標準格式宣導 ​](https://onepiece.nchu.edu.tw/cofsys/plsql/odf)
1. [國立交通大學 XML 教學](http://yes.nctu.edu.tw/lecture/web/xml/intro/chapter1.html)
