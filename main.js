(()=>{"use strict";var n,e,t,r,o,i,a,d,s,c,l,p,u,f,h={426:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),d=t(667),s=t.n(d),c=new URL(t(805),t.b),l=new URL(t(209),t.b),p=new URL(t(111),t.b),u=a()(o()),f=s()(c),h=s()(l),m=s()(p);u.push([n.id,`@font-face {\n    font-family: Merit4;\n    src: url(${f}) format("truetype");\n}\n@font-face {\n    font-family: StretchPro;\n    src: url(${h}) format("opentype");\n}\n@font-face {\n  font-family: UnderStation;\n  src: url(${m}) format("truetype");\n}\n\nhtml {\n  overflow: hidden;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#content {\n  background: #D0340E;\n  height:100vh;\n  width: 100vw;\n  text-align: center;\n  overflow: hidden;\n}\n\n.div-heading {\n  width: 100vw;\n  height: 15vh;\n  overflow: hidden;\n}\n\nh1 {\ncolor: #FFF;\ntext-shadow: -11px 5px 0px #000;\nfont-family: Merit4;\nfont-size: 7.5em;\nfont-style: normal;\nfont-weight: 700;\n}\n\nh1:hover {\n  color: #000;\n  text-shadow: -11px 5px 0px #FFF;\n}\n\n.parent-subtitle {\n  border-bottom: 6px solid #FFD181;\n  border-top: 6px solid #FFD181;\n  background-color: #99E5E4;\n  overflow: hidden;\n  display: block;\n  width: 100vw;\n  height: 4em;\n}\n\n.child-subtitle {\n  color: #000;\n  font-family: StretchPro;\n  font-size: 3em;\n  left: 200%;\n  width: max-content;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  animation: marquee 30s linear infinite;\n}\n\n.child-subtitle2 {\n  animation-delay: 15s;\n}\n  \n@keyframes marquee {\n    0% {\n      left: 100%;\n    }\n    100% {\n      left: -255%;\n    }\n}\n\n.red-facade {\nwidth: 100vw;\nheight: 78vh;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\ncolumn-gap: 10vh;\n}\n\n.door-wrapper {\n  width: 25vw;\n  height: 78vh;\n  border: 1px solid #9A260A;\n  position: relative;\n  /* 3D */\n  perspective: 1000px;\n}\n\n.orange-window {\n  width: 35vw;\n  height: 60vh;\n  border: 10px solid #000;\n  background: transparent;\n  box-shadow: 0px 4px 44px 35px rgba(0, 0, 0, 0.25) inset;\n}\n\n.door {\n  background-color: #D0340E;\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  /* inner layout */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.left-door {\n  top: 20%;\n  left: 0;\n  border: 1px solid #9A260A;\n  /* transition */\n  transform-origin: left;\n  transition: transform 0.5s;\n  display: flex;\n  justify-content: space-around;\n}\n\n.right-door {\n  top: 20%;\n  right: 0;\n  border: 1px solid #9A260A;\n  /* transition */\n  transform-origin: right;\n  transition: transform 0.5s;\n  display: flex;\n  justify-content: space-around;\n}\n\n.top-door {\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  background-color: #D0340E;\n  height: 20%;\n  width: 100%;\n  box-shadow: 0px 19px 10px 1px rgba(0, 0, 0, 0.25);\n}\n\n.door-relief {\n  width: 70% ;\n  height: 30%;\n  border: 2px solid #9A260A;\n}\n\n/* Door swing effect */\n.door-wrapper:hover .left-door{\n  transform: rotateY(-140deg);\n}\n\n.door-wrapper:hover .right-door{\n  transform: rotateY(140deg);\n}\n`,""]);const v=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var s=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},209:(n,e,t)=>{n.exports=t.p+"a2ac1b6e2a9086e61eb1.otf"},805:(n,e,t)=>{n.exports=t.p+"9d930166fbd4af9dd8bf.ttf"},111:(n,e,t)=>{n.exports=t.p+"b99eb13cbb877f4e7230.ttf"}},m={};function v(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return h[n](t,t.exports,v),t.exports}v.m=h,v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var e=v.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.b=document.baseURI||self.location.href,v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),o=v(569),i=v.n(o),a=v(565),d=v.n(a),s=v(216),c=v.n(s),l=v(589),p=v.n(l),u=v(426),(f={}).styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,console.log("statement always banging"),function(){const n=document.querySelector("#content");n.replaceChildren();const e=document.createElement("h1"),t=document.createElement("div");t.classList.add("div-heading"),e.textContent="GUMBO YAYA",t.appendChild(e),n.appendChild(t);const r=document.createElement("span"),o=document.createElement("div"),i=document.createElement("span");o.classList.add("parent-subtitle"),r.classList.add("child-subtitle"),i.classList.add("child-subtitle","child-subtitle2"),r.innerHTML="S O U T H E R N  K I T C H E N  ★  C H I C K E N  A N D  W A F F L E S  ★",i.innerHTML="S O U T H E R N  K I T C H E N  ★  C H I C K E N  A N D  W A F F L E S  ★",o.appendChild(r),o.appendChild(i),n.appendChild(o);const a=document.createElement("div");a.classList.add("red-facade"),n.appendChild(a);const d=document.createElement("div");d.classList.add("door-wrapper"),a.appendChild(d);const s=document.createElement("div");s.classList.add("left-door","door"),d.appendChild(s);const c=document.createElement("div");c.classList.add("right-door","door"),d.appendChild(c);const l=document.createElement("div");l.classList.add("top-door"),d.appendChild(l);const p=document.createElement("div");p.classList.add("orange-window"),a.appendChild(p);const u=document.createElement("div"),f=document.createElement("div");u.classList.add("door-relief"),f.classList.add("door-relief"),s.appendChild(f),c.appendChild(u)}()})();