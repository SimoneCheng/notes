# Execution Contexts & Lexical Environments

2022/03/11

## ð³ Concept Asides åè©è§£é

### ð¦ Syntax Parser èªæåæ

>  A program that reads your code and determines what it does and if its grammar is valid.

ç¶æåå¨å¯« JavaScript çæåï¼å¯«å®ä¹å¾å¶å¯¦é»è¦æ¯çä¸æçï¼èæ¯éè¦ééç·¨è­¯å¨(complier) ä¾ç¿»è­¯æé»è¦çå¾æçèªè¨ï¼æè½å¤ å¹«æåå·è¡æåæ³è¦å¯¦ç¾çåè½ã

```mermaid
graph LR
A[JavaScript] --> B[Complier: Syntax Parser]
B --> C[assembly language]
style B fill:#FFFF93,stroke:#C6A300
```

### ð¦ Lexical Environment è©å½ç°å¢

>  Where something sits physically in the code you write.

ç¶æåå¨å¯« JavaScript çæåï¼Lexical Environment éæ³¨çæ¯éå function è¢«å¯«å¨éåç¨å¼ä¸­çåªåé¨åï¼ä»¥åå®å¨é­çç°å¢æ¯ä»éº¼ï¼æäº Lexical Environmentï¼å¯ä»¥è® Syntax Parser æ´å®¹æè§£ææ´åç¨å¼ç¢¼ï¼æ¯å¦èªªä»¥ä¸çç¨å¼ç¢¼ï¼

```javascript
function Greeting() {
    const a  = "Hello World!";
    console.log(a);
}

// a éåè®æ¸æ¯å­å¨æ¼ Greeting éåå½æ¸çç°å¢ä¸­
```

ä¸¦ä¸æ¯ææçç¨å¼èªè¨é½æ Lexical Environmentï¼ä½ JavaScript æã

### ð¦ Execution Context å·è¡ç°å¢

>  A wrapper to help manage the code that is running.  
>  There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.

ç¶æåå¯«å¥½ç¨å¼ç¢¼ä¹å¾ï¼æåè©²å¦ä½ç¥éå®æ¯æç§ä»éº¼æ¨£çé åºè¢«é»è¦å·è¡çï¼æ´åç¨å¼ç¢¼çå·è¡æµç¨æ¯å¦ä½å®æçï¼éå°±æ¯ Execution Context éè¦åçå·¥ä½ã

### ð¦ Name/Value Pair

> A name which maps to a unique value.  
> The name may be defined more than once, but only can have one value in any given **context**.  
> That value may be more name/value pairs.

### ð¦ Object

> A collection of name/value pairs.  
> The simplest definition when talking about **JavaScript**.

### ð¦ JavaScript and 'undefined'
ç´æ¥ä¾ççå©åä¸åçä¾å­ï¼

```javascript
// ç¯ä¾ä¸
var a;
console.log(a);

// å°åº undefined
```

```javascript
// ç¯ä¾äº
console.log(a);

// å ±é¯ï¼å°åº Uncaught ReferenceError: a is not defined
```

æåå¯ä»¥ç¥éç¯ä¾ä¸åç¯ä¾äºé½å°åºäºæ±è¥¿ï¼ä½ undefined å is not defined å¾è±æå­é¢ä¸ä¾çä¸æ¯ä¸æ¨£çææåï¼å¶å¯¦éå©èå° JavaScript ä¾èªªæ¯å©åä¸ä¸æ¨£çæ±è¥¿ã

**undefined** å¨éè£¡çæææ¯ï¼JavaScript å·²ç¶çºéåè®æ¸é çäºä¸åè¨æ¶é«çä½ç½®ï¼ä½å çºéåè®æ¸éæ²æè¢«è³¦å¼ï¼æä»¥ JavaScript å°±åæ«æè¨­äºä¸ååå§å¼çµ¦ä½ ï¼ç¶å¾éååå§å¼å«åãundefinedããæä»¥æåå¯ä»¥æ undefined çè§£çºãå°æªè¨­å®çå¼ãã

