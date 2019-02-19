---
templateKey: blog-post
id: 20170927a
title: 異步操作見聞錄
slug: /2017/09/27/javascript-if-else-in-depth/
date: 2017-09-27T03:48:03.125Z
description: 異步操作是非常常見的操作，也是其中一題常見的前端工程師面試題目。在日常開發中，我們會和伺服器交互，或者是和用戶的行動作出反應，比如說監聽某些點擊事件。這個時候，其實我們是執行了異步操作，我們需要等待對方若干時間才能收到返回值，甚至是一個錯誤的值。。。因此，異步操作很容易產生一些誤會。這裡，我會說一下異步操作，及其返回的處理方法。
tags:
  - JavaScript
  - 前端
---

## 前言

異步操作是非常常見的操作，也是其中一題常見的前端工程師面試題目。在日常開發中，我們會和伺服器交互，或者是和用戶的行動作出反應，比如說監聽某些點擊事件。這個時候，其實我們是執行了異步操作，我們需要等待對方若干時間才能收到返回值，甚至是一個錯誤的值。。。因此，異步操作很容易產生一些誤會。這裡，我會說一下異步操作，及其返回的處理方法。

## 同步與異步的分別

在同步的世界裡面，我們希望執行某些操作之後，就能夠馬上拿到返回的值，然後執行下一步。然而，當我們發出 HTTP 請求的時候，我們可能需要等待世界的另外一端返回信息，這需要時間，便不是同步了。。。

如果沒有異步的話，當你發出 HTTP 請求的時候，瀏覽器需要等待伺服器返回才執行下一步。這就是代表瀏覽器會卡住。。。

異步處理，簡單來說就是我們發出了一個行動，但是不是馬上得到結果，我們會繼續執行後面的指令，等到函數裡面有一個返回，我們才拿那個返回值來使用。最簡單的說法，就是我們向服務器發出請求，但是服務器需要時間處理，並且返回處理過的內容。

## 異步操作處理方法

1. Callback
1. Promise （思想）
1. Generator
1. Async await （推薦）

### Callback

我們看一下維基百科上面對於 Callback 的說明：

> 在電腦程式設計中，回呼函式，或簡稱回呼（Callback 即 call then back 被主函數呼叫運算後會返回主函數），是指通過函數參數傳遞到其它代碼的，某一塊可執行代碼的參照。這一設計允許了底層代碼呼叫在高層定義的子程式。

這樣好像說得蠻複雜的，但其實很簡單，你把一個函數 cb (Function) 作為參數 (Argument)傳進這個函數 B 裡面，然後在函數 B 使用函數 cb。

```
function func(x, cb) {
  cb(x)
}
```

舉個例子，比如我們要在 Node.js 裡面讀取一個檔案，我們的代碼會是下面這樣的：

hello.txt:

```
Hello World, I'm Calpa Liu.
```

---

index.js:

```
var fs = require('fs');

fs.readFile('hello.txt', function (err, data) {
     if (err) {
          return console.error(err);
     }

     console.log(data);
});

console.log('Finished');
```

我們會在 callback 裡面處理 callback，也就是一個回調裡面做另外一件事情，那可能是另外一個 callback，那麼你可以想象一下，我們越寫越深。。。這樣有兩個問題，第一：代碼的耦合性會很高，不容易去拆分代碼；第二：代碼的維護性很差。

![Imgur](https://i.imgur.com/bjHDvVN.jpg)

### Promise

Promise 是說如果你做了 A 的事情，成功了就做 B，不成功就做 C，你還可以繼續做 D 的事情，然後進行成功和不成功的處理。這樣說可能比較虛，但是你看一下 MDN 上面的圖就會明白了。

![Promise - MDN](https://i.imgur.com/w9BxjmL.png)

一個發射子彈的動作可以這樣寫：

```
var fire = new Promise(function(resolve, reject) {
     setTimeout(function() {
          resolve('已命中三千里外的目標');
     }, 3000)
});

fire.then(function(result) {
     console.log(result);
});
```

你可以在 Windows 平台按 F12 或 Ctrl + Shift + I，或在 Mac 上 按 Cmd + Opt + I，打開 Google Chrome Developer Tools ，然後在 Console 貼上上面的代碼，三秒後就會輸出`已命中三千里外的目標`。

你也可以在 then() 裡面寫 1 個到 N 個的 Promise。

```
var fire = new Promise(function(resolve, reject) {
     setTimeout(function() {
          resolve('已命中三千里外的目標');
     }, 3000)
});

fire.then(function(result) {
     console.log(result);
     console.log('正在返回司令部');
     return fire.then(function (result) {
          console.log(result);
     });
});
```

### Generator

Generator 其實是一個狀態機，內部保存機器的運行狀態。我們透過獲取機器的完成狀態 (done)，我們能夠重複調用機器。我們可以使用 yield 暫停一個函數，並跳出函數。從外面的角度來看，我們可以從上而下去寫代碼，但是代碼會複雜，難以理解。

雖然它已經寫進 ECMAScript 2015 的正式規範裡面，但是我不太喜歡使用 Generator。我們簡單看一下 Generator 就好了，因為現在是 2017 年，異步操作的有更加好的處理方法。

```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g; //
g.next(); // {value: 1, done: false}
g.next(); // {value: 2, done: false}
g.next(); // {value: 3, done: false}
g.next() // {value: undefined, done: true}
```

### Async/Await

對於技術的要求，是無止境的。為了寫出更加優美的代碼，你又可以付出什麼的代價呢？

如果你沒有試過 Async/Await 的話，那麼你就應該試一下，因為實在是太優雅了。

這里我就放出一段現在博客在用的代碼：

```
async const getPosts = () => {
  await res = axios.get('https://calpa.me/posts');
  return res.data;
}
```

我們簡單的讀一下這段代碼：

一個異步的不變量 `getPosts` 是一個箭頭函數，內部操作為等待 axios 的 GET 請求到地址：[http://calpa.me](https://calpa.me)，並返回伺服器返回的資料。

這是一個非常簡單的異步操作吧，但是如果是這樣的呢？

```
async const getUserData = () => {
  await posts = axios.get('https://calpa.me/posts');
  await accountInfo = axios.get('https://calpa.me/about');
  /* ... */
}
```

如果你想要使用 Async / Await 的話，可以使用
[Node.js 7.6](https://www.infoq.com/news/2017/02/node-76-async-await) 或以上的版本。例如使用 nvm 安裝 v8: `nvm install v8`，然後 `nvm use v8`。

另外，如果你不想更新 Node 版本的話，你可以安裝 [async 工具庫](https://caolan.github.io/async/)。

## 感想

異步操作已經成為了前端工程師面試常見的問題之一，感覺是對於前端工程師的技術水平需求越來越提高了。雖然這些都是在 MDN 上面寫好的介紹，但是只有自己用過才會知道什麼比較好。

如果公司的 Node 版本可以支持 Async/Await 的話，那就直接用 Async/Await 就好了。不行的話，那就用 Promise 吧，不然 Generator 的設計對於強迫症患者來說很不順眼。。。

## 參考資料

1. [Callback (computer programming) - Wikipedia](https://en.wikipedia.org/wiki/Callback)
1. [Promise - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
1. [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
1. [async function - JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
