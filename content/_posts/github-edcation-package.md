---
title: 利用Github免費教育禮包更换.me域名
date: 2017-02-23 10:00
tags:
  - Github
---
![Imgur](https://i.imgur.com/PmOA3IB.png?3)

現在如果你看網址列的話，你會發現現在域名改成了`calpa.me`，而且加上了一個綠色的鎖。

<img src="https://dwa5x7aod66zk.cloudfront.net/assets/sdp-backpack-a64038716bf134f45e809ff86b9611fb97e41bbd2ccfa3181da73cf164d3c200.png" width="200px" />

## Github 禮包
如果你有學生身份的話，其中一個好處就是可以使用很多免費服務。比如說[Github Education](https://education.github.com/)禮包。它裡面有很多內容，但其中比較實用的有下面這些：
1. [AWS Educate](https://aws.amazon.com/?nc1=h_ls): Up to $110 in bonus AWS credits for a total of $75-$150
1. [Digital Ocean](https://www.digitalocean.com/): Cloud hosting
1. [Github](https://github.com/): Unlimited private repositories (normally $7/month) while you are a student.
1. [namecheap](https://www.namecheap.com/): One year domain name registration on the .me TLD (normally $18.99/year)
1. [Travis CI](https://travis-ci.org/): Private builds (normally $69/month) while you're a student
1. [UDACITY](https://www.udacity.com/): One month free access to any Nanodegree program (normally $199)

既然namecheap提供一年免費`.me` 域名，不如我就用`calpa.me`取代之前`calpa.github.io`吧。

## namecheap
在[namecheap](https://nc.me/)尋找`calpa.me`是否有人註冊，如果沒有的話就可以直接將.me加入購物車。

![Imgur](https://i.imgur.com/24oQqGZ.png)
之後，在namecheap的dashboard會看到自己域名，然後點擊MANAGE按鈕。

在Advanced DNS裡面，我們需要增加兩筆`A`記錄：
1. @ 192.30.252.153
1. @ 192.30.252.154

之後利用`dig +noall +answer username.me`命令就可以看到記錄如上一樣。

## HTTPS
如果要使用HTTPS，可以利用免費的Cloudflare服務。
1. 註冊Cloudflare
1. 打開namecheap的domain頁，將nameserver改成Custome DNS，然後加入`bella.ns.cloudflare.com`和`igor.ns.cloudflare.com`。

## 感想
添加新的域名其實不難，只是需要很多時間去等待服務器修改DNS記錄。。。

## 參考資料
1. [Configuring A records with your DNS provider - Github](https://help.github.com/articles/setting-up-an-apex-domain/#configuring-a-records-with-your-dns-provider)
