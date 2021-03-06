# Objects and Functions

2022/06/02

## ð³ Concept Asides åè©è§£é

### ð¦ Namespace

> A container for variables and functions.  
> Typically to keep variables and function with the same name seperate.

JavaScript æ¬èº«ä¸¦æ²æ namespaceï¼ä½å¯ä»¥ééåç¨ object ä¾å²å­ç¸åçå½åæ¹å¼ï¼æ¯å¦ç¨ä¸åç object ä¾å²å­é½å«å greet çè®æ¸åç¨±ã

```javascript
const english = { greet: "Hello!" };
const spanish = { greet: "Hola!" };

console.log(english.greet);
console.log(spanish.greet);
```

### ð¦ First Class Function
> Everything you can do with other types you can do with functions.  
> Assign them to variables, pass them around, create them on the fly.

### ð¦ Mutate
> To change something.  
> **Immutable** means it can't be changed. 

### ð¦ Arguments
> The parameters you pass to a function.  
> Jacascript gives you a keyword of the same name which contains them all.

## ð³ Objects and Dot

å¨åé¢çå½±çç¶ä¸­ææå° object æ¯ä¸å° keyãvalue çéåï¼é£éº¼å¨è¨æ¶é«ç¶ä¸­ï¼object æ¯å¦ä½å²å­çå¢ï¼

ä¸å object è£¡é¢çææ property æè¢«å­å¨ååè¨æ¶é«ä½åï¼ç¶å¾ object æå¨çè¨æ¶é«ä½ååæè¨å¾æåå¶ä» property è¢«ä¿å­çè¨æ¶é«ä½åãå¦ä¸åæç¤ºï¼

![](./images/object.png)

## ð³ Funtcions are Objects

å¨ JavaScript ç¶ä¸­ function å°±æ¯ object çä¸ç¨®ï¼æä»¥ function ææææ object çç¹æ§ï¼ä½åæ function ä¹æä¸äºèªå·±çç¹é»ï¼ä¾å¦ï¼ function å¯ä»¥æ¯å¿åçï¼èä¸ function æä¸æ®µèªå·±ç codeï¼å¯ä»¥çè§£çº function çå¶ä¸­ä¸å property æ¯ codeï¼ï¼ä¸¦ä¸å¯ä»¥ééå¼å« `()` ä¾å·è¡ãå¦ä¸åæç¤ºï¼

![](./images/function.png)

æä»¥å¶å¯¦éæ¨£å¯«ä¹æ¯è¡å¾éçï¼å çº function å°±æ¯ objectï¼
```javascript
function greet() {
    console.log("Hello!");
}

greet.lang = "english";

console.log(greet.lang);
```

## ð³ Function Statements and Function Expressions

å¨ JavaScript ç¶ä¸­æå©ç¨®æ¹å¼å¯ä»¥ç¨ä¾å®£å functionï¼åå¥æ¯ï¼æè¿°å¼ï¼function statementï¼åè¡¨éå¼ï¼function expressionï¼ã

### ð¦ Function Statement æè¿°å¼

æè¿°å¼çå¯«æ³å¦ä¸ï¼
```javascript
function greeting() {
    console.log('hi');
}
```

### ð¦ Function Expression è¡¨éå¼

è¡¨éå¼çå¯«æ³å¦ä¸ï¼
```javascript
const greeting = function() {
    console.log('hi');
};
```

ææ¯ç¨ç®­é ­å½å¼ï¼
```javascript
const greeting = () => {
    console.log('hi');
};
```

### ð¦ å©èä¹éçå·®å¥

