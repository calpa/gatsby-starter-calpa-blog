---
title: React-markdown -- 實時渲染 Markdown 的 React 工具
date: 2017-08-31 14:25:00
tags:
  - React
  - Markdown
header-size: contain;
header-bg-color: fff
theme: white
# translator: Calpa
# author:
background-position-x: 50%

magic: false
header-img: IYhTVXU.png
share-img: https://i.imgur.com/UtbKsLJ.jpg
# juejin: 59a2419a51882524481c9309
# imgur: https://imgur.com/a/BiUy9
---

## 前言

要寫出優雅的文檔是有難度的，尤其是需要格式規範的文章。而利用 Markdown，則可以專心寫作。Markdown 除了可以直接編譯為 HTML，還能編譯為 PowerPoint, Resume，還有 React 組件。無論是[利用 Markdown 製作 PowerPoint](https://calpa.me/2017/06/01/create-markdown-powerpoint-in-5-mins/)，還是利用 Markdown 製作簡歷，都是非常方便的。如果你不是很熟悉 Markdown 語法的話，你可以在下文看 [Markdown 語法](#Markdown-語法)。但是如果可以接受他人傳進來的 Markdown 文章，然後渲染他們的文章，那就會更加好。所以我就找了一下 React + Markdown 的組合，發現這個 React-markdown 工具下載的人數蠻多的。雖然那個項目還在開發階段，但是你可以在 [Live Demo](http://rexxars.github.io/react-markdown) 測試一下渲染為 React 組件的效果。

---

![Live Demo](https://i.imgur.com/UFkBeEN.png)

![直接渲染為 React 組件](https://i.imgur.com/q2q2RJv.png)

## react-markdown

Github: https://github.com/rexxars/react-markdown
npmjs: https://www.npmjs.com/package/react-markdown

### 安裝
```
npm install --save react-markdown
```

### 使用方法
使用 ES6 Import `ReactMarkdown`，然后使用 <ReactMarkdown />，並傳入 Markdown 到 source。

```js
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph';

<ReactMarkdown source={input} />
```

然後你會看到這樣的：

![React Markdown 例子](https://i.imgur.com/zR2Olai.png)

官網上是這樣說的：
```js
var React = require('react');
var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

var input = '# This is a header\n\nAnd this is a paragraph';

ReactDOM.render(
    <ReactMarkdown source={input} />,
    document.getElementById('container')
);
```

### Webpack 1 配置

如果你是用 Webpack 1 的話，你需要安裝 json-loader：
```
npm install --save json-loader
```

並在你的 webpack 設置裡面加上：

```js
{
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
}
```

如果你設置 `escapeHtml` 或 `skipHtml` 為 `true`，該組件就不會使用`dangerouslySetInnerHTML`。

### 選項

以下選項除了`source`之外都是可選的，其實這個工具已經配置成開箱即用，這裡就說幾個最底部的選項，更多的選項請去官網看。

* `source` - 你的 Markdown 來源（必須）- string
* `className` - 容器的 className - string
* `containerTagName` - 容器的標籤名字 ，因為 Markdown 會有很多不同層次的 elements，容器需要把它們封裝。默認是`div` - string

這個渲染器會渲染的組件有：

* `HtmlInline` - 行內 HTML
* `HtmlBlock` - HTML 塊
* `Text` - 文字 (在段落裡面)
* `Paragraph` - 段落 (`<p>`)
* `Heading` - 標題 (`<h1>`, `<h2>` etc)
* `Softbreak` - 換行
* `Hardbreak` - 斷行（強制換行） (`<br>`)
* `Link` - 鏈接 (`<a>`)
* `Image` - 圖像 (`<img>`)
* `Emph` - 強調 (`<em>`)
* `Code` - Inline code nodes (`<code>`)
* `CodeBlock` - Blocks of code (`<code>`)
* `BlockQuote` - 參照 (`<blockquote>`)
* `List` - 列表 (`<ol>`, `<ul>`)
* `Item` - 列表 (`<li>`)
* `Strong` - Strong/bold nodes (`<strong>`)
* `ThematicBreak` - 水平分割線 (`<hr>`)

## Markdown 語法

Markdown 的目標是易讀易寫，而它能夠幫助程序員專注開發，減少編寫文檔時候遇到的格式問題。Markdown 和 HTML 的寫法差不多，雖然 HTML 已經很容易寫，但是 Markdown 則是更加格式化，如果你直接閱讀 Markdown 文檔，你也可以想象到它渲染後的樣式。

### 標題
```
# H1
## H2
### H3
```

### 清單
無序清單使用`*`, `+` 或`-`，而我這是常用`-`
```
*   Red
*   Green
*   Blue

+   Red
+   Green
+   Blue

-   Red
-   Green
-   Blue
```
有序清單則使用數字接著一個英文句點：
```
1.  Apple
2.  Banana
3.  Watermelon
```

## 後記

順帶說一下，我的博客已經配置好 Service Worker，現在可以離線訪問網站。也就是下次訪問的時候，即使沒有 Wifi 或者連接到網絡，你也能夠瀏覽到文章內容。

有機會的話，我會說說如何配置 Service Worker，以及當中的原理。

我的簡歷也差不多重構一次了（逃。。。
