---
title: 利用JavaScript創建Web Storage
date: 2017-01-20 19:37:38
tags:
  - Web
  - JavaScript
---


# Storage
* HTML5 的 **Web Storage** 包括了兩種儲存方式：**localStorage**及**sessionStorage**。
* 儲存在Storage中的資料，以key-value pair的形式保存。
* Cookie的佔用空間非常小，大小限制于4KB左右，常見的用途是保存賬號登錄信息與登錄狀態。
* 使用Storage物件時，可以寫`localStorage`代替`window.localStorage`。

## localStorage
即使用戶關閉瀏覽器，頁面數據依然存在。下一次用戶打開該頁面，便能夠使用該資料。舉個例子，當localStorage擁有userdata，瀏覽器可以獲取用戶資料，瀏覽器會導航用戶到登入後的畫面。

```[js]
if (localStorage.getItem('userdata')) {
  login();
} else {
  register();
}
```

## sessionStorage
sessionStorage與localStorage相似，但如果用戶關閉當前頁面，sessionStorage中的數據就會被清空。

```[js]
window.sessionStorage.setItem("username", "calpa");
window.sessionStorage.getItem("username"); // calpa
```

# 方法
## 儲存
儲存資料的時候，可以利用Storage物件內的`setItem()`方法。
```[js]
localStorage.setItem(3, 3);
sessionStorage.setItem("username", "calpa");
```

## 獲取
獲取資料的時候，則會用到`getItem()`方法。
```[js]
let username = localStorage.getItem("username");
```

如果key不是string的話，獲取資料時會出現問題。
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
