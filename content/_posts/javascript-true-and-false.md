---
title: JavaScript中的True與False
date: 2017-02-02 23:19:53
tags: JavaScript
---

這幾天用[Enki](https://www.enki.com/)來學習JavaScript，感覺不錯，**You can't handle the truth!** 有一些特別True/False例子。這裡簡單記錄一下。

最簡單的測試方法：
```[js]
function test(something){
  if (something) {
    console.log(something + ' is true.');
  } else {
    console.log(something + ' is false.');
  }
}
```
# 例子
## Truthy
```[js]
true <- true當然是true...
[1][0]
new Date()
new Number(0)
Object
Infinity
[]
```
以下都是[object Object]:
```
{a: false}
{}
```

## Falsy
```[js]
false <- false當然是false...
undefined
''
""
[1][1] <- undefined
NaN
null
{}.someKey
0
[].length <- 這個是0，所以出false
```

值得注意的是[]，它本身會是`true`，但如果用`[] == true`的話會輸出`false`，
而`[] == false`的話會輸出`true`。
