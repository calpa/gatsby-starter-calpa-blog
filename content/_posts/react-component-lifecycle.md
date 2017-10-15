---
title: React 組件生命週期 - 加載組件
# headerImage: "LEYYumy.jpg"
tags:
  - React
  - Web
date: 2017-05-16 22:40:00
---

## 組件
`React`提供`React.Component`，我們可以透過使用組件，拆分UI為可以重複使用的獨立部分。`React.Component`是一個抽象的base class。我們甚少直接運用`React.Component`，通常是透過創建一個子類，並使用`render()`方法。

例子：
```JavaScript
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

如果你不選擇使用ES6，你可以使用模組`create-react-class`。你可以參考[React Without ES6](https://facebook.github.io/react/docs/react-without-es6.html)。
下面這一段和ES6的寫法效果一樣：
```JavaScript
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

## 組件生命週期

每一個組件都會有幾個生命週期的方法，你可以在程序運行的指定時間，透過覆蓋他們來運行特定代碼。對於這些方法，我們會用`will-`來表示它會在某些事情發生之前的一刻被調用，而`did-`則是表示它會在某些事情發生之後的一刻被調用。本文會細說加載組件中發生了什麼事情。

### 加載 (Mounting)
1. `constructor()`
1. `componentWillMount()`
1. `render()`
1. `componentDidMount()`

### 更新 (Updating)
當 props 或者 state 更新的時候，下面這些方法會被調用：

1. componentWillReceiveProps()
1. shouldComponentUpdate()
1. componentWillUpdate()
1. render()
1. componentDidUpdate()

### 斷開連接 (Unmounting)
當組件脫離DOM的時候，下面這個方法回被調用：

1. componentWillUnmount()

### 其他內置方法
1. setState()
1. forceUpdate()

我們會在下文討論一下React是如何加載組件。

{% img /img/react-mount.svg 300 auto React LifeCycle Mount %}

#### constructor()
```JavaScript
constructor(props)
```

在React加載組件之前，它會調用`constructor`。你可以在`constructor`中去賦予組件的初始`state`。如果你使用`props`創造初始`state`的話，這也是可以接受的。這會很有效地`fork`組件的`props`，然後賦予初始`state`的值。

有效的`constructor`例子：
```JavaScript
constructor(props) {
  super(props);
  this.state = {
    color: props.initialColor
  };
}
```

##### 注意事項
1. 如果你不需要賦予初始`state`，你不需要在 React 的組件中植入`constructor`。
1. 當你使用在`React.Component`的子類中加載`constructor()`方法時，你應該第一時間調用`super(props)`，而不是在任何statement之後。不然，我們獲取`this.props`值的時候，它會是`undefined`。
1. 在一些類似上面的例子，`state`未必會及時與任何的`props`更新。如果你需要同步`state`的話，你其實是想要[lift the state up](https://facebook.github.io/react/docs/lifting-state-up.html)。

#### componentWillMount()
```JavaScript
componentWillMount()
```

它會在組件`render()`之前執行一次，然後不能再執行。如果在這裡定義了`setState`方法，頁面只會在加載之前更新一次，不會重複渲染。React 官方推薦使用`constructor()`代替這個方法。

#### render()
`React.Component`必須有這個方法，即使你返回`null`，或者`false`。當你返回`null`，或者`false`的時候，`ReactDOM.findDOMNode(this)` 會返回`null`。

當它被調用的時候，它會檢查`this.props`和`this.state`，然後返回一個單獨的 React 元素。這個元素會是一個純正的`DOM`組件，例如<div />，或者自定義的 composite 組件。

##### 注意事項
1. `render()`方法應該是`pure`：它不會改寫任何組件的`state`。每一次調用它都會返回同樣的結果。它不會直接接觸到瀏覽器層面。
1. 如果你需要接觸到瀏覽器層面，你應該在`componentDidMount()`或者其他生命週期方法中接觸瀏覽器。
1. 保持`render()`方法 pure 來讓組件更加容易被人理解。

#### componentDidMount()
```JavaScript
componentDidMount()
```

它會在組件加載之後執行一次。如果你的初始程序需要DOM nodes，你應該在這裡寫。如果你需要從其他地方加載資料，這裡也是一個不錯的地方去執行網絡請求。如果在這裡定義了`setState`方法，會觸發重複渲染。

#### 測試代碼
```JavaScript
class Greeting extends React.Component {
  _log(method, args) {
    console.log(method, args);
  }

  constructor(props) {
    super(props);
    console.log('constructor', props);
  }

  render() {
    this._log('render', this.props.name);
    return <h1>Hello, {this.props.name}</h1>;
  }

  componentWillMount() {
    this._log('componentWillMount');
  }

  componentDidMount() {
    this._log('componentDidMount');
  }
}

ReactDOM.render(
  <Greeting name="Calpa" />,
  document.getElementById('app')
);
```

Console Output:
```
"constructor" Object {
  name: "Calpa"
}
"componentWillMount" undefined
"render" "Calpa"
"componentDidMount" undefined
```

你可以在[CodePen](https://codepen.io/calpa/full/xdJrQm/)中獲取，並測試這段代碼。

不知道拿哪一張當封面好。。。
