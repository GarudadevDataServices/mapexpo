(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1683:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(2265),a=r(4275),s=r.n(a),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))u.call(t,r)&&h(e,r,t[r]);return e},p=(e,t)=>i(e,c(t)),g=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r},y=(e,t,r)=>{let a=(0,n.forwardRef)((t,a)=>{var{color:s="currentColor",size:l=24,stroke:i=2,children:c}=t,d=g(t,["color","size","stroke","children"]);return(0,n.createElement)("svg",f(p(f({ref:a},o),{width:l,height:l,stroke:s,strokeWidth:i,className:`tabler-icon tabler-icon-${e}`}),d),[...r.map(([e,t])=>(0,n.createElement)(e,t)),...c||[]])});return a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number]),stroke:s().oneOfType([s().string,s().number])},a.displayName=`${t}`,a}},2081:function(e,t,r){Promise.resolve().then(r.t.bind(r,4504,23)),Promise.resolve().then(r.t.bind(r,4249,23)),Promise.resolve().then(r.bind(r,5576)),Promise.resolve().then(r.bind(r,1924))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return i},default:function(){return c}});let n=r(1024),a=r(8630),s=r(6184),o=r(1749),l=n._(r(536)),i=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/mapexpo/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=o.Image},5576:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7437),a=r(2265);let s=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,a.createContext)(void 0),c=e=>(0,a.useContext)(i)?a.createElement(a.Fragment,null,e.children):a.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:l="theme",themes:c=d,defaultTheme:m=r?"system":"light",attribute:g="data-theme",value:y,children:b,nonce:v})=>{let[x,k]=(0,a.useState)(()=>h(l,m)),[w,_]=(0,a.useState)(()=>h(l)),j=y?Object.values(y):c,O=(0,a.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&r&&(a=p());let o=y?y[a]:a,l=t?f():null,i=document.documentElement;if("class"===g?(i.classList.remove(...j),o&&i.classList.add(o)):o?i.setAttribute(g,o):i.removeAttribute(g),n){let e=s.includes(m)?m:null,t=s.includes(a)?a:e;i.style.colorScheme=t}null==l||l()},[]),S=(0,a.useCallback)(e=>{k(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),T=(0,a.useCallback)(t=>{_(p(t)),"system"===x&&r&&!e&&O("system")},[x,e]);(0,a.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,a.useEffect)(()=>{let e=e=>{e.key===l&&S(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,a.useEffect)(()=>{O(null!=e?e:x)},[e,x]);let N=(0,a.useMemo)(()=>({theme:x,setTheme:S,forcedTheme:e,resolvedTheme:"system"===x?w:x,themes:r?[...c,"system"]:c,systemTheme:r?w:void 0}),[x,S,e,w,r,c]);return a.createElement(i.Provider,{value:N},a.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:n,storageKey:l,themes:c,defaultTheme:m,attribute:g,value:y,children:b,attrs:j,nonce:v}),b)},u=(0,a.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,enableColorScheme:l,defaultTheme:i,value:c,attrs:d,nonce:m})=>{let u="system"===i,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=l?s.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,n=!0)=>{let a=c?c[e]:e,o=t?e+"|| ''":`'${a}'`,i="";return l&&n&&!t&&s.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===r?i+=t||a?`c.add(${o})`:"null":a&&(i+=`d[s](n,${o})`),i},g=e?`!function(){${h}${p(e)}}()`:n?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${u?"":"else{"+p(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${f}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})},()=>!0),h=(e,t)=>{let r;if(!l){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light");var g=e=>{let{children:t}=e;return(0,n.jsx)(c,{attribute:"class",disableTransitionOnChange:!0,children:t})}},1924:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7437),a=r(2265),s=r(1683),o=(0,s.Z)("rss","IconRss",[["path",{d:"M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"svg-1"}],["path",{d:"M4 11a9 9 0 0 1 9 9",key:"svg-2"}]]),l=r(1396),i=r.n(l),c=r(6691),d=r.n(c),m=()=>(0,n.jsxs)("span",{className:"md:ml-2 gap-[3px] flex items-center self-center whitespace-nowrap text-xl font-bold text-gray-900 dark:text-white md:text-base",children:[(0,n.jsx)(d(),{src:"/mapexpo//_next/static/media/logo.f8de5a76.ico",alt:"Logo",height:40,width:40,className:"-mb-[3px]"}),"MapExpo"]}),u=(0,s.Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]),h=(0,s.Z)("menu","IconMenu",[["path",{d:"M4 8l16 0",key:"svg-0"}],["path",{d:"M4 16l16 0",key:"svg-1"}]]),f=e=>{let{handleToggleMenuOnClick:t,isToggleMenuOpen:r}=e;return(0,n.jsx)("button",{type:"button",className:"ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700","aria-label":"Toggle Menu",onClick:t,children:r?(0,n.jsx)(u,{className:"h-6 w-6"}):(0,n.jsx)(h,{className:"h-6 w-6"})})};(0,s.Z)("brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]),(0,s.Z)("mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]),(0,s.Z)("brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]),(0,s.Z)("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]),(0,s.Z)("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]);let p={links:[{label:"Data Source",href:"/source"},{label:"About Us",href:"https://akuladatta.github.io"}],actions:[{text:"Download",href:"https://github.com/onwidget/tailnext",targetBlank:!0}],isSticky:!0,showToggleTheme:!0,showRssFeed:!1,position:"right"};var g=()=>{let{links:e,isSticky:t,showRssFeed:r,position:s}=p,l=e&&e.map(()=>!1),[c,d]=(0,a.useState)(l),[u,h]=(0,a.useState)(!1),g=e=>{d(t=>{let r=[...t];return r.forEach((t,n)=>{!0===t?r[n]=!1:r[n]=n===e}),r})},y=e=>{d(t=>{let r=[...t];return r[e]=!1,r})},b=()=>{h(!u)};return(0,n.jsx)("header",{className:"bg-white border-b-2 shadow-lg rounded-md top-0 z-40 mx-auto w-full flex-none  transition-all duration-100 ease-in dark:bg-slate-900 md:backdrop-blur-sm dark:md:bg-slate-900/90 ".concat(t?"sticky":"relative"),id:"header",children:(0,n.jsxs)("div",{className:"mx-auto w-full max-w-7xl md:flex md:justify-between  md:px-4",children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)(i(),{className:"flex items-center",href:"/",onClick:()=>u?b():d(l),children:(0,n.jsx)(m,{})}),(0,n.jsx)("div",{className:"flex items-center md:hidden",children:(0,n.jsx)(f,{handleToggleMenuOnClick:b,isToggleMenuOpen:u})})]}),(0,n.jsx)("nav",{className:"".concat(u?"block":"hidden"," h-screen md:w-full ").concat("right"===s?"justify-end":"left"===s?"justify-start":"justify-center"," w-auto overflow-y-auto dark:text-slate-200 md:mx-5 md:flex md:h-auto md:items-center md:overflow-visible"),"aria-label":"Main navigation",children:(0,n.jsx)("ul",{className:"text-xs flex w-full flex-col pt-8 md:w-auto md:flex-row md:self-center md:pt-0",children:e&&e.map((e,t)=>{let{label:r,href:a,icon:s,links:o}=e;return(0,n.jsx)("li",{className:(null==o?void 0:o.length)?"dropdown":"",children:o&&o.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{className:"flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white",onClick:()=>g(t),children:[r," ",s&&(0,n.jsx)(s,{className:"ml-0.5 hidden h-3.5 w-3.5 md:inline"})]}),(0,n.jsx)("ul",{className:"".concat(c[t]?"block":"md:hidden"," rounded pl-4 font-medium drop-shadow-xl md:absolute md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-900/90"),children:o.map((e,r)=>{let{label:a,href:s}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(i(),{className:"whitespace-no-wrap block py-2 px-5 first:rounded-t last:rounded-b dark:hover:bg-gray-700 md:hover:bg-gray-200",href:s,onClick:()=>u?b():y(t),children:a})},"item-link-".concat(r))})})]}):(0,n.jsx)(i(),{className:"flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900 dark:hover:text-white",href:a,onClick:()=>u?b():g(t),children:r})},"item-link-".concat(t))})})}),(0,n.jsx)("div",{className:"".concat(u?"block":"hidden"," fixed bottom-0 left-0 w-full justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0"),children:(0,n.jsx)("div",{className:"flex w-full items-center justify-between md:w-auto",children:r&&(0,n.jsx)(i(),{className:"text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700","aria-label":"RSS Feed",href:"",children:(0,n.jsx)(o,{className:"h-5 w-5"})})})})]})})}},4249:function(){},4504:function(e){e.exports={style:{fontFamily:"'__Inter_aae159', '__Inter_Fallback_aae159'",fontStyle:"normal"},className:"__className_aae159",variable:"__variable_aae159"}},622:function(e,t,r){"use strict";var n=r(2265),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(7447)},1396:function(e,t,r){e.exports=r(5250)},3018:function(e,t,r){"use strict";var n=r(1289);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,s,o){if(o!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return r.PropTypes=r,r}},4275:function(e,t,r){e.exports=r(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[250,749,971,938,744],function(){return e(e.s=2081)}),_N_E=e.O()}]);