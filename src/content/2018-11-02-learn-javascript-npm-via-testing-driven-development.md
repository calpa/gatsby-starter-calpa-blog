---
templateKey: blog-post
id: 20181102a
title: 透過 TDD 模式學習如何實現各種 npm 工具
slug: /2018/11/02/learn-javascript-npm-via-testing-driven-development/
date: 2018-11-02T03:48:03.125Z
description: 在程序員的日常精進之中，閱讀優秀的代碼是必不可少的。透過 TDD 的開發模式，可以模仿那些優秀的代碼，從而提升自己代碼水平。下面介紹如何從零開始搭建 TDD 環境，並構建 isEven 代碼。
tags:
  - 閱讀
  - JavaScript
---

## 前言

在程序員的日常精進之中，閱讀優秀的代碼是必不可少的。透過 TDD 的開發模式，可以模仿那些優秀的代碼，從而提升自己代碼水平。下面介紹如何從零開始搭建 TDD 環境，並構建 isEven 代碼。

![Imgur](https://i.imgur.com/N45ca8A.jpg)

Test Driven Development (TDD)，指的是先寫最小部分的測試代碼，然後寫開發業務代碼，通過測試。然後重構，並不更改測試用例的表現方式。

### 好處

1. 節省重複手動測試代碼是否正常的時間
2. 輕鬆寫測試代碼
3. 通過測試用例就可以輕鬆喝茶

## 已實現工具

在過去的一段時間里，我閱讀了一些下載量大，並以 TDD 開發模式實現的一些工具庫。比如說：

1. [isEven](#iseven-代碼解讀)
1. isObject
1. isNumber
1. isEmptyObject
1. extend
1. underscore/keys

## 如何開始？

學習 TDD，我們首先需要搭建一個可以提供單元測試環境，比如利用 ava 測試工具。

### 搭建單元測試環境 SOP

1. 構建新項目：`mkdir tdd-playround`
1. 進入項目：`cd tdd-playgound`
1. 在項目裡面構建 `src` 及 `test` 文件夾：`mkdir src`，`mkdir test`
1. `npm init -y` 來構建 npm 包
1. 運行命令 `npx create-ava --next`
1. 然後運行 npm-scripts：`npm run test -- --watch`

![Imgur](https://i.imgur.com/JgLks0d.jpg)

## 使用搭建好的環境

與其搭建一個 TDD 環境，不如用已經搭建好的環境。

[tdd-playground](https://github.com/calpa/tdd-playground) 自帶測試代碼以及環境。

### 使用方法

只需要 Clone 下來，然后安裝就行了。

    ```
    git clone https://github.com/calpa/tdd-playground.git
    cd tdd-playground
    npm install
    npm run test
    ```

### 如何使用這個工程？

1. 你可以移走整個 `src` 文件夾，然後重新編寫你的 js 文件。
1. 你可以移走部分的`src/*.js` 文件，然後重新編寫該部分文件。

   ```shell
   git mv ./src ./answer
   npm run test
   ```

值得注意的是，使用 `git mv` 而不是 `mv` 命令的話，可以避免 git log 混亂的問題。

## TDD 的 SOP

這裡介紹一個最簡單的工具：isEven（測試是否雙數）

這裡 isEven 可以取代為任意有效 JS 名稱：

1. 首先執行 `npm run test -- --watch` 自動監控代碼變化
1. 構建測試代碼，以 `isEven.test.js`為 Javascript 測試代碼的名稱
1. 在`test/isEven.test.js` 寫下以下代碼：

   ```JavaScript
   import test from 'ava';
   const isEven = require('../src/isEven');

   test("isEven should be a function", t => {
       t.deepEqual(typeof isEven, "function", "isEven is not a function");
   });
   ```

1. 測試代碼此時有報錯信息，原因是我們現在沒有寫`/src/isEven.js`
1. 在`/src/isEven.js`裡面寫下基本函數：

   ```JavaScript
   const isEven = () => {

   };

   module.exports = isEven;
   ```

   值得注意的是，由於我們在低版本的 Node.js 環境下，無法使用 import/export 語法。

1. （再次運行 `npm run test`），這個時候你就可以看到已經通過測試了。

## isEven 代碼解讀

1. 我們要引入測試工具，以及代碼片段：

   ```JavaScript
   const test = require("ava");
   const isEven = require("../src/isEven");
   ```

2. 我們要寫一個確認該函數是否存在的測試用例：

   ```JavaScript
   test("isEven should be a function", t => {
    t.deepEqual(typeof isEven, "function", "isEven is not a function");
   });
   ```

3. 先寫一些正常的測試用例：

   ```JavaScript
   test("should be true", t => {
     t.true(isEven(2));
     t.true(isEven(42));
     t.true(isEven(999994));
     t.true(isEven(-2));
     t.true(isEven(-10));
   });
   ```

4. 此時，`/src/isEven.js` 應該有正常的代碼：

   ```JavaScript
   const isEven = item => {
   return !(item % 2);
   };
   ```

   結果是返回 x mod 2 === 0，很簡單。

5. 然後，再測試單數。

   ```JavaScript
   test("should be false", t => {
     t.false(isEven(3));
     t.false(isEven(9));
     t.false(isEven(3));
     t.false(isEven(-9));
   });
   ```

6. 再加極端值：

   ```JavaScript
   test("should not take infinite number", t => {
     t.deepEqual(isEven(Infinity), "expect finite number");
   });

   test("should not take non integer", t => {
     t.deepEqual(isEven(0.1234), "expect integer");
   });

   test("should not take unsafe integer", t => {
     t.deepEqual(isEven(Math.pow(2, 53)), "expect safe integer");
   });
   ```

7. 再運行 `npm run test`。
   這個時候，我們就跑不過測試用例了。

8. 我們要把 isEven 改成只讀安全的整數：

   ```JavaScript
   const isEven = item => {
    if (!Number.isFinite(item)) {
      return "expect finite number";
    }

    if (!Number.isInteger(item)) {
      return "expect integer";
    }

    if (!Number.isSafeInteger(item)) {
      return "expect safe integer";
    }

    return !(item % 2);
   };
   ```

9. 再次運行 `npm run test`
   這個時候，就可以綠燈全開。

10. 然後，你就可以愉快地重構，實現方式可以不同，但必須通過測試用例。

## TODO

1. isURL
1. 判斷各種 JavaScript 基本類型的工具
1. underscore
1. moment/dayjs
1. isPromise

## 後記

如果你有興趣學習 TDD 的話，你可以到我的 [tdd-playground](https://github.com/calpa/tdd-playground) 下 fork + star。
