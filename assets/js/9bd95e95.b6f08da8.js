"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[917],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return t?a.createElement(d,r(r({ref:n},p),{},{components:t})):a.createElement(d,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const l={},r="Objects and Functions",i={unversionedId:"\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Objects_and_Functions",id:"\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Objects_and_Functions",title:"Objects and Functions",description:"2022/06/02",source:"@site/docs/\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Objects_and_Functions.md",sourceDirName:"\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206",slug:"/\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Objects_and_Functions",permalink:"/notes/docs/\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Objects_and_Functions",draft:!1,editUrl:"https://github.com/SimoneCheng/notes/tree/main/docs/\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Objects_and_Functions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Execution Contexts & Lexical Environments",permalink:"/notes/docs/\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Execution_Contexts_and_Lexical_Environments"},next:{title:"Types and Operators",permalink:"/notes/docs/\u514b\u670dJS\u7684\u5947\u602a\u90e8\u5206/Types_and_Operators"}},s={},c=[{value:"\ud83d\udc33 Concept Asides \u540d\u8a5e\u89e3\u91cb",id:"-concept-asides-\u540d\u8a5e\u89e3\u91cb",level:2},{value:"\ud83e\udd80 Namespace",id:"-namespace",level:3},{value:"\ud83e\udd80 First Class Function",id:"-first-class-function",level:3},{value:"\ud83e\udd80 Mutate",id:"-mutate",level:3},{value:"\ud83e\udd80 Arguments",id:"-arguments",level:3},{value:"\ud83d\udc33 Objects and Dot",id:"-objects-and-dot",level:2},{value:"\ud83d\udc33 Funtcions are Objects",id:"-funtcions-are-objects",level:2},{value:"\ud83d\udc33 Function Statements and Function Expressions",id:"-function-statements-and-function-expressions",level:2},{value:"\ud83e\udd80 Function Statement \u6558\u8ff0\u5f0f",id:"-function-statement-\u6558\u8ff0\u5f0f",level:3},{value:"\ud83e\udd80 Function Expression \u8868\u9054\u5f0f",id:"-function-expression-\u8868\u9054\u5f0f",level:3},{value:"\ud83e\udd80 \u5169\u8005\u4e4b\u9593\u7684\u5dee\u5225",id:"-\u5169\u8005\u4e4b\u9593\u7684\u5dee\u5225",level:3},{value:"\ud83d\udc33 By Value and By Reference",id:"-by-value-and-by-reference",level:2},{value:"\ud83e\udd80 By Value",id:"-by-value",level:3},{value:"\ud83e\udd80 By Reference",id:"-by-reference",level:3},{value:"\ud83d\udc33 Objects, Funcitons, and <code>this</code>",id:"-objects-funcitons-and-this",level:2},{value:"\ud83d\udc33 &#39;arguments&#39; and Spread",id:"-arguments-and-spread",level:2},{value:"\ud83e\udd80 arguments",id:"-arguments-1",level:3},{value:"\ud83e\udd80 spread",id:"-spread",level:3}],p={toc:c};function u(e){let{components:n,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"objects-and-functions"},"Objects and Functions"),(0,o.kt)("p",null,"2022/06/02"),(0,o.kt)("h2",{id:"-concept-asides-\u540d\u8a5e\u89e3\u91cb"},"\ud83d\udc33 Concept Asides \u540d\u8a5e\u89e3\u91cb"),(0,o.kt)("h3",{id:"-namespace"},"\ud83e\udd80 Namespace"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A container for variables and functions.",(0,o.kt)("br",{parentName:"p"}),"\n","Typically to keep variables and function with the same name seperate.")),(0,o.kt)("p",null,"JavaScript \u672c\u8eab\u4e26\u6c92\u6709 namespace\uff0c\u4f46\u53ef\u4ee5\u900f\u904e\u5584\u7528 object \u4f86\u5132\u5b58\u76f8\u540c\u7684\u547d\u540d\u65b9\u5f0f\uff0c\u6bd4\u5982\u7528\u4e0d\u540c\u7684 object \u4f86\u5132\u5b58\u90fd\u53eb\u505a greet \u7684\u8b8a\u6578\u540d\u7a31\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const english = { greet: "Hello!" };\nconst spanish = { greet: "Hola!" };\n\nconsole.log(english.greet);\nconsole.log(spanish.greet);\n')),(0,o.kt)("h3",{id:"-first-class-function"},"\ud83e\udd80 First Class Function"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Everything you can do with other types you can do with functions.",(0,o.kt)("br",{parentName:"p"}),"\n","Assign them to variables, pass them around, create them on the fly.")),(0,o.kt)("h3",{id:"-mutate"},"\ud83e\udd80 Mutate"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To change something.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Immutable")," means it can't be changed. ")),(0,o.kt)("h3",{id:"-arguments"},"\ud83e\udd80 Arguments"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The parameters you pass to a function.",(0,o.kt)("br",{parentName:"p"}),"\n","Jacascript gives you a keyword of the same name which contains them all.")),(0,o.kt)("h2",{id:"-objects-and-dot"},"\ud83d\udc33 Objects and Dot"),(0,o.kt)("p",null,"\u5728\u524d\u9762\u7684\u5f71\u7247\u7576\u4e2d\u6709\u63d0\u5230 object \u662f\u4e00\u5c0d key\u3001value \u7684\u96c6\u5408\uff0c\u90a3\u9ebc\u5728\u8a18\u61b6\u9ad4\u7576\u4e2d\uff0cobject \u662f\u5982\u4f55\u5132\u5b58\u7684\u5462\uff1f"),(0,o.kt)("p",null,"\u4e00\u500b object \u88e1\u9762\u7684\u6240\u6709 property \u6703\u88ab\u5b58\u5728\u5404\u500b\u8a18\u61b6\u9ad4\u4f4d\u5740\uff0c\u7136\u5f8c object \u6240\u5728\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u5247\u6703\u8a18\u5f97\u6307\u5411\u5176\u4ed6 property \u88ab\u4fdd\u5b58\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u3002\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7516).Z,width:"1902",height:"984"})),(0,o.kt)("h2",{id:"-funtcions-are-objects"},"\ud83d\udc33 Funtcions are Objects"),(0,o.kt)("p",null,"\u5728 JavaScript \u7576\u4e2d function \u5c31\u662f object \u7684\u4e00\u7a2e\uff0c\u6240\u4ee5 function \u64c1\u6709\u6240\u6709 object \u7684\u7279\u6027\uff0c\u4f46\u540c\u6642 function \u4e5f\u6709\u4e00\u4e9b\u81ea\u5df1\u7684\u7279\u9ede\uff0c\u4f8b\u5982\uff1a function \u53ef\u4ee5\u662f\u533f\u540d\u7684\uff0c\u800c\u4e14 function \u6709\u4e00\u6bb5\u81ea\u5df1\u7684 code\uff08\u53ef\u4ee5\u7406\u89e3\u70ba function \u7684\u5176\u4e2d\u4e00\u500b property \u662f code\uff09\uff0c\u4e26\u4e14\u53ef\u4ee5\u900f\u904e\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," \u4f86\u57f7\u884c\u3002\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(2208).Z,width:"1854",height:"976"})),(0,o.kt)("p",null,"\u6240\u4ee5\u5176\u5be6\u9019\u6a23\u5beb\u4e5f\u662f\u884c\u5f97\u901a\u7684\uff0c\u56e0\u70ba function \u5c31\u662f object\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'function greet() {\n    console.log("Hello!");\n}\n\ngreet.lang = "english";\n\nconsole.log(greet.lang);\n')),(0,o.kt)("h2",{id:"-function-statements-and-function-expressions"},"\ud83d\udc33 Function Statements and Function Expressions"),(0,o.kt)("p",null,"\u5728 JavaScript \u7576\u4e2d\u6709\u5169\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u7528\u4f86\u5ba3\u544a function\uff0c\u5206\u5225\u662f\uff1a\u6558\u8ff0\u5f0f\uff08function statement\uff09\u548c\u8868\u9054\u5f0f\uff08function expression\uff09\u3002"),(0,o.kt)("h3",{id:"-function-statement-\u6558\u8ff0\u5f0f"},"\ud83e\udd80 Function Statement \u6558\u8ff0\u5f0f"),(0,o.kt)("p",null,"\u6558\u8ff0\u5f0f\u7684\u5beb\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greeting() {\n    console.log('hi');\n}\n")),(0,o.kt)("h3",{id:"-function-expression-\u8868\u9054\u5f0f"},"\ud83e\udd80 Function Expression \u8868\u9054\u5f0f"),(0,o.kt)("p",null,"\u8868\u9054\u5f0f\u7684\u5beb\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const greeting = function() {\n    console.log('hi');\n};\n")),(0,o.kt)("p",null,"\u6216\u662f\u7528\u7bad\u982d\u51fd\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const greeting = () => {\n    console.log('hi');\n};\n")),(0,o.kt)("h3",{id:"-\u5169\u8005\u4e4b\u9593\u7684\u5dee\u5225"},"\ud83e\udd80 \u5169\u8005\u4e4b\u9593\u7684\u5dee\u5225"),(0,o.kt)("p",null,"\u4f86\u770b\u770b\u9019\u5169\u6bb5\u7a0b\u5f0f\u78bc\u5c31\u53ef\u4ee5\u5f88\u6e05\u695a\u7684\u77e5\u9053\u6558\u8ff0\u5f0f\u548c\u8868\u9054\u5f0f\u7684\u5dee\u5225\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'greet();\n\nfunction greet() {\n    console.log("hi!");\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'greet();\n\nconst greet = function() {\n    console.log("hi!");\n};\n')),(0,o.kt)("p",null,'\u628a\u9019\u5169\u6bb5\u7a0b\u5f0f\u78bc\u4e1f\u53bb\u57f7\u884c\u7684\u8a71\uff0c\u53ef\u4ee5\u770b\u5230\u7b2c\u4e00\u500b\u90e8\u5206\u7684\u7a0b\u5f0f\u78bc\u80fd\u5920\u6210\u529f\u57f7\u884c\u4e26\u5370\u51fa "hi"\uff0c\u56e0\u70ba\u5728\u4f7f\u7528\u6558\u8ff0\u5f0f\u6642\uff0cfunction \u6703\u88ab hoisting\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c07\u57f7\u884c\u7684\u8a9e\u6cd5\u5beb\u5728\u5ba3\u544a function \u4e4b\u524d\u3002'),(0,o.kt)("p",null,"\u4f46\u662f\u5728\u57f7\u884c\u7b2c\u4e8c\u90e8\u5206\u7684\u7a0b\u5f0f\u78bc\u6642\u537b\u6703\u51fa\u932f\uff0c\u56e0\u70ba\u96d6\u7136\u7b2c\u4e8c\u6bb5\u7684\u7a0b\u5f0f\u78bc\u4e5f\u6703\u9032\u884c hoisting\uff0c\u4f46\u88ab hoisting \u7684\u53ea\u6709\u8b8a\u6578\u672c\u8eab\u800c\u5df2\uff0c\u8ce6\u503c\u9019\u500b\u52d5\u4f5c\u4e26\u4e0d\u6703\u88ab hoisting\uff0c\u6240\u4ee5\u5728\u5ba3\u543f greet \u4e4b\u524d\u5c31\u547c\u53eb\u57f7\u884c\u5b83\u7684\u8a71\uff0c greet \u6703\u9032\u5165\u66ab\u6642\u6b7b\u5340\u4e26\u4e14\u5831\u932f\uff08\u56e0\u70ba\u5728\u9019\u908a\u4f7f\u7528 const \u7684\u95dc\u4fc2\uff09\u3002"),(0,o.kt)("p",null,"\u5f9e\u9019\u500b\u4f8b\u5b50\u53ef\u4ee5\u77e5\u9053\uff0c\u6558\u8ff0\u5f0f\u548c\u8868\u9054\u5f0f\u7684\u6700\u5927\u5dee\u5225\u5c31\u662f\u5728 hoisting \u7684\u6642\u5019\u7d50\u679c\u6703\u4e0d\u592a\u4e00\u6a23\uff0c\u800c\u70ba\u4e86\u907f\u514d\u53ef\u80fd\u6703\u7522\u751f\u5831\u932f\uff0c\u76e1\u91cf\u90fd\u5728\u57f7\u884c function \u4e4b\u524d\u5148\u5ba3\u543f function \u624d\u662f\u6bd4\u8f03\u597d\u7684\u9078\u64c7\u3002"),(0,o.kt)("h2",{id:"-by-value-and-by-reference"},"\ud83d\udc33 By Value and By Reference"),(0,o.kt)("h3",{id:"-by-value"},"\ud83e\udd80 By Value"),(0,o.kt)("p",null,"\u76ee\u524d\u6709\u4e0b\u5217\u7684\u7a0b\u5f0f\u78bc\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = 1; // primitive value\nb = a;\n")),(0,o.kt)("p",null,"\u5982\u679c a \u9019\u500b\u8b8a\u6578\u7684\u503c\u662f\u4e00\u500b primitive type\uff08\u4f8b\u5982\u6578\u5b57\u3001\u5b57\u4e32\u3001\u5e03\u6797\u503c\u7b49\u7b49\uff09\u7684\u8a71\uff0c\u7576\u6211\u5011\u5c07 a \u8ce6\u503c\u7d66 b \u7684\u6642\u5019\uff0c\u5176\u5be6\u662f\u6703\u5c07 a \u7684\u503c\u8907\u88fd\u51fa\u4e00\u500b\u65b0\u7684\uff0c\u7136\u5f8c\u5c07\u5b83\u5132\u5b58\u5728\u53e6\u5916\u4e00\u500b\u65b0\u7684\u8a18\u61b6\u9ad4\u5340\u584a\uff0c\u518d\u628a\u65b0\u7684\u8a18\u61b6\u9ad4\u5340\u584a reference \u5230 b\uff0c\u5982\u4e0b\u5716\u6240\u793a\uff1a\n",(0,o.kt)("img",{src:t(1080).Z,width:"2242",height:"1296"})),(0,o.kt)("h3",{id:"-by-reference"},"\ud83e\udd80 By Reference"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u4ee5\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u70ba\u4f8b\uff0c\u4f86\u8209\u4f8b\u4ec0\u9ebc\u662f ",(0,o.kt)("strong",{parentName:"p"},"by reference"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = { firstName: 'John', LastName: 'Walker' };\nconst b = a;\n\nb.firstName = 'Ben';\nconsole.log(b.firstName);\nconsole.log(a.firstName); // a.firstName \u6703\u5370\u51fa\u4ec0\u9ebc\uff1f\n")),(0,o.kt)("p",null,"\u5f9e\u4e0a\u8ff0\u7a0b\u5f0f\u78bc\u4e2d\u53ef\u4ee5\u77e5\u9053\uff0c\u6211\u5011\u5c07 a \u9019\u500b\u8b8a\u6578\u6307\u5411\u4e00\u500b object\uff0c\u7136\u5f8c\u518d\u5c07 b \u6307\u5411 a\uff0c\u6700\u5f8c\u53bb\u4fee\u6539 b \u9019\u500b object \u88e1\u9762\u7684 property\uff0c\u4f46\u7d50\u679c\u537b\u767c\u73fe a \u88e1\u9762\u7684 property \u4e5f\u88ab\u6211\u5011\u4fee\u6539\u5230\u4e86\uff0c\u4e5f\u5c31\u662f\u8aaa\u6211\u5011\u4e0d\u7ba1\u662f\u4fee\u6539 b \u6216\u662f\u4fee\u6539 a \u90fd\u6703\u4fee\u6539\u5230\u540c\u4e00\u500b object\u3002"),(0,o.kt)("p",null,"\u70ba\u4ec0\u9ebc\u6703\u767c\u751f\u4e0a\u8ff0\u9019\u4ef6\u4e8b\u5462\uff1f\u662f\u56e0\u70ba\u7576\u8cc7\u6599\u578b\u614b\u662f reference type (object, array...) \u7684\u6642\u5019\uff0cJavaScript \u662f\u900f\u904e ",(0,o.kt)("strong",{parentName:"p"},"by reference")," \u53bb\u50b3\u905e\u53c3\u6578\u7684\uff0c\u4e5f\u5c31\u662f\u5982\u4e0b\u5716\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(4731).Z,width:"1802",height:"1260"})),(0,o.kt)("p",null,"\u5176\u5be6 a \u548c b \u9019\u5169\u500b\u8b8a\u6578\u90fd\u6307\u5411\u540c\u4e00\u500b\u8a18\u61b6\u9ad4\u5340\u584a\uff08\u4e5f\u5c31\u662f object \u7684\u6240\u5728\u4f4d\u7f6e\uff09\uff0c\u6240\u4ee5\u4e0d\u7ba1\u662f\u900f\u904e a \u6216 b \u4f86\u4fee\u6539 object\uff0c\u90fd\u662f\u4fee\u6539\u5230\u540c\u6a23\u7684\u6771\u897f\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5c0f\u5c0f\u7d50\u8ad6"),"\uff1a\u77e5\u9053 ",(0,o.kt)("strong",{parentName:"p"},"by value")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"by reference")," \u7684\u5dee\u5225\uff0c\u6709\u52a9\u65bc\u7a0b\u5f0f\u958b\u767c\u548c\u9664\u932f\u3002\u5728\u9019\u908a\u6703\u8a0e\u8ad6\u5230 ",(0,o.kt)("strong",{parentName:"p"},"by value")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"by reference")," \u7684\u5dee\u5225\u4e3b\u8981\u662f\u56e0\u70ba\uff0c\u7576\u6211\u5011\u5728\u9032\u884c\u7a0b\u5f0f\u958b\u767c\u6216\u662f\u9664\u932f\u7684\u6642\u5019\uff0c\u6703\u9700\u8981\u8655\u7406\u975e\u5e38\u591a\u5404\u5f0f\u5404\u6a23\u7684\u8cc7\u6599\u578b\u614b\u3002\u7576\u5982\u679c\u4e0d\u5c0f\u5fc3\u6539\u52d5\u7684\u539f\u672c\u7684\u8cc7\u6599\u6642\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u67d0\u4e9b function \u51fa\u932f\uff0c\u6b64\u6642\u77e5\u9053 ",(0,o.kt)("strong",{parentName:"p"},"by value")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"by referenct")," \u7684\u5dee\u7570\u53ef\u4ee5\u66f4\u597d\u7684\u53bb\u907f\u514d\u6539\u52d5\u5230\u539f\u59cb\u8cc7\u6599\uff0c\u964d\u4f4e\u7522\u751f bug \u7684\u6a5f\u7387\uff01")),(0,o.kt)("h2",{id:"-objects-funcitons-and-this"},"\ud83d\udc33 Objects, Funcitons, and ",(0,o.kt)("inlineCode",{parentName:"h2"},"this")),(0,o.kt)("p",null,"\u524d\u9762\u7684\u5e7e\u90e8\u5f71\u7247\u6709\u63d0\u5230 function \u5728\u57f7\u884c\u7684\u6642\u5019\uff0c\u6703\u6709\u4e00\u500b funciton \u81ea\u5df1\u7684 execute content \u548c variable environment\uff0c\u4e26\u900f\u904e scope chain \u53bb\u62ff\u5230 outer environment \u7684\u8b8a\u6578\uff0c\u9664\u6b64\u4e4b\u5916\u9084\u6703\u6709\u4e00\u500b\u6771\u897f\u2014\u2014\u53eb\u505a ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u63a5\u4e0b\u4f86\u9019\u500b\u90e8\u5206\u6703\u7279\u5225\u91dd\u5c0d ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u4f86\u505a\u8aaa\u660e\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u5148\u4f86\u770b\u770b\u5e7e\u500b\u7c21\u55ae\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(this);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function a() {\n    console.log(this);\n}\n\na();\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const b = funciton() {\n    console.log(this);\n}\n\nb();\n")),(0,o.kt)("p",null,"\u5982\u679c\u6211\u5011\u5c07\u4e0a\u8ff0\u4e09\u500b\u7a0b\u5f0f\u78bc\u653e\u5230\u700f\u89bd\u5668\u7576\u4e2d\u53bb\u57f7\u884c\u7684\u8a71\uff0c\u53ef\u4ee5\u77e5\u9053\u9019\u4e09\u500b\u5370\u51fa\u4f86\u7684\u6771\u897f\u90fd\u662f window\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0c\u6309\u7167\u4e0a\u9762\u7684\u65b9\u5f0f\uff08\u5beb\u5728 function \u7576\u4e2d\u7136\u5f8c\u76f4\u63a5\u57f7\u884c\uff0c\u6216\u662f\u76f4\u63a5\u57f7\u884c\uff09\u53bb\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5b83\u6240\u6307\u5411\u7684\u6771\u897f\u90fd\u662f window \u9019\u500b global object\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u8a66\u8a66\u7528\u5728 object \u88e1\u9762\u5efa\u7acb method \u7684\u65b9\u5f0f\u4f86\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const c = {\n    name: 'The c object',\n    log: function() {\n      console.log(this);\n    },\n};\n\nc.log();\n")),(0,o.kt)("p",null,"\u7576\u6211\u5011\u5c07\u4e0a\u8ff0\u7684\u7a0b\u5f0f\u78bc\u4e1f\u5230\u700f\u89bd\u5668\u7684\u74b0\u5883\u4e2d\u57f7\u884c\u6642\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u5370\u51fa c \u9019\u500b object\uff0c\u4e5f\u5c31\u662f\u8aaa\u900f\u904e\u4e00\u500b object \u4f86\u547c\u53eb\u5176\u4e2d\u7684 method \u7684\u8a71\uff0c\u6b64\u6642\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u6307\u5411\u8a72 object\u3002\u63a5\u4e0b\u4f86\u6211\u5011\u7e7c\u7e8c\u770b\u770b\u4e0b\u4e00\u500b\u7bc4\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const c = {\n    name: 'The c object',\n    log: function() {\n        console.log(this);\n\n        const setName = function(newName) {\n            this.name = newName;\n        }\n\n        setName('Update c object!');\n        console.log(this);\n    },\n};\n\nc.log();\n")),(0,o.kt)("p",null,"\u6309\u7167\u4e0a\u4e0a\u4e00\u500b\u7a0b\u5f0f\u78bc\u7bc4\u4f8b\u7684\u8a8d\u77e5\uff0c\u5982\u679c\u5728\u4e00\u500b object method \u88e1\u9762\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u90a3\u9ebc ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u5c31\u6703\u6307\u5411\u8a72 object\uff0c\u4f46\u7576\u6211\u5011\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"c.log()")," \u4e4b\u5f8c\uff0c\u88e1\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"setName")," function \u4f3c\u4e4e\u4e26\u6c92\u6709\u6210\u529f\u5730\u5e6b\u6211\u5011\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"c.name")," \u4fee\u6539\u6210\u65b0\u7684\u540d\u5b57\u3002\u53cd\u800c\u5728 window \u9019\u500b global object \u4e0b\u9762\uff0c\u627e\u5230\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"window.name === 'Update c object'"),"\u3002\u4e5f\u5c31\u662f\u8aaa ",(0,o.kt)("inlineCode",{parentName:"p"},"setName")," function \u88e1\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u662f\u6307\u5411 window\uff0c\u4e26\u4e0d\u662f\u6307\u5411 object c\u3002"),(0,o.kt)("p",null,"\u70ba\u4e86\u8981\u8b93 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u80fd\u5920\u4e00\u76f4\u6307\u5411 object c\uff0c\u6211\u5011\u53ef\u4ee5\u628a\u7a0b\u5f0f\u78bc\u4fee\u6539\u6210\u4e0b\u9762\u9019\u6a23\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const c = {\n    name: 'The c object',\n    log: function() {\n        const self = this; // \u591a\u52a0\u9019\u4e00\u884c\uff0c\u7136\u5f8c\u6240\u6709\u7684 this \u90fd\u6539\u7528 self\n        console.log(self);\n\n        const setName = function(newName) {\n            self.name = newName;\n        }\n\n        setName('Update c object!');\n        console.log(self);\n    },\n};\n\nc.log();\n")),(0,o.kt)("p",null,"\u53ea\u8981\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u8ce6\u503c\u7d66\u4e00\u500b\u8b8a\u6578\u5f8c\uff0c\u7136\u5f8c\u5728\u5176\u4ed6\u6240\u6709\u6709\u7528\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u7684\u5730\u65b9\u90fd\u6539\u7528\u8a72\u8b8a\u6578\uff0c \u9019\u6a23\u5beb\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"c.log()")," \u88e1\u9762\u7684\u4efb\u4f55 function \u90fd\u80fd\u5920\u900f\u904e scope chain \u53bb\u627e\u5230\u8a72\u8b8a\u6578\u6307\u5411\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u4e86\uff08\u4e5f\u5c31\u662f object c\uff09\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5c0f\u5c0f\u7d50\u8ad6"),"\uff1a\u5982\u679c\u5728 function \u88e1\u9762\u547c\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u7136\u5f8c\u5728 global \u7576\u4e2d\u57f7\u884c\uff0c\u901a\u5e38 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u6307\u5411 window\uff0c\u5982\u679c\u662f\u547c\u53eb\u653e\u5728 object \u7576\u4e2d\u7684 function \u7684\u8a71\uff0c\u547c\u53eb\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u5247\u6703\u6307\u5411\u8a72 object\uff0c\u4f46\u5982\u679c\u662f\u5728 object \u7684 function \u4e2d\u9084\u6709\u53e6\u4e00\u500b\u5167\u90e8\u7684 function\uff0c\u9019\u500b\u5167\u90e8\u7684 function \u547c\u53eb\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u6703\u6307\u5411 window\uff0c\u70ba\u4e86\u907f\u514d\u9019\u6a23\u7684 bug\uff0c\u53ef\u4ee5\u5148\u5728 object function \u88e1\u9762\u7684\u6700\u4e0a\u65b9\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u8ce6\u503c\u7d66\u67d0\u500b\u8b8a\u6578\uff08\u901a\u5e38\u6703\u5beb\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"const self = this"),"\uff09\u3002")),(0,o.kt)("h2",{id:"-arguments-and-spread"},"\ud83d\udc33 'arguments' and Spread"),(0,o.kt)("h3",{id:"-arguments-1"},"\ud83e\udd80 arguments"),(0,o.kt)("p",null,"\u5728\u958b\u59cb\u8aaa\u660e\u4ec0\u9ebc\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," \u4e4b\u524d\uff0c\u6211\u5011\u5148\u4f86\u770b\u4e00\u500b\u666e\u901a\u7684 function\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(firstName, lastName, language) {\n    console.log(firstName);\n    console.log(lastName);\n    console.log(language);\n    console.log('----------');\n}\n\ngreet();\ngreet('John');\ngreet('John', 'Doe');\ngreet('John', 'Doe', 'en');\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684 function \u7576\u4e2d\uff0c\u96d6\u7136 ",(0,o.kt)("inlineCode",{parentName:"p"},"greet()")," \u9019\u500b function \u9700\u8981\u50b3\u4e09\u500b\u8b8a\u6578\u9032\u53bb\uff0c\u4f46\u5982\u679c\u5c11\u50b3\u4e86\u4efb\u4f55\u4e00\u500b\uff0cJavascript \u4e26\u4e0d\u6703\u5831\u932f\uff0c\u800c\u662f\u6703\u5c07\u6c92\u6709\u50b3\u5165\u4efb\u4f55\u503c\u7684\u8b8a\u6578\u9810\u8a2d\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\u800c\u9019\u6a23\u7684\u7279\u6027\u4e5f\u5c31\u8868\u793a\uff0c\u53ef\u4ee5\u5f88\u7c21\u55ae\u7684\u5c0d\u4e00\u500b\u8b8a\u6578\u8a2d\u7f6e\u4e00\u500b\u9810\u8a2d\u503c\uff0c\u6bd4\u5982\uff0c\u5982\u679c\u6c92\u6709\u50b3 ",(0,o.kt)("inlineCode",{parentName:"p"},"language")," \u9019\u500b\u8b8a\u6578\u9032\u53bb\u7684\u8a71\uff0c\u5148\u5c07\u5176\u9810\u8a2d\u503c\u8a2d\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"'en'"),"\uff0c\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(firstName, lastName, language = 'en') {\n    console.log(firstName);\n    console.log(lastName);\n    console.log(language);\n    console.log('----------');\n}\n")),(0,o.kt)("p",null,"\u6216\u662f\u6bd4\u8f03\u820a\u7684\u5beb\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(firstName, lastName, language) {\n    language = language || 'en';\n\n    console.log(firstName);\n    console.log(lastName);\n    console.log(language);\n    console.log('----------');\n}\n")),(0,o.kt)("p",null,"\u5728\u4e00\u500b function \u7576\u4e2d\uff0c\u9664\u4e86\u50b3\u9032\u53bb\u7684\u8b8a\u6578\u4e4b\u5916\uff0cJavascript \u4e5f\u63d0\u4f9b\u4e86\u4e00\u500b\u7a31\u4f5c ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," \u7684\u8b8a\u6578\u4f86\u63a5\u6536\u50b3\u9032\u4f86\u7684\u6240\u6709\u8b8a\u6578\u3002\u6b64\u6642\u6211\u5011\u53ef\u4ee5\u4f86\u628a\u4e0a\u8ff0\u7684 function \u6539\u9020\u4e00\u4e0b\uff0c\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," \u52a0\u9032\u53bb\uff0c\u7136\u5f8c\u770b\u770b\u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\u60c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(firstName, lastName, language) {\n    console.log(firstName);\n    console.log(lastName);\n    console.log(language);\n    console.log(arguments); // \u5c07 Javascript \u5167\u5efa\u7684 arguments \u52a0\u5165\n    console.log('----------');\n}\n\ngreet();\ngreet('John');\ngreet('John', 'Doe');\ngreet('John', 'Doe', 'en');\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u57f7\u884c\u56db\u904d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"greet()")," \u5206\u5225\u5370\u51fa\u4e86\u4ee5\u4e0b\u56db\u500b\u4e0d\u540c\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[]\n['John']\n['John', 'Doe']\n['John', 'Doe', 'en']\n")),(0,o.kt)("p",null,"\u5f9e\u5370\u51fa\u7684\u7d50\u679c\u7576\u4e2d\u53ef\u4ee5\u77e5\u9053 ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," \u662f\u4e00\u500b\u53ef\u4ee5\u6536\u96c6\u6240\u6709\u50b3\u9032 function \u7684\u8b8a\u6578\u7684\u985e array\uff0c\u70ba\u4ec0\u9ebc\u6703\u8aaa\u5b83\u662f\u985e array \u662f\u56e0\u70ba\u5b83\u9577\u5f97\u5f88\u50cf array\uff0c\u53ef\u4ee5\u505a\u5230\u4e00\u4e9b\u8ddf array \u5f88\u50cf\u7684\u4e8b\u60c5\uff0c\u4f46 array \u7684\u67d0\u4e9b\u7279\u6027\u5b83\u6c92\u6709\u3002"),(0,o.kt)("p",null,"\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," \u4f86\u505a\u4e00\u4e9b\u4e8b\u60c5\uff0c\u6bd4\u5982\u53ef\u4ee5\u6aa2\u67e5\u6709\u6c92\u6709\u8b8a\u6578\u50b3\u9032\u4f86\uff0c\u5982\u679c\u6c92\u6709\u5c31\u5831\u932f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(firstName, lastName, language) {\n    if (arguments.length === 0) {\n        console.log('Missing parameters');\n        return;\n    }\n    console.log(firstName);\n    console.log(lastName);\n    console.log(language);\n    console.log(arguments); // \u5c07 Javascript \u5167\u5efa\u7684 arguments \u52a0\u5165\n    console.log('----------');\n}\n")),(0,o.kt)("h3",{id:"-spread"},"\ud83e\udd80 spread"),(0,o.kt)("p",null,"spread \u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u5f88\u5e38\u770b\u5230\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"..."),"\u3002\u800c\u9019\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," \u5be6\u969b\u4e0a\u6709\u4ec0\u9ebc\u7528\u9014\u5462\uff1f\u76ee\u524d\u6211\u6240\u77e5\u9053\u7684\u7528\u6cd5\u4e3b\u8981\u6709\u4e09\u500b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u50b3\u5165\u67d0\u500b function \u7684\u8b8a\u6578\u53ef\u80fd\u662fOO\u500b\u548cOO\u500b\u4ee5\u4e0a\uff0c\u9019\u500b\u300c\u4ee5\u4e0a\u300d\u7684\u90e8\u5206\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"...")," \u5305\u8d77\u4f86\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u7528\u4f86\u89e3\u69cb array\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u7528\u4f86\u89e3\u69cb object\u3002")),(0,o.kt)("p",null,"\u5ee2\u8a71\u4e0d\u591a\u8aaa\uff0c\u76f4\u63a5\u7528\u5be6\u969b\u7684\u4f8b\u5b50\u4f86\u770b\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function greet(firstName, lastName, language, ...others) {\n    console.log(firstName);\n    console.log(lastName);\n    console.log(language);\n    console.log(others);\n}\n\ngreet('John', 'Doe', 'en', 1, 2, 3, 4);\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u7684\u4f8b\u5b50\uff0c\u53ef\u4ee5\u770b\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"others")," \u9019\u500b\u8b8a\u6578\u5370\u51fa\u4e86 ","[1, 2, 3, 4]","\uff0c\u9019\u4e5f\u5c31\u662f\u8aaa\u5b83\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName, lastName, language")," \u4e4b\u5916\u7684\u503c\u90fd\u5305\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"others")," \u9019\u500b array \u88e1\u9762\uff0c\u9019\u4e5f\u5c31\u662f\u8868\u793a\u9019\u500b function \u53ef\u4ee5\u50b3\u5165\u4e09\u500b\u6216\u4e09\u500b\u4ee5\u4e0a\u7684\u503c\u3002"),(0,o.kt)("p",null,"\u63a5\u8457\u4f86\u770b\u770b\u89e3\u69cb\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst arr2 = [...arr1];\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u8ff0\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u53ef\u4ee5\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," \u62ff\u5230 arr1 \u88e1\u9762\u7684\u6bcf\u500b\u5143\u7d20\uff0c\u7136\u5f8c\u518d\u628a\u5b83\u653e\u5230 arr2 \u4f86\u9054\u5230\u6dfa\u62f7\u8c9d\u3002\u7528\u5728 object \u7576\u4e2d\u4e5f\u662f\u540c\u6a23\u7684\u9053\u7406\u3002\u5982\u6b64\u4e00\u4f86\u4fbf\u53ef\u4ee5\u8f15\u9b06\u9054\u5230\u6dfa\u62f7\u8c9d\u3002"))}u.isMDXComponent=!0},4731:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/byreference-2b142ca6e0bcf311b3b0814468f1d308.png"},1080:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/byvalue-ed39b520a938fb9ab6ec16a773324a10.png"},2208:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/function-849c84bf3ce6e3ed0763afd69a815815.png"},7516:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/object-2235ac398b5bec190edf759a263c8c91.png"}}]);