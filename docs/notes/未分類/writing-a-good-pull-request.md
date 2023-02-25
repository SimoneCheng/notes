---
title: Writing a Good Pull Request
date: 2023-02-22
---

## 🐳 前情提要

會想要寫一篇「如何寫好的 pull request」相關的文章，是因為在實作一個大功能的重構時，發了一個龐大的 pull request，把要重構的項目一次修改掉。但這個 pull request 是一個不太好的 pull request：

> 1. 一次 pull request 修改改太多（高達兩千行），reviewer 會看了很痛苦。
> 2. 馬上把新的程式碼改掉，舊的程式碼也刪掉之後，沒有辦法確保原本的功能也能照之前的一樣正常運作，因為目前該功能缺少測試。

所以希望透過搜尋相關的資料，讓自己的 pull request 可以寫得好一點。讓 reviewer 可以輕鬆寫意的看懂，功能可以順利上線。

## 🐳 好的 pull request 有哪些特質

一個好的 pull request 通常具有以下的特質：

**「一，可以得到清楚的回饋或修改建議」**

如果一個 pull request 得到清楚明瞭的回饋或是修改建議，不代表這個 pull request 是不好的，而是表示它讓 reviewer 好閱讀，進而提出具體和清楚的修改建議，

**「二，可以很快速地被 review」**

如果一個 pull request 可以很快速地被 review，那就表示 reviewer 會更願意 review 該 pull request，因為比較不會打斷 reviewr 本來的工作安排。

**「三，reviewer 不會問太多關於這個 pull request 的問題」**

如果你的 pull request 發出去後，reviewer 對這個 pull request 問了很多 How 和 Why 的問題，那可能表示這不是一個好的 pull request，因為 reviewer 可能看不太懂為什麼要發 pull request，或是該 pull request 究竟如何解決了問題。一個好的 pull request 應該要能夠很好地對上述兩個疑問解惑。

## 🐳 如何寫出好的 pull request

下面來一一列出如何寫出好的 pull request的具體方法。

### 🦀 遵守團隊訂定的 coding style 規範

這是一定要的，每次發出 pull request 之前，可以先自己檢查寫的 code 有沒有符合團隊的 coding 規範。

### 🦀 Make Pull Request Small

一個 pull request 裡面修改的 code 不要太多（個人認為最少最少要控制在 800 行內）。

因為：
1. reviewer 可以更完整地 review pull request
2. reviewer 可以更快地 review pull request
3. 比較容易 merge 進 master
4. 被退件的時候，不會做太多白工

具體做法：
1. 一個 pull request 解決一個問題，將 code 的修改範圍對焦在一個 issue，不要一個 pull request 裡面試圖解決多個 issue。如果一個 issue 要改的 code 還是太多，那表示這個 issue 的 scope 太大了，應該要把 issue 拆得更小。
2. 把 refactor 拆成一步一步不同的 pull request，不要一次改一堆。
3. 善用 `git add --patch` 和 `git rebase --interactive`。
4. 如果是在一個要長期進行的 feature branch 的話，可以將該 branch 設為你的 pull request target branch 而不是 master branch。

### 🦀 Use Commits

commit 寫個好的話，reviewer 也可以更容易看懂該次 commit 做了哪些 code 的修改。可以在 google 搜尋「commit convention」來了解如何好的運用 commit。

### 🦀 Test

### 🦀 Make a Clear Description

### 🦀 Add possible risks and highlight risky code

### 🦀 Rebase Onto Fresh Master Before Creating a PR

### 🦀 Don’t Amend Already Reviewed Commits — Send New Ones

### 🦀 Respond to Reviews Quickly

### 🦀 發 pull request 前先跟同事溝通

:::tip
可以參考 google 的 [Google Engineering Practices Documentation](https://google.github.io/eng-practices/)，看看 google 是如何訂定 pull request author 和 pull request reviewer guide。
:::

## 🐳 Resource

- [Google Engineering Practices Documentation](https://google.github.io/eng-practices/)
- [Writing a Good Pull Request, Blockly, developers Google](https://developers.google.com/blockly/guides/contribute/get-started/write_a_good_pr)
- [How to Make a Perfect Pull Request, Anton Chuchkalov, Medium](https://betterprogramming.pub/how-to-make-a-perfect-pull-request-3578fb4c112)
- [How To Write The PERFECT Pull Request, Software Surplus, Medium](https://levelup.gitconnected.com/how-to-write-the-perfect-pull-request-d044625ace98)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)