ä¾ççéå©æ®µç¨å¼ç¢¼å°±å¯ä»¥å¾æ¸æ¥çç¥éæè¿°å¼åè¡¨éå¼çå·®å¥ï¼
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
};
```

æéå©æ®µç¨å¼ç¢¼ä¸å»å·è¡çè©±ï¼å¯ä»¥çå°ç¬¬ä¸åé¨åçç¨å¼ç¢¼è½å¤ æåå·è¡ä¸¦å°åº "hi"ï¼å çºå¨ä½¿ç¨æè¿°å¼æï¼function æè¢« hoistingï¼æä»¥å¯ä»¥å°å·è¡çèªæ³å¯«å¨å®£å function ä¹åã

ä½æ¯å¨å·è¡ç¬¬äºé¨åçç¨å¼ç¢¼æå»æåºé¯ï¼å çºéç¶ç¬¬äºæ®µçç¨å¼ç¢¼ä¹æé²è¡ hoistingï¼ä½è¢« hoisting çåªæè®æ¸æ¬èº«èå·²ï¼è³¦å¼éååä½ä¸¦ä¸æè¢« hoistingï¼æä»¥å¨å®£å¿ greet ä¹åå°±å¼å«å·è¡å®çè©±ï¼ greet æé²å¥æ«ææ­»åä¸¦ä¸å ±é¯ï¼å çºå¨ééä½¿ç¨ const çéä¿ï¼ã

å¾éåä¾å­å¯ä»¥ç¥éï¼æè¿°å¼åè¡¨éå¼çæå¤§å·®å¥å°±æ¯å¨ hoisting çæåçµææä¸å¤ªä¸æ¨£ï¼èçºäºé¿åå¯è½æç¢çå ±é¯ï¼ç¡éé½å¨å·è¡ function ä¹ååå®£å¿ function ææ¯æ¯è¼å¥½çé¸æã

## ð³ By Value and By Reference

### ð¦ By Value

ç®åæä¸åçç¨å¼ç¢¼ï¼
```javascript
const a = 1; // primitive value
b = a;
```

å¦æ a éåè®æ¸çå¼æ¯ä¸å primitive typeï¼ä¾å¦æ¸å­ãå­ä¸²ãå¸æå¼ç­ç­ï¼çè©±ï¼ç¶æåå° a è³¦å¼çµ¦ b çæåï¼å¶å¯¦æ¯æå° a çå¼è¤è£½åºä¸åæ°çï¼ç¶å¾å°å®å²å­å¨å¦å¤ä¸åæ°çè¨æ¶é«åå¡ï¼åææ°çè¨æ¶é«åå¡ reference å° bï¼å¦ä¸åæç¤ºï¼
![](images/byvalue.png)

### ð¦ By Reference

æ¥ä¸ä¾ä»¥ä¸é¢çç¨å¼ç¢¼ç¯ä¾çºä¾ï¼ä¾èä¾ä»éº¼æ¯ **by reference**ï¼
```javascript
const a = { firstName: 'John', LastName: 'Walker' };
const b = a;

b.firstName = 'Ben';
console.log(b.firstName);
console.log(a.firstName); // a.firstName æå°åºä»éº¼ï¼
```

å¾ä¸è¿°ç¨å¼ç¢¼ä¸­å¯ä»¥ç¥éï¼æåå° a éåè®æ¸æåä¸å objectï¼ç¶å¾åå° b æå aï¼æå¾å»ä¿®æ¹ b éå object è£¡é¢ç propertyï¼ä½çµæå»ç¼ç¾ a è£¡é¢ç property ä¹è¢«æåä¿®æ¹å°äºï¼ä¹å°±æ¯èªªæåä¸ç®¡æ¯ä¿®æ¹ b ææ¯ä¿®æ¹ a é½æä¿®æ¹å°åä¸å objectã

çºä»éº¼æç¼çä¸è¿°éä»¶äºå¢ï¼æ¯å çºç¶è³æåææ¯ reference type (object, array...) çæåï¼JavaScript æ¯éé **by reference** å»å³éåæ¸çï¼ä¹å°±æ¯å¦ä¸åæç¤ºï¼

![](images/byreference.png)

å¶å¯¦ a å b éå©åè®æ¸é½æååä¸åè¨æ¶é«åå¡ï¼ä¹å°±æ¯ object çæå¨ä½ç½®ï¼ï¼æä»¥ä¸ç®¡æ¯éé a æ b ä¾ä¿®æ¹ objectï¼é½æ¯ä¿®æ¹å°åæ¨£çæ±è¥¿ã

?> **å°å°çµè«**ï¼ç¥é **by value** å **by reference** çå·®å¥ï¼æå©æ¼ç¨å¼éç¼åé¤é¯ãå¨ééæè¨è«å° **by value** å **by reference** çå·®å¥ä¸»è¦æ¯å çºï¼ç¶æåå¨é²è¡ç¨å¼éç¼ææ¯é¤é¯çæåï¼æéè¦èçéå¸¸å¤åå¼åæ¨£çè³æåæãç¶å¦æä¸å°å¿æ¹åçåæ¬çè³ææï¼å¯è½æå°è´æäº function åºé¯ï¼æ­¤æç¥é **by value** å **by referenct** çå·®ç°å¯ä»¥æ´å¥½çå»é¿åæ¹åå°åå§è³æï¼éä½ç¢ç bug çæ©çï¼

## ð³ Objects, Funcitons, and `this`

åé¢çå¹¾é¨å½±çææå° function å¨å·è¡çæåï¼ææä¸å funciton èªå·±ç execute content å variable environmentï¼ä¸¦éé scope chain å»æ¿å° outer environment çè®æ¸ï¼é¤æ­¤ä¹å¤éææä¸åæ±è¥¿ââå«å `this`ï¼æ¥ä¸ä¾éåé¨åæç¹å¥éå° `this` ä¾åèªªæã

é¦åï¼åä¾ççå¹¾åç°¡å®çä¾å­ï¼
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

å¦ææåå°ä¸è¿°ä¸åç¨å¼ç¢¼æ¾å°çè¦½å¨ç¶ä¸­å»å·è¡çè©±ï¼å¯ä»¥ç¥ééä¸åå°åºä¾çæ±è¥¿é½æ¯ windowï¼ä¹å°±æ¯èªªï¼æç§ä¸é¢çæ¹å¼ï¼å¯«å¨ function ç¶ä¸­ç¶å¾ç´æ¥å·è¡ï¼ææ¯ç´æ¥å·è¡ï¼å»å¼å« `this`ï¼å®ææåçæ±è¥¿é½æ¯ window éå global objectã

æ¥ä¸ä¾æåè©¦è©¦ç¨å¨ object è£¡é¢å»ºç« method çæ¹å¼ä¾å¼å« `this`ï¼
```javascript
const c = {
    name: 'The c object',
    log: function() {
      console.log(this);
    },
};

