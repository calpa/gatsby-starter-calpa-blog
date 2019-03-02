---
templateKey: blog-post
id: https://calpa.me/2017/05/01/CreateListFromArrayLike-problem-solution/
title: CreateListFromArrayLike called on non-object 報錯的解決方法
slug: CreateListFromArrayLike-problem-solution
date: 2017-05-01T03:48:03.125Z
description: 如果你遇到 CreateListFromArrayLike 的報錯的話，那麼可以看看代碼裡面調用 apply 方法的地方，call 是用0個或者更多的參數，而 apply 則是用一個數組。
tags:
    - JavaScript
    - 閱讀
---

如果你遇到 CreateListFromArrayLike 的報錯的話，那麼可以看看代碼裡面調用 apply 方法的地方，call 是用0個或者更多的參數，而 apply 則是用一個數組。

## 錯誤例子

```js
Math.max.apply(null, 1, 2, 3);
// Uncaught TypeError: CreateListFromArrayLike called on non-object
```

## 正確例子

```js
Math.max.call(null, 1, 2, 3); // 3
Math.max.apply(null, [1, 2, 5, 10]); // 10
```

## 解釋

當調用 `Function.prototype.apply` 的時候，它會調用內置抽象操作 CreateListFromArrayLike。

## CreateListFromArrayLike

`CreateListFromArrayLike ( obj [ , elementTypes ] )`

CreateListFromArrayLike 是一個ECMAScript的內置抽象操作 (Abstract Operation)，用於建立一個 List 的值，它的元素由類似數組的對象的索引屬性提供。`elementTypes` 是一個 List，只允許自身建立的 `list` 擁有ECMAScript Language 類型的值，比如`undefined, null, boolean`等。在調用的時候，它會執行以下步驟:

1. 如果沒有定義`elementTypes`的話，它會被定義為 Undefined, Null, Boolean, String, Symbol, Number, Object 。
2. 如果`Type(obj)`的類型不是Object，拋出TypeError 錯誤。
3. 定義`len`為`obj`的length。
4. 建立一個空的List `list`。
5. 定義`index`為0
6. 當index小於len的時候，重複以下步驟：
    1. 定義`indexName`為!ToString(index)
    2. 定義`next` 為?Get(obj, indexName)
    3. 如果`Type(next)`的類型不存在於`elementType`裡面，拋出 TypeError 錯誤。
    4. 在`list`的最後增加next (`list.push(next)`)
    5. `index`的值加1
7. 返回`list`

## 參考資料

1. [Function.prototype.apply - ECMAScript 2018](https://tc39.github.io/ecma262/#sec-function.prototype.apply)
