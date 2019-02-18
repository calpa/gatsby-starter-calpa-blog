---
templateKey: blog-post
id: 20180917a
title: 【譯】以申請大學流程來解釋 JavaScript 的 filter 方法
slug: /2018/09/17/javascripts-filter-function-explained-by-applying-to-college/
date: 2018-09-17T03:48:03.125Z
description: 如果你熟悉申請大學流程的話，你也可以理解 JavaScript 的 filter 方法。相對於 JavaScript 裡面的 map() 和 reduce() 方法來說，filter() 方法也許是最一目了然的方法。
tags:
  - JavaScript
  - 前端
---

## 前言

如果你熟悉申請大學流程的話，你也可以理解 JavaScript 的 filter 方法。相對於 JavaScript 裡面的 map() 和 reduce() 方法來說，filter() 方法也許是最一目了然的方法。

> - 原文地址：[JavaScript’s Filter Function Explained By Applying To College](https://codeburst.io/javascripts-filter-function-explained-by-applying-to-college-a21bceeba041)
> - 原文作者：[Kevin Kononenko](https://codeburst.io/@kevink?source=post_header_lockup)
> - 譯文出自：[掘金翻譯計劃](https://github.com/xitu/gold-miner)
> - 本文永久鏈接：[https://github.com/xitu/gold-miner/blob/master/TODO1/javascripts-filter-function-explained-by-applying-to-college.md](https://github.com/xitu/gold-miner/blob/master/TODO1/javascripts-filter-function-explained-by-applying-to-college.md)
> - 譯者： [Calpa](https://calpa.me)
> - 校對者：[linxuesia](https://github.com/linxuesia), [rydensun](https://github.com/rydensun)

![](https://cdn-images-1.medium.com/max/800/1*c4dbmD3a3hDCxLXte3taTw.jpeg)

相對於 JavaScript 裡面的 map() 和 reduce() 方法來說，filter() 方法也許是最一目了然的方法。

**你輸入一個數組，以特定方法過濾它們，並返回一個新的數組。**

這個看起來很簡單，不過我總是想把它換成 for() 循環。因此，我選擇一種更加好的方法去理解 filter() 是如何運行的。

我發現，filter 方法就類似大學入學審批官。它們用一堆的參數來決定哪些學生可以進入他們特定的學院。是的，我們希望學院都可以更加靈活，全面地考察我們過去的成就，不過在實際情況中，很多硬性數字指標例如 SAT、ACT 和 GPA 績點才是考量的決定因素。

就讓我們一起探討這個流程吧。

![](https://cdn-images-1.medium.com/max/800/0*PWtOoSbsLMCAcXmC.png)

### 使用 For 循環而不是 Filter 函數

好的，我們假設這裡有四個同學，並列出他們的名字和 GPA。有一個學院只想要擁有 3.2 GPA 以上的學生進入學院。下面是你可能的做法。

```
let students = [
  {
    name: "david",
    GPA: 3.3
  },
  {
    name: "sheila",
    GPA: 3.1
  },
  {
    name: "Alonzo",
    GPA: 3.65
  },
  {
    name: "Mary",
    GPA: 3.8
  }
]

let admitted =[];

for (let i=0; i < students.length; i++){
  if(students[i].gpa > 3.2)
    admitted.push(students[i]);
}

/*admitted = [
  {
    name: "david",
    GPA: 3.3
  },
  {
    name: "Alonzo",
    GPA: 3.65
  },
  {
    name: "Mary",
    GPA: 3.8
  }
];*/
```

哇！這個是一個過於復雜的例子。如果有人閱讀你的代碼，他們可能需要追踪多個數組，才意識到你的一個簡單過濾數組方法。同時，你需要仔細地追踪 _i_ 來避免發生錯誤。就讓我們學習如何利用 filter 方法來達到相同效果吧。

### 使用 Filter() 方法

就讓我們使用 filter() 方法來達到相同效果吧。

1. Filter 是一個數組方法，所以我們會從學生數組開始。
2. 對於每一個數組裡面的元素，它會調用一個回調（callback）方法。
3. 它用 return 來聲明哪些元素會出現在最終的數組裡面，也就是被錄取的學生。

```
let students = [
  {
    name: "david",
    GPA: 3.3
  },
  {
    name: "sheila",
    GPA: 3.1
  },
  {
    name: "Alonzo",
    GPA: 3.65
  },
  {
    name: "Mary",
    GPA: 3.8
  }
]

let admitted = students.filter(function(student){
   return student.GPA > 3.2;
})

/*admitted = [
  {
    name: "david",
    GPA: 3.3
  },
  {
    name: "Alonzo",
    GPA: 3.65
  },
  {
    name: "Mary",
    GPA: 3.8
  }
];*/
```

輸入和輸出都是一樣的，這裡是我們做法不一樣的地方：

1. 我們不需要定義一個 admitted 數組，然後填充它。我們可以在同一個代碼塊裡面同時定義，並填充它的元素。
2. 我們實際上是在 return 語句中使用了一個條件判斷式！這代表我們只需要返回那些符合條件的元素。
3. 我們現在可以用 _student_ 而不是在 _for_ 循環裡面的 student[i] 來循環每個數組裡面的元素，

![](https://cdn-images-1.medium.com/max/800/0*0TEOSb8MRGdi_lDb)

![](https://cdn-images-1.medium.com/max/800/0*oV583nYxvCID3r_G)

你可能注意到一件事，與直覺相反 — 我們只會在最後一步獲得錄取資格，不過在我們的代碼裡面，變量 _admitted_ 是首先出現在 statement 裡面！你可能會預期在這個函數的最後去尋找最終的數組。取而代之，我們用返回來表示哪個元素會結束在 _admitted_。

![](https://cdn-images-1.medium.com/max/800/0*VvRQ32vesw8bJsn3)

### 例子 2 — 在 Filter 裡面用兩個條件判斷式

直至現在，在我們的 filter 方法內，我們只用了一個條件判斷式。不過這並不代表全部的大學入學流程！通常，入學審查官會觀察超過 10 個因素。

讓我們看一下這兩個因素 — GPA 和 SAT 分數。學生必須擁有 GPA 績點超過 3.2 及 SAT 分數超過 1900。下面是函數應該出現的樣子。

```
let students = [
  {
    name: "david",
    GPA: 3.3,
    SAT: 2000
  },
  {
    name: "sheila",
    GPA: 3.1,
    SAT: 1600
  },
  {
    name: "Alonzo",
    GPA: 3.65,
    SAT: 1700
  },
  {
    name: "Mary",
    GPA: 3.8,
    SAT: 2100
  }
]

let admitted = students.filter(function(student){
   return student.GPA > 3.2 && student.SAT > 1900;
})

/*admitted = [
  {
    name: "david",
    GPA: 3.3,
    SAT: 2000
  },
  {
    name: "Mary",
    GPA: 3.8,
    SAT: 2100
  }
];*/
```

看起來很像，對吧？現在我們有兩個條件判斷式在 _return_ statement 裡面。讓我們把這段代碼再拆分一下。

```
let admitted = students.filter(function(student){
   let goodStudent = student.GPA > 3.2 && student.SAT > 1900
   return goodStudent;
})
```

啊！所以與 _for_ 循環相比的話，這裡就是另外一個重要的差異處。如果你觀察一下 goodStudent 變量的話，就會發現它只會得出 true 或者是 false 值，然後，這個布爾值被賦值給返回語句。

所以， _true_ 或者 false 真的決定了，原始數組裡面每個的元素是包含還是排除，然後放到結果的數組， _admitted_。

![](https://i.imgur.com/tuTtqkw.jpg)

![](https://i.imgur.com/bDclEiu.jpg)
