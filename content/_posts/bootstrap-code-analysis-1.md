---
title: Bootstrap v4 源碼分析(1)
tags:
  - Bootstrap
  - Web
date: 2017-04-20 21:37:00
---

Bootstrap是一個Twitter推出的CSS框架，也是我第一個使用的CSS框架。本文使用最新版本v4.0.0-alpha.6，透過閱讀完整的源代碼，我們能夠更加了解Bootstrap的優缺點，以及如何自製Bootstrap輪子。

## 為什麼使用Bootstrap

透過使用Bootstrap框架，我們可以提高開發效率，避免重複製造輪子。

## 閱讀本文所需知識
1. 一顆好奇心
1. 基本Bootstrap知識
1. 基本SCSS/SASS知識

## Bootstrap4 的新特性
對比起Bootstrap3，Bootstrap4作出不少改動，以下是當中比較影響大的特性：
1. 默認使用Flexbox
1. 使用flexbox重新製作navbar，提高可塑性和客製化能力。
1. `.card`代替`.panel`以及`.well`
1. 能夠適應五種長度: xs, sm, md, lg, xl
1. 更加大的默認字體: 16px
1. 不再自帶Glyphicons圖案包。。。
1. 使用SCSS開發

## Bootstarp 源碼結構
```
bootstrap/  #v4-dev branch
├── build/
├── dist/ # 預先編譯的CSS
│   ├── css/
│   └── js/
├── docs/ # 文檔
    └── examples/ # 官方例子
├── js/
    ├── dist/
    ├── src/
    └── tests/
├── nuget/
└── scss/ # 本文開始入手的地方
    ├── mixins/
    └── utilities/
```

## Bootstrap Grid架構
Bootstrap使用`container`->`row`->`col-*-number`的架構。

## 利用SCSS理解 Container
在[_grid.scss](https://github.com/twbs/bootstrap/blob/094b3a129349a41b1319b0870fb3daa9459b7284/scss/_grid.scss)的一開始代碼段落中，我們可以看到`.container`, `.fluid-container`這兩個容器。如果 $enable-grid-classes是true的話，就可以使用`.container`以及`.fluid-container`。

```
@if $enable-grid-classes {
  .container {
    @include make-container();
    @include make-container-max-widths();
  }
}

@if $enable-grid-classes {
  .container-fluid {
    width: 100%;
    @include make-container();
  }
}
```

## 理解Row
```
@if $enable-grid-classes {
  @include make-row();
  // 省略 .no-gutters
}
```

## 用到的函式 (mixins)
### container
#### make-container (grid.scss)

它們會調用[mixins/_grid.scss ](https://github.com/twbs/bootstrap/blob/2436ad589cfc235c84160fe14e4cc4ec97a9c5ca/scss/mixins/_grid.scss)裡面的[@mixin make-container](https://github.com/twbs/bootstrap/blob/2436ad589cfc235c84160fe14e4cc4ec97a9c5ca/scss/mixins/_grid.scss#L5)以及[@mixin make-container-max-widths](https://github.com/twbs/bootstrap/blob/2436ad589cfc235c84160fe14e4cc4ec97a9c5ca/scss/mixins/_grid.scss#L20)。
```
@mixin make-container($gutters: $grid-gutter-widths) {
  margin-right: auto;
  margin-left: auto;

  @each $breakpoint in map-keys($gutters) {
    @include media-breakpoint-up($breakpoint) {
      $gutter: map-get($gutters, $breakpoint);
      padding-right: ($gutter / 2);
      padding-left:  ($gutter / 2);
    }
  }
}
```
[map-get](http://sass-lang.com/documentation/Sass/Script/Functions.html#map_get-instance_method)則是Sass裡面的一個函數，輸入一個map以及key，如果map裡面有該key的話，就會返回key的值。找不到的話就會返回null。

#### $grid-gutter-widths (variables.scss)
如果沒有設置$gutters，它就會默認是[$grid-gutter-widths](https://github.com/twbs/bootstrap/blob/dd0ce3e4b2a89f245ee608a1acc9f848cf8c833a/scss/_variables.scss)，以下是$grid-gutter-widths的包含的數值: xs, sm, md, lg, xl。

```
$grid-gutter-width-base:     30px !default;
$grid-gutter-widths: (
  xs: $grid-gutter-width-base, // 30px
  sm: $grid-gutter-width-base, // 30px
  md: $grid-gutter-width-base, // 30px
  lg: $grid-gutter-width-base, // 30px
  xl: $grid-gutter-width-base  // 30px
) !default;
```

#### $grid-breakpoints (variables.scss)
```
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;
```
它定義不同設備的屏幕寬度，用於響應式設計(Responsive Web Design)。
#### media-breakpoint-up (breakpoints.scss)
而media-breakpoint-up則是在[mixins/_breakpoints.scss 第54行](https://github.com/twbs/bootstrap/blob/7ca078da815320c75862b6cf25f46ce706570279/scss/mixins/_breakpoints.scss#L54)，用處是返回最短寬度的內容。
```
@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($name, $breakpoints);
  @if $min {
    @media (min-width: $min) {
      @content;
    }
  } @else {
    @content;
  }
}
```

#### breakpoint-min()
`breakpoint-min()`可以在[mixins/_breakpoints.scss 第26行](https://github.com/twbs/bootstrap/blob/7ca078da815320c75862b6cf25f46ce706570279/scss/mixins/_breakpoints.scss#L26)找到，它的用處是返回最短斷點寬度或者null。

```
@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {
  $min: map-get($breakpoints, $name);
  @return if($min != 0, $min, null);
}
```

### row
#### make-row() (grid.scss)
```
@mixin make-row($gutters: $grid-gutter-widths) {
  display: flex;
  flex-wrap: wrap;

  @each $breakpoint in map-keys($gutters) {
    @include media-breakpoint-up($breakpoint) {
      $gutter: map-get($gutters, $breakpoint);
      margin-right: ($gutter / -2);
      margin-left:  ($gutter / -2);
    }
  }
}
```

至於Column，我們下次再說吧。。。