c.log();
```

ç¶æåå°ä¸è¿°çç¨å¼ç¢¼ä¸å°çè¦½å¨çç°å¢ä¸­å·è¡æï¼ `this` æå°åº c éå objectï¼ä¹å°±æ¯èªªééä¸å object ä¾å¼å«å¶ä¸­ç method çè©±ï¼æ­¤æç `this` ææåè©² objectãæ¥ä¸ä¾æåç¹¼çºççä¸ä¸åç¯ä¾ï¼
```javascript
const c = {
    name: 'The c object',
    log: function() {
        console.log(this);

        const setName = function(newName) {
            this.name = newName;
        }

        setName('Update c object!');
        console.log(this);
    },
};

c.log();
```

æç§ä¸ä¸ä¸åç¨å¼ç¢¼ç¯ä¾çèªç¥ï¼å¦æå¨ä¸å object method è£¡é¢å¼å« `this`ï¼é£éº¼ `this` å°±ææåè©² objectï¼ä½ç¶æåå·è¡ `c.log()` ä¹å¾ï¼è£¡é¢ç `setName` function ä¼¼ä¹ä¸¦æ²ææåå°å¹«æåå° `c.name` ä¿®æ¹ææ°çåå­ãåèå¨ window éå global object ä¸é¢ï¼æ¾å°äº `window.name === 'Update c object'`ãä¹å°±æ¯èªª `setName` function è£¡é¢ç `this` æ¯æå windowï¼ä¸¦ä¸æ¯æå object cã

çºäºè¦è® `this` è½å¤ ä¸ç´æå object cï¼æåå¯ä»¥æç¨å¼ç¢¼ä¿®æ¹æä¸é¢éæ¨£ï¼
```javascript
const c = {
    name: 'The c object',
    log: function() {
        const self = this; // å¤å éä¸è¡ï¼ç¶å¾ææç this é½æ¹ç¨ self
        console.log(self);

        const setName = function(newName) {
            self.name = newName;
        }

        setName('Update c object!');
        console.log(self);
    },
};

