---
title: 通過 OAuth 使用 Gmail 和 git send-email 設置指南
date: 2025-04-03
---

## :whale: 背景
Gmail 已不再支持使用普通的 SMTP 用戶名和密碼 (smtpUser/smtpPass) 進行認證，必須使用 OAuth 2.0 來授權第三方應用程序訪問 Gmail。

## :whale: 設置步驟

### 1. 安裝 Go 語言環境
```bash
# 下載並解壓 Go 到 /usr/local
sudo tar -C /usr/local -xzf go1.x.x.linux-amd64.tar.gz

# 設置環境變量 (添加到 ~/.bashrc 或 ~/.zshrc)
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin

# 應用環境變量
source ~/.bashrc  # 或 source ~/.zshrc

# 驗證安裝
go version
```

### 2. 在 Google Cloud 創建 OAuth 憑證
1. 訪問 Google Cloud Console
2. 創建新項目
3. 配置 OAuth 同意畫面
4. 添加測試用戶 (您的 Gmail 地址)
5. 添加 `https://mail.google.com/` 作為範圍 (在 "API & Services" > "OAuth consent screen" > "Add or Remove Scopes")
6. 創建 OAuth 憑證並下載 JSON 文件

### 3. 設置憑證文件
```bash
# 創建配置目錄並設置權限
mkdir -p ${XDG_CONFIG_HOME:-${HOME}/.config}/sendgmail
chmod 0700 ${XDG_CONFIG_HOME:-${HOME}/.config}/sendgmail

# 移動並重命名憑證文件
mv 下載的憑證.json ${XDG_CONFIG_HOME:-${HOME}/.config}/sendgmail/config.json

# 設置文件權限
chmod 0600 ${XDG_CONFIG_HOME:-${HOME}/.config}/sendgmail/config.json
```

### 4. 安裝 sendgmail 工具
```bash
go install github.com/google/gmail-oauth2-tools/go/sendgmail@latest
```

### 5. 設置 sendgmail
```bash
# 使用完整路徑
$GOPATH/bin/sendgmail -sender=您的郵箱@gmail.com -setup

# 或者如果 $GOPATH/bin 已在 PATH 中
sendgmail -sender=您的郵箱@gmail.com -setup
```

### 6. 配置 git send-email 使用 sendgmail
在 `.gitconfig` 文件中添加：
```
[sendemail]
  smtpserver = /home/您的用戶名/go/bin/sendgmail
  smtpserveroption = -sender=您的郵箱@gmail.com
```

## :whale: 注意事項
- 您需要定期刷新 OAuth 令牌（通常 sendgmail 會自動處理）
- 如果遇到驗證問題，可能需要重新運行 sendgmail 設置步驟
- 確保將 OAuth 憑證文件保存在安全位置，並使用正確的權限保護

## :whale: 參考資料

- https://github.com/google/gmail-oauth2-tools/tree/master/go/sendgmail