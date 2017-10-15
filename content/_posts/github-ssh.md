---
title: 利用ssh連接Github的方法
date: 2017-04-11 16:30
tags:
  - Github
---

其實很簡單，按照下面打就是了。。。

1. `ls -la ~/.ssh/`
1. `cat ~/.ssh/id_rsa.pub` 複製貼上到Github SSH Page
1. `ssh git@github.com`
