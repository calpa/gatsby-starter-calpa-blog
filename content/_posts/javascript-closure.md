---
title: JavaScript的閉包(Closure)
date: 2017-02-19 15:12:00
tags:
  - JavaScript
---

## 為什麼會有這篇文章

打好基本功是很重要的。。。

## 最簡單的閉包
1. 先定義一個Function A
2. 在A的裡面定義一個Function B
3. 在A中返回B
4. 執行A(), 將A()的返回值賦予給b
5. 執行b()

```[js]
function A() {
  function B() {
    console.log("Hello, world!");
  }
  return B;
}
var b = A();
b(); // Hello World
```

## 加法 - ES6
1. 先定義adder()
2. 定義匿名函數
3. 返回x + y
4. 定義變量 add5
5. 執行 add5()

```[js]
let adder = (x) => (y) => x + y

let add5 = adder(5);
let add10 = adder(10);

console.log(add5(7)); // 12
console.log(add10(7)); // 17
```
