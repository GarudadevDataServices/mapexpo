(()=>{var e={};e.id=419,e.ids=[419],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},7360:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>c,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>o});var i=s(482),a=s(9108),r=s(2563),l=s.n(r),n=s(8300),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);s.d(t,u);let o=["",{children:["(pages)",{children:["faqs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4617)),"E:\\Downloads\\tailnext-main\\tailnext-main\\app\\(pages)\\faqs\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,273)),"E:\\Downloads\\tailnext-main\\tailnext-main\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],d=["E:\\Downloads\\tailnext-main\\tailnext-main\\app\\(pages)\\faqs\\page.tsx"],m="/(pages)/faqs/page",c={require:s,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(pages)/faqs/page",pathname:"/faqs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},4935:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,1900,23)),Promise.resolve().then(s.t.bind(s,1476,23)),Promise.resolve().then(s.bind(s,7223))},2401:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var i=(0,s(5875).Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},8370:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var i=(0,s(5875).Z)("chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},1252:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var i=s(2295),a=s(8370),r=s(2401),l=s(3729);let n=()=>{let[e,t]=(0,l.useState)(!0),[s,i]=(0,l.useState)(void 0);return{activeIndex:s,handleSetIndex:a=>{s!==a?i(a):i(void 0),t(!e)}}},u=({items:e,classCollapseItem:t,iconUp:s,iconDown:l})=>{let{activeIndex:u,handleSetIndex:o}=n();return i.jsx(i.Fragment,{children:e.map(({title:e,description:n},d)=>i.jsx("div",{onClick:()=>o(d),className:"mx-auto max-w-3xl select-none bg-transparent text-base text-gray-700",children:(0,i.jsxs)("div",{className:t,children:[(0,i.jsxs)("div",{className:"align-center flex justify-between",id:`accordion__heading-${d}`,"aria-disabled":"false","aria-expanded":"false","aria-controls":`accordion__panel-${d}`,role:"button",children:[i.jsx("h2",{className:"w-full pr-2 text-lg font-medium leading-6 text-gray-900 dark:text-slate-300",children:e}),l&&s?u===d?s:l:u===d?i.jsx(a.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):i.jsx(r.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),u===d&&i.jsx("div",{className:"mt-3 select-none","aria-labelledby":`accordion__heading-${d}`,id:`accordion__panel-${d}`,children:i.jsx("p",{className:"mt-2 text-gray-600 dark:text-slate-400",children:n})})]})},`accordion-${d}`))})}},7663:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(2295),a=s(9377);let r=({header:e,containerClass:t,titleClass:s,subtitleClass:r})=>{let{title:l,subtitle:n,tagline:u,position:o}=e;return i.jsx("div",{className:"mb-4",children:(l||n||u)&&(0,i.jsxs)("div",{className:(0,a.m6)(`mb-6 mx-auto md:mb-12 ${"left"===o?"text-left ml-0":"right"===o?"text-right mr-0":"text-center"}`,t),children:[u&&i.jsx("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:u}),l&&i.jsx("h2",{className:(0,a.m6)("font-heading mb-4 font-bold tracking-tight",s),children:l}),n&&i.jsx("p",{className:(0,a.m6)(`mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ${"left"===o?"text-left ml-0":"right"===o?"text-right mr-0":"text-center"}`,r),children:n})]})})}},7026:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s(2295),a=s(9377);let r=({children:e,isDark:t})=>i.jsx("div",{className:`absolute inset-0 ${t?"bg-transparent":"bg-primary-50 dark:bg-slate-800"}`,children:e}),l=({children:e,id:t,isDark:s,containerClass:l})=>(0,i.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:t,children:[i.jsx("div",{className:"absolute inset-0 pointer-events-none -z-[1]","aria-hidden":"true",children:i.jsx(r,{isDark:s})}),i.jsx("div",{className:(0,a.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",l),children:e})]})},7223:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var i=s(2295),a=s(7663),r=s(1252),l=s(5875),n=(0,l.Z)("minus","IconMinus",[["path",{d:"M5 12l14 0",key:"svg-0"}]]),u=(0,l.Z)("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),o=s(3729);let d=()=>{let[e,t]=(0,o.useState)({width:0,height:0});return(0,o.useEffect)(()=>{let e=()=>{t({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),e};var m=s(2401),c=s(8370),p=(0,l.Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]);let x=({options:e,activeTab:t,onActiveTabSelected:s,iconUp:a,iconDown:r})=>{let[l,n]=(0,o.useState)(!1),[u,d]=(0,o.useState)(e[t].link?.label),x=(e,t)=>{d(e.link?.label),s(t)};return(0,o.useEffect)(()=>{let e=()=>n(!1);return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}}),(0,i.jsxs)("div",{className:"relative mt-4 rounded-md border border-gray-400 text-left",children:[(0,i.jsxs)("div",{onClick:e=>{e.stopPropagation(),n(!l)},className:"flex select-none items-center justify-between rounded-md p-3",children:[i.jsx("div",{className:"text-lg",children:u}),r&&a?!1===l?r:a:!1===l?i.jsx(m.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}):i.jsx(c.Z,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})]}),l&&i.jsx("div",{className:"absolute w-full translate-y-1 overflow-auto rounded-md border border-gray-400",children:e.map((e,s)=>(0,i.jsxs)("div",{onClick:()=>x(e,s),className:`flex cursor-pointer items-center bg-white p-3 text-lg dark:bg-slate-900 ${t!==s?"pl-10":"text-primary-600 dark:text-primary-200"}`,children:[t===s&&i.jsx(p,{className:"mr-2 h-5 w-5"})," ",e.link?.label]},`option-${s}`))})]})};var h=s(7026);let g=({header:e,tabs:t,id:s,isDark:l=!1})=>{let{width:m}=d(),[c,p]=(0,o.useState)(0);return(0,i.jsxs)(h.Z,{id:s||"",isDark:l,containerClass:"",children:[e&&i.jsx(a.Z,{header:e,titleClass:"text-3xl sm:text-4xl"}),i.jsx("div",{className:"flex items-stretch justify-center",children:(0,i.jsxs)("div",{className:"grid w-full md:grid-cols-3 md:items-center md:gap-4",children:[m>767?i.jsx("div",{className:"block h-full sm:flex sm:items-center sm:justify-between md:mx-4 md:mt-10 md:block md:px-4",children:i.jsx("div",{className:"flex h-fit w-full justify-center sm:w-auto sm:justify-start",children:i.jsx("ul",{children:t.map((e,t)=>i.jsx("li",{className:`mb-5 flex cursor-pointer items-center ${c===t?"text-primary-600 dark:text-primary-200":""}`,tabIndex:0,onClick:()=>{p(t)},children:i.jsx("span",{className:"w-full text-xl hover:underline",children:e.link?.label})},`tab-${t}`))})})}):i.jsx(x,{options:t,activeTab:c,onActiveTabSelected:e=>{p(e)}}),i.jsx("div",{className:"mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4",children:t.map((e,t)=>i.jsx("div",{className:"",children:c===t&&i.jsx(r.default,{items:e.items,classCollapseItem:"border-b border-solid border-slate-300 dark:border-slate-500 py-5",iconUp:i.jsx(n,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"}),iconDown:i.jsx(u,{className:"h-6 w-6 text-primary-600 dark:text-slate-200"})})},`tab-${t}`))})]})})]})}},4617:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>p});var i=s(5036),a=s(4838);let r=(0,s(6843).createProxy)(String.raw`E:\Downloads\tailnext-main\tailnext-main\src\components\widgets\FAQs4.tsx`),{__esModule:l,$$typeof:n}=r,u=r.default,o={title:"Frequently Asked Questions",subtitle:(0,i.jsxs)(i.Fragment,{children:[i.jsx("span",{className:"hidden md:inline",children:"Whether you need help using our Next.js and Tailwind CSS templates, solving problems, or just want some useful tips, our FAQs are here to assist you."})," ","Explore them to optimize your experience with our website and products."]}),tagline:"Demo FAQs Page"},d={id:"faqsFour-on-faqs",header:{title:"Find what you need",subtitle:"Get quick answers to your questions: Everything you need in one spot.",position:"center"},tabs:[{link:{label:"General",href:"/tab1"},items:[{title:"What do I need to start?",description:"Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula."},{title:"How to install the NextJS + Tailwind CSS template?",description:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus."},{title:"What's something that you completely don't understand?",description:"Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur."},{title:"What's an example of when you changed your mind?",description:"Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc."},{title:"What is something that you would really like to try again?",description:"Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur."},{title:"If you could only ask one question to each person you meet, what would that question be?",description:"Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros."}]},{link:{label:"Plans, prices and payments",href:"/tab2"},items:[{title:"Which plan is best for me?",description:"Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula."},{title:"What are my payment options?",description:"Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus."},{title:"How do I change my plan to a different one?",description:"Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur."},{title:"What happen at the end of my free trial?",description:"Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc."},{title:"Can I import data from other tools?",description:"Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur."},{title:"Can I cancel my plan at any time?",description:"Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros."}]},{link:{label:"Others",href:"/tab3"},items:[{title:"How do I download the template?",description:"In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor."},{title:"How do I customize the template?",description:"Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus."},{title:"Does the template come with any tutorials or instructions?",description:"Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim."},{title:"Are there any additional fees or charges for using the template?",description:"Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada."}]}]},m={id:"callToAction-on-faqs",title:"Still have questions?",subtitle:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.",callToAction:{text:"Contact us",href:"/contact"}};var c=s(8856);let p={title:"FAQs"},x=()=>(0,i.jsxs)(i.Fragment,{children:[i.jsx(c.Z,{...o}),i.jsx(u,{...d}),i.jsx(a.Z,{...m})]})},7171:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var i=s(5036),a=s(646),r=s.n(a),l=s(1774);let n=({callToAction:e,containerClass:t,linkClass:s,iconClass:a})=>{let{text:n,href:u,icon:o,targetBlank:d}=e;return i.jsx(i.Fragment,{children:u&&(n||o)&&i.jsx("div",{className:(0,l.m6)("flex w-auto cursor-pointer",t),children:d?(0,i.jsxs)(r(),{className:(0,l.m6)("inline-flex items-center justify-center w-full sm:mb-0",s),href:u,target:"_blank",rel:"noopener noreferrer",children:[o&&i.jsx(o,{className:(0,l.m6)(`w-5 h-5 ${n?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,a)}),n]}):(0,i.jsxs)(r(),{className:(0,l.m6)("inline-flex items-center justify-center w-full sm:mb-0 ",s),href:u,children:[o&&i.jsx(o,{className:(0,l.m6)(`w-5 h-5 ${n?"mr-1 -ml-1.5 rtl:ml-1 rtl:-mr-1.5":""}`,a)}),n]})})})}},1472:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s(5036),a=s(1774);let r=({children:e,isDark:t})=>i.jsx("div",{className:`absolute inset-0 ${t?"bg-transparent":"bg-primary-50 dark:bg-slate-800"}`,children:e}),l=({children:e,id:t,isDark:s,containerClass:l})=>(0,i.jsxs)("section",{className:"relative not-prose scroll-mt-[72px]",id:t,children:[i.jsx("div",{className:"absolute inset-0 pointer-events-none -z-[1]","aria-hidden":"true",children:i.jsx(r,{isDark:s})}),i.jsx("div",{className:(0,a.m6)("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",l),children:e})]})},4838:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s(5036),a=s(7171),r=s(1472);let l=({title:e,subtitle:t,callToAction:s,id:l,isDark:n=!1})=>{let{text:u,href:o}=s;return i.jsx(r.Z,{id:l||"",isDark:n,containerClass:"",children:(0,i.jsxs)("div",{className:"card mx-auto max-w-3xl p-6 text-center",children:[e&&i.jsx("h2",{className:"leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl",children:e}),t&&i.jsx("p",{className:"text-xl text-gray-600 dark:text-slate-400",children:t}),u&&o&&i.jsx(a.Z,{callToAction:s,containerClass:"mt-6 sm:mx-auto sm:w-fit",linkClass:"btn btn-primary"})]})})}},8856:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var i=s(5036),a=s(5904),r=s.n(a),l=s(7171);let n=({title:e,subtitle:t,tagline:s,callToAction:a,callToAction2:n,image:u})=>i.jsx("section",{id:"heroOne",children:i.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6",children:(0,i.jsxs)("div",{className:"py-12 md:py-20",children:[(0,i.jsxs)("div",{className:"mx-auto max-w-4xl pb-10 text-center md:pb-16",children:[s&&i.jsx("p",{className:"text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200",children:s}),e&&i.jsx("h1",{className:"leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl",children:e}),(0,i.jsxs)("div",{className:"mx-auto max-w-3xl",children:[t&&i.jsx("p",{className:"mb-6 text-xl font-normal text-gray-600 dark:text-slate-400",children:t}),(0,i.jsxs)("div",{className:"flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center",children:[a&&i.jsx(l.Z,{callToAction:a,linkClass:"btn btn-primary"}),n&&i.jsx(l.Z,{callToAction:n,linkClass:"btn"})]})]})]}),u&&i.jsx("div",{className:"relative m-auto max-w-5xl",children:i.jsx(r(),{className:"mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700",src:u.src,alt:u.alt,width:1024,height:607,sizes:"(max-width: 64rem) 100vw, 1024px",loading:"eager",placeholder:"blur",priority:!0})})]})})})}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[945,904,717,377,752],()=>s(7360));module.exports=i})();