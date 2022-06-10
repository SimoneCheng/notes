# Git

2022/06/10

- [Git](#git)
  - [:whale: 前言](#whale-前言)
  - [:whale: Git Local 基本原理解析](#whale-git-local-基本原理解析)
    - [:crab: Git 的設定（git config）](#crab-git-的設定git-config)
    - [:crab: 初始化代碼倉庫](#crab-初始化代碼倉庫)
    - [:crab: git add [file] 背後發生了什麼](#crab-git-add-file-背後發生了什麼)
    - [:crab: blob 對象與 SHA1 哈希](#crab-blob-對象與-sha1-哈希)
    - [:crab: Working Directiry 和 Staging Area](#crab-working-directiry-和-staging-area)
  - [:whale: Branch（分支） 和 HEAD](#whale-branch分支-和-head)
  - [:whale: 分支合併（Branch Merge）](#whale-分支合併branch-merge)

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

!> git repository 會優先採用 local config 的設定，再使用 global config 的設定。

### :crab: 初始化代碼倉庫
建立一個 git repository 主要有兩種方法：
- git clone 遠端的倉庫
- 建立本地倉庫，再使用 git init

透過這兩種方式都可以發現 git repository 裡面出現了一個 **.git** 的資料夾，可以在終端機裡面透過 `ls -a` 這個指令看到這個資料夾，透過觀察這個資料夾的變化，可以很好地理解 git 是如何運作的。

首先先在這邊放上一個最基本的 .git 資料夾的架構，接下來會透過這個資料夾的變動來一一理解 git 如何運作。
```
.git
├── branches
├── config
├── description
├── HEAD
├── hooks
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```

### :crab: git add [file] 背後發生了什麼
當建立一個檔案，並將其透過 `git add [檔名]` 加入 tracked file 的時候，可以發現 .git 資料夾發生了變化，我們假設目前的變化如下：
```
.git
├── branches
├── config
├── description
├── HEAD
├── hooks
├── info
│   └── exclude
├── index // 多了這個
├── objects
|   ├── 54 // 多了這個
│   │   └── 7fe984c2f69bd68e98fca67f99a5c14d1435aa // 多了這個
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```

可以發現 .git 裡面的 objects 資料夾中多了另外一串奇怪的數字，這一串數字是透過稱為 SHA1 的加密算法算出來的，如果要查看任何有關 objects 資料夾當中的東西的話，可以在終端機當中輸入以下指令：
```
git cat-file -t 547fe9 // 只取前六位即可
git cat-file -p 547fe9

-t: 查看該檔案的類型
-p: 查看該檔案的內容
-s: 查看該檔案的大小
```

在終端機下了上述這兩個指令之後，可以發現透過 `git add [file]` 之後，產生的 object 類型是　blob 而裡面的內容則是檔案裡面的文字內容，另外一個很重要的是，我們發現到這個 object 並沒有儲存檔名。（檔名會存在另外一個地方）

### :crab: blob 對象與 SHA1 哈希

- HASH 算法：將任意長度的輸入透過 HASH 算法變換成固定長度的輸出，常常被用來做加密。
- 常見的 HASH 算法，括號當中的 bit 表示會輸出多少 bit 的字串：
  - MD5 (128 bit) （已被破解）
  - SHA1 (160 bit) （已被破解）
  - SHA256 (256 bit) 
  - SHA512 (512 bit)

`git add [file]` 之後， git 會根據檔案的類型、大小、修改的內容來產生 HASH 值，然後存到 .git/objects 當中，同時也會壓縮內容。目前 git 算出 HASH 值的方式都是用 SHA1 算法。

### :crab: Working Directiry 和 Staging Area


## :whale: Branch（分支） 和 HEAD

## :whale: 分支合併（Branch Merge）

