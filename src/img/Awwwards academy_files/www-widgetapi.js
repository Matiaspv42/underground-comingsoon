(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function u(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function ra(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.v=0;this.I=this.j=null}
function sa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ra.prototype.B=function(a){this.i=a};
function ta(a,b){a.j={Na:b,Ra:!0};a.h=a.v||a.m}
ra.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
ra.prototype.o=function(a){this.h=a};
function ua(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function wa(a,b){a.h=b;a.v=0}
function xa(a){a.v=0;var b=a.j.Na;a.j=null;return b}
function ya(a){a.I=[a.j];a.v=0;a.m=0}
function za(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.Ra?a.h=a.v||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function Aa(a){this.h=new ra;this.i=a}
function Ba(a,b){sa(a.h);var c=a.h.l;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Da(a)}a.h.l=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ra)throw b.Na;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){sa(a.h);a.h.l?b=Ca(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=Da(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Ca(a,a.h.l["throw"],b,a.h.B):(ta(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Fa(new Ea(new Aa(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.va),reject:g(this.m)}};
b.prototype.va=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.eb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ka(g):this.v(g)}};
b.prototype.ka=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.fb(h,g):this.v(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.v=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.cb();this.I()};
b.prototype.cb=function(){var g=this;e(function(){if(g.O()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.O=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.eb=function(g){var h=this.l();g.ma(h.resolve,h.reject)};
b.prototype.fb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,q){return"function"==typeof v?function(x){try{l(v(x))}catch(y){m(y)}}:q}
var l,m,p=new b(function(v,q){l=v;m=q});
this.ma(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ma=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ma(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(y){v[x]=y;q--;0==q&&l(v)}}
var v=[],q=0;do v.push(void 0),q++,d(k.value).ma(p(v.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ia(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
var B=this||self;function C(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function Ka(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function La(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ra(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra=Pa:Ra=Qa;return Ra.apply(null,arguments)}
function D(a,b){a=a.split(".");var c=B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Mb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.hb=b)}
E(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ya(a,b){b=Wa(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Za(a){return Array.prototype.concat.apply([],arguments)}
function $a(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function cb(a){var b=db,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function eb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function fb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=fb(a[c]);return b}
var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ib;function jb(){}
function kb(a){return new jb(lb,a)}
var lb={};kb("");var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,tb=/[\x00&<>"']/;function ub(){var a=B.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=ub().indexOf(a)}
;function vb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var wb={};function xb(a){this.h=wb===wb?a:""}
xb.prototype.toString=function(){return this.h.toString()};var yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zb(a){return a?decodeURI(a):a}
function Ab(a){return zb(a.match(yb)[3]||null)}
function Bb(a){var b=a.match(yb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Cb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Cb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Db(a){var b=[],c;for(c in a)Cb(c,a[c],b);return b.join("&")}
var Eb=/#|$/;function Fb(a,b){var c=a.search(Eb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Gb(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function Hb(a){Hb[" "](a);return a}
Hb[" "]=Ja;var Ib=G("Opera"),Jb=G("Trident")||G("MSIE"),Kb=G("Edge"),Lb=G("Gecko")&&!(-1!=ub().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Mb=-1!=ub().toLowerCase().indexOf("webkit")&&!G("Edge");function Ob(){var a=B.document;return a?a.documentMode:void 0}
var Pb;a:{var Qb="",Rb=function(){var a=ub();if(Lb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kb)return/Edge\/([\d\.]+)/.exec(a);if(Jb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mb)return/WebKit\/(\S+)/.exec(a);if(Ib)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rb&&(Qb=Rb?Rb[1]:"");if(Jb){var Sb=Ob();if(null!=Sb&&Sb>parseFloat(Qb)){Pb=String(Sb);break a}}Pb=Qb}var Tb=Pb,Ub;if(B.document&&Jb){var Vb=Ob();Ub=Vb?Vb:parseInt(Tb,10)||void 0}else Ub=void 0;var Wb=Ub;var Xb=Gb()||G("iPod"),Yb=G("iPad");!G("Android")||vb();vb();var Zb=G("Safari")&&!(vb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(Gb()||G("iPad")||G("iPod"));var $b={},ac=null;
function bc(a,b){Ka(a);void 0===b&&(b=0);if(!ac){ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));$b[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ac[h]&&(ac[h]=g)}}}b=$b[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var cc="function"===typeof Uint8Array;var dc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ec(a){Object.isFrozen(a)||(dc?a[dc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function fc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var gc,hc=Object.freeze(ec([]));function ic(a,b){if(jc){var c={};Object.defineProperties(a,(c[Symbol.hasInstance]={value:b,configurable:!1,writable:!1,enumerable:!1},c))}}
var jc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function kc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.H[b+a.j]}
function H(a,b,c,d){b<a.l&&(void 0===d||!d)?a.H[b+a.j]=c:(a.i||(a.i=a.H[a.l+a.j]={}))[b]=c;return a}
function lc(a,b,c){c=void 0===c?!1:c;var d=kc(a,b,c);null==d&&(d=hc);d===hc&&(d=ec(d.slice()),H(a,b,d,c));return d}
function mc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=kc(a,e)&&(0!==c&&H(a,c,void 0,!1),c=e)}return c}
function nc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=kc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function oc(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=lc(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function pc(a,b,c,d){a.h||(a.h={});var e=c?c.H:c;a.h[b]=c;return H(a,b,e,void 0===d?!1:d)}
function qc(a,b,c,d){var e=oc(a,c,b,void 0===e?!1:e);c=d?d:new c;a=lc(a,b);e.push(c);a.push(c.H)}
;function rc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&cc&&null!=a&&a instanceof Uint8Array)return bc(a)}return a}
;function sc(a,b){if(null!=a){if(Array.isArray(a))a=tc(a,b);else if(fc(a)){var c={},d;for(d in a)c[d]=sc(a[d],b);a=c}else a=b(a);return a}}
function tc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=sc(c[d],b);if(Array.isArray(a)){var e;dc?e=a[dc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&ec(c);return c}
function uc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=rc(a);return Array.isArray(a)?tc(a,uc):a}
function vc(a){return cc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var wc;function xc(a,b,c){var d=wc;wc=null;a||(a=d);d=this.constructor.Rb;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.Qb||0);this.h=void 0;this.H=a;a:{d=this.H.length;a=d-1;if(d&&(d=this.H[a],fc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.H[a])?Array.isArray(d)&&ec(d):this.H[a]=hc;else{d=this.i||(this.i=this.H[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
ec(e):d[a]=hc}}
xc.prototype.toJSON=function(){var a=this.H;return gc?a:tc(a,uc)};
function yc(a,b){return rc(b)}
xc.prototype.toString=function(){return this.H.toString()};
xc.prototype.clone=function(){var a=this.constructor,b;wc=b=tc(this.H,vc);a=new a(b);wc=null;zc(a,this);return a};
function zc(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=oc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)zc(f[g],e[g])}else(f=nc(a,e.constructor,g,void 0,f))&&zc(f,e)}}}}
;function Ac(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;if(b){var e=ec([]);for(var f=0;f<b.length;f++)e[f]=b[f].H;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=hc;a=H(a,c,e,d)}else a=pc(a,c,b,!0);return a}
;function Bc(){xc.apply(this,arguments)}
u(Bc,xc);ic(Bc,function(){throw Error("Cannot perform instanceof checks for MutableMessage");});function I(){Bc.apply(this,arguments)}
u(I,Bc);ic(I,jc?Object[Symbol.hasInstance]:void 0);var Cc=window;kb("csi.gstatic.com");kb("googleads.g.doubleclick.net");kb("partner.googleadservices.com");kb("pubads.g.doubleclick.net");kb("securepubads.g.doubleclick.net");kb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Dc(a,b){this.width=a;this.height=b}
n=Dc.prototype;n.clone=function(){return new Dc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Ec(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Fc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Gc(a){var b=Hc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ic(){var a=[];Gc(function(b){a.push(b)});
return a}
var Hc={ub:"allow-forms",vb:"allow-modals",wb:"allow-orientation-lock",xb:"allow-pointer-lock",yb:"allow-popups",zb:"allow-popups-to-escape-sandbox",Ab:"allow-presentation",Bb:"allow-same-origin",Cb:"allow-scripts",Db:"allow-top-navigation",Eb:"allow-top-navigation-by-user-activation"},Jc=Va(function(){return Ic()});
function Kc(){var a=Lc(),b={};F(Jc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Lc(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Mc=(new Date).getTime();var Nc=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959);function Oc(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Pc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var v=g,q=0;64>q;q+=4)v[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=v[q-3]^v[q-8]^v[q-14]^v[q-16],v[q]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],A=e[3],M=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var O=A^x&(y^A);var P=1518500249}else O=x^y^A,P=1859775393;else 60>q?(O=x&y|A&(x|y),P=2400959708):(O=x^y^A,P=3395469782);O=((p<<5|p>>>27)&4294967295)+O+M+P+v[q]&4294967295;M=A;A=y;y=(x<<30|x>>>2)&4294967295;x=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+M&4294967295}
function c(p,v){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],x=0,y=p.length;x<y;++x)q.push(p.charCodeAt(x));p=q}v||(v=p.length);q=0;if(0==l)for(;q+64<v;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<v;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<v;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=v&255,v>>>=8;b(f);for(q=v=0;5>q;q++)for(var x=24;0<=x;x-=8)p[v++]=e[q]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,jb:function(){for(var p=d(),v="",q=0;q<p.length;q++)v+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return v}}}
;function Qc(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,Rc(Oc(d),a,c||null)].join(" "):null}
function Rc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Sc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Sc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Sc(a){var b=Pc();b.update(a);return b.jb().toLowerCase()}
;var Tc={};function Uc(a){this.h=a||{cookie:""}}
n=Uc.prototype;n.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ca:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ub;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ca}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ca:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.h.cookie};
n.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vc=new Uc("undefined"==typeof document?null:document);function Wc(a){return!!Tc.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Xc(a,b,c,d){(a=B[a])||(a=(new Uc(document)).get(b));return a?Qc(a,c,d):null}
function Yc(a){var b=void 0===b?!1:b;var c=Oc(String(B.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;Wc(e)&&(f=f||B.__1PSAPISID);if(f)e=!0;else{var g=new Uc(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Wc(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,e||(e=new Uc(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Qc(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Wc(b)&&((b=Xc("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Xc("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Zc(){this.l=this.l;this.v=this.v}
Zc.prototype.l=!1;Zc.prototype.dispose=function(){this.l||(this.l=!0,this.fa())};
Zc.prototype.fa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function $c(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
$c.prototype.stopPropagation=function(){this.j=!0};
$c.prototype.preventDefault=function(){this.defaultPrevented=!0};function ad(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=bd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,cd[c])c=cd[c];else{c=String(c);if(!cd[c]){var f=/function\s+([^\(]+)/m.exec(c);cd[c]=f?f[1]:"[Anonymous]"}c=cd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function bd(a,b){b||(b={});b[dd(a)]=!0;var c=a.stack||"";(a=a.hb)&&!b[dd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=bd(a,b));return c}
function dd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var cd={};var ed=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ja,b),B.removeEventListener("test",Ja,b)}catch(c){}return a}();function fd(a,b){$c.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(fd,$c);var gd={2:"touch",3:"pen",4:"mouse"};
fd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Lb){a:{try{Hb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:gd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&fd.N.preventDefault.call(this)};
fd.prototype.stopPropagation=function(){fd.N.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
fd.prototype.preventDefault=function(){fd.N.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hd="closure_listenable_"+(1E6*Math.random()|0);var id=0;function jd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.pa=e;this.key=++id;this.ha=this.la=!1}
function kd(a){a.ha=!0;a.listener=null;a.proxy=null;a.src=null;a.pa=null}
;function ld(a){this.src=a;this.listeners={};this.h=0}
ld.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=md(a,b,d,e);-1<g?(b=a[g],c||(b.la=!1)):(b=new jd(b,this.src,f,!!d,e),b.la=c,a.push(b));return b};
ld.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=md(e,b,c,d);return-1<b?(kd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function nd(a,b){var c=b.type;c in a.listeners&&Ya(a.listeners[c],b)&&(kd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function md(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ha&&f.listener==b&&f.capture==!!c&&f.pa==d)return e}return-1}
;var od="closure_lm_"+(1E6*Math.random()|0),pd={},qd=0;function rd(a,b,c,d,e){if(d&&d.once)sd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)rd(a,b[f],c,d,e);else c=td(c),a&&a[hd]?a.Y(b,c,La(d)?!!d.capture:!!d,e):ud(a,b,c,!1,d,e)}
function ud(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=vd(a);h||(a[od]=h=new ld(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=wd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ed||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qd++}}
function wd(){function a(c){return b.call(a.src,a.listener,c)}
var b=yd;return a}
function sd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sd(a,b[f],c,d,e);else c=td(c),a&&a[hd]?a.h.add(String(b),c,!0,La(d)?!!d.capture:!!d,e):ud(a,b,c,!0,d,e)}
function zd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)zd(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=td(c),a&&a[hd])?a.h.remove(String(b),c,d,e):a&&(a=vd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=md(b,c,d,e)),(c=-1<a?b[a]:null)&&Ad(c))}
function Ad(a){if("number"!==typeof a&&a&&!a.ha){var b=a.src;if(b&&b[hd])nd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qd--;(c=vd(b))?(nd(c,a),0==c.h&&(c.src=null,b[od]=null)):kd(a)}}}
function xd(a){return a in pd?pd[a]:pd[a]="on"+a}
function yd(a,b){if(a.ha)a=!0;else{b=new fd(b,this);var c=a.listener,d=a.pa||a.src;a.la&&Ad(a);a=c.call(d,b)}return a}
function vd(a){a=a[od];return a instanceof ld?a:null}
var Bd="__closure_events_fn_"+(1E9*Math.random()>>>0);function td(a){if("function"===typeof a)return a;a[Bd]||(a[Bd]=function(b){return a.handleEvent(b)});
return a[Bd]}
;function J(){Zc.call(this);this.h=new ld(this);this.va=this;this.I=null}
E(J,Zc);J.prototype[hd]=!0;J.prototype.addEventListener=function(a,b,c,d){rd(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){zd(this,a,b,c,d)};
function Cd(a,b){var c=a.I;if(c){var d=[];for(var e=1;c;c=c.I)d.push(c),++e}a=a.va;c=b.type||b;"string"===typeof b?b=new $c(b,a):b instanceof $c?b.target=b.target||a:(e=b,b=new $c(c,a),hb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Dd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Dd(g,c,!0,b)&&e,b.j||(e=Dd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Dd(g,c,!1,b)&&e}
J.prototype.fa=function(){J.N.fa.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,kd(d[e]);delete a.listeners[c];a.h--}}this.I=null};
J.prototype.Y=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
function Dd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ha&&g.capture==c){var h=g.listener,k=g.pa||g.src;g.la&&nd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ed(a){J.call(this);var b=this;this.B=this.j=0;this.K=null!=a?a:{L:function(e,f){return setTimeout(e,f)},
W:clearTimeout};var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return z(function(e){return w(e,Fd(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||Gd(this)}
u(Ed,J);Ed.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.K.W(this.B);delete Ed.h};
Ed.prototype.D=function(){return this.i};
function Gd(a){a.B=a.K.L(function(){var b;return z(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.o(3):w(c,Fd(a),3):w(c,Fd(a),3);Gd(a);c.h=0})},3E4)}
function Fd(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return z(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.j=a.K.L(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:ya(h);a.u=void 0;a.j&&(a.K.W(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Cd(a,"networkstatus-online"):Cd(a,"networkstatus-offline"));c(g);za(h);break;case 2:xa(h),g=!1,h.o(3)}})})}
;function Hd(){this.data_=[];this.h=-1}
Hd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Hd.prototype.get=function(a){return!!this.data_[a]};
function Id(a){-1==a.h&&(a.h=Xa(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Jd(){var a={};this.A=function(b,c){return null!=a[b]?a[b]:c}}
;function Kd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Kd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ld(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Md;function Nd(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Ec();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ra(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ka;c.Ka=null;e()}};
return function(e){d.next={Ka:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Od(a){B.setTimeout(function(){throw a;},0)}
;function Pd(){this.i=this.h=null}
Pd.prototype.add=function(a,b){var c=Qd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Pd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Qd=new Kd(function(){return new Sd},function(a){return a.reset()});
function Sd(){this.next=this.scope=this.h=null}
Sd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Sd.prototype.reset=function(){this.next=this.scope=this.h=null};function Td(a,b){Ud||Vd();Wd||(Ud(),Wd=!0);Xd.add(a,b)}
var Ud;function Vd(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Ud=function(){a.then(Yd)}}else Ud=function(){var b=Yd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!G("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Md||(Md=Nd()),Md(b)):B.setImmediate(b)}}
var Wd=!1,Xd=new Pd;function Yd(){for(var a;a=Xd.remove();){try{a.h.call(a.scope)}catch(b){Od(b)}Ld(Qd,a)}Wd=!1}
;function Zd(a,b){this.h=a[B.Symbol.iterator]();this.i=b;this.j=0}
Zd.prototype[Symbol.iterator]=function(){return this};
Zd.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function $d(a,b){return new Zd(a,b)}
;function ae(){this.blockSize=-1}
;function be(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.v=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
E(be,ae);be.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ce(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
be.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ce(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ce(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ce(this,e);f=0;break}}this.i=f;this.l+=b}};
be.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ce(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var de="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function ee(){}
ee.prototype.R=function(){throw de;};
ee.prototype.next=function(){return fe};
var fe={done:!0,value:void 0};function ge(a){return{value:a,done:!1}}
function he(a){if(a.done)throw de;return a.value}
ee.prototype.J=function(){return this};function ie(a){if(a instanceof je||a instanceof ke||a instanceof le)return a;if("function"==typeof a.R)return new je(function(){return me(a)});
if("function"==typeof a[Symbol.iterator])return new je(function(){return a[Symbol.iterator]()});
if("function"==typeof a.J)return new je(function(){return me(a.J())});
throw Error("Not an iterator or iterable.");}
function me(a){if(!(a instanceof ee))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.R();break}catch(d){if(d!==de)throw d;b=!0}return{value:c,done:b}}}}
function je(a){this.h=a}
je.prototype.J=function(){return new ke(this.h())};
je.prototype[Symbol.iterator]=function(){return new le(this.h())};
je.prototype.i=function(){return new le(this.h())};
function ke(a){this.h=a}
u(ke,ee);ke.prototype.R=function(){var a=this.h.next();if(a.done)throw de;return a.value};
ke.prototype.next=function(){return this.h.next()};
ke.prototype[Symbol.iterator]=function(){return new le(this.h)};
ke.prototype.i=function(){return new le(this.h)};
function le(a){je.call(this,function(){return a});
this.j=a}
u(le,je);le.prototype.next=function(){return this.j.next()};function ne(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ne)for(c=oe(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function oe(a){pe(a);return a.h.concat()}
n=ne.prototype;n.has=function(a){return qe(this.i,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||re;pe(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function re(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.i={};this.j=this.size=this.h.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return qe(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&pe(this),!0):!1};
function pe(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];qe(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],qe(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
n.get=function(a,b){return qe(this.i,a)?this.i[a]:b};
n.set=function(a,b){qe(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
n.forEach=function(a,b){for(var c=oe(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new ne(this)};
n.keys=function(){return ie(this.J(!0)).i()};
n.values=function(){return ie(this.J(!1)).i()};
n.entries=function(){var a=this;return $d(this.keys(),function(b){return[b,a.get(b)]})};
n.J=function(a){pe(this);var b=0,c=this.j,d=this,e=new ee;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return fe;var g=d.h[b++];return ge(a?g:d.i[g])};
var f=e.next;e.R=function(){return he(f.call(e))};
return e};
function qe(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var se=B.JSON.stringify;function te(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ue(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.v=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){ve(b,2,c)},function(c){ve(b,3,c)})}catch(c){ve(this,3,c)}}
function we(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
we.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var xe=new Kd(function(){return new we},function(a){a.reset()});
function ye(a,b,c){var d=xe.get();d.i=a;d.onRejected=b;d.context=c;return d}
ue.prototype.then=function(a,b,c){return ze(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ue.prototype.$goog_Thenable=!0;ue.prototype.cancel=function(a){if(0==this.h){var b=new Ae(a);Td(function(){Be(this,b)},this)}};
function Be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ce(c),De(c,e,3,b)))}a.j=null}else ve(a,3,b)}
function Ee(a,b){a.i||2!=a.h&&3!=a.h||Fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ze(a,b,c,d){var e=ye(null,null,null);e.h=new ue(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ae?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ee(a,e);return e.h}
ue.prototype.I=function(a){this.h=0;ve(this,2,a)};
ue.prototype.O=function(a){this.h=0;ve(this,3,a)};
function ve(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.I,f=a.O;if(d instanceof ue){Ee(d,ye(e||Ja,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(La(d))try{var k=d.then;if("function"===typeof k){Ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,Fe(a),3!=b||c instanceof Ae||He(a,c))}}
function Ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fe(a){a.v||(a.v=!0,Td(a.B,a))}
function Ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ue.prototype.B=function(){for(var a;a=Ce(this);)De(this,a,this.h,this.u);this.v=!1};
function De(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Ie(b,c,d);else try{b.j?b.i.call(b.context):Ie(b,c,d)}catch(e){Je.call(null,e)}Ld(xe,b)}
function Ie(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function He(a,b){a.m=!0;Td(function(){a.m&&Je.call(null,b)})}
var Je=Od;function Ae(a){Ta.call(this,a)}
E(Ae,Ta);Ae.prototype.name="cancel";function K(a){Zc.call(this);this.u=1;this.j=[];this.m=0;this.h=[];this.i={};this.B=!!a}
E(K,Zc);n=K.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function Ke(a,b,c){var d=Le;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ja(a)}}
n.ja=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.j.push(a),this.h[a+1]=Ja):(c&&Ya(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.ca=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Me(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.j.length&&0==this.m)for(;c=this.j.pop();)this.ja(c)}}return 0!=e}return!1};
function Me(a,b,c){Td(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ja,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.fa=function(){K.N.fa.call(this);this.clear();this.j.length=0};function Ne(a){this.h=a}
Ne.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,se(b))};
Ne.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ne.prototype.remove=function(a){this.h.remove(a)};function Oe(a){this.h=a}
E(Oe,Ne);function Pe(a){this.data=a}
function Qe(a){return void 0===a||a instanceof Pe?a:new Pe(a)}
Oe.prototype.set=function(a,b){Oe.N.set.call(this,a,Qe(b))};
Oe.prototype.i=function(a){a=Oe.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Oe.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Re(a){this.h=a}
E(Re,Oe);Re.prototype.set=function(a,b,c){if(b=Qe(b)){if(c){if(c<Date.now()){Re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Re.N.set.call(this,a,b)};
Re.prototype.i=function(a){var b=Re.N.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Re.prototype.remove.call(this,a);else return b}};function Se(){}
;function Te(){}
E(Te,Se);Te.prototype[Symbol.iterator]=function(){return ie(this.J(!0)).i()};
Te.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ue(a){this.h=a}
E(Ue,Te);n=Ue.prototype;n.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeItem(a)};
n.J=function(a){var b=0,c=this.h,d=new ee;d.next=function(){if(b>=c.length)return fe;var f=c.key(b++);if(a)return ge(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ge(f)};
var e=d.next;d.R=function(){return he(e.call(d))};
return d};
n.clear=function(){this.h.clear()};
n.key=function(a){return this.h.key(a)};function Ve(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
E(Ve,Ue);function We(a,b){this.i=a;this.h=null;var c;if(c=Jb)c=!(9<=Number(Wb));if(c){Xe||(Xe=new ne);this.h=Xe.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Xe.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
E(We,Te);var Ye={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xe=null;function Ze(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ye[b]})}
n=We.prototype;n.isAvailable=function(){return!!this.h};
n.set=function(a,b){this.h.setAttribute(Ze(a),b);$e(this)};
n.get=function(a){a=this.h.getAttribute(Ze(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.h.removeAttribute(Ze(a));$e(this)};
n.J=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new ee;d.next=function(){if(b>=c.length)return fe;var f=c[b++];if(a)return ge(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ge(f)};
var e=d.next;d.R=function(){return he(e.call(d))};
return d};
n.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$e(this)};
function $e(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function af(a,b){this.i=a;this.h=b+"::"}
E(af,Te);af.prototype.set=function(a,b){this.i.set(this.h+a,b)};
af.prototype.get=function(a){return this.i.get(this.h+a)};
af.prototype.remove=function(a){this.i.remove(this.h+a)};
af.prototype.J=function(a){var b=this.i.J(!0),c=this,d=new ee;d.next=function(){try{var f=b.R()}catch(g){if(g===de)return fe;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.R()}catch(g){if(g===de)return fe;throw g;}return ge(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.R=function(){return he(e.call(d))};
return d};function bf(a){I.call(this,a)}
u(bf,I);bf.prototype.getKey=function(){return kc(this,1)};
bf.prototype.X=function(){return kc(this,2===mc(this,cf)?2:-1)};
bf.prototype.setValue=function(a){var b=mc(this,cf);b&&2!==b&&null!=a&&(this.h&&b in this.h&&(this.h[b]=void 0),H(this,b,void 0));return H(this,2,a)};
var cf=[2,3,4,5,6];function df(a){I.call(this,a)}
u(df,I);function ef(a){I.call(this,a)}
u(ef,I);function ff(a){I.call(this,a)}
u(ff,I);function gf(a){I.call(this,a,-1,hf)}
u(gf,I);gf.prototype.getPlayerType=function(){return kc(this,36)};
gf.prototype.setHomeGroupInfo=function(a){return pc(this,81,a)};
var hf=[9,66,24,32,86,100,101];function jf(a){I.call(this,a,-1,kf)}
u(jf,I);var kf=[15,26,28];function lf(a){I.call(this,a)}
u(lf,I);lf.prototype.setToken=function(a){return H(this,2,a)};function mf(a){I.call(this,a,-1,nf)}
u(mf,I);mf.prototype.setSafetyMode=function(a){return H(this,5,a)};
var nf=[12];function of(a){I.call(this,a,-1,pf)}
u(of,I);var pf=[12];function qf(a){I.call(this,a,421)}
u(qf,I);function rf(a){I.call(this,a)}
u(rf,I);var sf=[1,2];function tf(a){I.call(this,a,-1,uf)}
u(tf,I);var uf=[3];function vf(a){I.call(this,a,1)}
u(vf,I);function wf(a){I.call(this,a)}
u(wf,I);var xf;xf=new function(a,b,c,d){this.h=a;this.fieldName=b;this.isRepeated=d;this.i=Ac}(406606992,{Pb:0},wf,0);function yf(){wf.apply(this,arguments)}
u(yf,wf);var zf=B.window,Af,Bf,Cf=(null==zf?void 0:null==(Af=zf.yt)?void 0:Af.config_)||(null==zf?void 0:null==(Bf=zf.ytcfg)?void 0:Bf.data_)||{},Df,Ef=(null==zf?void 0:null==(Df=zf.ytcfg)?void 0:Df.obfuscatedData_)||[];function Ff(){vf.apply(this,arguments)}
u(Ff,vf);var Gf=new Ff(Ef),Hf=Cf.EXPERIMENT_FLAGS;if(!Hf||!Hf.jspb_i18n_extension){var If=new yf;xf.i(Gf,If)}D("yt.config_",Cf);D("yt.configJspb_",Ef);function Jf(){var a=arguments;1<a.length?Cf[a[0]]=a[1]:1===a.length&&Object.assign(Cf,a[0])}
function L(a,b){return a in Cf?Cf[a]:b}
function Kf(){return L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0)}
;var Lf=[];function Mf(a){Lf.forEach(function(b){return b(a)})}
function Nf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Of(b)}}:a}
function Of(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Jf("ERRORS",e));Mf(a)}
function Pf(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Jf("ERRORS",e))}
;var Qf=0;D("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Qf});var Rf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rf||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var db=B.ytEventsEventsListeners||{};D("ytEventsEventsListeners",db);var Tf=B.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Tf);
function Uf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return cb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=La(e[4])&&La(d)&&eb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Vf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in db){var c=db[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete db[b]}}))}
var Wf=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Xf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Uf(a,b,c,d);if(!e){e=++Tf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sf(h);if(!Fc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sf(h);
h.currentTarget=a;return c.call(a,h)};
g=Nf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);db[e]=[a,b,c,g,d]}}}
;function Yf(a,b){"function"===typeof a&&(a=Nf(a));return window.setTimeout(a,b)}
function Zf(a){"function"===typeof a&&(a=Nf(a));return window.setInterval(a,250)}
;var $f=/^[\w.]*$/,ag={q:!0,search_query:!0};function bg(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=cg(f[0]||""),h=cg(f[1]||"");g in c?Array.isArray(c[g])?ab(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(bg);k.args=[{key:l,value:f[1],query:a,method:dg==m?"unchanged":m}];ag.hasOwnProperty(l)||Pf(k)}}return c}
var dg=String(bg);function eg(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fg(a){"?"==a.charAt(0)&&(a=a.substr(1));return bg(a,"&")}
function gg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Db(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function hg(a){if(!b)var b=window.location.href;var c=a.match(yb)[1]||null,d=Ab(a);c&&d?(a=a.match(yb),b=b.match(yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ab(b)==d&&(Number(b.match(yb)[4]||null)||null)==(Number(a.match(yb)[4]||null)||null):!0;return a}
function cg(a){return a&&a.match($f)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function N(a){a=ig(a);return"string"===typeof a&&"false"===a?!1:!!a}
function jg(a,b){a=ig(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ig(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function kg(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var lg={Jb:"WEB_DISPLAY_MODE_UNKNOWN",Fb:"WEB_DISPLAY_MODE_BROWSER",Hb:"WEB_DISPLAY_MODE_MINIMAL_UI",Ib:"WEB_DISPLAY_MODE_STANDALONE",Gb:"WEB_DISPLAY_MODE_FULLSCREEN"};var mg={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},ng={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function og(){}
function pg(a,b){return qg(a,0,b)}
og.prototype.L=function(a,b){return qg(a,1,b)};
function rg(a,b){qg(a,2,b)}
;function sg(){og.apply(this,arguments)}
u(sg,og);function tg(){sg.h||(sg.h=new sg);return sg.h}
function qg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Yf(a,c||0)}
sg.prototype.W=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
sg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var ug=tg();function vg(a){var b=wg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Mc;e.flash="0";a:{try{var f=b.h.top.location.href}catch(va){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Cc:g;try{var h=g.history.length}catch(va){h=0}e.u_his=h;var k;e.u_h=null==(k=Cc.screen)?void 0:k.height;var l;e.u_w=null==(l=Cc.screen)?void 0:l.width;var m;e.u_ah=null==(m=Cc.screen)?void 0:m.availHeight;var p;e.u_aw=
null==(p=Cc.screen)?void 0:p.availWidth;var v;e.u_cd=null==(v=Cc.screen)?void 0:v.colorDepth}catch(va){}h=b.h;try{var q=h.screenX;var x=h.screenY}catch(va){}try{var y=h.outerWidth;var A=h.outerHeight}catch(va){}try{var M=h.innerWidth;var O=h.innerHeight}catch(va){}try{var P=h.screenLeft;var Nb=h.screenTop}catch(va){}try{M=h.innerWidth,O=h.innerHeight}catch(va){}try{var Rd=h.screen.availWidth;var Lj=h.screen.availTop}catch(va){}q=[P,Nb,q,x,Rd,Lj,y,A,M,O];x=b.h.top;try{var ea=(x||window).document,U=
"CSS1Compat"==ea.compatMode?ea.documentElement:ea.body;var la=(new Dc(U.clientWidth,U.clientHeight)).round()}catch(va){la=new Dc(-12245933,-12245933)}ea=la;la={};U=new Hd;B.SVGElement&&B.document.createElementNS&&U.set(0);x=Kc();x["allow-top-navigation-by-user-activation"]&&U.set(1);x["allow-popups-to-escape-sandbox"]&&U.set(2);B.crypto&&B.crypto.subtle&&U.set(3);B.TextDecoder&&B.TextEncoder&&U.set(4);U=Id(U);la.bc=U;la.bih=ea.height;la.biw=ea.width;la.brdim=q.join();b=b.i;ea="Ba";Jd.Ba&&Jd.hasOwnProperty(ea)?
ea=Jd.Ba:(U=new Jd,Jd.Ba=U,Jd.hasOwnProperty(ea),ea=U);b=(la.vis=ea.A(Nc.flag,Nc.defaultValue)&&b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,la.wgl=!!Cc.WebGLRenderingContext,la);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var wg=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return eg(vg(a))});Date.now();var xg="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function yg(){if(!xg)return null;var a=xg();return"open"in a?a:null}
;var zg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ag="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),Bg=!1;
function Cg(a,b){b=void 0===b?{}:b;var c=hg(a),d=N("web_ajax_ignore_global_headers_if_set"),e;for(e in zg){var f=L(zg[e]);!f||!c&&Ab(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Ab(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ab(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Ab(a))b["X-YouTube-Ad-Signals"]=eg(vg(void 0));return b}
function Dg(a){var b=window.location.search,c=Ab(a);N("debug_handle_relative_url_for_query_forward_killswitch")||c||!hg(a)||(c=document.location.hostname);var d=zb(a.match(yb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fg(b),f={};F(Ag,function(g){e[g]&&(f[g]=e[g])});
return gg(a,f||{},!1)}
function Eg(a,b){var c=b.format||"JSON";a=Fg(a,b);var d=Gg(a,b),e=!1,f=Hg(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(l||p||v)m=Ig(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||B;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Yf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Fg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=gg(a,b||{},!0);return a}
function Gg(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ab(a)&&!b.withCredentials&&Ab(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=fg(e),hb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Db(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Bg&&a&&"POST"!=b.method&&(Bg=!0,Of(Error("AJAX request with postData should use POST")));return e}
function Ig(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Pf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Jg(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=Kg(g)})}d&&Lg(e);
return e}
function Lg(a){if(La(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;kb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===ib){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(g){B.console&&B.console.error(g.message)}ib=e}else ib=e}d=(e=ib)?e.createHTML(d):d;a[c]=new xb(d)}else Lg(a[b])}}
function Jg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Kg(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Nf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=yg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;N("debug_forward_web_query_parameters")&&(a=Dg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Cg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Mg=B.ytPubsubPubsubInstance||new K,Ng=B.ytPubsubPubsubSubscribedKeys||{},Og=B.ytPubsubPubsubTopicToKeys||{},Pg=B.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ja;K.prototype.publish=K.prototype.ca;K.prototype.clear=K.prototype.clear;D("ytPubsubPubsubInstance",Mg);D("ytPubsubPubsubTopicToKeys",Og);D("ytPubsubPubsubIsSynchronous",Pg);D("ytPubsubPubsubSubscribedKeys",Ng);var Qg=window,Q=Qg.ytcsi&&Qg.ytcsi.now?Qg.ytcsi.now:Qg.performance&&Qg.performance.timing&&Qg.performance.now&&Qg.performance.timing.navigationStart?function(){return Qg.performance.timing.navigationStart+Qg.performance.now()}:function(){return(new Date).getTime()};var Rg=jg("initial_gel_batch_timeout",2E3),Sg=Math.pow(2,16)-1,Tg=void 0;function Ug(){this.j=this.h=this.i=0}
var Vg=new Ug,Wg=new Ug,Xg=!0,Yg=B.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",Yg);var Zg=B.ytLoggingTransportGELProtoQueue_||new Map;D("ytLoggingTransportGELProtoQueue_",Zg);var $g=B.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",$g);var ah=B.ytLoggingTransportTokensToJspbCttTargetIds_||{};D("ytLoggingTransportTokensToJspbCttTargetIds_",ah);
function bh(a,b){if("log_event"===a.endpoint){var c=ch(a),d=Yg.get(c)||[];Yg.set(c,d);d.push(a.payload);var e=void 0===e?!1:e;b&&(Tg=new b);a=jg("tvhtml5_logging_max_batch")||jg("web_logging_max_batch")||100;b=Q();var f=e?Wg.j:Vg.j;d.length>=a?dh({writeThenSend:!0},N("flush_only_full_queue")?c:void 0,e):10<=b-f&&(eh(e),e?Wg.j=b:Vg.j=b)}}
function fh(a,b){if("log_event"===a.endpoint){var c=ch(a),d=new Map;d.set(c,[a.payload]);b&&(Tg=new b);return new ue(function(e){Tg&&Tg.isReady()?gh(d,e,{bypassNetworkless:!0},!0):e()})}}
function ch(a){var b="";if(a.xa)b="visitorOnlyApprovedKey";else if(a.da){b=a.da;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);$g[a.da.token]=c;b=a.da.token}return b}
function dh(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new ue(function(d){c?(window.clearTimeout(Wg.i),window.clearTimeout(Wg.h),Wg.h=0):(window.clearTimeout(Vg.i),window.clearTimeout(Vg.h),Vg.h=0);if(Tg&&Tg.isReady())if(void 0!==b)if(c){var e=new Map,f=Zg.get(b)||[];e.set(b,f);hh(e,d,a);Zg.delete(b)}else e=new Map,f=Yg.get(b)||[],e.set(b,f),gh(e,d,a),Yg.delete(b);else c?(hh(Zg,d,a),Zg.clear()):(gh(Yg,d,a),Yg.clear());else eh(c),d()})}
function eh(a){a=void 0===a?!1:a;if(N("web_gel_timeout_cap")&&(!a&&!Vg.h||a&&!Wg.h)){var b=Yf(function(){dh({writeThenSend:!0},void 0,a)},6E4);
a?Wg.h=b:Vg.h=b}window.clearTimeout(a?Wg.i:Vg.i);b=L("LOGGING_BATCH_TIMEOUT",jg("web_gel_debounce_ms",1E4));N("shorten_initial_gel_batch_timeout")&&Xg&&(b=Rg);b=Yf(function(){dh({writeThenSend:!0},void 0,a)},b);
a?Wg.i=b:Vg.i=b}
function gh(a,b,c,d){var e=Tg;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=fb({context:ih(e.config_||jh())});k.events=l;(l=$g[h])&&kh(k,h,l);delete $g[h];h="visitorOnlyApprovedKey"===h;lh(k,f,h);mh(c);nh(e,"log_event",k,oh(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Xg=!1}}
function hh(a,b,c){var d=Tg;c=void 0===c?{}:c;var e=Math.round(Q()),f=a.size;a=t(a);for(var g=a.next();!g.done;g=a.next()){var h=t(g.value);g=h.next().value;var k=h=h.next().value;h=new tf;var l=ph(d.config_||jh());pc(h,1,l);for(l=0;l<k.length;l++)qc(h,3,qf,k[l]);(k=ah[g])&&qh(h,g,k);delete ah[g];g="visitorOnlyApprovedKey"===g;rh(h,e,g);mh(c);a:{gc=!0;try{var m=JSON.stringify(h.toJSON(),yc);break a}finally{gc=!1}m=void 0}h=m;g=oh(c,g,function(){f--;f||b()},function(){f--;
f||b()},void 0);
g.headers={"Content-Type":"application/json+protobuf"};g.postBodyFormat="JSPB";g.postBody=h;nh(d,"log_event","",g);Xg=!1}}
function mh(a){N("always_send_and_write")&&(a.writeThenSend=!1)}
function oh(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ta:a,xa:b,Nb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function lh(a,b,c){a.requestTimeMs=String(b);N("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID",void 0))&&(c=sh(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function rh(a,b,c){H(a,2,b);if(!c&&(b=L("EVENT_ID",void 0))){c=sh();var d=new rf;H(d,1,b);H(d,2,c);pc(a,5,d)}}
function sh(){var a=L("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Sg/2));a++;a>Sg&&(a=1);Jf("BATCH_CLIENT_COUNTER",a);return a}
function kh(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function qh(a,b,c){if(kc(c,1===mc(c,sf)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;pc(a,4,c);a=nc(a,of,1)||new of;c=nc(a,mf,3)||new mf;var e=new lf;e.setToken(b);H(e,1,d);qc(c,12,lf,e);pc(a,3,c)}
;var th=B.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",th);function uh(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function vh(){var a=uh();a=Object.keys(lg).indexOf(a);return-1===a?null:a}
;D("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var wh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xh={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},yh={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},zh={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ah(){var a=B.navigator;return a?a.connection:void 0}
;function Bh(){return"INNERTUBE_API_KEY"in Cf&&"INNERTUBE_API_VERSION"in Cf}
function jh(){return{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),za:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),lb:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qa:L("INNERTUBE_CONTEXT_HL",void 0),Pa:L("INNERTUBE_CONTEXT_GL",void 0),mb:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",ob:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),nb:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function ih(a){var b={client:{hl:a.Qa,gl:a.Pa,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.za}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=L("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=kg();0<c.length&&(b.request={internalExperimentFlags:c});Ch(a,void 0,b);Dh(a,void 0,b);Eh(void 0,b);Fh(a,void 0,b);Gh(void 0,b);L("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&
(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(fg(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function ph(a){var b=new of,c=new gf;H(c,1,a.Qa);H(c,2,a.Pa);H(c,16,a.lb);H(c,17,a.innertubeContextClientVersion);if(a.za){var d=a.za,e=new df;d.coldConfigData&&H(e,1,d.coldConfigData);d.appInstallData&&H(e,6,d.appInstallData);d.coldHashData&&H(e,3,d.coldHashData);d.hotHashData&&H(e,5,d.hotHashData);pc(c,62,e)}(d=B.devicePixelRatio)&&1!=d&&H(c,65,d);d=L("EXPERIMENTS_TOKEN","");""!==d&&H(c,54,d);d=kg();if(0<d.length){e=new jf;for(var f=0;f<d.length;f++){var g=new bf;H(g,1,d[f].key);g.setValue(d[f].value);
qc(e,15,bf,g)}pc(b,5,e)}Ch(a,c);Dh(a,c);Eh(c);Fh(a,c);Gh(c);L("DELEGATED_SESSION_ID")&&!N("pageid_as_header_web")&&(a=new mf,H(a,3,L("DELEGATED_SESSION_ID")));a=t(Object.entries(fg(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?H(c,12,e):"cmodel"===d?H(c,13,e):"cbr"===d?H(c,87,e):"cbrver"===d?H(c,88,e):"cos"===d?H(c,18,e):"cosver"===d?H(c,19,e):"cplatform"===d&&H(c,42,e);pc(b,1,c);return b}
function Ch(a,b,c){a=a.Aa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=nc(b,ef,96)||new ef;var d=vh();null!==d&&H(c,3,d);pc(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=uh())}
function Dh(a,b,c){a=a.Aa;if(("WEB_REMIX"===a||76===a)&&!N("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=nc(b,ff,70))?d:new ff;d=vh();null!==d&&H(c,10,d);pc(b,70,c)}else if(c){var e;c.client.Sa=null!=(e=c.client.Sa)?e:{};c.client.Sa.webDisplayMode=uh()}}
function Eh(a,b){var c;if(N("web_log_memory_total_kbytes")&&(null==(c=B.navigator)?0:c.deviceMemory)){var d;c=null==(d=B.navigator)?void 0:d.deviceMemory;a?H(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Fh(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=nc(b,df,62))?d:new df;H(c,6,a.appInstallData);pc(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Gh(a,b){a:{var c=Ah();if(c){var d=wh[c.type||"unknown"]||"CONN_UNKNOWN";c=wh[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?H(a,61,xh[d]):b&&(b.client.connectionType=d));N("web_log_effective_connection_type")&&(d=Ah(),d=null!=d&&d.effectiveType?zh.hasOwnProperty(d.effectiveType)?zh[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?H(a,94,yh[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Hh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Lb||L("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Kb:b=Yc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),N("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Ih(a){a=Object.assign({},a);delete a.Authorization;var b=Yc();if(b){var c=new be;c.update(L("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=bc(c.digest(),3)}return a}
;function Jh(a){var b=new Ve;(b=b.isAvailable()?a?new af(b,a):b:null)||(a=new We(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Re(a):null;this.i=document.domain||window.location.hostname}
Jh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(se(b))}catch(f){return}else e=escape(b);b=this.i;Vc.set(""+a,e,{Ca:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Jh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Vc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Jh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Vc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Kh;function Lh(){Kh||(Kh=new Jh("yt.innertube"));return Kh}
function Mh(a,b,c,d){if(d)return null;d=Lh().get("nextId",!0)||1;var e=Lh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ih(c),requestTime:Math.round(Q())};Lh().set("nextId",d+1,86400,!0);Lh().set("requests",e,86400,!0);return d}
function Nh(a){var b=Lh().get("requests",!0)||{};delete b[a];Lh().set("requests",b,86400,!0)}
function Oh(a){var b=Lh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Ih(Hh(!1));eb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),nh(a,d.method,e,{}));delete b[c]}}Lh().set("requests",b,86400,!0)}}
;var Ph=Xb||Yb;var Qh=function(){var a;return function(){a||(a=new Jh("ytidb"));return a}}();
function Rh(){var a;return null==(a=Qh())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Sh=[],Th=!1;function Uh(a){Th||(Sh.push({type:"ERROR",payload:a}),10<Sh.length&&Sh.shift())}
function Vh(a,b){Th||(Sh.push({type:"EVENT",eventType:a,payload:b}),10<Sh.length&&Sh.shift())}
;function Wh(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
u(Wh,Error);function Xh(){try{return Yh(),!0}catch(a){return!1}}
function Yh(){if(void 0!==L("DATASYNC_ID",void 0))return L("DATASYNC_ID",void 0);throw new Wh("Datasync ID not set","unknown");}
;function Zh(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function $h(a){return a.substr(0,a.indexOf(":"))||a}
;var R={},ai=(R.AUTH_INVALID="No user identifier specified.",R.EXPLICIT_ABORT="Transaction was explicitly aborted.",R.IDB_NOT_SUPPORTED="IndexedDB is not supported.",R.MISSING_INDEX="Index not created.",R.MISSING_OBJECT_STORES="Object stores not created.",R.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",R.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",R.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
R.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",R.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",R.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",R.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",R),S={},bi=(S.AUTH_INVALID="ERROR",S.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",S.EXPLICIT_ABORT="IGNORED",S.IDB_NOT_SUPPORTED="ERROR",S.MISSING_INDEX="WARNING",
S.MISSING_OBJECT_STORES="ERROR",S.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",S.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",S.QUOTA_EXCEEDED="WARNING",S.QUOTA_MAYBE_EXCEEDED="WARNING",S.UNKNOWN_ABORT="WARNING",S.INCOMPATIBLE_DB_VERSION="WARNING",S),T={},ci=(T.AUTH_INVALID=!1,T.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,T.EXPLICIT_ABORT=!1,T.IDB_NOT_SUPPORTED=!1,T.MISSING_INDEX=!1,T.MISSING_OBJECT_STORES=!1,T.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,T.DB_REOPENED_BY_MISSING_OBJECT_STORES=!1,T.QUOTA_EXCEEDED=
!1,T.QUOTA_MAYBE_EXCEEDED=!0,T.UNKNOWN_ABORT=!0,T.INCOMPATIBLE_DB_VERSION=!1,T);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ai[a]:c;d=void 0===d?bi[a]:d;e=void 0===e?ci[a]:e;Wh.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,V.prototype)}
u(V,Wh);function di(a,b){V.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ai.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,di.prototype)}
u(di,V);function ei(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,ei.prototype)}
u(ei,Error);var fi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function gi(a,b,c,d){b=$h(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof V)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new V("QUOTA_EXCEEDED",a);if(Zb&&"UnknownError"===e.name)return new V("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof ei)return new V("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&fi.some(function(f){return e.message.includes(f)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new V("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Tb:e.name})];e.level="WARNING";return e}
function hi(a,b,c){var d=Rh();return new V("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function ii(a){if(!a)throw Error();throw a;}
function ji(a){return a}
function ki(a){this.h=a}
function W(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
W.all=function(a){return new W(new ki(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)li(W.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
W.resolve=function(a){return new W(new ki(function(b,c){a instanceof W?a.then(b,c):b(a)}))};
W.reject=function(a){return new W(new ki(function(b,c){c(a)}))};
W.prototype.then=function(a,b){var c=this,d=null!=a?a:ji,e=null!=b?b:ii;return new W(new ki(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){mi(c,c,d,f,g)}),c.onRejected.push(function(){ni(c,c,e,f,g)})):"FULFILLED"===c.state.status?mi(c,c,d,f,g):"REJECTED"===c.state.status&&ni(c,c,e,f,g)}))};
function li(a,b){a.then(void 0,b)}
function mi(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?oi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ni(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?oi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function oi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?oi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function pi(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function qi(a){return new Promise(function(b,c){pi(a,b,c)})}
function X(a){return new W(new ki(function(b,c){pi(a,b,c)}))}
;function ri(a,b){return new W(new ki(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function si(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
n=si.prototype;n.add=function(a,b,c){return ti(this,[a],{mode:"readwrite",G:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return ti(this,[a],{mode:"readwrite",G:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return ti(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).count(b)})};
function ui(a,b,c){a=a.h.createObjectStore(b,c);return new vi(a)}
n.delete=function(a,b){return ti(this,[a],{mode:"readwrite",G:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return ti(this,[a],{mode:"readonly",G:!0},function(c){return c.objectStore(a).get(b)})};
function wi(a,b){return ti(a,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(c){c=c.objectStore("LogsRequestsStore");return X(c.h.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ti(a,b,c,d){var e,f,g,h,k,l,m,p,v,q,x,y;return z(function(A){switch(A.h){case 1:var M={mode:"readonly",G:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.G?3:1;g=0;case 2:if(h){A.o(3);break}g++;k=Math.round(Q());ua(A,4);l=a.h.transaction(b,e.mode);M=new xi(l);M=yi(M,d);return w(A,M,6);case 6:return m=A.i,p=Math.round(Q()),zi(a,k,p,g,void 0,b.join(),e),A.return(m);case 4:v=xa(A);q=Math.round(Q());x=gi(v,a.h.name,b.join(),a.h.version);
if((y=x instanceof V&&!x.h)||g>=f)zi(a,k,q,g,x,b.join(),e),h=x;A.o(2);break;case 3:return A.return(Promise.reject(h))}})}
function zi(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Vh("QUOTA_EXCEEDED",{dbName:$h(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Vh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Ai(a,!1,d,f,b,g.tag),Uh(e)):Ai(a,!0,d,f,b,g.tag)}
function Ai(a,b,c,d,e,f){Vh("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function vi(a){this.h=a}
n=vi.prototype;n.add=function(a,b){return X(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return X(this.h.clear()).then(function(){})};
n.count=function(a){return X(this.h.count(a))};
function Bi(a,b){return Ci(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Bi(this,a):X(this.h.delete(a))};
n.get=function(a){return X(this.h.get(a))};
n.index=function(a){try{return new Di(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new ei(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function Ci(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ei(a).then(function(d){return ri(d,c)})}
function xi(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=V;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function yi(a,b){var c=new Promise(function(d,e){try{li(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
xi.prototype.abort=function(){this.h.abort();this.i=!0;throw new V("EXPLICIT_ABORT");};
xi.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new vi(a),this.j.set(a,b));return b};
function Di(a){this.h=a}
n=Di.prototype;n.count=function(a){return X(this.h.count(a))};
n.delete=function(a){return Fi(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return X(this.h.get(a))};
n.getKey=function(a){return X(this.h.getKey(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function Fi(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ei(a).then(function(d){return ri(d,c)})}
function Gi(a,b){this.request=a;this.cursor=b}
function Ei(a){return X(a).then(function(b){return b?new Gi(a,b):null})}
n=Gi.prototype;n.advance=function(a){this.cursor.advance(a);return Ei(this.request)};
n.continue=function(a){this.cursor.continue(a);return Ei(this.request)};
n.delete=function(){return X(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.X=function(){return this.cursor.value};
n.update=function(a){return X(this.cursor.update(a))};function Hi(a,b,c){return new Promise(function(d,e){function f(){v||(v=new si(g.result,{closed:p}));return v}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.sb,m=c.upgrade,p=c.closed,v;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Vh("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:$h(a)});var x=f(),y=new xi(g.transaction);
m&&m(x,function(A){return q.oldVersion<A&&q.newVersion>=A},y);
y.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Vh("IDB_UNEXPECTEDLY_CLOSED",{dbName:$h(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ii(a,b,c){c=void 0===c?{}:c;return Hi(a,b,c)}
function Ji(a,b){b=void 0===b?{}:b;var c,d,e,f;return z(function(g){if(1==g.h)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,qi(c),4);
if(2!=g.h)return wa(g,0);f=xa(g);throw gi(f,a,"",-1);})}
;function Ki(a){return new Promise(function(b){rg(function(){b()},a)})}
function Li(a,b){this.name=a;this.options=b;this.l=!0;this.v=this.m=0;this.i=500}
Li.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Ii(a,b,c)};
Li.prototype.delete=function(a){a=void 0===a?{}:a;return Ji(this.name,a)};
function Mi(a,b){return new V("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ni(a,b){if(!b)throw hi("openWithToken",$h(a.name));return a.open()}
Li.prototype.open=function(){function a(){var f,g,h,k,l,m,p,v,q,x;return z(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",ua(y,2),w(y,c.j(c.name,c.options.version,e),4);case 4:h=y.i;for(var A=c.options,M=[],O=t(Object.keys(A.ga)),P=O.next();!P.done;P=O.next()){P=P.value;var Nb=A.ga[P],Rd=void 0===Nb.rb?Number.MAX_VALUE:Nb.rb;!(h.h.version>=Nb.wa)||h.h.version>=Rd||h.h.objectStoreNames.contains(P)||M.push(P)}k=M;if(0===k.length){y.o(5);break}l=Object.keys(c.options.ga);m=h.objectStoreNames();
if(c.v<jg("ytidb_reopen_db_retries",0))return c.v++,h.close(),Uh(new V("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.m<jg("ytidb_remake_db_retries",1))){y.o(6);break}c.m++;if(!N("ytidb_remake_db_enable_backoff_delay")){y.o(7);break}return w(y,Ki(c.i),8);case 8:c.i*=2;case 7:return w(y,c.delete(),9);case 9:return Uh(new V("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());
case 6:throw new di(m,l);case 5:return y.return(h);case 2:p=xa(y);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.o(10);break}return w(y,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:v=y.i;q=v.h.version;if(void 0!==c.options.version&&q>c.options.version+1)throw v.close(),
c.l=!1,Mi(c,q);return y.return(v);case 10:throw b(),p instanceof Error&&!N("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),gi(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Mi(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,sb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Oi=new Li("YtIdbMeta",{ga:{databases:{wa:1}},upgrade:function(a,b){b(1)&&ui(a,"databases",{keyPath:"actualName"})}});
function Pi(a,b){var c;return z(function(d){if(1==d.h)return w(d,Ni(Oi,b),2);c=d.i;return d.return(ti(c,["databases"],{G:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return X(f.h.put(a,void 0)).then(function(){})})}))})}
function Qi(a,b){var c;return z(function(d){if(1==d.h)return a?w(d,Ni(Oi,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ri(a,b){var c,d;return z(function(e){return 1==e.h?(c=[],w(e,Ni(Oi,b),2)):3!=e.h?(d=e.i,w(e,ti(d,["databases"],{G:!0,mode:"readonly"},function(f){c.length=0;return Ci(f.objectStore("databases"),{},function(g){a(g.X())&&c.push(g.X());return g.continue()})}),3)):e.return(c)})}
function Si(a){return Ri(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Ti,Ui=new function(){}(new function(){});
function Vi(){var a,b,c,d;return z(function(e){switch(e.h){case 1:a=Rh();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ph)f=/WebKit\/([0-9]+)/.exec(ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Kb)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Pi(d,Ui),4);case 4:return w(e,Qi("yt-idb-test-do-not-use",Ui),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function Wi(){if(void 0!==Ti)return Ti;Th=!0;return Ti=Vi().then(function(a){Th=!1;var b;if(null!=(b=Qh())&&b.h){var c;b={hasSucceededOnce:(null==(c=Rh())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Qh())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Xi(){return C("ytglobal.idbToken_")||void 0}
function Yi(){var a=Xi();return a?Promise.resolve(a):Wi().then(function(b){(b=b?Ui:void 0)&&D("ytglobal.idbToken_",b);return b})}
;new te;function Zi(a){if(!Xh())throw a=new V("AUTH_INVALID",{dbName:a}),Uh(a),a;var b=Yh();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function $i(a,b,c,d){var e,f,g,h,k,l;return z(function(m){switch(m.h){case 1:return f=null!=(e=Error().stack)?e:"",w(m,Yi(),2);case 2:g=m.i;if(!g)throw h=hi("openDbImpl",a,b),N("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Uh(h),h;Zh(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Zi(a);ua(m,3);return w(m,Pi(k,g),5);case 5:return w(m,Ii(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=xa(m),ua(m,7),w(m,Qi(k.actualName,g),9);case 9:wa(m,
8);break;case 7:xa(m);case 8:throw l;}})}
function aj(a,b,c){c=void 0===c?{}:c;return $i(a,b,!1,c)}
function bj(a,b,c){c=void 0===c?{}:c;return $i(a,b,!0,c)}
function cj(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.h)return w(e,Yi(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Zh(a);d=Zi(a);return w(e,Ji(d.actualName,b),3)}return w(e,Qi(d.actualName,c),0)})}
function dj(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.h?w(e,Ji(d.actualName,b),2):w(e,Qi(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ej(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.h)return w(d,Yi(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Zh("LogsDatabaseV2");return w(d,Si(b),3)}c=d.i;return w(d,dj(c,a,b),0)})}
function fj(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.h)return w(d,Yi(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Zh(a);return w(d,Ji(a,b),3)}return w(d,Qi(a,c),0)})}
;function gj(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ba=function(){};
this.now=Date.now;this.ea=!1;var b;this.ab=null!=(b=a.ab)?b:100;var c;this.Ya=null!=(c=a.Ya)?c:1;var d;this.Wa=null!=(d=a.Wa)?d:2592E6;var e;this.Va=null!=(e=a.Va)?e:12E4;var f;this.Xa=null!=(f=a.Xa)?f:5E3;var g;this.s=null!=(g=a.s)?g:void 0;this.oa=!!a.oa;var h;this.na=null!=(h=a.na)?h:.1;var k;this.sa=null!=(k=a.sa)?k:10;a.handleError&&(this.handleError=a.handleError);a.ba&&(this.ba=a.ba);a.ea&&(this.ea=a.ea);this.A=a.A;this.K=a.K;this.C=a.C;this.F=a.F;this.S=a.S;this.Fa=a.Fa;this.Ea=a.Ea;this.s&&
(!this.A||this.A("networkless_logging"))&&hj(this)}
function hj(a){a.s&&!a.ea&&(a.h=!0,a.oa&&Math.random()<=a.na&&a.C.ib(a.s),ij(a),a.F.D()&&a.ia(),a.F.Y(a.Fa,a.ia.bind(a)),a.F.Y(a.Ea,a.Ja.bind(a)))}
n=gj.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C.set(d,this.s).then(function(e){d.id=e;c.F.D()&&jj(c,d)}).catch(function(e){jj(c,d);
kj(c,e)})}else this.S(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.s&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A&&this.A("nwl_skip_retry")&&(e.skipRetry=c);if(this.F.D()||this.A&&this.A("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.h)return w(k,d.C.set(e,d.s).catch(function(l){kj(d,l)}),2);
f(g,h);k.h=0})}}this.S(a,b,e.skipRetry)}else this.C.set(e,this.s).catch(function(g){d.S(a,b,e.skipRetry);
kj(d,g)})}else this.S(a,b,this.A&&this.A("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.C.aa(d.id,c.s):e=!0;c.F.P&&c.A&&c.A("vss_network_hint")&&c.F.P(!0);f(g,h)};
this.S(d.url,d.options);this.C.set(d,this.s).then(function(g){d.id=g;e&&c.C.aa(d.id,c.s)}).catch(function(g){kj(c,g)})}else this.S(a,b)};
n.ia=function(){var a=this;if(!this.s)throw hi("throttleSend");this.i||(this.i=this.K.L(function(){var b;return z(function(c){if(1==c.h)return w(c,a.C.Oa("NEW",a.s),2);if(3!=c.h)return b=c.i,b?w(c,jj(a,b),3):(a.Ja(),c.return());a.i&&(a.i=0,a.ia());c.h=0})},this.ab))};
n.Ja=function(){this.K.W(this.i);this.i=0};
function jj(a,b){var c,d;return z(function(e){switch(e.h){case 1:if(!a.s)throw c=hi("immediateSend"),c;if(void 0===b.id){e.o(2);break}return w(e,a.C.pb(b.id,a.s),3);case 3:(d=e.i)?b=d:a.ba(Error("The request cannot be found in the database."));case 2:if(lj(a,b,a.Wa)){e.o(4);break}a.ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.o(5);break}return w(e,a.C.aa(b.id,a.s),5);case 5:return e.return();case 4:b.skipRetry||(b=mj(a,b));if(!b){e.o(0);break}if(!b.skipRetry||
void 0===b.id){e.o(8);break}return w(e,a.C.aa(b.id,a.s),8);case 8:a.S(b.url,b.options,!!b.skipRetry),e.h=0}})}
function mj(a,b){if(!a.s)throw hi("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return z(function(l){switch(l.h){case 1:g=nj(f);if(!(a.A&&a.A("nwl_consider_error_code")&&g||a.A&&!a.A("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.sa)){l.o(2);break}if(!a.F.T){l.o(3);break}return w(l,a.F.T(),3);case 3:if(a.F.D()){l.o(2);break}c(e,f);if(!a.A||!a.A("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.o(6);break}return w(l,a.C.Ga(b.id,a.s,!1),6);case 6:return l.return();case 2:if(a.A&&a.A("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.sa)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.o(8);break}return b.sendCount<a.Ya?w(l,a.C.Ga(b.id,a.s),12):w(l,a.C.aa(b.id,a.s),8);case 12:a.K.L(function(){a.F.D()&&a.ia()},a.Xa);
case 8:c(e,f),l.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return z(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.o(2):w(h,a.C.aa(b.id,a.s),2);a.F.P&&a.A&&a.A("vss_network_hint")&&a.F.P(!0);d(e,f);h.h=0})};
return b}
function lj(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ij(a){if(!a.s)throw hi("retryQueuedRequests");a.C.Oa("QUEUED",a.s).then(function(b){b&&!lj(a,b,a.Va)?a.K.L(function(){return z(function(c){if(1==c.h)return void 0===b.id?c.o(2):w(c,a.C.Ga(b.id,a.s),2);ij(a);c.h=0})}):a.F.D()&&a.ia()})}
function kj(a,b){a.bb&&!a.F.D()?a.bb(b):a.handleError(b)}
function nj(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var oj=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.ja;K.prototype.publish=K.prototype.ca;K.prototype.clear=K.prototype.clear;D("ytPubsub2Pubsub2Instance",oj);D("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});D("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});D("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});D("ytPubsub2Pubsub2SkipSubKey",null);function pj(a,b){Li.call(this,a,b);this.options=b;Zh(a)}
u(pj,Li);function qj(a,b){var c;return function(){c||(c=new pj(a,b));return c}}
pj.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ha?bj:aj)(a,b,Object.assign({},c))};
pj.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ha?fj:cj)(this.name,a)};
function rj(a,b){return qj(a,b)}
;var sj;
function tj(){if(sj)return sj();var a={};sj=rj("LogsDatabaseV2",{ga:(a.LogsRequestsStore={wa:2},a),Ha:!1,upgrade:function(b,c,d){c(2)&&ui(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return sj()}
;function uj(a){return Ni(tj(),a)}
function vj(a,b){var c,d,e,f;return z(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,uj(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,wi(d,e),3);f=g.i;c.tb=Q();wj(c);return g.return(f)})}
function xj(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,uj(b),2);if(3!=l.h)return d=l.i,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,ti(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(m){return Fi(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.X()&&(k=p.X(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.tb=Q();wj(c);return l.return(k)})}
function yj(a,b){var c;return z(function(d){if(1==d.h)return w(d,uj(b),2);c=d.i;return d.return(ti(c,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",X(f.h.put(g,void 0)).then(function(){return g})})}))})}
function zj(a,b,c){c=void 0===c?!0:c;var d;return z(function(e){if(1==e.h)return w(e,uj(b),2);d=e.i;return e.return(ti(d,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),X(g.h.put(h,void 0)).then(function(){return h})):W.resolve(void 0)})}))})}
function Aj(a,b){var c;return z(function(d){if(1==d.h)return w(d,uj(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Bj(a){var b,c;return z(function(d){if(1==d.h)return w(d,uj(a),2);b=d.i;c=Q()-2592E6;return w(d,ti(b,["LogsRequestsStore"],{mode:"readwrite",G:!0},function(e){return Ci(e.objectStore("LogsRequestsStore"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Cj(){z(function(a){return w(a,ej(),0)})}
function wj(a){if(!N("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Dj={},Ej=rj("ServiceWorkerLogsDatabase",{ga:(Dj.SWHealthLog={wa:1},Dj),Ha:!0,upgrade:function(a,b){b(1)&&ui(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Fj(a){return Ni(Ej(),a)}
function Gj(a){var b,c;z(function(d){if(1==d.h)return w(d,Fj(a),2);b=d.i;c=Q()-2592E6;return w(d,ti(b,["SWHealthLog"],{mode:"readwrite",G:!0},function(e){return Ci(e.objectStore("SWHealthLog"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Hj(a){var b;return z(function(c){if(1==c.h)return w(c,Fj(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Ij={},Jj=0;function Kj(a){var b=void 0===b?"":b;if(a)if(b)Hg(a,void 0,"POST",b,void 0);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Hg(a,void 0,"GET","",void 0);else{b:{try{var c=new Ua({url:a});if(c.j&&c.i||c.l){var d=zb(a.match(yb)[5]||null);var e=!(!d||!d.endsWith("/aclk")||"1"!==Fb(a,"ri"));break b}}catch(g){}e=!1}if(e){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var f=!0;break b}}catch(g){}f=!1}b=f?!0:!1}else b=!1;b||Mj(a)}}
function Mj(a){var b=new Image,c=""+Jj++;Ij[c]=b;b.onload=b.onerror=function(){delete Ij[c]};
b.src=a}
;function Y(){this.h=new Map;this.i=!1}
function Nj(){if(!Y.h){var a=C("yt.networkRequestMonitor.instance")||new Y;D("yt.networkRequestMonitor.instance",a);Y.h=a}return Y.h}
Y.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Y.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Y.prototype.removeParams=function(a){return a.split("?")[0]};
Y.prototype.removeParams=Y.prototype.removeParams;Y.prototype.isEndpointCFR=Y.prototype.isEndpointCFR;Y.prototype.requestComplete=Y.prototype.requestComplete;Y.getInstance=Nj;var Oj;function Pj(){Oj||(Oj=new Jh("yt.offline"));return Oj}
function Qj(a){if(N("offline_error_handling")){var b=Pj().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Pj().set("errors",b,2592E3,!0)}}
function Rj(){if(N("offline_error_handling")){var a=Pj().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Wh(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Of(c)}Pj().set("errors",{},2592E3,!0)}}}
;var Sj=jg("network_polling_interval",3E4);function Z(){J.call(this);this.O=0;this.ka=this.m=!1;this.j=this.ya();N("use_shared_nsm")?(Ed.h||(Ed.h=new Ed(ug)),this.i=Ed.h):(Tj(this),Uj(this))}
u(Z,J);function Vj(){if(!Z.h){var a=C("yt.networkStatusManager.instance")||new Z;D("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
n=Z.prototype;n.D=function(){if(N("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.D()}return this.j};
n.P=function(a){if(N("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
n.qb=function(a){!N("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.O||Wj(this))};
n.ya=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.kb=function(){this.ka=!0};
n.Y=function(a,b){return N("use_shared_nsm")&&this.i?this.i.Y(a,b):J.prototype.Y.call(this,a,b)};
function Uj(a){window.addEventListener("online",function(){return z(function(b){if(1==b.h)return w(b,a.T(),2);a.ka&&Rj();b.h=0})})}
function Tj(a){window.addEventListener("offline",function(){return z(function(b){return w(b,a.T(),0)})})}
function Wj(a){a.O=pg(function(){return z(function(b){if(1==b.h)return a.j?a.ya()||!a.m?b.o(3):w(b,a.T(),3):w(b,a.T(),3);Wj(a);b.h=0})},Sj)}
n.T=function(a){var b=this;if(N("use_shared_nsm")&&this.i){var c=Fd(this.i,a);c.then(function(d){N("use_cfr_monitor")&&Nj().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return z(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,ua(k,2,3),e&&(b.B=ug.L(function(){e.abort()},a||2E4)),w(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ya(k);N("use_cfr_monitor")&&Nj().requestComplete("generate_204",h);b.u=void 0;b.B&&ug.W(b.B);h!==b.j&&(b.j=h,b.j&&b.m?Cd(b,"ytnetworkstatus-online"):b.m&&Cd(b,"ytnetworkstatus-offline"));d(h);za(k);break;case 2:xa(k),h=!1,k.o(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.T;Z.prototype.listen=Z.prototype.Y;Z.prototype.enableErrorFlushing=Z.prototype.kb;Z.prototype.getWindowStatus=Z.prototype.ya;Z.prototype.monitorNetworkStatusChange=Z.prototype.qb;Z.prototype.networkStatusHint=Z.prototype.P;Z.prototype.isNetworkAvailable=Z.prototype.D;Z.getInstance=Vj;function Xj(a){a=void 0===a?{}:a;J.call(this);var b=this;this.j=this.O=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";N("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=Vj();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ma);a.qa&&!N("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.i))a.ta?
(this.ta=a.ta,c(this.u,function(){Yj(b,"publicytnetworkstatus-online");N("use_shared_nsm")&&a.qa&&Rj()}),c(this.m,function(){Yj(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Cd(b,"publicytnetworkstatus-online");
N("use_shared_nsm")&&a.qa&&Rj()}),c(this.m,function(){Cd(b,"publicytnetworkstatus-offline")}))}
u(Xj,J);Xj.prototype.D=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Xj.prototype.P=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Xj.prototype.T=function(a){var b=this,c;return z(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return N("skip_network_check_if_cfr")&&Nj().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.P((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.D())})):c?d.return(c(a)):d.return(!0)})};
function Yj(a,b){a.ta?a.j?(ug.W(a.O),a.O=ug.L(function(){a.B!==b&&(Cd(a,b),a.B=b,a.j=Q())},a.ta-(Q()-a.j))):(Cd(a,b),a.B=b,a.j=Q()):Cd(a,b)}
;var Zj;function ak(){gj.call(this,{C:{ib:Bj,aa:Aj,Oa:xj,pb:yj,Ga:zj,set:vj},F:bk(),handleError:Of,ba:Pf,S:ck,now:Q,bb:Qj,K:tg(),Fa:"publicytnetworkstatus-online",Ea:"publicytnetworkstatus-offline",oa:!0,na:.1,sa:jg("potential_esf_error_limit",10),A:N,ea:!Xh()});this.j=new te;N("networkless_immediately_drop_all_requests")&&Cj();fj("LogsDatabaseV2")}
u(ak,gj);function dk(){var a=C("yt.networklessRequestController.instance");a||(a=new ak,D("yt.networklessRequestController.instance",a),N("networkless_logging")&&Yi().then(function(b){a.s=b;hj(a);a.j.resolve();a.oa&&Math.random()<=a.na&&a.s&&Gj(a.s);N("networkless_immediately_drop_sw_health_store")&&ek(a)}));
return a}
ak.prototype.writeThenSend=function(a,b){b||(b={});Xh()||(this.h=!1);gj.prototype.writeThenSend.call(this,a,b)};
ak.prototype.sendThenWrite=function(a,b,c){b||(b={});Xh()||(this.h=!1);gj.prototype.sendThenWrite.call(this,a,b,c)};
ak.prototype.sendAndWrite=function(a,b){b||(b={});Xh()||(this.h=!1);gj.prototype.sendAndWrite.call(this,a,b)};
ak.prototype.awaitInitialization=function(){return this.j.promise};
function ek(a){var b;z(function(c){if(!a.s)throw b=hi("clearSWHealthLogsDb"),b;return c.return(Hj(a.s).catch(function(d){a.handleError(d)}))})}
function ck(a,b,c){N("use_cfr_monitor")&&fk(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());c&&0===Object.keys(b).length?Kj(a):Eg(a,b)}
function bk(){Zj||(Zj=new Xj({qa:!0,Ma:!0}));return Zj}
function fk(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Nj().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Nj().requestComplete(a,!0);d(e,f)}}
;var gk=0,hk=0,ik,jk=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:hk};D("ytNetworklessLoggingInitializationOptions",jk);function kk(a,b){function c(d){var e=lk().D();if(!mk()||!d||e&&N("vss_networkless_bypass_write"))nk(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};vj(f,d).then(function(g){f.id=g;lk().D()&&ok(f)}).catch(function(g){ok(f);
lk().D()?Of(g):Qj(g)})}}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?Yi().then(function(d){c(d)}):c(Xi())}
function pk(a,b){function c(d){if(mk()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){N("use_cfr_monitor")&&Nj().requestComplete(e.url,!0);void 0!==e.id?Aj(e.id,d):f=!0;N("vss_network_hint")&&lk().P(!0);g(k,l)};
if(N("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Nj().requestComplete(e.url,!1);h(k,l)}}nk(e.url,e.options);
vj(e,d).then(function(k){e.id=k;f&&Aj(e.id,d)}).catch(function(k){lk().D()?Of(k):Qj(k)})}else nk(a,b)}
b=void 0===b?{}:b;N("skip_is_supported_killswitch")?Yi().then(function(d){c(d)}):c(Xi())}
function qk(){var a=Xi();if(!a)throw hi("throttleSend");gk||(gk=ug.L(function(){var b;return z(function(c){if(1==c.h)return w(c,xj("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,ok(b),3):(ug.W(gk),gk=0,c.return());gk&&(gk=0,qk());c.h=0})},100))}
function ok(a){var b,c,d;return z(function(e){switch(e.h){case 1:b=Xi();if(!b)throw c=hi("immediateSend"),c;if(void 0===a.id){e.o(2);break}return w(e,yj(a.id,b),3);case 3:(d=e.i)?a=d:Pf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=Q()-f)){e.o(4);break}Pf(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.o(5);break}return w(e,Aj(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=rk(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());a=f;if(!a){e.o(0);break}if(!a.skipRetry||void 0===a.id){e.o(8);break}return w(e,Aj(a.id,b),8);case 8:nk(a.url,a.options,!!a.skipRetry),e.h=0}})}
function rk(a){var b=Xi();if(!b)throw hi("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return z(function(l){switch(l.h){case 1:N("use_cfr_monitor")&&Nj().requestComplete(a.url,!1);g=nj(f);if(!(N("nwl_consider_error_code")&&g||!N("nwl_consider_error_code")&&sk()<=jg("potential_esf_error_limit",10))){l.o(2);break}if(N("skip_checking_network_on_cfr_failure")&&(!N("skip_checking_network_on_cfr_failure")||Nj().isEndpointCFR(a.url))){l.o(3);break}return w(l,lk().T(),3);case 3:if(lk().D()){l.o(2);break}c(e,f);if(!N("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.o(6);break}return w(l,zj(a.id,b,!1),6);case 6:return l.return();case 2:if(N("nwl_consider_error_code")&&!g&&sk()>jg("potential_esf_error_limit",10))return l.return();C("ytNetworklessLoggingInitializationOptions")&&jk.potentialEsfErrorCounter++;hk++;if(void 0===(null==(k=a)?void 0:k.id)){l.o(8);break}return 1>a.sendCount?w(l,zj(a.id,b),12):w(l,Aj(a.id,b),8);case 12:ug.L(function(){lk().D()&&qk()},5E3);
case 8:c(e,f),l.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return z(function(h){if(1==h.h)return N("use_cfr_monitor")&&Nj().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.o(2):w(h,Aj(a.id,b),2);N("vss_network_hint")&&lk().P(!0);d(e,f);h.h=0})};
return a}
function lk(){if(N("use_new_nwl"))return bk();ik||(ik=new Xj({qa:!0,Ma:!0}));return ik}
function nk(a,b,c){c&&0===Object.keys(b).length?Kj(a):Eg(a,b)}
function mk(){return C("ytNetworklessLoggingInitializationOptions")?jk.isNwlInitialized:!1}
function sk(){return C("ytNetworklessLoggingInitializationOptions")?jk.potentialEsfErrorCounter:hk}
;function tk(a){var b=this;this.config_=null;a?this.config_=a:Bh()&&(this.config_=jh());pg(function(){Oh(b)},5E3)}
tk.prototype.isReady=function(){!this.config_&&Bh()&&(this.config_=jh());return!!this.config_};
function nh(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||N("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Mh(b,c,l,k)),y)){var A=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(O,P){Nh(y);A(O,P)};
c.onFetchSuccess=function(O,P){Nh(y);M(O,P)}}try{x&&d.retry&&!d.Ta.bypassNetworkless?(g.method="POST",d.Ta.writeThenSend?N("use_new_nwl")?dk().writeThenSend(q,g):kk(q,g):N("use_new_nwl")?dk().sendAndWrite(q,g):pk(q,g)):(g.method="POST",g.postParams||(g.postParams={}),Eg(q,g))}catch(O){if("InvalidAccessError"==O.name)y&&(Nh(y),y=0),Pf(Error("An extension is blocking network request."));
else throw O;}y&&pg(function(){Oh(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Pf(new Wh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Wh("innertube xhrclient not ready",b,c,d);Of(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.mb)&&(h=f);var k=a.config_.ob||!1,l=Hh(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},v=a.config_.nb&&f;v=v&&f.startsWith("Bearer");v||(p.key=a.config_.innertubeApiKey);var q=gg(""+h+m,p||{},!0);N("use_new_nwl")&&dk().h||!N("use_new_nwl")&&
mk()?Wi().then(function(x){e(x)}):e(!1)}
;function uk(a,b){var c=void 0===c?{}:c;var d=tk;L("ytLoggingEventsDefaultDisabled",!1)&&tk==tk&&(d=null);a:{c=void 0===c?{}:c;if(N("lr_drop_other_and_business_payloads")){if(ng[a]||mg[a])break a}else if(N("lr_drop_other_payloads")&&ng[a])break a;var e={},f=Math.round(c.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};N("log_sequence_info_on_gel_web")&&c.Za&&
(a=e.context,b=c.Za,th[b]=b in th?th[b]+1:0,a.sequence={index:th[b],groupKey:b},c.Ob&&delete th[c.Za]);(c.Vb?fh:bh)({endpoint:"log_event",payload:e,da:c.da,xa:c.xa},d)}}
;var vk=[{Da:function(a){return"Cannot read property '"+a.key+"'"},
ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Da:function(a){return"Cannot call '"+a.key+"'"},
ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Da:function(a){return a.key+" is not defined"},
ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xk={V:[],U:[{gb:wk,weight:500}]};function wk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function yk(){this.U=[];this.V=[]}
var zk;function Ak(){if(!zk){var a=zk=new yk;a.V.length=0;a.U.length=0;xk.V&&a.V.push.apply(a.V,xk.V);xk.U&&a.U.push.apply(a.U,xk.U)}return zk}
;var Bk=new K;function Ck(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ek(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Ck(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Fk(e+".ve",f,g,h):0;d+=g;d+=Fk(e,a[e],b,c);if(500<d)break}}else c[b]=Gk(a),d+=c[b].length;else c[b]=Gk(a),d+=c[b].length;return d}
function Fk(a,b,c,d){c+="."+a;a=Gk(b);d[c]=a;return c.length+a.length}
function Gk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Hk=new Set,Ik=0,Jk=0,Kk=0,Lk=[],Mk=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];var Nk={};function Ok(a){return Nk[a]||(Nk[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Pk={},Qk=[],Le=new K,Rk={};function Sk(){for(var a=t(Qk),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Tk(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ok(b)]:a.getAttribute("data-"+b):null;return c}
function Uk(a){Le.ca.apply(Le,arguments)}
;function Vk(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Wk(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Xk(a,b,c){Yk||(Yk={},Xf(window,"message",function(d){a:{if(d.origin===Wk(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Yk[e.id])d.u=!0,d.u&&(F(d.v,d.sendMessage,d),d.v.length=0),d.Ia(e)}e=void 0}return e}));
Yk[c]=b}
var Yk=null;function Zk(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.v=[];this.l=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Ma(this);this.B=c;this.setup(a,b)}
n=Zk.prototype;n.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
n.getIframe=function(){return this.h};
n.Ia=function(a){$k(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);al(this,a);return this};
function bl(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&al(a,c)}}
n.destroy=function(){this.h&&this.h.id&&(Pk[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);Yk&&(Yk[this.id]=null);this.i=null;a=this.h;for(var c in db)db[c][0]==a&&Vf(c);this.m=this.h=null};
n.La=function(){return{}};
function cl(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function $k(a,b,c){a.l.l||(c={target:a,data:c},a.l.ca(b,c),Uk(a.B+"."+b,c))}
function dl(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Wk(a.i,"title"));(b=Wk(a.i,"width"))&&c.setAttribute("width",b.toString());(b=Wk(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.La();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&F(["debugjs","debugcss"],function(h){var k=Fb(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=Wk(a.i,"host")+("/embed/"+Wk(a.i,"videoId"))+"?"+Db(g);return c}
n.Ua=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function el(a){Xk(a.i,a,a.id);a.j=Zf(a.Ua.bind(a));Xf(a.h,"load",function(){window.clearInterval(a.j);a.j=Zf(a.Ua.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Bb(a.src):"https://www.youtube.com"),this.i=new Vk(b),c||(b=dl(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Ma(this.h)),Pk[this.h.id]=this,window.postMessage){this.l=new K;el(this);b=Wk(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Rk)Rk.hasOwnProperty(e)&&
bl(this,e)}};
function al(a,b){a.I[b]||(a.I[b]=!0,cl(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";a=se(a);var b=[Bb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var c=0;c<b.length;c++)try{this.h.contentWindow.postMessage(a,b[c])}catch(A){if(A.name&&"SyntaxError"===A.name){if(!(A.message&&0<A.message.indexOf("target origin ''"))){var d=void 0,e=A;d=void 0===d?{}:d;d.name=L("INNERTUBE_CONTEXT_CLIENT_NAME",1);d.version=L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var f=d||{};d="WARNING";d=void 0===d?"ERROR":d;if(e){e.hasOwnProperty("level")&&
e.level&&(d=e.level);if(N("console_log_js_exceptions")){var g=e,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));g.hasOwnProperty("args")&&h.push("Error args: "+JSON.stringify(g.args));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if(!(5<=Ik)){g=void 0;var k=f,l=ad(e);f=l.message||"Unknown Error";h=l.name||"UnknownError";var m=l.stack||e.i||"Not available";if(m.startsWith(h+
": "+f)){var p=m.split("\n");p.shift();m=p.join("\n")}p=l.lineNumber||"Not available";l=l.fileName||"Not available";var v=0;if(e.hasOwnProperty("args")&&e.args&&e.args.length)for(g=0;g<e.args.length&&!(v=Ek(e.args[g],"params."+g,k,v),500<=v);g++);else if(e.hasOwnProperty("params")&&e.params){var q=e.params;if("object"===typeof e.params)for(g in q){if(q[g]){var x="params."+g,y=Gk(q[g]);k[x]=y;v+=x.length+y.length;if(500<v)break}}else k.params=Gk(q)}if(Lk.length)for(g=0;g<Lk.length&&!(v=Ek(Lk[g],"params.context."+
g,k,v),500<=v);g++);navigator.vendor&&!k.hasOwnProperty("vendor")&&(k["device.vendor"]=navigator.vendor);g={message:f,name:h,lineNumber:p,fileName:l,stack:m,params:k,sampleWeight:1};f=Number(e.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);if("IGNORED"===e.level)e=0;else a:{e=Ak();f=t(e.V);for(h=f.next();!h.done;h=f.next())if(h=h.value,g.message&&g.message.match(h.Sb)){e=h.weight;break a}e=t(e.U);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.gb(g)){e=f.weight;break a}e=1}g.sampleWeight=
e;e=g;g=t(vk);for(f=g.next();!f.done;f=g.next())if(f=f.value,f.ra[e.name])for(p=t(f.ra[e.name]),h=p.next();!h.done;h=p.next())if(l=h.value,h=e.message.match(l.regexp)){e.params["params.error.original"]=h[0];p=l.groups;l={};for(m=0;m<p.length;m++)l[p[m]]=h[m+1],e.params["params.error."+p[m]]=h[m+1];e.message=f.Da(l);break}e.params||(e.params={});g=Ak();e.params["params.errorServiceSignature"]="msg="+g.V.length+"&cb="+g.U.length;e.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&
(e.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));kb("sample").constructor!==jb&&(e.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(e);if(0!==e.sampleWeight&&!Hk.has(e.message)){"ERROR"===d?(Bk.ca("handleError",e),N("record_app_crashed_web")&&0===Kk&&1===e.sampleWeight&&(Kk++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},N("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:e.message}}}}),
uk("appCrashed",g)),Jk++):"WARNING"===d&&Bk.ca("handleWarning",e);if(N("kevlar_gel_error_routing")){g=d;f=e;b:{h=t(Mk);for(p=h.next();!p.done;p=h.next())if((l=ub())&&0<=l.toLowerCase().indexOf(p.value.toLowerCase())){h=!0;break b}h=!1}if(h)f=void 0;else{p={stackTrace:f.stack};f.fileName&&(p.filename=f.fileName);h=f.lineNumber&&f.lineNumber.split?f.lineNumber.split(":"):[];0!==h.length&&(1!==h.length||isNaN(Number(h[0]))?2!==h.length||isNaN(Number(h[0]))||isNaN(Number(h[1]))||(p.lineNumber=Number(h[0]),
p.columnNumber=Number(h[1])):p.lineNumber=Number(h[0]));h={level:"ERROR_LEVEL_UNKNOWN",message:f.message,errorClassName:f.name,sampleWeight:f.sampleWeight};"ERROR"===g?h.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(h.level="ERROR_LEVEL_WARNNING");p={isObfuscated:!0,browserStackInfo:p};l={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(l.experimentIds=L("FEXP_EXPERIMENTS"));m=Kf();k=(k=Cf.EXPERIMENT_FLAGS)?k.web_disable_gel_stp_ecatcher_killswitch:void 0;if(!k&&m)for(v=t(Object.keys(m)),
k=v.next();!k.done;k=v.next())k=k.value,l.kvPairs.push({key:k,value:String(m[k])});if(f=f.params)for(m=t(Object.keys(f)),k=m.next();!k.done;k=m.next())k=k.value,l.kvPairs.push({key:"client."+k,value:String(f[k])});f=L("SERVER_NAME",void 0);m=L("SERVER_VERSION",void 0);f&&m&&(l.kvPairs.push({key:"server.name",value:f}),l.kvPairs.push({key:"server.version",value:m}));f={errorMetadata:l,stackTrace:p,logMessage:h}}f&&(uk("clientError",f),("ERROR"===g||N("errors_flush_gel_always_killswitch"))&&dh())}if(!N("suppress_error_204_logging")){f=
e;g=f.params||{};d={urlParams:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,250),line:f.lineNumber,level:d,"client.name":g.name},postParams:{url:L("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};g.version&&(d["client.version"]=g.version);if(d.postParams){f.stack&&(d.postParams.stack=f.stack);f=t(Object.keys(g));for(h=f.next();!h.done;h=f.next())h=h.value,d.postParams["client."+h]=g[h];if(g=Kf())for(f=t(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.postParams[h]=
g[h];g=L("SERVER_NAME",void 0);f=L("SERVER_VERSION",void 0);g&&f&&(d.postParams["server.name"]=g,d.postParams["server.version"]=f)}Eg(L("ECATCHER_REPORT_HOST","")+"/error_204",d)}try{Hk.add(e.message)}catch(M){}Ik++}}}}}else throw A;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function fl(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function gl(a){return 0===a.search("get")||0===a.search("is")}
;function hl(a,b){Zk.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.M={};this.playerInfo={}}
u(hl,Zk);n=hl.prototype;n.La=function(){var a=Wk(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Wk(this.i,"embedConfig")){if(La(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Ia=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(La(a))for(var c in a)a.hasOwnProperty(c)&&(this.M[c]=a[c]);break;case "infoDelivery":il(this,a);break;case "initialDelivery":La(a)&&(window.clearInterval(this.j),this.playerInfo={},this.M={},jl(this,a.apiInterface),il(this,a));break;default:$k(this,b,a)}};
function il(a,b){if(La(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function jl(a,b){F(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:fl(c)?this[c]=function(){this.playerInfo={};
this.M={};cl(this,c,arguments);return this}:gl(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){cl(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Wk(this.i,"host")+("/embed/"+Wk(this.i,"videoId")),b=Number(Wk(this.i,"width")),c=Number(Wk(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);tb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(nb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(ob,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(pb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(qb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(rb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(sb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.M.namespaces?a?this.M[a]?this.M[a].options||[]:[]:this.M.namespaces||[]:[]};
n.getOption=function(a,b){if(this.M.namespaces&&a&&b&&this.M[a])return this.M[a][b]};
function kl(a){if("iframe"!==a.tagName.toLowerCase()){var b=Tk(a,"videoid");b&&(b={videoId:b,width:Tk(a,"width"),height:Tk(a,"height")},new hl(a,b))}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return Pk[a]});
D("YT.scan",Sk);D("YT.subscribe",function(a,b,c){Le.subscribe(a,b,c);Rk[a]=!0;for(var d in Pk)Pk.hasOwnProperty(d)&&bl(Pk[d],a)});
D("YT.unsubscribe",function(a,b,c){Ke(a,b,c)});
D("YT.Player",hl);Zk.prototype.destroy=Zk.prototype.destroy;Zk.prototype.setSize=Zk.prototype.setSize;Zk.prototype.getIframe=Zk.prototype.getIframe;Zk.prototype.addEventListener=Zk.prototype.addEventListener;hl.prototype.getVideoEmbedCode=hl.prototype.getVideoEmbedCode;hl.prototype.getOptions=hl.prototype.getOptions;hl.prototype.getOption=hl.prototype.getOption;
Qk.push(function(a){var b=a;b||(b=document);a=$a(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=Wa(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=$a(b);F(Za(a,b),kl)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Sk();var ll=B.onYTReady;ll&&ll();var ml=B.onYouTubeIframeAPIReady;ml&&ml();var nl=B.onYouTubePlayerAPIReady;nl&&nl();}).call(this);