**is not defined** çææåæ¯ï¼JaveScript å¨è¨æ¶é«ä½ç½®ç¶ä¸­ä¸¦æ²æå°æ¾å°è©²è®æ¸ï¼æä»¥å®å°±æå ±é¯ï¼åè¨´æå `Uncaught ReferenceError: a is not defined`ã

### ð¦ Single Threaded å®å·è¡ç·
> One command at a time.  
> Under the hood of the browser, maybe not.

JavaScript æ¯ä¸åå®å·è¡ç·çèªè¨ï¼ä¹å°±æ¯èªª JavaScript å¨å·è¡çæåï¼ä¸æ¬¡åªè½åä¸ä»¶äºæãä½æ¯å¦ææåæ¯å¨ browser éåç°å¢ä¹ä¸å·è¡ JavaScriptï¼browser æ¬èº«å¯ä»¥å¹«æåå°å¤å·è¡ç·çäºæï¼ä½æ¯å°±åéé ­æå°ç JavaScript æ¬èº«æ¯ä¸åå®å·è¡ç·çèªè¨ã

### ð¦ Synchrnous Execution åæ­¥å·è¡
> One at a time and in order.

JavaScript æ¯åæ­¥å·è¡çï¼ä¹å°±æ¯èªªåå®ä¸ä»¶äºæï¼ææåä¸ä¸ä»¶äºæï¼èä¸ææç§äºææå¥½çé åºä¾åºåä¸å»ã

## ð³ The Global Environment and The Global Object

ç¶ JavaScript å¨å·è¡çæåï¼å®ä¸å®æå¨ä¸åå¨åå·è¡ç°å¢ (Global Environment) ç¶ä¸­å·è¡ï¼å¨éåç°å¢ç¶ä¸­ææä¸åå¨åç©ä»¶ (Global Object)ï¼ä»¥åä¸åå¾ç¹æ®ç variable ãthisãã

```
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â Execution Context(Global)                                 â
â      ââââââââââââââââââââ     âââââââââââââââââââââ       â
â      â                  â     â                   â       â
â      â   Global Object  â     â        this       â       â
â      â                  â     â                   â       â
â      ââââââââââââââââââââ     âââââââââââââââââââââ       â
âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

ç¶æåå¨çè¦½å¨ä¸­å·è¡ JavaScript æï¼çè¦½å¨æ¯ä¸å runtimeï¼æä»¥æ­¤æ JavaScript æå¨ç Global Execution Contextï¼å°±æ¯çè¦½å¨çå¨åç°å¢ï¼å¨éåç°å¢è£¡æä¸å Global Object å«åãwindowããç¶æåå¨éåå¨åç°å¢ç¶ä¸­ç´æ¥æ `console.log(this);` çæåï¼`this` æçå°±æ¯ `window`ãè³æ¼ç¶æåå¨ node.js ç¶ä¸­å·è¡ JavaScript æï¼æ­¤æç Global Object å this å°±ææ¯ node.js è¨­å®å¥½çã

åè¨­ç®åå¨çè¦½å¨ä¸­ä½¿ç¨ `var` å®£åä¸åè®æ¸ a ï¼èä¸éåè®æ¸ a ç­æ¼ 1 æï¼å¶å¯¦å°±æ¯å¨çè¦½å¨ç¶ä¸­ç Global Object ä¸­å»ºç«ä¸å Name/Value Pairï¼æä»¥å¯ä»¥éé `window.a` éåæä»¤ä¾æ¾å°åæå®£åçè®æ¸ aãå¦ä»¥ä¸ç¨å¼ç¢¼æç¤ºï¼

```javascript
var a = 1;

