"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),v=a,h=c["".concat(s,".").concat(v)]||c[v]||p[v]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"Binary Tree Traversal \u4e8c\u5143\u6a39\u8d70\u8a2a",date:new Date("2022-12-04T00:00:00.000Z")},o=void 0,i={unversionedId:"notes/data-structure/binary-tree-traversal",id:"notes/data-structure/binary-tree-traversal",title:"Binary Tree Traversal \u4e8c\u5143\u6a39\u8d70\u8a2a",description:"\ud83d\udc33 Definition \u5b9a\u7fa9",source:"@site/docs/notes/data-structure/binary-tree-traversal.md",sourceDirName:"notes/data-structure",slug:"/notes/data-structure/binary-tree-traversal",permalink:"/notes/docs/notes/data-structure/binary-tree-traversal",draft:!1,editUrl:"https://github.com/SimoneCheng/notes/tree/main/docs/notes/data-structure/binary-tree-traversal.md",tags:[],version:"current",frontMatter:{title:"Binary Tree Traversal \u4e8c\u5143\u6a39\u8d70\u8a2a",date:"2022-12-04T00:00:00.000Z"},sidebar:"notes",previous:{title:"Tree and Binary Tree \u6a39\u8207\u4e8c\u5143\u6a39",permalink:"/notes/docs/notes/data-structure/tree-and-binary-tree"},next:{title:"Priority Queue",permalink:"/notes/docs/notes/data-structure/priority-queue"}},s={},u=[{value:"\ud83d\udc33 Definition \u5b9a\u7fa9",id:"-definition-\u5b9a\u7fa9",level:2},{value:"\ud83d\udc33 How to Traverse A Tree \u904d\u6b77\u4e8c\u5143\u6a39",id:"-how-to-traverse-a-tree-\u904d\u6b77\u4e8c\u5143\u6a39",level:2},{value:"\ud83e\udd80 Pre-order Traversal",id:"-pre-order-traversal",level:3},{value:"\ud83e\udd80 In-order Traversal",id:"-in-order-traversal",level:3},{value:"\ud83e\udd80 Post-order Traversal",id:"-post-order-traversal",level:3},{value:"\ud83e\udd80 Level Order Traversal",id:"-level-order-traversal",level:3},{value:"\ud83d\udc33 \u5b78\u7fd2\u8cc7\u6e90",id:"-\u5b78\u7fd2\u8cc7\u6e90",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-definition-\u5b9a\u7fa9"},"\ud83d\udc33 Definition \u5b9a\u7fa9"),(0,a.kt)("p",null,"\u5728 leetcode \u7684\u6559\u5b78\u7576\u4e2d\uff0c\u6a39\u7684\u5b9a\u7fa9\u5982\u4e0b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"tree")," is a frequently-used data structure to simulate a hierarchical tree structure.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each node of the tree will have a root value and a list of references to other nodes which are called child nodes. From graph view, a tree can also be defined as a directed acyclic graph which has ",(0,a.kt)("inlineCode",{parentName:"p"},"N nodes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"N-1 edges"),".")),(0,a.kt)("p",null,"\u4e8c\u5143\u6a39\u7684\u5b9a\u7fa9\u5982\u4e0b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Binary Tree")," is one of the most typical tree structure. As the name suggests, a binary tree is a tree data structure in which each node has ",(0,a.kt)("inlineCode",{parentName:"p"},"at most two children"),", which are referred to as the left child and the right child.")),(0,a.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u5982\u679c\u5c07\u4e8c\u5143\u6a39\u756b\u6210\u5716\u7684\u8a71\uff0c\u6703\u9577\u5f97\u50cf\u4e0b\u9762\u7684\u6a23\u5b50\uff1a"),(0,a.kt)("mermaid",{value:"graph TB\n    A((1))--\x3eB((2))\n    A--\x3eC((3))\n    B--\x3eD((4))\n    B--\x3eE((5))\n    C--\x3eF((6))\n    C--\x3eG((7))\n    D--\x3eH((8))\n    D--\x3eI((9))\n    E--\x3eJ((10))"}),(0,a.kt)("h2",{id:"-how-to-traverse-a-tree-\u904d\u6b77\u4e8c\u5143\u6a39"},"\ud83d\udc33 How to Traverse A Tree \u904d\u6b77\u4e8c\u5143\u6a39"),(0,a.kt)("p",null,"\u8207\u4e8c\u5143\u6a39\u76f8\u95dc\u6700\u5e38\u898b\u7684 leetcode \u984c\u5c31\u662f\u5982\u4f55\u904d\u6b77\u4e8c\u5143\u6a39\u4e86\uff0c\u904d\u6b77\u6307\u7684\u662f\u5728\u4e0d\u91cd\u8907\u7684\u60c5\u6cc1\u4e0b\uff0c\u5b58\u53d6\u6a39\u7684\u6240\u6709\u7bc0\u9ede\u3002\u76ee\u524d\u6709\u56db\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u904d\u6b77\u4e8c\u5143\u6a39\uff1a"),(0,a.kt)("h3",{id:"-pre-order-traversal"},"\ud83e\udd80 Pre-order Traversal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse the right subtree.")),(0,a.kt)("p",null,"\u904d\u6b77\u4e8c\u5143\u6a39\u7684\u9806\u5e8f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u5de6"),(0,a.kt)("li",{parentName:"ol"},"\u53f3")),(0,a.kt)("p",null,"\u7528 javascript \u4f86\u5be6\u4f5c Pre-order Traversal\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\n\nvar preorderTraversal = function(root) {\n    const res = [];\n    helper(root, res);\n    return res;\n};\n\nconst helper = (treeNode, res) => {\n    if (!treeNode) return;\n    res.push(treeNode.val);\n    helper(treeNode.left, res);\n    helper(treeNode.right, res);\n};\n")),(0,a.kt)("h3",{id:"-in-order-traversal"},"\ud83e\udd80 In-order Traversal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In-order traversal is to traverse the left subtree first. Then visit the root. Finally, traverse the right subtree.")),(0,a.kt)("p",null,"\u9806\u5e8f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5de6"),(0,a.kt)("li",{parentName:"ol"},"\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u53f3")),(0,a.kt)("p",null,"\u7528 javascript \u4f86\u5be6\u4f5c In-order Traversal\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function(root) {\n    const res = [];\n    helper(root, res);\n    return res;\n};\n\nconst helper = (treeNode, res) => {\n    if (!treeNode) return;\n    helper(treeNode.left, res);\n    res.push(treeNode.val);\n    helper(treeNode.right, res);\n};\n")),(0,a.kt)("h3",{id:"-post-order-traversal"},"\ud83e\udd80 Post-order Traversal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. Finally, visit the root.")),(0,a.kt)("p",null,"\u9806\u5e8f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5de6"),(0,a.kt)("li",{parentName:"ol"},"\u53f3"),(0,a.kt)("li",{parentName:"ol"},"\u4e2d")),(0,a.kt)("p",null,"\u7528 javascript \u4f86\u5be6\u4f5c Post-order Traversal\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar postorderTraversal = function(root) {\n    const res = [];\n    helper(root, res);\n    return res;\n};\n\nconst helper = (treeNode, res) => {\n    if (!treeNode) return;\n    helper(treeNode.left, res);\n    helper(treeNode.right, res);\n    res.push(treeNode.val);\n};\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6a39\uff08tree\uff09\u88e1\u9762\u7684\u6bcf\u4e00\u500b\u7bc0\u9ede\uff08node\uff09\u90fd\u8981\u6309\u7167\u4e0a\u9762\u63d0\u5230\u7684\u9806\u5e8f\u4f86\u904d\u6b77\u624d\u7b97\u5b8c\u6210\u3002")),(0,a.kt)("h3",{id:"-level-order-traversal"},"\ud83e\udd80 Level Order Traversal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u9762\u7684 Binary Tree \u70ba\u4f8b\uff1a"),(0,a.kt)("mermaid",{value:"graph TB\n    A((3))--\x3eB((9))\n    A--\x3eC((20))\n    C--\x3eD((15))\n    C--\x3eE((7))"}),(0,a.kt)("p",null,"\u904d\u6b77\u7684\u9806\u5e8f\u6703\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"3 > 9 > 20 > 15 > 7"),"\u3002"),(0,a.kt)("p",null,"\u7528 javascript \u4f86\u5be6\u4f5c Level Order Traversal\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u521d\u6b65\u60f3\u6cd5\uff1a\n1. \u7528\u4e00\u500b array \u7576\u4f5c waiting list\uff0c\u8868\u793a\u8655\u7406\u7bc0\u9ede\u7684\u9806\u5e8f\uff0c\u8981\u8a18\u5f97\u7bc0\u9ede\u548c\u7bc0\u9ede\u7684\u968e\u5c64\u3002\n2. \u7528\u53e6\u5916\u4e00\u500b array \u4f86\u5b58\u8655\u7406\u597d\u7684\u7bc0\u9ede\u3002\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\n\nvar levelOrder = function(root) {\n    if (root === null || root.length === 0) {\n        return [];\n    }\n\n    const result = [];\n    const waitingList = [ { level: 0, node: root } ];\n\n    while (waitingList.length > 0) {\n        // \u8655\u7406 waiting list \u7576\u524d\u7684\u7bc0\u9ede\n        const currentNode = waitingList.shift();\n        const { level, node } = currentNode;\n        if (!result[level]) {\n            result[level] = [node.val];\n        } else {\n            result[level].push(node.val);\n        }\n\n        // \u5c07\u7576\u524d\u7bc0\u9ede\u7684\u5b50\u7bc0\u9ede\u52a0\u5165 waiting list\n        if (node.left) {\n            waitingList.push({ level: level + 1, node: node.left });\n        }       \n        if (node.right) {\n            waitingList.push({ level: level + 1, node: node.right });\n        }\n    }\n\n    return result;\n};\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u905e\u8ff4"),"\u4f86\u5be6\u4f5c\u8d70\u8a2a\u4e8c\u5143\u6a39\u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"DFS\uff08\u6df1\u5ea6\u512a\u5148\u641c\u5c0b\u6f14\u7b97\u6cd5\uff09"),"\u3002\u4f46\u6211\u9084\u4e0d\u6703 DFS...")),(0,a.kt)("h2",{id:"-\u5b78\u7fd2\u8cc7\u6e90"},"\ud83d\udc33 \u5b78\u7fd2\u8cc7\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/explore/learn/card/data-structure-tree/"},"https://leetcode.com/explore/learn/card/data-structure-tree/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/@Aquamay/HyCgHXfid"},"\u4e8c\u5143\u6a39(Binary Tree)")," by Aquamay"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://alrightchiu.github.io/SecondRound/binary-tree-traversalxun-fang.html"},"Binary Tree: Traversal(\u5c0b\u8a2a)")," by Chiu CC")))}p.isMDXComponent=!0}}]);