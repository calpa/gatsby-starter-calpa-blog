---
title: 如何製作svg sprite
date: 2017-05-02 16:51
tags:
  - SVG
---

使用SVG Sprite的好處是可以減少HTTP Request。

## 製作方法
你可以選擇手動把一張一張圖合在一起，也可以使用gulp-svg-sprite自動生成雪碧圖。

另外，你可以使用[svg-sprite設置](http://jkphl.github.io/svg-sprite/)幫助寫JSON, Node.js, Gruntfile 或者 Gulpfile的設定檔案。

## 使用方法
其中一種方法是使用`<use>`。我們可以如同平常一樣使用svg，唯一分別是裡面的內容換成`<use>`，然後把鏈接加上id來調用圖像。

```
<svg>
  <use href="img/sprite.svg#item"></use>
</svg>
```


## 參考資料
[Github Repo: gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite)
