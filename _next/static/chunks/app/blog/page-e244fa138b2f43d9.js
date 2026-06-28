(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{7322:function(e,t,r){Promise.resolve().then(r.bind(r,2679))},7786:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(1229);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:d,iconNode:u,...h}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:s?24*Number(i)/Number(a):i,className:l("lucide",c),...h},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:s,...c}=r;return(0,n.createElement)(i,{ref:o,iconNode:t,className:l("lucide-".concat(a(e)),s),...c})});return r.displayName="".concat(e),r}},3289:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7786).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},9122:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7786).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},5680:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7786).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},6271:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(7786).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},2679:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(9533),a=r(1229),l=r(5680),o=r(9122),i=r(6271),s=r(3289);let c=[{href:"/#skills",label:"Skills"},{href:"/#open-source",label:"Open Source"},{href:"/#projects",label:"Projects"},{href:"/#experience",label:"Experience"},{href:"/#certifications",label:"Certifications"},{href:"/blog/",label:"Blog"},{href:"/#contact",label:"Contact"}];function d(){let{theme:e,toggle:t}=function(){let[e,t]=(0,a.useState)("light");return(0,a.useEffect)(()=>{let e=localStorage.getItem("theme"),r=null!=e?e:"light";t(r),document.documentElement.setAttribute("data-theme",r)},[]),{theme:e,toggle:()=>{let r="light"===e?"dark":"light";t(r),localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r)}}}(),[r,d]=(0,a.useState)(!1);return(0,n.jsxs)("header",{className:"sticky top-0 z-50 border-b",style:{borderColor:"var(--border)",backgroundColor:"var(--bg)"},children:[(0,n.jsxs)("div",{className:"w-[90%] mx-auto h-14 flex items-center justify-between",children:[(0,n.jsx)("a",{href:"#",className:"font-mono text-sm font-semibold",style:{color:"var(--accent)"},children:"Aditya S. Widhiantara"}),(0,n.jsx)("nav",{className:"hidden md:flex items-center gap-6",children:c.map(e=>(0,n.jsx)("a",{href:e.href,className:"text-sm transition-opacity duration-150 hover:opacity-60",style:{color:"var(--text-muted)"},children:e.label},e.href))}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)("button",{onClick:t,"aria-label":"Toggle theme",className:"p-2 rounded-md transition-opacity duration-150 hover:opacity-60",style:{color:"var(--text-muted)"},children:"dark"===e?(0,n.jsx)(l.Z,{size:16}):(0,n.jsx)(o.Z,{size:16})}),(0,n.jsx)("button",{onClick:()=>d(e=>!e),"aria-label":"Toggle menu",className:"md:hidden p-2 rounded-md transition-opacity duration-150 hover:opacity-60",style:{color:"var(--text-muted)"},children:r?(0,n.jsx)(i.Z,{size:16}):(0,n.jsx)(s.Z,{size:16})})]})]}),r&&(0,n.jsx)("div",{className:"md:hidden border-t px-[5%] py-4 flex flex-col gap-4",style:{borderColor:"var(--border)",backgroundColor:"var(--bg)"},children:c.map(e=>(0,n.jsx)("a",{href:e.href,className:"text-sm",style:{color:"var(--text-muted)"},onClick:()=>d(!1),children:e.label},e.href))})]})}}},function(e){e.O(0,[170,842,744],function(){return e(e.s=7322)}),_N_E=e.O()}]);