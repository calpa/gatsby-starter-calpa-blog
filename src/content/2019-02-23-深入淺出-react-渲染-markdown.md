---
slug: 深入淺出 React 渲染 Markdown
title: 深入淺出 React 渲染 Markdown
date: 2019-02-23T00:42:10.915Z
description: >-
  Markdown 提供了編寫文章的方便，我們可以透過 Remarkable，Marked 等一些解析 Markdown 工具來獲取 HTML，然後透過
  React 原生的 dangerouslySetInnerHTML 方法直接放到組件裡面。
tags:
  - Markdown
  - React
  - XSS
headerImage: '""'
templateKey: blog-post
---
## 前言

Markdown 提供了編寫文章的方便，我們可以透過 Remarkable，Marked 等一些解析 Markdown 工具來獲取 HTML，然後透過 React 原生的 dangerouslySetInnerHTML 方法直接放到組件裡面。

## 解析 Markdown 的工具

### remakable

Remarkable.js 是一個高速的 markdown 語法分析器。它支持 Commonmark，安裝不同插件，例如語法高亮。

它在 Github 上獲得了超過 4000 個 Star 數目。Facebook，Docusaurus 及其他公司也在用 Remarkable.js。

### 安裝方法

透過 npm 直接搜索 remarkable 就可以安裝它了。

```
npm install remarkable --save
```

另外，你也可以使用 cdn 來在你的 HTML 文件插入 <script> 標籤。

cdnjs.com: https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js

jsdelivr: https://cdn.jsdelivr.net/npm/remarkable@1.7.1/index.min.js

## dangerouslySetInnerHTML

React 提供 dangerouslySetInnerHTML 方法，用以取代瀏覽器 DOM 裡面的 innerHTML 方法。一般來說，直接把代碼看成 HTML 是一個危險的舉動，因為它很容易暴露跨網站指令碼 (XSS) 攻擊的風險。所以，React 會需要我們傳入一個對象，使用 __html 值來提醒我們這個是危險的舉動。

使用例子：

```javascript
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```

測試用的 XSS 代碼：

```html
<div style="color:rgb(''&#0;x:expression(alert(1))"></div> 

<img/src=%00 id=confirm(1) onerror=eval(id) 

<div id=confirm(1) onmouseover=eval(id)>X</div> 

<span/onmouseover=confirm(1)>X</span>
```

## 參考資料

1. [DOM Elements - React](https://reactjs.org/docs/dom-elements.html)
1. [jonschlinkert/remarkable - Github](https://github.com/jonschlinkert/remarkable)