a; // 1
window.a; // 1
```

!> es6 æ°å¢äºå©åæ°çå®£åæ¹å¼ `const` ä»¥å `let`ï¼éå©åçç¨æ³è `var` ä¸åï¼å¦æå¨å¨åç°å¢ä½¿ç¨ `const` æ `let`ï¼ä¸¦ä¸æå¨ Global Object ä¸­å»ºç«ä¸å Name/Value Pairï¼é¿åäºä¸äºä½¿ç¨ `var` æç¢ççåé¡ãéä¸èçæ¯è¼å¯è½æä¹å¾åå¯«ä¸ç¯ç­è¨åæ´æ·±å¥æ¢è¨ã

## ð³ The Execution Context

### ð¦ Creation and Hoisting
å¨éå§èªªæ JavaScript Engine å¦ä½åµå»ºå·è¡ç°å¢æï¼æååä¾çç JavaScript çç¹æ®ç¾è±¡ãHoistingããé¦åä¾ççä»¥ä¸ç¯ä¾ä¸çç¨å¼ç¢¼ï¼

```javascript
// ç¯ä¾ä¸
var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

b();
console.log(a);
```

å°ä¸è¿°çç¨å¼ç¢¼å·è¡ä¹å¾ï¼æåå¯ä»¥å¾è¼é¬ä¹å¦å¸¸çé ææåå°åº `Called b!`ï¼åå°åºã`Hello World!`ï¼ä½å¦ææåæç¨å¼ç¢¼æ¹æä¸é¢éæ¨£å¢ï¼

 
 ```javascript
// ç¯ä¾äº
b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}
```

å¦æç¨å¼ç¢¼æ¯å¾ä¸å°ä¸ï¼ä¸è¡ä¸è¡ä¾åºå·è¡çè©±ï¼ç§çä¾èªªå¨è·ç¬¬ä¸è¡çæåå°±æå ±é¯ï¼å çºæåå¨å°æªå®£åè®æ¸åå½æ¸æï¼å°±å°è©²è®æ¸æå½æ¸é²è¡å¼å«ãä½å¨ JavaScript è£¡é¢å»ä¸æ¯éæ¨£ï¼å°ä»¥ä¸ç¨å¼ç¢¼å·è¡ä¹å¾ï¼JavaScriptæå¹«æåå°åºï¼

```javascript
Called b!
undefined
```

JavaScript ä¸¦æ²æå¹«æåå ±é¯ï¼åèå°åºæ±è¥¿ä¾ï¼éæ¯å çºå¨éç¶ä¸­å­å¨èãHoistingãçç¾è±¡ãå¾å¤ç¶²è·¯ä¸å°ãHoistingãçè§£éå¤§é¨åé½æ¯ï¼æ³å JavaScript Engine å°æå¯«çå®£åçç¨å¼ç¢¼ï¼ä½å¦ææ¯å®£åè®æ¸çè©±ï¼åªææåå®£åçè®æ¸ï¼ä¸æé£åè³¦å¼çé¨åä¸èµ·æåï¼æåå°æä¸é¢çå°æ¹ï¼æ¯å¦æ³åç¯ä¾äºçç¨å¼ç¢¼è®æå¦ä¸ï¼

```javascript
funciton b() {
    console.log('Called b!');
}

var a;

b();
console.log(a);

