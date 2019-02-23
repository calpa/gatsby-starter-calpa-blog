---
slug: how-to-use-react-to-render-markdown-articles
title: React 渲染 Markdown 的方法
date: 2019-02-23T00:42:10.915Z
description: >-
  Markdown 提供了編寫文章的方便，我們可以透過 Remarkable，Marked 等一些解析 Markdown 工具來獲取 HTML，然後透過
  React 原生的 dangerouslySetInnerHTML 方法直接放到組件裡面。
tags:
  - Markdown
  - React
  - XSS
  - GatsbyJS
headerImage: 'https://i.imgur.com/M795H8A.jpg'
templateKey: blog-post
---
## 前言

Markdown 提供了編寫文章的方便，我們可以透過 Remarkable，Marked 等一些解析 Markdown 工具來獲取 HTML，然後透過 React 原生的 dangerouslySetInnerHTML 方法直接放到組件裡面。

> Markdown 是一種輕量級標記式語言，創始人為約翰·格魯伯（英語：John Gruber）。它允許人們「使用易讀易寫的純文字格式編寫文件，然後轉換成有效的XHTML（或者HTML）文件」。這種語言吸收了很多在電子郵件中已有的純文字標記的特性。 - Wikipedia

我們可以透過 Remarkable.js 來解析 Markdown 語言，並生成 HTML。

## remakable

它是一個高速的 markdown 語法分析器。它支持 Commonmark，安裝不同插件，例如語法高亮。

它在 Github 上獲得了超過 4000 個 Star 數目。Facebook，Docusaurus 及其他公司也在用 Remarkable.js。

### 安裝方法

透過 npm 直接搜索 remarkable 就可以安裝它了。

```
npm install remarkable --save
```

另外，你也可以使用 cdn 來在你的 HTML 文件插入 remakable。

```
// cdn.js
<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.7.1/remarkable.min.js"></script>

// jsdelivr
<script src="https://cdn.jsdelivr.net/npm/remarkable@1.7.1/index.min.js"></script>
```

### 使用方法

首先利用 require 或 import 語法獲取 Remakable 方法，然後透過 new 生成一個 Remarkable 對象。

透過它提供的 render 方法，我們可以直接獲取 HTML。

代碼如下：

```
var Remarkable = require('remarkable');
var md = new Remarkable();

console.log(md.render('# Remarkable rulezz!'));
// => <h1>Remarkable rulezz!</h1>
```

### 語法高亮

如果你有留意這篇文章的代碼例子的話，你會發現這些語句都有不同的顏色，這就是語法高亮。

透過填充 Remakable 構建方法裡面的 highlight 值，就可以完成語法高亮了。

highlight.js 可以識別 185 種語言的代碼，並且支持 89 種樣式。比如說筆者很喜歡的 Solarized Light，Github Gist。

```
var Remarkable = require('remarkable');
var hljs       = require('highlight.js') // https://highlightjs.org/

var md = new Remarkable({
  highlight: function (str, lang) {
    // 如果 highlight.js 支持我們編寫的語言
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return '';
  }
});
```

## dangerouslySetInnerHTML

React 提供 dangerouslySetInnerHTML 方法，用以取代瀏覽器 DOM 裡面的 innerHTML 方法。一般來說，直接把代碼看成 HTML 是一個危險的舉動，因為它很容易暴露跨網站指令碼 (XSS) 攻擊的風險。所以，React 會需要我們傳入一個對象，使用 __html 值來提醒我們這個是危險的舉動。

使用方法：

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

## GatsbyJS

如果你是使用 gatsbyjs 框架的話，那麼你可以直接安裝 gatsby-transformer-remark 來安裝 remarkjs。

###　安裝方法

首先你需要透過 npm 安裝 gatsby-transformer-remark。

```
npm install --save gatsby-transformer-remark
```

然後在 gatsby-config.js 裡面的　plugins 插入以下代碼片段：

```json
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // CommonMark 模式 (default: true)
      commonmark: true,
      // 筆錄模式 (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub 風格的 Markdown 模式 (default: true)
      gfm: true,
      // 插件配置
      plugins: [],
    },
  },
],
```

### 使用方法

gatsby-transformer-remark 會讀取 `md`，以及 `markdown` 文件，並生成 `MarkdownRemark` 節點，供 GraphQL 使用。

MarkdownRemark 已經具有 `html`，節錄 `excerpt`，目錄 `tableOfContents` 等比較常用的屬性，可以直接讀取。

你可以通過 allMarkdownRemark 來獲取所有 markdown 文章，然後透過 `edges.node.html` 來獲取編譯後的 HTML 代碼。

```graphql
{
  allMarkdownRemark {
    edges {
      node {
        html
        headings {
          depth
          value
        }
        frontmatter {
          title
        }
      }
    }
  }
}
```

## 參考資料

1. [DOM Elements - React](https://reactjs.org/docs/dom-elements.html)
1. [jonschlinkert/remarkable - Github](https://github.com/jonschlinkert/remarkable)
1. [gatsby-transformer-remark 官方文檔](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
