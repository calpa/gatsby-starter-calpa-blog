---
title: 利用JavaScript推送Web Notification
date: 2017-02-22 15:20:41
tags: Web
---

如果要推送通知的話，我們首先要請求權限：`Notification.requestPermission()`

之後檢查`Notification.permission`來查看是否擁有權限。該值會是下面三個其中之一：

1. default: 從未詢問用戶
1. granted: 用戶授權顯示通知的權限
1. denied: 用戶不授權。。。

創造一個通知很簡單，`new Notification(text)`可以了。
```
var text = "Hello, world";
new Notification(text);
```
![Imgur](https://i.imgur.com/l1lVFXZ.png)

沒有圖片的話會比較空虛，可以加入options。

```
function push() {
  var title = "這是一個標題。。。";
	var options = {
		body: "Calpa 寫了一篇文章XD",
		icon: "https://calpa.github.io/img/profile.png"
	}
	var n = new Notification(title, options);
}

push();
```
![Imgur](https://i.imgur.com/uuNPUoB.png)

如果要增加與用戶的互動，可以利用Notification的事件：
1. onshow
1. onclick
1. onclose
1. onerror

我們可以監聽`onclick`，當用戶點擊通知，瀏覽器就會跳到目標頁面。
```
n.onclick = (event) => {
	event.preventDefault();
	window.open('https://calpa.github.io/', '_blank');
}
```

## 參考資料
1. [Using the Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
