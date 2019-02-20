---
templateKey: blog-post
id: 20171106a
title: 2017 年香港開源年會後記
date: 2017-06-14T03:48:03.125Z
slug: /2017/06/14/hong-kong-open-sources-conference-remarks/
description: 大約兩個星期之前，我在 Facebook 上看到 2017 年的香港開源年會的消息。我想，我是不是可以透過這個機會，認識一下不同領域的程序員呢。於是，我在 EventBrite 上面買了學生票。但最終我拿到 VIP 票了，感覺有點激動。我把這一次的會議做了幾點筆記，也許，每一個人都應該參加最少一次如此有規模的大會。我會在這裡說說我參與這次會議所發生的一些事。
tags:
  - 前端
  - 大會
---

大約兩個星期之前，我在 Facebook 上看到 2017 年的香港開源年會的消息。我想，我是不是可以透過這個機會，認識一下不同領域的程序員呢。於是，我在 EventBrite 上面買了學生票。但最終我拿到 VIP 票了，感覺有點激動。我把這一次的會議做了幾點筆記，也許，每一個人都應該參加最少一次如此有規模的大會。我會在這裡說說我參與這次會議所發生的一些事。

在這一次大會之前，我參加了 Hong Kong Open Source Meeting #2，當時我是說[《5 分鐘製作 Markdown PowerPoint》][1]。

那天晚上，我才知道原來那一次演講的話，就會有一張免費 VIP 票，包含入場的資格，衣服及外套。我還拿到一些免費的票，轉送給其他認識的人了。

![VIP 門票][2]

![大會送的衣服][3]

我之前幫忙舉辦 Hang Seng Bank AI Hackathon，在說大數據的時候提到了這個黑客松，並放出了團體合照。。。

![Hang Seng Hackathon][4]

## 大數據

一些中國的互聯網公司對數據十分看重，並認為這些數據都是可以製造財富的資產。比如說滴滴打車收集了很多打車的交易數據，並善用這些數據優化分配司機和乘客的算法。又比如說阿里巴巴對大數據很重視，它的[天池大數據眾智平台][5]會提供各種各樣的大數據，並舉辦比賽招聘人才。

在這一次大會中，我了解到原來台灣在開放數據這一方面做得不錯。根據[Global Open Data Index][6] 的開放數據顯示，台灣是排名第一的，而香港則是排行 23。就讓我們看一下香港政府是如何開放數據的。

### 香港的開放數據

香港政府[資料一線通][7]平台，以多種檔案格式提供多個政府部門類別，機構的一些查詢資料，比如說天氣預報，中學教育統計資料。值得注意的是，這些檔案並不是 ODF，而是 xls, xml, csv, json, gif, txt, tif。。。

而且連 Hello World 都不能跑，這叫我如何是好。。。

我把嘗試這個平台的過程寫成[《香港開放數據平台 - 從入門到放棄》][8]。

## 自動化構建

![Reproducible Builds][9]

Debian 的 Leader Chirs Lamb 也來了這一次的大會，他分享了 Reproducible builds 這一個主題。

### 不可重現的原因

![Reason of non-reproducibility][10]

1. Timestramps
1. 時區
   比如說，你在美國和香港時區使用 `new Date()` 方法得出的結果是不同的。
1. Non-deterministic file ordering
1. 字典 / hash key 的次序不同
1. 用戶，群組，系統變量不同
1. 組建的路徑不同 (eg. /home/lamby vs /home/calpa)

---

### Technical Advantages

![Technical Advantages][11]

1. 檢測構造環境程序所導致的意外。
1. 更加容易地測試更新的代碼。
   我們可以自動構建測試所需要的生產環境，定義所需要的數據。透過這個方法，我們可以自動測試時候更新後的代碼會不會引入更多的 Bug。。。

---

## 最佳實踐

### Builds

![Best Practices of Builds][12]

1. 把它當成是藍圖一樣
1. 避免需要登入去構建或調試
   這個可以利用 Makefile, Gulp, Grunt 等一些自動化構建工具幫忙自動構建程序
1. 善用版本控制工具去構建檔案
   比如說用 Git...
1. Explicit is better than implicit
   其實這一個思想以前也
1. 每一次跑的時候都創造一個新的 layer

---

### Container Host Security

![Best Practices of Container Host Security][13]

1. 不要用 root 身份去跑
1. 要限制 SSH Access
1. 用 namespaces
1. 定義資源限額
1. 開啟記錄

## 認識其他程序員

![台北摩茲工寮][14]
這次我認識了台北摩茲工寮的其中一個摩茲人，了解到原來他們會每個禮拜在台北會有聚會。

也許，我們也可以參加他們的開源項目，作出自己小小的貢獻。

如果以後過去台北的話，我也可以過去拜會一下他們。

## 食物

![免費星巴克咖啡][15]

這次有星巴克的免費食物，比如說菠菜卷，冷麵，沙拉。味道不錯 XD

![北角雞蛋仔][16]

最後我離開數碼港，去北角嘗試北角雞蛋仔，其實味道也是不錯的。但是如果要說到最好吃的雞蛋仔的話，那還是九龍灣流動小販賣的炭燒雞蛋仔味道最好。

最後，感謝所有幫忙舉辦香港開源年會的人，讓我這樣的人也可以有一個渠道認識這個世界。

[1]: https://calpa.me/2017/06/01/create-markdown-powerpoint-in-5-mins/
[2]: https://i.imgur.com/ZBautza.jpg
[3]: https://i.imgur.com/4q7YR0J.png
[4]: https://i.imgur.com/aSRoBdc.jpg
[5]: https://tianchi.aliyun.com/
[6]: https://index.okfn.org/place/
[7]: https://data.gov.hk/tc/
[8]: https://calpa.me/2017/06/12/hong-kong-open-data-from-zero-to-giveup/
[9]: https://i.imgur.com/q8g0CgG.jpg "500 Reproducible builds"
[10]: https://i.imgur.com/NTUpphj.jpg
[11]: https://i.imgur.com/5WY6bHC.jpg
[12]: https://i.imgur.com/p6pTo4O.jpg
[13]: https://i.imgur.com/DZ1CSib.jpg
[14]: https://i.imgur.com/NXToUgx.png
[15]: https://i.imgur.com/MaMW0xE.jpg
[16]: https://i.imgur.com/ouO6EVo.jpg
