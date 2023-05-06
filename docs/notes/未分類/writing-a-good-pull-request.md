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

1. 手動測試：在發出 pull request 之前，先自己手動測試修改的地方有沒有問題，例如新功能有沒有問題、用 edge case 來測試自己修改的地方有沒有問題。
2. 自動化測試：如果是新功能的 pull request，且在時程上有時間的話，可以增加自動化測試，確保自己寫出來的 code 是安全的，有了自動化測試，對於未來的重構也會很有幫助。
3. 視情況在 pull request 的 description 說明測試結果，或是有什麼 edge case 需要 reviewer 注意等等。

### 🦀 Make a Clear Description

在 pull request 的 description 中，盡量對以下幾點做清楚的描述，讓 reviewer 更清楚地了解你寫的 pull request 在做什麼：

1. 描述這個 pull request 解決了什麼問題，同時附上 issue 的連結
2. 如果有決定採取什麼 design pattern 或是一些迫不得已的 walkaround 的話，也可以在 decription 說明
3. 測試相關的說明，可以參考上述 Test 提到的第三點。

### 🦀 Add possible risks and highlight risky code

如果在發 pull request 之後，有一些不太確定的地方，比如說不確定某段修改的 code 改得好不好，會不會有什麼問題（例如：效能、資安、edge case 等問題）。可以在 pull request 發出之後，特別在該段 code 留個言，請 reviewer 特別注意或是協助你改善 code。

### 🦀 Rebase Onto Fresh Master Before Creating a PR

在正式 merge 之前，可以先將自己開發的分支 rebase 到 target branch，確保自己的分支一直有在跟 target branch 做同步和更新，這樣可以減少 merge 的衝突，如果 target branch 有什麼新的功能或是 function 也可以在自己的分支使用。

### 🦀 不要修改已經 review 過的 commit

如果某些 commits 已經被 review 過的話，就不要再去動它了，不要去修改 commit message 或是 squash 等等。如果有收到 review 需要修改的話，請直接寫一個新的 commit。

因為如果把舊的改掉的話，reviewer 可能會不知道他已經 review 過舊的部分，又再多看一次，降低了雙方的效率。

### 🦀 快速地回覆 review

reviewer 看完你的 pull request 之後，可以快速地針對 reviewer 的回饋進行修改，一來自己寫 code 的邏輯和想法都還記得，二來 reviewer 也還對 review 的記憶比較深刻。不要過了太久才進行修改，不然雙方都很容易忘記。

### 🦀 發 pull request 前先跟同事溝通

在開始實作之前，可以先將同事討論如何實作，用什麼樣的方法，如何拆分 pull request 等等，也許你的同事可以給你更多不一樣的實作想法。事先討論也可以避免下面的情況：也許你想實作的東西不一定需要修改，可以先和同事確認，避免改了之後，其實不需要改的做白工狀況發生。

:::tip
可以參考 google 的 [Google Engineering Practices Documentation](https://google.github.io/eng-practices/)，看看 google 是如何訂定 pull request author 和 pull request reviewer guide。
:::

## 🐳 Resource

- [Google Engineering Practices Documentation](https://google.github.io/eng-practices/)
- [Writing a Good Pull Request, Blockly, developers Google](https://developers.google.com/blockly/guides/contribute/get-started/write_a_good_pr)
- [How to Make a Perfect Pull Request, Anton Chuchkalov, Medium](https://betterprogramming.pub/how-to-make-a-perfect-pull-request-3578fb4c112)
- [How To Write The PERFECT Pull Request, Software Surplus, Medium](https://levelup.gitconnected.com/how-to-write-the-perfect-pull-request-d044625ace98)
