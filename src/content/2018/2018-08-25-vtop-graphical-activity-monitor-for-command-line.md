---
templateKey: blog-post
id: 20180825a
title: vtop ﹣ 一個你用了就會愛不釋手的圖形化進程管理工具
slug: /2018/08/25/vtop-graphical-activity-monitor-for-command-line/
date: 2018-08-25T03:48:03.125Z
description: 當我查看 CPU 和系統狀態時，我希望可以更加快捷，直觀地找出問題所在。 vtop 則可以幫助我們節省分析過多數據，還提供 hjkl 一樣的 vim 鍵位，非常方便易用。如同 top 一樣，它可以顯示系統中各個進程中資源佔用狀況，並終止特定進程。
tags:
  - vim
  - vtop
  - top
  - NodeJS
  - Terminal
  - 工具
  - 命令行工具
---

## 前言

當我查看 CPU 和系統狀態時，我希望可以更加快捷，直觀地找出問題所在。 vtop 則可以幫助我們節省分析過多數據，還提供 hjkl 一樣的 vim 鍵位，非常方便易用。如同 top 一樣，它可以顯示系統中各個進程中資源佔用狀況，並終止特定進程。

![Vtop Screenshot](https://raw.githubusercontent.com/MrRio/vtop/master/docs/example.gif)

## 安裝方法

如果你沒有 Node.js 的話，那麼你需要安裝它：https://nodejs.org/en/

然後輸入：

```shell
npm install -g vtop
```

如果你使用 nvm 的話，請不要使用 `sudo`。
如果你使用 macOS，或者顯示沒有讀取文件權限的報錯的話，你可能需要執行以下命令：

```shell
sudo npm install -g vtop
```

## 如何使用

直接輸入命令就行

```bash
vtop
```

### 鍵位

上下左右為鍵盤的上下左右。

或者你可以使用英文按鍵：

k：往上移動
j：向下移動

h：放大圖像
l：縮小圖像

g：返回最頂
G：移動到最底部

dd：終止進程

## 修改主題

你可以使用 `themes/` 裡面的 **文件夾名稱** 來更換主題。

```bash
vtop —-theme brew
vtop —-theme wizard
vtop —-theme dark
```

如果你喜歡這個工具，而且不希望再使用原始的 top 的話，你可以再 `~/.bashrc` 或 `~/.zshrc` 裡面加入：

```bash
alias top="vtop"
alias oldtop="/usr/bin/top"
```

## 後記

Vim 的鍵位實在是很好用，不知不覺之間我已經把很多工具都改成這種鍵位了，比如說我把 VS Code 改成了 Vim 風格的開發環境。
