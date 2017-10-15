---
title: Git多人合作開發工作流程
date: 2017-04-01 22:22
tags:
  - Git
---

## 流程
1. `git fetch` 確認遠端數據庫的內容
1. `git checkout dev` 從現有支線轉到開發支線
1. `git pull` 下載遠端數據庫到本地
1. 永遠使用`git pull`之後才使用`git push`
1. `git commit -m "Message"` 很實用。。。
1. `git checkout -b "New Branch"` 可以直接開新支線，並切換到那條支線上
1. `git push origin "updated-branch"` 就可以推上去遠端數據庫

## fetch
使用`fetch`指令可以避免更改本地數據庫，同時更新其他人更新遠端數據庫後的內容。

## checkout
`checkout`切換本地數據庫支線，正常情況下應該建立超過兩條支線，比如說`master`只用作發佈更新版本，`dev`用作開發。

個人開發項目和與他人一同開發項目是兩回事來的。。。
