---
templateKey: blog-post
id: 20181025a
title: power assert － 更智能、優雅的全方位 assert 斷言庫
slug: /2018/10/25/power-assert-smart-and-elegant-tools/
date: 2018-10-25T03:48:03.125Z
description: 在寫測試代碼時，以往我們需要翻閱文檔，學習各種 API 才能明白如何操作斷言。而現在我們可以透過 power-assert 的 assert 方法來減輕調試壓力。不僅如此，它還提供更加直觀，具體的運行效果，幫助 DEBUG。寫測試代碼，其實可以很容易。
tags:
  - JavaScript
---

## 前言

在寫測試代碼時，以往我們需要翻閱文檔，學習各種 API 才能明白如何操作斷言。而現在我們可以透過 power-assert 的 assert 方法來減輕調試壓力。不僅如此，它還提供更加直觀，具體的運行效果，幫助 DEBUG。寫測試代碼，其實可以很容易。

### 例子

power-assert 提供的 assert 方法，已經滿足日常的斷言需求。

```shell
describe('Array', function () {
    beforeEach(function () {
        this.ary = [1, 2, 3];
    });
    describe('#indexOf()', function () {
        it('應該返回 index 如果值存在的話', function () {
            var zero = 0, two = '2';
            assert(this.ary.indexOf(zero) === two);
        });
        it('應該返回 -1 如果值不存在的話', function () {
            var minusOne = -1, two = 2;
            assert.ok(this.ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});

describe('String.slice()', function () {
    it('提取字段的某個部分，並返回一個新的字段', function () {
        var str1 = "The morning is upon us.";
        var str2 = str1.slice(4, -2);
        assert(str1 === str2);
    });
});
```

結果如下：

![Imgur][1]

從 power-assert 中，你可以很直觀地知道到底哪個地方的值是和預想中的不同，比如說第一段測試代碼裡面的 `indexOf()` 方法，你可以看出 power-assert 指出左側的 `[number] this.ary.indexOf(zero)` 返回了 `-1`，而右側則的 `[string] two` 則返回了 "2"。

更加到位的是：power-assert 對於每一個運行的操作都有所指出，例如 this.ary 只有 [1,2,3]，zero 是 0（雖然代碼寫得很清楚）。

> 如果有複雜的測試需求，你可以封裝它們為獨立的方法，然後組合到一起。

你可以把以上代碼，複製貼上到官網提供的 [power-assert playground][2]，從而看到 power-assert 的效果。

## 快速入門

如果你在使用 `assert` 的話，你無需使用 `require('power-assert')`，Power Assert 會自動進行轉換。

Power Assert 有著和 assert 一模一樣的 API，也就是說，你可以隨時，無痛轉換兩者。

### 安裝

如果你的運行環境是只有 Node.js 的話，那麼你可以運行以下代碼來安裝。

`npm install --save-dev mocha power-assert intelli-espower-loader`

然後運行 mocha 來測試你的代碼：

`npx mocha --require intelli-espower-loader`

那麼你就可以看到你的 assert 現在提供了很多實用的提示信息了。

### 配置方法

| 配置組合                      | 環境                       | 技術棧                                                            |
| :---------------------------- | :------------------------- | :---------------------------------------------------------------- |
| [power-assert-node-seed][3]   | Node.js                    | power-assert + [intelli-espower-loader][4]                        |
| [power-assert-testem-seed][5] | Browsers([testem][6] 驅動) | power-assert + [gulp-espower][7] + [testem][8].                   |
| [power-assert-karma-seed][9]  | Browsers([Karma][10] 驅動) | power-assert + [espowerify][11] + [browserify][12] + [Karma][10]. |

### 深入配置

![Imgur](https://i.imgur.com/eZLHc2w.png)

它支持 babel, browserify, webpack, grunt, gulp 等前端現代化開發工具，並支持 TypeScript（帶類型定義），CoffeeScript。

如果你有試過其他的代碼測試工具，例如`chai`, `should.js`, `expect.js`, 的話，Power Assert 提供了代碼遷移工具。

你可以透過以下的組合來配置你的工程的 power-assert：

1. `power-assert` + `espower-loader`  或  `intelli-espower-loader` : 簡單、官方推薦的配置方法，雖然這個方法只能在 Node.js 環境下運行。
2. `power-assert` + `Babel` + `babel-preset-power-assert`: 如果你使用 [Babel 6 以上的版本][13]，那麼這會是唯一可行的配置方法。
3. `power-assert` + `espower-coffee` or `espower-typescript`: 一個 AltJS 配搭 power-assert 的配置方法，官方同樣推薦，但這個方法只能在 Node.js 環境下運行。
4. `power-assert` + `browserify` + `espowerify`: 如果你使用 browserify 而不是 Babel 的話，你可以使用這個方法。
5. `power-assert` + `webpack` + `webpack-espower-loader`: 如果你使用的是 webpack 而不是 Babel 的話，你可以使用這個配置方法。
6. `power-assert` + `espower-cli` or `grunt-espower` or `gulp-espower` : 這個方法會產生一段可以到處運行的代碼。

如果你以上的組合都不想用的話，那麼你可以使用 [espower-cli][14] 來產生一代可以讓 power-assert 運行的測試代碼：

```shell
npm install -g espower-cli
espower test/some_test.js > build/test/some_test.js
```

## 後記

其實早在 2014 年，已經有一位名叫 Takuto Wada 的日本程序員分享過 [關於 power-asset 的 PPT][15]。雖然版本有點過時，但是基本上大同小異。

![Imgur][16]

![Imgur][17]

我最近嘗試一個新的開發模式，Test Driven Development (TDD) ﹣ 測試驅動開發，也就是說如何可以隨心所欲地重構代碼而不讓它崩潰。

如果你有興趣了解[這種開發模式][18]的話，你可以繼續[關注我的文章][19]，點 watch 按鈕 (+ Star)，謝謝。

## 參考資料

1. [power-assert-js/power-assert][20]
2. [可能是最好的 JS Assert 库 - 皇帝的新衣 - 天猪][21]
3. [power-assert, mechanism and philosophy（日文 PPT）][15]

[1]: https://i.imgur.com/3IhJ1Co.jpg
[2]: https://azu.github.io/power-assert-demo/
[3]: https://github.com/azu/power-assert-node-seed
[4]: https://github.com/power-assert-js/intelli-espower-loader
[5]: https://github.com/azu/power-assert-testem-seed
[6]: https://github.com/testem/testem
[7]: https://github.com/power-assert-js/gulp-espower
[8]: https://github.com/airportyh/testem
[9]: https://github.com/azu/power-assert-karma-seed
[10]: https://karma-runner.github.io/
[11]: https://github.com/power-assert-js/espowerify
[12]: http://browserify.org/
[13]: https://babeljs.io/
[14]: https://github.com/power-assert-js/espower-cli
[15]: https://www.slideshare.net/t_wada/power-assert-nodefest-2014
[16]: https://i.imgur.com/VQQnd2y.jpg
[17]: https://i.imgur.com/kkpG7j9.jpg
[18]: https://github.com/calpa/tdd-playground
[19]: https://github.com/calpa/calpa.github.io
[20]: https://github.com/power-assert-js/power-assert
[21]: https://zhuanlan.zhihu.com/p/25956323
