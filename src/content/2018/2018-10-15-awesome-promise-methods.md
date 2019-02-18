---
templateKey: blog-post
id: 20181015a
title: 關於那些變化萬千，開箱即用的 Promise 高度封裝方法
slug: /2018/10/15/awesome-promise-methods/
date: 2018-10-15T03:48:03.125Z
description: 在日常開發中，我們少不了使用 Promise，而透過封裝抽象方法，可以避免造輪子，寫出更加優雅的代碼。例如：將任意函數，化為具有異步能力的函數、改裝成具有並發上千萬請求的函數、使用 Web Worker 來使用不同線程、暫停若干秒再繼續。這裡就讓我們一起來動手封裝這些方法吧。
tags:
  - JavaScript
  - 前端
---

## 前言

在日常開發中，我們少不了使用 Promise，而透過封裝抽象方法，可以避免造輪子，寫出更加優雅的代碼。例如：將任意函數，化為具有異步能力的函數、改裝成具有並發上千萬請求的函數、使用 Web Worker 來使用不同線程、暫停若干秒再繼續。這裡就讓我們一起來動手封裝這些方法吧。

## promisify

無論什麼函數，我們也可以將它化為異步函數。

這裡使用 currying 來返回一個函數，再返回一個 Promise 來調用原本的函數。

而且，可以用 `...rest` 來傳遞所有參數，而不是 `arguments`。

```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
```

### 使用方法

```js
const delay = promisify((d, cb) => setTimeout(cb, d));
delay(2000).then(() => console.log("Hello World!"));
```

值得一提的是，如果你的 Node.js 版本為 8 以上，你可以使用 `util.promisify`。

```js
const util = require("util");
const fs = require("fs");

const stat = util.promisify(fs.stat);
stat(".")
  .then(stats => {
    // 做你要做的事情
  })
  .catch(error => {
    // 處理錯誤
  });
```

你也可以使用 async/await 版本：

```js
const util = require("util");
const fs = require("fs");

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat(".");
  console.log(`This directory is owned by ${stats.uid}`);
}
```

## runAsync

使用 Web Worker 來在獨立線程調用函數，避免阻塞 UI 交互。

我們首先會使用`Blob` 對象鏈接來創建一個 `Worker`，裡面的內容是純字符串的函數。

然後，馬上使用這個 worker，並返回一個 `Promise`。

監聽 `onmessage` 及 `onerror` 事件，然後處理返回的 data。

代碼片段：

```js
const runAsync = fn => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
      type: "application/javascript; charset=utf-8"
    })
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};
```

使用例子：

```js
const longRunningFunction = () => {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 700; j++) {
      for (let k = 0; k < 300; k++) {
        result = result + i + j + k;
      }
    }
  }
  return result;
};
runAsync(longRunningFunction).then(console.log); // 209685000000
runAsync(() => 10 ** 3).then(console.log); // 1000
```

值得注意的是，由於函數運行的環境不同，所有變量和函數都需要在裡面定義。

使用外部變量的話，會出現問題：

```js
let outsideVariable = 50;
runAsync(() => typeof outsideVariable).then(console.log); // 'undefined'
```

## 同時執行 Promise

如果想要一次性地幾千個請求的話，使用 `Promise.all()` 方法就可以達到並發的效果了。

### 使用方法

```js
const test = time =>
  new Promise(resolve => {
    setTimeout(() => resolve(time), time);
  });

const temp = [test(1000), test(2000), test(3000)];

Promise.all(temp).then(console.log); // [1000, 2000, 3000]
```

## runPromisesInSeries

如果你想要一個個串聯，運行一系列的 `Promise`的話，可以使用 `Array.prototype.reduce()` 來製造一個 Promise 的鏈。當下個 Promise `resolved`， 返回上一個 Promise。

```js
const runPromisesInSeries = ps =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
```

### 使用方法

```js
const delay = time =>
  new Promise(resolve => {
    console.log(time);
    setTimeout(resolve, time);
  });

const promiseSeries = [() => delay(1000), () => delay(2000)];

runPromisesInSeries(promiseSeries);
```

## sleep

簡單來說，就是讓函數等若干秒，然後再執行下一步。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

### 使用方法

```js
async function sleepyWork() {
  console.log("等一秒");
  await sleep(1000);
  console.log("一秒過去了");
}
```

## isPromiseLike

我們可以簡單容易地判斷一個目標是否類似 `Promise`。

我們可以使用判斷對象是否為 `null`，而且 `typeof` 的返回值是 `object` 或者 `function`，而且它擁有 `.then` 的屬性。

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";
```

### 使用方法

```js
const promise = new Promise(resolve => {
  resolve();
});

isPromiseLike(promise); // true

isPromiseLike({
  then: function() {
    return "";
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```

值得注意的是：

這個方法只是一個判斷類似 `Promise`，並非完全等於 `Promise`。

```js
const fakePromise = {
  then: () => {}
};

isPromiseLike(fakePromise); // true
```

## One more thing

上面提到的方法，都是從 [30-seconds-of-code][1] ，裡面提到很多可以在三十秒內閱讀，開箱即用的方法。

如果有時間的話，可以研讀一下裡面的代碼。

## 參考資料

1. [30-seconds-of-code][1]
2. [Promise.all() - MDN web docs][2]

[1]: https://github.com/30-seconds/30-seconds-of-code
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
