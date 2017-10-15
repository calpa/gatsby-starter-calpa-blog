---
title: JavaScript的變量提升入門
date: 2017-01-14 20:09:35
tags: JavaScript
---
在JavaScript中，hoisting是一個容易犯錯的地方。
在一段scope裡面，沒有定義變量就使用變量的話會彈出Reference Error。
```[js]
 // ReferenceError: poi is not defined
console.log(poi);
```
---
```[js]
var name;
console.log(name); // undefined
name = 'calpa'
console.log(name); // calpa
```
由於JavaScript的解釋器會提前把所有變量函數定義，所以上面這一段代碼會變成這一段：
```[js]
console.log(name); // undefined
var name = 'calpa';
console.log(name); // calpa
```
另外，JavaScript也會出現這樣的問題。。。
```[js]
var name = 'calpa';
(function () {
    // My name is undefined
    console.log("My name is " + name);
    var name = 'poi';
    // My name is poi
    console.log("My name is " + name); // poi
})();
```
簡單來說，在寫JavaScript時，我們應該提前在檔案開始位置定義變量。

---
參考資料：
1. [Variable and Function Hoisting in JavaScript](http://adripofJavaScript.com/blog/drips/variable-and-function-hoisting)
1. [JavaScript 中的变量和函数提升](http://jinlong.github.io/2013/09/11/var-and-fun-hoisting/)
