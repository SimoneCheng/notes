---
sidebar_position: 0
title: Recursion 遞迴
date: 2023-03-21
---

## 🐳 遞迴的種類

如果一個 function 裡面有 self-calling 的敘述，便稱為遞迴，遞迴概略可以分為三個種類，分別是：
- Direct Recursion
- Indirect Recursion
- Tail Recursion

下面舉一些簡單的例子來說明這三個遞迴。

### 🦀 Direct Recursion

Direct Recursion，直接遞迴，應該蠻好理解的。如果某個 function 在 function 內部呼叫自己，就可以稱為直接遞迴。可以參考下面的 psuedo code：

```c
void directRecursionFunction()
{
  // some code...

  directRecursionFunction();

  // some code...
}
```

### 🦀 Indirect Recursion

Indirect Recursion，間接遞迴，意思是指多個 module 之間，彼此互相呼叫，形成 calling cycle。例如：假設目前有三個 function：`module A`、`module B`、`module C`，這三個 function 彼此互相呼叫，便會形成間接遞迴，如下圖。

```mermaid
flowchart LR
  A[module A] --> B[module B]
  B --> C[module C]
  C --> A
```

:::note
像上面那種 function 互相 call 來 call 去，互相高度依賴的狀況（高耦合），盡量不要在實際開發中寫出來，會很可怕。
:::

### 🦀 Tail Recursion

Tail Recursion，尾端遞迴，其實是直接遞迴的一種，只是在 recursion 之後，下一個可執行的敘述就是 END 敘述。會特別把這個種類帖出來是因為這種地回可以在 compiler 裡面做到最佳化。（最佳化的意思，某種程度上可以理解成「將遞迴改成非遞迴」）

## 🐳 Recursion v.s. Iteration(Non-recusrion)

- 任何問題的解法必定可以用兩種演算法去解決：遞迴與非遞迴。
- 遞迴與非遞迴演算法兩者可以互相轉換
  - 遞迴改為非遞迴，有標準 SOP
  - 非遞迴改回遞迴，沒有標準 SOP（需要靈感）

#### 示意圖

```mermaid
graph BT
  B[Problem]
  A[Recustive Algo] --> B
  C[Non-recursive Algo] --> B
  A -. 要修改的話有SOP .-> C
  C -. 必存在,但沒有SOP .-> A
```

#### 比較表

||遞迴|非遞迴|
|---|---|---|
|程式碼|較精簡|較冗長|
|區域變數、暫存變數|使用很少或是沒有|使用量多|
|表達問題的能力|powerful|weak|
|除錯|困難|容易|
|程式執行時間|較久，比較沒有效率|較短，較有效率|
|memory stack 空間|需要額外的 stack 空間支持，所以執行時需要較多的動態空間|無需 stack support|

## 🐳 題目練習

### 🦀 Factorial N! 階乘

#### Question 1: Write an Interative function Fac(N) or pseudo code for N!

```js
function fac(n) {
  let result = 1;
  for (let i = 1; i <= n; i++>) {
    result = result * i;
  }
  return result;
}
```

#### Question 2: Write a Recursive function Fac(N) or pseudo code for N!

先把階乘的遞迴數學定義寫出來：

$$
n! =
\begin{cases}
1,\ if\ n \ne 0 \\
(n-1)! * n,\ if\  n > 0
\end{cases}
$$

然後再寫出遞迴的程式碼：

```js
function fac(n) {
  if (n === 0) {
    return 1;
  } else {
    return fac(n-1) * n;
  }
}
```

:::tip
解遞迴相關問題的訣竅：先想出遞迴的數學定義，再把數學定義轉換成程式碼！
:::

### 🦀 Fibonacci Number

#### Definition

$$
F_{0} = 0,\ F_{1} = 1,\ F_{n} = F_{n-1} + F_{n-2},\ for\ n \ge 2
$$

#### Question 1: Write a Recurisive function for Fib(N)

