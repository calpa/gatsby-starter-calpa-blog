---
templateKey: blog-post
id: 9a
title: GitGuardian - 開箱即用的 GitHub 敏感信息洩露自動提示平台
slug: /2018/09/08/gitguardian-prevent-public-exposure-of-secrets-in-github/
date: 2018-09-08T03:48:03.125Z
description: Github 作為程序員必爭之地，上傳的代碼無可避免地遭到 24x7 的自動機器人掃描。百密一疏，就算是安全意識良好的同學也會不小心上傳敏感信息。若是使用 GitGuardian 的話，我們可以馬上收到通知，處理問題，及時止血。
tags:
  - 工具
---

## 前言

Github 作為程序員必爭之地，上傳的代碼無可避免地遭到 24x7 的自動機器人掃描。百密一疏，就算是安全意識良好的同學也會不小心上傳敏感信息。若是使用 GitGuardian 的話，我們可以馬上收到通知，處理問題，及時止血。

## 介紹

無數黑客會用自動腳本掃描 Github 上面的信息，偷取資料，盜取信用卡，直接訪問數據庫，插入挖礦代碼，或者加入後門。

![GitGuardian](https://i.imgur.com/nnB1vCn.jpg)

GitGuardian 是首個實時，自動掃描開源項目代碼的平台。當發佈敏感資料到 Github 開源項目時，它就會自動提醒我們，比如說發送電子郵件。

> The first platform scanning all GitHub public activity in real time for **API secret tokens**, **database credentials** or **vault keys**. Be alerted in seconds. Integrate in minutes.

它也提供很多 API 來提示用戶問題，不過免費版本就只會發送電子郵件。

![Methods](https://i.imgur.com/aU3mF9t.jpg)

當然，你也可以設置多個郵件地址。

隨帶一提，發送電郵到 ifttt 就可以更多變化了。

## 統計

### 安全隱患數

![Secrets Found Last Day](https://i.imgur.com/5JO5XCw.jpg)

![Commits analyzed last week](https://i.imgur.com/O4lzz5A.jpg)

在 2018 年 9 月 8 日之前的一周，它每天掃描的代碼行數超過兩百萬，每小時發現洩露的秘鑰超過四十個。

### 發送電郵數量

![Imgur](https://i.imgur.com/uvkdclb.jpg)

直到現在，GitGuardian 已經發出超過十萬封關於安全問題預警的電郵。

## 使用方法

1. [訪問 GitGuardian 官網](https://www.gitguardian.com/)

1. 點擊右上角 SIGN IN WITH GITHUB

1. 點擊授權按鈕

授權成功後，你會收到來自 Github 的授權通知電郵

如果你不需要這個服務的話，你可以隨時取消授權。

![Imgur](https://i.imgur.com/iiD7flU.jpg)

## 後記

作為一個熱愛開源項目的前端工程師，不可避免地寫很多代碼上傳到 Github。要防範這一類的敏感信息暴露，除了加入自動提示外，還需要從源頭入手，避免上傳過多信息到 Github 上面。有機會我們再說如何從檢查代碼提交入手。
