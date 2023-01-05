(()=>{"use strict";var e={7119:(e,t,r)=>{r(8964),r(702);var n=r(1957),o=r(4494),a=r(499),i=r(9835);function l(e,t,r,n,o,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const c=(0,i.aZ)({name:"App"});var s=r(1639);const d=(0,s.Z)(c,[["render",l]]),p=d;var u=r(3340),h=r(8339);const f=[{path:"/",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(398)]).then(r.bind(r,1398))}]},{path:"/about",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(281)]).then(r.bind(r,6281))}]},{path:"/present",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(903)]).then(r.bind(r,6903))}]},{path:"/gift",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(25)]).then(r.bind(r,8025))}]},{path:"/maps",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(483)]).then(r.bind(r,5483))}]},{path:"/transfer",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(244)]).then(r.bind(r,6244))}]},{path:"/contact",component:()=>Promise.all([r.e(736),r.e(420)]).then(r.bind(r,4420)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(657)]).then(r.bind(r,5657))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=f,b=(0,u.BC)((function(){const e=h.r5,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function v(e,t){const r=e(p);r.use(o.Z,t);const n=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:r,router:n}}var g=r(6950);const y={config:{},plugins:{Loading:g.Z}},w="";async function P({app:e,router:t},r){let n=!1;const o=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<r.length;c++)try{await r[c]({app:e,router:t,ssrContext:null,redirect:a,urlPath:i,publicPath:w})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}v(n.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>l});var n=r(3340),o=r(9981),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),l=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{25:"98540d3b",244:"98000d48",281:"839dd825",398:"48a739ac",420:"d2b09896",483:"66aab75e",657:"612765d2",862:"7bdd1f4f",903:"c7569a96"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{25:"340db2f5",143:"31d6cfe0",244:"ecd9662c",281:"034aab00",398:"2e3120ec",420:"061af09e",483:"a67fbdce",657:"203a8abf",736:"5b8581f0",903:"05f9628f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="casamento:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var p=s[d];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){l=p;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var u=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),c&&document.head.appendChild(l)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={25:1,244:1,281:1,398:1,420:1,483:1,657:1,903:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,c]=n,s=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(c)var d=c(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=globalThis["webpackChunkcasamento"]=globalThis["webpackChunkcasamento"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7119)));n=r.O(n)})();