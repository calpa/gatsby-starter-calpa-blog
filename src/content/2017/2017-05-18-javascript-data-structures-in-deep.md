---
templateKey: blog-post
id: 20170518a
title: 深入 ECMAScript 的數據類型
slug: /2017/05/18/javascript-data-structures-in-deep/
date: 2017-05-18T03:48:03.125Z
description: 每一種編程語言都有數據結構，但他們各有不同之處。JavaScript 是一種動態語言，變數的類型不用提前聲明，你可以使用同一個變數來保存不同的數據類型。
tags:
  - JavaScript
  - 前端
---

每一種編程語言都有數據結構，但他們各有不同之處。JavaScript 是一種動態語言，變數的類型不用提前聲明，你可以使用同一個變數來保存不同的數據類型。

```JavaScript
var a = 'apple'; // String type
var a = 42; // Number type
var a = true; // Boolean type
```

這就和 Python 的寫法差不多:

```python
a = 'apple' // String type
a = 42 // Number type
a = True // Boolean type
```

## 數據類型

[ECMAScript 標準](https://tc39.github.io/ecma262/#sec-ecmascript-overview)明確定義了 7 種數據類型：6 種原始類型 (Primitive value) 和 Object。

{% img /img/javascript-data-structures.svg 300 auto JavaScript Data Structure %}

原始數據類型：

1. Undefined
1. Null
1. Boolean
1. Number
1. String
1. Symbol (ECMAScript 2015)

## 判斷方法

我們可以透過使用`typeof`和`Object.prototype.toString()`來判斷數據類型。

### typeof

在 JavaScript 誕生之時，數值是由一個標籤以及實際數據值表示的。基本類型的標籤是 1，而對象類型的標籤是 0。

由於 null 代表的是空指針(全部都是 0)，null 的類型標籤會是 0。如果你在 console 直接輸入`typeof null`的話，就會得到 "object" 的結果，雖然這不是我們想要的值。。。

```JavaScript
typeof undefined; // "undefined"
typeof Boolean;   // "function"
typeof true;      // "boolean"
typeof 42;        // "number"
typeof "42";      // "string"
typeof Symbol();  // "symbol"
```

我們可以看一下 ECMAScript 是怎樣定義 typeof 的：

1. Let val be the result of evaluating UnaryExpression.
1. If Type(val) is Reference, then
   a. If IsUnresolvableReference(val) is true, return "undefined".
1. Set val to ? GetValue(val).
1. Return a String according to Table 35.

Table 35: typeof Operator Results

| val 的類型                                                   | 結果                                                                                                     |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| Item One                                                     | Item Two                                                                                                 |
| Type of val                                                  | Result                                                                                                   |
| Undefined                                                    | "undefined"                                                                                              |
| Null                                                         | "object"                                                                                                 |
| Boolean                                                      | "boolean"                                                                                                |
| Number                                                       | "number"                                                                                                 |
| String                                                       | "string"                                                                                                 |
| Symbol                                                       | "symbol"                                                                                                 |
| Object (ordinary and does not implement [[Call]])            | "object"                                                                                                 |
| Object (standard exotic and does not implement [[Call]])     | "object"                                                                                                 |
| Object (implements [[Call]])                                 | "function"                                                                                               |
| Object (non-standard exotic and does not implement [[Call]]) | Implementation-defined. Must not be "undefined", "boolean", "function", "number", "symbol", or "string". |

另外，如果直接用`typeof`來判斷 NaN 的話，它會返回`"number"`，對於 NaN 我們可以用`isNaN`方法來判斷是否一個數字。

```JavaScript
typeof NaN; // "number"
isNaN(NaN); // true
```

### Object.prototype.toString()

我們可以利用`Object.prototype.toString.call()`或者`Object.prototype.toString.apply()`這兩個方法判斷 Object 的類型，以及 null：

```JavaScript
Object.prototype.toString.call(undefined);   // "[object Undefined]"
Object.prototype.toString.call(new Date);    // "[object Date]"
Object.prototype.toString.call(new String);  // "[object String]"
Object.prototype.toString.call(Math);        // "[object Math]"
Object.prototype.toString.call(null);        // "[object Null]"
```

ECMAScript 19.1.3.6 明確定義 Object.prototype.toString()：

1.  If the `this` value is `undefined`, return `"[object Undefined]"`.
2.  If the `this` value is `null`, return `"[object Null]"`.
3.  Let `O` be ! [ToObject](https://tc39.github.io/ecma262/#sec-toobject)(`this` value).
4.  Let `isArray` be ? [IsArray](https://tc39.github.io/ecma262/#sec-isarray)(`O`).
5.  If `isArray` is `true`, let `builtinTag` be `"Array"`.
6.  Else if `O` is a String exotic object, let `builtinTag` be `"String"`.
7.  Else if `O` has a [[ParameterMap]] internal slot, let `builtinTag` be `"Arguments"`.
8.  Else if `O` has a [[Call]] internal method, let `builtinTag` be `"Function"`.
9.  Else if `O` has an [[ErrorData]] internal slot, let `builtinTag` be `"Error"`.
10. Else if `O` has a [[BooleanData]] internal slot, let `builtinTag` be `"Boolean"`.
11. Else if `O` has a [[NumberData]] internal slot, let `builtinTag` be `"Number"`.
12. Else if `O` has a [[DateValue]] internal slot, let `builtinTag` be `"Date"`.
13. Else if `O` has a [[RegExpMatcher]] internal slot, let `builtinTag` be `"RegExp"`.
14. Else, let `builtinTag` be `"Object"`.
15. Let `tag` be ? [Get](https://tc39.github.io/ecma262/#sec-get-o-p)(`O`, @@toStringTag).
16. If [Type](https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values)(`tag`) is not String, let `tag` be `builtinTag`.
17. Return the String that is the result of concatenating `"[object "`, `tag`, and `"]"`.

## 參考資料

1. [ECMAScript® 2018 Language Specification](https://tc39.github.io/ecma262/#sec-ecmascript-overview)
