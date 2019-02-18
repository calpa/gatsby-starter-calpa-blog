---
templateKey: blog-post
id: 20181022a
title: JavaScript Array.map(parseInt) 錯誤解決方案
slug: /2017/05/31/javascript-array-map-parseint-solution/
date: 2017-05-31T03:48:03.125Z
description: 如果我想轉換數組裡面的字符串為數字的話，很自然就會想到 `map` 和 `parseInt` 這兩個方法。但是用起來的時候卻不是我想要的結果。
tags:
  - JavaScript
  - 前端
---

如果我想轉換數組裡面的字符串為數字的話，很自然就會想到 `map` 和 `parseInt` 這兩個方法。但是用起來的時候卻不是我想要的結果。。。

```JavaScript
var a = ["1", "2", "3", "4", "5"];

var b = a.map(parseInt);

console.log(b); // [1, NaN, NaN, NaN, NaN]
```

## 原因

如果我們細看 map 的參數，就會發現它的 callback 會有三個 arguments：`currentValue`, `index` 和 `array`。

對於 `parseInt` 來說， 它會接收`currentValue`和 `index`，並用 index 作為 index 進制。。。

```JavaScript
parseInt('1', 0); // OK => 1
parseInt('2', 1); // 不合法的進制。。。
parseInt('3', 2); // NaN, 二進制沒有 3
parseInt('4', 3); // NaN, 三進制沒有 4
parseInt('5', 4); // NaN, 四進制沒有 5
```

## 解決方法

1. 用`.map(parseFloat)`，因為它只接收一個參數。

```JavaScript
var c = a.map(parseFloat);
```

1. 用`.map(Number)`

```JavaScript
var d = a.map(Number);
```

1. 用`.map(num => parseInt(num))`

```JavaScript
var e = a.map(num => parseInt(num));
```
