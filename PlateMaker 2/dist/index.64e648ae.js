!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t={};e(t,"toPng",(function(){return be}),(function(e){return be=e}));var n={};e(n,"cloneNode",(function(){return z}),(function(e){return z=e}));var r={};e(r,"getMimeType",(function(){return x}),(function(e){return x=e})),e(r,"resolveUrl",(function(){return E}),(function(e){return E=e})),e(r,"isDataUrl",(function(){return S}),(function(e){return S=e})),e(r,"makeDataUrl",(function(){return R}),(function(e){return R=e})),e(r,"parseDataUrlContent",(function(){return $}),(function(e){return $=e})),e(r,"uuid",(function(){return C}),(function(e){return C=e})),e(r,"toArray",(function(){return L}),(function(e){return L=e})),e(r,"getNodeWidth",(function(){return A}),(function(e){return A=e})),e(r,"getNodeHeight",(function(){return U}),(function(e){return U=e})),e(r,"getPixelRatio",(function(){return k}),(function(e){return k=e})),e(r,"canvasToBlob",(function(){return N}),(function(e){return N=e})),e(r,"createImage",(function(){return D}),(function(e){return D=e})),e(r,"nodeToDataURL",(function(){return B}),(function(e){return B=e}));var o,i,c,u=o={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(i===setTimeout)return setTimeout(e,0);if((i===s||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:s}catch(e){i=s}try{c="function"==typeof clearTimeout?clearTimeout:a}catch(e){c=a}}();var h,f=[],d=!1,m=-1;function g(){d&&h&&(d=!1,h.length?f=h.concat(f):m=-1,f.length&&p())}function p(){if(!d){var e=l(g);d=!0;for(var t=f.length;t;){for(h=f,f=[];++m<t;)h&&h[m].run();m=-1,t=f.length}h=null,d=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===a||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function y(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||d||l(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=y,u.addListener=y,u.once=y,u.off=y,u.removeListener=y,u.removeAllListeners=y,u.emit=y,u.prependListener=y,u.prependOnceListener=y,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0};var w=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}s((r=r.apply(e,t||[])).next())}))};const b="application/font-woff",T="image/jpeg",P={woff:b,woff2:b,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:T,jpeg:T,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function x(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return P[t]||""}function E(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}function S(e){return-1!==e.search(/^(data:)/)}function R(e,t){return`data:${t};base64,${e}`}function $(e){return e.split(/,/)[1]}const C=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function L(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function I(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function A(e){const t=I(e,"border-left-width"),n=I(e,"border-right-width");return e.clientWidth+t+n}function U(e){const t=I(e,"border-top-width"),n=I(e,"border-bottom-width");return e.clientHeight+t+n}function k(){let e,t;try{t=o}catch(e){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function N(e){return e.toBlob?new Promise((t=>e.toBlob(t))):new Promise((t=>{const n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r);for(let e=0;e<r;e+=1)o[e]=n.charCodeAt(e);t(new Blob([o],{type:"image/png"}))}))}function D(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=e}))}function B(e,t,n){return w(this,void 0,void 0,(function*(){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),function(e){return w(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}))}(o)}))}const _={};function M(e,t){const n=function(e){let t=e.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(t)&&(t=t.replace(/.*\//,"")),t}(e);if(null!=_[n])return _[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());const o=window.fetch(e).then((e=>e.blob().then((t=>({blob:t,contentType:e.headers.get("Content-Type")||""}))))).then((({blob:e,contentType:t})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:t,blob:o.result}),o.onerror=r,o.readAsDataURL(e)})))).then((({blob:e,contentType:t})=>({contentType:t,blob:(0,r.parseDataUrlContent)(e)}))).catch((n=>{let r="";if(t.imagePlaceholder){const e=t.imagePlaceholder.split(/,/);e&&e[1]&&(r=e[1])}let o=`Failed to fetch resource: ${e}`;return n&&(o="string"==typeof n?n:n.message),o&&console.error(o),{blob:r,contentType:""}}));return _[n]=o,o}function H(e,t,n){const o=`.${e}:${t}`,i=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return(0,r.toArray)(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${o}{${i}}`)}function V(e,t,n){const o=window.getComputedStyle(e,n),i=o.getPropertyValue("content");if(""===i||"none"===i)return;const c=(0,r.uuid)();try{t.className=`${t.className} ${c}`}catch(e){return}const u=document.createElement("style");u.appendChild(H(c,n,o)),t.appendChild(u)}function F(e,t){V(e,t,":before"),V(e,t,":after")}var W=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}s((r=r.apply(e,t||[])).next())}))};function j(e,t){return W(this,void 0,void 0,(function*(){return e instanceof HTMLCanvasElement?function(e){return W(this,void 0,void 0,(function*(){const t=e.toDataURL();return"data:,"===t?Promise.resolve(e.cloneNode(!1)):(0,r.createImage)(t)}))}(e):e instanceof HTMLVideoElement&&e.poster?function(e,t){return W(this,void 0,void 0,(function*(){return Promise.resolve(e.poster).then((e=>M(e,t))).then((t=>(0,r.makeDataUrl)(t.blob,(0,r.getMimeType)(e.poster)||t.contentType))).then((e=>(0,r.createImage)(e)))}))}(e,t):Promise.resolve(e.cloneNode(!1))}))}function O(e,t){return W(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve().then((()=>function(e,t){const n=window.getComputedStyle(e),o=t.style;o&&(n.cssText?o.cssText=n.cssText:(0,r.toArray)(n).forEach((e=>{o.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))})))}(e,t))).then((()=>F(e,t))).then((()=>function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t))).then((()=>t)):Promise.resolve(t)}))}function z(e,t,n){return W(this,void 0,void 0,(function*(){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>j(e,t))).then((n=>function(e,t,n){var o;return W(this,void 0,void 0,(function*(){const i=null!=(c=e).tagName&&"SLOT"===c.tagName.toUpperCase()&&e.assignedNodes?(0,r.toArray)(e.assignedNodes()):(0,r.toArray)((null!==(o=e.shadowRoot)&&void 0!==o?o:e).childNodes);var c;return 0===i.length||e instanceof HTMLVideoElement?Promise.resolve(t):i.reduce(((e,r)=>e.then((()=>z(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()).then((()=>t))}))}(e,n,t))).then((t=>O(e,t))):Promise.resolve(null)}))}var q={};e(q,"embedImages",(function(){return re}),(function(e){return re=e}));var G={};e(G,"shouldEmbed",(function(){return ee}),(function(e){return ee=e})),e(G,"embedResources",(function(){return te}),(function(e){return te=e}));var X=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}s((r=r.apply(e,t||[])).next())}))};const J=/url\((['"]?)([^'"]+?)\1\)/g,K=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,Q=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Y(e){const t=[];return e.replace(J,((e,n,r)=>(t.push(r),e))),t.filter((e=>!(0,r.isDataUrl)(e)))}function Z(e,t,n,o,i){const c=n?(0,r.resolveUrl)(t,n):t;return Promise.resolve(c).then((e=>i?i(e):M(e,o))).then((e=>"string"==typeof e?(0,r.makeDataUrl)(e,(0,r.getMimeType)(t)):(0,r.makeDataUrl)(e.blob,(0,r.getMimeType)(t)||e.contentType))).then((n=>e.replace(function(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${n}$3`))).then((e=>e),(()=>c))}function ee(e){return-1!==e.search(J)}function te(e,t,n){return X(this,void 0,void 0,(function*(){if(!ee(e))return Promise.resolve(e);const r=function(e,{preferredFontFormat:t}){return t?e.replace(Q,(e=>{for(;;){const[n,,r]=K.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n);return Promise.resolve(r).then(Y).then((e=>e.reduce(((e,r)=>e.then((e=>Z(e,r,t,n)))),Promise.resolve(r))))}))}var ne=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}s((r=r.apply(e,t||[])).next())}))};function re(e,t){return ne(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve(e).then((e=>function(e,t){var n;return ne(this,void 0,void 0,(function*(){const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((e=>(0,G.embedResources)(e,null,t))).then((t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e))):Promise.resolve(e)}))}(e,t))).then((e=>function(e,t){return ne(this,void 0,void 0,(function*(){if((!(e instanceof HTMLImageElement)||(0,r.isDataUrl)(e.src))&&(!(e instanceof SVGImageElement)||(0,r.isDataUrl)(e.href.baseVal)))return Promise.resolve(e);const n=e instanceof HTMLImageElement?e.src:e.href.baseVal;return Promise.resolve(n).then((e=>M(e,t))).then((e=>(0,r.makeDataUrl)(e.blob,(0,r.getMimeType)(n)||e.contentType))).then((t=>new Promise(((n,r)=>{e.onload=n,e.onerror=r,e instanceof HTMLImageElement?(e.srcset="",e.src=t):e.href.baseVal=t})))).then((()=>e),(()=>e))}))}(e,t))).then((e=>function(e,t){return ne(this,void 0,void 0,(function*(){const n=(0,r.toArray)(e.childNodes).map((e=>re(e,t)));return Promise.all(n).then((()=>e))}))}(e,t))):Promise.resolve(e)}))}function oe(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]})),e}var ie={};e(ie,"getWebFontCSS",(function(){return de}),(function(e){return de=e})),e(ie,"embedWebFonts",(function(){return me}),(function(e){return me=e}));var ce=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}s((r=r.apply(e,t||[])).next())}))};const ue={};function se(e){const t=ue[e];if(null!=t)return t;const n=window.fetch(e).then((t=>({url:e,cssText:t.text()})));return ue[e]=n,n}function ae(e){return ce(this,void 0,void 0,(function*(){return e.cssText.then((t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((t=>{let o=t.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),window.fetch(o).then((e=>e.blob())).then((e=>new Promise(((r,o)=>{const i=new FileReader;i.onloadend=()=>{n=n.replace(t,`url(${i.result})`),r([t,i.result])},i.onerror=o,i.readAsDataURL(e)}))))}));return Promise.all(o).then((()=>n))}))}))}function le(e){if(null==e)return[];const t=[];let n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(n);if(null===e){if(e=i.exec(n),null===e)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}function he(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>(0,G.shouldEmbed)(e.style.getPropertyValue("src"))))}function fe(e){return ce(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{null==e.ownerDocument&&n(new Error("Provided element is not within a Document")),t((0,r.toArray)(e.ownerDocument.styleSheets))})).then((e=>function(e){return ce(this,void 0,void 0,(function*(){const t=[],n=[];return e.forEach((t=>{if("cssRules"in t)try{(0,r.toArray)(t.cssRules).forEach(((e,r)=>{if(e.type===CSSRule.IMPORT_RULE){let o=r+1;const i=se(e.href).then((e=>e?ae(e):"")).then((e=>le(e).forEach((e=>{try{t.insertRule(e,e.startsWith("@import")?o+=1:t.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})))).catch((e=>{console.error("Error loading remote css",e.toString())}));n.push(i)}}))}catch(r){const o=e.find((e=>null==e.href))||document.styleSheets[0];null!=t.href&&n.push(se(t.href).then((e=>e?ae(e):"")).then((e=>le(e).forEach((e=>{o.insertRule(e,t.cssRules.length)})))).catch((e=>{console.error("Error loading remote stylesheet",e.toString())}))),console.error("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(e.forEach((e=>{if("cssRules"in e)try{(0,r.toArray)(e.cssRules).forEach((e=>{t.push(e)}))}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t.toString())}})),t)))}))}(e))).then(he)}))}function de(e,t){return ce(this,void 0,void 0,(function*(){return fe(e).then((e=>Promise.all(e.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return(0,G.embedResources)(e.cssText,n,t)}))))).then((e=>e.join("\n")))}))}function me(e,t){return ce(this,void 0,void 0,(function*(){return(null!=t.fontEmbedCSS?Promise.resolve(t.fontEmbedCSS):de(e,t)).then((t=>{const n=document.createElement("style"),r=document.createTextNode(t);return n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),e}))}))}var ge=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}s((r=r.apply(e,t||[])).next())}))};function pe(e,t={}){return{width:t.width||(0,r.getNodeWidth)(e),height:t.height||(0,r.getNodeHeight)(e)}}function ve(e,t={}){return ge(this,void 0,void 0,(function*(){const{width:o,height:i}=pe(e,t);return Promise.resolve(e).then((e=>(0,n.cloneNode)(e,t,!0))).then((e=>(0,ie.embedWebFonts)(e,t))).then((e=>(0,q.embedImages)(e,t))).then((e=>oe(e,t))).then((e=>(0,r.nodeToDataURL)(e,o,i)))}))}const ye=16384;function we(e,t={}){return ge(this,void 0,void 0,(function*(){return ve(e,t).then(r.createImage).then((n=>{const o=document.createElement("canvas"),i=o.getContext("2d"),c=t.pixelRatio||(0,r.getPixelRatio)(),{width:u,height:s}=pe(e,t),a=t.canvasWidth||u,l=t.canvasHeight||s;return o.width=a*c,o.height=l*c,t.skipAutoScale||function(e){(e.width>ye||e.height>ye)&&(e.width>ye&&e.height>ye?e.width>e.height?(e.height*=ye/e.width,e.width=ye):(e.width*=ye/e.height,e.height=ye):e.width>ye?(e.height*=ye/e.width,e.width=ye):(e.width*=ye/e.height,e.height=ye))}(o),o.style.width=`${a}`,o.style.height=`${l}`,t.backgroundColor&&(i.fillStyle=t.backgroundColor,i.fillRect(0,0,o.width,o.height)),i.drawImage(n,0,0,o.width,o.height),o}))}))}function be(e,t={}){return ge(this,void 0,void 0,(function*(){return we(e,t).then((e=>e.toDataURL()))}))}let Te=[artMiddleText,artSideText,artBottomText,artTopText],Pe=[document.getElementById("middle__text__box"),document.getElementById("top__text__box"),document.getElementById("left__text__box"),document.getElementById("bottom__text__box")];document.querySelector("#save__btn").addEventListener("click",(function(){document.getElementById("artBackground").style.scale=1,Te.forEach((e=>{document.getElementById(e.id+"--movespan").classList.add("hidden--instant"),document.getElementById(e.id+"--movespan").classList.remove("show")})),Pe.forEach((e=>{e.classList.remove("outlineRed")})),t.toPng(document.getElementById("artBackground"),{quality:1,canvasWidth:2100,canvasHeight:690.6}).then((function(e){var t=document.createElement("a");t.download="my-image-name.png",t.href=e,t.click()})).then((function(){document.getElementById("artBackground").style.scale="",Te.forEach((e=>{document.getElementById(e.id+"--movespan").classList.remove("hidden--instant"),document.getElementById(e.id+"--movespan").classList.add("show")}))}))}))}();
//# sourceMappingURL=index.64e648ae.js.map