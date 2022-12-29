"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{9058:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7294),l=a(6010),r=a(782),i=a(7524),s=a(9960),o=a(5999);const m="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var b=a(3102);function h(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return n.createElement(b.Zo,{component:h,props:e})}function v(e){let{sidebar:t}=e;const a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return n.createElement(r.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(7294),l=a(6010),r=a(2263),i=a(1944),s=a(5281),o=a(9058),m=a(9703),c=a(197),u=a(9985);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:l,blogTitle:s,permalink:o}=t,m="/"===o?a:s;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:m,description:l}),n.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(o.Z,{sidebar:l},n.createElement(u.Z,{items:a}),n.createElement(m.Z,{metadata:t}))}function p(e){return n.createElement(i.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogListPage)},n.createElement(d,e),n.createElement(g,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(5999),r=a(2244);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&n.createElement(r.Z,{permalink:i,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},390:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(7294),l=a(6010),r=a(9460),i=a(4996);function s(e){let{children:t,className:a}=e;const{frontMatter:l,assets:s}=(0,r.C)(),{withBaseUrl:o}=(0,i.C)(),m=s.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&n.createElement("meta",{itemProp:"image",content:o(m,{absolute:!0})}),t)}var o=a(9960);const m="title_f1Hy";function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:s,title:c}=a,u=i?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(m,t),itemProp:"headline"},i?c:n.createElement(o.Z,{itemProp:"url",to:s},c))}var u=a(5999),d=a(8824);const g="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function b(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:s,readingTime:o}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(E,{date:i,formattedDate:s}),void 0!==o&&n.createElement(n.Fragment,null,n.createElement(b,null),n.createElement(p,{readingTime:o})))}function f(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:i,url:s,imageURL:o,email:m}=t,c=s||m&&`mailto:${m}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},o&&n.createElement(f,{href:c,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(f,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N="authorCol_Hf19",P="imageOnlyAuthorRow_pa_O",Z="imageOnlyAuthorCol_G86a";function _(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?P:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?Z:N),key:t},n.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function k(){return n.createElement("header",null,n.createElement(c,null),n.createElement(h,null),n.createElement(_,null))}var T=a(8780),w=a(7770);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return n.createElement("div",{id:i?T.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(w.Z,null,t))}var B=a(4881),I=a(1526),y=a(7462);function L(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function A(e){const{blogPostTitle:t,...a}=e;return n.createElement(o.Z,(0,y.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(L,null))}const x="blogPostFooterDetailsFull_mRVl";function M(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:s,hasTruncateMarker:o}=e,m=!t&&o,c=a.length>0;return c||m||s?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&x)},c&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":m})},n.createElement(I.Z,{tags:a})),t&&s&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(B.Z,{editUrl:s})),m&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":c})},n.createElement(A,{blogPostTitle:i,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s,{className:(0,l.Z)(i,a)},n.createElement(k,null),n.createElement(C,null,t),n.createElement(M,null))}},9985:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(9460),r=a(390);function i(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},9460:(e,t,a)=>{a.d(t,{C:()=>s,n:()=>i});var n=a(7294),l=a(902);const r=n.createContext(null);function i(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:i},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}}}]);