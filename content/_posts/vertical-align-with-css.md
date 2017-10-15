---
title: CSS垂直置中的4種方法
date: 2017-05-06 12:59:00
tags: CSS
---

這是一道送分題，如果想要垂直置中元素的話，起碼會有四種方法：**padding**, **line-height**, **table** 和 **Flexbox**。使用Flexbox的話，日後要更改元素的位置會非常方便。

## padding
如果你要置中的元素是`inine`或者是`inline-*`的話，比如說文字和鏈接，你可以用**padding**來實現垂直置中：
```
.vCenter {
  padding-top: 30px;
  padding-bottom: 30px;
  background: #eee;
  text-align: center;
}
```
因為`padding-top`和`padding-bottom`的數值是一樣，所以我們可以透過這個方法來實現垂直置中。
<iframe height='265' scrolling='no' title='padding 垂直置中' src='//codepen.io/calpa/embed/pPdowv/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/calpa/pen/pPdowv/'>padding 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## line-height
```
.anotherCenter {
  height: 100px;
  line-height: 100px;
  background: #6cf;
  text-align: center;
}
```
如果你不想用`padding`來實現垂直置中的話，你可以利用`line-height`等於`height`。

<iframe height='265' scrolling='no' title='line-height 垂直置中' src='//codepen.io/calpa/embed/JNOjJJ/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/calpa/pen/JNOjJJ/'>line-height 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## table

你可以透過`valign`來控制位置。

另外，你可以利用`display: table-cell`來改變顯示的方式。
```
.fakeTable {
  height: 200px;
  width: 200px;
  display: table-cell;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
}
```

<iframe height='265' scrolling='no' title='Table 垂直置中' src='//codepen.io/calpa/embed/xdPxLr/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/calpa/pen/xdPxLr/'>Table 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## Flexbox
另外，你也可以使用**Flexbox**來實現垂直置中，只需要寫justify-content和align-items就可以了。
```
.vertical-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```
<iframe height='265' scrolling='no' title='FlexBox 垂直置中' src='//codepen.io/calpa/embed/NjwWjV/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/calpa/pen/NjwWjV/'>FlexBox 垂直置中</a> by Calpa Liu (<a href='http://codepen.io/calpa'>@calpa</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## 延伸閱讀
1. [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
1. [Using CSS Flexible Boxes - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
