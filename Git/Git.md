# Git

2022/06/10

- [Git](#git)
  - [:whale: 前言](#whale-前言)
  - [:whale: Git Local 基本原理解析](#whale-git-local-基本原理解析)
    - [:crab: Git 的設定（git config）](#crab-git-的設定git-config)
    - [:crab: 初始化代碼倉庫](#crab-初始化代碼倉庫)
  - [:whale: 分支開發與合併（Branch Merge）](#whale-分支開發與合併branch-merge)

## :whale: 前言
因為在工作上大量的用到 git 這個版控工具，所以想好好了解自己每個用到的指令背後實際上發生了什麼事，上了一堂 udemy 的課，寫了一些小筆記。  
筆記來源大部分參考自：https://www.udemy.com/course/git-basic/

## :whale: Git Local 基本原理解析

### :crab: Git 的設定（git config）
通常在看各式各樣的 git 教學的時候，會看到當使用者下載好 git 之後，教學的下一個步驟是在終端機打入以下指令：
```git
git config --global user.email "[your email]"
git config --global user.name "[your name]"
```

這兩行的意思其實會在根目錄建立一個 global 的 git 設定檔（檔名是 .gitconfig），而且這個設定檔會自動帶入到每一個 git repository。除了這個 global 的 git 設定檔之外，每一個 git repository 裡面都有自己的 git 設定檔，可以進到該 repo 透過 `git config --list` 指令查看。

除了設定使用者之外，git config 其實還可以做非常多其他的設定，來達到 git 的客製化。

### :crab: 初始化代碼倉庫
建立一個 git repository 主要有兩種方法：
- git clone 遠端的倉庫
- 建立本地倉庫，再使用 git init

透過這兩種方式都可以發現 git repository 裡面出現了一個 **.git** 的資料夾，可以在終端機裡面透過 `ls -a` 這個指令看到這個資料夾，觀察這個資料夾的變化，可以很好地理解 git 是如何運作的

## :whale: 分支開發與合併（Branch Merge）

