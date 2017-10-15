---
title: 利用 ECMAScript 学习如何判断数据类型
headerImage: KMksHxZ.png
date: 2017-05-18 14:00
tags:
  - JavaScript
  - ECMAScript
---

每一种编程语言都有数据结构，但他们各有不同之处。JavaScript 是一种动态语言，变量的类型不用提前声明，你可以使用同一个变量来保存不同的数据类型。
```JavaScript
var a = 'apple'; // String type
var a = 42; // Number type
var a = true; // Boolean type
```

这就和Python的写法差不多:
```python
a = 'apple' // String type
a = 42 // Number type
a = True // Boolean type
```
## 数据类型
[ECMAScript 标準](https://tc39.github.io/ecma262/#sec-ecmascript-overview)明确定义了7种数据类型：6种原始类型 (Primitive value) 和Object。

{% img /img/javascript-data-structures.svg 300 auto JavaScript Data Structure %}

原始数据类型：
1. Undefined
1. Null
1. Boolean
1. Number
1. String
1. Symbol (ECMAScript 2015)

## 判断方法

我们可以透过使用`typeof`和`Object.prototype.toString()`来判断数据类型。

### typeof

在一开始设计 JavaScript 时，数值是由一个标签以及实际数据值表示的。对于基本类型，标签是1；而对于对象类型，标签是0。由于null代表的是空指针(里面都是0)，null的类型标签会是0。因此`typeof null`就会返回"object";

```JavaScript
typeof undefined; // "undefined"
typeof Boolean;   // "function"
typeof true;      // "boolean"
typeof 42;        // "number"
typeof "42";      // "string"
typeof Symbol();  // "symbol"
```

我们可以看一下ECMAScript是怎样定义typeof的：

1. Let val be the result of evaluating UnaryExpression.
1. If Type(val) is Reference, then
  a. If IsUnresolvableReference(val) is true, return "undefined".
1. Set val to ? GetValue(val).
1. Return a String according to Table 35.

Table 35: typeof Operator Results

| Typeof val | 结果     |
| :------------- | :------------- |
| Item One       | Item Two       |
|Type of val	|Result|
|Undefined	|"undefined"|
|Null|	"object"|
|Boolean	|"boolean"|
|Number|	"number"|
|String	|"string"|
|Symbol|	"symbol"|
|Object (ordinary and does not implement [[Call]])	|"object"|
|Object (standard exotic and does not implement [[Call]])	|"object"|
|Object (implements [[Call]])	|"function"|
|Object (non-standard exotic and does not implement [[Call]])	|Implementation-defined. Must not be "undefined", "boolean",  "function", "number", "symbol", or "string".|

另外，如果直接用`typeof`来判断 NaN 的话，它会返回`"number"`，对于 NaN 我们可以用`isNaN`方法来判断是否一个数字。
```JavaScript
typeof NaN; // "number"
isNaN(NaN); // true
```
### Object.prototype.toString()

我们可以利用`Object.prototype.toString.call()`或者`Object.prototype.toString.apply()`这两个方法判断 Object 的类型，以及 null：
```JavaScript
Object.prototype.toString.call(undefined);   // "[object Undefined]"
Object.prototype.toString.call(new Date);    // "[object Date]"
Object.prototype.toString.call(new String);  // "[object String]"
Object.prototype.toString.call(Math);        // "[object Math]"
Object.prototype.toString.call(null);        // "[object Null]"
```

ECMAScript 19.1.3.6 明确定义 Object.prototype.toString()：

1.  If the `this` value is `undefined`, return `"[object Undefined]"`.
2.  If the `this` value is `null`, return `"[object Null]"`.
3.  Let `O` be ! [ToObject](https://tc39.github.io/ecma262/#sec-toobject)(`this` value).
4.  Let `isArray` be ? [IsArray](https://tc39.github.io/ecma262/#sec-isarray)(`O`).
5.  If `isArray` is `true`, let `builtinTag` be `"Array"`.
6.  Else if `O` is a String exotic object, let `builtinTag` be `"String"`.
7.  Else if `O` has a [[ParameterMap]] internal slot, let `builtinTag` be `"Arguments"`.
8.  Else if `O` has a [[Call]] internal method, let `builtinTag` be `"Function"`.
9.  Else if `O` has an [[ErrorData]] internal slot, let `builtinTag` be `"Error"`.
10.  Else if `O` has a [[BooleanData]] internal slot, let `builtinTag` be `"Boolean"`.
11.  Else if `O` has a [[NumberData]] internal slot, let `builtinTag` be `"Number"`.
12.  Else if `O` has a [[DateValue]] internal slot, let `builtinTag` be `"Date"`.
13.  Else if `O` has a [[RegExpMatcher]] internal slot, let `builtinTag` be `"RegExp"`.
14.  Else, let `builtinTag` be `"Object"`.
15.  Let `tag` be ? [Get](https://tc39.github.io/ecma262/#sec-get-o-p)(`O`, @@toStringTag).
16.  If [Type](https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values)(`tag`) is not String, let `tag` be `builtinTag`.
17.  Return the String that is the result of concatenating `"[object "`, `tag`, and `"]"`.

## 参考资料
1. [ECMAScript® 2018 Language Specification](https://tc39.github.io/ecma262/#sec-ecmascript-overview)
