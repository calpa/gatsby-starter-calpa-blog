---
templateKey: blog-post
id: https://calpa.me/2017/11/08/you-dont-know-javascript-eslint-config/
title: 你可能不知道的 JavaScript 代碼規範
slug: /2017/11/08/you-dont-know-javascript-eslint-config/
date: 2017-11-08T03:48:03.125Z
description: 良好的代碼規範，能夠提高代碼的可閱性，使得項目維護更友好。除了自己設定一個規範外，我們也可以借鑒一下現在流行的代碼規範，讓我們成長之後，再去看細節。
tags:
  - 閱讀
  - JavaScript
---

## 前言

良好的代碼規範，能夠提高代碼的可閱性，使得項目維護更友好。除了自己設定一個規範外，我們也可以借鑒一下現在流行的代碼規範，讓我們成長之後，再去看細節。

![Code Quality: Good Code vs Bad Code](https://i.imgur.com/DPltr6s.png)

## Airbnb

Airbnb 是其中一個最流行的 JavaScript 代碼規範，它差不多包含所有 JavaScript 的角度。它也是我的個人項目所使用的代碼規範。如果你的項目是基於 React 的，那麼你可以選擇安裝 [eslint-config-airbnb][1]，或者你可以選擇最基本的 [eslint-config-airbnb-base][2]。

[eslint-config-airbnb][1] 包含 ECMAScript 6 + 以及 React 的 ESLint 代碼規範。在安裝 `eslint-config-airbnb` 的時候，它會一同安裝 `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`。如果你的項目不是 React 的話，那麼你可以選擇`eslint-config-airbnb-base`。

```bash
npm install eslint-config-airbnb
```

[eslint-config-airbnb-base][2] 包含 ECMAScript 6 + 的 ESLint 代碼規範。安裝它的時候，它會需要 `eslint` 和 `eslint-plugin-import`。

```bash
npm install eslint-config-airbnb-base
```

然後在你的 `.eslintrc` 加入 `"extends": "airbnb-base"` 就可以了。

Airbnb 的完整代碼規範可以在 [airbnb/javascript][3] 上閱讀。

## Standard

除了 Airbnb 的代碼規範之外，有很多高科技公司在用 Standard 的代碼規範，包括但不限於 NPM, Github, mongoDB, ZenDesk。

![Companies that use Standard][4]

這裡是官網提到的一些 Standard 規範：

- 兩個空白 － 當作縮排
- 字串用單引號 － 除非要避免跳脫字元
- 沒有不必要的變數
- 不要加分號
- 絕對不要用 ( 、 [ 當開頭
- 這是不用分號 唯一 可能遇到的問題 － 那就自動幫你檢查吧！
- 關鍵字後加空白 if (condition) { ... }
- 函數名稱後加空白 function name (arg) { ... }
- 統一用 === 取代 == － 但是 obj == null 可以用來檢查 null || undefined。
- 一定要例外處理 node.js 中的 err 參數
- 一定要對瀏覽器中的全域變數加上 window 前綴 － 除了 document 和 navigator 可以不用
- 避免使用那些命名得很爛的全域變數，像是 open 、 length 、 event 和 name。

你可以透過 `eslint-config-standard` 來自動校對，改善你的代碼。

```shell
npm install eslint-config-standard
```

[Standard 繁體中文文檔][5]
[Standard 簡體中文文檔][6]

## Idiomatic

它的思想是無論誰改進項目的代碼，都應該像只有一個人寫代碼。

你可以透過 eslint-config-idiomatic 來自動校對，改善你的代碼。

```bash
npm install eslint-config-idiomatic
```

[Idiomatic - Github][7]

備註：

use version ^3.0.0 for ESLint version ^3.x.x.
use version ^2.0.0 for ESLint version ^2.x.x.
use version ^1.0.0 for ESLint version ^1.x.x.

在你的 .eslintrc 內輸入：

```
{
  "extends": "idiomatic"
}
```

## Google

你都可以像 Google 工程師一樣編寫同樣風格的代碼。

你可以透過 eslint-config-google 來自動校對，改善你的代碼。

```bash
npm install eslint eslint-config-google
```

我們可以在 [Google - GitHub Pages][8] 上閱讀它的代碼規範。

## jQuery

如果你想要幫助 jQuery 改善它的代碼的話，你可以在 [jQuery 的官網][9] 上閱讀它的代碼規範。

## 總結

自從看了《Clean Code》一書之後，我感覺寫代碼不只是一種手藝，還是藝術。可能你看過去感覺都是 JavaScript，但是讀著讀著一些開源項目，就會感受到代碼可以有多麼優雅，同時可以有多麼不雅。。。為了減少他人說 WTF 的機會，我們還是研究一下如何把自己的代碼變得更加優雅吧。

如果你是第一次使用 JavaScript 代碼規範的話，那麼你可以選擇 Airbnb 作為你的代碼規範。Airbnb 的文檔可閱性是不錯的，而且把現有項目加上 eslint 也不是什麼難事。

如果要仔細地說代碼規範的好處，重要性的話，我們可以在下一篇文章討論。

## 參考資料

1. [Clean Code 電子書](http://www.cbs.dtu.dk/courses/27610/clean_code_index.html)
1. [5 JavaScript Style Guides — Including AirBnB, GitHub, & Google](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa)

[1]: https://www.npmjs.com/package/eslint-config-airbnb
[2]: https://www.npmjs.com/package/eslint-config-airbnb-base
[3]: https://github.com/airbnb/javascript
[4]: https://i.imgur.com/fw8cwny.jpg
[5]: https://github.com/standard/standard/blob/master/docs/README-zhtw.md
[6]: https://github.com/standard/standard/blob/master/docs/README-zhcn.md
[7]: https://github.com/rwaldron/idiomatic.js/
[8]: https://google.github.io/styleguide/jsguide.html
[9]: https://contribute.jquery.org/style-guide/js/
