---
title: 初探正則表達式
tags:
  - Regular Expression
  - JavaScript

date: 2017-05-06 20:13:00
---

正則表達式是一個非常簡單的語法，但它也是神兵利器，可以說是程序員必須要理解的工具之一。它就像一本會不斷成長的寶刀，隨著程序員對它的理解，它的威力也跟著增強。

一些當下熱門的編輯器(Atom, Sublime)或者 IDE (WebStorm)都支持正則表達式尋找。如果你有瞭解過JavaScript中的方法 (exec, test, match, search, replace, split)的話，做下面的題目時會更加得心應手。

## 任務目的
1. 掌握正則表達式編寫規則
1. 瞭解正則表達式的特殊字元
1. 瞭解JavaScript提供的正則表達式相關方法
1. 能用正則表達式做一些簡單文本或者數字校驗

## 任務描述
1. 編寫一個匹配URL的正則表達式，測試用例參照但不限於：
```
https://calpa.me/2017/05/06/introduction-to-regular-expression/
https://google.com
https://github.com/leviding/T-Plan/blob/master/tasks/task0005/README.md
http://blog.csdn.net/
```

1. 編寫一個驗證電子郵箱地址的正則表達式，測試用例參照但不限於：
```
myEmail@gmail.com
steve.jobs@apple.com
```
完成任務之後，可以對比別人的實現方案，但不建議未嘗試就直接搜索答案。
在正則表達式的世界中，一個問題往往不止一種方案，可以嘗試多種方法。


## 提示
你可以想利用一些工具，例如在線的正則表達式工具 ([RegExr](http://regexr.com/), [Regex101](https://regex101.com/))來幫助學習、編寫正則表達式。

## 參考資料
1. [MDN Regular Expressions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions): 瞭解JavaScript中正則表達式的基本知識
