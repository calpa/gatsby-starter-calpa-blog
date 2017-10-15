---
title: hackUST 2017後記
date: 2017-04-23 20:44
headerImage: IJPUhSJ.jpg
tags:
  - Hackathon
---

## 後記
經過一天的努力，我們成功進入最後5強。這次比賽都幾好玩，基本上由第一天中午吃到晚上，然後第二天回來也是吃吃吃。雖然最後沒有取得獎金，但也是學到很多的知識。比如說如何解決安裝npm package問題，更新npm package問題。

第一天中午的時候已經把Demo做出來了，但是不知道為什麼刪除`node_modules`之後，Expo就直接崩潰了。這是因為`package.json`裡面根本就沒有把完整的`dependencies`寫出來，當我輸入`npm install`的時候就不能順利安裝。於是我只能在CodePen裡面開一個[Pen](http://codepen.io/calpa/pen/LyZjPm)用來做控制器。

## 技術細節
這個控制器利用`window.addEventListener('deviceorientation', handleOrientation);
`來監聽Android裝置的方向。當加速規偵測到裝置方向的變化，它就會調用`handleOrientation`方法。

而`handleOrientation`方法有兩個目的：
1. 獲取`event`裡面的`alpha`, `beta`, `gamma`數值，它們分別代表裝置的z軸， x軸， y軸動向。

  z軸介乎於 0 ~ 360 度之間，x軸介乎於 -180 ~ 180 度之間，代表裝置的前後動向。y軸介乎於 -90 ~ 90 度之間，代表裝置的左右動向。

1. 發送event到服務器。

  這個很簡單，利用socket.io就可以了。比如說`socket.emit('event');`

而在展示用戶數據的時候，我們用[C3.js](http://c3js.org/)來做實時渲染數據。利用C3.js，我們很容易就可以產生D3圖表，而不是重寫D3代碼。我們也可以修改每一個元素的樣式。感覺再寫下去就變教學文了。。。

<iframe height='400' scrolling='no' title='Playground C3.js' src='//codepen.io/calpa/embed/MmevBr/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/calpa/pen/MmevBr/'>Playground C3.js</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## 比賽照片
以下是比賽時拍攝的一些照片：
![Imgur](https://i.imgur.com/vXyDaoY.jpg)

感謝這次一起參賽的三位隊友。

![Imgur](https://i.imgur.com/6nLsXEB.jpg)
<center>比賽場地</center>


![Imgur](https://i.imgur.com/2mLCtBm.jpg)
<center>接待處</center>

![Imgur](https://i.imgur.com/pL19qZw.jpg)
<center>宣傳物品</center>

![Imgur](https://i.imgur.com/g1GZHCJ.jpg)
<center>平常用來賣官方廣告的地方現在用來賣hackUST和hardUST的廣告 XD</center>

![Imgur](https://i.imgur.com/DbLEVGz.jpg)
<center>演示的場地</center>

這次主辦單位派發了港幣120元的餐券，還有很多零食，飲料。最重要的是，有我最喜歡的忌廉汽水www。希望以後都可以繼續參加比賽，學習更多的編程知識。

## 參考資料
1. [Detecting device orientation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
1. [Socket.io 官方文檔](https://socket.io/docs/)
1. [C3.js 官方Starter](http://c3js.org/gettingstarted.html)