a = 'Hello World!';
```

æä»¥æåææå¾å°å°åº `Called b!` å `undefined` ççµæãä½å¶å¯¦ JavaScript Engine ä¸¦ä¸æççå»èª¿åä½ æå¯«çç¨å¼ç¢¼çä½ç½®ï¼æä»¥ã**æ³å JavaScript Engine å°æå¯«çå®£åçç¨å¼ç¢¼ï¼ä½å¦ææ¯å®£åè®æ¸çè©±ï¼åªææåå®£åçè®æ¸ï¼ä¸æé£åè³¦å¼çé¨åä¸èµ·æåï¼æåå°æä¸é¢çå°æ¹**ãéæ¨£çæè¿°éç¶è½å¤ è§£é Hoisting éåç¾è±¡ï¼ä½å®ä¸¦æ²æç²¾ç¢ºå°å»æè¿° JavaScript Engine å¨ Hoisting çæåå¯¦éä¸å°åºåäºä»éº¼ã

æä»¥ JavaScript Engine å°åºåäºä»éº¼ï¼å¨ Execution Context è¢«åµå»ºä¹å¾ï¼é¤äºåæåµå»ºäº Global Obejectãthis ä¹å¤ï¼éæåæåé çè¨æ¶é«ä½ç½®çµ¦è®æ¸èå½å¼ã

éåã**åé çè¨æ¶é«ä½ç½®çµ¦è®æ¸èå½å¼**ãçåä½å°±æ¯ Hoistingãä½è¦ç¹å¥æ³¨æçå°æ¹æ¯ï¼ç¶å®£åç function è¢« hoisted çæåï¼é¤äº funciton çåç¨±æè¢« hoistedï¼æ´å funciton è£¡é¢ç code ä¹æè¢« hoistedãä½å¦ææ¯ä½¿ç¨ `var` ä¾å®£åè®æ¸çæåï¼åªæè®æ¸çåç¨±æè¢« hoistedï¼è³¦å¼éååä½ä¸¦ä¸æè¢« hoistedï¼ç¶å¾ JavaScript Engine æå°ææè¢« hoisted variable çåå§å¼è¨­çº undefinedã

```
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â                                                                                    â
â  Execution Context is Created (Creation Phase)                                     â
â                                                                                    â
â      ââââââââââââââââââââââ    âââââââââââââââââââââ      ââââââââââââââââââââ     â
â      â      Global        â    â                   â      â      Outer       â     â
â      â                    â    â      'this'       â      â                  â     â
â      â      Object        â    â                   â      â   Environment    â     â
â      ââââââââââââââââââââââ    âââââââââââââââââââââ      ââââââââââââââââââââ     â
â                                                                                    â
â      âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ     â
â      â      Set up Memory Space for Variables and Functions                  â     â
â      â                                                                       â     â
â      â            "Hoisting"                                                 â     â
â      âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ     â
â                                                                                    â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

!> ç¡éå¨å·è¡å½æ¸æä½¿ç¨è®æ¸ä¹ååå®£åä»åï¼ä¸è¦éåº¦ä¾è³´æ¼ Hoisting çç¾è±¡ãå çºä½ ä¸ç¥éä½ å®£åçè®æ¸ææ²æå¯è½æè®æ undefinedã

### ð¦ Code Execution
JavaScript å¨å·è¡ç¨å¼ç¢¼çæåå°±æ¯è¼å¥½çè§£äºï¼ä¸ææä»éº¼ Hoisting å¦ä¹é¡çå¥æªçäºæç¼çï¼å°±æ¯æåå¯«å¥½çç¨å¼ç¢¼æè¢« JavaScript Engine å¨å®è©²å¨çç°å¢ç¶ä¸­è¢«ä¸è¡ä¸è¡çå·è¡ãä½è¦ç¹å¥æ³¨æçæ¯ï¼JavaScript æ¯å®å·è¡ç·çèªè¨åã

```
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
â                                                                                    â
â  Execution Context is Created (Execution Phase)                                    â
â                                                                                    â
â      ââââââââââââââââââââââ    âââââââââââââââââââââ      ââââââââââââââââââââ     â
â      â      Global        â    â                   â      â      Outer       â     â
â      â                    â    â      'this'       â      â                  â     â
â      â      Object        â    â                   â      â   Environment    â     â
â      ââââââââââââââââââââââ    âââââââââââââââââââââ      ââââââââââââââââââââ     â
â                                                                                    â
â      âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ     â
â      â                                                                       â     â
â      â                            Runs Your Code                             â     â  
â      â                                                                       â     â
â      âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ     â
â                                                                                    â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```


## ð³ Function Invocation and the Execution Stack(Call Stack)
> **nvocation**: running a function  
> In JavaScript, we can use parenthesis() to invocate function.