c.log();
```

åªè¦å° `this` è³¦å¼çµ¦ä¸åè®æ¸å¾ï¼ç¶å¾å¨å¶ä»æææç¨å° `this` çå°æ¹é½æ¹ç¨è©²è®æ¸ï¼ éæ¨£å¯«å¨ `c.log()` è£¡é¢çä»»ä½ function é½è½å¤ éé scope chain å»æ¾å°è©²è®æ¸æåç `this` äºï¼ä¹å°±æ¯ object cï¼ã

?> **å°å°çµè«**ï¼å¦æå¨ function è£¡é¢å¼å« `this`ï¼ç¶å¾å¨ global ç¶ä¸­å·è¡ï¼éå¸¸ `this` ææå windowï¼å¦ææ¯å¼å«æ¾å¨ object ç¶ä¸­ç function çè©±ï¼å¼å«ç `this` åææåè©² objectï¼ä½å¦ææ¯å¨ object ç function ä¸­éæå¦ä¸åå§é¨ç functionï¼éåå§é¨ç function å¼å«ç `this` ææå windowï¼çºäºé¿åéæ¨£ç bugï¼å¯ä»¥åå¨ object function è£¡é¢çæä¸æ¹å° `this` è³¦å¼çµ¦æåè®æ¸ï¼éå¸¸æå¯«æ `const self = this`ï¼ã

## ð³ 'arguments' and Spread

### ð¦ arguments

å¨éå§èªªæä»éº¼æ¯ `arguments` ä¹åï¼æååä¾çä¸åæ®éç functionï¼
```javascript
function greet(firstName, lastName, language) {
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log('----------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'en');
```

å¨ä¸è¿°ç function ç¶ä¸­ï¼éç¶ `greet()` éå function éè¦å³ä¸åè®æ¸é²å»ï¼ä½å¦æå°å³äºä»»ä½ä¸åï¼Javascript ä¸¦ä¸æå ±é¯ï¼èæ¯æå°æ²æå³å¥ä»»ä½å¼çè®æ¸é è¨­æ `undefined`ãèéæ¨£çç¹æ§ä¹å°±è¡¨ç¤ºï¼å¯ä»¥å¾ç°¡å®çå°ä¸åè®æ¸è¨­ç½®ä¸åé è¨­å¼ï¼æ¯å¦ï¼å¦ææ²æå³ `language` éåè®æ¸é²å»çè©±ï¼åå°å¶é è¨­å¼è¨­æ `'en'`ï¼å¯ä»¥éæ¨£å¯«ï¼
```javascript
function greet(firstName, lastName, language = 'en') {
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log('----------');
}
```

ææ¯æ¯è¼èçå¯«æ³ï¼
```javascript
function greet(firstName, lastName, language) {
    language = language || 'en';

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log('----------');
}
```

å¨ä¸å function ç¶ä¸­ï¼é¤äºå³é²å»çè®æ¸ä¹å¤ï¼Javascript ä¹æä¾äºä¸åç¨±ä½ `arguments` çè®æ¸ä¾æ¥æ¶å³é²ä¾çææè®æ¸ãæ­¤ææåå¯ä»¥ä¾æä¸è¿°ç function æ¹é ä¸ä¸ï¼å° `arguments` å é²å»ï¼ç¶å¾ççæç¼çä»éº¼äºæï¼
```javascript
function greet(firstName, lastName, language) {
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments); // å° Javascript å§å»ºç arguments å å¥
    console.log('----------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'en');
```

å¯ä»¥çå°å·è¡åéç `greet()` åå¥å°åºäºä»¥ä¸ååä¸åç `arguments`ï¼
```
[]
['John']
['John', 'Doe']
['John', 'Doe', 'en']
```

å¾å°åºççµæç¶ä¸­å¯ä»¥ç¥é `arguments` æ¯ä¸åå¯ä»¥æ¶éææå³é² function çè®æ¸çé¡ arrayï¼çºä»éº¼æèªªå®æ¯é¡ array æ¯å çºå®é·å¾å¾å arrayï¼å¯ä»¥åå°ä¸äºè· array å¾åçäºæï¼ä½ array çæäºç¹æ§å®æ²æã

éæåæåå°±å¯ä»¥ç¨ `arguments` ä¾åä¸äºäºæï¼æ¯å¦å¯ä»¥æª¢æ¥ææ²æè®æ¸å³é²ä¾ï¼å¦ææ²æå°±å ±é¯ï¼
```javascript
function greet(firstName, lastName, language) {
    if (arguments.length === 0) {
        console.log('Missing parameters');
        return;
    }
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments); // å° Javascript å§å»ºç arguments å å¥
    console.log('----------');
}
```

### ð¦ spread

spread ç°¡å®ä¾èªªå°±æ¯å¾å¸¸çå°ç `...`ãèéå `...` å¯¦éä¸æä»éº¼ç¨éå¢ï¼ç®åææç¥éçç¨æ³ä¸»è¦æä¸åï¼
1. å¦æå³å¥æå function çè®æ¸å¯è½æ¯OOååOOåä»¥ä¸ï¼éåãä»¥ä¸ãçé¨åå¯ä»¥ç¨ `...` åèµ·ä¾ã
2. å¯ä»¥ç¨ä¾è§£æ§ arrayã
3. å¯ä»¥ç¨ä¾è§£æ§ objectã

å»¢è©±ä¸å¤èªªï¼ç´æ¥ç¨å¯¦éçä¾å­ä¾ççï¼
```javascript
function greet(firstName, lastName, language, ...others) {
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(others);
}

greet('John', 'Doe', 'en', 1, 2, 3, 4);
```

å¨ä¸è¿°çä¾å­ï¼å¯ä»¥çå° `others` éåè®æ¸å°åºäº [1, 2, 3, 4]ï¼éä¹å°±æ¯èªªå®å° `firstName, lastName, language` ä¹å¤çå¼é½åå¨ `others` éå array è£¡é¢ï¼éä¹å°±æ¯è¡¨ç¤ºéå function å¯ä»¥å³å¥ä¸åæä¸åä»¥ä¸çå¼ã

æ¥èä¾ççè§£æ§çä¾å­ï¼
```javascript
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [...arr1];
```

å¨ä¸è¿°ç¨å¼ç¢¼ä¸­ï¼å¯ä»¥éé `...` æ¿å° arr1 è£¡é¢çæ¯ååç´ ï¼ç¶å¾åæå®æ¾å° arr2 ä¾éå°æ·ºæ·è²ãç¨å¨ object ç¶ä¸­ä¹æ¯åæ¨£çéçãå¦æ­¤ä¸ä¾ä¾¿å¯ä»¥è¼é¬éå°æ·ºæ·è²ã