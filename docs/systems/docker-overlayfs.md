---
title: 透過 Docker Image 理解 OverlayFS
date: 2024-11-19 13:33:00
---

在日常的開發或是部署當中，我們很常使用 Docker 來免去環境設定還有跨平台的困擾，那你有沒有好奇過：如果我們的電腦裡面有很多 Docker Image，會不會佔用很多電腦的硬碟空間嗎？Docker 是如何儲存這些 Image 的？

## :whale: Dockerfile 與 Image Layer 實現原理

日常開發中，經常會看到這樣的 Dockerfile：

```dockerfile
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y nginx
COPY ./app /app
CMD ["nginx", "-g", "daemon off;"]
```

當我們執行 `docker build` 的時候，每個指令都會產生一個新的 layer：

```bash
[+] Building 33.8s (8/8) FINISHED
=> [internal] load build definition from Dockerfile
=> => transferring dockerfile: 172B
=> [internal] load metadata for docker.io/library/ubuntu:20.04
=> [1/3] FROM docker.io/library/ubuntu:20.04
=> [2/3] RUN apt-get update && apt-get install -y nginx
=> [3/3] COPY ./app /var/www/html
=> exporting to image
=> => writing image sha256:5d8f96da221d162a0937f2241bd9236e7dfc90872cda77498c467369fc885b6
```

可以使用 `docker history` 來查看這些 layer 的組成：

```bash
IMAGE          CREATED          CREATED BY                                    SIZE      COMMENT
5d8f96da221d   47 seconds ago   CMD ["nginx" "-g" "daemon off;"]              0B        buildkit.dockerfile.v0
<missing>      47 seconds ago   COPY ./app /var/www/html # buildkit           27B       buildkit.dockerfile.v0
<missing>      47 seconds ago   RUN /bin/sh -c apt-get update && apt-get...   114MB     buildkit.dockerfile.v0
<missing>      5 weeks ago      /bin/sh -c #(nop) CMD ["bash"]                0B
<missing>      5 weeks ago      /bin/sh -c #(nop) ADD file:74861...           72.8MB
```

你有沒有好奇過，為什麼每個指令都會產生一個新的層？這些層是如何組合在一起的？更重要的是，為什麼我們在容器裡修改檔案時，不會影響到原本的映像檔？
每個 Docker Image 都是由多個層堆疊而成的。以上面的例子來說：

- 最底層是 Ubuntu 20.04 的基礎映像檔（72.8MB），包含了基本的作業系統檔案
- 接著是執行 apt-get install nginx 產生的層（114MB），包含了 nginx 相關的檔案
- 然後是 COPY 指令產生的層（27B），包含了我們的應用程式檔案
- 最後是 CMD 指令產生的層（0B），只包含了啟動指令的設定

這種分層設計帶來了很多好處：

- 空間利用率：多個容器可以共享相同的基礎層。想像一下，如果有 10 個專案都是基於 Ubuntu 20.04，這些專案的容器就可以共用同一個基礎映像層，而不是每個專案都儲存一份完整的作業系統檔案。
- 建構效率：Docker 會快取每一層。如果只是修改了應用程式的程式碼，重新建構時只需要從 COPY 指令開始，前面的層都可以直接複用。這大幅減少了開發過程中的等待時間。

當我們執行 `docker run` 啟動容器時，Docker 會在最上層添加一個可寫入的容器層。這就是為什麼我們可以在容器內新增或修改檔案，但這些變更不會影響到原本的映像檔。讓我們實際試試：

```bash
docker run -it ubuntu:20.04 bash
root@container:/# touch newfile
root@container:/# echo "hello" > /etc/motd
```

這些修改只會寫入到容器層，而且當容器被刪除時，這些變更也會跟著消失。如果你希望保存這些變更，就需要使用 `docker commit` 將容器的當前狀態儲存為新的映像檔。

但這樣的分層機制是如何實現的呢？這就要談到 Linux 核心中的 OverlayFS 了。它不只是一個簡單的檔案系統，而是專門設計用來處理多層檔案系統疊加的解決方案。

## :whale: 從 UnionFS 到 OverlayFS 的演進

## :whale: OverlayFS 核心機制實作解析

## :whale: OverlayFS 在實務上的其他應用

## :whale: Resource

- [OverlayFS storage driver | Docker Docs](https://docs.docker.com/engine/storage/drivers/overlayfs-driver/)
- [Overlay Filesystem — The Linux Kernel  documentation](https://docs.kernel.org/filesystems/overlayfs.html)
- [Overlay filesystem - ArchWiki](https://wiki.archlinux.org/title/Overlay_filesystem)
- [OverlayFS and its use in Yocto Project - Vyacheslav Yurkov, Precitec GmbH & Co. KG](https://www.youtube.com/watch?v=03sOH9GaKO4)