ç¶ä½¿ç¨ JavaScript å¼å«å½å¼çæåï¼åºå±¤åäºä»éº¼æ¨£çäºæï¼æå¥è©±èªªï¼å½å¼è¢«æåå¼å«ä»¥å¾ï¼JavaScript æ¯æéº¼å·è¡éäºå½å¼çï¼æåå¯ä»¥è©¦èç¨ä»¥ä¸çç¨å¼ç¢¼ä¾èä¾ï¼

```javascript
function b() {
    
}

function a() {
    b();
}

a();
```

ç¶æåéå§å·è¡ä»¥ä¸çç¨å¼ç¢¼çæåï¼é¦åæåå¨ Execution Stack è£¡é¢å»ºç«ä¸å Global Execution Contextï¼æ¥èç¶ç¨å¼ç¢¼ä¸è¡ä¸è¡è·ä¸ä¾è·å° `a()` ç¶å¾å·è¡ `a` éåå½å¼çæåï¼JavaScript æçºéåå½æ¸åµå»ºå®ç Execution Contextï¼ä¸¦å°å®æ¾å° Execution Stackï¼å·è¡å çï¼ç¶ä¸­ï¼çå¨ Global Execution Context ä¸é¢ã

ç¶å¾å çº `a()` å½å¼è¢«å·è¡äºï¼é£å¸¶ `a()` ç¶ä¸­ç `b()` ä¹è¢«å·è¡ï¼æä»¥ JavaScript ä¹çº `b()` å½å¼åµå»ºäºä¸å Execution Contextï¼è `b()` ç Execution Context æçå¨ `a()` ä¸é¢ã

å¨ Execution Stack ç¶ä¸­å½å¼çå·è¡é åºæ¯ç±ä¸å¾ä¸å·è¡çï¼ä¹å°±æ¯èªªï¼ä»¥æ­¤ç¯ä¾çºä¾ï¼æåå·è¡ `b()`ãå¨å·è¡ `a()`ï¼ç¶ `b()` å·è¡å®ä¹å¾ï¼`b()`å°±æé¢éå·è¡å çï¼è±æç¨±ä½ pop offï¼ï¼ä»¥æ­¤é¡æ¨ã

```
                   .
                   .
â                  .                  â
â                  .                  â
â                  .                  â
â                  .                  â
â                                     â
â âââââââââââââââââââââââââââââââââââ â âââââº Execution Stack
â â             b()                 â â
â â      Execution Context          â â
â â     (create and execute)        â â
â âââââââââââââââââââââââââââââââââââ â
â                                     â
â âââââââââââââââââââââââââââââââââââ â
â â            a()                  â â
â â      Execution Context          â â
â â     (create and execute)        â â
â âââââââââââââââââââââââââââââââââââ â
â                                     â
â âââââââââââââââââââââââââââââââââââ â
â â    Global Execution Context     â â
â â  (created and code is executed) â â
â âââââââââââââââââââââââââââââââââââ â
â                                     â
âââââââââââââââââââââââââââââââââââââââ
```

## ð³ Functions, Context, and Variables Environments
> **Variable Environment**: where the variables live and how they realte to each other in memory

å¨æ¯å Execution Context è¢«åµå»ºä¹å¾ï¼åæè©² Execution Context ä¹ææä¸åèªå·±ç Variable Environmentãæåå¯ä»¥ééä»¥ä¸çç¨å¼ç¢¼çºä¾ï¼ä¾èªªæ Variable Environment å¨ JavaScript ä¸­æ¯å¦ä½è¢«å»ºç«çã

