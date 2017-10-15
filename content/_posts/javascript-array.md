---
title: JavaScript 數組去重
tags:
  - JavaScript
date: 2017-05-05 22:53:00
---

顧著做化工模擬功課，差點忘記怎樣寫代碼。。。

# 內置方法
使用JavaScript內置的去重複方法`Set()`，比如說：

```
let arr = [1, 2, 3, 3, 4, 5];
Array.from(new Set(arr)); // [1, 2, 3, 4, 5]
[...new Set(arr)]; // [1, 2, 3, 4, 5]
```

## 第一時間會想到的方法
1. 雙重遍歷
1. 使用hash table

## Underscore
最後來看一下underscore是如何實現unique()方法吧。

```
_.uniq = _.unique = function(array, isSorted, iteratee, context) {
  // 如果數組不是已經排序
  if (!_.isBoolean(isSorted)) {
    // 將function(array, isSorted, iteratee, context)
    // 換成function(array, false, isSorted, iteratee)
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }

  // 如果存在iteratee
  if (iteratee != null) iteratee = cb(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = getLength(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    // 如果已經排序，就直接增加數值(第一個值)。
    // 非0 就是 true
    // 或者see不是computed
    if (isSorted) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      // 使用_.contains查詢數組裡面是否擁有這個值
      if (!_.contains(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!_.contains(result, value)) {
      result.push(value);
    }
  }
  return result;
};
```
