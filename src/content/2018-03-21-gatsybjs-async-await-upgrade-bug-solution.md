---
templateKey: blog-post
id: 20190212r
title: Gatsbyjs async/await 更新報錯解決方法
date: 2018-03-21T03:48:03.125Z
slug: /2018/03/21/gatsybjs-async-await-upgrade-bug-solution/
description: 當我在更新 gatsbyjs 本體和 `gatsbyjs-*` 插件後，就發現構建 JavaScript 代碼的時候失敗。解決問題的過程，需要多聯想關鍵字。但簡單來說，只要安裝正確的 babel 轉換插件，就可以解決這個問題。
tags:
  - Gatsybjs
  - JavaScript
  - async-await
---

## 前言

當我在更新 gatsbyjs 本體和 `gatsbyjs-*` 插件後，就發現構建 JavaScript 代碼的時候失敗。解決問題的過程，需要多聯想關鍵字。但簡單來說，只要安裝正確的 babel 轉換插件，就可以解決這個問題。

## 問題

```
SyntaxError: Unexpected token operator «*», expected punc «(» [component---src-templates-blog-post-js-42473b53655caf4635a2.js:18311,43]
```

這裡是說在 uglifyjs 處理文本的時候，預期 ( 但出現 `*` 這一個符號，如果你是有用過 generator 的話，你就會發現這裡的線索跟 generator 有一點相似。

### generator

```JavaScript
function* a() {
  yield 1;
}
```

### function

```JavaScript
function a() {
  return 1;
}
```

## 解決方法

安裝額外的 babel 插件：

`npm i babel-plugin-transform-decorators-legacy babel-plugin-transform-regenerator`

安裝之後，babel 就可以把上面 generator 的代碼輸出為以下代碼：

```JavaScript
var _marked = [a].map(regeneratorRuntime.mark);

function a() {
  return regeneratorRuntime.wrap(function a$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
```

轉換後，可以避免 `*` 這一個符號出現在 ( 之前。

可能你會遇到這樣的報錯信息，具體錯誤位於 async 的那一行代碼上：

```
Uncaught ReferenceError: regeneratorRuntime is not defined
```

透過 stackoverflow 的回答可以得知，這依然是跟 async/await 相關的問題，使用 babel-plugin-transform-runtime 就好了。

```
npm install --save-dev babel-plugin-transform-runtime
```

別忘記在`gatsbyjs-node.js` 文件裏面加入修改 babel 設置的[代碼][1]：

```JavaScript
exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(['transform-decorators-legacy', 'transform-regenerator', 'transform-runtime']),
});
```

## 後記

果然我還是要學習一個，看著那兩個符號（`*`, `(`），也想不起居然跟 generator 有關。。。

## 參考資料

1. [gatsby build issues - likely async related][2]
2. [loganfsmyth/babel-plugin-transform-decorators-legacy][3]
3. [Regenerator transform - Babel][4]
4. [Runtime transform][5]
5. [Babel 6 regeneratorRuntime is not defined][6]

[1]: https://github.com/calpa/blog/blob/master/gatsby-node.js#L115
[2]: https://github.com/gatsbyjs/gatsby/issues/3931#issuecomment-364414141
[3]: https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
[4]: https://babeljs.io/docs/plugins/transform-regenerator/
[5]: http://babeljs.io/docs/plugins/transform-runtime/
[6]: https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
