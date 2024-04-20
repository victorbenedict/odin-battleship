(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),a=n(314),s=n.n(a)()(o());s.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n}\n\n.board {\n  margin: auto;\n  background-color: lightgrey;\n  display: inline-grid;\n  grid-template-columns: repeat(10, 50px);\n  grid-template-rows: repeat(10, 50px);\n  border: 1px solid black;\n}\n\n.cell {\n  border: 1px solid black;\n  text-align: center;\n  padding-top: 15px;\n}\n\n.ship {\n  background-color: darkcyan;\n}\n",""]);const i=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],p=r.base?c[0]+r.base:c[0],u=a[p]||0,d="".concat(p," ").concat(u);a[p]=u+1;var l=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(h);else{var f=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),p=0;p<a.length;p++){var u=n(a[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t){this.name=e,this.length=t,this.hitCount=0,this.isSunk=!1}hit(){this.hitCount+=1,this.hitCount>=this.length&&(this.isSunk=!0)}}class t{constructor(){this.ships=[],this.missedShots=[]}placeShip(t,n,r,o,a){const s=[];for(let e=0;e<n;e++){const t="x"===r?o+e:o,n="y"===r?a+e:a;s.push({x:t,y:n})}const i=new e(t,n);this.ships.push({ship:i,coordinates:s})}receiveAttack(e,t){for(const n of this.ships)for(const r of n.coordinates)if(r.x===e&&r.y===t)return n.ship.hit(),!0;return this.missedShots.push({x:e,y:t}),!1}isShipsSunk(){for(const e of this.ships)if(!e.ship.isSunk)return!1;return!0}}class r{constructor(e,n){this.name=e,this.type=n,this.gameboard=new t}}var o=n(72),a=n.n(o),s=n(825),i=n.n(s),c=n(659),p=n.n(c),u=n(56),d=n.n(u),l=n(540),h=n.n(l),f=n(113),m=n.n(f),v=n(208),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=p().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=h(),a()(v.A,y),v.A&&v.A.locals&&v.A.locals,document.body.appendChild((()=>{const e=document.createElement("div"),t=document.createElement("div");t.className="board";for(let e=10;e>=1;e--)for(let n=1;n<=10;n++){const r=document.createElement("div"),o=`${n},${e}`;r.classList.add("cell"),r.id=o,r.textContent=o,t.appendChild(r)}return e.appendChild(t),e})()),(()=>{const e=new r("avatar","human");e.gameboard.placeShip("CV",5,"x",1,1),e.gameboard.placeShip("BB",4,"x",1,2),e.gameboard.placeShip("CC",3,"x",1,3),e.gameboard.placeShip("DD",2,"x",1,4),e.gameboard.placeShip("SS",1,"x",1,5),e.gameboard.ships.map((e=>{const t=e.ship.name;e.coordinates.map((e=>{const n=`${e.x},${e.y}`,r=document.getElementById(n);r.textContent=t,r.classList.add("ship")}))}))})()})()})();