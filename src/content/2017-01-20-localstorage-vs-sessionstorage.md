---
templateKey: blog-post
id: 2017-01-20a
title: localStorage vs sessionStorage
slug: /2017/01/20/localstorage-vs-sessionstorage/
date: 2017-01-20T03:48:03.125Z
description: LocalStorrage 和 SessionStorage 的對比
tags:
  - Web
  - JavaScript
---

# Storage

- HTML5 的 **Web Storage** 包括了兩種儲存方式：**localStorage**及**sessionStorage**。
- 儲存在 Storage 中的資料，以 key-value pair 的形式保存。
- Cookie 的佔用空間非常小，大小限制于 4KB 左右，常見的用途是保存賬號登錄信息與登錄狀態。
- 使用 Storage 物件時，可以寫`localStorage`代替`window.localStorage`。

## localStorage

即使用戶關閉瀏覽器，頁面數據依然存在。下一次用戶打開該頁面，便能夠使用該資料。舉個例子，當 localStorage 擁有 userdata，瀏覽器可以獲取用戶資料，瀏覽器會導航用戶到登入後的畫面。

```[js]
if (localStorage.getItem('userdata')) {
  login();
} else {
  register();
}
```

## sessionStorage

sessionStorage 與 localStorage 相似，但如果用戶關閉當前頁面，sessionStorage 中的數據就會被清空。

```[js]
window.sessionStorage.setItem("username", "calpa");
window.sessionStorage.getItem("username"); // calpa
```

# 方法

## 儲存

儲存資料的時候，可以利用 Storage 物件內的`setItem()`方法。

```[js]
localStorage.setItem(3, 3);
sessionStorage.setItem("username", "calpa");
```

## 獲取

獲取資料的時候，則會用到`getItem()`方法。

```[js]
let username = localStorage.getItem("username");
```

如果 key 不是 string 的話，獲取資料時會出現問題。

```[js]
localStorage.3 = 3; // Uncaught SyntaxError: Unexpected number
```

## 清除

清除某個資料，可以用`removeItem()`

```[js]
window.localStorage.removeItem("username");
```

清除所有資料，可以用`clear()`

```[js]
window.localStorage.clear();
window.sessionStorage.clear();
```

# 參考資料

1. [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