```javascript
function b() {
    var myVar;
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

ç¶ä¸è¿°ç¨å¼ç¢¼è¢«å·è¡ä¹å¾ï¼myVar ææ¯ä»éº¼å¼ï¼ç¨å¼ç¢¼å·è¡å¾ï¼JavaScript Engine æåå¥å¨ Globalãa()ãb() åèªç Execution Context ä¸­åå»ºç«ä¸å Variable Environmentï¼æä»¥ myVar å¨ä¸åç Execution Context ç¶ä¸­å°±ææä¸åçå¼ï¼éè¦åè§å¯ç®åç¨å¼ç¢¼å·è¡å°åªéï¼åå»å¤æ· myVar ç®åçå¼ãå¦ä¸åï¼

```
â                                                        â
â                                                        â
â                                                        â
â                                                        â
â   âââââââââââââââââââââââââââââââââââââââââââââââââ    â  ââââââââº Execution Stack
â   â                  b()                          â    â
â   â                                               â    â
â   â           Execution Context       âââââââââââ â    â
â   â                                   â   myVar â â    â
â   â          (create and execute)     âundefinedâââ¼âââââ¼âââââââ
â   âââââââââââââââââââââââââââââââââââââ´ââââââââââ´ââ    â      â
â                                                        â      â
â   âââââââââââââââââââââââââââââââââââââââââââââââââ    â      â
â   â                  a()                          â    â      â
â   â                                               â    â      â
â   â           Execution Context         âââââââââ â    â      â
â   â                                     â myVar â â    â      â
â   â          (create and execute)       â   2   âââ¼âââââ¼âââââââ¼ââââââº Variable Environment
â   âââââââââââââââââââââââââââââââââââââââ´ââââââââ´ââ    â      â
â                                                        â      â
â   âââââââââââââââââââââââââââââââââââââââââââââââââ    â      â
â   â                                               â    â      â
â   â      Global Execution Context                 â    â      â
â   â                                     âââââââââ â    â      â
â   â    (created and code is executed)   â myVar â â    â      â
â   â                                     â   1   âââ¼âââââ¼âââââââ
â   âââââââââââââââââââââââââââââââââââââââ´ââââââââ´ââ    â
â                                                        â
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
```

## ð³ The Scope Chain
éè¨å¾æåå¨åé¢æå°ï¼ç¨å¼ç¢¼å·è¡ä¹å¾ï¼æçºæ¯åå·è¡çå½æ¸å»ºç«èªå·±ç Execution Contextãèªå·±ç Variable Environmentãç¾å¨æåè¦è«å°ï¼ç¶ç¨å¼ç¢¼å·è¡å¾é¤äºæå»ºç«ä¸è¿°æå°çé¨åï¼éæå»ºç«ä¸å Outer Environmentï¼ææå°±æ¯ææå»ºç«ä¸åå°å¤ç Scope åç§ã

ç¸½çµä¾èªªï¼ç¶ä¸å Execution Context è¢«å»ºç«çæåï¼è£¡é¢ææä»¥ä¸å¹¾ç¨®æ±è¥¿ï¼
- Global Object
- this
- Hoisting
- Outer Environment
- Variable Environment

æä»¥ï¼å»ºç«ä¸åå°å¤ç Scope åç§æ¯ä»éº¼ææï¼

å¦æç¨æå­æè¿°ä¾èªªæçè©±ï¼æçæ¯ JavaScript Engine æå»æª¢æ¥è©²ç¨å¼ç¢¼ï¼æ¯å¦èªªæå functionï¼ç Lexical Environmentï¼ä¹å°±æ¯å»æª¢æ¥æå funciton çæå¨ä½ç½®ï¼åå°è©² function æå¨ä½ç½®ç variable environment ç¶ä½åç§ã

æ¯å¦æå function æ¯å¨å¨åç°å¢ä¸­å®£åçï¼é£éº¼ç¶ JavaScript Engine å¨å·è¡è©² function çæåï¼é¤äºæå»ºç« function èªå·±ç variable environment ä¹å¤ï¼ä¹æå»åç§éå function æå¨ä½ç½®ç variable environmentï¼ä¹å°±æ¯å¨åç°å¢ç variable environmentã

èä¸è¿°æå°çéç¨®è¡çºï¼ä¾¿æå°è´ä¸åç¨±çºãScope Chainãçç¾è±¡ç¼çãæåç¾å¨å¯ä»¥ä¾ççä»¥ä¸å¹¾åä¸åçç¨å¼ç¢¼ï¼ä¾æ´å äºè§£ Scope Chainã

---

é¦åä¾è§å¯çæ³ä¸ï¼`b()` è£¡é¢ç `console.log(myVar)` æå°åºä»éº¼ï¼
```javascript
// çæ³ä¸
function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

