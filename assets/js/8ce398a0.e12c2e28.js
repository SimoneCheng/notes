"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[691],{3905:(t,e,i)=>{i.d(e,{Zo:()=>g,kt:()=>d});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function o(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var m=n.createContext({}),c=function(t){var e=n.useContext(m),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},g=function(t){var e=c(t.components);return n.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,m=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),s=c(i),d=a,u=s["".concat(m,".").concat(d)]||s[d]||p[d]||r;return i?n.createElement(u,l(l({ref:e},g),{},{components:i})):n.createElement(u,l({ref:e},g))}));function d(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,l=new Array(r);l[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},5628:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const r={title:"Git Basic - \u5206\u652f\u8207\u5206\u652f\u5408\u4f75",date:new Date("2022-06-10T00:00:00.000Z")},l=void 0,o={unversionedId:"notes/Git/git-basic-1",id:"notes/Git/git-basic-1",title:"Git Basic - \u5206\u652f\u8207\u5206\u652f\u5408\u4f75",description:"\ud83d\udc33 \u524d\u8a00",source:"@site/docs/notes/Git/git-basic-1.md",sourceDirName:"notes/Git",slug:"/notes/Git/git-basic-1",permalink:"/notes/docs/notes/Git/git-basic-1",draft:!1,editUrl:"https://github.com/SimoneCheng/notes/tree/main/docs/notes/Git/git-basic-1.md",tags:[],version:"current",lastUpdatedBy:"SimoneCheng",lastUpdatedAt:1673100838,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{title:"Git Basic - \u5206\u652f\u8207\u5206\u652f\u5408\u4f75",date:"2022-06-10T00:00:00.000Z"},sidebar:"notes",previous:{title:"Priority Queue",permalink:"/notes/docs/notes/Data Structure/priority-queue"},next:{title:"metadata\u3001<meta> \u77e5\u591a\u5c11",permalink:"/notes/docs/notes/HTML/metadata"}},m={},c=[{value:"\ud83d\udc33 \u524d\u8a00",id:"-\u524d\u8a00",level:2},{value:"\ud83d\udc33 Git Local \u57fa\u672c\u539f\u7406\u89e3\u6790",id:"-git-local-\u57fa\u672c\u539f\u7406\u89e3\u6790",level:2},{value:"\ud83e\udd80 Git \u7684\u8a2d\u5b9a",id:"-git-\u7684\u8a2d\u5b9a",level:3},{value:"\ud83e\udd80 \u521d\u59cb\u5316\u4ee3\u78bc\u5009\u5eab",id:"-\u521d\u59cb\u5316\u4ee3\u78bc\u5009\u5eab",level:3},{value:"\ud83e\udd80 git add file \u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc",id:"-git-add-file-\u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc",level:3},{value:"\ud83e\udd80 blob \u5c0d\u8c61\u8207 SHA1 \u54c8\u5e0c",id:"-blob-\u5c0d\u8c61\u8207-sha1-\u54c8\u5e0c",level:3},{value:"\ud83e\udd80 Working Directory \u548c Staging Area",id:"-working-directory-\u548c-staging-area",level:3},{value:"\ud83e\udd80 git commit \u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc",id:"-git-commit-\u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc",level:3},{value:"\ud83e\udd80 Commit History Tree",id:"-commit-history-tree",level:3},{value:"\ud83d\udc33 Branch \u548c HEAD",id:"-branch-\u548c-head",level:2},{value:"\ud83e\udd80 \u4ec0\u9ebc\u662f\u5206\u652f\uff1f\u4ec0\u9ebc\u662fHEAD\uff1f",id:"-\u4ec0\u9ebc\u662f\u5206\u652f\u4ec0\u9ebc\u662fhead",level:3},{value:"\ud83e\udd80 \u5206\u652f\u7684\u57fa\u672c\u64cd\u4f5c",id:"-\u5206\u652f\u7684\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\ud83e\udd80 \u4f7f\u7528 git checkout \u51fa\u7279\u5b9a\u7684 commit",id:"-\u4f7f\u7528-git-checkout-\u51fa\u7279\u5b9a\u7684-commit",level:3},{value:"\ud83e\udd80 \u95dc\u65bc git diff \u9019\u500b\u547d\u4ee4",id:"-\u95dc\u65bc-git-diff-\u9019\u500b\u547d\u4ee4",level:3},{value:"\ud83d\udc33 \u5206\u652f\u5408\u4f75\uff08Branch Merge\uff09",id:"-\u5206\u652f\u5408\u4f75branch-merge",level:2},{value:"\ud83e\udd80 Fast Forward Merge",id:"-fast-forward-merge",level:3},{value:"\ud83e\udd80 3 Way Merge",id:"-3-way-merge",level:3},{value:"\ud83e\udd80 3 Way Merge with Conflict",id:"-3-way-merge-with-conflict",level:3},{value:"\ud83e\udd80 git rebase \u662f\u4ec0\u9ebc\uff1f",id:"-git-rebase-\u662f\u4ec0\u9ebc",level:3},{value:"\ud83d\udc33 \u53c3\u8003\u8cc7\u6599",id:"-\u53c3\u8003\u8cc7\u6599",level:2}],g={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-\u524d\u8a00"},"\ud83d\udc33 \u524d\u8a00"),(0,a.kt)("p",null,"\u56e0\u70ba\u5728\u5de5\u4f5c\u4e0a\u5927\u91cf\u7684\u7528\u5230 git \u9019\u500b\u7248\u63a7\u5de5\u5177\uff0c\u6240\u4ee5\u60f3\u597d\u597d\u4e86\u89e3\u81ea\u5df1\u6bcf\u500b\u7528\u5230\u7684\u6307\u4ee4\u80cc\u5f8c\u5be6\u969b\u4e0a\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\uff0c\u4e0a\u4e86\u4e00\u5802 udemy \u7684\u8ab2\uff0c\u5beb\u4e86\u4e00\u4e9b\u5c0f\u7b46\u8a18\u3002"),(0,a.kt)("p",null,"\u7b46\u8a18\u4f86\u6e90\u5927\u90e8\u5206\u53c3\u8003\u81ea\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.udemy.com/course/git-basic/"},"https://www.udemy.com/course/git-basic/")),(0,a.kt)("h2",{id:"-git-local-\u57fa\u672c\u539f\u7406\u89e3\u6790"},"\ud83d\udc33 Git Local \u57fa\u672c\u539f\u7406\u89e3\u6790"),(0,a.kt)("h3",{id:"-git-\u7684\u8a2d\u5b9a"},"\ud83e\udd80 Git \u7684\u8a2d\u5b9a"),(0,a.kt)("p",null,"\u901a\u5e38\u5728\u770b\u5404\u5f0f\u5404\u6a23\u7684 git \u6559\u5b78\u7684\u6642\u5019\uff0c\u6703\u770b\u5230\u7576\u4f7f\u7528\u8005\u4e0b\u8f09\u597d git \u4e4b\u5f8c\uff0c\u6559\u5b78\u7684\u4e0b\u4e00\u500b\u6b65\u9a5f\u662f\u5728\u7d42\u7aef\u6a5f\u6253\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},'git config --global user.email "[your email]"\ngit config --global user.name "[your name]"\n')),(0,a.kt)("p",null,"\u9019\u5169\u884c\u7684\u610f\u601d\u5176\u5be6\u6703\u5728\u6839\u76ee\u9304\u5efa\u7acb\u4e00\u500b global \u7684 git \u8a2d\u5b9a\u6a94\uff08\u6a94\u540d\u662f .gitconfig\uff09\uff0c\u800c\u4e14\u9019\u500b\u8a2d\u5b9a\u6a94\u6703\u81ea\u52d5\u5e36\u5165\u5230\u6bcf\u4e00\u500b git repository\u3002\u9664\u4e86\u9019\u500b global \u7684 git \u8a2d\u5b9a\u6a94\u4e4b\u5916\uff0c\u6bcf\u4e00\u500b git repository \u88e1\u9762\u90fd\u6709\u81ea\u5df1\u7684 git \u8a2d\u5b9a\u6a94\uff0c\u53ef\u4ee5\u9032\u5230\u8a72 repo \u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"git config --list")," \u6307\u4ee4\u67e5\u770b\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u8a2d\u5b9a\u4f7f\u7528\u8005\u4e4b\u5916\uff0cgit config \u5176\u5be6\u9084\u53ef\u4ee5\u505a\u975e\u5e38\u591a\u5176\u4ed6\u7684\u8a2d\u5b9a\uff0c\u4f86\u9054\u5230 git \u7684\u5ba2\u88fd\u5316\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"git repository \u6703\u512a\u5148\u63a1\u7528 local config \u7684\u8a2d\u5b9a\uff0c\u518d\u4f7f\u7528 global config \u7684\u8a2d\u5b9a\u3002")),(0,a.kt)("h3",{id:"-\u521d\u59cb\u5316\u4ee3\u78bc\u5009\u5eab"},"\ud83e\udd80 \u521d\u59cb\u5316\u4ee3\u78bc\u5009\u5eab"),(0,a.kt)("p",null,"\u5efa\u7acb\u4e00\u500b git repository \u4e3b\u8981\u6709\u5169\u7a2e\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"git clone \u9060\u7aef\u7684\u5009\u5eab"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u672c\u5730\u5009\u5eab\uff0c\u518d\u4f7f\u7528 git init")),(0,a.kt)("p",null,"\u900f\u904e\u9019\u5169\u7a2e\u65b9\u5f0f\u90fd\u53ef\u4ee5\u767c\u73fe git repository \u88e1\u9762\u51fa\u73fe\u4e86\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},".git")," \u7684\u8cc7\u6599\u593e\uff0c\u53ef\u4ee5\u5728\u7d42\u7aef\u6a5f\u88e1\u9762\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -a")," \u9019\u500b\u6307\u4ee4\u770b\u5230\u9019\u500b\u8cc7\u6599\u593e\uff0c\u900f\u904e\u89c0\u5bdf\u9019\u500b\u8cc7\u6599\u593e\u7684\u8b8a\u5316\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u7406\u89e3 git \u662f\u5982\u4f55\u904b\u4f5c\u7684\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u5148\u5728\u9019\u908a\u653e\u4e0a\u4e00\u500b\u6700\u57fa\u672c\u7684 .git \u8cc7\u6599\u593e\u7684\u67b6\u69cb\uff0c\u63a5\u4e0b\u4f86\u6703\u900f\u904e\u9019\u500b\u8cc7\u6599\u593e\u7684\u8b8a\u52d5\u4f86\u4e00\u4e00\u7406\u89e3 git \u5982\u4f55\u904b\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},".git\n\u251c\u2500\u2500 branches\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 description\n\u251c\u2500\u2500 HEAD\n\u251c\u2500\u2500 hooks\n\u251c\u2500\u2500 info\n\u2502\xa0\xa0 \u2514\u2500\u2500 exclude\n\u251c\u2500\u2500 objects\n\u2502\xa0\xa0 \u251c\u2500\u2500 info\n\u2502\xa0\xa0 \u2514\u2500\u2500 pack\n\u2514\u2500\u2500 refs\n    \u251c\u2500\u2500 heads\n    \u2514\u2500\u2500 tags\n")),(0,a.kt)("h3",{id:"-git-add-file-\u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc"},"\ud83e\udd80 git add ","[file]"," \u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc"),(0,a.kt)("p",null,"\u7576\u5efa\u7acb\u4e00\u500b\u6a94\u6848\uff0c\u4e26\u5c07\u5176\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"git add [\u6a94\u540d]")," \u52a0\u5165 tracked file \u7684\u6642\u5019\uff0c\u53ef\u4ee5\u767c\u73fe .git \u8cc7\u6599\u593e\u767c\u751f\u4e86\u8b8a\u5316\uff0c\u6211\u5011\u5047\u8a2d\u76ee\u524d\u7684\u8b8a\u5316\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},".git\n\u251c\u2500\u2500 branches\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 description\n\u251c\u2500\u2500 HEAD\n\u251c\u2500\u2500 hooks\n\u251c\u2500\u2500 info\n\u2502\xa0\xa0 \u2514\u2500\u2500 exclude\n\u251c\u2500\u2500 index // \u591a\u4e86\u9019\u500b\n\u251c\u2500\u2500 objects\n|   \u251c\u2500\u2500 54 // \u591a\u4e86\u9019\u500b\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 7fe984c2f69bd68e98fca67f99a5c14d1435aa // \u591a\u4e86\u9019\u500b\n\u2502\xa0\xa0 \u251c\u2500\u2500 info\n\u2502\xa0\xa0 \u2514\u2500\u2500 pack\n\u2514\u2500\u2500 refs\n    \u251c\u2500\u2500 heads\n    \u2514\u2500\u2500 tags\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe .git \u88e1\u9762\u7684 objects \u8cc7\u6599\u593e\u4e2d\u591a\u4e86\u53e6\u5916\u4e00\u4e32\u5947\u602a\u7684\u6578\u5b57\uff0c\u9019\u4e00\u4e32\u6578\u5b57\u662f\u900f\u904e\u7a31\u70ba SHA1 \u7684\u52a0\u5bc6\u7b97\u6cd5\u7b97\u51fa\u4f86\u7684\uff0c\u5982\u679c\u8981\u67e5\u770b\u4efb\u4f55\u6709\u95dc objects \u8cc7\u6599\u593e\u7576\u4e2d\u7684\u6771\u897f\u7684\u8a71\uff0c\u53ef\u4ee5\u5728\u7d42\u7aef\u6a5f\u7576\u4e2d\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},"git cat-file -t 547fe9 // \u53ea\u53d6\u524d\u516d\u4f4d\u5373\u53ef\ngit cat-file -p 547fe9\n\n-t: \u67e5\u770b\u8a72\u6a94\u6848\u7684\u985e\u578b\n-p: \u67e5\u770b\u8a72\u6a94\u6848\u7684\u5167\u5bb9\n-s: \u67e5\u770b\u8a72\u6a94\u6848\u7684\u5927\u5c0f\n")),(0,a.kt)("p",null,"\u5728\u7d42\u7aef\u6a5f\u4e0b\u4e86\u4e0a\u8ff0\u9019\u5169\u500b\u6307\u4ee4\u4e4b\u5f8c\uff0c\u53ef\u4ee5\u767c\u73fe\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"git add [file]")," \u4e4b\u5f8c\uff0c\u7522\u751f\u7684 object \u985e\u578b\u662f\u3000blob \u800c\u88e1\u9762\u7684\u5167\u5bb9\u5247\u662f\u6a94\u6848\u88e1\u9762\u7684\u6587\u5b57\u5167\u5bb9\uff0c\u53e6\u5916\u4e00\u500b\u5f88\u91cd\u8981\u7684\u662f\uff0c\u6211\u5011\u767c\u73fe\u5230\u9019\u500b object \u4e26\u6c92\u6709\u5132\u5b58\u6a94\u540d\u3002\uff08\u6a94\u540d\u6703\u5b58\u5728\u53e6\u5916\u4e00\u500b\u5730\u65b9\uff09"),(0,a.kt)("h3",{id:"-blob-\u5c0d\u8c61\u8207-sha1-\u54c8\u5e0c"},"\ud83e\udd80 blob \u5c0d\u8c61\u8207 SHA1 \u54c8\u5e0c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HASH \u7b97\u6cd5\uff1a\u5c07\u4efb\u610f\u9577\u5ea6\u7684\u8f38\u5165\u900f\u904e HASH \u7b97\u6cd5\u8b8a\u63db\u6210\u56fa\u5b9a\u9577\u5ea6\u7684\u8f38\u51fa\uff0c\u5e38\u5e38\u88ab\u7528\u4f86\u505a\u52a0\u5bc6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u898b\u7684 HASH \u7b97\u6cd5\uff0c\u62ec\u865f\u7576\u4e2d\u7684 bit \u8868\u793a\u6703\u8f38\u51fa\u591a\u5c11 bit \u7684\u5b57\u4e32\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MD5 (128 bit) \uff08\u5df2\u88ab\u7834\u89e3\uff09"),(0,a.kt)("li",{parentName:"ul"},"SHA1 (160 bit) \uff08\u5df2\u88ab\u7834\u89e3\uff09"),(0,a.kt)("li",{parentName:"ul"},"SHA256 (256 bit) "),(0,a.kt)("li",{parentName:"ul"},"SHA512 (512 bit)")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git add [file]")," \u4e4b\u5f8c\uff0c git \u6703\u6839\u64da\u6a94\u6848\u7684\u985e\u578b\u3001\u5927\u5c0f\u3001\u4fee\u6539\u7684\u5167\u5bb9\u4f86\u7522\u751f HASH \u503c\uff0c\u7136\u5f8c\u5b58\u5230 .git/objects \u7576\u4e2d\uff0c\u540c\u6642\u4e5f\u6703\u58d3\u7e2e\u5167\u5bb9\u3002\u76ee\u524d git \u7b97\u51fa HASH \u503c\u7684\u65b9\u5f0f\u90fd\u662f\u7528 SHA1 \u7b97\u6cd5\u3002"),(0,a.kt)("h3",{id:"-working-directory-\u548c-staging-area"},"\ud83e\udd80 Working Directory \u548c Staging Area"),(0,a.kt)("p",null,"git \u7684\u5de5\u4f5c\u5340\u5927\u81f4\u4e0a\u53ef\u4ee5\u5206\u6210\u4e09\u7a2e\u4e0d\u540c\u7684\u985e\u578b\u4f86\u7406\u89e3\uff0c\u5206\u5225\u662f Working Directory\u3001Staging Area\u3001git repository\u3002\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(3228).Z,width:"1000",height:"380"})),(0,a.kt)("p",null,"\u5728\u6a94\u6848\u5c1a\u672a\u88ab git \u8ffd\u8e64\u7684\u6642\u5019\uff0c\u6703\u505c\u7559\u5728 Working Directory\uff0c\u4efb\u4f55\u9700\u8981\u88ab git \u63a7\u7ba1\u7684\u6a94\u6848\u90fd\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git add [file]")," \u9019\u500b\u6307\u4ee4\uff0c\u4f86\u5c07\u6a94\u6848\u52a0\u5165\u5230 Staging Area\uff0c\u6700\u5f8c\u900f\u904e\u64b0\u5beb commit \u5b58\u5230 git repository \u88e1\u9762\u3002"),(0,a.kt)("p",null,"\u5728\u5716\u4e2d\u53ef\u4ee5\u770b\u5230\uff0cStaging Area \u4e0b\u9762\u6709\u4e00\u500b index \u7684\u5b57\u6a23\uff0c\u6c92\u932f\uff0c\u6709\u95dc Staging Area \u7684\u4efb\u4f55\u8a0a\u606f\u90fd\u6703\u88ab\u5132\u5b58\u5728 .git/index \u9019\u500b\u8cc7\u6599\u593e\u7576\u4e2d\u3002\u6211\u5011\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u6307\u4ee4\u53bb\u6aa2\u8996\u76ee\u524d\u5728 index \u7684\u6a94\u6848\u6709\u54ea\u4e9b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git ls-files // \u53ea\u986f\u793a\u6a94\u540d\ngit ls-files -s // \u986f\u793a\u6a94\u540d\u3001\u8a72\u6a94\u6848\u7684\u6b0a\u9650\u3001\u6587\u4ef6\u5167\u5bb9\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\u53ef\u4ee5\u77e5\u9053\uff0c\u524d\u9762\u63d0\u5230\u7684 blob object \u53ea\u5132\u5b58\u6587\u4ef6\u5167\u5bb9\uff0c\u800c\u6587\u4ef6\u7684\u6a94\u540d\u6703\u5132\u5b58\u5728 index\uff08\u7d22\u5f15\u5340\uff09\u3002\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," \u6307\u4ee4\u4f86\u89c0\u5bdf Staging Area \u548c Working Directory \u7684\u8b8a\u5316\u3002")),(0,a.kt)("h3",{id:"-git-commit-\u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc"},"\ud83e\udd80 git commit \u80cc\u5f8c\u767c\u751f\u4e86\u4ec0\u9ebc"),(0,a.kt)("p",null,"\u5c07\u6587\u4ef6\u52a0\u5165\u5230 Staging Area \u4e4b\u5f8c\uff0c\u63a5\u8457\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},'git commit -m "message"')," \u4f86\u751f\u6210 commit\uff0c\u751f\u6210 commit \u7684\u76ee\u7684\u662f\u70ba\u4e86\u5c07\u6709\u4fee\u6539\u7684\u5730\u65b9\u5b58\u5230\u4ee3\u78bc\u5009\u5eab\uff08git repository\uff09\u7576\u4e2d\uff0c\u90a3\u9ebc commit \u5728\u751f\u6210\u7684\u6642\u5019\uff0c\u7a76\u7adf\u662f\u751f\u6210\u4e86\u4ec0\u9ebc\u5462\uff1f"),(0,a.kt)("p",null,"\u751f\u6210\u4e00\u500b commit \u4e4b\u5f8c\uff0cgit \u4e5f\u6703\u900f\u904e SHA1 \u7b97\u6cd5\u70ba\u6bcf\u500b commit \u7b97\u51fa\u4e00\u7d44\u7de8\u78bc\uff0c\u9019\u6642\u5019\u6211\u5011\u4e5f\u53ef\u4ee5\u904b\u7528\u4e0a\u9762\u63d0\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"git cat-file")," \u6307\u4ee4\u53bb\u89c0\u5bdf commit \u7684\u985e\u578b\u548c\u5167\u5bb9\u3002\u900f\u904e\u8a72\u6307\u4ee4\u6211\u5011\u53ef\u4ee5\u77e5\u9053 commit \u7684\u985e\u578b\u662f commit\uff0c\u800c\u5167\u5bb9\u5247\u662f tree \u548c\u4f5c\u8005\u8cc7\u8a0a\uff0c\u5982\u4e0b\u5716\u7bc4\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2537).Z,width:"701",height:"196"})),(0,a.kt)("p",null,"tree \u7576\u4e2d\u6703\u5132\u5b58\u524d\u9762\u63d0\u5230\u7684 blob object\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0ctree \u88e1\u9762\u5b58\u7684\u662f\u76ee\u524d\u9019\u500b commit \u6709\u4fee\u6539\u5230\u7684\u6240\u6709\u6a94\u6848\u3002\u518d\u8005\uff0c\u5982\u679c\u9019\u500b commit \u662f\u63a5\u5728\u53e6\u4e00\u500b commit \u5f8c\u9762\u7684\u8a71\uff0c\u9664\u4e86 tree \u4e4b\u5916\uff0c\u5247\u6703\u984d\u5916\u518d\u591a\u770b\u5230\u4e00\u500b parent\uff0c\u9019\u500b parent \u6a19\u793a\u8457\u9019\u500b commit \u662f\u63a5\u5728\u67d0\u500b\u7279\u5b9a\u7684 commit \u4e4b\u5f8c\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u89c0\u5bdf commit \u672c\u8eab\u4e4b\u5916\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u89c0\u5bdf\u6709 commit \u7684\u5206\u652f\uff0c\u5047\u8a2d\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},"cat .git/refs/heads/master\n")),(0,a.kt)("p",null,"\u5c31\u53ef\u4ee5\u770b\u5230\u9019\u500b master \u7684\u5206\u652f\u6700\u65b0\u7684 commit \u662f\u54ea\u4e00\u500b\u3002"),(0,a.kt)("p",null,"\u53e6\u5916 .git \u7576\u4e2d\u9084\u6709\u4e00\u500b\u8cc7\u6599\u593e\u7a31\u4f5c HEAD\uff0c\u53ef\u4ee5\u5c07 HEAD \u60f3\u50cf\u6210\u4e00\u500b\u6307\u91dd\uff0c\u9019\u500b HEAD \u7684\u7528\u9014\u662f\u7528\u4f86\u6307\u5411\u76ee\u524d\u6240\u5728\u7684\u5206\u652f\u3002\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u6307\u4ee4\u53bb\u67e5\u770b .git/HEAD \u7684\u5167\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},"cat .git/HEAD\n")),(0,a.kt)("h3",{id:"-commit-history-tree"},"\ud83e\udd80 Commit History Tree"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u7684\u5e7e\u500b\u90e8\u4efd\u7576\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u767c\u73fe\u4e0d\u7ba1\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git add")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit -m"),"  git \u90fd\u6703\u900f\u904e SHA1 \u7b97\u6cd5\u4f86\u751f\u6210\u4e00\u500b git object\uff0c\u800c\u9019\u4e9b object \u90fd\u6703\u6307\u5411\u5404\u81ea\u95dc\u806f\u5230\u7684\u53e6\u5916\u4e00\u500b git object\uff0c\u6bd4\u5982\u8aaa\u65b0\u7684 commit \u6703\u6307\u5411\u4e0a\u4e00\u500b commit\uff0c\u4ee5\u6b64\u985e\u63a8\uff0c\u5982\u679c\u6709\u5f88\u591a\u500b commit \u7684\u8a71\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u900f\u904e\u9019\u6a23\u7684\u65b9\u5f0f\u53bb\u77e5\u9053\u6574\u500b commit history\u3002\u800c\u6bcf\u4e00\u500b commit \u6703\u6307\u5411\u8a72 commit \u6709\u4fee\u6539\u5230\u7684\u6a94\u6848\uff08blob object\uff09\uff0c\u900f\u904e\u9019\u500b\u6307\u5411\uff0c\u6211\u5011\u4e5f\u53ef\u4ee5\u77e5\u9053\u6bcf\u4e00\u500b commit \u4fee\u6539\u4e86\u4ec0\u9ebc\u3002"),(0,a.kt)("p",null,"\u9019\u6a23\u5b50\u4e0d\u65b7\u6307\u5411\u7684\u904e\u7a0b\u4fbf\u6703\u5f62\u6210\u4e00\u500b commit history tree\uff08\u5982\u4e0b\u5716\uff09\uff0c\u800c\u6211\u5011\u4e5f\u53ef\u4ee5\u77e5\u9053\uff0c\u9019\u6a23\u7684\u7d50\u69cb\u5c31\u662f git \u7684\u7248\u672c\u6982\u5ff5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7250).Z,width:"800",height:"642"})),(0,a.kt)("h2",{id:"-branch-\u548c-head"},"\ud83d\udc33 Branch \u548c HEAD"),(0,a.kt)("h3",{id:"-\u4ec0\u9ebc\u662f\u5206\u652f\u4ec0\u9ebc\u662fhead"},"\ud83e\udd80 \u4ec0\u9ebc\u662f\u5206\u652f\uff1f\u4ec0\u9ebc\u662fHEAD\uff1f"),(0,a.kt)("p",null,"\u5728\u6574\u500b git \u7248\u672c\u63a7\u5236\u7684\u5de5\u4f5c\u6d41\u7a0b\u7576\u4e2d\u6709\u4e00\u500b\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5c31\u662f\u5206\u652f\uff0c\u5728\u7a0b\u5f0f\u958b\u767c\u7684\u6d41\u7a0b\u7576\u4e2d\u6703\u4e0d\u65b7\u9047\u5230\u5efa\u7acb\u5206\u652f\u3001\u5408\u4f75\u5206\u652f\u7684\u904e\u7a0b\uff0c\u5728\u958b\u59cb\u8b1b\u89e3\u57fa\u672c\u64cd\u4f5c\u4e4b\u524d\uff0c\u5148\u4f86\u89e3\u91cb\u4e00\u4e0b\u5230\u5e95\u4ec0\u9ebc\u662f\u5206\u652f\uff1f"),(0,a.kt)("p",null,"\u7ffb\u7ffb git \u7684\u5b98\u65b9\u6587\u4ef6\u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u770b\u5230 git \u5c0d\u5206\u652f\u7684\u89e3\u91cb\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Branches are named pointers to commits.")),(0,a.kt)("p",null,"\u5f9e\u4ee5\u4e0a\u6558\u8ff0\u53ef\u4ee5\u77e5\u9053\uff0c\u5206\u652f\u53ea\u662f\u4e00\u500b\u6307\u5411\u67d0\u500b commit \u7684\u6307\u91dd\u3002\u6b64\u6642\u6211\u5011\u5c31\u6703\u77e5\u9053\u5982\u679c\u8981\u8b93\u5206\u652f\u9019\u500b\u529f\u80fd\u53ef\u4ee5\u904b\u4f5c\u9700\u8981\u9054\u6210\u5169\u500b\u689d\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8981\u6709\u4e00\u500b\u5730\u65b9\u53ef\u4ee5\u5132\u5b58\u6bcf\u500b\u5206\u652f\u6307\u5411\u7684\u54ea\u500b commit \u9019\u4ef6\u4e8b\u60c5\u3002 \u27a1\ufe0f \u5b58\u5728 .git/refs/heads/","[branch \u540d\u7a31]"," \u88e1\u9762\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8981\u6709\u4e00\u500b\u6771\u897f\u53ef\u4ee5\u8b93\u6211\u5011\u77e5\u9053\u6211\u5011\u73fe\u5728\u5728\u54ea\u4e00\u500b\u5206\u652f\u4e0a\u9762\u3002 \u27a1\ufe0f \u900f\u904e HEAD \u4f86\u5be6\u73fe\uff0c\u4e5f\u5c31\u662f\u8aaa\u53ea\u8981\u770b HEAD \u6307\u5411\u54ea\u500b\u5206\u652f\uff0c\u6211\u5011\u73fe\u5728\u5c31\u5728\u54ea\u500b\u5206\u652f\u3002\uff08HEAD \u5b58\u5728 .git/HEAD\uff09")),(0,a.kt)("h3",{id:"-\u5206\u652f\u7684\u57fa\u672c\u64cd\u4f5c"},"\ud83e\udd80 \u5206\u652f\u7684\u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git branch"),"\uff1a\u67e5\u770b\u76ee\u524d\u6709\u54ea\u4e9b\u5206\u652f\u3002\u5982\u679c\u8a72\u5206\u652f\u524d\u9762\u51fa\u73fe * \u5b57\u865f\uff0c\u8868\u793a\u90a3\u662f\u73fe\u5728\u6240\u5728\u7684\u5206\u652f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git branch [branch \u540d\u7a31]"),"\uff1a\u5275\u5efa\u5206\u652f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout [branch \u540d\u7a31]"),"\uff1a\u5207\u63db\u73fe\u5728\u7684\u5206\u652f\u5230\u53e6\u5916\u4e00\u500b\u5206\u652f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git branch -d [branch \u540d\u7a31]"),"\uff1a\u522a\u9664\u5206\u652f\u3002\u5982\u679c\u5206\u652f\u6c92\u6709 merge \u7684\u8a71\uff0c\u6703\u51fa\u73fe\u7121\u6cd5\u522a\u9664\u5206\u652f\u7684\u63d0\u793a\u8a0a\u606f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git branch -D [branch \u540d\u7a31]"),"\uff1a\u5f37\u5236\u522a\u9664\u5206\u652f\u3002\u5c31\u7b97\u5206\u652f\u6c92\u6709 merge \u4e5f\u53ef\u4ee5\u522a\u9664\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git reflog"),"\uff1a\u6703\u8a18\u9304\u6240\u6709\u5728 git \u7576\u4e2d\u7684\u64cd\u4f5c\uff0c\u5305\u62ec\u88ab\u522a\u9664\u5206\u652f\u7684 commit\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git branch -m [\u820a branch \u540d\u7a31] [\u65b0 branch \u540d\u7a31]"),"\uff1a\u91cd\u65b0\u547d\u540d\u5206\u652f\u540d\u7a31\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout -b [branch \u540d\u7a31]"),"\uff1a\u5275\u5efa\u5206\u652f\u4e26\u4e14\u5207\u63db\u5230\u8a72\u5206\u652f\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u5982\u679c\u73fe\u5728\u6240\u5728\u7684\u5206\u652f\u662f\u60f3\u8981\u522a\u9664\u7684\u5206\u652f\u7684\u8a71\uff0c\u5c31\u4e0d\u80fd\u522a\u9664\u5206\u652f\u3002\u8981\u5148\u79fb\u52d5\u5230\u5225\u7684\u5206\u652f\uff0c\u624d\u80fd\u522a\u9664\u3002")),(0,a.kt)("h3",{id:"-\u4f7f\u7528-git-checkout-\u51fa\u7279\u5b9a\u7684-commit"},"\ud83e\udd80 \u4f7f\u7528 git checkout \u51fa\u7279\u5b9a\u7684 commit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," \u9664\u4e86\u53ef\u4ee5\u7528\u4f86\u5207\u63db\u5206\u652f\u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u7528\u4f86\u627e\u51fa\u67d0\u500b\u7279\u5b9a\u7684 commit\u3002\u5982\u679c\u4e0d\u5c0f\u5fc3\u522a\u9664\u4e86\u67d0\u500b\u5206\u652f\uff0c\u53ef\u4ee5\u5148\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git reflog")," \u627e\u5230\u88ab\u522a\u9664\u5206\u652f\u7684 commit\uff0c\u7136\u5f8c\u518d\u5efa\u7acb\u5206\u652f\uff0c\u5c31\u53ef\u4ee5\u6062\u5fa9\u88ab\u522a\u9664\u7684\u5206\u652f\u3002\u5982\u4e0b\u6b65\u9a5f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. git reflog\n2. git checkout [commit sha1\u503c(\u516d\u500b\u5b57)]\n3. git checkout -b [\u88ab\u522a\u9664\u7684 branch \u540d\u7a31]\n")),(0,a.kt)("p",null,"\u9019\u500b\u7528\u6cd5\u5e73\u5e38\u4e0d\u592a\u5e38\u7528\u5230\uff0c\u4f46\u5728\u7279\u6b8a\u60c5\u6cc1\u4e0b\u7279\u5225\u6709\u7528\uff01"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u522a\u9664\u5206\u652f\u5230\u5e95\u522a\u9664\u4e86\u4ec0\u9ebc\uff1f")," \u522a\u9664\u5206\u652f\u6642\uff0c\u53ea\u6703\u522a\u9664\u5206\u652f\u9019\u500b\u6307\u91dd\uff0c\u4e26\u4e0d\u6703\u522a\u9664\u4efb\u4f55\u7684 commit\uff01")),(0,a.kt)("h3",{id:"-\u95dc\u65bc-git-diff-\u9019\u500b\u547d\u4ee4"},"\ud83e\udd80 \u95dc\u65bc git diff \u9019\u500b\u547d\u4ee4"),(0,a.kt)("p",null,"\u73fe\u5728\u61c9\u8a72\u4e5f\u6bd4\u8f03\u5c11\u5728\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff")," \u9019\u500b\u6307\u4ee4\u4e86\uff0c\u56e0\u70ba IDE \u53ef\u4ee5\u76f4\u63a5\u986f\u793a\u6a94\u6848\u8b8a\u52d5\u7684\u60c5\u6cc1\uff0c\u975e\u5e38\u65b9\u4fbf\uff0c\u4f46\u5176\u5be6\u4e5f\u53ef\u4ee5\u900f\u904e\u5728\u7d42\u7aef\u6a5f\u6253\u4e0b\u6307\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff")," \u4f86\u67e5\u770b working directory \u548c staging area \u4e2d\u6587\u4ef6\u4e4b\u9593\u7684\u5dee\u5225\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u67e5\u770b staging area \u548c git repository \u7684\u5dee\u5225\u7684\u8a71\uff0c\u53ef\u4ee5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff --cache")," \u4f86\u67e5\u770b\u3002"),(0,a.kt)("h2",{id:"-\u5206\u652f\u5408\u4f75branch-merge"},"\ud83d\udc33 \u5206\u652f\u5408\u4f75\uff08Branch Merge\uff09"),(0,a.kt)("p",null,"\u7576\u5718\u968a\u88e1\u7684\u4eba\u5728\u4e0d\u540c\u7684\u5206\u652f\u958b\u767c\u5b8c\u4e4b\u5f8c\uff0c\u6703\u9700\u8981\u5c07\u6240\u6709\u7684\u5206\u652f\u90fd\u5408\u4f75\u5728\u4e00\u8d77\uff0c\u624d\u662f\u4e00\u500b\u5b8c\u6574\u7684\u61c9\u7528\u3002\u6b64\u6642\u5408\u4f75\u5206\u652f\u6642\u6703\u6709\u5e7e\u500b\u4e0d\u540c\u7684\u72c0\u6cc1\u3002\u9019\u500b\u55ae\u5143\u6703\u4e00\u4e00\u4ecb\u7d39\u3002"),(0,a.kt)("h3",{id:"-fast-forward-merge"},"\ud83e\udd80 Fast Forward Merge"),(0,a.kt)("p",null,"\u7b97\u662f\u5728\u5408\u4f75\u5206\u652f\u7684\u6642\u5019\u9047\u5230\u7684\u6700\u7c21\u55ae\u7684\u4e00\u7a2e\u3002"),(0,a.kt)("p",null,"\u5047\u8a2d\u76ee\u524d\u6709\u5169\u500b\u5206\u652f\uff0c\u5206\u5225\u662f mater \u548c bugfix\u3002bugfix \u662f\u57fa\u65bc master \u6700\u65b0\u7684 commit \u6240\u5275\u5efa\u7684\u53e6\u5916\u4e00\u500b\u5206\u652f\uff0c\u6211\u5011\u5728 bugfix \u4e0a\u65b0\u589e\u4e86\u4e00\u500b commit\u3002\u6b64\u6642\u6574\u500b branch \u548c commit \u7684\u7d50\u69cb\u5927\u81f4\u4e0a\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(5313).Z,width:"1840",height:"832"})),(0,a.kt)("p",null,"\u5728\u9019\u6a23\u7684\u7d50\u69cb\u4e4b\u4e0b\u9032\u884c git merge \u7684\u8a71\uff0cmaster branch \u7684\u6307\u91dd\u6703\u5411\u53f3\u79fb\u52d5\uff0c\u6703\u8207 bugfix \u4f4d\u65bc\u540c\u4e00\u500b commit\uff0c\u7a31\u4e4b\u70ba fast forward merge\u3002"),(0,a.kt)("admonition",{title:"\u5c0f\u7d50",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u9019\u88e1\u7c21\u55ae\u7e3d\u7d50\u7b26\u5408 fast forward merge \u7684\u689d\u4ef6\uff1a\u5206\u652f B \u5408\u4f75\u9032 \u5206\u652f A \u7684\u6642\u5019\uff0c\u5206\u652f B \u7684\u7b2c\u4e00\u500b commit \u6307\u5411\u5206\u652f A \u6700\u65b0\u7684 commit\u3002")),(0,a.kt)("h3",{id:"-3-way-merge"},"\ud83e\udd80 3 Way Merge"),(0,a.kt)("p",null,"3 Way Merge \u662f\u53e6\u5916\u4e00\u7a2e\u5728\u5408\u4f75\u5206\u652f\u7684\u6642\u5019\u6703\u9047\u5230\u7684\u72c0\u6cc1\uff0c\u9019\u500b\u72c0\u6cc1\u61c9\u8a72\u975e\u5e38\u7684\u5e38\u898b\u3002\u6703\u767c\u751f\u9019\u6a23\u7684\u72c0\u6cc1\u662f\u56e0\u70ba\uff1a\u5206\u652f B \u5408\u4f75\u9032 \u5206\u652f A \u7684\u6642\u5019\uff0c\u5206\u652f B \u7684\u7b2c\u4e00\u500b commit \u6c92\u6709\u6307\u5411\u5206\u652f A \u6700\u65b0\u7684 commit\u3002"),(0,a.kt)("p",null,"\u5be6\u969b\u4e0a\u6700\u5e38\u9047\u5230\u7684\u72c0\u6cc1\u662f\uff0c\u81ea\u5df1\u5f9e master \u53e6\u958b\u65b0\u7684 feature \u5206\u652f\u4f86\u958b\u767c\u65b0\u7684\u529f\u80fd\u7684\u6642\u5019\uff0c\u5176\u4ed6\u540c\u4e8b\u4e5f\u6703\u540c\u6642\u958b\u767c\u5176\u4ed6\u7684\u529f\u80fd\uff0c\u6709\u53ef\u80fd\u4ed6\u5011\u5148\u958b\u767c\u5b8c\u6210 merge \u9032 master\uff0c\u6211\u81ea\u5df1\u7684 feature \u5206\u652f\u5c31\u6703\u843d\u5f8c\u76ee\u524d\u7684 master \u5206\u652f\u3002\u9019\u6642\u5019\u5982\u679c\u6211\u958b\u767c\u5b8c\u6210\u8981\u6e96\u5099 merge \u9032 master\uff0c\u5c31\u6703\u767c\u751f 3 Way Merge\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u5716\u6240\u793a\uff08bugfix \u5206\u652f\u843d\u5f8c master \u5206\u652f\u4e00\u6b21 commit\uff09\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(8339).Z,width:"2900",height:"1498"})),(0,a.kt)("p",null,"\u9019\u500b\u60c5\u6cc1\u4e0b\uff0c\u5982\u679c\u9032\u884c merge \u800c\u4e14\u6c92\u6709\u885d\u7a81\u7684\u8a71\uff0c\u6703\u81ea\u52d5\u751f\u6210\u4e00\u500b\u65b0\u7684 commit\uff0c\u9019\u500b\u65b0\u7684 commit \u6703\u540c\u6642\u6307\u5411\u5169\u500b\u5206\u652f\u7684\u4e0a\u4e00\u500b commit\uff0c\u5982\u4e0b\u5716\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6984).Z,width:"2862",height:"1422"})),(0,a.kt)("p",null,"\u5982\u679c\u7528\u4e00\u4e9b git GUI \u5de5\u5177\u7684\u8a71\uff0c\u61c9\u8a72\u53ef\u4ee5\u770b\u5230 branch \u7684\u5206\u652f\u5716\u3002\u7576\u5982\u679c\u4e00\u500b repo \u5f88\u5927\u7684\u6642\u5019\uff0c\u6709\u5f88\u591a 3 way merge \u7684\u8a71\uff0c\u5206\u652f\u5716\u5c31\u6703\u76e4\u6839\u932f\u7bc0\uff08\u5f88\u919c \ud83d\udc7e\uff09\uff0c\u9019\u7a2e\u6642\u5019\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase")," \u51fa\u5834\u7684\u6642\u6a5f\u4e86\uff08\u7a0d\u5f8c\u6703\u5beb\u5230\uff09\uff01"),(0,a.kt)("h3",{id:"-3-way-merge-with-conflict"},"\ud83e\udd80 3 Way Merge with Conflict"),(0,a.kt)("p",null,"\u524d\u9762\u63d0\u5230\u7684 3 Way Merge \u5982\u679c\u9806\u9806\u7684\uff0c\u6c92\u4ec0\u9ebc\u610f\u5916\u767c\u751f\u7684\u8a71\uff0c\u5c31\u6703\u81ea\u52d5 merge\uff0c\u4f46\u5982\u679c\u5169\u500b\u6e96\u5099\u8981\u5408\u4f75\u7684\u5206\u652f\uff0c\u5169\u500b\u5206\u652f\u90fd\u6709\u4fee\u6539\u5230\u540c\u6a23\u7684\u5730\u65b9\u7684\u8a71\uff0c\u5c31\u6703\u767c\u751f\u885d\u7a81\uff0c\u4e5f\u5c31\u662f conflict\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u767c\u751f\u885d\u7a81\u7684\u8a71\uff0c\u53ef\u4ee5\u6309\u7167\u7d42\u7aef\u6a5f\u4e0a\u7684\u8aaa\u660e\uff0c\u4e00\u6b65\u4e00\u6b65\u89e3\u6389\u885d\u7a81\u3002\u7b49\u5230\u885d\u7a81\u5168\u90e8\u89e3\u6389\u5f8c\uff0c\u5c31\u53ef\u4ee5 merge \u4e86\uff01"),(0,a.kt)("p",null,"\u6709\u885d\u7a81\u767c\u751f\u7684\u7576\u4e0b\u53ef\u4ee5\u5728\u7d42\u7aef\u6a5f\u6253 ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," \u6aa2\u67e5\u662f\u54ea\u4e9b\u6a94\u6848\u767c\u751f\u885d\u7a81\uff0c\u518d\u53bb vsCode \u88e1\u9762\u628a\u885d\u7a81\u89e3\u6389\u5c31\u53ef\u4ee5\u4e86\uff01"),(0,a.kt)("h3",{id:"-git-rebase-\u662f\u4ec0\u9ebc"},"\ud83e\udd80 git rebase \u662f\u4ec0\u9ebc\uff1f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git rebase")," \u53ef\u4ee5\u8b93\u6240\u5728\u7684\u5206\u652f\uff0c\u540c\u6b65\u53e6\u5916\u4e00\u500b\u5206\u652f\u7684\u6700\u65b0 commit\uff0c\u6bd4\u5982\u8aaa\u6211\u73fe\u5728\u5728 feature 1 \u5206\u652f\uff0c\u4e26\u4e14 commit \u4e86\u4e09\u6b21\uff0c\u6b64\u6642\u9019\u500b\u5206\u652f\u843d\u5f8c master \u5206\u652f\u4e00\u500b commit\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase master")," \u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u8b93 feature 1 \u5206\u652f\u7684\u4e09\u6b21 commit \u63a5\u5728 master \u5206\u652f\u6700\u65b0\u7684 commit \u4e4b\u5f8c\uff0c\u5982\u6b64\u4e00\u4f86\u5c31\u53ef\u4ee5\u9032\u884c Fast Forward Merge\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u7279\u5225\u6ce8\u610f\u7684\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase")," \u4e5f\u6709\u53ef\u80fd\u6703\u9020\u6210\u885d\u7a81\uff0c\u5982\u679c\u6709\u885d\u7a81\u7684\u8a71\u9700\u8981\u5c07\u885d\u7a81\u89e3\u6389\u624d\u80fd rebase\u3002\u53e6\u5916\u4f7f\u7528\u4e86 rebase \u4e4b\u5f8c\uff0c\u5728\u8a72\u5206\u652f\u4e0a\u9762\u7684 commit \u6703\u5168\u90e8\u91cd\u65b0\u8a08\u7b97\uff0c\u56e0\u70ba\u9019\u5e7e\u500b commit \u7684\u7b2c\u4e00\u500b\u6709\u4e86\u65b0\u7684 parent commit\uff0c\u6240\u4ee5 commit tree \u4fbf\u91cd\u65b0\u7b97\u4e86\u4e00\u6b21\uff0c\u4e5f\u5c31\u662f\u8aaa\u5728\u8a72\u5206\u652f\u6240\u5efa\u7acb\u7684 commit \u7684 id \u6703\u4e0d\u4e00\u6a23\uff0c\u96d6\u7136\u6bcf\u500b commit \u7684\u4fee\u6539\u5167\u5bb9\u4ecd\u548c\u5148\u524d\u76f8\u540c\u3002")),(0,a.kt)("h2",{id:"-\u53c3\u8003\u8cc7\u6599"},"\ud83d\udc33 \u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/git-basic/"},"Git/GitHub/GitLab \u5b8c\u5168\u6559\u7a0b\uff08\u5305\u62ecGit\u5e95\u5c64\u539f\u7406\uff09"))))}p.isMDXComponent=!0},8339:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/3WayMerge-1-e737ced181159b51bdb83e883defea36.png"},6984:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/3WayMerge-2-fa1d41c019e9f33404962d629917cf64.png"},7250:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/commitHistoryTree-693101891da2e8a0c728a5c773714a12.png"},2537:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/commitStructure-b1b1542e3c68255f4f4da5d0cd4c2cd7.png"},5313:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/fastForwardMerge-a2f4eb113f1a8a55b003ab75fd694184.png"},3228:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/gitWorkspace-df5827519a901293ba1240bfdeb5b98e.png"}}]);