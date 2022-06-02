# Objects and Functions

{docsify-updated} 

- [Objects and Functions](#objects-and-functions)
  - [:whale: Concept Asides 名詞解釋](#whale-concept-asides-名詞解釋)
    - [:crab: Namespace](#crab-namespace)
    - [:crab: First Class Function](#crab-first-class-function)
    - [:crab: Mutate](#crab-mutate)
  - [:whale: Objects and Dot](#whale-objects-and-dot)
  - [:whale: Funtcions are Objects](#whale-funtcions-are-objects)
  - [:whale: Function Statements and Function Expressions](#whale-function-statements-and-function-expressions)
    - [:crab: Function Statement 敘述式](#crab-function-statement-敘述式)
    - [:crab: Function Expression 表達式](#crab-function-expression-表達式)
    - [:crab: 兩者之間的差別](#crab-兩者之間的差別)
  - [:whale: By Value and By Reference](#whale-by-value-and-by-reference)
    - [🦀 By Value](#-by-value)
    - [:crab: By Reference](#crab-by-reference)
    - [:crab: 小小結論](#crab-小小結論)
  - [:whale: Objects, Funcitons, and `this`](#whale-objects-funcitons-and-this)

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

### :crab: Mutate
> To change something.  
> **Immutable** means it can't be changed. 

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

### 🦀 By Value

目前有下列的程式碼：
```javascript
const a = 1; // primitive value
b = a;
```

如果 a 這個變數的值是一個 primitive type（例如數字、字串、布林值等等）的話，當我們將 a 賦值給 b 的時候，其實是會將 a 的值複製出一個新的，然後將它儲存在另外一個新的記憶體區塊，再把新的記憶體區塊 reference 到 b，如下圖所示：
![](images/byvalue.png)

### :crab: By Reference

接下來以下面的程式碼範例為例，來舉例什麼是 **by reference**：
```javascript
const a = { firstName: 'John', LastName: 'Walker' };
const b = a;

b.firstName = 'Ben';
console.log(b.firstName);
console.log(a.firstName); // a.firstName 會印出什麼？
```

從上述程式碼中可以知道，我們將 a 這個變數指向一個 object，然後再將 b 指向 a，最後去修改 b 這個 object 裡面的 property，但結果卻發現 a 裡面的 property 也被我們修改到了，也就是說我們不管是修改 b 或是修改 a 都會修改到同一個 object。

為什麼會發生上述這件事呢？是因為當資料型態是 reference type (object, array...) 的時候，JavaScript 是透過 **by reference** 去傳遞參數的，也就是如下圖所示：

![](images/byreference.png)

其實 a 和 b 這兩個變數都指向同一個記憶體區塊（也就是 object 的所在位置），所以不管是透過 a 或 b 來修改 object，都是修改到同樣的東西。

### :crab: 小小結論

> 知道 **by value** 和 **by reference** 的差別，有助於程式開發和除錯。

在這邊會討論到 **by value** 和 **by reference** 的差別主要是因為，當我們在進行程式開發或是除錯的時候，會需要處理非常多各式各樣的資料型態。

當如果不小心改動的原本的資料時，可能會導致某些 function 出錯，此時知道 **by value** 和 **by referenct** 的差異可以更好的去避免改動到原始資料，降低產生 bug 的機率！

## :whale: Objects, Funcitons, and `this`

前面的幾部影片有提到 function 在執行的時候，會有一個 funciton 自己的 execute content 和 variable environment，並透過 scope chain 去拿到 outer environment 的變數，除此之外還會有一個東西——叫做 `this`，接下來這個部分會特別針對 `this` 來做說明。

首先，先來看看幾個簡單的例子：
```javascript
console.log(this);
```

```javascript
function a() {
  console.log(this);
}

a();
```

```javascript
const b = funciton() {
  console.log(this);
}

b();
```

如果我們將上述三個程式碼放到瀏覽器當中去執行的話，可以知道這三個印出來的東西都是 window，也就是說，按照上面的方式（寫在 function 當中然後直接執行，或是直接執行）去呼叫 `this`，它所指向的東西都是 window 這個 global object。

接下來我們試試用在 object 裡面建立 method 的方式來呼叫 `this`：
```javascript
const c = {
  name: 'The c object',
  log: function() {
    console.log(this);
  }
};

c.log();
```
