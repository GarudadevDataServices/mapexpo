(()=>{var e={};e.id=254,e.ids=[254],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},4300:e=>{"use strict";e.exports=require("buffer")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},6687:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=n(482),s=n(9108),i=n(2563),o=n.n(i),a=n(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);n.d(t,l);let d=["",{children:["(blog)",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1901)),"E:\\Downloads\\tailnext-main\\tailnext-main\\app\\(blog)\\blog\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,273)),"E:\\Downloads\\tailnext-main\\tailnext-main\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"]}],c=["E:\\Downloads\\tailnext-main\\tailnext-main\\app\\(blog)\\blog\\page.tsx"],x="/(blog)/blog/page",p={require:n,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(blog)/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},539:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1900,23)),Promise.resolve().then(n.t.bind(n,1476,23))},1901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c,metadata:()=>d});var r=n(5036),s=n(5904),i=n.n(s),o=n(646),a=n.n(o),l=n(1137);let d={title:"Blog"};async function c({}){let e=await (0,l.eO)();return(0,r.jsxs)("section",{className:"mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20",children:[r.jsx("header",{children:r.jsx("h1",{className:"leading-tighter font-heading mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl",children:"Blog"})}),r.jsx("div",{className:"grid grid-cols-1 gap-6  p-4 md:p-0 lg:grid-cols-2",children:e.map(({slug:e,title:t,image:n})=>r.jsx("div",{className:"flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg",children:(0,r.jsxs)(a(),{href:`/${e}`,children:[r.jsx(i(),{width:650,height:340,alt:t,src:`${n}`}),r.jsx("h2",{className:"p-4 font-bold",children:t})]})},e))})]})}},8026:(e,t,n)=>{let{createProxy:r}=n(6843);e.exports=r("E:\\Downloads\\tailnext-main\\tailnext-main\\node_modules\\next\\dist\\client\\link.js")},646:(e,t,n)=>{e.exports=n(8026)},1137:(e,t,n)=>{"use strict";let r;n.d(t,{Uv:()=>u,eO:()=>p});var s=n(7147),i=n.n(s),o=n(5770),a=n.n(o),l=n(1017);let d=(0,l.join)(process.cwd(),"src/content/blog"),c=()=>{},x=async()=>(r=r||c(),await r),p=async({count:e}={})=>{let t=await x();return t?t.slice(-1*(e||4)):[]},u=async e=>{if(!e)return null;try{let t=i().readFileSync((0,l.join)(d,`${e}.md`),"utf-8"),{data:n,content:r}=a()(t);return{slug:e,...n,content:r}}catch(e){}return null}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[945,904,770,752],()=>n(6687));module.exports=r})();