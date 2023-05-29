"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),i=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),y=a,d=m["".concat(u,".").concat(y)]||m[y]||p[y]||r;return n?l.createElement(d,o(o({ref:t},c),{},{components:n})):l.createElement(d,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var l=n(7462),a=(n(7294),n(3905));const r={title:"\u5728 Ubuntu \u5b89\u88dd MySQL",date:new Date("2022-09-22T00:00:00.000Z")},o=void 0,s={unversionedId:"notes/MySQL/install-mysql",id:"notes/MySQL/install-mysql",title:"\u5728 Ubuntu \u5b89\u88dd MySQL",description:"\u6700\u8fd1\u525b\u521d\u5b78\u8cc7\u6599\u5eab\uff0c\u5728\u672c\u5730\u5b89\u88dd MySQL \u7684\u6642\u5019\u9047\u5230\u592a\u591a\u5751\u4e86\uff0c\u6240\u4ee5\u7d00\u9304\u4e00\u4e0b\u5b89\u88dd\u7684\u65b9\u5f0f\u3002 \ud83d\udca6",source:"@site/docs/notes/MySQL/install-mysql.md",sourceDirName:"notes/MySQL",slug:"/notes/MySQL/install-mysql",permalink:"/notes/docs/notes/MySQL/install-mysql",draft:!1,editUrl:"https://github.com/SimoneCheng/notes/tree/main/docs/notes/MySQL/install-mysql.md",tags:[],version:"current",frontMatter:{title:"\u5728 Ubuntu \u5b89\u88dd MySQL",date:"2022-09-22T00:00:00.000Z"},sidebar:"notes",previous:{title:"metadata\u3001<meta> \u77e5\u591a\u5c11",permalink:"/notes/docs/notes/HTML/metadata"},next:{title:"HTML and CSS",permalink:"/notes/docs/notes/coding-style-guide/html-and-css"}},u={},i=[{value:"\ud83d\udc33 \u5b89\u88dd\u74b0\u5883",id:"-\u5b89\u88dd\u74b0\u5883",level:2},{value:"\ud83d\udc33 \u5b89\u88dd MySQL",id:"-\u5b89\u88dd-mysql",level:2},{value:"\ud83d\udc33 \u5b89\u88dd MySQL Workbench",id:"-\u5b89\u88dd-mysql-workbench",level:2},{value:"\ud83d\udc33 \u53c3\u8003\u8cc7\u6599",id:"-\u53c3\u8003\u8cc7\u6599",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u8fd1\u525b\u521d\u5b78\u8cc7\u6599\u5eab\uff0c\u5728\u672c\u5730\u5b89\u88dd MySQL \u7684\u6642\u5019\u9047\u5230\u592a\u591a\u5751\u4e86\uff0c\u6240\u4ee5\u7d00\u9304\u4e00\u4e0b\u5b89\u88dd\u7684\u65b9\u5f0f\u3002 \ud83d\udca6"),(0,a.kt)("h2",{id:"-\u5b89\u88dd\u74b0\u5883"},"\ud83d\udc33 \u5b89\u88dd\u74b0\u5883"),(0,a.kt)("p",null,"\u4f5c\u696d\u7cfb\u7d71\uff1alinux Ubuntu 22.04"),(0,a.kt)("p",null,"\u5c0d\u6ef4\u6c92\u7dbd\uff0c\u662f\u5728 linux \u74b0\u5883\u4e0b\u5b89\u88dd MySQL \u6642\u9047\u5230\u7684\u5751\u5011\u3002"),(0,a.kt)("h2",{id:"-\u5b89\u88dd-mysql"},"\ud83d\udc33 \u5b89\u88dd MySQL"),(0,a.kt)("p",null,"\u5728 linux \u74b0\u5883\u4e0b\u5b89\u88dd MySQL \u9084\u883b\u5bb9\u6613\u7684\uff0c\u53ea\u8981\u5728\u7d42\u7aef\u6a5f\u8f38\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install mysql-server\n")),(0,a.kt)("p",null,"\u7b49\u5b83\u5b89\u88dd\u597d\u4e4b\u5f8c\uff0c\u672c\u5730\u7aef\u5c31\u6709\u8cc7\u6599\u5eab\u4e86\u3002\u4f46\u9664\u4e86\u5b89\u88dd\u8cc7\u6599\u5eab\u4e4b\u5916\uff0c\u9084\u9700\u8981\u91dd\u5c0d\u525b\u88dd\u597d\u7684\u8cc7\u6599\u5eab\u505a\u4e00\u4e9b\u57fa\u672c\u7684\u8a2d\u5b9a\u3002\u6700\u57fa\u672c\u7684\u8a2d\u5b9a\u5c31\u662f\u8a2d\u5b9a\u8cc7\u6599\u5eab\u7684\u5bc6\u78bc\uff0c\u7562\u7adf\u8cc7\u6599\u5eab\u88e1\u9762\u53ef\u80fd\u90fd\u6703\u5b58\u653e\u91cd\u8981\u7684\u8cc7\u6599\uff0c\u4e0d\u80fd\u8b93\u4efb\u4f55\u4eba\u90fd\u6709\u6b0a\u9650\u53ef\u4ee5\u9032\u5165\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u641c\u5c0b\u7db2\u8def\u4e0a\u7684 MySQL \u5b89\u88dd\u6559\u5b78\uff0c\u6703\u770b\u5230\u8981\u4f7f\u7528\u4e0b\u9762\u7684\u6307\u4ee4\u4f86\u8a2d\u5b9a\u5bc6\u78bc\u5f37\u5ea6\u548c\u5bc6\u78bc\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mysql_secure_installation\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e0a\u8ff0\u7684\u6307\u4ee4\u6c92\u554f\u984c\u7684\u8a71\u5c31\u53ef\u4ee5\u9806\u9806\u5730\u8a2d\u5b9a\u597d\u5bc6\u78bc\uff0c\u518d\u7528\u5bc6\u78bc\u767b\u5165 MySQL \u5c31\u53ef\u4ee5\u4e86\u3002\u4f46\u662f\u5728\u4e0b\u4e86\u9019\u500b\u6307\u4ee4\u4e4b\u5f8c\uff0c\u6211\u7684\u96fb\u8166\u537b\u51fa\u73fe\u4e86\u4e0b\u9762\u7684\u932f\u8aa4\u8a0a\u606f\uff0c\u7121\u6cd5\u4f7f\u7528\u9019\u500b\u6307\u4ee4\u4f86\u8a2d\u5b9a\u5bc6\u78bc\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Output\n ... Failed! Error: SET PASSWORD has no significance for user 'root'@'localhost' as the authentication method used doesn't store authentication data in the MySQL server. Please consider using ALTER USER instead if you want to change authentication parameters\n")),(0,a.kt)("p",null,"\u9019\u500b\u6642\u5019\u9700\u8981\u6539\u7528\u53e6\u5916\u4e00\u500b\u65b9\u6cd5\u4f86\u8a2d\u5b9a\u5bc6\u78bc\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5148\u9032\u5230 MySQL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mysql\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u9032\u5230 MySQL \u4e4b\u5f8c\uff0c\u5148\u5c07\u5bc6\u78bc\u9810\u8a2d\u6210 password")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u96e2\u958b MySQL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql> exit\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u958b\u59cb\u5bc6\u78bc\u8a2d\u5b9a\u6d41\u7a0b\uff0c\u5bc6\u78bc\u5f37\u5ea6\u8981\u7b26\u5408\u9078\u64c7\u7684\u624d\u80fd\u8a2d\u5b9a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mysql_secure_installation\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u5bc6\u78bc\u8a2d\u5b9a\u5b8c\u6210\u4e4b\u5f8c\uff0c\u5c31\u53ef\u4ee5\u7528\u4ee5\u4e0b\u6307\u4ee4\u9032\u5165 MySQL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mysql -u root -p\n")),(0,a.kt)("h2",{id:"-\u5b89\u88dd-mysql-workbench"},"\ud83d\udc33 \u5b89\u88dd MySQL Workbench"),(0,a.kt)("p",null,"MySQL Workbench \u662f\u4e00\u500b\u5b98\u65b9\u63d0\u4f9b\u7684\u7ba1\u7406\u8cc7\u6599\u5eab\u7684 GUI \u5de5\u5177\uff0c\u5728\u5b89\u88dd\u9019\u500b\u5de5\u5177\u7684\u6642\u5019\uff0c\u4e5f\u6709\u9047\u5230\u4e00\u4e9b\u932f\u8aa4\u3002"),(0,a.kt)("p",null,"\u6211\u6700\u4e00\u958b\u59cb\u5b89\u88dd MySQL Workbench \u65b9\u5f0f\u662f\u900f\u904e linux \u7684\u4e00\u500b\u65b0\u7684\u5957\u4ef6\u7ba1\u7406\u5de5\u5177 snap \u53bb\u5b89\u88dd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo snap install mysql-workbench-community\n")),(0,a.kt)("p",null,"\u4f46\u5b89\u88dd\u5b8c\u4e4b\u5f8c\uff0c\u7121\u6cd5\u8f38\u5165\u5bc6\u78bc\uff0c\u5c31\u6c92\u6709\u8fa6\u6cd5\u9023\u5230\u8cc7\u6599\u5eab\uff0c\u6240\u4ee5\u6709\u88dd\u7b49\u65bc\u8ddf\u6c92\u88dd\u4e00\u6a23\u3002\u5f8c\u4f86\u4e0a\u7db2\u4e00\u67e5\u767c\u73fe\u61c9\u8a72\u662f snap \u548c apt \u7684\u5e95\u5c64\u904b\u4f5c\u539f\u7406\u4e0d\u540c\uff0c\u81f3\u65bc\u5e95\u5c64\u662f\u5982\u4f55\u904b\u4f5c\u7684\uff0c\u9019\u90e8\u5206\u6211\u5c31\u4e0d\u592a\u77e5\u9053\u4e86\u3002"),(0,a.kt)("p",null,"\u65bc\u662f\u628a\u7528 snap \u5b89\u88dd\u7684 MySQL Workbench \u780d\u4e86\uff0c\u6539\u6210\u7528 apt \u4f86\u5b89\u88dd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u53bb",(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/downloads/workbench/"},"\u5b98\u65b9\u7db2\u7ad9"),"\u4e0b\u8f09\u5b89\u88dd\u5305"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u7d42\u7aef\u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/Downloads #\u4e2d\u6587\u7684\u8a71\u662f\u4e0b\u8f09\n$ sudo apt-get install ./mysql-workbench-community_8.0.20-1ubuntu20.04_amd64.deb #\u8a18\u5f97\u6539\u6210\u76f8\u5c0d\u61c9\u7684\u6a94\u540d\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88dd\u5b8c\u6210\u5f8c\u555f\u52d5 MySQL Workbench\uff0c\u61c9\u8a72\u5c31\u53ef\u4ee5\u8f38\u5165\u5bc6\u78bc\u9023\u4e0a\u8cc7\u6599\u5eab\u4e86\uff01")),(0,a.kt)("h2",{id:"-\u53c3\u8003\u8cc7\u6599"},"\ud83d\udc33 \u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04"},"How To Install MySQL on Ubuntu 20.04 - DigitalOcean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/1242026/cannot-connect-mysql-workbench-to-mysql-server"},"Cannot connect MySQL Workbench to MySQL server - askubuntu"))))}p.isMDXComponent=!0}}]);