---
title: Redux push()是怎樣寫的？
header-img: 'eySAMI1.jpg'
date: 2017-05-03 23:20
tags:
  - JavaScript
  - Redux
---

本來你可以直接改寫原本的數組，比如利用這個方法：`arr.push(item)`。
但在Redux裡面不可以這樣寫，因為會改寫原本數組，違反了immutable的原則。
因此，要這樣寫： `arr: [...state.arr, action.newItem]`。

例子：
```
import { ADD_ITEM } from '../Actions/UserActions'
const initialUserState = {
  arr: []
}

export default function userState(state = initialUserState, action) {
  console.log(arr);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        arr: [...state.arr, action.newItem]
      }

    default:
      return state;
  }
}
```

另外，你也可以利用`concat()`方法。

## 參考資料
1. [How do I add an element to array in reducer of React native redux? - stackoverflow](http://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux)
