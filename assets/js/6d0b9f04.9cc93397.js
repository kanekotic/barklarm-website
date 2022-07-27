"use strict";(self.webpackChunkbarklarm_website=self.webpackChunkbarklarm_website||[]).push([[6007],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),f=l(n),m=o,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(b,a(a({ref:e},s),{},{components:n})):r.createElement(b,a({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},198:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:1},u="Github Actions",l={unversionedId:"configuration/github-actions",id:"configuration/github-actions",title:"Github Actions",description:"Github",source:"@site/docs/configuration/github-actions.md",sourceDirName:"configuration",slug:"/configuration/github-actions",permalink:"/docs/configuration/github-actions",draft:!1,editUrl:"https://github.com/kanekotic/barklarm-website/tree/main/docs/configuration/github-actions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration/"},next:{title:"CCTray",permalink:"/docs/configuration/cctray/"}},s={},p=[],f={toc:p};function m(t){var e=t.components,c=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-actions"},"Github Actions"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Github",src:n(4308).Z,width:"847",height:"794"})),(0,i.kt)("p",null,"The github configuration requires:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Owner (Mandatory)"),": github handle of the user or organization the project belongs to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repo (Mandatory)"),": name of the repository that the pipeline belongs to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Workflow Name (Mandatory)"),": name of the pipeline file that is used to track the build."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authorization token (Mandatory)"),": this is personal access token used to access the project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Alias (Optional)"),": A friendly name to display in the tray list.")),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("strong",{parentName:"p"},"delete button")," to remove this configuration from the list."))}m.isMDXComponent=!0},4308:function(t,e,n){e.Z=n.p+"assets/images/github-3df31cd3eea780506cc28dc2a67366e8.jpeg"}}]);