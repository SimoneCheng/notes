# Types and Operators

2022/03/15

- [Types and Operators](#types-and-operators)
  - [:whale: Concept Asides 名詞解釋](#whale-concept-asides-名詞解釋)
    - [:crab: Dynamic Typing 動態型別](#crab-dynamic-typing-動態型別)
    - [:crab: Primitive Type 原始型別](#crab-primitive-type-原始型別)
    - [:crab: Operator 運算子](#crab-operator-運算子)
    - [:crab: Coercion 強制轉型](#crab-coercion-強制轉型)
  - [:whale: Operator Precedence and Associativity](#whale-operator-precedence-and-associativity)
  - [:whale: Comparison Operators](#whale-comparison-operators)
  - [:whale: 什麼時候用到了 Coercion？](#whale-什麼時候用到了-coercion)
  - [:whale: 參考資源](#whale-參考資源)

## :whale: Concept Asides 名詞解釋

### :crab: Dynamic Typing 動態型別

> You don't tell the engine what type of data a variable holds, it figures it out while your code is running.
> Variables can hold different types of values because it's all figured out during execution.

什麼是動態型別？

有很多程式語言是屬於強型別的語言，當使用強行別的語言時，在宣告變數的時候，同時也需要宣告這個變數的型別。但 JavaScript 不需要在宣告一個變數時，同時宣告該變數的型別， JavaScript Engine 會自己去判斷變數的型別。所以，JavaScript 是一種動態型別的語言。

### :crab: Primitive Type 原始型別

> A type of data that represents a single value.

JavaScript 總共有六種原始型別，分別是：string、boolean、number、undefined、null、symbol。

### :crab: Operator 運算子

> A special function that is syntactically (written) differently.
> Generally, operators take two parameters and return one result.

當打出以下的程式碼時，我們會很直覺地認為會印出 7，但那是從人類的角度出發去做加減法，至於在 JavaScript Engine 當中是如何執行這段程式碼的？

```javascript
var a = 3 + 4;
console.log(a)
```

其實對 JavaScript Engine 來說，他在背後做的事情比較像是這樣：
```javascript
function +(a, b) {
    return // add the two variable
}

// 三種不同的運算子表示方式 //
+3 4 // prefix notation
3 + 4 // infix notation
3 4+ // postfix notation
```

`+` 其實是一個 JavaScript 裡面本來就有的 function，所以當我們寫了 `+` 時，就是呼叫這個 function ，然後將兩個變數傳進去做加法，然後回傳出一個新的值。只是這個 function 是寫在兩個變數中間，也就是 `3 + 4`，這樣將運算子寫在中間的表示方式稱為 infix notation。

總之，在 JavaScript 中，運算子其實是一種 function，傳入兩個值，然後會回傳一個值。

### :crab: Coercion 強制轉型
> Converting a value from one type to another.
> This happens quite often in JavaScript because it's dynamically typed.

因為 JavaScript 是動態型別的語言，所以在程式執行的時候，它時不時會將寫好的變數或是值自動轉換型別，來看看以下簡易的範例：

```javascript
const a = 1 + 2;
const b = 'Hello ' + 'World'

console.log(a);
console.log(b);
```

在上述例子當中， a 和 b 都是同型別相加，所以我們可以知道 a 會印出 3，b 會印出 Hello World。但如果是不同型別之間的相加呢？比如以下的範例：

```javascript
const c = 1 + '2'
console.log(c);
```

在這個範例中，和其他程式語言不同，JavaScript 不會因為這兩個值的型別不同而報錯，反而會嘗試將這兩個值轉成相同的型別，所以此時數字 1 會被轉型成字串 1，然後再與字串 2 相加，最後會印出字串 12。這個現象就是 Coercison。理解在 JavaScript 中有這個現象後，更容易在撰寫程式的時候避免許多因為轉型造成的錯誤。

?> 目前學到的轉型規則：當有兩個東西「相加」的時候，如果其中一個東西是字串，JavaScript 會嘗試將另一個東西也轉成字串。


## :whale: Operator Precedence and Associativity

首先要來定義什麼是 Operator Precedence 和 Associativity：
> Operator Precedence: which operator get called first.
> Functions are called in order of precedence. (Higher precedence wins.)

> Associativity: what order operator functions get called in: left-to-right or right-to-left, when functions have the same precedence.

簡單來說，當有多個運算子出現在一個運算式當中的時候，需要透過 Precedence 來決定要先執行哪個運算，如果每個運算子的優先順序都相同的話，再透過 Associativity 去決定是要從左到右或是從右到左執行優先級相同的運算子。

先來看看一個只需要用到 Precedence 的簡單範例：
```javascript
var a = 3 + 4 * 5;
console.log(a);
```

在上述的程式碼當中，因為 `*` 的優先級比 `+` 高，所以 JavaScript Engine 會先做 `*` 再做 `+`：
```javascript
// 先做 *
var a = 3 + 20;

// 再做 +
var a = 23;

// 最後印出
23
```

JavaScript Engine 就是如上在執行運算子的運算，先將兩個值丟進一個運算的 function，然後回傳出一個新的值，再繼續做下一個運算子的運算，但也是因為這樣的運作方式，還有 JavaScript 本身是動態型別語言的關係，會導致一些奇怪的現象。

但在觀察這些奇怪的現象之前，先繼續來看看 Operator Precedence 和 Associativity 合在一起的例子。

```javascript
let a = 2;
let b = 3;
let c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
```

在上述的例子當中，可以看到 `a = b = c` 這一行的運算子優先級是相同的（因為都是 =，每個 = 的優先級相同），接下來要看的就是 = 的 Associativity，到 MDN 文件查之後，知道 = 的 Associativity 是從右到左，所以 `a = b = c` 會從右到左執行，先執行 `b = c` 再執行 `a = b`，也就是說會先將 c 賦值給 b，再將 b 賦值給 c，所以最後 a、b、c 都會印出 4。

從以上兩個例子中，可以很清楚的知道 Operator Precedence 和 Associativity 的作用。

## :whale: Comparison Operators

在這個小節當中，講師提到當所有以上概念（Coercion、Operator Precedence and Associativity）合在一起的時候，JavaScript 會出現一些讓人困惑的現象。

第一個讓人困惑的地方是，JavaScript 在計算多個運算子的時候，運算的方式其實與人腦的運算方式並不同，所以會出現一些我們預期之外的狀況。

首先先觀察一個符合人們直覺的範例：
```javascript
console.log(1 < 2 < 3);
```

上述的程式碼會印出 true，而這個也符合人們對數學運算的理解，1 的確是小於2，2 也的確是小於 3。但如果是以下的程式碼呢？

```javascript
console.log(3 < 2 < 1);
```

JavaScript 還是會印出 true，這時候就要來理解，當看到 3 < 2 < 1 的時候，JavaScript Engine 是以下面的步驟在運作的：
1. 根據 Operator Associativity 先執行 3 < 2，得到 false
2. 進行 false < 1 的運算
3. 嘗試把 false 轉型成 number，所以 false < 1 變成 0 < 1
5. 進行 0 < 1 的運算
6. 得到 true，然後印出來

從以上步驟可以知道，JavaScript Engine 在進行各種運算子運算的時候，與我們平常在算數學時使用的計算方式不同。

---

第二個讓人困惑的地方是有關 undefined、false、null 這三個型別如果被轉型成數字的話，我們會預期都是 0。但實際上並不是，undefined 會被轉型成 NaN，false、null 才會被轉型成數字 0。

```javascript
Number(undefined); // NaN
Number(false); // 0
Number(null); // 0
```

---

第三個讓人困惑的地方是，如果使用運算子，特別是 `==` 的時候（因為使用兩個等於會先轉型才比較），又會發生讓人困惑的狀況，比如以下幾個例子：
```javascript
false == 0 // true

null == 0 // false
null < 1 // true

"" == 0 // true
"" == false // true
```

由於使用 `==` 會導致互相比較的值先轉型才進行比較，但我們很多時候並沒有辦法準確預測 JavaScript Engine 會將值轉型成什麼型別，可能會造成小錯誤。

在 JavaScript 當中，還有另外一個運算子 `===` 也可以用來比較兩個值是否相等。使用 `===` 時並不會使想要比較的值被轉型，會先比較型別是否相同然後才比較兩者的值，如果型別不同便會直接回傳 false，所以可以盡量使用 `===` 會比較好。

## :whale: 什麼時候用到了 Coercion？

其實平常在寫 code 的時候，我們也默默用到了很多轉型的概念，比如說以下的 react 的使用情境就是利用當 state 是空字串時會轉型成 false，非空字串會轉型成 true ，來判斷要顯示什麼樣的畫面。

```javascript
funciton Component() {
    const [state, setState] = useState('');
    
    useEffect(() => {
        setState('Hello World')
    }, [])
    
    return(
        // 這邊的 state ? 就用到了轉型 //
        {state ? <div>{state}</div> : <div>There is no state</div>}
    )
}
```

## :whale: 參考資源
- [MDN 文件 - Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- [MDN 文件 - Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
