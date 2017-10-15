---
title: CreateListFromArrayLike called on non-object 報錯的解決方法
headerImage: 'eySAMI1.jpg'
date: 2017-05-01 22:50
tags:
  - JavaScript
---

## 解決方法
仔細再看一下到底你是如何調用`apply`的。。。

你可能在使用Function.prototype.apply的時候不夠熟練，把`call`和`apply`的用法混在一起。。。。`call`是用0個或者更多的arguments，而`apply`則是用一個數組。

## 錯誤例子
```
Math.max.apply(null, 1, 2, 3);
// Uncaught TypeError: CreateListFromArrayLike called on non-object
```

## 正確例子
```
Math.max.call(null, 1, 2, 3); // 3
Math.max.apply(null, [1, 2, 5, 10]); // 10
```

## 細節
當調用`Function.prototype.apply`的時候，它會調用內置抽象操作：`CreateListFromArrayLike`。

## CreateListFromArrayLike

`CreateListFromArrayLike ( obj [ , elementTypes ] )`

CreateListFromArrayLike 是一個ECMAScript的內置抽象操作 (Abstract Operation)，用於建立一個List的值，它的元素由類似數組的對象的索引屬性提供。`elementTypes`是一個List，只允許自身建立的`list`擁有ECMAScript Language 類型的值，比如`undefined, null, boolean`等。在調用的時候，它會執行以下步驟:
1. 如果沒有定義`elementTypes`的話，它會被定義為« Undefined, Null, Boolean, String, Symbol, Number, Object »。
2. 如果`Type(obj)`的類型不是Object，拋出TypeError 錯誤。
3. 定義`len`為`obj`的length。
4. 建立一個空的List `list`。
5. 定義`index`為0
6. 當index小於len的時候，重複以下步驟：
	1. 定義`indexName`為!ToString(index)
	2. 定義`next` 為?Get(obj, indexName)
	3. 如果`Type(next)`的類型不存在於`elementType`裡面，拋出TypeError 錯誤。
	4. 在`list`的最後增加next //`list.push(next)`
	5. `index`的值加1
6. 返回`list`

## 延伸閱讀
1. 看V8是怎樣實現`Function.prototype.apply`
2. 看V8是怎樣實現`CreateListFromArrayLike`

## 參考資料
1. [Function.prototype.apply - ECMAScript 2018](https://tc39.github.io/ecma262/#sec-function.prototype.apply)
2. 踩過的坑。。。
