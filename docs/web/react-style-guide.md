---
title: React Style Guide
date: 2023-05-06
---

在寫 React 的時候要特別注意的 coding style（自己常常忘記），其他的就按照 javascript coding style guide 就可以了。

## 🐳 Rules

### 🦀 Quotes

> Always use double quotes (`"`) for JSX attributes, but single quotes (`'`) for all other JS ans CSS.

**eslint**: [`jsx-quotes`](https://eslint.org/docs/latest/rules/jsx-quotes)

**why**: Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

**example**:
```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />
```

```jsx
// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

### 🦀 Buttons

> This rules enforces an explicit type attribute for all the button elements and checks that its value is valid per spec (i.e., is one of `"button"`, `"submit"`, and `"reset"`).

**eslint-plugin-react**: [`button-has-type`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md)

**why**: The default value of type attribute for button HTML element is "submit" which is often not the desired behavior and may lead to unexpected page reloads.

**example**:
```jsx
// bad
<button>Hello</button>

// good
<button type="button">Hello</button>
```

### 🦀 No inline function in jsx

> Do not write a `bind` call or `arrow function` in a JSX prop.

**eslint-plugin-react**: [`jsx-no-bind`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

**why**: A `bind` call or `arrow function` in a JSX prop will create a brand new function on every single render. This is bad for performance, as it may cause unnecessary re-renders if a brand new function is passed as a prop to a component that uses reference equality check on the prop to determine if it should update.

**note**: 平常寫的時候應該是不需要這麼嚴格，比較要注意的是：如果已經把 event handler 封裝成 function 的話，就要特別檢查一下是不是可以避免寫 inline function。

**example**:
```jsx
// bad
<Button onClick={(e) => console.log(e)}>Hello</Button>

// good
const handleClickButton = (e) => {
    console.log(e);
}
<Button onClick={handleClickButton}>Hello</Button>
```

```jsx
// bad
const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    // ...
}
<input value="Hello" onChange={(e) => handleChange(e)} />

// good
const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
    // ...
}
<input value="Hello" onChange={handleChange} />
```

## 🐳 Resource
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [ESlint plugin React](https://github.com/jsx-eslint/eslint-plugin-react)
- [Event Handler Naming in React](https://jaketrent.com/post/naming-event-handlers-react/)