```js
function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}
```

#### Quesiton 2: Write a Interative function for Fib(N)

```js
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
}
```

### 🦀 Greatest Common Divisor (GCD) 最大公因數

#### Definition

用輾轉相除法來計算兩個數字（A, B）的最大公因數，定義如下：

$$
\begin{cases}
B,\ if\ (A \mod B) = 0 \\
GCD(B, A \mod B),\ otherwise
\end{cases}
$$

#### Write the recursive code for GCD(A, B)

```js
function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}
```

### 🦀 Tower of Hanoi 河內塔

#### 題目敘述

有三個柱子，假設分別叫做 A、B、C，其中 A 柱子上有 n 個大小不同的盤子，這些盤子從上到下按照大小排放，最上面的盤子最小，最下面的盤子最大，現在要把這些盤子從 A 柱子移到 C 柱子，但必須遵守以下規則：

1. 每次只能移動一個盤子
2. 大的盤子不能放在小的盤子上面

請把所有的移動步驟都 print 出來。

#### 解題思路

```
       A            B           C

       │            │           │
       │            │           │
       │            │           │
1    ┌─┼─┐          │           │
2   ┌┼┼┼┼┼┐         │           │
3  ┌┼┼┼┼┼┼┼┐        │           │
  ─┴───────┴─   ────┴────   ────┴────
```

先從例子開始想，假設目前有 A、B、C 三個柱子，然後有 3 個盤子在 A 柱子上面，則步驟如下：

---
1. move disk 1 from A to C
2. move disk 2 from A to B
3. move disk 1 from C to B
---
4. move disk 3 from A to C
---
5. move disk 1 from B to A
6. move disk 2 from B to C
7. move disk 1 from A to C
---

把步驟分成三個區塊來看：
1. 第 1. ~ 3. 步驟是把 1 ~ 2 號的盤子都先從 A 柱子移到 B 柱子
2. 第 4. 步驟是把最後一個第 3 號盤子直接從 A 柱子移到 C 柱子
3. 接下來是把 B 柱子上的盤子都移到 C 柱子

例外情況：如果只有一個盤子的話，就直接從 A 柱子搬到 C 柱子就可以了。

```js
function hanoi(n, from, to, via) {
  if (n === 1) {
    console.log(`move disk 1 from ${from} to ${to}`);
  } else {
    hanoi(n - 1, from, via, to); // 先把 n - 1 個盤子都移到中間的柱子
    console.log(`move disk ${n} from ${from} to ${to}`); // 把最下面的盤子移到目標柱子
    hanoi(n - 1, via, to, from); // 再把剩下的 n - 1 個盤子移到目標柱子
  }
}
```

#### 河內塔的遞迴定義

把上面提到的步驟用數學式來表示，$T(n)$ 表示移動 n 個盤子時程式所需的執行次數，如果解出 $T(n)$ 就表示解出了這個 function 的時間複雜度：

$$
\begin{equation*}
  \begin{split}
    T(n) &= T(n - 1) + 1 + T(n - 1),\ 且\ T(1) = 1\\
         &= 2T(n - 1) + 1
  \end{split}
\end{equation*}
$$

解 $T(n)$，用展開代入法：

$$
\begin{equation*}
  \begin{split}
    T(n) &= 2 * T(n - 1) + 1\\
         &= 2 * [2 * T(n - 2) + 1] + 1\\
         &= 4 * T(n - 2) + 3\\
         &= 4 * [2 * T(n - 3) + 1] + 3\\
         &= 8 * T(n - 3) + 7\\
         &= 16 * T(n - 4) + 15\\
         &= 2^{n-1} * T(n - (n - 1)) + (2^{n-1} - 1)\\
         &= 2^{n-1} * T(1) + (2^{n-1} - 1)\\
         &= 2^{n-1} + (2^{n-1} - 1)\\
         &= 2^n - 1 \approx O(2^n)
  \end{split}
\end{equation*}
$$
