---
templateKey: blog-post
id: 20181009a
title: Hackoberfest 2018 ﹣ 面向所有人群的開源社區最大活動
slug: /2018/10/09/Hackoberfest-2018-support-open-source-earn-limited-edition-t-shirt/
date: 2018-10-09T03:48:03.125Z
description: 世界上不同的程序員，因開源活動而連接一起。這次 Hacktoberfest 活動除了可以拿到活動的限量衣服和貼紙之外，更可以認識到世界上不同的程序員。我看著不斷而來的討論和 PR，我找回了自己在編程上的熱情。如果你有興趣參與開源活動，但不知道如何入手的話，它會是一個不錯的起點。
tags:
  - JavaScript
  - 前端
---

## 前言

世界上不同的程序員，因開源活動而連接一起。這次 Hacktoberfest 活動除了可以拿到活動的限量衣服和貼紙之外，更可以認識到世界上不同的程序員。我看著不斷而來的討論和 PR，我找回了自己在編程上的熱情。如果你有興趣參與開源活動，但不知道如何入手的話，它會是一個不錯的起點。

Hacktoberfest 是一個由 DigtialOcean, Github, Twilio 共同打造的一年一度全球開源活動。參與者只需在十月一日到十月三十一日期間，在 Github 上五個遞交 Pull requests，就可以獲得活動的衣服。

![](https://hacktoberfest.digitalocean.com/assets/logo-hacktoberfest-658b5aa2bd34e782d29c40bf6afbdff00f20fe1328efa6da17743878ba8db66f.png)

## 成功例子

去年我就提交了五個簡單的 PR，從而獲得免費的衣服和貼紙。

相比起去年，這次活動送出的衣服更加多，總共五萬件。

![Imgur][1]

雖然活動剛剛開始，已有超過一萬個成功完成挑戰的參加者。

而我也是其中一份子。

![Imgur][2]

從上圖可見，每天都有幾千到一萬多的 Pull Request。

### 初心者

如果你剛剛入門開源的話，那麼你可以看一下[關於開源（英文） - DigitalOcean][3]。

如果你第一次參與貢獻的話，你可以看一下[如何提交 PR （英文） - DigitalOcean][4]。

你也可以到這三個網址搜尋善待初心者的開源項目。

- [Up For Grabs][5]
- [First Timers Only][6]
- [Awesome for Beginners][7]

你也可以到我的博客查看最新的 issues。

另外，你也可以從 [TwilioQuest 遊戲][8]中學習如何貢獻到開源項目裡面。

### 項目運營者

如果你也像我一樣，有自己的[個人項目][9]，那麼你可以簡單地在現有 issues 加上 `Hacktoberfest` 標籤。

透過以下這些步驟，你可以大幅度提升社區其他人參與你項目的熱情度。

- 增加開源項目徽章

透過增加徽章，你可以讓你的項目看起來更加專業。

![Imgur](https://i.imgur.com/6nIQglf.jpg)

你可以透過 [Shields IO][16] 增加各種各樣的徽章，它提供不同開源項目常用的徽章，例如 issues, forks, stars, 開源協議。

而增加 Accept Pull Requests 的徽章，可以讓你的項目開放性更加高。

![Accept Pull Requests][10]

- 增加 `CONTRIBUTING.md` (.github/CONTRIBUTING.md)
  添加貢獻者閱讀檔案，可以幫助其他人了解如何參加這個項目
  例如你可以利用下面的例子：

```md
# Contribution Guide

Before starting, you may need to know how to contribute in a good way. You can follow the rules here:

## Code Style

Commits should follow the Angular commit message guidelines. This is because our release tool uses this format for determining release versions and generating changelogs.

## Issues

If you encounter an issue with the Node.js library, you are welcome to submit a bug report. Before that, please search for similar issues. It's possible somebody has already encountered this issue.

## Pull Requests

If you want to contribute to the repository, follow these steps:

- Fork the repo.
- Develop and test your code changes: `npm install`
- Commit your changes.
- Push to your fork and submit a pull request.
```

這些文檔可以幫助開源社區的程序員參與你的項目。

- 提供一些充分定義，不同難度的 issue

![Imgur][11]

透過 CodeFactor，你可以一鍵生成帶代碼地址，以及報錯描述的 issue。

使用 CodeFactor 後，我已經修復了幾個不影響系統操作的小問題。

- 保持包容的態度
  值得注意的是，記得抱著一個開放而包容的態度，畢竟很多人（包括我）都是第一次參加這個活動。。。

### 貢獻者

你可以簡單地利用 `Hacktoberfest` 這個標籤來尋找哪些項目比較適合你做。

值得注意的是，你可以參與那些你經常用的工具項目。

在你貢獻之前，記得做以下幾個步驟：

1. 了解貢獻是可以任何事情，包括修復錯誤，文檔更新，添加功能，以及最常見的文法，拼寫錯誤
1. 看一下 `CONTRIBUTING.md`
1. 學習如何使用 `Rebase, 更新 Pull Request`

## 後記

![Imgur][12]

在去年的時候，我還是一個剛剛入門的初心者。所以只參加了一些簡單的項目。

然而，這個過程卻讓我學習到如何 fork, rebase, 開啟 pull request.

參與活動，並不需要修改很複雜的代碼，你可以提交一些簡單的修改，例如文檔修改，重構公共部分等。

![Imgur][13]

可以預見的是，完成挑戰的參加者會越來越多。

---

透過這次活動，我也把博客系統裡面一些簡單，已經有思路去解決而又沒有修改的問題放出來。

開源社區的反應也是不錯，往往放出一個問題，一個小時到兩個小時就已經給人認領了。

而且不到幾天，就已經把問題解決好了。

![Imgur][14]

直到現在，已經有十幾個 Pull Request 成功合拼到 master 分支。

千里之行，始於足下。

如果你有興趣參加這個活動的話，不妨考慮一下提交 issue 和 pull request 到[我的博客系統][9]。

## 參考資料

1. [Hacktoberfest 2018 官網][15]
1. [An Introduction to Open Source - DigitalOcean][3]
1. [How To Create a Pull Request on GitHub][4]
1. [Up For Grabs][5]
1. [First Timers Only][6]
1. [Awesome for Beginners][7]
1. [TwilioQuest 遊戲][8]
1. [calpa/blog: Calpa's Blog Starter - Github][9]
1. [Shields IO][16]

[1]: https://i.imgur.com/ZYOQWAt.jpg
[2]: https://i.imgur.com/OlFRqK3.jpg
[3]: https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source
[4]: https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
[5]: https://up-for-grabs.net/#/
[6]: https://www.firsttimersonly.com/
[7]: https://github.com/mungell/awesome-for-beginners
[8]: https://www.twilio.com/quest/mission/28
[9]: https://github.com/calpa/blog
[10]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[11]: https://i.imgur.com/vyXmyKy.jpg
[12]: https://i.imgur.com/cloy5QZ.jpg
[13]: https://i.imgur.com/o961D79.jpg
[14]: https://i.imgur.com/ZMV1Hby.jpg
[15]: https://hacktoberfest.digitalocean.com/
[16]: https://shields.io/#/
