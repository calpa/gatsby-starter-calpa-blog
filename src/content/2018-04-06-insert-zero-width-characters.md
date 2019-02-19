---
templateKey: blog-post
id: 20180406a
title: 【方法】在直接複製貼上內容的時候，可能已經不知不覺注入了一段不可視的「空白」
slug: /2018/04/06/insert-zero-width-characters/
date: 2018-04-06T03:48:03.125Z
description: 趁著深夜有空，我就翻譯了一篇有趣的文章。這篇文章是說如何插入任意文本到任意文本。有時候，文章都會被某些網站會直接引用博客內容。。。這一類的插入空白字符串方法，可以成為其中一個有力的追蹤源頭的線索。
tags:
  - 閱讀
  - JavaScript
---

## 前言

趁著深夜有空，我就翻譯了一篇有趣的文章。這篇文章是說如何插入任意文本到任意文本。有時候，文章都會被某些網站會直接引用博客內容。。。這一類的插入空白字符串方法，可以成為其中一個有力的追蹤源頭的線索。

空白符號不可視，不可說，那就是一個謎一樣的地方了。

經過實測，瀏覽器直接 Copy & Paste 都會把空白字符帶過去的。

[Be careful what you copy: Invisibly inserting usernames into text with Zero-Width Characters][1] 這一篇文章提到了加入謎一樣的空白符號的方法。

簡單來說就是把每一個要加密的文字轉換為不可視符號，然後塞到原本的文本裏面。

## 方法

第一步：分割文字，並轉換成二進制格式的符號。

```javascript
const zeroPad = num => ‘00000000’.slice(String(num).length) + num;
const textToBinary = username => (
  username.split('').map(char =>
    zeroPad(char.charCodeAt(0).toString(2))).join(' ')
);
```

第二步：對於每一個二進制符號，並進一步編譯為加密符號

```javascript
const binaryToZeroWidth = binary =>
  binary
    .split("")
    .map(binaryNum => {
      const num = parseInt(binaryNum, 10);
      if (num === 1) {
        return ""; // 零距離的空白
      } else if (num === 0) {
        return "‌"; // 零距離的非連接工具 (NON-JOINER)
      }
      return "‍"; // 零距離的連接工具 (JOINER)
    })
    .join(""); // 零距離的不中斷空白
```

第三步：加入這個不可視的符號到文字就行。

## 後記

Confidential Announcement: ​﻿‌﻿‌﻿​﻿‌﻿‌﻿‌﻿‌﻿​﻿‌﻿‌﻿‌﻿‌﻿​﻿‌﻿‌﻿‍﻿​﻿​﻿‌﻿‌﻿​﻿​﻿‌﻿‌﻿‌﻿​﻿‌﻿​﻿​﻿​﻿​﻿‍﻿​﻿​﻿​﻿​﻿‌﻿​﻿‌﻿‌﻿‌﻿​﻿‌﻿​﻿​﻿​﻿‌﻿‍﻿​﻿​﻿​﻿‌﻿​﻿‌﻿​﻿‌﻿‌﻿​﻿​﻿‌﻿‌﻿‌﻿‌﻿‍﻿​﻿​﻿‌﻿​﻿‌﻿​﻿​﻿​﻿​﻿‌﻿​﻿‌﻿​﻿‌﻿‌﻿‍﻿​﻿‌﻿‌﻿‌﻿​﻿​﻿​﻿​﻿​﻿‌﻿‌﻿‌﻿‌﻿‌﻿​﻿​﻿‍﻿​﻿‌﻿‌﻿​﻿‌﻿‌﻿‌﻿‌﻿‌﻿​﻿​﻿‌﻿​﻿‌﻿‌﻿​﻿‍﻿​﻿‌﻿​﻿‌﻿​﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿​﻿‌﻿‌﻿‌﻿‍﻿​﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿‌﻿​﻿‍﻿​﻿‌﻿​﻿​﻿‌﻿​﻿​﻿‌﻿​﻿‌﻿​﻿‌﻿‌﻿‌﻿‌This is some confidential text that you really shouldn't be sharing anywhere else.

希望大家玩得開心 www

## 延伸閱讀

1. 關於代碼洩密的那些事
1. [Zero width Playground][2]
1. [Be careful what you copy: Invisibly inserting usernames into text with Zero-Width Characters][1]

[1]: https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66
[2]: https://umpox.github.io/zero-width-detection/
