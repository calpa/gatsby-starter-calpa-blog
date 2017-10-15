---
title: Hexo優化之為外部鏈接添加nofollow屬性
date: 2017-02-25 22:00
tags:
  - Hexo
  - SEO
---
我們的網頁通常會有很多鏈接，但是在爬蟲的時候可以分開哪一些是外部鏈接，哪一些是內部鏈接來優化搜尋結果。比如說增加`nofollow`標籤。nofollow是一個HTML標籤的屬性值，它可以告訴搜尋引擎不要追蹤這個鏈接。

## 手動
我們可以手動把每一個鏈接都加上nofollow屬性，比如這樣：
```
<a href="https://github.com/calpa" rel="nofollow">Calpa的Github主頁</a>
<a href="https://github.com/calpa" rel="external nofollow">Calpa的Github主頁</a>
```
`external nofollow`是更加專業的寫法，告訴搜尋引擎這是一個外部鏈接。

## 自動
我們也可以利用`hexo-autonofollow`插件來做這一件事情。
只需要輸入`npm install hexo-autonofollow --save`，然後在`_config.yml`裡面寫上下面就可以了：
```
nofollow:
    enable: true
    exclude:
    - exclude1.com
    - exclude2.com
```
exclude1.com和exclude2都是內部域名。

## 參考資料
1. [Hexo优化之为外部链接添加nofollow
](https://liuzhichao.com/2016/hexo-auto-nofollow.html)
