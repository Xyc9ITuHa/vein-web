import{r as n,j as r}from"./index-Dn5u9AjM.js";/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,s)=>s?s.toUpperCase():a.toLowerCase()),i=t=>{const e=j(t);return e.charAt(0).toUpperCase()+e.slice(1)},f=(...t)=>t.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim(),C=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:l="",children:o,iconNode:u,...c},x)=>n.createElement("svg",{ref:x,...y,width:e,height:e,stroke:t,strokeWidth:s?Number(a)*24/Number(e):a,className:f("lucide",l),...!o&&!C(c)&&{"aria-hidden":"true"},...c},[...u.map(([p,h])=>n.createElement(p,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,e)=>{const a=n.forwardRef(({className:s,...l},o)=>n.createElement(N,{ref:o,iconNode:e,className:f(`lucide-${w(i(t))}`,`lucide-${t}`,s),...l}));return a.displayName=i(t),a};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]],b=m("star-half",g);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],d=m("star",v);function A({stars:t,comment:e,author:a}){return r.jsxs("div",{className:"bg-white shadow-md rounded-lg px-6 flex flex-col items-center w-full h-full pb-4 pt-2",children:[r.jsxs("div",{className:"flex flex-row items-center justify-between w-full top-0",children:[r.jsx("p",{className:"font-helvetica font-extrabold",children:a}),r.jsx("div",{className:"flex flex-row",children:[...Array(5)].map((s,l)=>r.jsx("span",{children:t>=l+1?r.jsx(d,{size:16,className:"text-yellow-500 fill-current"}):t>l?r.jsx(b,{size:16,className:"text-yellow-500 fill-current"}):r.jsx(d,{size:16,className:"text-gray-300/0"})},l))})]}),r.jsx("div",{className:"h-full flex items-center justify-center",children:r.jsx("p",{className:"font-helvetica font-medium",children:e})})]})}export{A as default};
