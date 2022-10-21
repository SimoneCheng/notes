---
title: 在 Ubuntu 安裝 MySQL
date: 2022-09-22
---

最近剛初學資料庫，在本地安裝 MySQL 的時候遇到太多坑了，所以紀錄一下安裝的方式。 💦

## 🐳 安裝環境

作業系統：linux Ubuntu 22.04

對滴沒綽，是在 linux 環境下安裝 MySQL 時遇到的坑們。

## 🐳 安裝 MySQL

在 linux 環境下安裝 MySQL 還蠻容易的，只要在終端機輸入：

```shell
$ sudo apt install mysql-server
```

等它安裝好之後，本地端就有資料庫了。但除了安裝資料庫之外，還需要針對剛裝好的資料庫做一些基本的設定。最基本的設定就是設定資料庫的密碼，畢竟資料庫裡面可能都會存放重要的資料，不能讓任何人都有權限可以進入。

通常搜尋網路上的 MySQL 安裝教學，會看到要使用下面的指令來設定密碼強度和密碼：

```shell
$ sudo mysql_secure_installation
```

如果上述的指令沒問題的話就可以順順地設定好密碼，再用密碼登入 MySQL 就可以了。但是在下了這個指令之後，我的電腦卻出現了下面的錯誤訊息，無法使用這個指令來設定密碼。

```shell
Output
 ... Failed! Error: SET PASSWORD has no significance for user 'root'@'localhost' as the authentication method used doesn't store authentication data in the MySQL server. Please consider using ALTER USER instead if you want to change authentication parameters
```

這個時候需要改用另外一個方法來設定密碼：

1. 首先先進到 MySQL
```shell
$ sudo mysql
```
2. 進到 MySQL 之後，先將密碼預設成 password
```shell
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
3. 離開 MySQL
```shell
mysql> exit
```
4. 開始密碼設定流程，密碼強度要符合選擇的才能設定
```shell
$ sudo mysql_secure_installation
```
5. 密碼設定完成之後，就可以用以下指令進入 MySQL
```shell
$ mysql -u root -p
```

## 🐳 安裝 MySQL Workbench

MySQL Workbench 是一個官方提供的管理資料庫的 GUI 工具，在安裝這個工具的時候，也有遇到一些錯誤。

我最一開始安裝 MySQL Workbench 方式是透過 linux 的一個新的套件管理工具 snap 去安裝：
```shell
$ sudo snap install mysql-workbench-community
```

但安裝完之後，無法輸入密碼，就沒有辦法連到資料庫，所以有裝等於跟沒裝一樣。後來上網一查發現應該是 snap 和 apt 的底層運作原理不同，至於底層是如何運作的，這部分我就不太知道了。

於是把用 snap 安裝的 MySQL Workbench 砍了，改成用 apt 來安裝：
1. 先去[官方網站](https://dev.mysql.com/downloads/workbench/)下載安裝包
2. 在終端輸入以下指令：
```shell
$ cd ~/Downloads #中文的話是下載
$ sudo apt-get install ./mysql-workbench-community_8.0.20-1ubuntu20.04_amd64.deb #記得改成相對應的檔名
```
3. 安裝完成後啟動 MySQL Workbench，應該就可以輸入密碼連上資料庫了！

## 🐳 參考資料

- [How To Install MySQL on Ubuntu 20.04 - DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)
- [Cannot connect MySQL Workbench to MySQL server - askubuntu](https://askubuntu.com/questions/1242026/cannot-connect-mysql-workbench-to-mysql-server)
