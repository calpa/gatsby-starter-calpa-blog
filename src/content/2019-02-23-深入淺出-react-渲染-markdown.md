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

```javascript
function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
```
