!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(e.i,r,i),r.locals?r.locals:{});e.exports=c},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c={};function a(e,t,n){for(var o=0;o<t.length;o++){var r={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};c[e][o]?c[e][o](r):c[e].push(v(r,n))}}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function v(e,t){var n,o,r;if(t.singleton){var i=m++;n=p||(p=s(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=s(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r()),e=n.base?e+n.base:e,t=t||[],c[e]||(c[e]=[]),a(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){c[e]||(c[e]=[]),a(e,t,n);for(var o=t.length;o<c[e].length;o++)c[e][o]();c[e].length=t.length,0===c[e].length&&delete c[e]}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".hidden { visibility: hidden; }\n.visible { visibility: visible; }",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var o=(()=>{const e=()=>{const t=document.getElementById("new-project"),n=document.getElementById("create-form");t.addEventListener("click",o=>{o.preventDefault(),n.classList.remove("hidden"),n.classList.add("visible"),t.removeEventListener("click",e,!1)})};return{popUp:e}})();const r=window.localStorage.getItem("projects")?JSON.parse(window.localStorage.getItem("projects")):[{title:"Sample-Project-1"}],i={render:e=>{e.forEach(e=>{const t=document.getElementById("projects"),n=document.createElement("DIV");n.classList.add("project-entry");const o=document.createElement("P");o.textContent=`${e.title}`,n.appendChild(o);const r=document.createElement("BUTTON");r.classList.add("list-entry-btn"),r.setAttribute("value",`${e.title}`),r.textContent="+",n.appendChild(r);const i=document.createElement("BUTTON");i.classList.add("delete-entry"),i.textContent="Delete",n.appendChild(i),t.appendChild(n)})},projectSubmission:()=>{const e=document.getElementById("new-project"),t=document.forms["project-form"],n=document.getElementById("create-form");t.addEventListener("submit",i=>{i.preventDefault();const c=Object.fromEntries(new FormData(t));var a;a=c.title,r.unshift((e=>({title:e}))(a)),window.localStorage.setItem("projects",JSON.stringify(r)),n.classList.remove("visible"),n.classList.add("hidden"),document.location.reload(),e.addEventListener("click",o.popUp(),!1),t.reset()})},listBtnListeners:()=>{const e=document.querySelectorAll(".list-entry-btn"),t=document.getElementById("todo-entry"),n=document.getElementById("todo-form");e.forEach(e=>{e.addEventListener("click",o=>{if(o.preventDefault(),t.classList.contains("hidden")){t.classList.remove("hidden"),t.classList.add("visible");const o=document.createElement("INPUT");o.setAttribute("type","hidden"),o.setAttribute("value",`${e.value}`),o.setAttribute("name","project"),n.appendChild(o)}else t.classList.remove("visible"),t.classList.add("hidden"),n.removeChild(n.lastChild)})})}},c=window.localStorage.getItem("todo")?JSON.parse(window.localStorage.getItem("todo")):[],a=(()=>{const e=(e,t,n,o,r)=>{c.unshift(((e,t,n,o,r)=>({title:e,description:t,dateCreated:Date.now(),dateDue:n,priority:o,project:r}))(e,t,n,o,r)),window.localStorage.setItem("todo",JSON.stringify(c))};return{render:e=>{e.forEach(e=>{const t=document.createElement("DIV"),n=document.createElement("P");n.textContent=`${e.title}`,t.appendChild(n);const o=document.createElement("P");o.textContent=`${e.description}`,t.appendChild(o);const r=document.createElement("P");r.textContent=`${e.dateCreated}`,t.appendChild(r);const i=document.createElement("P");i.textContent=`${e.dateDue}`,t.appendChild(i)})},formListener:()=>{const t=document.getElementById("todo-form"),n=document.getElementById("todo-entry");t.addEventListener("submit",o=>{o.preventDefault();const r=Object.fromEntries(new FormData(t));e(r.title,r.description,r.dateDue,r.priority,r.project),console.log(c),document.location.reload(),n.classList.remove("visible"),n.classList.add("hidden"),t.reset()})},toDoArray:c}})();n(0);o.popUp(),i.projectSubmission(),console.log(r),i.render(r),i.listBtnListeners(),a.formListener(),console.log(c)}]);