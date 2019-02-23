---
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
