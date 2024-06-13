"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7020],{4279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>V,contentTitle:()=>z,default:()=>O,frontMatter:()=>C,metadata:()=>A,toc:()=>D});var r=t(5893),s=t(1151),i=t(7294),a=t(4996);const l="figure_hSKo",u="figcaption_fRtH";const c=function(e){const{src:n,caption:t,alt:s}=e;return(0,r.jsxs)("figure",{className:l,children:[(0,r.jsx)("img",{src:(0,a.Z)(n),alt:s??t}),(0,r.jsx)("figcaption",{className:u,children:`${t}`})]})},d=t.p+"assets/images/stack-1670c32623e2398397295d2de569ca73.png",o=t.p+"assets/images/queue-9d62b1d8b834ae5254ecd30915d54b16.png";var h=t(6905),x=t(2466),p=t(6550),j=t(469),m=t(1980),f=t(7392),g=t(12);function v(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function k(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return v(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,f.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:t}=e;const r=(0,p.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,m._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function q(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=k(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,c]=y({queryString:t,groupId:r}),[d,o]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,g.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),h=(()=>{const e=u??d;return b({value:e,tabValues:s})?e:null})();(0,j.Z)((()=>{h&&l(h)}),[h]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),o(e)}),[c,o,s]),tabValues:s}}var S=t(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,x.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==s&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,h.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,h.Z)("tabs__item",w.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function I(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function L(e){const n=q(e);return(0,r.jsxs)("div",{className:(0,h.Z)("tabs-container",w.tabList),children:[(0,r.jsx)(N,{...e,...n}),(0,r.jsx)(I,{...e,...n})]})}function E(e){const n=(0,S.Z)();return(0,r.jsx)(L,{...e,children:v(e.children)},String(n))}const Q={tabItem:"tabItem_Ymn6"};function T(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,h.Z)(Q.tabItem,s),hidden:t,children:n})}const C={sidebar_position:1,title:"Stack and Queue \u5806\u758a\u8207\u4f47\u5217",date:new Date("2023-01-25T00:00:00.000Z")},z=void 0,A={id:"notes/data-structure/stack-and-queue",title:"Stack and Queue \u5806\u758a\u8207\u4f47\u5217",description:"\ud83d\udc33 \u5beb\u5728\u524d\u9762",source:"@site/docs/notes/data-structure/stack-and-queue.mdx",sourceDirName:"notes/data-structure",slug:"/notes/data-structure/stack-and-queue",permalink:"/notes/docs/notes/data-structure/stack-and-queue",draft:!1,unlisted:!1,editUrl:"https://github.com/SimoneCheng/notes/tree/main/docs/notes/data-structure/stack-and-queue.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Stack and Queue \u5806\u758a\u8207\u4f47\u5217",date:"2023-01-25T00:00:00.000Z"},sidebar:"notes",previous:{title:"Recursion \u905e\u8ff4",permalink:"/notes/docs/notes/data-structure/recursion"},next:{title:"Tree and Binary Tree \u6a39\u8207\u4e8c\u5143\u6a39",permalink:"/notes/docs/notes/data-structure/tree-and-binary-tree"}},V={},D=[{value:"\ud83d\udc33 \u5beb\u5728\u524d\u9762",id:"-\u5beb\u5728\u524d\u9762",level:2},{value:"\ud83d\udc33 Array and Linked List",id:"-array-and-linked-list",level:2},{value:"\ud83e\udd80 Array \u548c Linked List \u7684\u7c21\u55ae\u6bd4\u8f03",id:"-array-\u548c-linked-list-\u7684\u7c21\u55ae\u6bd4\u8f03",level:3},{value:"\ud83d\udc33 Stack \u5806\u758a",id:"-stack-\u5806\u758a",level:2},{value:"\ud83e\udd80 \u7528 Array \u4f86\u5be6\u4f5c Stack",id:"-\u7528-array-\u4f86\u5be6\u4f5c-stack",level:3},{value:"\ud83e\udd80 \u7528 Linked List \u4f86\u5be6\u4f5c Stack",id:"-\u7528-linked-list-\u4f86\u5be6\u4f5c-stack",level:3},{value:"\ud83d\udc33 Queue \u4f47\u5217",id:"-queue-\u4f47\u5217",level:2},{value:"\ud83e\udd80 \u7528 Linear Array \u4f86\u5be6\u4f5c Queue",id:"-\u7528-linear-array-\u4f86\u5be6\u4f5c-queue",level:3},{value:"\ud83e\udd80 \u7528 Circular Array \u4f86\u5be6\u4f5c Queue",id:"-\u7528-circular-array-\u4f86\u5be6\u4f5c-queue",level:3},{value:"\ud83e\udd80 \u7528 Linked List \u4f86\u5be6\u4f5c Queue",id:"-\u7528-linked-list-\u4f86\u5be6\u4f5c-queue",level:3},{value:"\ud83d\udc33 \u5be6\u969b\u61c9\u7528",id:"-\u5be6\u969b\u61c9\u7528",level:2},{value:"\ud83e\udd80 \u524d\u7aef",id:"-\u524d\u7aef",level:3},{value:"Stack",id:"stack",level:4},{value:"Queue",id:"queue",level:4},{value:"\ud83e\udd80 \u5176\u4ed6",id:"crab-\u5176\u4ed6",level:3},{value:"Stack",id:"stack-1",level:4},{value:"Queue",id:"queue-1",level:4},{value:"\ud83d\udc33 Resource",id:"-resource",level:2}];function F(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"-\u5beb\u5728\u524d\u9762",children:"\ud83d\udc33 \u5beb\u5728\u524d\u9762"}),"\n",(0,r.jsx)(n.p,{children:"\u9019\u908a\u60f3\u8981\u7d00\u9304\u4e00\u4e9b\u958b\u59cb\u5ff5\u8cc7\u6599\u7d50\u69cb\u4e4b\u5f8c\u7684\u521d\u6b65\u611f\u60f3\uff0c\u8b93\u672a\u4f86\u7684\u81ea\u5df1\u53ef\u4ee5\u56de\u9867\u3002\u53ef\u80fd\u4e0d\u4e00\u5b9a\u662f\u5c0d\u7684\uff0c\u4f46\u5c31\u662f\u611f\u60f3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u96d6\u7136\u4e0d\u540c\u7684\u7a0b\u5f0f\u8a9e\u8a00\u6703\u56e0\u70ba\u4e0d\u540c\u7684\u7279\u6027\u63d0\u4f9b\u4e00\u4e9b\u8cc7\u6599\u578b\u614b\uff0c\u6bd4\u5982 JavaScript \u6709 number, string, boolean, array, class \u7b49\u7b49\u3002\u8cc7\u6599\u7d50\u69cb\u6bd4\u8f03\u50cf\u662f\u4e00\u7a2e\u4ee5\u73fe\u6709\u7684\u8cc7\u6599\u578b\u614b\u53bb\u8a2d\u8a08\u67d0\u7a2e\u7d50\u69cb\uff0c\u8a72\u7a2e\u7d50\u69cb\u4e4b\u6240\u4ee5\u88ab\u8a2d\u8a08\u51fa\u4f86\u53ef\u80fd\u662f\u56e0\u70ba\u6642\u9593\u8207\u7a7a\u9593\u4e0a\u7684\u6548\u80fd\u8003\u91cf\uff0c\u6216\u662f\u7528\u4f86\u89e3\u6c7a\u9700\u6c42\u7684\u554f\u984c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\u5b78\u8cc7\u6599\u7d50\u69cb\u7684\u6642\u5019\uff0c\u9664\u4e86\u641e\u61c2\u6bcf\u500b\u8cc7\u6599\u7d50\u69cb\u7684\u9577\u76f8\u3001\u7279\u6027\u3001\u5237\u984c\uff0c\u66f4\u9700\u8981\u77e5\u9053\u4e00\u4e9b\u5be6\u969b\u7684\u61c9\u7528\u60c5\u5883\uff0c\u60f3\u8981\u89e3\u6c7a\u4ec0\u9ebc\u6a23\u7684\u554f\u984c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"-array-and-linked-list",children:"\ud83d\udc33 Array and Linked List"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7406\u89e3\u4ec0\u9ebc\u662f stack \u8ddf queue \u4e4b\u524d\uff0c\u8981\u5148\u7406\u89e3 array \u548c linked list \u9019\u5169\u7a2e\u4e0d\u540c\u7684\u8cc7\u6599\u7d50\u69cb\u3002\u56e0\u70ba stack \u548c queue \u5176\u5be6\u53ef\u4ee5\u7528 array \u6216\u662f lnked list \u4f86\u5be6\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"array \u61c9\u8a72\u5c31\u4e0d\u7528\u7279\u5225\u89e3\u91cb\u4e86\uff0c\u4f46\u5982\u679c\u7b2c\u4e00\u500b\u5b78\u7fd2\u7684\u7a0b\u5f0f\u8a9e\u8a00\u662f JavaScript\uff0c\u53c8\u6c92\u6709\u5b78\u904e\u8cc7\u6599\u7d50\u69cb\u7684\u8a71\uff0c\u53ef\u80fd\u4e0d\u6703\u9047\u5230 linked list \u9019\u7a2e\u8cc7\u6599\u7d50\u69cb\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u6211\u76ee\u524d\u7684\u7406\u89e3\u4f86\u8aaa\u3002C \u8a9e\u8a00\u7684 array \u5728\u5ba3\u544a\u7684\u6642\u5019\u4e5f\u8981\u540c\u6642\u5ba3\u544a\u9577\u5ea6\uff0c\u4e5f\u5c31\u662f\u8aaa\u5ba3\u544a\u4e86 array \u9700\u8981\u7528\u5230\u7684\u8a18\u61b6\u9ad4\u7528\u91cf\uff0c\u6240\u4ee5 array \u7684\u9577\u5ea6\u6703\u662f\u56fa\u5b9a\u7684\uff0c\u6c92\u6709\u8fa6\u6cd5\u52d5\u614b\u8abf\u6574\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u4f7f\u7528 C \u8a9e\u8a00\u5275\u9020\u4e00\u500b\u52d5\u614b\u9577\u5ea6\u7684\u9663\u5217\uff0c\u53ef\u4ee5\u62ff\u53d6\u8a18\u61b6\u9ad4\u4e2d\u4efb\u4e00\u7684\u55ae\u4e00\u5340\u584a\u4f86\u5b58\u653e data\uff08\u7a31\u70ba\u7bc0\u9ede node\uff09\uff0c\u4ea6\u5373\u653e\u5165\u503c\u548c\u6307\u6a19\uff0c\u7136\u5f8c\u7528\u6307\u6a19\u6307\u5411\u4e0b\u500b\u7bc0\u9ede\uff08node\uff09\uff0c\u4e32\u6210\u4e00\u500b\u9375\u7d50\u4e32\u5217\uff0c\u985e\u4f3c\u4e0b\u5716\u7684\u6982\u5ff5\uff1a"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  A[[node 1]] --\x3e B[[node 2]]\n  B --\x3e C[[node 3]]\n  C --\x3e D[[...]]"}),"\n",(0,r.jsx)(n.h3,{id:"-array-\u548c-linked-list-\u7684\u7c21\u55ae\u6bd4\u8f03",children:"\ud83e\udd80 Array \u548c Linked List \u7684\u7c21\u55ae\u6bd4\u8f03"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"array"}),(0,r.jsx)(n.th,{children:"linked list"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u512a\u9ede"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["random access\uff1a\u53ea\u8981\u5229\u7528 index \u5373\u53ef\u5728 ",(0,r.jsx)(n.code,{children:"O(1)"})," \u6642\u9593\u5c0d array \u7684\u8cc7\u6599\u505a\u5b58\u53d6\u3002"]}),(0,r.jsx)("li",{children:"\u8f03\u7bc0\u7701\u8a18\u61b6\u9ad4\u7a7a\u9593\uff0clinked list \u9700\u8981\u591a\u4e00\u500b pointer \u4f86\u8a18\u9304\u4e0b\u4e00\u500b node \u7684\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u3002"})]})}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u65b0\u589e\u6216\u522a\u9664\u8cc7\u6599\u8f03 array \u7c21\u55ae\uff0c\u53ea\u8981\u5c0d\u6240\u6709\u6b32\u65b0\u589e/\u522a\u9664\u7684 node \u8abf\u6574 pointer \u5373\u53ef\uff08\u6642\u9593\u8907\u96dc\u5ea6\uff1a",(0,r.jsx)(n.code,{children:"O(1)"}),"\uff09\uff0c\u4e0d\u9700\u8981\u5982\u540c array \u822c\u642c\u52d5\u5176\u9918\u5143\u7d20\u3002"]}),(0,r.jsx)("li",{children:"linked list \u7684\u8cc7\u6599\u6578\u91cf\u53ef\u4ee5\u662f\u52d5\u614b\u7684\uff0c\u4e0d\u50cf array \u6703\u6709 resize \u7684\u554f\u984c\u3002"})]})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u7f3a\u9ede"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["\u65b0\u589e\u6216\u522a\u9664\u8cc7\u6599\u8f03\u9ebb\u7169\uff0c\u82e5\u8981\u5728\u7b2c\u4e00\u500b\u4f4d\u7f6e\u65b0\u589e\u8cc7\u6599\uff0c\u5c31\u9700\u8981 ",(0,r.jsx)(n.code,{children:"O(n)"})," \u6642\u9593\u628a array \u4e2d\u6240\u6709\u5143\u7d20\u5f80\u5f8c\u79fb\u52d5\u3002\u540c\u7406\uff0c\u82e5\u8981\u522a\u9664\u7b2c\u4e00\u500b\u4f4d\u7f6e\u7684\u8cc7\u6599\uff0c\u4e5f\u9700\u8981 ",(0,r.jsx)(n.code,{children:"O(n)"})," \u6642\u9593\u628a array \u4e2d\u5269\u9918\u7684\u5143\u7d20\u5f80\u524d\u79fb\u52d5\u3002"]}),(0,r.jsxs)("li",{children:["\u82e5\u8cc7\u6599\u6578\u91cf\u6642\u5e38\u5728\u6539\u8b8a\uff0c\u8981\u6642\u5e38\u8abf\u6574\u77e9\u9663\u7684\u5927\u5c0f\uff0c\u6703\u82b1\u8cbb ",(0,r.jsx)(n.code,{children:"O(n)"})," \u7684\u6642\u9593\u5728\u642c\u52d5\u8cc7\u6599\u3002"]})]})}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["linked list \u6c92\u6709 index\uff0c\u82e5\u8981\u627e\u5230\u7279\u5b9a node\uff0c\u9700\u8981\u5f9e\u982d\u958b\u59cb\u627e\u8d77\uff0c\u641c\u5c0b\u7684\u6642\u9593\u8907\u96dc\u5ea6\u70ba ",(0,r.jsx)(n.code,{children:"O(n)"}),"\u3002"]}),(0,r.jsx)("li",{children:"\u9700\u8981\u984d\u5916\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\u4f86\u5132\u5b58 pointer\u3002"})]})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"-stack-\u5806\u758a",children:"\ud83d\udc33 Stack \u5806\u758a"}),"\n",(0,r.jsx)(n.p,{children:"Stack \u548c Queue \u90fd\u662f\u53ef\u4ee5\u7528\u4f86\u52a0\u5165\u8cc7\u6599\u3001\u53d6\u56de\u8cc7\u6599\u7684\u62bd\u8c61\u8cc7\u6599\u7d50\u69cb\uff0c\u53ea\u662f\u4ed6\u5011\u52a0\u5165\u8cc7\u6599\u548c\u53d6\u56de\u8cc7\u6599\u7684 order \u4e0d\u540c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Stack \u662f\u63a1\u53d6 ",(0,r.jsx)(n.strong,{children:"LIFO\uff08last-in, first-out\uff09"})," \u7684\u65b9\u5f0f\u3002\u6700\u5f8c\u52a0\u5165 stack \u7684\u8cc7\u6599\u6703\u6700\u5148\u88ab\u8b80\u53d6\u3002\u52a0\u5165\u8cc7\u6599\u7684\u65b9\u5f0f\u7a31\u70ba ",(0,r.jsx)(n.code,{children:"push"}),"\uff0c\u53d6\u56de\u8cc7\u6599\u7684\u65b9\u5f0f\u7a31\u70ba ",(0,r.jsx)(n.code,{children:"pop"}),"\u3002\u5982\u4e0b\u9762\u7684\u793a\u610f\u5716\uff1a"]}),"\n",(0,r.jsx)(c,{src:d,caption:"\u5716\u7247\u4f86\u6e90\uff1a\u7dad\u57fa\u767e\u79d1"}),"\n",(0,r.jsx)(n.p,{children:"stack \u7684\u4ecb\u9762\u63cf\u8ff0\u5927\u81f4\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Stack ADT (abstract data type)\uff1a"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"create()"})}),": create an empty stack"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"isFull()"})}),": return true if the stack is full, otherwise return false"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"isEmpty()"})}),": return true if the stack is empty, otherwise return false"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"push(new-item)"})}),": add a new item to the top of the stack"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"pop()"})}),": remove the top element from the stack and return it to the caller"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"top()"})}),": return the top element of the stack without removing it"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"-\u7528-array-\u4f86\u5be6\u4f5c-stack",children:"\ud83e\udd80 \u7528 Array \u4f86\u5be6\u4f5c Stack"}),"\n",(0,r.jsx)(E,{groupId:"programming-language",children:(0,r.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  get isEmpty() {\n    return this.items.length === 0;\n  }\n\n  get stackSize() {\n    return this.items.length;\n  }\n\n  push = (item) => {\n    this.items.push(item);\n  };\n\n  pop = () => {\n    if (this.isEmpty) {\n      return null;\n    }\n    return this.items.pop();\n  };\n\n  top = () => {\n    return this.items[this.stackSize - 1];\n  };\n\n  // isFull \u7701\u7565\n  // \u56e0\u70ba JavaScript \u7684 array size \u52d5\u614b\u7684\uff0c\u6240\u4ee5\u6c92\u6709\u7279\u5225\u8a2d\u8a08\u7684\u8a71\u5c31\u4e0d\u6703 full\n}\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"-\u7528-linked-list-\u4f86\u5be6\u4f5c-stack",children:"\ud83e\udd80 \u7528 Linked List \u4f86\u5be6\u4f5c Stack"}),"\n",(0,r.jsx)(E,{groupId:"programming-language",children:(0,r.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// a linked list node\nclass Node {\n  constructor(data, next) {\n    this.data = data;\n    this.next = next;\n  }\n}\n\n// a stack using linked list\nclass Stack {\n  constructor() {\n    this.top = null;\n    this.size = 0;\n  }\n\n  get isEmpty() {\n    return this.size === 0;\n  }\n\n  push = (item) => {\n    const newNode = new Node(item, this.top);\n    this.top = newNode;\n    this.size++;\n  };\n\n  pop = () => {\n    if (this.isEmpty) {\n      return null;\n    }\n    const poppedNode = this.top;\n    const newTopNode = this.top.next;\n    poppedNode.next = null;\n    this.top = newTopNode;\n    this.size--;\n    return poppedNode.data;\n  };\n\n  getTop = () => {\n    if (this.isEmpty) {\n      return null;\n    }\n    return this.top.data;\n  };\n}\n"})})})}),"\n",(0,r.jsx)(n.h2,{id:"-queue-\u4f47\u5217",children:"\ud83d\udc33 Queue \u4f47\u5217"}),"\n",(0,r.jsxs)(n.p,{children:["Queue \u5b58\u53d6\u8cc7\u6599\u7684\u9806\u5e8f\u662f\u63a1\u53d6\u5148\u9032\u5148\u51fa\u7684\u65b9\u5f0f\uff0c\u4e5f\u5c31\u662f ",(0,r.jsx)(n.strong,{children:"first in first out(FIFO)"}),"\u3002\u5c07\u8cc7\u6599\u5b58\u5165 Queue \u88e1\u9762\u7a31\u70ba ",(0,r.jsx)(n.code,{children:"enqueue"}),"\uff0c\u5c07\u8cc7\u6599\u5f9e Queue \u4e2d\u53d6\u51fa\u7a31\u70ba ",(0,r.jsx)(n.code,{children:"dequeue"}),"\u3002\u6982\u5ff5\u5982\u4e0b\u5716\u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(c,{src:o,caption:"\u5716\u7247\u4f86\u6e90\uff1a\u7dad\u57fa\u767e\u79d1"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"Queue ADT:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"enqueue()"})}),": adds an element to the rear of the queue"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"dequeue()"})}),": removes an element from the front of the queue"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"isEmpty()"})}),": determines whether the queue is empty"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"isFull()"})}),": determines whether the queue is full"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"first or front element"})}),": return the element at the front of the queue if it is not empty"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"-\u7528-linear-array-\u4f86\u5be6\u4f5c-queue",children:"\ud83e\udd80 \u7528 Linear Array \u4f86\u5be6\u4f5c Queue"}),"\n",(0,r.jsx)(E,{groupId:"programming-language",children:(0,r.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  get isEmpty() {\n    return this.items.length === 0;\n  }\n\n  getFront = () => {\n    return this.items[0];\n  }\n\n  enqueue = (item) => {\n    this.items.push(item);\n  };\n\n  dequeue = () => {\n    this.items.shift();\n  };\n}\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"-\u7528-circular-array-\u4f86\u5be6\u4f5c-queue",children:"\ud83e\udd80 \u7528 Circular Array \u4f86\u5be6\u4f5c Queue"}),"\n",(0,r.jsx)(E,{groupId:"programming-language",children:(0,r.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class circularQueue {\n  constructor(arraySize) {\n    this.items = new Array(arraySize);\n    this.rear = this.items.length - 1;\n    this.front = 0;\n    this.size = 0;\n  }\n\n  get isEmpty() {\n    return this.size === 0;\n  }\n\n  get isFull() {\n    return this.size === this.items.length;\n  }\n\n  enQueue = (item) => {\n    if (this.isFull) return null;\n    this.rear = (this.rear + 1) % this.items.length;\n    this.items[this.rear] = value;\n    this.size++;\n  }\n\n  deQueue = () => {\n    if (this.isEmpty) return null;\n    this.front = (this.front + 1) % this.items.length;\n    this.size--;\n  }\n\n  getFront = () => {\n    return this.isEmpty ? -1 : this.items[this.front];\n  }\n\n  getRear = () => {\n    return this.isEmpty ? -1 : this.items[this.rear];\n  }\n}\n"})})})}),"\n",(0,r.jsx)(n.h3,{id:"-\u7528-linked-list-\u4f86\u5be6\u4f5c-queue",children:"\ud83e\udd80 \u7528 Linked List \u4f86\u5be6\u4f5c Queue"}),"\n",(0,r.jsx)(E,{groupId:"programming-language",children:(0,r.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class Node {\n  constructor(data, next) {\n    this.data = data;\n    this.next = next;\n  }\n}\n\nclass Queue {\n  constructor() {\n    this.front = null;\n    this.rear = null;\n    this.size = 0;\n  }\n\n  get isEmpty() {\n    return this.size === 0;\n  }\n\n  enqueue = (item) => {\n    const newNode = new Node(item, null);\n    if (!this.front) {\n      this.front = newNode;\n      this.rear = newNode;\n    } else {\n      this.rear.next = newNode;\n      this.rear = newNode;\n    }\n    this.size++;\n  }\n\n  dequeue = () => {\n    if (!this.front) {\n      return null;\n    }\n    const dequeuedItem = this.front;\n    const nextItem = this.front.next;\n    if (this.front.data === this.rear.data) {\n      this.rear = null\n    }\n    this.front = nextItem;\n    this.size--;\n    return dequeuedItem.data;\n  }\n\n  getFront = () => {\n    return this.front.data;\n  }\n\n  getRear = () => {\n    return this.rear.data;\n  }\n}\n"})})})}),"\n",(0,r.jsx)(n.h2,{id:"-\u5be6\u969b\u61c9\u7528",children:"\ud83d\udc33 \u5be6\u969b\u61c9\u7528"}),"\n",(0,r.jsx)(n.h3,{id:"-\u524d\u7aef",children:"\ud83e\udd80 \u524d\u7aef"}),"\n",(0,r.jsx)(n.h4,{id:"stack",children:"Stack"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"error call stack"}),"\n",(0,r.jsx)(n.li,{children:"\u700f\u89bd\u5668\u7684\u6b77\u53f2\u7d00\u9304"}),"\n",(0,r.jsx)(n.li,{children:"\u6587\u672c\u6216\u662f\u5716\u7247\u7de8\u8f2f\u5668\u7684\u64cd\u4f5c\u7d00\u9304\uff08\u53ef\u4ee5\u7528\u4f86\u505a\u8907\u88fd\u5fa9\u539f\u7b49\u7b49\uff09"}),"\n",(0,r.jsx)(n.li,{children:"javascript call stack\uff08javascript \u7528\u4f86\u8655\u7406\u51fd\u6578\u57f7\u884c\u7684\u65b9\u6cd5\uff09"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"queue",children:"Queue"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u700f\u89bd\u5668\u7684\u975e\u540c\u6b65\u8655\u7406\uff08event queue / task queue\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u77e5\u529f\u80fd"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"crab-\u5176\u4ed6",children:["\ud83e\udd80"," \u5176\u4ed6"]}),"\n",(0,r.jsx)(n.h4,{id:"stack-1",children:"Stack"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"parse context-free languages"}),"\n",(0,r.jsx)(n.li,{children:"evaluate arithmetic expressions(infix, postfix, prefix)"}),"\n",(0,r.jsx)(n.li,{children:"function call, recursive call management"}),"\n",(0,r.jsx)(n.li,{children:"reverse the input data"}),"\n",(0,r.jsx)(n.li,{children:"traverse trees(preorder, inorder, postorder)"}),"\n",(0,r.jsx)(n.li,{children:"DFS graph traversal"}),"\n",(0,r.jsx)(n.li,{children:"eight queen problem"}),"\n",(0,r.jsx)(n.li,{children:"maze problem"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"queue-1",children:"Queue"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OS \u4e2d\u7684\u5404\u7a2e\u61c9\u7528\uff1aready queue\u3001waiting queue\u3001job queue\u3001I/O Derive queue etc."}),"\n",(0,r.jsx)(n.li,{children:"buffering"}),"\n",(0,r.jsx)(n.li,{children:"\u57fa\u65bc\u4f47\u5217\u7406\u8ad6\u7684\u8a08\u7b97\u6a5f\u6548\u80fd\u6a21\u64ec"}),"\n",(0,r.jsx)(n.li,{children:"\u5716\u5f62\u7684 BFS"}),"\n",(0,r.jsx)(n.li,{children:"binary tree \u7684 level order traversal"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"-resource",children:"\ud83d\udc33 Resource"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://alrightchiu.github.io/SecondRound/linked-list-introjian-jie.html",children:"Linked List: Intro(\u7c21\u4ecb)"})," by Chiu CC"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://hackmd.io/@sysprog/c-linked-list",children:"\u4f60\u6240\u4e0d\u77e5\u9053\u7684 C \u8a9e\u8a00: linked list \u548c\u975e\u9023\u7e8c\u8a18\u61b6\u9ad4"})," by jserv \u5927\u5927"]}),"\n"]})]})}function O(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);