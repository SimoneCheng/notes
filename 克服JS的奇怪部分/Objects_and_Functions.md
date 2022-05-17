---
date: 2022-05-17
---

# Objects and Functions

- [Objects and Functions](#objects-and-functions)
  - [:whale: Concept Asides 名詞解釋](#whale-concept-asides-名詞解釋)
    - [:crab: Namespace](#crab-namespace)
    - [:crab: First Class Function](#crab-first-class-function)
  - [:whale: Objects and Dot](#whale-objects-and-dot)
  - [:whale: Funtcions are Objects](#whale-funtcions-are-objects)
  - [:whale: Function Statements and Function Expressions](#whale-function-statements-and-function-expressions)
    - [:crab: Function Statement 敘述式](#crab-function-statement-敘述式)
    - [:crab: Function Expression 表達式](#crab-function-expression-表達式)
    - [:crab: 兩者之間的差別](#crab-兩者之間的差別)
  - [:whale: By Value and By Reference](#whale-by-value-and-by-reference)

## :whale: Concept Asides 名詞解釋

### :crab: Namespace

> A container for variables and functions.
> Typically to keep variables and function with the same name seperate.

JavaScript 本身並沒有 namespace，但可以透過善用 object 來儲存相同的命名方式，比如用不同的 object 來儲存都叫做 greet 的變數名稱。

```javascript
const english = { greet: "Hello!" };
const spanish = { greet: "Hola!" };

console.log(english.greet);
console.log(spanish.greet);
```

### :crab: First Class Function
> Everything you can do with other types you can do with functions.
> Assign them to variables, pass them around, create them on the fly.

## :whale: Objects and Dot

在前面的影片當中有提到 object 是一對 key、value 的集合，那麼在記憶體當中，object 是如何儲存的呢？

一個 object 裡面的所有 property 會被存在各個記憶體位址，然後 object 所在的記憶體位址則會記得指向其他 property 被保存的記憶體位址。如下圖所示：

![](./images/object.png)

## :whale: Funtcions are Objects

在 JavaScript 當中 function 就是 object 的一種，所以 function 擁有所有 object 的特性，但同時 function 也有一些自己的特點，例如： function 可以是匿名的，而且 function 有一段自己的 code（可以理解為 function 的其中一個 property 是 code），並且可以透過呼叫 `()` 來執行。如下圖所示：

![](./images/function.png)

所以其實這樣寫也是行得通的，因為 function 就是 object：
```javascript
function greet() {
    console.log("Hello!");
}

greet.lang = "english";

console.log(greet.lang);
```

## :whale: Function Statements and Function Expressions

在 JavaScript 當中有兩種方式可以用來宣告 function，分別是：敘述式（function statement）和表達式（function expression）。

### :crab: Function Statement 敘述式

敘述式的寫法如下：
```javascript
function greeting() {
    console.log('hi');
}
```

### :crab: Function Expression 表達式

表達式的寫法如下：
```javascript
const greeting = function() {
    console.log('hi');
};
```

或是用箭頭函式：
```javascript
const greeting = () => {
    console.log('hi');
};
```

### :crab: 兩者之間的差別

來看看這兩段程式碼就可以很清楚的知道敘述式和表達式的差別：
```javascript
greet();

function greet() {
    console.log("hi!");
}
```

```javascript
greet();

const greet = function() {
    console.log("hi!");
}
```

把這兩段程式碼丟去執行的話，可以看到第一個部分的程式碼能夠成功執行並印出 "hi"，因為在使用敘述式時，function 會被 hoisting，所以可以將執行的語法寫在宣告 function 之前。

但是在執行第二部分的程式碼時卻會出錯，因為雖然第二段的程式碼也會進行 hoisting，但被 hoisting 的只有變數本身而已，賦值這個動作並不會被 hoisting，所以在宣吿 greet 之前就呼叫執行它的話， greet 會進入暫時死區並且報錯（因為在這邊使用 const 的關係）。

從這個例子可以知道，敘述式和表達式的最大差別就是在 hoisting 的時候結果會不太一樣，而為了避免可能會產生報錯，盡量都在執行 function 之前先宣吿 function 才是比較好的選擇。

## :whale: By Value and By Reference

