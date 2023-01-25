---
sidebar_position: 1
title: Binary Tree Traversal 二元樹走訪
date: 2022-12-04
---

## 🐳 Definition 定義

在 leetcode 的教學當中，樹的定義如下：

> A `tree` is a frequently-used data structure to simulate a hierarchical tree structure.

> Each node of the tree will have a root value and a list of references to other nodes which are called child nodes. From graph view, a tree can also be defined as a directed acyclic graph which has `N nodes` and `N-1 edges`.

二元樹的定義如下：

> A `Binary Tree` is one of the most typical tree structure. As the name suggests, a binary tree is a tree data structure in which each node has `at most two children`, which are referred to as the left child and the right child.

簡單來說，如果將二元樹畫成圖的話，會長得像下面的樣子：

```mermaid
graph TB
    A((1))-->B((2))
    A-->C((3))
    B-->D((4))
    B-->E((5))
    C-->F((6))
    C-->G((7))
    D-->H((8))
    D-->I((9))
    E-->J((10))
```

## 🐳 How to Traverse A Tree 遍歷二元樹

與二元樹相關最常見的 leetcode 題就是如何遍歷二元樹了，遍歷指的是在不重複的情況下，存取樹的所有節點。目前有四種方式可以遍歷二元樹：

### 🦀 Pre-order Traversal

> Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse the right subtree.

遍歷二元樹的順序：
1. 中
2. 左
3. 右

用 javascript 來實作 Pre-order Traversal：
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    const res = [];
    helper(root, res);
    return res;
};

const helper = (treeNode, res) => {
    if (!treeNode) return;
    res.push(treeNode.val);
    helper(treeNode.left, res);
    helper(treeNode.right, res);
};
```

### 🦀 In-order Traversal

> In-order traversal is to traverse the left subtree first. Then visit the root. Finally, traverse the right subtree.

順序：
1. 左
2. 中
3. 右

用 javascript 來實作 In-order Traversal：
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = [];
    helper(root, res);
    return res;
};

const helper = (treeNode, res) => {
    if (!treeNode) return;
    helper(treeNode.left, res);
    res.push(treeNode.val);
    helper(treeNode.right, res);
};
```

### 🦀 Post-order Traversal

> Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. Finally, visit the root.

順序：
1. 左
2. 右
3. 中

用 javascript 來實作 Post-order Traversal：
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    helper(root, res);
    return res;
};

const helper = (treeNode, res) => {
    if (!treeNode) return;
    helper(treeNode.left, res);
    helper(treeNode.right, res);
    res.push(treeNode.val);
};
```

:::caution
樹（tree）裡面的每一個節點（node）都要按照上面提到的順序來遍歷才算完成。
:::

### 🦀 Level Order Traversal

> Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

以下面的 Binary Tree 為例：

```mermaid
graph TB
    A((3))-->B((9))
    A-->C((20))
    C-->D((15))
    C-->E((7))
```

遍歷的順序會是：`3 > 9 > 20 > 15 > 7`。

用 javascript 來實作 Level Order Traversal：

```
初步想法：
1. 用一個 array 當作 waiting list，表示處理節點的順序，要記得節點和節點的階層。
2. 用另外一個 array 來存處理好的節點。
```

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if (root === null || root.length === 0) {
        return [];
    }

    const result = [];
    const waitingList = [ { level: 0, node: root } ];

    while (waitingList.length > 0) {
        // 處理 waiting list 當前的節點
        const currentNode = waitingList.shift();
        const { level, node } = currentNode;
        if (!result[level]) {
            result[level] = [node.val];
        } else {
            result[level].push(node.val);
        }

        // 將當前節點的子節點加入 waiting list
        if (node.left) {
            waitingList.push({ level: level + 1, node: node.left });
        }       
        if (node.right) {
            waitingList.push({ level: level + 1, node: node.right });
        }
    }

    return result;
};
```

:::info
除了使用**遞迴**來實作走訪二元樹之外，也可以使用 **DFS（深度優先搜尋演算法）**。但我還不會 DFS...
:::

## 🐳 學習資源
- https://leetcode.com/explore/learn/card/data-structure-tree/
- [二元樹(Binary Tree) by Aquamay](https://hackmd.io/@Aquamay/HyCgHXfid)
- [Binary Tree: Traversal(尋訪) by Chiu CC](http://alrightchiu.github.io/SecondRound/binary-tree-traversalxun-fang.html)
