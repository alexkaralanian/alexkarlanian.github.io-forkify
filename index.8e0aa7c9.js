var t,e,r,n,o,i,a,c,u,s,f,l,p,h,v,d,m,g,y,b=globalThis;function w(t){return t&&t.__esModule?t.default:t}var _={},E={},S=function(t){return t&&t.Math===Math&&t};E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof b&&b)||S("object"==typeof E&&E)||function(){return this}()||Function("return this")();var O={},j={};O=!(j=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var F={},L={};L=!j(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var T=Function.prototype.call;F=L?T.bind(T):function(){return T.apply(T,arguments)};var M={}.propertyIsEnumerable,k=Object.getOwnPropertyDescriptor;o=k&&!M.call({1:2},1)?function(t){var e=k(this,t);return!!e&&e.enumerable}:M;var x={};x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var P={},N={},I={},$=Function.prototype,R=$.call,D=L&&$.bind.bind(R,R),z={},A=(I=L?D:function(t){return function(){return R.apply(t,arguments)}})({}.toString),C=I("".slice);z=function(t){return C(A(t),8,-1)};var U=Object,B=I("".split);N=j(function(){return!U("z").propertyIsEnumerable(0)})?function(t){return"String"===z(t)?B(t,""):U(t)}:U;var G={},H={};H=function(t){return null==t};var q=TypeError;G=function(t){if(H(t))throw new q("Can't call method on "+t);return t},P=function(t){return N(G(t))};var W={},Y={},K={},V={},J="object"==typeof document&&document.all;V=void 0===J&&void 0!==J?function(t){return"function"==typeof t||t===J}:function(t){return"function"==typeof t},K=function(t){return"object"==typeof t?null!==t:V(t)};var Q={},X={};X=function(t,e){var r;return arguments.length<2?(r=E[t],V(r)?r:void 0):E[t]&&E[t][e]};var Z={};Z=I({}.isPrototypeOf);var tt={},te={},tr={},tn={},to=E.navigator,ti=to&&to.userAgent;tn=ti?String(ti):"";var ta=E.process,tc=E.Deno,tu=ta&&ta.versions||tc&&tc.version,ts=tu&&tu.v8;ts&&(a=(i=ts.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&tn&&(!(i=tn.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=tn.match(/Chrome\/(\d+)/))&&(a=+i[1]),tr=a;var tf=E.String;tt=(te=!!Object.getOwnPropertySymbols&&!j(function(){var t=Symbol("symbol detection");return!tf(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&tr&&tr<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tl=Object;Q=tt?function(t){return"symbol"==typeof t}:function(t){var e=X("Symbol");return V(e)&&Z(e.prototype,tl(t))};var tp={},th={},tv={},tm=String;tv=function(t){try{return tm(t)}catch(t){return"Object"}};var tg=TypeError;th=function(t){if(V(t))return t;throw new tg(tv(t)+" is not a function")},tp=function(t,e){var r=t[e];return H(r)?void 0:th(r)};var ty={},tb=TypeError;ty=function(t,e){var r,n;if("string"===e&&V(r=t.toString)&&!K(n=F(r,t))||V(r=t.valueOf)&&!K(n=F(r,t))||"string"!==e&&V(r=t.toString)&&!K(n=F(r,t)))return n;throw new tb("Can't convert object to primitive value")};var tw={},t_={},tE={},tS={};tS=!1;var tO={},tj=Object.defineProperty;tO=function(t,e){try{tj(E,t,{value:e,configurable:!0,writable:!0})}catch(r){E[t]=e}return e};var tF="__core-js_shared__",tL=tE=E[tF]||tO(tF,{});(tL.versions||(tL.versions=[])).push({version:"3.38.1",mode:tS?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"}),t_=function(t,e){return tE[t]||(tE[t]=e||{})};var tT={},tM={},tk=Object;tM=function(t){return tk(G(t))};var tx=I({}.hasOwnProperty);tT=Object.hasOwn||function(t,e){return tx(tM(t),e)};var tP={},tN=0,tI=Math.random(),t$=I(1..toString);tP=function(t){return"Symbol("+(void 0===t?"":t)+")_"+t$(++tN+tI,36)};var tR=E.Symbol,tD=t_("wks"),tz=tt?tR.for||tR:tR&&tR.withoutSetter||tP,tA=TypeError,tC=(tw=function(t){return tT(tD,t)||(tD[t]=te&&tT(tR,t)?tR[t]:tz("Symbol."+t)),tD[t]})("toPrimitive");Y=function(t,e){if(!K(t)||Q(t))return t;var r,n=tp(t,tC);if(n){if(void 0===e&&(e="default"),r=F(n,t,e),!K(r)||Q(r))return r;throw new tA("Can't convert object to primitive value")}return void 0===e&&(e="number"),ty(t,e)},W=function(t){var e=Y(t,"string");return Q(e)?e:e+""};var tU={},tB={},tG=E.document,tH=K(tG)&&K(tG.createElement);tB=function(t){return tH?tG.createElement(t):{}},tU=!O&&!j(function(){return 7!==Object.defineProperty(tB("div"),"a",{get:function(){return 7}}).a});var tq=Object.getOwnPropertyDescriptor;n=O?tq:function(t,e){if(t=P(t),e=W(e),tU)try{return tq(t,e)}catch(t){}if(tT(t,e))return x(!F(o,t,e),t[e])};var tW={},tY={};tY=O&&j(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tK={},tV=String,tJ=TypeError;tK=function(t){if(K(t))return t;throw new tJ(tV(t)+" is not an object")};var tQ=TypeError,tX=Object.defineProperty,tZ=Object.getOwnPropertyDescriptor,t0="enumerable",t1="configurable",t2="writable";c=O?tY?function(t,e,r){if(tK(t),e=W(e),tK(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t2 in r&&!r[t2]){var n=tZ(t,e);n&&n[t2]&&(t[e]=r.value,r={configurable:t1 in r?r[t1]:n[t1],enumerable:t0 in r?r[t0]:n[t0],writable:!1})}return tX(t,e,r)}:tX:function(t,e,r){if(tK(t),e=W(e),tK(r),tU)try{return tX(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tQ("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tW=O?function(t,e,r){return c(t,e,x(1,r))}:function(t,e,r){return t[e]=r,t};var t3={},t4={},t8=Function.prototype,t7=O&&Object.getOwnPropertyDescriptor,t9=tT(t8,"name")&&(!O||O&&t7(t8,"name").configurable),t5={},t6=I(Function.toString);V(tE.inspectSource)||(tE.inspectSource=function(t){return t6(t)}),t5=tE.inspectSource;var et={},ee={},er=E.WeakMap;ee=V(er)&&/native code/.test(String(er));var en={},eo=t_("keys");en=function(t){return eo[t]||(eo[t]=tP(t))};var ei={};ei={};var ea="Object already initialized",ec=E.TypeError,eu=E.WeakMap;if(ee||tE.state){var es=tE.state||(tE.state=new eu);es.get=es.get,es.has=es.has,es.set=es.set,u=function(t,e){if(es.has(t))throw new ec(ea);return e.facade=t,es.set(t,e),e},s=function(t){return es.get(t)||{}},f=function(t){return es.has(t)}}else{var ef=en("state");ei[ef]=!0,u=function(t,e){if(tT(t,ef))throw new ec(ea);return e.facade=t,tW(t,ef,e),e},s=function(t){return tT(t,ef)?t[ef]:{}},f=function(t){return tT(t,ef)}}var el=(et={set:u,get:s,has:f,enforce:function(t){return f(t)?s(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!K(e)||(r=s(e)).type!==t)throw new ec("Incompatible receiver, "+t+" required");return r}}}).enforce,ep=et.get,eh=String,ev=Object.defineProperty,ed=I("".slice),em=I("".replace),eg=I([].join),ey=O&&!j(function(){return 8!==ev(function(){},"length",{value:8}).length}),eb=String(String).split("String"),ew=t4=function(t,e,r){"Symbol("===ed(eh(e),0,7)&&(e="["+em(eh(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tT(t,"name")||t9&&t.name!==e)&&(O?ev(t,"name",{value:e,configurable:!0}):t.name=e),ey&&r&&tT(r,"arity")&&t.length!==r.arity&&ev(t,"length",{value:r.arity});try{r&&tT(r,"constructor")&&r.constructor?O&&ev(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=el(t);return tT(n,"source")||(n.source=eg(eb,"string"==typeof e?e:"")),t};Function.prototype.toString=ew(function(){return V(this)&&ep(this).source||t5(this)},"toString"),t3=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(V(r)&&t4(r,i,n),n.global)o?t[e]=r:tO(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:c(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var e_={},eE={},eS={},eO={},ej={},eF={},eL=Math.ceil,eT=Math.floor;eF=Math.trunc||function(t){var e=+t;return(e>0?eT:eL)(e)},ej=function(t){var e=+t;return e!=e||0===e?0:eF(e)};var eM=Math.max,ek=Math.min;eO=function(t,e){var r=ej(t);return r<0?eM(r+e,0):ek(r,e)};var ex={},eP={},eN=Math.min;eP=function(t){var e=ej(t);return e>0?eN(e,0x1fffffffffffff):0},ex=function(t){return eP(t.length)};var eI=function(t){return function(e,r,n){var o,i=P(e),a=ex(i);if(0===a)return!t&&-1;var c=eO(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},e$={includes:eI(!0),indexOf:eI(!1)}.indexOf,eR=I([].push);eS=function(t,e){var r,n=P(t),o=0,i=[];for(r in n)!tT(ei,r)&&tT(n,r)&&eR(i,r);for(;e.length>o;)tT(n,r=e[o++])&&(~e$(i,r)||eR(i,r));return i};var eD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(t){return eS(t,eD)},p=Object.getOwnPropertySymbols;var ez=I([].concat);eE=X("Reflect","ownKeys")||function(t){var e=l(tK(t));return p?ez(e,p(t)):e},e_=function(t,e,r){for(var o=eE(e),i=0;i<o.length;i++){var a=o[i];tT(t,a)||r&&tT(r,a)||c(t,a,n(e,a))}};var eA={},eC=/#|\.prototype\./,eU=function(t,e){var r=eG[eB(t)];return r===eq||r!==eH&&(V(e)?j(e):!!e)},eB=eU.normalize=function(t){return String(t).replace(eC,".").toLowerCase()},eG=eU.data={},eH=eU.NATIVE="N",eq=eU.POLYFILL="P";eA=eU,_=function(t,e){var r,o,i,a,c,u=t.target,s=t.global,f=t.stat;if(r=s?E:f?E[u]||tO(u,{}):E[u]&&E[u].prototype)for(o in e){if(a=e[o],i=t.dontCallGetSet?(c=n(r,o))&&c.value:r[o],!eA(s?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;e_(a,i)}(t.sham||i&&i.sham)&&tW(a,"sham",!0),t3(r,o,a,t)}};var eW={},eY={},eK={},eV=(eK=function(t){if("Function"===z(t))return I(t)})(eK.bind);eY=function(t,e){return th(t),void 0===e?t:L?eV(t,e):function(){return t.apply(e,arguments)}};var eJ={},eQ={};eQ={};var eX=tw("iterator"),eZ=Array.prototype;eJ=function(t){return void 0!==t&&(eQ.Array===t||eZ[eX]===t)};var e0={},e1={},e2={},e3={},e4=tw("toStringTag"),e8={};e8[e4]="z",e3="[object z]"===String(e8);var e7=tw("toStringTag"),e9=Object,e5="Arguments"===z(function(){return arguments}()),e6=function(t,e){try{return t[e]}catch(t){}};e2=e3?z:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=e6(e=e9(t),e7))?r:e5?z(e):"Object"===(n=z(e))&&V(e.callee)?"Arguments":n};var rt=tw("iterator");e1=function(t){if(!H(t))return tp(t,rt)||tp(t,"@@iterator")||eQ[e2(t)]};var re=TypeError;e0=function(t,e){var r=arguments.length<2?e1(t):e;if(th(r))return tK(F(r,t));throw new re(tv(t)+" is not iterable")};var rr={};rr=function(t,e,r){var n,o;tK(t);try{if(!(n=tp(t,"return"))){if("throw"===e)throw r;return r}n=F(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return tK(n),r};var rn=TypeError,ro=function(t,e){this.stopped=t,this.result=e},ri=ro.prototype;eW=function(t,e,r){var n,o,i,a,c,u,s,f=r&&r.that,l=!!(r&&r.AS_ENTRIES),p=!!(r&&r.IS_RECORD),h=!!(r&&r.IS_ITERATOR),v=!!(r&&r.INTERRUPTED),d=eY(e,f),m=function(t){return n&&rr(n,"normal",t),new ro(!0,t)},g=function(t){return l?(tK(t),v?d(t[0],t[1],m):d(t[0],t[1])):v?d(t,m):d(t)};if(p)n=t.iterator;else if(h)n=t;else{if(!(o=e1(t)))throw new rn(tv(t)+" is not iterable");if(eJ(o)){for(i=0,a=ex(t);a>i;i++)if((c=g(t[i]))&&Z(ri,c))return c;return new ro(!1)}n=e0(t,o)}for(u=p?t.next:n.next;!(s=F(u,n)).done;){try{c=g(s.value)}catch(t){rr(n,"throw",t)}if("object"==typeof c&&c&&Z(ri,c))return c}return new ro(!1)};var ra={},rc=Map.prototype,ru=(ra={Map:Map,set:I(rc.set),get:I(rc.get),has:I(rc.has),remove:I(rc.delete),proto:rc}).Map,rs=ra.has,rf=ra.get,rl=ra.set,rp=I([].push),rh=tS||j(function(){return 1!==ru.groupBy("ab",function(t){return t}).get("a").length});_({target:"Map",stat:!0,forced:tS||rh},{groupBy:function(t,e){G(t),th(e);var r=new ru,n=0;return eW(t,function(t){var o=e(t,n++);rs(r,o)?rp(rf(r,o),t):rl(r,o,[t])}),r}});var rv={},rd={};rd=E,h=tw,rv=function(t){var e=rd.Symbol||(rd.Symbol={});tT(e,t)||c(e,t,{value:h(t)})};var rm=E.Symbol;if(rv("dispose"),rm){var rg=n(rm,"dispose");rg.enumerable&&rg.configurable&&rg.writable&&c(rm,"dispose",{value:rg.value,enumerable:!1,configurable:!1,writable:!1})}var ry={},rb={},rw=Function.prototype,r_=rw.apply,rE=rw.call;rb="object"==typeof Reflect&&Reflect.apply||(L?rE.bind(r_):function(){return rE.apply(r_,arguments)});var rS={};rS=X("document","documentElement");var rO={};rO=I([].slice);var rj={},rF=TypeError;rj=function(t,e){if(t<e)throw new rF("Not enough arguments");return t};var rL={};rL=/(?:ipad|iphone|ipod).*applewebkit/i.test(tn);var rT={},rM={},rk=function(t){return tn.slice(0,t.length)===t};rT="NODE"==(rM=rk("Bun/")?"BUN":rk("Cloudflare-Workers")?"CLOUDFLARE":rk("Deno/")?"DENO":rk("Node.js/")?"NODE":E.Bun&&"string"==typeof Bun.version?"BUN":E.Deno&&"object"==typeof Deno.version?"DENO":"process"===z(E.process)?"NODE":E.window&&E.document?"BROWSER":"REST");var rx=E.setImmediate,rP=E.clearImmediate,rN=E.process,rI=E.Dispatch,r$=E.Function,rR=E.MessageChannel,rD=E.String,rz=0,rA={},rC="onreadystatechange";j(function(){v=E.location});var rU=function(t){if(tT(rA,t)){var e=rA[t];delete rA[t],e()}},rB=function(t){return function(){rU(t)}},rG=function(t){rU(t.data)},rH=function(t){E.postMessage(rD(t),v.protocol+"//"+v.host)};rx&&rP||(rx=function(t){rj(arguments.length,1);var e=V(t)?t:r$(t),r=rO(arguments,1);return rA[++rz]=function(){rb(e,void 0,r)},d(rz),rz},rP=function(t){delete rA[t]},rT?d=function(t){rN.nextTick(rB(t))}:rI&&rI.now?d=function(t){rI.now(rB(t))}:rR&&!rL?(g=(m=new rR).port2,m.port1.onmessage=rG,d=eY(g.postMessage,g)):E.addEventListener&&V(E.postMessage)&&!E.importScripts&&v&&"file:"!==v.protocol&&!j(rH)?(d=rH,E.addEventListener("message",rG,!1)):d=rC in tB("script")?function(t){rS.appendChild(tB("script"))[rC]=function(){rS.removeChild(this),rU(t)}}:function(t){setTimeout(rB(t),0)});var rq=(ry={set:rx,clear:rP}).clear;_({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rq},{clearImmediate:rq});var rW=ry.set,rY={},rK=E.Function,rV=/MSIE .\./.test(tn)||"BUN"===rM&&((t=E.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rY=function(t,e){var r=e?2:1;return rV?function(n,o){var i=rj(arguments.length,1)>r,a=V(n)?n:rK(n),c=i?rO(arguments,r):[],u=i?function(){rb(a,this,c)}:a;return e?t(u,o):t(u)}:t};var rJ=E.setImmediate?rY(rW,!1):rW;_({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rJ},{setImmediate:rJ});var rQ=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof m?r:m).prototype);return o(u,"_invoke",{value:(a=new L(i||[]),c=p,function(r,o){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===r)throw o;return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),d;var a=l(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(i,a);if(u){if(u===d)continue;return u}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var s=l(t,n,a);if("normal"===s.type){if(c=a.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(c=v,a.method="throw",a.arg=s.arg)}})}),u}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p="suspendedStart",h="executing",v="completed",d={};function m(){}function g(){}function y(){}var b={};s(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(T([])));_&&_!==r&&n.call(_,a)&&(b=_);var E=y.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=l(t[o],t,i);if("throw"===u.type)c(u.arg);else{var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(f).then(function(t){s.value=t,a(s)},function(t){return r("throw",t,a,c)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(t){if(null!=t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return g.prototype=y,o(E,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),s(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(E),s(E,u,"Generator"),s(E,a,function(){return this}),s(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(s){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}({});try{regeneratorRuntime=rQ}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rQ:Function("r","regeneratorRuntime = r")(rQ)}const rX=async function(t){try{let e=fetch(t),r=await Promise.race([e,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 seconds"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(t){throw t}},rZ={recipe:{}},r0=async t=>{try{let{recipe:e}=(await rX(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`)).data;rZ.recipe={id:e.id,title:e.title,publisher:e.publisher,ingredients:e.ingredients,servings:e.servings,sourceUrl:e.source_url,imageUrl:e.image_url,cookingTime:e.cooking_time}}catch(t){console.error(t)}};(Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t instanceof Fraction?t=t.clone():t=new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t instanceof Fraction?t=t.clone():t=new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(e=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},r=function(t,e){if(!e)return Math.round(t);var r=Math.pow(10,e);return Math.round(t*r)/r},function(){if(e(this.denominator)){var t=r(this.denominator,9),n=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var t=r(this.numerator,9),n=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),o=Fraction.primeFactors(e);return(n.forEach(function(t){var e=o.indexOf(t);e>=0&&(r.push(t),o.splice(e,1))}),0===r.length)?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;return 1!=e&&r.push(e),r},y=Fraction;var r1={};r1=new URL("icons.c14567a0.svg",import.meta.url).toString();class r2{#t=document.querySelector(".recipe");#e;renderSpinner(){let t=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/w(r1)}#icon-loader"></use>
        </svg>
      </div>
    `;this.#r(),this.#t.insertAdjacentHTML("afterbegin",t)}addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}render(t){this.#e=t;let e=this.#n();this.#r(),this.#t.insertAdjacentHTML("afterbegin",e)}#r(){this.#t.innerHTML=""}#o({quantity:t,unit:e,description:r}){return`<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${/*@__PURE__*/w(r1)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${t?new y(t).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e}</span>
          ${r}
        </div>
      </li>
    `}#n(){let{imageUrl:t,title:e,cookingTime:r,servings:n,publisher:o,sourceUrl:i,ingredients:a}=this.#e;return`
      <figure class="recipe__fig">
        <img src="${t}" alt="${e}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${e}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/w(r1)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${r}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/w(r1)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${n}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/w(r1)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/w(r1)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${/*@__PURE__*/w(r1)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg>
            <use href="${/*@__PURE__*/w(r1)}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${a.map(this.#o).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${o}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${i}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/w(r1)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}}var r3=new r2;const r4=async()=>{try{let t=window.location.hash.slice(1);if(!t)return;r3.renderSpinner(),await r0(t),r3.render(rZ.recipe)}catch(t){console.error(t)}};r3.addHandlerRender(r4);
//# sourceMappingURL=index.8e0aa7c9.js.map
