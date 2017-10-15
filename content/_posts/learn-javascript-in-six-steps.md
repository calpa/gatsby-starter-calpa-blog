---
title: 打好 JavaScript 基礎的6個步驟
headerImage: KMksHxZ.png
date: 2017-05-21 20:00
tags:
  - JavaScript
---

平日開發的時候，我們會選擇使用一些框架來避免重複製造輪子，減輕我們的工作量。然而，我們卻不能透過使用更好的工具，或者更換框架來解決一些基礎開發問題。因此打好基礎很重要，不但決定前端程序員解決基礎問題的能力，還決定了面對日新月異框架時的掌握能力。當我開發 React 應用的時候，遇到的問題多是我對於 JavaScript 的理解不夠充分。因此，我在這裡寫一下如何打好 JavaScript 基礎，希望拋磚引玉 XD

1. 看一些經典的書
  JavaScript: 紅寶書 (JavaScript高級程序設計)，犀牛書 (JavaScript: The Definitive Guide)，You Don't Know JS
  計算機經典: 算法導論，SICP

  {% img https://i.imgur.com/xm6R14W.jpg 300 JavaScript高級程序設計 %}

  {% img https://i.imgur.com/autEZuV.jpg 300 JavaScript: The Definitive Guide %}

  {% img https://i.imgur.com/ajLLsUg.gif 300 You Don't Know JS %}

1. 嘗試用不同的工具，增加自己的視野。
  你可以做一些玩具，自己嘗試一下寫TODO APP 的不同寫法。

1. 看工具的源碼：React, Vue, Underscore.js
  這些開源項目的代碼都已經放在 Github，網絡上也有對它們的源碼分析，隨便一找就有了。透過閱讀代碼，可以學習一下代碼規範，理解什麼才是好的代碼。

1. 自己把這些工具、框架的某些功能做出來。
  你可以實現[Underscore.js](http://underscorejs.org/)裡面的一些方法，例如`_.uniq(array, [isSorted], [iteratee])` 數組去重方法，然後看一下自己和人家寫得有什麼分別，為什麼人家會這樣寫？它有運用到什麼設計模式？

1. 看ECMAScript規範。
  你可以閱讀[ECMAScript 規範](https://tc39.github.io/ecma262)，人家對於不同的數據類型和函數是怎樣定義的，思考一下為什麼需要這樣定義，為什麼不這樣定義。
  為什麼`typeof null`會是`object`？不定義為`null`？

1. 記錄你學了什麼知識並分享。
  記錄一下自己學習了什麼知識，遇到了什麼坑。透過和其他人交流一下，可以了解到自己有什麼不足之處。其中一個方法是利用 Hexo 建立博客，可以透過修改主題練習HTML, JavaScript, CSS。我也是這樣寫博客的：https://calpa.me

這裡就作為我的一個學習小總結，不繼續展開了。。。
