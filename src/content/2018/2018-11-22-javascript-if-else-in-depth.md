---
templateKey: blog-post
id: 20181122a
title: 深入淺出代碼優化﹣if/else
slug: /2018/11/22/javascript-if-else-in-depth/
date: 2018-11-22T03:48:03.125Z
description: 對於代碼裡面的 if else，我們可以使用邏輯判斷式，或更好的三元判斷式來優化代碼。除了可以降低維護項目的成本之外，還可以提升代碼可讀性。就讓我們從最簡單的 if else 例子開始吧。
tags:
  - JavaScript
  - 前端
---

## 前言

對於代碼裡面的 if else，我們可以使用邏輯判斷式，或更好的三元判斷式來優化代碼。除了可以降低維護項目的成本之外，還可以提升代碼可讀性。就讓我們從最簡單的 if else 例子開始吧。

最簡單的 `if...else...` 或者 `switch` 都是 JavaScript 的入門，我們這裡就簡單說一下：

```JavaScript
if (workIsDone === true){
  eatDinner();
} else {
  keepCoding();
}
```

## 表達式與陳述句

首先我們要了解什麼是表達式（Expressions），什麼是陳述句（Statements）。

> 表達式是任何句子用來給 JavaScript 引擎展開，並產生值。

例如，它可以是一個數字，數組，對象，正則表達式，賦值，函數。

> 陳述句這是任何句子用來給 JavaScript 引擎讓某些事物發生，或者由副作用。

例如：條件命令式，變量，循環，返回，`try/catch/finally`。

## 條件和真假值

何為真？何為假？萬物有所變，但 JavaScript 引擎卻有所定義。

### 假

我們可以簡單地用 `A == false` 來判斷假的值。

```JavaScript
'' 或 "" 或 ``
0 或 -0
null
undefined
NaN
false
```

值得注意的是，使用模板字符串而裡面沒有填充任何值的話，也是會返回 `false` 的。

### 真

非假為真

## 如何優雅地寫出條件判斷式

還記得 `De Morgan's Laws` 嗎？

我們可以用它來簡化複雜的條件判斷式：

```JavaScript
!(A || B) === (!A && !B) // true
!(A && B) === (!A || !B) // true
```

### 實戰部分

對於 Google Analytics（GA)，我們不希望把作者本人的數據，以及測試環境的數據也上傳上去，以免干擾資料正確性。我們就可以問用戶是否已經作者本人，以及是否在測試環境上，來判斷是否需要寄送 Google Analytics 數據到 Google 服務器上。

假設兩個函數已經寫好了，比如說 `isAuthor()` 和 `isTestingEnvironment()`。

只有在不是作者本人，`或者`當前環境不是測試環境，我們才寄送數據到 Google 服務器上。

```JavaScript
const enableGA = !(isAuthor() || isTestingEnvironment());
const betterEnableGA = !isAuthor() && !isTestingEnvironment();
```

當然，更加好的寫法是只有當用戶不是作者本人，`以及`不在測試環境上，我們才寄送數據到 Google 服務器上。

```JavaScript
const enableGA = isNotAuthor() && isNotTestingEnvironment();
```

---

## 優化 if else 的不同手段

### 以 && 取代單純的 if 語句

```JavaScript
if (user && user.canDeletePost) {
  deletePost();
}
```

以上的代碼可以取代為：

```JavaScript
user && user.canDeletePost && deletePost();
```

當然，如果你認為這樣寫的代碼太長，會有副作用，那麼你可以簡化為：

```JavaScript
const userCanDeletePost = user && user.canDeletePost;
userCanDeletePost && deletePost();
```

### 以 || 取代 if else 語句

我們這裡會用一個判斷用戶密碼長度的簡單函數作為例子。如果你有更加好的代碼片段，歡迎在底部的評論區留言。

```JavaScript
let strength = null;

if (password.length > 7) {
  strength = 'Strong';
} else {
  strength = 'Weak';
}
```

以上的代碼可以取代為：

```JavaScript
const strength = (password.length > 7) && 'Strong' || 'Weak';
```

然而，使用 `&&` 加 `||` 的組合會增加程序員閱讀代碼的思維層數，一種更加好的做法是使用三元運算符（ternary operator)。

值得注意的是，如果你的 `&&` 之後 的 A 是一個 falsy 的值，它**永遠不會返回，而是返回 B。**

```JavaScript
condition && A || B;

// 例如：
let password = 'abcdefg1234';
(password.length > 7) && false || 'Weak'; // 'Weak'

password = 'a';
(password.length > 7) && false || 'Weak'; // 'Weak'
```

我們可以使用三元運算符而不是邏輯運算符來更好地表達語句。

### 三元運算符

最簡單的三元運算符會是，條件為真？返回 A，不然返回 B。

```
condition ? A : B;
```

針對以上的例子，判斷密碼長度的代碼片段可以改為：

```JavaScript
const strength = (password.length > 7) ? 'Strong' : 'Weak';
```

另外一個例子，就是在支持多瀏覽器的 AJAX 庫裡面可以得出的代碼片段：

```JavaScript
let xmlhttp = null;

if (window.XMLHttpRequest) {
  // 現代瀏覽器
  xmlhttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // 舊 IE 版本 (IE <= 6)
  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
```

我們可以使用邏輯運算符來優化以上代碼片段：

```JavaScript
const xmlhttp = window.XMLHttpRequest && new XMLHttpRequest()
      || window.ActiveXObject && new ActiveXObject('Microsoft.XMLHTTP')
      || null;
```

或使用更加好的三元運算符來優化以上代碼片段：

```JavaScript
const xmlhttp = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : window.ActiveXObject
    ? new ActiveXObject('Microsoft.XMLHTTP')
    : null;
```

值得注意的是，三元判斷式是*從右到左*結合的：

```JavaScript
// 這個判斷式
A ? B : C ? D : E ? F : G

// 等同以下判斷式
(A ? B : (C ? D : (E ? F : G))) // B
```

然而，你可能是想寫：

```JavaScript
(((A ? B : C) ? D : E )? F : G) // F
```

所以，記得自己加括號來控制代碼如何結合解析。

## 後記

上個星期，組織舉辦了一場前端 Code Review 的大會，其中優化 `if...else...` 的手法，讓我有所體悟。之後，我花了點時間研究邏輯判斷式及三元判斷式。希望能夠達到知其然，知其所以然的階段。

對於第一段代碼，我們可以簡化為以下代碼：

```JavaScript
workIsDone ? eatDinner() : keepCoding();
```

順帶一提，不知道為什麼這一篇文章的底部評論區有問題，請移玉步到右上角的留言簿。。。

## 參考資料

- [Conditional JavaScript for Experts - Hacker Noon][1]
- [De Morgan's laws - Wikipedia][2]

[1]: https://hackernoon.com/conditional-javascript-for-experts-d2aa456ef67c
[2]: https://en.wikipedia.org/wiki/De_Morgan%27s_laws
