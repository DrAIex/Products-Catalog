(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6007:function(e,t,n){Promise.resolve().then(n.t.bind(n,2445,23)),Promise.resolve().then(n.bind(n,2474)),Promise.resolve().then(n.t.bind(n,6087,23))},2474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(3827),o=n(2197),l=n(5313),u=n(6216),i=n(2110),s=n(444),a=n(4090);let c=a.createContext(null);function d(){return a.useContext(c)}var f="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",m=function(e){let{children:t,theme:n}=e,o=d(),l=a.useMemo(()=>{let e=null===o?n:"function"==typeof n?n(o):(0,i.Z)({},o,n);return null!=e&&(e[f]=null!==o),e},[n,o]);return(0,r.jsx)(c.Provider,{value:l,children:t})},h=n(1733),v=n(3346),p=n(9431);let y={};function b(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof n){let l=n(o),u=e?(0,i.Z)({},t,{[e]:l}):l;return r?()=>u:u}return e?(0,i.Z)({},t,{[e]:n}):(0,i.Z)({},t,n)},[e,t,n,r])}var Z=function(e){let{children:t,theme:n,themeId:o}=e,l=(0,h.Z)(y),i=d()||y,s=b(o,l,n),a=b(o,i,n,!0),c="rtl"===s.direction;return(0,r.jsx)(m,{theme:a,children:(0,r.jsx)(u.T.Provider,{value:s,children:(0,r.jsx)(v.Z,{value:c,children:(0,r.jsx)(p.Z,{value:null==s?void 0:s.components,children:t})})})})},x=n(1335);let g=["theme"];function _(e){let{theme:t}=e,n=(0,s.Z)(e,g),o=t[x.Z],l=o||t;return"function"!=typeof t&&(o&&!o.vars?l=(0,i.Z)({},o,{vars:null}):t&&!t.vars&&(l=(0,i.Z)({},t,{vars:null}))),(0,r.jsx)(Z,(0,i.Z)({},n,{themeId:o?x.Z:void 0,theme:l}))}var S=n(9048),j=n(4288);let k=(e,t)=>(0,i.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),C=e=>(0,i.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),E=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={};n&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var n;let[o,l]=t;r[e.getColorSchemeSelector(o).replace(/\s*&/,"")]={colorScheme:null==(n=l.palette)?void 0:n.mode}});let o=(0,i.Z)({html:k(e,n),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,i.Z)({margin:0},C(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r),l=null==(t=e.components)||null==(t=t.MuiCssBaseline)?void 0:t.styleOverrides;return l&&(o=[o,l]),o};var M=function(e){let{children:t,enableColorScheme:n=!1}=(0,S.i)({props:e,name:"MuiCssBaseline"});return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(j.Z,{styles:e=>E(e,n)}),t]})};let I=(0,n(9136).Z)({palette:{primary:{main:"#1976d2"},secondary:{main:"#dc004e"}},typography:{fontFamily:"Inter, sans-serif"}});function T(e){let{children:t}=e,[{cache:n,flush:i}]=(0,a.useState)(()=>{let e=(0,o.Z)({key:"mui"});e.compat=!0;let t=e.insert,n=[];return e.insert=function(){for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];let u=o[1];return void 0===e.inserted[u.name]&&n.push(u.name),t(...o)},{cache:e,flush:()=>{let e=n;return n=[],e}}});return(0,l.useServerInsertedHTML)(()=>{let e=i();if(0===e.length)return null;let t="";for(let r of e)t+=n.inserted[r];return(0,r.jsx)("style",{"data-emotion":"".concat(n.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t}},n.key)}),(0,r.jsx)(u.C,{value:n,children:(0,r.jsxs)(_,{theme:I,children:[(0,r.jsx)(M,{}),t]})})}},4288:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2110);n(4090);var o=n(6286),l=n(2743),u=n(3827),i=function(e){let{styles:t,themeId:n,defaultTheme:r={}}=e,i=(0,l.Z)(r),s="function"==typeof t?t(n&&i[n]||i):t;return(0,u.jsx)(o.Z,{styles:s})},s=n(4106),a=n(1335),c=function(e){return(0,u.jsx)(i,(0,r.Z)({},e,{defaultTheme:s.Z,themeId:a.Z}))}},3346:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(2110),o=n(444),l=n(4090),u=n(3827);let i=["value"],s=l.createContext(),a=()=>{let e=l.useContext(s);return null!=e&&e};t.Z=function(e){let{value:t}=e,n=(0,o.Z)(e,i);return(0,u.jsx)(s.Provider,(0,r.Z)({value:null==t||t},n))}},2445:function(){},6087:function(e){e.exports={style:{fontFamily:"'__Inter_1ecb03', '__Inter_Fallback_1ecb03'",fontStyle:"normal"},className:"__className_1ecb03"}}},function(e){e.O(0,[776,971,69,744],function(){return e(e.s=6007)}),_N_E=e.O()}]);