---
title: 善用 Github Issue 的開源評論插件 -- Gitalk
tags:
  - Front End
  - Blog
headerBackgroundColor: fff
headerImage: phH7Jc4.png;
headerSize: contain;
share-img: https://i.imgur.com/w6B3yom.png
date: 2017-08-04 20:00:00
backgroundPositionY: 50%
magic: false
---

![Gitalk](https://i.imgur.com/DqyRXB9.jpg)

## 前言

以前，我的博客是用 Disqus 的評論插件，但是無論是載入速度，還是樣式上，都是有所缺乏的。我一直沒有安裝其他的評論插件，因為覺得搬家有點麻煩。但是當我試用一下之後，我就覺得這個插件安裝很方便，功能也很實用，尤其是可以寫 Markdown 評論，就讓我非常喜歡這個插件了。因此，我拜讀了一下 [Gitalk Github Repo](https://github.com/gitalk/gitalk) 的代碼。我會在這裡說一下我對這個插件的理解，並提交繁體中文 README.md 到官方倉庫上。如果你想試用的話，你可以到[官網](https://gitalk.github.io/)或[我的博客](#gitalk-container)留言。

Gitalk 是一個基於 Github Issue 和 Preact 開發的評論插件。它支持多語言，包括英文，繁體中文和簡體中文，並[自動判斷用戶當前語言](https://github.com/gitalk/gitalk/blob/48de82ca24d4cb24a464f7cc9e72884a208b9d5c/src/gitalk.jsx#L55)：`navigator.language || navigator.userLanguage`。用戶只需要使用自己的個人或組織 Github 賬戶便可以登入系統。

另外，它也有以下的功能：

- 無干擾模式：`distractionFreeMode`
- 快捷鍵提交評論 （cmd || ctrl + enter）


## 安裝方法

### 使用 cdn 引入
```html
  <link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">

  <script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
```

直至8月4日，我仍然沒有在 cdnjs 上面找到 Gitalk 的，只好去 cdnjs/cdnjs 上面提交了[新的 cdn 需求](https://github.com/cdnjs/cdnjs/issues/11668)。如果你也認為有需要用到 cdnjs 的話，你可以去那裡說一下。


### 利用 npm 安裝

```sh
npm i --save gitalk
cnpm i --save gitalk
```

```js
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
```

### 去 Github 上面 clone Gitalk
```sh
git clone git@github.com:gitalk/gitalk.git
cd gitalk/dist/
```

然後把壓縮過的`gitalk.min.js` 放進你的項目。

## 使用方法

![Register a new OAuth Application](https://i.imgur.com/C6HEsRv.png)

Gitalk 需要 **Github Application**，如果沒有請點擊 [Register a new OAuth application](https://github.com/settings/applications/new) 申請，`Authorization callback URL` 填寫當前使用插件頁面的域名，例如我的博客就是填寫 https://calpa.me

### 代碼範例

```js
var gitalk = new Gitalk({
  clientID: 'Github Application Client ID',
  clientSecret: 'Github Application Client Secret',
  repo: 'Github repo',
  owner: 'Github repo owner',
  admin: ['Github repo collaborators'],
})

gitalk.render('gitalk-container')
```


## Gitalk 選項

- **clientID** `String`

  **必須**. Github Application Client ID.

- **clientSecret** `String`

  **必須**. Github Application Client Secret.

- **repo** `String`

  **必須**. Github repository.

- **owner** `String`

  **必須**. Github repository 所有者，可以是個人或者組織。

- **admin** `Array`

  **必須**. Github repository 合作者 (確保對這個 repository 是有寫的權限)。

- **id** `String`

  Default: `location.href`.

  頁面的唯一標識。

- **labels** `Array`

  Default: `['Gitalk']`.

  Github issue 的標簽。

- **title** `String`

  Default: `document.title`.

  Github issue 的標題。

- **body** `String`

  Default: `location.href + header.meta[description]`.

  Github issue 的內容。

- **language** `String`

  Default: `navigator.language || navigator.userLanguage`.

  設置語言，支持 [en, zh-CN, zh-TW]。

- **perPage** `Number`

  Default: `10`.

  每次加載的數據大小，最多 100。

- **distractionFreeMode** `Boolean`

  Default: false。

  類似Facebook評論框的全屏遮罩效果.

- **pagerDirection** `String`

  Default: 'last'

  評論排序方式， `last`為按評論創建時間倒敘，`first`為按創建時間正序。

- **createIssueManually** `Boolean`

  Default: `false`.

  如果當前頁面沒有相應的 isssue 且登錄的用戶屬於 admin，則會自動創建 issue。如果設置為 `true`，則顯示一個初始化頁面，創建 issue 需要點擊 `init` 按鈕。

- **proxy** `String`

  Default: [https://cors-anywhere/herokuapp.com](https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token)

   [Github oauth 請求到反向代理，為了支持 CORS。 ](https://github.com/isaacs/github/issues/330)

- **flipMoveOptions** `Object`

  Default:
  ```js
    {
      staggerDelayBy: 150,
      appearAnimation: 'accordionVertical',
      enterAnimation: 'accordionVertical',
      leaveAnimation: 'accordionVertical',
    }
  ```

  評論列表的動畫。 [參考](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)

- **enableHotKey** `Boolean`

  Default: `true`.

  啟用快捷鍵(cmd|ctrl + enter) 提交評論.


## 方法

- `render(String/HTMLElement)`

  初始化渲染並掛載插件，[需要提供 HTMLElement 的 id ](https://github.com/gitalk/gitalk/blob/48de82ca24d4cb24a464f7cc9e72884a208b9d5c/src/index.js#L17)。

- `setPerPage(page: number)`

  // TODO: 我想在構建gitalk之後，可以再次手動設置屬性 perPage 屬性，再次自行定義每個頁面的評論載入量。

## 後記
這個 [Gitalk](https://github.com/gitalk/gitalk) 也是蠻好用的，它界面簡潔清新，沒有廣告，還支持 Markdown 格式。而且感覺更加適合 Markdown 程序員使用。。。