å çº `b()` è£¡é¢ä¸¦æ²æå®£å `myVar` éåè®æ¸ï¼æä»¥ JavaScript Engine æèç± Lexical Context å»æª¢æ¥ `function b` å¨åªåç°å¢è¢«å®£åçï¼æª¢æ¥ä¹å¾ç¼ç¾æ¯å¨å¨åï¼æ¼æ¯ JavaScript Engine åå¨å¨åç°å¢ä¸­æª¢æ¥æ¯ä¸æ¯æ `myVar` éåè®æ¸ï¼ç¶å¾ç¼ç¾æï¼æ¼æ¯ä¾¿å°åº `1`ã

---

æ¥ä¸ä¾ä¾çççæ³äºï¼å¨çæ³äºçç¨å¼ç¢¼ä¸­ï¼`b()` è£¡é¢ç `console.log(myVar)` æå°åºä»éº¼ï¼

```javascript
// çæ³äº
function a() {
    function b() {
        console.log(myVar);
    }
    
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

å çº `b()` è£¡é¢ä¸¦æ²æå®£å `myVar` éåè®æ¸ï¼æä»¥ JavaScript Engine æèç± Lexical Context å»æª¢æ¥ `function b` å¨åªåç°å¢è¢«å®£åçï¼æª¢æ¥ä¹å¾ç¼ç¾æ¯å¨ `a function` è£¡é¢å®£åçï¼æ¼æ¯ JavaScript Engine åå¨ `a function` çå·è¡ç°å¢ä¸­æª¢æ¥æ¯ä¸æ¯æ `myVar` éåè®æ¸ï¼ç¶å¾ç¼ç¾æï¼æ¼æ¯ä¾¿å°åº `ï¼`ã

---

æ¥ä¸ä¾ä¾çççæ³ä¸ï¼å¨çæ³ä¸çç¨å¼ç¢¼ä¸­ï¼`b()` è£¡é¢ç `console.log(myVar)` æå°åºä»éº¼ï¼

```javascript
// çæ³ä¸
function a() {
    function b() {
        console.log(myVar);
    }
    b();
}

