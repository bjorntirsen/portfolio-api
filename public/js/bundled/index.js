!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire0166;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){let t=n[e];delete n[e];let o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){n[e]=t},t.parcelRequire0166=o);var s;o.register("77Jfo",(function(e,t){"use strict";var r=o("6RDd7"),n=o("1TrDb"),s=o("5zxIY"),i=o("6hYqr");function a(e){var t=new s(e),o=n(s.prototype.request,t);return r.extend(o,s.prototype,t),r.extend(o,t),o}var u=a(o("nVkK6"));u.Axios=s,u.create=function(e){return a(i(u.defaults,e))},u.Cancel=o("6EOPV"),u.CancelToken=o("6aEsB"),u.isCancel=o("6eB1R"),u.all=function(e){return Promise.all(e)},u.spread=o("7L8n1"),u.isAxiosError=o("3UF4m"),e.exports=u,e.exports.default=u})),o.register("6RDd7",(function(e,t){"use strict";var r=o("1TrDb"),n=Object.prototype.toString;function s(e){return"[object Array]"===n.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==n.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===n.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:i,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}})),o.register("1TrDb",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),o.register("5zxIY",(function(e,t){"use strict";var r=o("6RDd7"),n=o("2z8O1"),s=o("4w4it"),i=o("2AS5r"),a=o("6hYqr");function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},u.prototype.getUri=function(e){return e=a(this.defaults,e),n(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=u})),o.register("2z8O1",(function(e,t){"use strict";var r=o("6RDd7");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,o){if(!t)return e;var s;if(o)s=o(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}})),o.register("4w4it",(function(e,t){"use strict";var r=o("6RDd7");function n(){this.handlers=[]}n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),o.register("2AS5r",(function(e,t){"use strict";var r=o("6RDd7"),n=o("9EmR4"),s=o("6eB1R"),i=o("nVkK6");function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=n(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=n(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=n(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("9EmR4",(function(e,t){"use strict";var r=o("6RDd7");e.exports=function(e,t,n){return r.forEach(n,(function(r){e=r(e,t)})),e}})),o.register("6eB1R",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("nVkK6",(function(e,t){var r=o("7lbf0"),n=o("6RDd7"),s=o("6pXOn"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(u=o("7rdhw")),u),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(i)})),e.exports=c})),o.register("7lbf0",(function(e,t){var r,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,c=[],f=!1,d=-1;function l(){f&&u&&(f=!1,u.length?c=u.concat(c):d=-1,c.length&&p())}function p(){if(!f){var e=a(l);f=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||f||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),o.register("6pXOn",(function(e,t){"use strict";var r=o("6RDd7");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),o.register("7rdhw",(function(e,t){"use strict";var r=o("6RDd7"),n=o("12yYJ"),s=o("7wpGN"),i=o("2z8O1"),a=o("7oHk1"),u=o("RkgUK"),c=o("2vBuo"),f=o("6rU6y");e.exports=function(e){return new Promise((function(t,o){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.Authorization="Basic "+btoa(m+":"+h)}var g=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?u(p.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};n(t,o,s),p=null}},p.onabort=function(){p&&(o(f("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){o(f("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(f(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||c(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(l,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),o(e),p=null)})),d||(d=null),p.send(d)}))}})),o.register("12yYJ",(function(e,t){"use strict";var r=o("6rU6y");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}})),o.register("6rU6y",(function(e,t){"use strict";var r=o("4FrPj");e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}})),o.register("4FrPj",(function(e,t){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}})),o.register("7wpGN",(function(e,t){"use strict";var r=o("6RDd7");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("7oHk1",(function(e,t){"use strict";var r=o("1gHMv"),n=o("6SL6e");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),o.register("1gHMv",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}})),o.register("6SL6e",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("RkgUK",(function(e,t){"use strict";var r=o("6RDd7"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,o,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),o=r.trim(e.substr(s+1)),t){if(i[t]&&n.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([o]):i[t]?i[t]+", "+o:o}})),i):i}})),o.register("2vBuo",(function(e,t){"use strict";var r=o("6RDd7");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),o.register("6hYqr",(function(e,t){"use strict";var r=o("6RDd7");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function c(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=u(void 0,t[e]))})),r.forEach(s,c),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=u(void 0,e[o])):n[o]=u(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=u(e[r],t[r]):r in e&&(n[r]=u(void 0,e[r]))}));var f=o.concat(s).concat(i).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(d,c),n}})),o.register("6EOPV",(function(e,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r})),o.register("6aEsB",(function(e,t){"use strict";var r=o("6EOPV");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),o.register("7L8n1",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("3UF4m",(function(e,t){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}})),s=o("77Jfo");const i=()=>{const e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)},a=(e,t,r=3)=>{i();const n=`<div class="alert alert-${e} text-center" role="alert">\n    ${t}\n  </div>`;document.querySelector("body").insertAdjacentHTML("afterbegin",n),window.setTimeout(i,1e3*r)},u=()=>({title:document.getElementById("title").value,subtitle:document.getElementById("subtitle").value,description:document.getElementById("description").value,dateFirstCompleted:document.getElementById("dateFirstCompleted").value,siteLink:document.getElementById("siteLink").value,techniquesUsed:document.getElementById("techniquesUsed").value,githubRepo:document.getElementById("githubRepo").value});window.setTimeout(i,3e3);const c=document.querySelector(".form-project-data"),f=document.querySelector(".form-project-data-update"),d=document.querySelector(".form-login"),l=document.getElementById("deleteBtn"),p=document.querySelector(".form-project-cover"),m=document.querySelector(".form-project-images");c&&c.addEventListener("submit",(t=>{t.preventDefault(),data=u(),(async t=>{try{const r="/admin/projects";"success"===(await e(s)({method:"POST",url:r,data:t})).data.status&&a("success","Sucessfully added project!")}catch(e){console.error("error",e)}})(data)})),f&&f.addEventListener("submit",(t=>{t.preventDefault(),data=u(),(async t=>{try{const r=`/admin/projects/${document.getElementById("projectId").value}`;"success"===(await e(s)({method:"PATCH",url:r,data:t})).data.status&&a("success","Sucessfully updated project!")}catch(e){console.error("error",e)}})(data)})),l&&l.addEventListener("click",(t=>{t.target.textContent="Processing...";const{projectId:r}=t.target.dataset;(async t=>{try{const r=`/admin/projects/${t}`;await e(s)({method:"DELETE",url:r}),a("success","Sucessfully deleted project!");const n=document.getElementById(`row${t}`);n&&n.parentElement.removeChild(n)}catch(e){console.error("error",e)}})(r)})),d&&d.addEventListener("submit",(t=>{t.preventDefault();(async(t,r)=>{try{"success"===(await e(s)({method:"POST",url:"/login",data:{email:t,password:r}})).data.status&&(a("success","Logged in successfully!"),window.setTimeout((()=>{location.assign("/adminIndex")}),1500))}catch(e){a("error",e.response.data.message)}})(document.getElementById("email").value,document.getElementById("password").value)})),p&&p.addEventListener("submit",(t=>{if(t.preventDefault(),document.getElementById("image").files[0]){const t=new FormData;t.append("image",document.getElementById("image").files[0]),(async t=>{try{const r=`/admin/projects/image/${document.getElementById("projectId").value}`;"success"===(await e(s)({method:"POST",url:r,data:t})).data.status&&location.reload()}catch(e){console.error("error",e)}})(t)}else a("warning","Please select an image!",5)})),m&&m.addEventListener("submit",(t=>{t.preventDefault();const r=new FormData;r.append("images",document.getElementById("images").files),(async t=>{try{const r="/admin/projects";"success"===(await e(s)({method:"POST",url:r,data:t})).data.status&&location.reload()}catch(e){console.error("error",e)}})(r)})),urlArray=window.location.href.split("/");const h=urlArray[urlArray.length-1];if(h){const e=document.getElementById(h);e&&(e.className+=" active text-decoration-underline")}}();
//# sourceMappingURL=index.js.map
