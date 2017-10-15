---
title: Github上的README.md
date: 2017-01-08 11:02:58
tags: Hexo
---

Hexo在渲染的時候默認是把source下面所有的.md檔案渲染成html，這樣的話會覆蓋掉Github上的CNAME和README.md。但是我又不想這樣，我想Github Repo下面可以直接看到這個blog的README.md內容。

所以我就修改Hexo根目錄下的_config.yml：
```[markdown]
skip_render: README.md
```

然後輸入以往部署Hexo的指令就可以。
```
$ hexo g
$ hexo d
```