var myVar = 1;
a();
```

å çº `b()` è£¡é¢ä¸¦æ²æå®£å `myVar` éåè®æ¸ï¼æä»¥ JavaScript Engine æèç± Lexical Context å»æª¢æ¥ `function b` å¨åªåç°å¢è¢«å®£åçï¼æª¢æ¥ä¹å¾ç¼ç¾æ¯å¨ `a function` è£¡é¢å®£åçï¼æ¼æ¯ JavaScript Engine åå¨ `a function` çå·è¡ç°å¢ä¸­æª¢æ¥æ¯ä¸æ¯æ `myVar` éåè®æ¸ï¼ç¶å¾ç¼ç¾æ²æï¼æ¼æ¯ååç¹¼çºæª¢æ¥ `a funciton` æ¯å¨åªåç°å¢è¢«å®£åçï¼æª¢æ¥ä¹å¾ç¼ç¾æ¯å¨å¨åç°å¢ï¼æ¼æ¯ååç¹¼çºæª¢æ¥å¨åç°å¢ææ²æè®æ¸ `myVar`ï¼ç¶å¾çµæ¼ç¼ç¾æï¼æ¼æ¯ä¾¿å°åº `1`ã

---

å¾ä»¥ä¸ä¸åçæ³ä¸­ï¼å¯ä»¥çå°ä»¥ä¸å¹¾åæ­¥é©ï¼
1. æåå½å¼è¢«å¼å«ä¸¦å·è¡
2. JavaScript Engine æª¢æ¥è©²å½å¼ç Lexical Contextï¼ç¢ºå®å®ç Outer Environmentï¼ä¹å°±æ¯å½å¼è¢«å®£åçç°å¢ï¼ã
4. å¦ææåå½å¼å¼å«äºä¸åèªå·±ç Variable Environment æ²æçè®æ¸ï¼JavaScript Engine å°±æéå§å¾ Outer Environment ç Variable Environment æª¢æ¥ææ²æé£åè®æ¸ã
5. ä¸ç´éè¤æ­¥é© 3ï¼ç´å°æ¾å°é£åè®æ¸ï¼ææ¯æ¾å°æå¾ç¼ç¾æ²æé£åè®æ¸

éç¨®ä¸æ·å°å¾ Outer Environment å°æ¾ Variable çç¾è±¡å°±ç¨±çºãScope Chainãã

## ð³ Scope, ES6, and let
> Scope: where a variable is available in your code.

å¨ ES6 ä»¥åï¼è¥æ³è¦å®£åä¸åè®æ¸ï¼åªæ `var` å¯ä»¥ç¨ï¼ä½å¨ ES6 å¬å¸ä¹å¾ï¼ç®åæ `var`ã`const`ã`let` å¯ä»¥ç¨ä¾å®£åè®æ¸ã

éä¸èä¹éä¹æäºè¨±ä¸åãç¨ `let` å `const` å®£åè®æ¸å¾ï¼é£åè®æ¸æå¨ç Scope æ¯ä¸å block Scopeï¼ä¾å¦ç¨`{}`åèµ·ä¾å°±æ¯ä¸å blockï¼ï¼èç¨ `var` åæå°è®æ¸å®£åå¨ Function Scope ç¶ä¸­ã

ç¨ `var`ã`const`ã`let` é½ææ Hoisting çç¾è±¡ï¼åªæ¯ä½¿ç¨ `var` æï¼æçµ¦äºè®æ¸ä¸å undefined çåå§å¼ï¼ä½å¦ææ¯ `const`ã`let` çè©±ï¼åæ¯æè®è®æ¸å­å¨æ«ææ­»åç¡æ³ä½¿ç¨ï¼ç¶å¾å ±é¯ã


|| `var` | `const` | `let` |
|---| -------- | -------- | -------- |
|ä½ç¨å| å½å¼ä½ç¨å    | åå¡ä½ç¨å    | åå¡ä½ç¨å     | 
|Hoisting| undefined | é²å¥æ«ææ­»åï¼æå ±é¯ | é²å¥æ«ææ­»åï¼æå ±é¯|


## ð³ What about Asynchronous Callbacks?

å¨åé¢çå½±çææå° JavaScript æ¯ä¸åå®å·è¡ç·ãåæ­¥çèªè¨ï¼ä¸æ¬¡åªåä¸ä»¶äºæï¼ï¼ä½æ¯å¨çè¦½å¨ç¶ä¸­å»å¯ä»¥åå°éåæ­¥ï¼ä¸æ¬¡åå¾å¤ä»¶äºæï¼ï¼éå°åºæ¯å¦ä½è¾¦å°çï¼æ¯å çºæçè¦½å¨éåå·è¡çç°å¢ï¼å®å¯ä»¥ååä¸äºéåæ­¥çèçï¼ç¶å¾åå°èçå¥½çå½æ¸ä¸ä¸ä¸å° JavaScript Engine ç¶ä¸­å»å·è¡ã

çè¦½å¨èçéåæ­¥çéç¨æåå°æåè©ç¨±çº Event Loopï¼ä¹è¨±ä¹å¾å¯ä»¥åå¯«ä¸ç¯ç­è¨ä¾è¨éçè¦½å¨ç¶ä¸­ç Event Loop æ¯å¦ä½éä½çã
