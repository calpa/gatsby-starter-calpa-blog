---
templateKey: blog-post
id: 20171126a
title: Node-prune﹣﹣專門移除 node_modules 不必要檔案的輕量工具
date: 2017-11-26T03:48:03.125Z
slug: /2017/11/26/node-prune-remove-unnecessary-files-from-node-modules/
description: 如果你有試過打包整個 Node 項目到服務器上，那麼你發現自己的項目體積比較大，其中一個原因是 `node_modules` 文件夾包含很多不必要的檔案。在使用 npm 安裝不同插件時，往往會包含很多不必要的文件夾，例如`example`, `doc`。要麼我們就是手動刪除它們，要麼我們就是自己寫一個自動腳本。而開發 Koa、Co、Express 的 TJ 大神則提供了一個簡單輕巧的工具。我們可以學習一下他的思路，以及使用這個工具。
tags:
  - Node.js
  - JavaScript
---

## 前言

如果你有試過打包整個 Node 項目到服務器上，那麼你發現自己的項目體積比較大，其中一個原因是 `node_modules` 文件夾包含很多不必要的檔案。在使用 npm 安裝不同插件時，往往會包含很多不必要的文件夾，例如`example`, `doc`。要麼我們就是手動刪除它們，要麼我們就是自己寫一個自動腳本。而開發 Koa、Co、Express 的 TJ 大神則提供了一個簡單輕巧的工具。我們可以學習一下他的思路，以及使用這個工具。

## 簡述

node-prune 移除所有 `node_modules` 內的不必要的檔案，例如 markdown, typescript 源碼。具體的移除內容可以看下方的[移除檔案分析][1]。

Github: [tj/node-prune](https://github.com/tj/node-prune)

![node_modules][2]

## 安裝方法

### Go

可以透過 Go 直接拉代碼，然後安裝：

```bash
go get github.com/tj/node-prune/cmd/node-prune
```

### Shell

另外，如果你沒有 Go 的話，可以直接使用一下命令安裝到 `/usr/local/bin`： (2018-08-25 更新)

```bash
curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
```

## 使用方法

你可以直接在項目的文件夾裡使用：

```bash
node-prune

files total 27,330
files removed 3,990
size removed 13 MB
   duration 200ms
```

或者你可以在其他文件夾裡面用，例如 `node_modules`

```bash
node-prune path/to/node_modules

files total 27,330
files removed 3,990
size removed 13 MB
   duration 200ms
```

## 移除檔案分析

### 移除的檔案

#### 自動化

這些文件你都會只用一次，無需一同打包上生產環境。

```
"Makefile"
"Gulpfile.js" // Gulp 任務自動管理工具文件
"Gruntfile.js" // Grunt 任務自動管理工具文件
```

#### 與寫代碼時相關的

無論你寫代碼所需要的檔案，還是那些編輯器自動產生的檔案，都不是必須的。

```
".DS_Store" // Mac OS X 下的隱藏文件，用於儲存目錄的自定義屬性
".tern-project" // Tern server 所需文件
".gitattributes" // Git 屬性文件
".editorconfig" // 統一代碼格式的文件
".eslintrc" // 用於統一 Eslint 代碼風格 (JSON)
".eslintrc.js" // 用於統一 Eslint 代碼風格 (JavaScript)
".eslintignore" // 告訴 Eslint 忽略特定文件和目錄
".npmignore" // 告訴 NPM 忽略特定文件和目錄
".jshintrc" // 用於配置 JSHint
".flowconfig" // 用於配置 Facebook 出品的 Flow-typed
".documentup.json"
".yarn-metadata.json"
```

#### 自動化構建

```
".travis.yml" // 用於配置 Travis 自動化測試，部署
"appveyor.yml" // 用於配置 AppVeyor 自動化測試，部署
"circle.yml" // 用於配置 Circle 自動化測試，部署
".coveralls.yml" // Coverall
```

#### 給人類看的

這是最小化項目的其中一個步驟，畢竟你上傳的東西和項目開發的文件夾是不同的。

```
"CHANGES" // 用於記錄項目改動
"LICENSE.txt" // 開源協議
"LICENSE" // 同上
"AUTHORS" // 作者
"CONTRIBUTORS" // 貢獻者
```

#### Yarn 相關

```
".yarn-integrity" // Yarn 文件
".yarnclean", // Yarn 文件
```

### 移除的檔案（副檔名）

如果檔案有以下副檔名的話，也會一同刪除。

```
".md", // Markdown 檔案
".ts", // TypeScript 源碼
".jst", // Javascript Templates (JST)
".coffee", // CoffeeScript
".tgz", // tgz 壓縮檔案
".swp", // vi 產生檔案
```

### 移除的目錄

測試用："\_\_tests\_\_","test","tests","powered-test"

文件類："docs","doc"

隱藏文件夾：".idea",".vscode"

Demo 類："website","images","assets","example","examples"

自動化工具類："coverage",".nyc_output",".circleci"

Github 用： ".github"

## 感想

我們可以按照這個思路，自己寫一個基於 Node.js 的腳本。另外，在 Github 上面，有人寫了一個等同 Node-prune 的 Shell 腳本。

```
#!/usr/bin/env bash
find node_modules \( -name '__tests__' -o \
-name 'test' -o \
-name 'tests' -o \
-name 'powered-test' -o \
-name 'docs' -o \
-name 'doc' -o \
-name '.idea' -o \
-name '.vscode' -o \
-name 'website' -o \
-name 'images' -o \
-name 'assets' -o \
-name 'example' -o \
-name 'examples' -o \
-name 'coverage'-o \
-name '.nyc_output' -o \
-name "*.md" -o \
-name "*.ts" -o \
-name "*.jst" -o \
-name "*.coffee" -o \
-name "*.tgz" \) -exec rm -rf {} \;
```

[1]: #移除檔案分析
[2]: https://i.imgur.com/rpR4yVl.jpg
