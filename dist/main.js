(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>y});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),d=t(667),s=t.n(d),c=new URL(t(805),t.b),l=new URL(t(209),t.b),p=new URL(t(111),t.b),u=new URL(t(561),t.b),m=new URL(t(809),t.b),h=new URL(t(5),t.b),f=i()(o()),g=s()(c),b=s()(l),v=s()(p),A=s()(u),w=s()(m),x=s()(h);f.push([n.id,`@font-face {\n    font-family: Merit4;\n    src: url(${g}) format("truetype");\n}\n@font-face {\n    font-family: StretchPro;\n    src: url(${b}) format("opentype");\n}\n@font-face {\n  font-family: UnderStation;\n  src: url(${v}) format("truetype");\n}\n\n@font-face {\n  font-family: Riffic;\n  src: url(${A}) format("truetype");\n}\n\nhtml {\n  overflow: hidden;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#content {\n  background: #D0340E;\n  height:100vh;\n  width: 100vw;\n  text-align: center;\n  overflow: hidden;\n}\n\n.div-heading {\n  width: 100vw;\n  height: 15vh;\n  overflow: hidden;\n}\n\nh1 {\ncolor: #FFF;\ntext-shadow: -11px 5px 0px #000;\nfont-family: Merit4;\nfont-size: 7.5em;\nfont-style: normal;\nfont-weight: 700;\n}\n\nh1:hover {\n  color: #000;\n  text-shadow: -11px 5px 0px #FFF;\n}\n\n.parent-subtitle {\n  border-bottom: 6px solid #FFD181;\n  border-top: 6px solid #FFD181;\n  background-color: #99E5E4;\n  overflow: hidden;\n  display: block;\n  width: 100vw;\n  height: 4em;\n}\n\n.child-subtitle {\n  color: #000;\n  font-family: StretchPro;\n  font-size: 3em;\n  left: 200%;\n  width: max-content;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  animation: marquee 30s linear infinite;\n}\n\n.child-subtitle2 {\n  animation-delay: 15s;\n}\n  \n@keyframes marquee {\n    0% {\n      left: 100%;\n    }\n    100% {\n      left: -255%;\n    }\n}\n\n.red-facade {\n  width: 100vw;\n  height: 78vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.hours-graff {\n  width: 15vw;\n  height: max-content;\n  color: #FFD181;\n  font-family: UnderStation;\n  justify-self: center;\n}\n\n.menu-graff {\n  display: flex;\n  flex-direction: row;\n  width: 15vw;\n  justify-content: center;\n  column-gap: 2vw;\n  margin-left: 2.5vw;\n}\n\n.meals {\n  color: #99E5E4;\n  font-family: UnderStation;\n  text-align: start;\n  height: max-content;\n}\n\n.prices {\n  color: #FFD181;\n  font-family: UnderStation;\n  text-align: end;\n}\n\nh2 {\n  color: #99E5E4;\n}\n\n.door-wrapper {\n  width: 25vw;\n  height: 78vh;\n  border: 1px solid #9A260A;\n  position: relative;\n  z-index: 5;\n  /* 3D */\n  perspective: 1000px;\n}\n\n.orange-window {\n  width: 35vw;\n  height: 60vh;\n  border: 10px solid #000;\n  /* From https://css.glass */\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url(${w});\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(3.4px);\n  background-size: cover;\n  background-repeat: no-repeat;\n/* box-shadow: 0px 4px 44px 35px rgba(0, 0, 0, 0.25) inset; */\n  margin-left: 5vw;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  row-gap: 5%;\n}\n\n.dscrptn {\n  font-family: UnderStation;\n  color:#99E5E4;\n  margin-bottom: 10%;\n  text-shadow: 1px 2px 25px #353535;\n}\n\ntextPath {\n font-family: Riffic, cursive;\n color: white;\n text-shadow: -11px 5px 0px #000;\n font-size: 4em;\n letter-spacing: .4rem\n}\n\n.door {\n  background-color: #D0340E;\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  /* inner layout */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  z-index: 5;\n}\n\n.left-door {\n  top: 20%;\n  left: 0;\n  border: 1px solid #9A260A;\n  /* transition */\n  transform-origin: left;\n  transition: transform 0.5s;\n  display: flex;\n  justify-content: flex-start;\n  row-gap: 3%;\n  padding-top: 3%;\n}\n\n.right-door {\n  top: 20%;\n  right: 0;\n  border: 1px solid #9A260A;\n  /* transition */\n  transform-origin: right;\n  transition: transform 0.5s;\n  display: flex;\n  justify-content: flex-start;\n  row-gap: 3%;\n  padding-top: 3%;\n}\n\n.top-door {\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  background: transparent;\n  height: 20%;\n  width: 100%;\n  box-shadow: 0px 19px 10px 1px rgba(0, 0, 0, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #D0340E;\n}\n\n.door-relief {\n  width: 80% ;\n  height: 20%;\n  border: 2px solid #9A260A;\n}\n\n/* Door swing effect */\n.door-wrapper:hover .left-door{\n  transform: rotateY(-140deg);\n}\n\n.door-wrapper:hover .right-door{\n  transform: rotateY(140deg);\n}\n\n.door-wrapper {\n    background-color: #9A260A;\n}\n\n.about-page, .info-page, .home-page {\n  cursor: pointer;\n}\n\n.pages-container {\n  height: 100%;\n  width: 100%;\n  border: 3px solid blue;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font: white;\n  list-style: none;\n  font-family: StretchPro;\n}\n\n.rotate {\n  animation: rotate 10s linear infinite; \n}\n@keyframes rotate{\n  to{ transform: rotate(360deg); }\n}\n\n.vitre {\n  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url(${x});\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(4px);\n  background-size: cover;\n  background-repeat: no-repeat;\n  border: 2px solid #9A260A;\n  width: 80% ;\n  height: 50%;\n}\n\nimg {\n  height: max-content;\n  width: auto;\n  z-index: 6;\n}\n\n.icons {\n  height: 6vh;\n  width: auto;\n  padding: 3px;\n}\n.logos-link {\n  border: 1px solid white;\n}\n.street-sign {\n  height: 17vh;\n  width: auto;\n  transform: rotate(-10deg);\n}\n\n.all-logos {\n  margin-right: 62%;\n}\n\n/* about page */\n\n.sub-header {\n  height: max-content;\n  width: auto;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}`,""]);const y=f},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var s=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},209:(n,e,t)=>{n.exports=t.p+"a2ac1b6e2a9086e61eb1.otf"},809:(n,e,t)=>{n.exports=t.p+"f49f4f51bc8e87d224de.jpg"},5:(n,e,t)=>{n.exports=t.p+"79717cb5e06dcfb83865.jpg"},805:(n,e,t)=>{n.exports=t.p+"9d930166fbd4af9dd8bf.ttf"},561:(n,e,t)=>{n.exports=t.p+"b46b5c87636efd7b6685.ttf"},111:(n,e,t)=>{n.exports=t.p+"b99eb13cbb877f4e7230.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"29e76030b5209367216e.png",e=t.p+"39d60dde33a27dae2bed.png";function r(){const t=document.querySelector("#content");t.replaceChildren();const r=document.createElement("h1"),o=document.createElement("div");o.classList.add("div-heading"),r.textContent="GUMBO YAYA",o.appendChild(r),t.appendChild(o);const a=document.createElement("span"),i=document.createElement("div"),d=document.createElement("span");i.classList.add("parent-subtitle"),a.classList.add("child-subtitle"),d.classList.add("child-subtitle","child-subtitle2"),a.innerHTML="S O U T H E R N  K I T C H E N  ★  C H I C K E N  A N D  W A F F L E S  ★",d.innerHTML="S O U T H E R N  K I T C H E N  ★  C H I C K E N  A N D  W A F F L E S  ★",i.appendChild(a),i.appendChild(d),t.appendChild(i);const s=document.createElement("div");s.classList.add("red-facade"),t.appendChild(s);const c=document.createElement("p");c.classList.add("hours-graff"),c.innerHTML="<h2>MONDAY<br>to FRIDAY</h2>12:00AM-2:15PM<br>7:30PM-10:30PM<br><br><h2>SATURDAY</h2>12:00AM-2:15PM<br>7:30PM-10:30PM<br><br><h2>SUNDAY</h2>12:00AM-3:00PM",s.appendChild(c);const l=document.createElement("div");l.classList.add("door-wrapper"),s.appendChild(l);const p=document.createElement("div");p.classList.add("left-door","door"),l.appendChild(p);const u=document.createElement("div");u.classList.add("right-door","door"),l.appendChild(u);const m=document.createElement("div");m.classList.add("top-door"),l.appendChild(m);const h=document.createElement("div");h.classList.add("pages-container"),l.appendChild(h);const f=document.createElement("h2");f.innerText="★ INFO ★",f.classList.add("info-page"),h.appendChild(f);const g=document.createElement("h2");g.innerText="★ ABOUT ★",g.classList.add("about-page"),h.appendChild(g);const b=document.createElement("div");b.classList.add("orange-window"),s.appendChild(b);const v=document.createElement("svg");b.appendChild(v),v.setAttribute("viewBox","0 0 500 500");const A=document.createElement("h2");A.classList.add("dscrptn"),A.innerHTML="WAFFLE HOUSE<br>FRIED CHICKEN<br>BURGERS",b.appendChild(A);const w=document.createElement("path");w.id="curve",w.setAttribute("d","M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"),v.appendChild(w);const x=document.createElement("text");x.setAttribute("width","500"),v.appendChild(x);const y=document.createElement("textPath");y.setAttributeNS("https://www.w3.org/1999/xlink","href","#curve"),y.innerHTML="SOUL FOOD",x.appendChild(y);const C=document.createElement("div"),S=document.createElement("div");C.classList.add("vitre"),S.classList.add("vitre"),p.appendChild(C),u.appendChild(S);const E=document.createElement("div"),L=document.createElement("div");E.classList.add("door-relief"),L.classList.add("door-relief"),p.appendChild(L),u.appendChild(E);const U=document.createElement("div");U.classList.add("menu-graff");const X=document.createElement("p");X.classList.add("meals"),X.innerHTML="Chicken & Waffles<br>Waffle burger<br>Filet & waffles<br>Chicken burger<br>2 pieces w/side<br>2 filets w/ side<br> 3 pieces w/ 2 sides<br> Veggie bowl",U.appendChild(X);const F=document.createElement("p");F.classList.add("prices"),F.innerHTML="11 €<br>12 €<br>13 €<br>12 €<br>11 €<br>13 €<br>15 €<br>10 €",U.appendChild(F),s.appendChild(U);const T=document.createElement("img");T.src=e,T.classList.add("street-sign"),m.appendChild(T);const z=document.createElement("div");z.classList.add("all-logos"),b.appendChild(z);const I=document.createElement("a");I.href="https://www.yelp.com/biz/gumbo-yaya-paris";const O=document.createElement("img");O.src=n,O.classList.add("icons"),z.appendChild(I),I.appendChild(O);const M=document.createElement("a");M.href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d8786534-Reviews-Gumbo_Yaya_Chicken_And_Waffles-Paris_Ile_de_France.html";const P=document.createElement("img");P.src="data:image/png;base64,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",P.classList.add("icons"),z.appendChild(M),M.appendChild(P);const R=document.createElement("a");R.href="https://www.timeout.com/paris/en/restaurants/gumbo-yaya";const V=document.createElement("img");V.src="data:image/png;base64,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",V.classList.add("icons"),R.appendChild(V),z.appendChild(R)}t.p,t.p,t.p,t.p;var o=t(379),a=t.n(o),i=t(795),d=t.n(i),s=t(569),c=t.n(s),l=t(565),p=t.n(l),u=t(216),m=t.n(u),h=t(589),f=t.n(h),g=t(426),b={};b.styleTagTransform=f(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=m(),a()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,console.log("statement always banging"),r(),document.querySelector(".info-page").addEventListener("click",(function(){const n=document.querySelector("#content");n.replaceChildren();const e=document.createElement("span"),t=document.createElement("div"),r=document.createElement("span");t.classList.add("parent-subtitle"),e.classList.add("child-subtitle"),r.classList.add("child-subtitle","child-subtitle2"),e.innerHTML="I N F O R M A T I O N   ★  A C C E S S  ★",r.innerHTML="I N F O R M A T I O N   ★  A C C E S S  ★",t.appendChild(e),t.appendChild(r),n.appendChild(t)})),document.querySelector(".about-page").addEventListener("click",(function(){const n=document.querySelector("#content");n.replaceChildren();const e=document.createElement("span"),t=document.createElement("div"),r=document.createElement("span");t.classList.add("parent-subtitle"),e.classList.add("child-subtitle"),r.classList.add("child-subtitle","child-subtitle2"),e.innerHTML="A B O U T  ★  O U R  H I S T O R Y  ★",r.innerHTML="A B O U T  ★  O U R  H I S T O R Y  ★",t.appendChild(e),t.appendChild(r),n.appendChild(t);const o=document.createElement("div");o.classList.add("sub-header"),n.appendChild(o);const a=document.createElement("h2");a.innerText="HOME ★",a.classList.add("home-page"),o.appendChild(a);const i=document.createElement("h2");i.innerText=" INFO",i.classList.add("info-page"),o.appendChild(i)})),document.querySelector(".home-page").addEventListener("click",r)})()})();