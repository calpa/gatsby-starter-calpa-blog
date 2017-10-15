---
title: JavaScript的this
date: 2017-03-25 12:44:00
tags:
  - JavaScript
---
首先我們要理解調用函數的方法，最起碼可以用下面兩個方法：
```JavaScript
func(arg1, arg2);
func.call(context, arg1, arg2);
```
之前我也沒怎麼見過後者，基本上都是直接call func的。後者`func(arg1, arg2)` 等於 `func.call(undefined, arg1, arg2)`。簡單來說，this就是context。如果context沒有定義的話，它會被定義為一個全局對象，比如說global。在MDN的文檔有這一句: `if the method is a function in non-strict mode code, null and undefined will be replaced with the global object and primitive values will be converted to objects`。

如果不想要this是global的話，給予context一個對象就可以了：
`func.call(obj, arg1, arg2)`

## 全局上下文
在全局中，無論是否在嚴格模式下(Strict mode)，`this`都是代表全局對象。

### 瀏覽器
1. `this.document`指向`document`
1. 全局對象為`window`

### Node.js
全局對象為`global`

直接運用函數的話，this會指向global。
```JavaScript
function test() {
  this.x = 1;
}

test();

console.log(this.x); // 1
```

如果是生成一個對象的話，this會指向這個對象而不是global。
```JavaScript
function Car() {
  this.color = 'red';
}

var c = new Car();

console.log(this.color); // undefined
console.log(c.color); // red
```

下次遇到問題的話，我還是MDN資料吧，裡面寫得很詳細。

## 問題
在Node.js中，為什麼this.global === this.global.global的返回值為true？

## 延伸思考
1. Function.prototype.apply()和call()方法有什麼不同
1. Function.prototype.bind()

## 參考資料
1. [this - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
1. [Function.prototype.call - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
