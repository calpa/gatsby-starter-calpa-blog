---
title: 前端程序員的必備工具清單（MacOS）
header-img: Vb56RuU.jpg
header-size: contain
header-bg-color: 00d8e4
background-position-y: 50%
# theme: white
magic: true
date: 2017-10-02 21:53:00
tags:
  - Front End
  - MacOS
---
## 前言

工欲善其事，必先利其器。一套完善的工具可以幫助我們事半功倍。而作為前端程序員的我，也是花了點時間為自己配置了一套工具。如果你也是使用 MacOS 作為你的開發系統的話，那麼你可以看一下這篇文章。


## 日常

### [Alfred 3](https://www.alfredapp.com/)

![Alfred Search](https://i.imgur.com/5yaDRiv.jpg)

Alfred 是一個強大的效率工具，而且它更加是一個全面的自動化工具平台。你可以從下圖感受一下：

![Alfred 的功能](https://i.imgur.com/RK1OiPq.png)

你只要在 Alfred 的輸入框，寫下你想要的東西前幾個字，它便會顯示你所希望的命令。不過最強大的是可以和 MacOS 內置的全文搜尋一起用，也就是你輸入`in` 命令，它就可以全局全文搜尋。

![全局搜尋](https://i.imgur.com/925QlWY.png)

另外，它也可以記錄你所 Copy 過的歷史，如果你使用 Emacs 的 Kill Ring 的話，他就會自動記錄代碼。我工作的時候就經常應用到 Alfred，因為有很多代碼都需要刪除，然後幾個小時後就有人跟你說那個代碼需要還原。。。

![Clipboard 歷史記錄](https://i.imgur.com/SsJkjae.png)

另外，它的 Powerpack 和 Workflows 提供 Alfred 一個升級的可能性（腦洞），讓你可以寫出自己的代碼，並快捷執行。

### Aria2GUI

下載神器，網上有很多不同的前端界面，例如 [Yet Another Aria2 Web FrontEnd](https://github.com/yangshun1029/aria2gui)

![Yet Another Aria2 Web FrontEnd](https://i.imgur.com/YT38J2q.png)

### [ImageOptim](https://imageoptim.com/mac)

![ImageOptim 界面](https://i.imgur.com/tEgTJmb.png)

沒有經過優化或壓縮的圖片，直接上傳到伺服器或讓其他用戶下載的話，需要的時間都會很長，所以我的圖片大多都會經過 ImageOptim 優化一下。ImageOptim 是一個開源，免費的無損圖片優化工具。

### [Moom](https://manytricks.com/moom/)

Mac 本身沒有提供類似 Windows 上面移動，放大視窗的功能，因此會經常看到有些人的電腦很多個視窗重疊了。。。

![Align Left](https://i.imgur.com/dGOOGRz.jpg)

### [TotalSpaces2](https://totalspaces.binaryage.com/)

![TotalSpaces2](https://i.imgur.com/cAizggh.png)

一個超好用的 Mac 桌面空間管理工具，包含以下六大功能：
1. 可以上下左右放置桌面佈局，而不是只有默認的向左向右
	![上下左右的桌面佈局](https://i.imgur.com/j0xBUi1.png)

1. 觸控板可以跳轉上下左右的桌面格子
	![觸控跳轉格子](https://i.imgur.com/f3uGPqJ.png)

1. 桌面格子可以設置默認的應用
	![設置默認應用](https://i.imgur.com/2KEOJhI.png)

1. 全面的桌面概覽
	![全面的桌面概覽](https://i.imgur.com/8pZTHJc.png)
1. 更加炫酷的桌面跳轉效果
	![跳轉效果](https://i.imgur.com/69cceh0.png)
1. 屏幕的四個角落可以觸發各自的動作
	![屏幕角落觸發動作](https://i.imgur.com/HtnXX4a.png)

應用場景：

當只有一個屏幕，又要同時運行多個佔用全屏的應用，你可能需要切來切去。透過使用 TotalSpaces2，你就可以輕鬆切換屏幕，比如說下面看伺服器狀態，上面看代碼區域。

另外，你也可以設置 Terminal 應用在下方屏幕格子，編輯器在上方屏幕格子。

### [Eagle](https://eagle.cool/macOS)

![Eagle](https://i.imgur.com/6JGSOld.png)

Eagle 是一個專門為設計師而打造的圖片收藏及管理工具。雖然我不是設計師，但是我有收藏大量的圖片，尤其是二次元動畫的截圖。對於這麼多的圖片，我曾經都很苦惱，因為截圖之後無法再次調用。。。幸好有這個工具，我就可以輕鬆地收藏網頁圖片，或者截屏到 [Eagle](https://eagle.cool/macOS)。之後可以打上標籤，或者人物的台詞。

![感覺圖片太多，需要找個工具管理圖片www](https://i.imgur.com/VnB1ItB.png)

## Coding
### [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

![oh-my-zsh](https://i.imgur.com/otYtqAu.png)

為什麼你的 Terminal 使用上來那麼不一樣？是的，**oh-my-zsh** 背後的社區驅動著我（逃。。。

有時間可以說說到底為什麼 **oh-my-zsh** 那麼強大，以及它的配件。

### [Solarized 配色方案](http://ethanschoonover.com/solarized)

![兩種配色方案](https://i.imgur.com/mf5wi85.png)

![清晰易見](https://i.imgur.com/Vtm0vIa.png)

![包含的顏色](https://i.imgur.com/7O38J5g.png)

### [SourceTree](https://www.sourcetreeapp.com/)

![SourceTree 界面](https://i.imgur.com/7vtlS8m.png)

以前沒有習慣命令行的時候，我是用 SourceTree 來看 Git 歷史的。雖然我現在喜歡使用命令行來操作 Git，但是比較複雜的 Git 操作還是需要專門的工具的，例如 SourceTree 就是一個不錯的選擇。

## 高能區域（編輯器）

無論是什麼神的編輯器，還是編輯器的神，取其精華去其糟粕才是最好的。

### [Atom](https://atom.io/)

![Atom](https://i.imgur.com/B47vleN.png)

Atom 是一個基於 Electron 的現代開源文本編輯器，你可以直接黑掉它的核心，甚至改得完全不一樣。你可以使用 HTML，CSS/Less 及 JavaScript 修改 Atom的功能，它的功能包括但不限於：

1. 支持跨平台
  1. 內置的 Package 管理系統

	你可以在 Atom 直接搜尋 Package，並且安裝 Package。

  1. 自動補全
  1. 瀏覽檔案系統
  1. 全局搜尋

![編輯器 with Git Diff](https://i.imgur.com/IDDanXB.png)

![Atom 設置面板](https://i.imgur.com/03wyXY4.png)

![內置的 Package 管理系統](https://i.imgur.com/RTMhhex.png)

### Emacs

> Emacs = Escape + Meta + Alt + Control + Shift

![Emacs Hello World](https://i.imgur.com/HmiuWMz.png)

其實我是蠻喜歡 Emacs 的思想，以及它的按鍵。因為寫代碼就好像輸入打遊戲需要的特殊命令，一種寫代碼就是玩遊戲的概念。我養成盲打的習慣，好像也是因為 Emacs 而開始的。。。

### Vim

如果我要簡單的 Git Commit，我就可以直接寫 Git Commit 記錄，然後輸入`:wq`，並不需要那麼複雜的工具。

## 瀏覽器

1. [Google Chrome](https://www.google.com/chrome/index.html)

這個是個必需品吧。。。

1. [Postman](https://www.getpostman.com/)

一個超級好用的 HTTP 請求工具，誰用誰知道。

## 相關文章
1. [《神兵利器 -- HHKB Pro 2 開箱文》](https://calpa.me/2017/07/02/introduction-to-hhkb-pro-2/)
