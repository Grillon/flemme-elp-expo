(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var xs={exports:{}},xo={},ys={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Uc=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),Vc=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),Gc=Symbol.for("react.forward_ref"),Yc=Symbol.for("react.suspense"),Kc=Symbol.for("react.memo"),Xc=Symbol.for("react.lazy"),oa=Symbol.iterator;function Zc(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var bs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,ks={};function yn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||bs}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function js(){}js.prototype=yn.prototype;function si(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||bs}var ui=si.prototype=new js;ui.constructor=si;ws(ui,yn.prototype);ui.isPureReactComponent=!0;var la=Array.isArray,Cs=Object.prototype.hasOwnProperty,ci={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var r,o={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)Cs.call(t,r)&&!Ns.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:cr,type:e,key:l,ref:a,props:o,_owner:ci.current}}function Jc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function di(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ia=/\/+/g;function Io(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ed(""+e.key):t.toString(36)}function Br(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case cr:case Uc:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Io(a,0):r,la(o)?(n="",e!=null&&(n=e.replace(ia,"$&/")+"/"),Br(o,t,n,"",function(c){return c})):o!=null&&(di(o)&&(o=Jc(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(ia,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",la(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Io(l,s);a+=Br(l,t,n,u,o)}else if(u=Zc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Io(l,s++),a+=Br(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function vr(e,t,n){if(e==null)return e;var r=[],o=0;return Br(e,r,"","",function(l){return t.call(n,l,o++)}),r}function td(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Ir={transition:null},nd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ci};function zs(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=yn;B.Fragment=Hc;B.Profiler=Wc;B.PureComponent=si;B.StrictMode=Vc;B.Suspense=Yc;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nd;B.act=zs;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=ci.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Cs.call(t,u)&&!Ns.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:cr,type:e.type,key:o,ref:l,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:Qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qc,_context:e},e.Consumer=e};B.createElement=Ss;B.createFactory=function(e){var t=Ss.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Gc,render:e}};B.isValidElement=di;B.lazy=function(e){return{$$typeof:Xc,_payload:{_status:-1,_result:e},_init:td}};B.memo=function(e,t){return{$$typeof:Kc,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};B.unstable_act=zs;B.useCallback=function(e,t){return pe.current.useCallback(e,t)};B.useContext=function(e){return pe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};B.useEffect=function(e,t){return pe.current.useEffect(e,t)};B.useId=function(){return pe.current.useId()};B.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return pe.current.useMemo(e,t)};B.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};B.useRef=function(e){return pe.current.useRef(e)};B.useState=function(e){return pe.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return pe.current.useTransition()};B.version="18.3.1";ys.exports=B;var J=ys.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=J,od=Symbol.for("react.element"),ld=Symbol.for("react.fragment"),id=Object.prototype.hasOwnProperty,ad=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sd={key:!0,ref:!0,__self:!0,__source:!0};function Es(e,t,n){var r,o={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)id.call(t,r)&&!sd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:od,type:e,key:l,ref:a,props:o,_owner:ad.current}}xo.Fragment=ld;xo.jsx=Es;xo.jsxs=Es;xs.exports=xo;var i=xs.exports,Ps={exports:{}},Se={},_s={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var $=C.length;C.push(L);e:for(;0<$;){var Y=$-1>>>1,te=C[Y];if(0<o(te,L))C[Y]=L,C[$]=te,$=Y;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],$=C.pop();if($!==L){C[0]=$;e:for(var Y=0,te=C.length,gr=te>>>1;Y<gr;){var St=2*(Y+1)-1,Bo=C[St],zt=St+1,hr=C[zt];if(0>o(Bo,$))zt<te&&0>o(hr,Bo)?(C[Y]=hr,C[zt]=$,Y=zt):(C[Y]=Bo,C[St]=$,Y=St);else if(zt<te&&0>o(hr,$))C[Y]=hr,C[zt]=$,Y=zt;else break e}}return L}function o(C,L){var $=C.sortIndex-L.sortIndex;return $!==0?$:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],g=1,h=null,m=3,w=!1,x=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=C)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function y(C){if(k=!1,p(C),!x)if(n(u)!==null)x=!0,S(v);else{var L=n(c);L!==null&&T(y,L.startTime-C)}}function v(C,L){x=!1,k&&(k=!1,f(_),_=-1),w=!0;var $=m;try{for(p(L),h=n(u);h!==null&&(!(h.expirationTime>L)||C&&!ge());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,m=h.priorityLevel;var te=Y(h.expirationTime<=L);L=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(u)&&r(u),p(L)}else r(u);h=n(u)}if(h!==null)var gr=!0;else{var St=n(c);St!==null&&T(y,St.startTime-L),gr=!1}return gr}finally{h=null,m=$,w=!1}}var z=!1,P=null,_=-1,V=5,R=-1;function ge(){return!(e.unstable_now()-R<V)}function Ct(){if(P!==null){var C=e.unstable_now();R=C;var L=!0;try{L=P(!0,C)}finally{L?Nt():(z=!1,P=null)}}else z=!1}var Nt;if(typeof d=="function")Nt=function(){d(Ct)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,N=j.port2;j.port1.onmessage=Ct,Nt=function(){N.postMessage(null)}}else Nt=function(){F(Ct,0)};function S(C){P=C,z||(z=!0,Nt())}function T(C,L){_=F(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,S(v))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var $=m;m=L;try{return C()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=m;m=C;try{return L()}finally{m=$}},e.unstable_scheduleCallback=function(C,L,$){var Y=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Y+$:Y):$=Y,C){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=$+te,C={id:g++,callback:L,priorityLevel:C,startTime:$,expirationTime:te,sortIndex:-1},$>Y?(C.sortIndex=$,t(c,C),n(u)===null&&C===n(c)&&(k?(f(_),_=-1):k=!0,T(y,$-Y))):(C.sortIndex=te,t(u,C),x||w||(x=!0,S(v))),C},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(C){var L=m;return function(){var $=m;m=L;try{return C.apply(this,arguments)}finally{m=$}}}})(Ls);_s.exports=Ls;var ud=_s.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=J,Ne=ud;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ts=new Set,qn={};function At(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(qn[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},sa={};function fd(e){return fl.call(sa,e)?!0:fl.call(aa,e)?!1:dd.test(e)?sa[e]=!0:(aa[e]=!0,!1)}function pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function md(e,t,n,r){if(t===null||typeof t>"u"||pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var fi=/[\-:]([a-z])/g;function pi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fi,pi);ie[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fi,pi);ie[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fi,pi);ie[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function mi(e,t,n,r){var o=ie.hasOwnProperty(t)?ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(md(t,n,o,r)&&(n=null),r||o===null?fd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),gi=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),$s=Symbol.for("react.provider"),Rs=Symbol.for("react.context"),hi=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),vi=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),ua=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Oo;function Tn(e){if(Oo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oo=t&&t[1]||""}return`
`+Oo+e}var Fo=!1;function Do(e,t){if(!e||Fo)return"";Fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,s=l.length-1;1<=a&&0<=s&&o[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==l[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Fo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function gd(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Do(e.type,!1),e;case 11:return e=Do(e.type.render,!1),e;case 1:return e=Do(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case pl:return"Profiler";case gi:return"StrictMode";case ml:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rs:return(e.displayName||"Context")+".Consumer";case $s:return(e._context.displayName||"Context")+".Provider";case hi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vi:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vd(e){var t=Is(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=vd(e))}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Is(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ca(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fs(e,t){t=t.checked,t!=null&&mi(e,"checked",t,!1)}function xl(e,t){Fs(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if($n(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Ds(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,As=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){xd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Us(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Us(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var yd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,rn=null,on=null;function ma(e){if(e=pr(e)){if(typeof Nl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=jo(t),Nl(e.stateNode,e.type,t))}}function Vs(e){rn?on?on.push(e):on=[e]:rn=e}function Ws(){if(rn){var e=rn,t=on;if(on=rn=null,ma(e),t)for(e=0;e<t.length;e++)ma(t[e])}}function qs(e,t){return e(t)}function Qs(){}var Mo=!1;function Gs(e,t,n){if(Mo)return e(t,n);Mo=!0;try{return qs(e,t,n)}finally{Mo=!1,(rn!==null||on!==null)&&(Qs(),Ws())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Sl=!1;if(Je)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Sl=!1}function bd(e,t,n,r,o,l,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Fn=!1,Gr=null,Yr=!1,zl=null,wd={onError:function(e){Fn=!0,Gr=e}};function kd(e,t,n,r,o,l,a,s,u){Fn=!1,Gr=null,bd.apply(wd,arguments)}function jd(e,t,n,r,o,l,a,s,u){if(kd.apply(this,arguments),Fn){if(Fn){var c=Gr;Fn=!1,Gr=null}else throw Error(b(198));Yr||(Yr=!0,zl=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ys(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ga(e){if(Ut(e)!==e)throw Error(b(188))}function Cd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ga(o),e;if(l===r)return ga(o),t;l=l.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Ks(e){return e=Cd(e),e!==null?Xs(e):null}function Xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xs(e);if(t!==null)return t;e=e.sibling}return null}var Zs=Ne.unstable_scheduleCallback,ha=Ne.unstable_cancelCallback,Nd=Ne.unstable_shouldYield,Sd=Ne.unstable_requestPaint,K=Ne.unstable_now,zd=Ne.unstable_getCurrentPriorityLevel,yi=Ne.unstable_ImmediatePriority,Js=Ne.unstable_UserBlockingPriority,Kr=Ne.unstable_NormalPriority,Ed=Ne.unstable_LowPriority,eu=Ne.unstable_IdlePriority,yo=null,We=null;function Pd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Td,_d=Math.log,Ld=Math.LN2;function Td(e){return e>>>=0,e===0?32:31-(_d(e)/Ld|0)|0}var wr=64,kr=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Rn(s):(l&=a,l!==0&&(r=Rn(l)))}else a=n&~o,a!==0?r=Rn(a):l!==0&&(r=Rn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),o=1<<n,r|=e[n],t&=~o;return r}function $d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Fe(l),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=$d(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tu(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Bd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Fe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var D=0;function nu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ru,wi,ou,lu,iu,Pl=!1,jr=[],dt=null,ft=null,pt=null,Yn=new Map,Kn=new Map,at=[],Id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Cn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&wi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Od(e,t,n,r,o){switch(t){case"focusin":return dt=Cn(dt,e,t,n,r,o),!0;case"dragenter":return ft=Cn(ft,e,t,n,r,o),!0;case"mouseover":return pt=Cn(pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Yn.set(l,Cn(Yn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Kn.set(l,Cn(Kn.get(l)||null,e,t,n,r,o)),!0}return!1}function au(e){var t=Lt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Ys(n),t!==null){e.blockedOn=t,iu(e.priority,function(){ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return t=pr(n),t!==null&&wi(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){Or(e)&&n.delete(t)}function Fd(){Pl=!1,dt!==null&&Or(dt)&&(dt=null),ft!==null&&Or(ft)&&(ft=null),pt!==null&&Or(pt)&&(pt=null),Yn.forEach(xa),Kn.forEach(xa)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Fd)))}function Xn(e){function t(o){return Nn(o,e)}if(0<jr.length){Nn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Nn(dt,e),ft!==null&&Nn(ft,e),pt!==null&&Nn(pt,e),Yn.forEach(t),Kn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)au(n),n.blockedOn===null&&at.shift()}var ln=rt.ReactCurrentBatchConfig,Zr=!0;function Dd(e,t,n,r){var o=D,l=ln.transition;ln.transition=null;try{D=1,ki(e,t,n,r)}finally{D=o,ln.transition=l}}function Md(e,t,n,r){var o=D,l=ln.transition;ln.transition=null;try{D=4,ki(e,t,n,r)}finally{D=o,ln.transition=l}}function ki(e,t,n,r){if(Zr){var o=_l(e,t,n,r);if(o===null)Xo(e,t,r,Jr,n),va(e,r);else if(Od(o,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<Id.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&ru(l),l=_l(e,t,n,r),l===null&&Xo(e,t,r,Jr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Xo(e,t,r,null,n)}}var Jr=null;function _l(e,t,n,r){if(Jr=null,e=xi(r),e=Lt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ys(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zd()){case yi:return 1;case Js:return 4;case Kr:case Ed:return 16;case eu:return 536870912;default:return 16}default:return 16}}var ut=null,ji=null,Fr=null;function uu(){if(Fr)return Fr;var e,t=ji,n=t.length,r,o="value"in ut?ut.value:ut.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return Fr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function ya(){return!1}function ze(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Cr:ya,this.isPropagationStopped=ya,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=ze(bn),fr=Q({},bn,{view:0,detail:0}),Ad=ze(fr),Uo,Ho,Sn,bo=Q({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Uo=e.screenX-Sn.screenX,Ho=e.screenY-Sn.screenY):Ho=Uo=0,Sn=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:Ho}}),ba=ze(bo),Ud=Q({},bo,{dataTransfer:0}),Hd=ze(Ud),Vd=Q({},fr,{relatedTarget:0}),Vo=ze(Vd),Wd=Q({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=ze(Wd),Qd=Q({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gd=ze(Qd),Yd=Q({},bn,{data:0}),wa=ze(Yd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zd[e])?!!t[e]:!1}function Ni(){return Jd}var e0=Q({},fr,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ni,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t0=ze(e0),n0=Q({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ka=ze(n0),r0=Q({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ni}),o0=ze(r0),l0=Q({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),i0=ze(l0),a0=Q({},bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=ze(a0),u0=[9,13,27,32],Si=Je&&"CompositionEvent"in window,Dn=null;Je&&"documentMode"in document&&(Dn=document.documentMode);var c0=Je&&"TextEvent"in window&&!Dn,cu=Je&&(!Si||Dn&&8<Dn&&11>=Dn),ja=" ",Ca=!1;function du(e,t){switch(e){case"keyup":return u0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function d0(e,t){switch(e){case"compositionend":return fu(t);case"keypress":return t.which!==32?null:(Ca=!0,ja);case"textInput":return e=t.data,e===ja&&Ca?null:e;default:return null}}function f0(e,t){if(qt)return e==="compositionend"||!Si&&du(e,t)?(e=uu(),Fr=ji=ut=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p0[e.type]:t==="textarea"}function pu(e,t,n,r){Vs(r),t=eo(t,"onChange"),0<t.length&&(n=new Ci("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mn=null,Zn=null;function m0(e){Cu(e,0)}function wo(e){var t=Yt(e);if(Os(t))return e}function g0(e,t){if(e==="change")return t}var mu=!1;if(Je){var Wo;if(Je){var qo="oninput"in document;if(!qo){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),qo=typeof Sa.oninput=="function"}Wo=qo}else Wo=!1;mu=Wo&&(!document.documentMode||9<document.documentMode)}function za(){Mn&&(Mn.detachEvent("onpropertychange",gu),Zn=Mn=null)}function gu(e){if(e.propertyName==="value"&&wo(Zn)){var t=[];pu(t,Zn,e,xi(e)),Gs(m0,t)}}function h0(e,t,n){e==="focusin"?(za(),Mn=t,Zn=n,Mn.attachEvent("onpropertychange",gu)):e==="focusout"&&za()}function v0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Zn)}function x0(e,t){if(e==="click")return wo(t)}function y0(e,t){if(e==="input"||e==="change")return wo(t)}function b0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:b0;function Jn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fl.call(t,o)||!Me(e[o],t[o]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w0(e){var t=vu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hu(n.ownerDocument.documentElement,n)){if(r!==null&&zi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Pa(n,l);var a=Pa(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var k0=Je&&"documentMode"in document&&11>=document.documentMode,Qt=null,Ll=null,An=null,Tl=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||Qt==null||Qt!==Qr(r)||(r=Qt,"selectionStart"in r&&zi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&Jn(An,r)||(An=r,r=eo(Ll,"onSelect"),0<r.length&&(t=new Ci("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Qo={},xu={};Je&&(xu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function ko(e){if(Qo[e])return Qo[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xu)return Qo[e]=t[n];return e}var yu=ko("animationend"),bu=ko("animationiteration"),wu=ko("animationstart"),ku=ko("transitionend"),ju=new Map,La="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){ju.set(e,t),At(t,[e])}for(var Go=0;Go<La.length;Go++){var Yo=La[Go],j0=Yo.toLowerCase(),C0=Yo[0].toUpperCase()+Yo.slice(1);wt(j0,"on"+C0)}wt(yu,"onAnimationEnd");wt(bu,"onAnimationIteration");wt(wu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(ku,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function Ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jd(r,t,void 0,e),e.currentTarget=null}function Cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==l&&o.isPropagationStopped())break e;Ta(o,s,c),l=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==l&&o.isPropagationStopped())break e;Ta(o,s,c),l=u}}}if(Yr)throw e=zl,Yr=!1,zl=null,e}function A(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(Nu(t,e,2,!1),n.add(r))}function Ko(e,t,n){var r=0;t&&(r|=4),Nu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Sr]){e[Sr]=!0,Ts.forEach(function(n){n!=="selectionchange"&&(N0.has(n)||Ko(n,!1,e),Ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Ko("selectionchange",!1,t))}}function Nu(e,t,n,r){switch(su(t)){case 1:var o=Dd;break;case 4:o=Md;break;default:o=ki}n=o.bind(null,t,n,e),o=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Xo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Lt(s),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}s=s.parentNode}}r=r.return}Gs(function(){var c=l,g=xi(n),h=[];e:{var m=ju.get(e);if(m!==void 0){var w=Ci,x=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":w=t0;break;case"focusin":x="focus",w=Vo;break;case"focusout":x="blur",w=Vo;break;case"beforeblur":case"afterblur":w=Vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Hd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=o0;break;case yu:case bu:case wu:w=qd;break;case ku:w=i0;break;case"scroll":w=Ad;break;case"wheel":w=s0;break;case"copy":case"cut":case"paste":w=Gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ka}var k=(t&4)!==0,F=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Gn(d,f),y!=null&&k.push(tr(d,y,p)))),F)break;d=d.return}0<k.length&&(m=new w(m,x,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Cl&&(x=n.relatedTarget||n.fromElement)&&(Lt(x)||x[et]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?Lt(x):null,x!==null&&(F=Ut(x),x!==F||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(k=ba,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=ka,y="onPointerLeave",f="onPointerEnter",d="pointer"),F=w==null?m:Yt(w),p=x==null?m:Yt(x),m=new k(y,d+"leave",w,n,g),m.target=F,m.relatedTarget=p,y=null,Lt(g)===c&&(k=new k(f,d+"enter",x,n,g),k.target=p,k.relatedTarget=F,y=k),F=y,w&&x)t:{for(k=w,f=x,d=0,p=k;p;p=Ht(p))d++;for(p=0,y=f;y;y=Ht(y))p++;for(;0<d-p;)k=Ht(k),d--;for(;0<p-d;)f=Ht(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=Ht(k),f=Ht(f)}k=null}else k=null;w!==null&&$a(h,m,w,k,!1),x!==null&&F!==null&&$a(h,F,x,k,!0)}}e:{if(m=c?Yt(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var v=g0;else if(Na(m))if(mu)v=y0;else{v=v0;var z=h0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(v=x0);if(v&&(v=v(e,c))){pu(h,v,n,g);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&yl(m,"number",m.value)}switch(z=c?Yt(c):window,e){case"focusin":(Na(z)||z.contentEditable==="true")&&(Qt=z,Ll=c,An=null);break;case"focusout":An=Ll=Qt=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,_a(h,n,g);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":_a(h,n,g)}var P;if(Si)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else qt?du(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(cu&&n.locale!=="ko"&&(qt||_!=="onCompositionStart"?_==="onCompositionEnd"&&qt&&(P=uu()):(ut=g,ji="value"in ut?ut.value:ut.textContent,qt=!0)),z=eo(c,_),0<z.length&&(_=new wa(_,e,null,n,g),h.push({event:_,listeners:z}),P?_.data=P:(P=fu(n),P!==null&&(_.data=P)))),(P=c0?d0(e,n):f0(e,n))&&(c=eo(c,"onBeforeInput"),0<c.length&&(g=new wa("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=P))}Cu(h,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Gn(e,n),l!=null&&r.unshift(tr(e,l,o)),l=Gn(e,t),l!=null&&r.push(tr(e,l,o))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $a(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=Gn(n,l),u!=null&&a.unshift(tr(n,u,s))):o||(u=Gn(n,l),u!=null&&a.push(tr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var S0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function Ra(e){return(typeof e=="string"?e:""+e).replace(S0,`
`).replace(z0,"")}function zr(e,t,n){if(t=Ra(t),Ra(e)!==t&&n)throw Error(b(425))}function to(){}var $l=null,Rl=null;function Bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,Ba=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ba<"u"?function(e){return Ba.resolve(null).then(e).catch(_0)}:Il;function _0(e){setTimeout(function(){throw e})}function Zo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+wn,nr="__reactProps$"+wn,et="__reactContainer$"+wn,Ol="__reactEvents$"+wn,L0="__reactListeners$"+wn,T0="__reactHandles$"+wn;function Lt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[et]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ia(e);e!==null;){if(n=e[Ve])return n;e=Ia(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Ve]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function jo(e){return e[nr]||null}var Fl=[],Kt=-1;function kt(e){return{current:e}}function U(e){0>Kt||(e.current=Fl[Kt],Fl[Kt]=null,Kt--)}function M(e,t){Kt++,Fl[Kt]=e.current,e.current=t}var bt={},ce=kt(bt),ye=kt(!1),It=bt;function fn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function no(){U(ye),U(ce)}function Oa(e,t,n){if(ce.current!==bt)throw Error(b(168));M(ce,t),M(ye,n)}function Su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,hd(e)||"Unknown",o));return Q({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,It=ce.current,M(ce,e),M(ye,ye.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Su(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,U(ye),U(ce),M(ce,e)):U(ye),M(ye,n)}var Ge=null,Co=!1,Jo=!1;function zu(e){Ge===null?Ge=[e]:Ge.push(e)}function $0(e){Co=!0,zu(e)}function jt(){if(!Jo&&Ge!==null){Jo=!0;var e=0,t=D;try{var n=Ge;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Co=!1}catch(o){throw Ge!==null&&(Ge=Ge.slice(e+1)),Zs(yi,jt),o}finally{D=t,Jo=!1}}return null}var Xt=[],Zt=0,oo=null,lo=0,Ee=[],Pe=0,Ot=null,Ke=1,Xe="";function Et(e,t){Xt[Zt++]=lo,Xt[Zt++]=oo,oo=e,lo=t}function Eu(e,t,n){Ee[Pe++]=Ke,Ee[Pe++]=Xe,Ee[Pe++]=Ot,Ot=e;var r=Ke;e=Xe;var o=32-Fe(r)-1;r&=~(1<<o),n+=1;var l=32-Fe(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Ke=1<<32-Fe(t)+o|n<<o|r,Xe=l+e}else Ke=1<<l|n<<o|r,Xe=e}function Ei(e){e.return!==null&&(Et(e,1),Eu(e,1,0))}function Pi(e){for(;e===oo;)oo=Xt[--Zt],Xt[Zt]=null,lo=Xt[--Zt],Xt[Zt]=null;for(;e===Ot;)Ot=Ee[--Pe],Ee[Pe]=null,Xe=Ee[--Pe],Ee[Pe]=null,Ke=Ee[--Pe],Ee[Pe]=null}var Ce=null,je=null,H=!1,Oe=null;function Pu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Da(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,je=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ke,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,je=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(H){var t=je;if(t){var n=t;if(!Da(e,t)){if(Dl(e))throw Error(b(418));t=mt(n.nextSibling);var r=Ce;t&&Da(e,t)?Pu(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(Dl(e))throw Error(b(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function Ma(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Er(e){if(e!==Ce)return!1;if(!H)return Ma(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bl(e.type,e.memoizedProps)),t&&(t=je)){if(Dl(e))throw _u(),Error(b(418));for(;t;)Pu(e,t),t=mt(t.nextSibling)}if(Ma(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ce?mt(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=je;e;)e=mt(e.nextSibling)}function pn(){je=Ce=null,H=!1}function _i(e){Oe===null?Oe=[e]:Oe.push(e)}var R0=rt.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=o.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Pr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Aa(e){var t=e._init;return t(e._payload)}function Lu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=xt(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=il(p,f.mode,y),d.return=f,d):(d=o(d,p),d.return=f,d)}function u(f,d,p,y){var v=p.type;return v===Wt?g(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===lt&&Aa(v)===d.type)?(y=o(d,p.props),y.ref=zn(f,d,p),y.return=f,y):(y=qr(p.type,p.key,p.props,null,f.mode,y),y.ref=zn(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=al(p,f.mode,y),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function g(f,d,p,y,v){return d===null||d.tag!==7?(d=Bt(p,f.mode,y,v),d.return=f,d):(d=o(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=il(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return p=qr(d.type,d.key,d.props,null,f.mode,p),p.ref=zn(f,null,d),p.return=f,p;case Vt:return d=al(d,f.mode,p),d.return=f,d;case lt:var y=d._init;return h(f,y(d._payload),p)}if($n(d)||kn(d))return d=Bt(d,f.mode,p,null),d.return=f,d;Pr(f,d)}return null}function m(f,d,p,y){var v=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return v!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===v?u(f,d,p,y):null;case Vt:return p.key===v?c(f,d,p,y):null;case lt:return v=p._init,m(f,d,v(p._payload),y)}if($n(p)||kn(p))return v!==null?null:g(f,d,p,y,null);Pr(f,p)}return null}function w(f,d,p,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xr:return f=f.get(y.key===null?p:y.key)||null,u(d,f,y,v);case Vt:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,v);case lt:var z=y._init;return w(f,d,p,z(y._payload),v)}if($n(y)||kn(y))return f=f.get(p)||null,g(d,f,y,v,null);Pr(d,y)}return null}function x(f,d,p,y){for(var v=null,z=null,P=d,_=d=0,V=null;P!==null&&_<p.length;_++){P.index>_?(V=P,P=null):V=P.sibling;var R=m(f,P,p[_],y);if(R===null){P===null&&(P=V);break}e&&P&&R.alternate===null&&t(f,P),d=l(R,d,_),z===null?v=R:z.sibling=R,z=R,P=V}if(_===p.length)return n(f,P),H&&Et(f,_),v;if(P===null){for(;_<p.length;_++)P=h(f,p[_],y),P!==null&&(d=l(P,d,_),z===null?v=P:z.sibling=P,z=P);return H&&Et(f,_),v}for(P=r(f,P);_<p.length;_++)V=w(P,f,_,p[_],y),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?_:V.key),d=l(V,d,_),z===null?v=V:z.sibling=V,z=V);return e&&P.forEach(function(ge){return t(f,ge)}),H&&Et(f,_),v}function k(f,d,p,y){var v=kn(p);if(typeof v!="function")throw Error(b(150));if(p=v.call(p),p==null)throw Error(b(151));for(var z=v=null,P=d,_=d=0,V=null,R=p.next();P!==null&&!R.done;_++,R=p.next()){P.index>_?(V=P,P=null):V=P.sibling;var ge=m(f,P,R.value,y);if(ge===null){P===null&&(P=V);break}e&&P&&ge.alternate===null&&t(f,P),d=l(ge,d,_),z===null?v=ge:z.sibling=ge,z=ge,P=V}if(R.done)return n(f,P),H&&Et(f,_),v;if(P===null){for(;!R.done;_++,R=p.next())R=h(f,R.value,y),R!==null&&(d=l(R,d,_),z===null?v=R:z.sibling=R,z=R);return H&&Et(f,_),v}for(P=r(f,P);!R.done;_++,R=p.next())R=w(P,f,_,R.value,y),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?_:R.key),d=l(R,d,_),z===null?v=R:z.sibling=R,z=R);return e&&P.forEach(function(Ct){return t(f,Ct)}),H&&Et(f,_),v}function F(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var v=p.key,z=d;z!==null;){if(z.key===v){if(v=p.type,v===Wt){if(z.tag===7){n(f,z.sibling),d=o(z,p.props.children),d.return=f,f=d;break e}}else if(z.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===lt&&Aa(v)===z.type){n(f,z.sibling),d=o(z,p.props),d.ref=zn(f,z,p),d.return=f,f=d;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===Wt?(d=Bt(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=qr(p.type,p.key,p.props,null,f.mode,y),y.ref=zn(f,d,p),y.return=f,f=y)}return a(f);case Vt:e:{for(z=p.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=al(p,f.mode,y),d.return=f,f=d}return a(f);case lt:return z=p._init,F(f,d,z(p._payload),y)}if($n(p))return x(f,d,p,y);if(kn(p))return k(f,d,p,y);Pr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=il(p,f.mode,y),d.return=f,f=d),a(f)):n(f,d)}return F}var mn=Lu(!0),Tu=Lu(!1),io=kt(null),ao=null,Jt=null,Li=null;function Ti(){Li=Jt=ao=null}function $i(e){var t=io.current;U(io),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ao=e,Li=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Li!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(ao===null)throw Error(b(308));Jt=e,ao.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Tt=null;function Ri(e){Tt===null?Tt=[e]:Tt.push(e)}function $u(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ri(t)):(n.next=o.next,o.next=n),t.interleaved=n,tt(e,r)}function tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var it=!1;function Bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,tt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ri(r)):(t.next=o.next,o.next=t),r.interleaved=t,tt(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function so(e,t,n,r){var o=e.updateQueue;it=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?l=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(l!==null){var h=o.baseState;a=0,g=c=u=null,s=l;do{var m=s.lane,w=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,k=s;switch(m=t,w=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){h=x.call(w,h,m);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,m=typeof x=="function"?x.call(w,h,m):x,m==null)break e;h=Q({},h,m);break e;case 2:it=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=w,u=h):g=g.next=w,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Dt|=a,e.lanes=a,e.memoizedState=h}}function Ha(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var mr={},qe=kt(mr),rr=kt(mr),or=kt(mr);function $t(e){if(e===mr)throw Error(b(174));return e}function Ii(e,t){switch(M(or,t),M(rr,e),M(qe,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}U(qe),M(qe,t)}function gn(){U(qe),U(rr),U(or)}function Bu(e){$t(or.current);var t=$t(qe.current),n=wl(t,e.type);t!==n&&(M(rr,e),M(qe,n))}function Oi(e){rr.current===e&&(U(qe),U(rr))}var W=kt(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Fi(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Ar=rt.ReactCurrentDispatcher,tl=rt.ReactCurrentBatchConfig,Ft=0,q=null,Z=null,ne=null,co=!1,Un=!1,lr=0,B0=0;function ae(){throw Error(b(321))}function Di(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function Mi(e,t,n,r,o,l){if(Ft=l,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?D0:M0,e=n(r,o),Un){l=0;do{if(Un=!1,lr=0,25<=l)throw Error(b(301));l+=1,ne=Z=null,t.updateQueue=null,Ar.current=A0,e=n(r,o)}while(Un)}if(Ar.current=fo,t=Z!==null&&Z.next!==null,Ft=0,ne=Z=q=null,co=!1,t)throw Error(b(300));return e}function Ai(){var e=lr!==0;return lr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?q.memoizedState=ne=e:ne=ne.next=e,ne}function $e(){if(Z===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?q.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(b(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?q.memoizedState=ne=e:ne=ne.next=e}return ne}function ir(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=$e(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=a=null,u=null,c=l;do{var g=c.lane;if((Ft&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=h,a=r):u=u.next=h,q.lanes|=g,Dt|=g}c=c.next}while(c!==null&&c!==l);u===null?a=r:u.next=s,Me(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,q.lanes|=l,Dt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=$e(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);Me(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Iu(){}function Ou(e,t){var n=q,r=$e(),o=t(),l=!Me(r.memoizedState,o);if(l&&(r.memoizedState=o,xe=!0),r=r.queue,Ui(Mu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,ar(9,Du.bind(null,n,r,o,t),void 0,null),re===null)throw Error(b(349));Ft&30||Fu(n,t,o)}return o}function Fu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Du(e,t,n,r){t.value=n,t.getSnapshot=r,Au(t)&&Uu(e)}function Mu(e,t,n){return n(function(){Au(t)&&Uu(e)})}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function Uu(e){var t=tt(e,1);t!==null&&De(t,e,1,-1)}function Va(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=F0.bind(null,q,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hu(){return $e().memoizedState}function Ur(e,t,n,r){var o=He();q.flags|=e,o.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var o=$e();r=r===void 0?null:r;var l=void 0;if(Z!==null){var a=Z.memoizedState;if(l=a.destroy,r!==null&&Di(r,a.deps)){o.memoizedState=ar(t,n,l,r);return}}q.flags|=e,o.memoizedState=ar(1|t,n,l,r)}function Wa(e,t){return Ur(8390656,8,e,t)}function Ui(e,t){return No(2048,8,e,t)}function Vu(e,t){return No(4,2,e,t)}function Wu(e,t){return No(4,4,e,t)}function qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qu(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,qu.bind(null,t,e),n)}function Hi(){}function Gu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yu(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Di(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ku(e,t,n){return Ft&21?(Me(n,t)||(n=tu(),q.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function I0(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{D=n,tl.transition=r}}function Xu(){return $e().memoizedState}function O0(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zu(e))Ju(t,n);else if(n=$u(e,t,n,r),n!==null){var o=fe();De(n,e,r,o),ec(n,t,r)}}function F0(e,t,n){var r=vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zu(e))Ju(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(o.hasEagerState=!0,o.eagerState=s,Me(s,a)){var u=t.interleaved;u===null?(o.next=o,Ri(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=$u(e,t,o,r),n!==null&&(o=fe(),De(n,e,r,o),ec(n,t,r))}}function Zu(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ju(e,t){Un=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ec(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}var fo={readContext:Te,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},D0={readContext:Te,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ur(4194308,4,qu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Va,useDebugValue:Hi,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Va(!1),t=e[0];return e=I0.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=He();if(H){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),re===null)throw Error(b(349));Ft&30||Fu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Wa(Mu.bind(null,r,l,e),[e]),r.flags|=2048,ar(9,Du.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=He(),t=re.identifierPrefix;if(H){var n=Xe,r=Ke;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=B0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M0={readContext:Te,useCallback:Gu,useContext:Te,useEffect:Ui,useImperativeHandle:Qu,useInsertionEffect:Vu,useLayoutEffect:Wu,useMemo:Yu,useReducer:nl,useRef:Hu,useState:function(){return nl(ir)},useDebugValue:Hi,useDeferredValue:function(e){var t=$e();return Ku(t,Z.memoizedState,e)},useTransition:function(){var e=nl(ir)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Iu,useSyncExternalStore:Ou,useId:Xu,unstable_isNewReconciler:!1},A0={readContext:Te,useCallback:Gu,useContext:Te,useEffect:Ui,useImperativeHandle:Qu,useInsertionEffect:Vu,useLayoutEffect:Wu,useMemo:Yu,useReducer:rl,useRef:Hu,useState:function(){return rl(ir)},useDebugValue:Hi,useDeferredValue:function(e){var t=$e();return Z===null?t.memoizedState=e:Ku(t,Z.memoizedState,e)},useTransition:function(){var e=rl(ir)[0],t=$e().memoizedState;return[e,t]},useMutableSource:Iu,useSyncExternalStore:Ou,useId:Xu,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),o=vt(e),l=Ze(r,o);l.payload=t,n!=null&&(l.callback=n),t=gt(e,l,o),t!==null&&(De(t,e,o,r),Mr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),o=vt(e),l=Ze(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=gt(e,l,o),t!==null&&(De(t,e,o,r),Mr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=vt(e),o=Ze(n,r);o.tag=2,t!=null&&(o.callback=t),t=gt(e,o,r),t!==null&&(De(t,e,r,n),Mr(t,e,r))}};function qa(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,l):!0}function tc(e,t,n){var r=!1,o=bt,l=t.contextType;return typeof l=="object"&&l!==null?l=Te(l):(o=be(t)?It:ce.current,r=t.contextTypes,l=(r=r!=null)?fn(e,o):bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Te(l):(l=be(t)?It:ce.current,o.context=fn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ul(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&So.enqueueReplaceState(o,o.state,null),so(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=gd(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U0=typeof WeakMap=="function"?WeakMap:Map;function nc(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,ei=r),Vl(e,t)},n}function rc(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Vl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Vl(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ga(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=nf.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ka(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var H0=rt.ReactCurrentOwner,xe=!1;function de(e,t,n,r){t.child=e===null?Tu(t,null,n,r):mn(t,e.child,n,r)}function Xa(e,t,n,r,o){n=n.render;var l=t.ref;return an(t,o),r=Mi(e,t,n,r,l,o),n=Ai(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nt(e,t,o)):(H&&n&&Ei(t),t.flags|=1,de(e,t,r,o),t.child)}function Za(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Xi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,oc(e,t,l,r,o)):(e=qr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(a,r)&&e.ref===t.ref)return nt(e,t,o)}return t.flags|=1,e=xt(l,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Jn(l,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,nt(e,t,o)}return Wl(e,t,n,r,o)}function lc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(tn,ke),ke|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(tn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,M(tn,ke),ke|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,M(tn,ke),ke|=r;return de(e,t,o,n),t.child}function ic(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,o){var l=be(n)?It:ce.current;return l=fn(t,l),an(t,o),n=Mi(e,t,n,r,l,o),r=Ai(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,nt(e,t,o)):(H&&r&&Ei(t),t.flags|=1,de(e,t,n,o),t.child)}function Ja(e,t,n,r,o){if(be(n)){var l=!0;ro(t)}else l=!1;if(an(t,o),t.stateNode===null)Hr(e,t),tc(t,n,r),Hl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Te(c):(c=be(n)?It:ce.current,c=fn(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Qa(t,a,r,c),it=!1;var m=t.memoizedState;a.state=m,so(t,r,a,o),u=t.memoizedState,s!==r||m!==u||ye.current||it?(typeof g=="function"&&(Ul(t,n,g,r),u=t.memoizedState),(s=it||qa(t,n,s,r,m,u,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ru(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Be(t.type,s),a.props=c,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=be(n)?It:ce.current,u=fn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Qa(t,a,r,u),it=!1,m=t.memoizedState,a.state=m,so(t,r,a,o);var x=t.memoizedState;s!==h||m!==x||ye.current||it?(typeof w=="function"&&(Ul(t,n,w,r),x=t.memoizedState),(c=it||qa(t,n,c,r,m,x,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ql(e,t,n,r,l,o)}function ql(e,t,n,r,o,l){ic(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Fa(t,n,!1),nt(e,t,l);r=t.stateNode,H0.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=mn(t,e.child,null,l),t.child=mn(t,null,s,l)):de(e,t,s,l),t.memoizedState=r.state,o&&Fa(t,n,!0),t.child}function ac(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Ii(e,t.containerInfo)}function es(e,t,n,r,o){return pn(),_i(o),t.flags|=256,de(e,t,n,r),t.child}var Ql={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function sc(e,t,n){var r=t.pendingProps,o=W.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),M(W,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Po(a,r,0,null),e=Bt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Gl(n),t.memoizedState=Ql,e):Vi(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return V0(e,t,a,r,s,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=xt(s,l):(l=Bt(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Gl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Ql,r}return l=e.child,e=l.sibling,r=xt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vi(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&_i(r),mn(t,e.child,null,n),e=Vi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V0(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(b(422))),_r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=Bt(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&mn(t,e.child,null,a),t.child.memoizedState=Gl(a),t.memoizedState=Ql,l);if(!(t.mode&1))return _r(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(b(419)),r=ol(l,r,void 0),_r(e,t,a,r)}if(s=(a&e.childLanes)!==0,xe||s){if(r=re,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,tt(e,o),De(r,e,o,-1))}return Ki(),r=ol(Error(b(421))),_r(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rf.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,je=mt(o.nextSibling),Ce=t,H=!0,Oe=null,e!==null&&(Ee[Pe++]=Ke,Ee[Pe++]=Xe,Ee[Pe++]=Ot,Ke=e.id,Xe=e.overflow,Ot=t),t=Vi(t,r.children),t.flags|=4096,t)}function ts(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function ll(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function uc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ts(e,n,t);else if(e.tag===19)ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,l);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W0(e,t,n){switch(t.tag){case 3:ac(t),pn();break;case 5:Bu(t);break;case 1:be(t.type)&&ro(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;M(io,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?sc(e,t,n):(M(W,W.current&1),e=nt(e,t,n),e!==null?e.sibling:null);M(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),M(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,lc(e,t,n)}return nt(e,t,n)}var cc,Yl,dc,fc;cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};dc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$t(qe.current);var l=null;switch(n){case"input":o=vl(e,o),r=vl(e,r),l=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),l=[];break;case"textarea":o=bl(e,o),r=bl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}kl(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qn.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),l||s===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function q0(e,t,n){var r=t.pendingProps;switch(Pi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return be(t.type)&&no(),se(t),null;case 3:return r=t.stateNode,gn(),U(ye),U(ce),Fi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(ri(Oe),Oe=null))),Yl(e,t),se(t),null;case 5:Oi(t);var o=$t(or.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return se(t),null}if(e=$t(qe.current),Er(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ve]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(o=0;o<Bn.length;o++)A(Bn[o],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":ca(r,l),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},A("invalid",r);break;case"textarea":fa(r,l),A("invalid",r)}kl(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&zr(r.textContent,s,e),o=["children",""+s]):qn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&A("scroll",r)}switch(n){case"input":yr(r),da(r,l,!0);break;case"textarea":yr(r),pa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ve]=t,e[nr]=r,cc(e,t,!1,!1),t.stateNode=e;e:{switch(a=jl(n,r),n){case"dialog":A("cancel",e),A("close",e),o=r;break;case"iframe":case"object":case"embed":A("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bn.length;o++)A(Bn[o],e);o=r;break;case"source":A("error",e),o=r;break;case"img":case"image":case"link":A("error",e),A("load",e),o=r;break;case"details":A("toggle",e),o=r;break;case"input":ca(e,r),o=vl(e,r),A("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),A("invalid",e);break;case"textarea":fa(e,r),o=bl(e,r),A("invalid",e);break;default:o=r}kl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Hs(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&As(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qn(e,u):typeof u=="number"&&Qn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(qn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&A("scroll",e):u!=null&&mi(e,l,u,a))}switch(n){case"input":yr(e),da(e,r,!1);break;case"textarea":yr(e),pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=$t(or.current),$t(qe.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(l=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:zr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(U(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&je!==null&&t.mode&1&&!(t.flags&128))_u(),pn(),t.flags|=98560,l=!1;else if(l=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(b(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));l[Ve]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else Oe!==null&&(ri(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ee===0&&(ee=3):Ki())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),Yl(e,t),e===null&&er(t.stateNode.containerInfo),se(t),null;case 10:return $i(t.type._context),se(t),null;case 17:return be(t.type)&&no(),se(t),null;case 19:if(U(W),l=t.memoizedState,l===null)return se(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)En(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=uo(e),a!==null){for(t.flags|=128,En(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>vn&&(t.flags|=128,r=!0,En(l,!1),t.lanes=4194304)}else{if(!r)if(e=uo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!H)return se(t),null}else 2*K()-l.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,En(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=W.current,M(W,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Yi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Q0(e,t){switch(Pi(t),t.tag){case 1:return be(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),U(ye),U(ce),Fi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oi(t),null;case 13:if(U(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(W),null;case 4:return gn(),null;case 10:return $i(t.type._context),null;case 22:case 23:return Yi(),null;case 24:return null;default:return null}}var Lr=!1,ue=!1,G0=typeof WeakSet=="function"?WeakSet:Set,E=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Kl(e,t,n){try{n()}catch(r){G(e,t,r)}}var ns=!1;function Y0(e,t){if($l=Zr,e=vu(),zi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,g=0,h=e,m=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(s=a+o),h!==l||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(w=h.firstChild)!==null;)m=h,h=w;for(;;){if(h===e)break t;if(m===n&&++c===o&&(s=a),m===l&&++g===r&&(u=a),(w=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Zr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,F=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Be(t.type,k),F);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){G(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return x=ns,ns=!1,x}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Kl(t,n,l)}o=o.next}while(o!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pc(e){var t=e.alternate;t!==null&&(e.alternate=null,pc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[nr],delete t[Ol],delete t[L0],delete t[T0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mc(e){return e.tag===5||e.tag===3||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var oe=null,Ie=!1;function ot(e,t,n){for(n=n.child;n!==null;)gc(e,t,n),n=n.sibling}function gc(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:ue||en(n,t);case 6:var r=oe,o=Ie;oe=null,ot(e,t,n),oe=r,Ie=o,oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?Zo(e.parentNode,n):e.nodeType===1&&Zo(e,n),Xn(e)):Zo(oe,n.stateNode));break;case 4:r=oe,o=Ie,oe=n.stateNode.containerInfo,Ie=!0,ot(e,t,n),oe=r,Ie=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Kl(n,t,a),o=o.next}while(o!==r)}ot(e,t,n);break;case 1:if(!ue&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,ot(e,t,n),ue=r):ot(e,t,n);break;default:ot(e,t,n)}}function os(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G0),t.forEach(function(r){var o=of.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Ie=!1;break e;case 3:oe=s.stateNode.containerInfo,Ie=!0;break e;case 4:oe=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(oe===null)throw Error(b(160));gc(l,a,o),oe=null,Ie=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hc(t,e),t=t.sibling}function hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Ae(e),r&4){try{Hn(3,e,e.return),zo(3,e)}catch(k){G(e,e.return,k)}try{Hn(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Re(t,e),Ae(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Re(t,e),Ae(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var o=e.stateNode;try{Qn(o,"")}catch(k){G(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Fs(o,l),jl(s,a);var c=jl(s,l);for(a=0;a<u.length;a+=2){var g=u[a],h=u[a+1];g==="style"?Hs(o,h):g==="dangerouslySetInnerHTML"?As(o,h):g==="children"?Qn(o,h):mi(o,g,h,c)}switch(s){case"input":xl(o,l);break;case"textarea":Ds(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?nn(o,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?nn(o,!!l.multiple,l.defaultValue,!0):nn(o,!!l.multiple,l.multiple?[]:"",!1))}o[nr]=l}catch(k){G(e,e.return,k)}}break;case 6:if(Re(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){G(e,e.return,k)}}break;case 3:if(Re(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Re(t,e),Ae(e);break;case 13:Re(t,e),Ae(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Qi=K())),r&4&&os(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||g,Re(t,e),ue=c):Re(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(h=E=g;E!==null;){switch(m=E,w=m.child,m.tag){case 0:case 11:case 14:case 15:Hn(4,m,m.return);break;case 1:en(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:en(m,m.return);break;case 22:if(m.memoizedState!==null){is(h);continue}}w!==null?(w.return=m,E=w):is(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{o=h.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Us("display",a))}catch(k){G(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){G(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),Ae(e),r&4&&os(e);break;case 21:break;default:Re(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mc(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qn(o,""),r.flags&=-33);var l=rs(e);Jl(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=rs(e);Zl(e,s,a);break;default:throw Error(b(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K0(e,t,n){E=e,vc(e)}function vc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var o=E,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Lr;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ue;s=Lr;var c=ue;if(Lr=a,(ue=u)&&!c)for(E=o;E!==null;)a=E,u=a.child,a.tag===22&&a.memoizedState!==null?as(o):u!==null?(u.return=a,E=u):as(o);for(;l!==null;)E=l,vc(l),l=l.sibling;E=o,Lr=s,ue=c}ls(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,E=l):ls(e)}}function ls(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ha(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ha(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Xn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ue||t.flags&512&&Xl(t)}catch(m){G(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function is(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function as(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){G(t,o,u)}}var l=t.return;try{Xl(t)}catch(u){G(t,l,u)}break;case 5:var a=t.return;try{Xl(t)}catch(u){G(t,a,u)}}}catch(u){G(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var X0=Math.ceil,po=rt.ReactCurrentDispatcher,Wi=rt.ReactCurrentOwner,Le=rt.ReactCurrentBatchConfig,O=0,re=null,X=null,le=0,ke=0,tn=kt(0),ee=0,sr=null,Dt=0,Eo=0,qi=0,Vn=null,ve=null,Qi=0,vn=1/0,Qe=null,mo=!1,ei=null,ht=null,Tr=!1,ct=null,go=0,Wn=0,ti=null,Vr=-1,Wr=0;function fe(){return O&6?K():Vr!==-1?Vr:Vr=K()}function vt(e){return e.mode&1?O&2&&le!==0?le&-le:R0.transition!==null?(Wr===0&&(Wr=tu()),Wr):(e=D,e!==0||(e=window.event,e=e===void 0?16:su(e.type)),e):1}function De(e,t,n,r){if(50<Wn)throw Wn=0,ti=null,Error(b(185));dr(e,n,r),(!(O&2)||e!==re)&&(e===re&&(!(O&2)&&(Eo|=n),ee===4&&st(e,le)),we(e,r),n===1&&O===0&&!(t.mode&1)&&(vn=K()+500,Co&&jt()))}function we(e,t){var n=e.callbackNode;Rd(e,t);var r=Xr(e,e===re?le:0);if(r===0)n!==null&&ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ha(n),t===1)e.tag===0?$0(ss.bind(null,e)):zu(ss.bind(null,e)),P0(function(){!(O&6)&&jt()}),n=null;else{switch(nu(r)){case 1:n=yi;break;case 4:n=Js;break;case 16:n=Kr;break;case 536870912:n=eu;break;default:n=Kr}n=Nc(n,xc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xc(e,t){if(Vr=-1,Wr=0,O&6)throw Error(b(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Xr(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ho(e,r);else{t=r;var o=O;O|=2;var l=bc();(re!==e||le!==t)&&(Qe=null,vn=K()+500,Rt(e,t));do try{ef();break}catch(s){yc(e,s)}while(!0);Ti(),po.current=l,O=o,X!==null?t=0:(re=null,le=0,t=ee)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=ni(e,o))),t===1)throw n=sr,Rt(e,0),st(e,r),we(e,K()),n;if(t===6)st(e,r);else{if(o=e.current.alternate,!(r&30)&&!Z0(o)&&(t=ho(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=ni(e,l))),t===1))throw n=sr,Rt(e,0),st(e,r),we(e,K()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Pt(e,ve,Qe);break;case 3:if(st(e,r),(r&130023424)===r&&(t=Qi+500-K(),10<t)){if(Xr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Il(Pt.bind(null,e,ve,Qe),t);break}Pt(e,ve,Qe);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Fe(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*X0(r/1960))-r,10<r){e.timeoutHandle=Il(Pt.bind(null,e,ve,Qe),r);break}Pt(e,ve,Qe);break;case 5:Pt(e,ve,Qe);break;default:throw Error(b(329))}}}return we(e,K()),e.callbackNode===n?xc.bind(null,e):null}function ni(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=ho(e,t),e!==2&&(t=ve,ve=n,t!==null&&ri(t)),e}function ri(e){ve===null?ve=e:ve.push.apply(ve,e)}function Z0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Me(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~qi,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function ss(e){if(O&6)throw Error(b(327));sn();var t=Xr(e,0);if(!(t&1))return we(e,K()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ni(e,r))}if(n===1)throw n=sr,Rt(e,0),st(e,t),we(e,K()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,ve,Qe),we(e,K()),null}function Gi(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(vn=K()+500,Co&&jt())}}function Mt(e){ct!==null&&ct.tag===0&&!(O&6)&&sn();var t=O;O|=1;var n=Le.transition,r=D;try{if(Le.transition=null,D=1,e)return e()}finally{D=r,Le.transition=n,O=t,!(O&6)&&jt()}}function Yi(){ke=tn.current,U(tn)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,E0(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Pi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:gn(),U(ye),U(ce),Fi();break;case 5:Oi(r);break;case 4:gn();break;case 13:U(W);break;case 19:U(W);break;case 10:$i(r.type._context);break;case 22:case 23:Yi()}n=n.return}if(re=e,X=e=xt(e.current,null),le=ke=t,ee=0,sr=null,qi=Eo=Dt=0,ve=Vn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}Tt=null}return e}function yc(e,t){do{var n=X;try{if(Ti(),Ar.current=fo,co){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if(Ft=0,ne=Z=q=null,Un=!1,lr=0,Wi.current=null,n===null||n.return===null){ee=1,sr=t,X=null;break}e:{var l=e,a=n.return,s=n,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Ya(a);if(w!==null){w.flags&=-257,Ka(w,a,s,l,t),w.mode&1&&Ga(l,c,t),t=w,u=c;var x=t.updateQueue;if(x===null){var k=new Set;k.add(u),t.updateQueue=k}else x.add(u);break e}else{if(!(t&1)){Ga(l,c,t),Ki();break e}u=Error(b(426))}}else if(H&&s.mode&1){var F=Ya(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ka(F,a,s,l,t),_i(hn(u,s));break e}}l=u=hn(u,s),ee!==4&&(ee=2),Vn===null?Vn=[l]:Vn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=nc(l,u,t);Ua(l,f);break e;case 1:s=u;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ht===null||!ht.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=rc(l,s,t);Ua(l,y);break e}}l=l.return}while(l!==null)}kc(n)}catch(v){t=v,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function bc(){var e=po.current;return po.current=fo,e===null?fo:e}function Ki(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Dt&268435455)&&!(Eo&268435455)||st(re,le)}function ho(e,t){var n=O;O|=2;var r=bc();(re!==e||le!==t)&&(Qe=null,Rt(e,t));do try{J0();break}catch(o){yc(e,o)}while(!0);if(Ti(),O=n,po.current=r,X!==null)throw Error(b(261));return re=null,le=0,ee}function J0(){for(;X!==null;)wc(X)}function ef(){for(;X!==null&&!Nd();)wc(X)}function wc(e){var t=Cc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?kc(e):X=t,Wi.current=null}function kc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Q0(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}else if(n=q0(n,t,ke),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ee===0&&(ee=5)}function Pt(e,t,n){var r=D,o=Le.transition;try{Le.transition=null,D=1,tf(e,t,n,r)}finally{Le.transition=o,D=r}return null}function tf(e,t,n,r){do sn();while(ct!==null);if(O&6)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Bd(e,l),e===re&&(X=re=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,Nc(Kr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Le.transition,Le.transition=null;var a=D;D=1;var s=O;O|=4,Wi.current=null,Y0(e,n),hc(n,e),w0(Rl),Zr=!!$l,Rl=$l=null,e.current=n,K0(n),Sd(),O=s,D=a,Le.transition=l}else e.current=n;if(Tr&&(Tr=!1,ct=e,go=o),l=e.pendingLanes,l===0&&(ht=null),Pd(n.stateNode),we(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(mo)throw mo=!1,e=ei,ei=null,e;return go&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===ti?Wn++:(Wn=0,ti=e):Wn=0,jt(),null}function sn(){if(ct!==null){var e=nu(go),t=Le.transition,n=D;try{if(Le.transition=null,D=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,go=0,O&6)throw Error(b(331));var o=O;for(O|=4,E=e.current;E!==null;){var l=E,a=l.child;if(E.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(E=c;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:Hn(8,g,l)}var h=g.child;if(h!==null)h.return=g,E=h;else for(;E!==null;){g=E;var m=g.sibling,w=g.return;if(pc(g),g===c){E=null;break}if(m!==null){m.return=w,E=m;break}E=w}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}E=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,E=a;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var d=e.current;for(E=d;E!==null;){a=E;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,E=p;else e:for(a=d;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(v){G(s,s.return,v)}if(s===a){E=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,E=y;break e}E=s.return}}if(O=o,jt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{D=n,Le.transition=t}}return!1}function us(e,t,n){t=hn(n,t),t=nc(e,t,1),e=gt(e,t,1),t=fe(),e!==null&&(dr(e,1,t),we(e,t))}function G(e,t,n){if(e.tag===3)us(e,e,n);else for(;t!==null;){if(t.tag===3){us(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=hn(n,e),e=rc(t,e,1),t=gt(t,e,1),e=fe(),t!==null&&(dr(t,1,e),we(t,e));break}}t=t.return}}function nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>K()-Qi?Rt(e,0):qi|=n),we(e,t)}function jc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=fe();e=tt(e,t),e!==null&&(dr(e,t,n),we(e,n))}function rf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jc(e,n)}function of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),jc(e,n)}var Cc;Cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,W0(e,t,n);xe=!!(e.flags&131072)}else xe=!1,H&&t.flags&1048576&&Eu(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var o=fn(t,ce.current);an(t,n),o=Mi(null,t,r,e,o,n);var l=Ai();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(l=!0,ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bi(t),o.updater=So,t.stateNode=o,o._reactInternals=t,Hl(t,r,e,n),t=ql(null,t,r,!0,l,n)):(t.tag=0,H&&l&&Ei(t),de(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=af(r),e=Be(r,e),o){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Xa(null,t,r,e,n);break e;case 14:t=Za(null,t,r,Be(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Wl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Ja(e,t,r,o,n);case 3:e:{if(ac(t),e===null)throw Error(b(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ru(e,t),so(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=hn(Error(b(423)),t),t=es(e,t,r,n,o);break e}else if(r!==o){o=hn(Error(b(424)),t),t=es(e,t,r,n,o);break e}else for(je=mt(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,Oe=null,n=Tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===o){t=nt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return Bu(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,Bl(r,o)?a=null:l!==null&&Bl(r,l)&&(t.flags|=32),ic(e,t),de(e,t,a,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return sc(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Xa(e,t,r,o,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,M(io,r._currentValue),r._currentValue=a,l!==null)if(Me(l.value,a)){if(l.children===o.children&&!ye.current){t=nt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ze(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Al(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(b(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Al(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}de(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,an(t,n),o=Te(o),r=r(o),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),Za(e,t,r,o,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Hr(e,t),t.tag=1,be(r)?(e=!0,ro(t)):e=!1,an(t,n),tc(t,r,o),Hl(t,r,o,n),ql(null,t,r,!0,e,n);case 19:return uc(e,t,n);case 22:return lc(e,t,n)}throw Error(b(156,t.tag))};function Nc(e,t){return Zs(e,t)}function lf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new lf(e,t,n,r)}function Xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function af(e){if(typeof e=="function")return Xi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hi)return 11;if(e===vi)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qr(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")Xi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return Bt(n.children,o,l,t);case gi:a=8,o|=8;break;case pl:return e=_e(12,n,t,o|2),e.elementType=pl,e.lanes=l,e;case ml:return e=_e(13,n,t,o),e.elementType=ml,e.lanes=l,e;case gl:return e=_e(19,n,t,o),e.elementType=gl,e.lanes=l,e;case Bs:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $s:a=10;break e;case Rs:a=9;break e;case hi:a=11;break e;case vi:a=14;break e;case lt:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=_e(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Bt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Bs,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sf(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zi(e,t,n,r,o,l,a,s,u){return e=new sf(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bi(l),e}function uf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return bt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(be(n))return Su(e,n,t)}return t}function zc(e,t,n,r,o,l,a,s,u){return e=Zi(n,r,!0,e,o,l,a,s,u),e.context=Sc(null),n=e.current,r=fe(),o=vt(n),l=Ze(r,o),l.callback=t??null,gt(n,l,o),e.current.lanes=o,dr(e,o,r),we(e,r),e}function _o(e,t,n,r){var o=t.current,l=fe(),a=vt(o);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(o,t,a),e!==null&&(De(e,o,a,l),Mr(e,o,a)),a}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ji(e,t){cs(e,t),(e=e.alternate)&&cs(e,t)}function cf(){return null}var Ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}Lo.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));_o(e,t,null,null)};Lo.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){_o(null,e,null,null)}),t[et]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=lu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&au(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function df(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=vo(a);l.call(c)}}var a=zc(t,r,e,0,null,!1,!1,"",ds);return e._reactRootContainer=a,e[et]=a.current,er(e.nodeType===8?e.parentNode:e),Mt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=vo(u);s.call(c)}}var u=Zi(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=u,e[et]=u.current,er(e.nodeType===8?e.parentNode:e),Mt(function(){_o(t,u,n,r)}),u}function $o(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var s=o;o=function(){var u=vo(a);s.call(u)}}_o(t,a,e,o)}else a=df(n,t,e,o,r);return vo(a)}ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(bi(t,n|1),we(t,K()),!(O&6)&&(vn=K()+500,jt()))}break;case 13:Mt(function(){var r=tt(e,1);if(r!==null){var o=fe();De(r,e,1,o)}}),Ji(e,1)}};wi=function(e){if(e.tag===13){var t=tt(e,134217728);if(t!==null){var n=fe();De(t,e,134217728,n)}Ji(e,134217728)}};ou=function(e){if(e.tag===13){var t=vt(e),n=tt(e,t);if(n!==null){var r=fe();De(n,e,t,r)}Ji(e,t)}};lu=function(){return D};iu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Nl=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=jo(r);if(!o)throw Error(b(90));Os(r),xl(r,o)}}}break;case"textarea":Ds(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};qs=Gi;Qs=Mt;var ff={usingClientEntryPoint:!1,Events:[pr,Yt,jo,Vs,Ws,Gi]},Pn={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pf={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ks(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||cf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$r.isDisabled&&$r.supportsFiber)try{yo=$r.inject(pf),We=$r}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(b(200));return uf(e,t,null,n)};Se.createRoot=function(e,t){if(!ta(e))throw Error(b(299));var n=!1,r="",o=Ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zi(e,1,!1,null,null,n,!1,r,o),e[et]=t.current,er(e.nodeType===8?e.parentNode:e),new ea(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Ks(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Mt(e)};Se.hydrate=function(e,t,n){if(!To(t))throw Error(b(200));return $o(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ta(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=Ec;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zc(t,null,e,1,n??null,o,!1,l,a),e[et]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Lo(t)};Se.render=function(e,t,n){if(!To(t))throw Error(b(200));return $o(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!To(e))throw Error(b(40));return e._reactRootContainer?(Mt(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1};Se.unstable_batchedUpdates=Gi;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!To(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return $o(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Ps.exports=Se;var mf=Ps.exports,_c,fs=mf;_c=fs.createRoot,fs.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),I=(e,t)=>{const n=J.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:s="",children:u,...c},g)=>J.createElement("svg",{ref:g,...gf,width:o,height:o,stroke:r,strokeWidth:a?Number(l)*24/Number(o):l,className:["lucide",`lucide-${hf(e)}`,s].join(" "),...c},[...t.map(([h,m])=>J.createElement(h,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=I("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=I("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=I("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=I("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=I("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=I("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=I("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=I("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=I("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=I("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=I("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=I("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=I("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=I("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=I("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=I("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=I("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=I("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=I("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=I("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=I("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=I("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=I("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=I("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=I("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=I("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=I("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=I("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=I("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=I("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=I("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=I("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=I("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=I("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=I("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=I("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);function he({label:e,children:t,error:n}){return i.jsxs("div",{className:"space-y-2",children:[i.jsx("label",{className:"block text-sm font-semibold text-gray-700",children:e}),t,n&&i.jsx("p",{className:"text-sm text-red-600",children:n})]})}function _f({images:e,onChange:t}){const n=()=>{e.length<5&&t([...e,""])},r=(l,a)=>{const s=[...e];s[l]=a,t(s)},o=l=>{const a=e.filter((s,u)=>u!==l);t(a)};return i.jsx(he,{label:"Galerie d'images (URLs)",children:i.jsxs("div",{className:"space-y-3",children:[e.map((l,a)=>i.jsxs("div",{className:"flex gap-2",children:[i.jsx("input",{type:"url",value:l,onChange:s=>r(a,s.target.value),placeholder:"https://exemple.com/image.jpg",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"}),i.jsx("button",{type:"button",onClick:()=>o(a),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]},a)),e.length<5&&i.jsxs("button",{type:"button",onClick:n,className:"flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter une image (",e.length,"/5)"]})]})})}function Lf({menuCards:e,onChange:t}){const n=()=>{t([...e,{type:"image",url:"",title:""}])},r=(l,a,s)=>{const u=[...e];u[l]={...u[l],[a]:s},t(u)},o=l=>{const a=e.filter((s,u)=>u!==l);t(a)};return i.jsx(he,{label:"Carte des menus (optionnel)",children:i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-sm text-gray-600",children:"Ajoutez vos cartes de menus (PDF ou images) pour permettre à vos clients de consulter vos plats et boissons."}),e.map((l,a)=>i.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg border",children:[i.jsxs("div",{className:"flex gap-3 mb-3",children:[i.jsxs("div",{className:"flex-1",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Titre de la carte"}),i.jsx("input",{type:"text",value:l.title,onChange:s=>r(a,"title",s.target.value),placeholder:"Carte des plats, Carte des vins...",className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),i.jsxs("div",{className:"w-32",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Type"}),i.jsxs("select",{value:l.type,onChange:s=>r(a,"type",s.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",children:[i.jsx("option",{value:"image",children:"Image"}),i.jsx("option",{value:"pdf",children:"PDF"})]})]}),i.jsx("button",{type:"button",onClick:()=>o(a),className:"mt-6 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"URL du fichier"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("div",{className:"p-2 bg-white rounded border",children:l.type==="pdf"?i.jsx(Tc,{className:"text-red-600",size:16}):i.jsx($c,{className:"text-blue-600",size:16})}),i.jsx("input",{type:"url",value:l.url,onChange:s=>r(a,"url",s.target.value),placeholder:l.type==="pdf"?"https://exemple.com/menu.pdf":"https://exemple.com/menu.jpg",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]})]},a)),i.jsxs("button",{type:"button",onClick:n,className:"flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter une carte (",e.length,"/5)"]}),e.length>0&&i.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded-lg",children:i.jsxs("p",{className:"text-sm text-blue-700",children:["💡 ",i.jsx("strong",{children:"Conseil :"}),` Les cartes apparaîtront sous forme d'un lien discret "Accéder à la carte" qui ouvrira une galerie pour vos clients.`]})})]})})}const _n=[{name:"Facebook",icon:Lc,baseUrl:"https://facebook.com/",placeholder:"nom-du-restaurant",color:"bg-blue-600 hover:bg-blue-700"},{name:"Instagram",icon:Rc,baseUrl:"https://instagram.com/",placeholder:"nom_du_restaurant",color:"bg-pink-600 hover:bg-pink-700"},{name:"X (Twitter)",icon:Fc,baseUrl:"https://x.com/",placeholder:"nom_restaurant",color:"bg-black hover:bg-gray-800"},{name:"YouTube",icon:Dc,baseUrl:"https://youtube.com/@",placeholder:"nomdurestaurant",color:"bg-red-600 hover:bg-red-700"},{name:"LinkedIn",icon:Bc,baseUrl:"https://linkedin.com/company/",placeholder:"nom-du-restaurant",color:"bg-blue-700 hover:bg-blue-800"},{name:"Site Web",icon:Ro,baseUrl:"https://",placeholder:"www.monrestaurant.com",color:"bg-green-600 hover:bg-green-700"}];function Tf({socials:e,onChange:t}){const n=l=>{const a=e.findIndex(s=>s.nom===l);if(a>=0){const s=e.filter((u,c)=>c!==a);t(s)}else{const s=_n.find(u=>u.name===l);s&&t([...e,{nom:l,url:s.baseUrl}])}},r=(l,a)=>{const s=_n.find(c=>c.name===l);if(!s)return;const u=e.map(c=>c.nom===l?{...c,url:s.baseUrl+a}:c);t(u)},o=l=>{const a=e.find(u=>u.nom===l),s=_n.find(u=>u.name===l);return!a||!s?"":a.url.replace(s.baseUrl,"")};return i.jsxs("div",{className:"space-y-4",children:[i.jsx("label",{className:"block text-sm font-semibold text-gray-700",children:"Réseaux sociaux"}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:_n.map(l=>{const a=l.icon,s=e.some(u=>u.nom===l.name);return i.jsxs("button",{type:"button",onClick:()=>n(l.name),className:`flex items-center gap-2 p-3 rounded-lg transition-all ${s?`${l.color} text-white shadow-lg`:"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:[i.jsx(a,{size:20}),i.jsx("span",{className:"text-sm font-medium",children:l.name})]},l.name)})}),e.length>0&&i.jsxs("div",{className:"space-y-3 mt-6",children:[i.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Configurez vos réseaux sociaux :"}),e.map(l=>{const a=_n.find(u=>u.name===l.nom);if(!a)return null;const s=a.icon;return i.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[i.jsx("div",{className:`p-2 rounded ${a.color.split(" ")[0]} text-white`,children:i.jsx(s,{size:16})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:l.nom}),i.jsxs("div",{className:"flex items-center",children:[i.jsx("span",{className:"text-sm text-gray-500 mr-1",children:a.baseUrl}),i.jsx("input",{type:"text",value:o(l.nom),onChange:u=>r(l.nom,u.target.value),placeholder:a.placeholder,className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]})]})]},l.nom)})]})]})}function Mc({data:e,onImport:t}){const n=J.useRef(null),r=()=>{const s=JSON.stringify(e,null,2),u=new Blob([s],{type:"application/json"}),c=URL.createObjectURL(u),g=document.createElement("a");g.href=c,g.download=`${e.nom||"restaurant"}-data.json`,g.click(),URL.revokeObjectURL(c)},o=s=>{var g;const u=(g=s.target.files)==null?void 0:g[0];if(!u)return;const c=new FileReader;c.onload=h=>{var m;try{const w=JSON.parse((m=h.target)==null?void 0:m.result);t(w),alert("Données importées avec succès !")}catch{alert("Erreur lors de l'importation du fichier. Vérifiez que le fichier JSON est valide.")}},c.readAsText(u)},l=()=>{var s;(s=n.current)==null||s.click()},a=()=>{window.open("https://pairdrop.net/","_blank")};return i.jsxs("div",{className:"flex flex-wrap gap-3",children:[i.jsxs("button",{type:"button",onClick:r,className:"flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium",children:[i.jsx(na,{size:16}),"Exporter JSON"]}),i.jsxs("button",{type:"button",onClick:l,className:"flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium",children:[i.jsx(ra,{size:16}),"Importer JSON"]}),i.jsxs("button",{type:"button",onClick:a,className:"flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium",title:"Partager des fichiers facilement entre appareils",children:[i.jsx(Nf,{size:16}),"PairDrop"]}),i.jsx("input",{ref:n,type:"file",accept:".json",onChange:o,className:"hidden"})]})}function $f({isOpen:e,onClose:t,htmlContent:n}){return e?i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:i.jsxs("div",{className:"bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between p-4 border-b",children:[i.jsx("h3",{className:"text-lg font-semibold",children:"Aperçu de votre landing page"}),i.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]}),i.jsx("div",{className:"flex-1 overflow-hidden",children:i.jsx("iframe",{srcDoc:n,className:"w-full h-full border-0",title:"Aperçu de la landing page"})})]})}):null}function Rf({isOpen:e,onClose:t}){if(!e)return null;const n=()=>{window.open("https://github.com/join","_blank")},r=()=>{window.open("https://github.com/new","_blank")};return i.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:i.jsxs("div",{className:"bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2 bg-gray-900 rounded-lg",children:i.jsx(un,{className:"text-white",size:24})}),i.jsx("h3",{className:"text-xl font-semibold",children:"Guide de déploiement GitHub Pages"})]}),i.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]}),i.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:i.jsxs("div",{className:"prose max-w-none",children:[i.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:[i.jsx("p",{className:"text-blue-800 font-medium mb-2",children:"🚀 Déployez votre landing page gratuitement sur GitHub Pages en quelques étapes simples !"}),i.jsx("p",{className:"text-blue-700 text-sm",children:"GitHub Pages vous permet d'héberger votre site web gratuitement avec une URL personnalisée."})]}),i.jsxs("div",{className:"mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-900",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold",children:"1"}),i.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Créer un compte GitHub"})]}),i.jsx("p",{className:"text-gray-700 mb-4",children:"Si vous n'avez pas encore de compte GitHub, créez-en un gratuitement :"}),i.jsxs("button",{onClick:n,className:"inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium",children:[i.jsx(un,{size:18}),"Créer un compte GitHub",i.jsx(xn,{size:16})]}),i.jsx("div",{className:"mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded",children:i.jsxs("p",{className:"text-yellow-800 text-sm",children:["💡 ",i.jsx("strong",{children:"Conseil :"})," Choisissez un nom d'utilisateur professionnel, il apparaîtra dans l'URL de votre site."]})})]}),i.jsxs("div",{className:"mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-600",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold",children:"2"}),i.jsx("h3",{className:"text-lg font-semibold text-green-800",children:"Créer un repository public"})]}),i.jsx("p",{className:"text-gray-700 mb-4",children:"Créez un nouveau repository pour héberger votre landing page :"}),i.jsxs("button",{onClick:r,className:"inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium mb-4",children:[i.jsx(un,{size:18}),"Créer un nouveau repository",i.jsx(xn,{size:16})]}),i.jsxs("div",{className:"bg-white p-4 rounded border",children:[i.jsx("h4",{className:"font-semibold mb-2",children:"Paramètres recommandés :"}),i.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Repository name :"})," nom-de-votre-restaurant (ex: restaurant-chez-mario)"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Description :"})," Site web de [Nom du restaurant]"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Visibilité :"})," Public (obligatoire pour GitHub Pages gratuit)"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Initialize :"}),' Cochez "Add a README file"']})]})]})]}),i.jsxs("div",{className:"mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold",children:"3"}),i.jsx("h3",{className:"text-lg font-semibold text-blue-800",children:"Uploader le fichier index.html"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-gray-700",children:"Une fois votre repository créé, uploadez votre fichier index.html :"}),i.jsxs("div",{className:"bg-white p-4 rounded border",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(ra,{className:"text-blue-600",size:18}),i.jsx("h4",{className:"font-semibold",children:"Méthode simple (interface web) :"})]}),i.jsxs("ol",{className:"space-y-2 text-sm text-gray-700 ml-4",children:[i.jsx("li",{children:'1. Cliquez sur "Add file" → "Upload files" dans votre repository'}),i.jsxs("li",{children:["2. Glissez-déposez votre fichier ",i.jsx("code",{className:"bg-gray-100 px-1 rounded",children:"index.html"})]}),i.jsx("li",{children:'3. Ajoutez un message de commit : "Ajout de la landing page"'}),i.jsx("li",{children:'4. Cliquez sur "Commit changes"'})]})]}),i.jsx("div",{className:"p-3 bg-orange-50 border border-orange-200 rounded",children:i.jsxs("p",{className:"text-orange-800 text-sm",children:["⚠️ ",i.jsx("strong",{children:"Important :"})," Le fichier doit s'appeler exactement ",i.jsx("code",{className:"bg-orange-100 px-1 rounded",children:"index.html"})," pour fonctionner avec GitHub Pages."]})})]})]}),i.jsxs("div",{className:"mb-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold",children:"4"}),i.jsx("h3",{className:"text-lg font-semibold text-purple-800",children:"Activer GitHub Pages"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-gray-700",children:"Activez GitHub Pages pour rendre votre site accessible en ligne :"}),i.jsxs("div",{className:"bg-white p-4 rounded border",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Cf,{className:"text-purple-600",size:18}),i.jsx("h4",{className:"font-semibold",children:"Configuration GitHub Pages :"})]}),i.jsxs("ol",{className:"space-y-2 text-sm text-gray-700 ml-4",children:[i.jsxs("li",{children:["1. Dans votre repository, cliquez sur l'onglet ",i.jsx("strong",{children:'"Settings"'})]}),i.jsxs("li",{children:["2. Faites défiler jusqu'à la section ",i.jsx("strong",{children:'"Pages"'})," dans le menu de gauche"]}),i.jsxs("li",{children:['3. Sous "Source", sélectionnez ',i.jsx("strong",{children:'"Deploy from a branch"'})]}),i.jsxs("li",{children:["4. Choisissez la branche ",i.jsx("strong",{children:'"main"'})," et le dossier ",i.jsx("strong",{children:'"/ (root)"'})]}),i.jsxs("li",{children:["5. Cliquez sur ",i.jsx("strong",{children:'"Save"'})]})]})]}),i.jsx("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:i.jsxs("p",{className:"text-green-800 text-sm",children:["✅ ",i.jsx("strong",{children:"Succès :"})," GitHub va maintenant construire et déployer votre site. Cela peut prendre quelques minutes."]})})]})]}),i.jsxs("div",{className:"mb-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-600",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold",children:"5"}),i.jsx("h3",{className:"text-lg font-semibold text-indigo-800",children:"Accéder à votre site"})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsx("p",{className:"text-gray-700",children:"Une fois le déploiement terminé, votre site sera accessible à l'adresse :"}),i.jsxs("div",{className:"bg-white p-4 rounded border",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[i.jsx(Ro,{className:"text-indigo-600",size:18}),i.jsx("h4",{className:"font-semibold",children:"URL de votre site :"})]}),i.jsxs("div",{className:"bg-gray-100 p-3 rounded font-mono text-sm",children:["https://",i.jsx("span",{className:"text-indigo-600",children:"[votre-nom-utilisateur]"}),".github.io/",i.jsx("span",{className:"text-green-600",children:"[nom-du-repository]"})]}),i.jsx("p",{className:"text-xs text-gray-600 mt-2",children:"Exemple : https://johndoe.github.io/restaurant-chez-mario"})]}),i.jsxs("div",{className:"bg-white p-4 rounded border",children:[i.jsx("h4",{className:"font-semibold mb-2",children:"Comment trouver l'URL :"}),i.jsxs("ul",{className:"space-y-1 text-sm text-gray-700",children:[i.jsx("li",{children:`• Retournez dans l'onglet "Settings" → "Pages"`}),i.jsx("li",{children:`• L'URL apparaîtra en haut avec un message "Your site is published at..."`}),i.jsx("li",{children:`• Vous pouvez aussi la voir dans l'onglet "Actions" une fois le déploiement terminé`})]})]})]})]}),i.jsxs("div",{className:"p-6 bg-yellow-50 rounded-lg border border-yellow-200",children:[i.jsx("h3",{className:"text-lg font-semibold text-yellow-800 mb-4",children:"💡 Conseils supplémentaires"}),i.jsxs("ul",{className:"space-y-2 text-sm text-yellow-800",children:[i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Mise à jour :"})," Pour modifier votre site, remplacez simplement le fichier index.html dans votre repository"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Délai :"})," Les changements peuvent prendre 5-10 minutes pour apparaître en ligne"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Domaine personnalisé :"})," Vous pouvez configurer votre propre nom de domaine dans les paramètres Pages"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"HTTPS :"})," GitHub Pages active automatiquement HTTPS pour sécuriser votre site"]}),i.jsxs("li",{children:["• ",i.jsx("strong",{children:"Statistiques :"})," Utilisez Google Analytics pour suivre les visiteurs de votre site"]})]})]}),i.jsx("div",{className:"mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center",children:i.jsx("p",{className:"text-green-800 font-medium",children:"🎉 Félicitations ! Votre restaurant a maintenant sa propre présence en ligne professionnelle !"})})]})})]})})}const Bf=[{id:"simple",name:"Simple",description:"Design classique et élégant",icon:ur,colors:["#8b4513","#daa520","#fef9f3"],preview:"Couleurs chaudes, typographie classique"},{id:"zen",name:"Zen",description:"Minimaliste japonais moderne",icon:kf,colors:["#3A5A40","#8a9a8d","#f9f9f6"],preview:"Épuré, marges généreuses, sans fioritures"},{id:"street-food",name:"Street Food",description:"Dynamique et coloré",icon:Ef,colors:["#ff5722","#ffc107","#fff3e0"],preview:"Couleurs vives, style urbain"}];function If({selectedTemplate:e,onTemplateChange:t,darkMode:n,onDarkModeChange:r}){return i.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("h3",{className:"text-xl font-bold text-gray-800 flex items-center gap-2",children:[i.jsx(ur,{className:"text-indigo-600",size:24}),"Choisissez votre template"]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(Oc,{className:"text-yellow-500",size:20}),i.jsx("button",{onClick:()=>r(!n),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${n?"bg-indigo-600":"bg-gray-200"}`,children:i.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${n?"translate-x-6":"translate-x-1"}`})}),i.jsx(li,{className:"text-indigo-600",size:20}),i.jsx("span",{className:"text-sm font-medium text-gray-700",children:n?"Sombre":"Normal"})]})]}),i.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:Bf.map(o=>{const l=o.icon,a=e===o.id;return i.jsxs("button",{onClick:()=>t(o.id),className:`p-4 rounded-xl border-2 transition-all duration-300 text-left ${a?"border-indigo-500 bg-indigo-50 shadow-lg transform scale-105":"border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md"}`,children:[i.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[i.jsx("div",{className:`p-2 rounded-lg ${a?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600"}`,children:i.jsx(l,{size:20})}),i.jsxs("div",{children:[i.jsx("h4",{className:"font-semibold text-gray-800",children:o.name}),i.jsx("p",{className:"text-sm text-gray-600",children:o.description})]})]}),i.jsx("div",{className:"flex gap-2 mb-2",children:o.colors.map((s,u)=>i.jsx("div",{className:"w-6 h-6 rounded-full border-2 border-white shadow-sm",style:{backgroundColor:s}},u))}),i.jsx("p",{className:"text-xs text-gray-500",children:o.preview}),a&&i.jsx("div",{className:"mt-2 text-xs text-indigo-600 font-medium",children:"✓ Template sélectionné"})]},o.id)})}),n&&i.jsx("div",{className:"mt-4 p-3 bg-indigo-100 rounded-lg border border-indigo-200",children:i.jsxs("p",{className:"text-sm text-indigo-700 flex items-center gap-2",children:[i.jsx(li,{size:16}),i.jsx("strong",{children:"Mode sombre activé :"})," Votre landing page utilisera des couleurs sombres et élégantes."]})})]})}const ms=[{id:"rouge",name:"Rouge",preview:"#dc2626",description:"Passion et énergie"},{id:"rose",name:"Rose",preview:"#e11d48",description:"Douceur et romantisme"},{id:"orange",name:"Orange",preview:"#ea580c",description:"Chaleur et convivialité"},{id:"jaune",name:"Jaune",preview:"#d97706",description:"Joie et luminosité"},{id:"vert",name:"Vert",preview:"#16a34a",description:"Nature et fraîcheur"},{id:"bleu",name:"Bleu",preview:"#2563eb",description:"Confiance et sérénité"},{id:"violet",name:"Violet",preview:"#9333ea",description:"Créativité et mystère"},{id:"italie",name:"Italie",preview:"linear-gradient(45deg, #dc2626, #16a34a, #fbbf24)",description:"Rouge, vert, jaune"},{id:"france",name:"France",preview:"linear-gradient(45deg, #1e40af, #f8fafc, #dc2626)",description:"Bleu, blanc, rouge"},{id:"mexique",name:"Mexique",preview:"linear-gradient(45deg, #dc2626, #fbbf24)",description:"Rouge et jaune vifs"},{id:"mediterranee",name:"Méditerranée",preview:"linear-gradient(45deg, #0ea5e9, #f8fafc)",description:"Bleu mer et blanc"},{id:"chaude",name:"Chaude",preview:"linear-gradient(45deg, #dc2626, #ea580c, #d97706)",description:"Rouge, orange, jaune"},{id:"froide",name:"Froide",preview:"linear-gradient(45deg, #2563eb, #16a34a, #9333ea)",description:"Bleu, vert, violet"}],gs=[{id:"moderne",name:"Moderne",preview:"Inter, sans-serif",description:"Clean et contemporain"},{id:"elegant",name:"Élégant",preview:"Playfair Display, serif",description:"Raffiné et sophistiqué"},{id:"luxueux",name:"Luxueux",preview:"Cormorant Garamond, serif",description:"Haut de gamme"},{id:"classique",name:"Classique",preview:"Times New Roman, serif",description:"Traditionnel et intemporel"},{id:"manuscrite",name:"Manuscrite",preview:"Dancing Script, cursive",description:"Personnel et chaleureux"},{id:"flottante",name:"Flottante",preview:"Quicksand, sans-serif",description:"Léger et aérien"}],hs=[{id:"subtile",name:"Subtile",description:"Animations discrètes et élégantes"},{id:"dynamique",name:"Dynamique",description:"Mouvements énergiques et vivants"},{id:"flottante",name:"Flottante",description:"Effets de lévitation douce"},{id:"pulsante",name:"Pulsante",description:"Battements rythmés"},{id:"lumineuse",name:"Lumineuse",description:"Effets de brillance et éclat"},{id:"aucune",name:"Aucune",description:"Pas d'animation"}],vs=[{id:"chaleureuse",name:"Chaleureuse",description:"Conviviale et accueillante"},{id:"elegante",name:"Élégante",description:"Raffinée et sophistiquée"},{id:"familiale",name:"Familiale",description:"Décontractée et conviviale"},{id:"moderne",name:"Moderne",description:"Contemporaine et épurée"},{id:"rustique",name:"Rustique",description:"Authentique et traditionnelle"},{id:"luxueuse",name:"Luxueuse",description:"Haut de gamme et exclusive"},{id:"romantique",name:"Romantique",description:"Intime et séduisante"},{id:"festive",name:"Festive",description:"Joyeuse et animée"}],Of=[{id:"japonais-zen",name:"Style japonais zen",description:"Vert et beige, typographie élégante, animations subtiles",options:{color:"vert",typography:"elegant",animation:"subtile",ambiance:"moderne",darkMode:!1}},{id:"food-truck-mexicain",name:"Food truck mexicain",description:"Couleurs vives mexicaines, typographie dynamique, animations énergiques",options:{color:"mexique",typography:"moderne",animation:"dynamique",ambiance:"festive",darkMode:!1}},{id:"restaurant-gastronomique",name:"Restaurant gastronomique",description:"Élégant et sombre, typographie luxueuse, animations subtiles",options:{color:"bleu",typography:"luxueux",animation:"subtile",ambiance:"luxueuse",darkMode:!0}},{id:"bistrot-francais",name:"Bistrot français",description:"Couleurs France, typographie classique, ambiance chaleureuse",options:{color:"france",typography:"classique",animation:"subtile",ambiance:"chaleureuse",darkMode:!1}},{id:"pizzeria-italienne",name:"Pizzeria italienne",description:"Couleurs Italie, typographie manuscrite, ambiance familiale",options:{color:"italie",typography:"manuscrite",animation:"flottante",ambiance:"familiale",darkMode:!1}},{id:"restaurant-moderne",name:"Restaurant moderne",description:"Design épuré, typographie moderne, animations lumineuses",options:{color:"bleu",typography:"moderne",animation:"lumineuse",ambiance:"moderne",darkMode:!1}}];function Ff({options:e,onChange:t}){var o,l,a,s;const n=(u,c)=>{t({...e,[u]:c})},r=u=>{t(u)};return i.jsxs("div",{className:"space-y-8",children:[i.jsxs("div",{className:"p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200",children:[i.jsxs("h4",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[i.jsx(cn,{className:"text-indigo-600",size:20}),"Styles prêts à l'emploi"]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:Of.map(u=>i.jsxs("button",{onClick:()=>r(u.options),className:"p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 text-left group",children:[i.jsx("h5",{className:"font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors",children:u.name}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:u.description})]},u.id))})]}),i.jsx("div",{className:"p-6 bg-gray-50 rounded-2xl",children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2 bg-gray-600 rounded-lg",children:e.darkMode?i.jsx(li,{className:"text-white",size:20}):i.jsx(Oc,{className:"text-white",size:20})}),i.jsxs("div",{children:[i.jsx("h4",{className:"text-lg font-bold text-gray-800",children:"Mode d'affichage"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Clair ou sombre"})]})]}),i.jsx("button",{onClick:()=>n("darkMode",!e.darkMode),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${e.darkMode?"bg-indigo-600":"bg-gray-200"}`,children:i.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${e.darkMode?"translate-x-6":"translate-x-1"}`})})]})}),i.jsxs("div",{className:"p-6 bg-white rounded-2xl border-2 border-gray-200",children:[i.jsxs("h4",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[i.jsx(ur,{className:"text-blue-600",size:20}),"Couleurs"]}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3",children:ms.map(u=>i.jsxs("button",{onClick:()=>n("color",u.id),className:`p-3 rounded-lg border-2 transition-all duration-300 ${e.color===u.id?"border-blue-500 bg-blue-50 shadow-lg scale-105":"border-gray-200 hover:border-blue-300 hover:shadow-md"}`,children:[i.jsx("div",{className:"w-full h-8 rounded-md mb-2 border border-gray-200",style:{background:u.preview}}),i.jsx("h5",{className:"font-medium text-sm text-gray-800",children:u.name}),i.jsx("p",{className:"text-xs text-gray-600 mt-1",children:u.description})]},u.id))})]}),i.jsxs("div",{className:"p-6 bg-white rounded-2xl border-2 border-gray-200",children:[i.jsxs("h4",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[i.jsx(Sf,{className:"text-green-600",size:20}),"Typographie"]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3",children:gs.map(u=>i.jsxs("button",{onClick:()=>n("typography",u.id),className:`p-4 rounded-lg border-2 transition-all duration-300 text-left ${e.typography===u.id?"border-green-500 bg-green-50 shadow-lg":"border-gray-200 hover:border-green-300 hover:shadow-md"}`,children:[i.jsx("h5",{className:"font-medium text-gray-800",style:{fontFamily:u.preview},children:u.name}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:u.description}),i.jsx("p",{className:"text-xs text-gray-500 mt-1 font-mono",children:u.preview})]},u.id))})]}),i.jsxs("div",{className:"p-6 bg-white rounded-2xl border-2 border-gray-200",children:[i.jsxs("h4",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[i.jsx(cn,{className:"text-purple-600",size:20}),"Animations"]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-3",children:hs.map(u=>i.jsxs("button",{onClick:()=>n("animation",u.id),className:`p-4 rounded-lg border-2 transition-all duration-300 text-left ${e.animation===u.id?"border-purple-500 bg-purple-50 shadow-lg":"border-gray-200 hover:border-purple-300 hover:shadow-md"}`,children:[i.jsx("h5",{className:"font-medium text-gray-800",children:u.name}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:u.description})]},u.id))})]}),i.jsxs("div",{className:"p-6 bg-white rounded-2xl border-2 border-gray-200",children:[i.jsxs("h4",{className:"text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",children:[i.jsx(wf,{className:"text-red-600",size:20}),"Ambiance"]}),i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-3",children:vs.map(u=>i.jsxs("button",{onClick:()=>n("ambiance",u.id),className:`p-4 rounded-lg border-2 transition-all duration-300 text-left ${e.ambiance===u.id?"border-red-500 bg-red-50 shadow-lg":"border-gray-200 hover:border-red-300 hover:shadow-md"}`,children:[i.jsx("h5",{className:"font-medium text-gray-800",children:u.name}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:u.description})]},u.id))})]}),i.jsxs("div",{className:"p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200",children:[i.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"✨ Votre sélection"}),i.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",children:[i.jsxs("div",{children:[i.jsx("span",{className:"font-medium text-blue-700",children:"Couleur:"}),i.jsx("p",{className:"text-gray-700",children:((o=ms.find(u=>u.id===e.color))==null?void 0:o.name)||"Non sélectionnée"})]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium text-green-700",children:"Typographie:"}),i.jsx("p",{className:"text-gray-700",children:((l=gs.find(u=>u.id===e.typography))==null?void 0:l.name)||"Non sélectionnée"})]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium text-purple-700",children:"Animation:"}),i.jsx("p",{className:"text-gray-700",children:((a=hs.find(u=>u.id===e.animation))==null?void 0:a.name)||"Non sélectionnée"})]}),i.jsxs("div",{children:[i.jsx("span",{className:"font-medium text-red-700",children:"Ambiance:"}),i.jsx("p",{className:"text-gray-700",children:((s=vs.find(u=>u.id===e.ambiance))==null?void 0:s.name)||"Non sélectionnée"})]})]}),i.jsxs("div",{className:"mt-3 flex items-center gap-2",children:[i.jsx("span",{className:"font-medium text-gray-700",children:"Mode:"}),i.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${e.darkMode?"bg-gray-800 text-white":"bg-yellow-100 text-yellow-800"}`,children:e.darkMode?"🌙 Sombre":"☀️ Clair"})]})]})]})}function Ac({onUpload:e}){const[t,n]=J.useState(!1),[r,o]=J.useState(!1),[l,a]=J.useState(!1),[s,u]=J.useState(""),[c,g]=J.useState(null),h=()=>{setTimeout(()=>{g({login:"demo-user",name:"Utilisateur Démo",avatar_url:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"}),n(!0)},1500)},m=()=>{t&&(o(!0),setTimeout(()=>{`${c==null?void 0:c.login}`;const x=`https://${c==null?void 0:c.login}.github.io/restaurant-landing-page`;u(x),o(!1),a(!0),e(x)},3e3))},w=()=>{n(!1),g(null),a(!1),u("")};return t?i.jsxs("div",{className:"p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-2 border-green-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2 bg-green-600 rounded-lg",children:i.jsx(ps,{className:"text-white",size:24})}),i.jsxs("div",{children:[i.jsx("h3",{className:"text-xl font-bold text-gray-800",children:"Connecté à GitHub"}),i.jsx("p",{className:"text-sm text-gray-600",children:"Prêt pour le déploiement"})]})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("img",{src:c==null?void 0:c.avatar_url,alt:c==null?void 0:c.name,className:"w-10 h-10 rounded-full border-2 border-green-500"}),i.jsxs("div",{className:"text-right",children:[i.jsx("p",{className:"font-medium text-gray-800",children:c==null?void 0:c.name}),i.jsxs("p",{className:"text-sm text-gray-600",children:["@",c==null?void 0:c.login]})]})]})]}),l?i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"p-4 bg-green-100 border border-green-300 rounded-lg",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsx(ps,{className:"text-green-600",size:20}),i.jsx("span",{className:"font-semibold text-green-800",children:"Déploiement réussi !"})]}),i.jsx("p",{className:"text-sm text-green-700 mb-3",children:"Votre landing page a été déployée avec succès. GitHub Pages a été automatiquement activé."}),i.jsxs("div",{className:"bg-white p-3 rounded border border-green-200",children:[i.jsx("p",{className:"text-sm font-medium text-gray-700 mb-1",children:"Votre site est maintenant en ligne :"}),i.jsxs("div",{className:"flex items-center gap-2",children:[i.jsx("code",{className:"flex-1 px-2 py-1 bg-gray-100 rounded text-sm font-mono text-gray-800",children:s}),i.jsx("button",{onClick:()=>window.open(s,"_blank"),className:"p-1 text-blue-600 hover:text-blue-800 transition-colors",title:"Ouvrir le site",children:i.jsx(xn,{size:16})})]})]})]}),i.jsxs("div",{className:"flex gap-3",children:[i.jsxs("button",{onClick:()=>window.open(s,"_blank"),className:"flex-1 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium justify-center",children:[i.jsx(xn,{size:18}),"Voir le site"]}),i.jsx("button",{onClick:w,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium",children:"Déconnecter"})]})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"p-4 bg-white rounded-lg border border-green-200",children:[i.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"🚀 Déploiement automatique"}),i.jsxs("ul",{className:"text-sm text-gray-700 space-y-1",children:[i.jsx("li",{children:'• Création du repository "restaurant-landing-page"'}),i.jsx("li",{children:"• Upload du fichier HTML généré"}),i.jsx("li",{children:"• Activation automatique de GitHub Pages"}),i.jsx("li",{children:"• Configuration du domaine personnalisé"})]})]}),i.jsx("button",{onClick:m,disabled:r,className:`flex items-center gap-2 px-6 py-3 rounded-lg font-medium w-full justify-center transition-all ${r?"bg-gray-400 text-white cursor-not-allowed":"bg-green-600 text-white hover:bg-green-700"}`,children:r?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}),"Déploiement en cours..."]}):i.jsxs(i.Fragment,{children:[i.jsx(ra,{size:20}),"Déployer sur GitHub Pages"]})}),r&&i.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[i.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"}),i.jsx("span",{className:"text-sm font-medium text-blue-800",children:"Étapes en cours :"})]}),i.jsxs("div",{className:"text-sm text-blue-700 space-y-1",children:[i.jsx("div",{children:"✓ Connexion au repository"}),i.jsx("div",{children:"✓ Génération du HTML optimisé"}),i.jsx("div",{className:"animate-pulse",children:"⏳ Upload des fichiers..."}),i.jsx("div",{className:"text-gray-500",children:"⏳ Configuration GitHub Pages"})]})]})]})]}):i.jsxs("div",{className:"p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 text-white",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[i.jsx("div",{className:"p-2 bg-white rounded-lg",children:i.jsx(un,{className:"text-gray-900",size:24})}),i.jsx("h3",{className:"text-xl font-bold",children:"Connexion GitHub"})]}),i.jsx("p",{className:"text-gray-300 mb-6",children:"Connectez-vous à GitHub pour déployer automatiquement votre landing page et activer GitHub Pages."}),i.jsxs("button",{onClick:h,className:"flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium w-full justify-center",children:[i.jsx(un,{size:20}),"Se connecter avec GitHub"]}),i.jsx("div",{className:"mt-4 p-3 bg-blue-900/30 border border-blue-700 rounded-lg",children:i.jsxs("p",{className:"text-blue-200 text-sm",children:["💡 ",i.jsx("strong",{children:"Mode démo :"})," Cette connexion est simulée pour la démonstration. Dans un environnement réel, vous seriez redirigé vers GitHub OAuth."]})})]})}const Df=[{id:"restaurant",name:"Restaurant",description:"Landing pages pour restaurants et établissements culinaires",icon:Ic,color:"bg-orange-600 hover:bg-orange-700",available:!0},{id:"portfolio",name:"Portfolio",description:"Sites personnels pour créatifs et professionnels",icon:zf,color:"bg-purple-600 hover:bg-purple-700",available:!0},{id:"coming-soon-1",name:"Business",description:"Sites d'entreprise et services",icon:xf,color:"bg-blue-600 hover:bg-blue-700",available:!1},{id:"coming-soon-2",name:"Événement",description:"Pages pour événements et célébrations",icon:yf,color:"bg-green-600 hover:bg-green-700",available:!1},{id:"coming-soon-3",name:"Landing",description:"Pages de capture et conversion",icon:Ro,color:"bg-indigo-600 hover:bg-indigo-700",available:!1},{id:"coming-soon-4",name:"Carte de visite",description:"Cartes de visite numériques personnelles",icon:bf,color:"bg-pink-600 hover:bg-pink-700",available:!1}];function Mf({selectedCategory:e,onCategoryChange:t}){return i.jsx("div",{className:"max-w-4xl mx-auto mb-8",children:i.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[i.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[i.jsx("div",{className:"p-2 bg-gray-800 rounded-lg",children:i.jsx(cn,{className:"text-white",size:24})}),i.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Choisissez votre catégorie"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:Df.map(n=>{const r=n.icon,o=e===n.id,l=n.available;return i.jsxs("button",{onClick:()=>l&&t(n.id),disabled:!l,className:`p-6 rounded-xl border-2 transition-all duration-300 text-left relative ${o&&l?"border-blue-500 bg-blue-50 shadow-lg transform scale-105":l?"border-gray-200 bg-white hover:border-blue-300 hover:shadow-md":"border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed"}`,children:[!l&&i.jsx("div",{className:"absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium",children:"Bientôt"}),i.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[i.jsx("div",{className:`p-3 rounded-lg ${o&&l?"bg-blue-600 text-white":l?n.color.split(" ")[0]+" text-white":"bg-gray-400 text-white"}`,children:i.jsx(r,{size:24})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("h3",{className:"font-semibold text-gray-800 text-lg",children:n.name}),i.jsx("p",{className:"text-sm text-gray-600 mt-1",children:n.description})]})]}),o&&l&&i.jsx("div",{className:"text-sm text-blue-600 font-medium",children:"✓ Catégorie sélectionnée"})]},n.id)})}),i.jsx("div",{className:"mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg",children:i.jsxs("p",{className:"text-sm text-blue-700",children:["💡 ",i.jsx("strong",{children:"Nouvelles catégories :"})," D'autres types de templates seront bientôt disponibles pour répondre à tous vos besoins !"]})})]})})}const Ln=[{name:"Facebook",icon:Lc,baseUrl:"https://facebook.com/",placeholder:"votre.nom",color:"bg-blue-600 hover:bg-blue-700"},{name:"Instagram",icon:Rc,baseUrl:"https://instagram.com/",placeholder:"votre_nom",color:"bg-pink-600 hover:bg-pink-700"},{name:"X (Twitter)",icon:Fc,baseUrl:"https://x.com/",placeholder:"votre_nom",color:"bg-black hover:bg-gray-800"},{name:"LinkedIn",icon:Bc,baseUrl:"https://linkedin.com/in/",placeholder:"votre-nom",color:"bg-blue-700 hover:bg-blue-800"},{name:"GitHub",icon:un,baseUrl:"https://github.com/",placeholder:"votre-username",color:"bg-gray-800 hover:bg-gray-900"},{name:"Site Web",icon:Ro,baseUrl:"https://",placeholder:"www.votre-site.com",color:"bg-green-600 hover:bg-green-700"}];function Af({reseaux:e,onChange:t}){const n=l=>{const a=e.findIndex(s=>s.nom===l);if(a>=0){const s=e.filter((u,c)=>c!==a);t(s)}else{const s=Ln.find(u=>u.name===l);s&&t([...e,{nom:l,url:s.baseUrl,icone:"",pseudo:""}])}},r=(l,a)=>{const s=Ln.find(c=>c.name===l);if(!s)return;const u=e.map(c=>c.nom===l?{...c,url:s.baseUrl+a,pseudo:a}:c);t(u)},o=l=>{const a=e.find(u=>u.nom===l),s=Ln.find(u=>u.name===l);return!a||!s?"":a.url.replace(s.baseUrl,"")};return i.jsxs("div",{className:"space-y-4",children:[i.jsx("label",{className:"block text-sm font-semibold text-gray-700",children:"Réseaux sociaux (sélection simplifiée)"}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:Ln.map(l=>{const a=l.icon,s=e.some(u=>u.nom===l.name);return i.jsxs("button",{type:"button",onClick:()=>n(l.name),className:`flex items-center gap-2 p-3 rounded-lg transition-all ${s?`${l.color} text-white shadow-lg`:"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:[i.jsx(a,{size:20}),i.jsx("span",{className:"text-sm font-medium",children:l.name})]},l.name)})}),e.length>0&&i.jsxs("div",{className:"space-y-3 mt-6",children:[i.jsx("h4",{className:"text-sm font-medium text-gray-700",children:"Configurez vos réseaux sociaux :"}),e.map(l=>{const a=Ln.find(u=>u.name===l.nom);if(!a)return null;const s=a.icon;return i.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg",children:[i.jsx("div",{className:`p-2 rounded ${a.color.split(" ")[0]} text-white`,children:i.jsx(s,{size:16})}),i.jsxs("div",{className:"flex-1",children:[i.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:l.nom}),i.jsxs("div",{className:"flex items-center",children:[i.jsx("span",{className:"text-sm text-gray-500 mr-1 font-mono bg-gray-100 px-2 py-1 rounded-l border border-r-0",children:a.baseUrl}),i.jsx("input",{type:"text",value:o(l.nom),onChange:u=>r(l.nom,u.target.value),placeholder:a.placeholder,className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded-r focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),i.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["URL finale : ",i.jsx("span",{className:"font-mono",children:l.url})]})]})]},l.nom)})]}),i.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded-lg",children:i.jsxs("p",{className:"text-sm text-blue-700",children:["💡 ",i.jsx("strong",{children:"Astuce :"})," Sélectionnez vos réseaux sociaux et entrez simplement votre nom d'utilisateur. L'URL complète sera générée automatiquement !"]})})]})}function ii(e,t){if(typeof e!="object"||e===null||typeof t!="object"||t===null)return t??e;const n={...e};for(const r in t)if(t.hasOwnProperty(r)){const o=t[r],l=n[r];typeof o=="object"&&o!==null&&typeof l=="object"&&l!==null&&!Array.isArray(o)&&!Array.isArray(l)?n[r]=ii(l,o):o!==void 0&&(n[r]=o)}return n}function ai(e,t){const[n,r]=J.useState(()=>{try{const l=window.localStorage.getItem(e);if(l){const a=JSON.parse(l);return ii(t,a)}return t}catch(l){return console.log("Error reading localStorage:",l),t}}),o=l=>{try{const a=l instanceof Function?l(n):l;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.log("Error setting localStorage:",a)}};return J.useEffect(()=>{const l=()=>{try{const a=window.localStorage.getItem(e);if(a){const s=JSON.parse(a);r(ii(t,s))}}catch(a){console.log("Error reading localStorage:",a)}};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)},[e,t]),[n,o]}function Uf(e){const t={LinkedIn:`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,GitHub:`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>`,Instagram:`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`,"X (Twitter)":`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>`,YouTube:`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>`,"Site Web":`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`,Facebook:`<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`};return t[e]||t["Site Web"]}function In(e){const t={pdf:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>`,video:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"/>
    </svg>`,youtube:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>`,image:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z"/>
    </svg>`,link:`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>`};return t[e.toLowerCase()]||t.link}function Hf(e){const t=e.toLowerCase();return["pdf","doc","docx"].includes(t)?In("pdf"):["jpg","jpeg","png","gif"].includes(t)?In("image"):["mp4","avi","mov"].includes(t)?In("video"):In("link")}function cl(e){const t=e.projets.filter(o=>o.visuel).map(o=>({image:o.visuel,projet:o.titre.replace(/\s+/g,"-").toLowerCase()})),n=(e.documents||[]).map(o=>{var a;let l=o.type||"link";if(l==="youtube"&&o.url.includes("youtube.com"))l="youtube";else if(!o.type){const s=((a=o.url.split(".").pop())==null?void 0:a.toLowerCase())||"";["pdf","doc","docx"].includes(s)?l="pdf":["jpg","jpeg","png","gif"].includes(s)?l="image":["mp4","avi","mov"].includes(s)?l="video":l="link"}return{...o,type:l,icon:Hf(l)}});return`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio de ${e.nom}</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <script src="https://unpkg.com/alpinejs" defer><\/script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-color: #1e40af;
      --secondary-color: #3b82f6;
      --accent-color: #60a5fa;
      --text-color: #1f2937;
      --bg-color: #ffffff;
      --card-bg: rgba(255, 255, 255, 0.95);
      --border-color: rgba(30, 64, 175, 0.1);
    }
    
    body {
      font-family: 'Inter', system-ui, sans-serif;
      line-height: 1.6;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      color: var(--text-color);
      scroll-behavior: smooth;
    }
    
    h1, h2, h3 {
      font-family: 'Playfair Display', serif;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .section {
      margin: 4rem 0;
      padding: 3rem 0;
    }
    
    .card {
      background: var(--card-bg);
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 25px rgba(30, 64, 175, 0.1);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      overflow: hidden;
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(30, 64, 175, 0.15);
    }
    
    .galerie {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }
    
    .galerie img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 0.5rem;
      transition: transform 0.3s ease;
    }
    
    .galerie a:hover img {
      transform: scale(1.05);
    }
    
    .projet {
      margin: 3rem 0;
      padding: 2rem;
      scroll-margin-top: 2rem;
    }
    
    .projet-meta {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
      padding: 1.5rem;
      background: rgba(30, 64, 175, 0.05);
      border-radius: 0.5rem;
      border-left: 4px solid var(--primary-color);
    }
    
    .projet-meta li {
      list-style: none;
      padding: 0.25rem 0;
    }
    
    .projet-meta strong {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .solution-list, .apprentissage-list {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }
    
    .solution-list li, .apprentissage-list li {
      margin: 0.5rem 0;
      position: relative;
    }
    
    .solution-list li::before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      position: absolute;
      left: -1.5rem;
    }
    
    .apprentissage-list li::before {
      content: "💡";
      position: absolute;
      left: -1.5rem;
    }
    
    .projet-visuel {
      margin: 2rem 0;
      text-align: center;
    }
    
    .projet-visuel img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .files-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }
    
    .file-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--card-bg);
      border-radius: 0.5rem;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }
    
    .file-item:hover {
      background: rgba(30, 64, 175, 0.05);
      transform: translateY(-2px);
    }
    
    .file-icon {
      color: var(--primary-color);
      flex-shrink: 0;
    }
    
    .file-type {
      font-size: 0.75rem;
      color: #6b7280;
      text-transform: uppercase;
      font-weight: 500;
    }
    
    .documents-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin: 2rem 0;
    }
    
    .document-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--card-bg);
      border-radius: 0.5rem;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }
    
    .document-item:hover {
      background: rgba(30, 64, 175, 0.05);
      transform: translateY(-2px);
    }
    
    .document-icon {
      color: var(--primary-color);
      flex-shrink: 0;
    }
    
    .document-type {
      font-size: 0.75rem;
      color: #6b7280;
      text-transform: uppercase;
      font-weight: 500;
    }
    
    .socials {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin: 2rem 0;
    }
    
    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--primary-color);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(30, 64, 175, 0.2);
    }
    
    .social-link:hover {
      background: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
    }
    
    .header {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="10" height="10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
      pointer-events: none;
    }
    
    .header h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
    }
    
    .footer {
      background: #1f2937;
      color: white;
      padding: 3rem 0 2rem;
      text-align: center;
      margin-top: 4rem;
    }
    
    .nav-links {
      position: fixed;
      top: 2rem;
      right: 2rem;
      z-index: 100;
      display: flex;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.95);
      padding: 0.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
    }
    
    .nav-link {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      text-decoration: none;
      color: var(--text-color);
      font-weight: 500;
      font-size: 0.875rem;
      transition: all 0.3s ease;
    }
    
    .nav-link:hover {
      background: var(--primary-color);
      color: white;
    }
    
    .projects-index {
      position: fixed;
      top: 2rem;
      left: 2rem;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      max-width: 300px;
      transition: all 0.3s ease;
    }
    
    .projects-index.collapsed {
      width: auto;
    }
    
    .projects-index-header {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: between;
      gap: 0.5rem;
      font-weight: 600;
      color: var(--primary-color);
    }
    
    .projects-index-content {
      padding: 0.5rem;
      max-height: 400px;
      overflow-y: auto;
    }
    
    .project-index-item {
      display: block;
      padding: 0.5rem 0.75rem;
      text-decoration: none;
      color: var(--text-color);
      border-radius: 0.25rem;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      margin-bottom: 0.25rem;
    }
    
    .project-index-item:hover {
      background: var(--primary-color);
      color: white;
    }
    
    .fade-in {
      animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @media (max-width: 768px) {
      .header h1 {
        font-size: 2.5rem;
      }
      
      .galerie {
        grid-template-columns: 1fr;
      }
      
      .projet-meta {
        grid-template-columns: 1fr;
      }
      
      .nav-links {
        position: static;
        justify-content: center;
        margin: 1rem;
      }
      
      .projects-index {
        position: static;
        margin: 1rem;
        max-width: none;
      }
      
      .socials {
        gap: 1rem;
      }
      
      .social-link {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
      }
      
      .files-grid, .documents-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation flottante -->
  <nav class="nav-links">
    <a href="#aboutl" class="nav-link">A propos</a>
    ${t.length>0?'<a href="#galerie" class="nav-link">Galerie</a>':""}
    <a href="#projets" class="nav-link">Projets</a>
    ${n.length>0?'<a href="#documents" class="nav-link">Documents</a>':""}
  </nav>

  <!-- Index des projets pliable (dans la page générée) -->
  ${e.projets.length>0?`
  <div class="projects-index" id="projectsIndex">
    <div class="projects-index-header" onclick="toggleProjectsIndex()">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
      </svg>
      <span>Projets (${e.projets.length})</span>
      <svg class="w-4 h-4 transition-transform" id="indexChevron" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    </div>
    <div class="projects-index-content" id="projectsIndexContent">
      ${e.projets.map(o=>`
      <a href="#${o.titre.replace(/\s+/g,"-").toLowerCase()}" class="project-index-item">
        ${o.titre||"Projet sans titre"}
      </a>
      `).join("")}
    </div>
  </div>
  `:""}

  <!-- Header -->
  <header class="header">
    <div class="container">
      <h1 class="fade-in">Portfolio de ${e.nom}</h1>
      ${e.about?`<p class="text-xl opacity-90 mt-4">${e.about}</p>`:""}
    </div>
  </header>

  <div class="container">
    <section id="aboutl" class="section fade-in">
      <div class="card">
        <div class="projet">
          <h2 class="text-3xl font-bold mb-4 text-center">À propos</h2>
          <p class="text-lg leading-relaxed text-left max-w-prose mx-auto">
            ${e.aboutl}
          </p>
        </div>
      </div>
    </section>
    ${t.length>0?`
    <!-- Section Galerie -->
    <section id="galerie" class="section fade-in">
      <h2 class="text-3xl font-bold mb-8 text-center">Mes projets en un coup d'œil</h2>
      <div class="galerie">
        ${t.map(o=>`
        <div class="card">
          <a href="#${o.projet}">
            <img src="${o.image}" alt="${o.projet}" loading="lazy">
            <div class="p-4">
              <h3 class="font-semibold text-center capitalize">${o.projet.replace(/-/g," ")}</h3>
            </div>
          </a>
        </div>
        `).join("")}
      </div>
    </section>
    `:""}

    <!-- Section Projets -->
    <section id="projets" class="section fade-in">
      <h2 class="text-3xl font-bold mb-8 text-center">Mes projets</h2>
        ${e.projets.length>0?e.projets.map(o=>`
          ${o.collapsed?`
          <div x-data="{ open: false }" class="mb-6">
            <button @click="open = !open" class="bg-gray-800 text-white px-4 py-2 rounded mb-4">
              ${o.titre} – Voir / Cacher
            </button>
            <div x-show="open" class="transition-all">
              <div class="card projet" id="${o.titre.replace(/\s+/g,"-").toLowerCase()}">
          `:`
          <div class="card projet" id="${o.titre.replace(/\s+/g,"-").toLowerCase()}">
          `}
                <h3 class="text-2xl font-bold mb-4">${o.titre}</h3>
                <div class="projet-meta">
                  <div><strong>Type :</strong> ${o.type}</div>
                  <div><strong>Année :</strong> ${o.annee}</div>
                  <div><strong>Stack :</strong> ${o.stack}</div>
                  <div><strong>Rôle :</strong> ${o.role}</div>
                </div>
                <div class="mb-4">
                  <p><strong class="text-lg">Problème :</strong></p>
                  <p class="mt-2">${o.probleme}</p>
                </div>
                ${o.solution.length>0?`
                <div class="mb-4">
                  <p><strong class="text-lg">Solution :</strong></p>
                  <ul class="solution-list">
                    ${o.solution.map(l=>`<li>${l}</li>`).join("")}
                  </ul>
                </div>
                `:""}
                ${o.apprentissage.length>0?`
                <div class="mb-4">
                  <p><strong class="text-lg">Ce que j'ai appris :</strong></p>
                  <ul class="apprentissage-list">
                    ${o.apprentissage.map(l=>`<li>${l}</li>`).join("")}
                  </ul>
                </div>
                `:""}
                ${o.visuel?`
                <div class="projet-visuel">
                  <img src="${o.visuel}" alt="Visuel ${o.titre}" loading="lazy">
                </div>
                `:""}
                ${o.files&&o.files.length>0?`
                  <div class="mt-6">
                    <p><strong class="text-lg">Fichiers et ressources :</strong></p>
                    <div class="files-grid mt-3">
                      ${o.files.map(l=>{if(l.type==="youtube"){const a=l.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/),s=a?a[1]:"";return`
                            <div class="w-full mb-4">
                              <div class="font-medium mb-1">${l.label}</div>
                              <iframe class="w-full aspect-video rounded shadow"
                                src="https://www.youtube.com/embed/${s}"
                                frameborder="0"
                                allowfullscreen>
                              </iframe>
                            </div>`}return`
                          <a href="${l.url}" target="_blank" class="file-item">
                            <div class="file-icon">${In(l.type)}</div>
                            <div class="flex-1">
                              <div class="font-medium">${l.label}</div>
                              <div class="file-type">${l.type}</div>
                            </div>
                          </a>`}).join("")}
                    </div>
                  </div>
                `:""}
          ${o.collapsed?`
              </div>
            </div>
          </div>
          `:`
          </div>
          `}
        `).join(""):`
      <div class="card projet">
        <div class="text-center py-12">
          <div class="text-6xl mb-4">📝</div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">Aucun projet ajouté</h3>
          <p class="text-gray-500">Ajoutez vos premiers projets pour les voir apparaître ici.</p>
        </div>
      </div>
      `}
    </section>

    ${n.length>0?`
    <!-- Section Documents -->
    <section id="documents" class="section fade-in">
      <div class="card">
        <div class="projet">
          <h2 class="text-3xl font-bold mb-6 text-center">Documents à partager</h2>
          <div class="documents-grid">
            ${n.map(o=>o.type==="youtube"&&o.url.includes("youtube.com/embed/")?`
                  <div class="w-full mb-4">
                    <iframe class="w-full aspect-video rounded shadow"
                      src="${o.url}"
                      frameborder="0" allowfullscreen></iframe>
                  </div>`:`
                <a href="${o.url}" target="_blank" class="document-item">
                  <div class="document-icon">${o.icon}</div>
                  <div class="flex-1">
                    <div class="font-medium">${o.nom}</div>
                    <div class="document-type">${o.type}</div>
                  </div>
                </a>`).join("")}
          </div>
        </div>
      </div>
    </section>
    `:""}
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      ${e.reseaux.length>0?`
      <div class="socials">
        ${e.reseaux.map(o=>`
        <a href="${o.url}" target="_blank" class="social-link">
          ${Uf(o.nom)}
          <span>${o.nom}</span>
        </a>
        `).join("")}
      </div>
      `:""}
      <div class="mt-8 pt-8 border-t border-gray-600">
        <p class="text-sm opacity-75">Page générée avec ❤️ par EasyLandingWeb</p>
        <p class="text-xs opacity-50 mt-2">© ${new Date().getFullYear()} ${e.nom}. Tous droits réservés.</p>
      </div>
    </div>
  </footer>

  <script>
    // Fonction pour basculer l'index des projets
    function toggleProjectsIndex() {
      const content = document.getElementById('projectsIndexContent');
      const chevron = document.getElementById('indexChevron');
      const index = document.getElementById('projectsIndex');
      
      if (content.style.display === 'none') {
        content.style.display = 'block';
        chevron.style.transform = 'rotate(0deg)';
        index.classList.remove('collapsed');
      } else {
        content.style.display = 'none';
        chevron.style.transform = 'rotate(-90deg)';
        index.classList.add('collapsed');
      }
    }

    // Animation au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    // Animation immédiate pour le header
    document.querySelector('.header').style.opacity = '1';
    document.querySelector('.header').style.transform = 'translateY(0)';

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('.nav-link, .project-index-item').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  <\/script>
</body>
</html>`}function Vf(e,t){const n=new Blob([e],{type:"text/html"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}const Wf={nom:"",about:"",aboutl:"",galerie:[],projets:[],documents:[],reseaux:[]};function qf({onPreview:e,onUpload:t}){const[n,r]=ai("mustache-portfolio-data",Wf),[o,l]=J.useState(!1),a=(j,N)=>{r(S=>({...S,[j]:N}))},s=()=>{const j=cl(n);e(j)},u=()=>{const j=cl(n),N=window.open("","_blank");N&&(N.document.write(j),N.document.close())},c=()=>{const j=cl(n);Vf(j,"portfolio.html")},g=j=>{r(j)},h=()=>{a("projets",[...n.projets,{titre:"",type:"",annee:"",stack:"",role:"",probleme:"",solution:[],apprentissage:[],visuel:"",files:[],collapsed:!1}])},m=(j,N,S)=>{const T=[...n.projets];T[j]={...T[j],[N]:S},a("projets",T)},w=j=>{const N=n.projets.filter((S,T)=>T!==j);a("projets",N)},x=j=>{const N=[...n.projets];N[j].collapsed=!N[j].collapsed,a("projets",N)},k=()=>{const j=(n.projets||[]).map(N=>({...N,collapsed:!0}));a("projets",j)},F=()=>{const j=(n.projets||[]).map(N=>({...N,collapsed:!1}));a("projets",j)},f=j=>{const N=[...n.projets];N[j].files||(N[j].files=[]),N[j].files.push({url:"",label:"",type:"link"}),a("projets",N)},d=(j,N,S,T)=>{const C=[...n.projets];C[j].files&&(C[j].files[N]={...C[j].files[N],[S]:T},a("projets",C))},p=(j,N)=>{const S=[...n.projets];S[j].files&&(S[j].files=S[j].files.filter((T,C)=>C!==N),a("projets",S))},y=j=>{const N=[...n.projets];N[j].solution.push(""),a("projets",N)},v=(j,N,S)=>{const T=[...n.projets];T[j].solution[N]=S,a("projets",T)},z=(j,N)=>{const S=[...n.projets];S[j].solution=S[j].solution.filter((T,C)=>C!==N),a("projets",S)},P=j=>{const N=[...n.projets];N[j].apprentissage.push(""),a("projets",N)},_=(j,N,S)=>{const T=[...n.projets];T[j].apprentissage[N]=S,a("projets",T)},V=(j,N)=>{const S=[...n.projets];S[j].apprentissage=S[j].apprentissage.filter((T,C)=>C!==N),a("projets",S)},R=()=>{a("documents",[...n.documents,{nom:"",url:"",type:""}])},ge=(j,N,S)=>{const T=[...n.documents];T[j][N]=S,a("documents",T)},Ct=j=>{const N=n.documents.filter((S,T)=>T!==j);a("documents",N)},Nt=j=>{const N=/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,S=j.match(N);return S?`https://www.youtube.com/embed/${S[1]}`:j};return i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[i.jsx("div",{className:"mb-8",children:i.jsx(Ac,{onUpload:t})}),i.jsxs("div",{className:"mb-8 p-4 bg-gray-50 rounded-lg",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Gestion des données"}),i.jsx(Mc,{data:n,onImport:g})]}),i.jsxs("form",{className:"space-y-8",children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsx(he,{label:"Votre nom *",children:i.jsx("input",{type:"text",value:n.nom,onChange:j=>a("nom",j.target.value),placeholder:"John Doe",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all",required:!0})}),i.jsx(he,{label:"À propos",children:i.jsx("textarea",{value:n.about,onChange:j=>a("about",j.target.value),placeholder:"Développeur passionné par l'innovation...",rows:3,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-vertical"})}),i.jsx(he,{label:"À propos plus long",children:i.jsx("textarea",{value:n.aboutl,onChange:j=>a("aboutl",j.target.value),placeholder:"Développeur passionné par l'innovation...",rows:3,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-vertical"})})]}),i.jsx(Af,{reseaux:n.reseaux,onChange:j=>a("reseaux",j)}),n.projets.length>0&&i.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg border border-blue-200",children:[i.jsxs("button",{type:"button",onClick:()=>l(!o),className:"flex items-center gap-2 text-blue-800 font-semibold mb-2",children:[i.jsx(jf,{size:20}),"Gestion des projets (",n.projets.length,")",o?i.jsx(ul,{size:16}):i.jsx(sl,{size:16})]}),o&&i.jsxs("div",{className:"space-y-2",children:[i.jsxs("div",{className:"flex gap-2 mb-3",children:[i.jsx("button",{type:"button",onClick:k,className:"px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors",children:"Tout replier"}),i.jsx("button",{type:"button",onClick:F,className:"px-3 py-1 text-xs bg-blue-200 text-blue-700 rounded hover:bg-blue-300 transition-colors",children:"Tout déplier"})]}),n.projets.map((j,N)=>i.jsxs("div",{className:"flex items-center justify-between p-2 bg-white rounded border",children:[i.jsx("span",{className:"font-medium",children:j.titre||`Projet ${N+1}`}),i.jsx("button",{type:"button",onClick:()=>x(N),className:"flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors",children:j.collapsed?i.jsxs(i.Fragment,{children:["Déplier ",i.jsx(sl,{size:12})]}):i.jsxs(i.Fragment,{children:["Replier ",i.jsx(ul,{size:12})]})})]},N))]}),i.jsxs("div",{className:"mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800",children:["💡 ",i.jsx("strong",{children:"Note :"})," Un index de navigation sera automatiquement généré dans la page finale pour permettre aux visiteurs de naviguer entre vos projets."]})]}),i.jsx(he,{label:"Projets",children:i.jsxs("div",{className:"space-y-6",children:[n.projets.map((j,N)=>i.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[i.jsxs("div",{className:"flex items-center justify-between p-4 bg-gray-50 border-b",children:[i.jsxs("button",{type:"button",onClick:()=>x(N),className:"flex items-center gap-2 text-left flex-1",children:[i.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:j.titre||`Projet ${N+1}`}),j.collapsed?i.jsx(sl,{size:20}):i.jsx(ul,{size:20})]}),i.jsx("button",{type:"button",onClick:()=>w(N),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]}),!j.collapsed&&i.jsxs("div",{className:"p-6 space-y-4",children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[i.jsx("input",{type:"text",value:j.titre,onChange:S=>m(N,"titre",S.target.value),placeholder:"Titre du projet",className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("input",{type:"text",value:j.type,onChange:S=>m(N,"type",S.target.value),placeholder:"Type de projet",className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("input",{type:"text",value:j.annee,onChange:S=>m(N,"annee",S.target.value),placeholder:"Année",className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("input",{type:"text",value:j.stack,onChange:S=>m(N,"stack",S.target.value),placeholder:"Stack technique",className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("input",{type:"text",value:j.role,onChange:S=>m(N,"role",S.target.value),placeholder:"Votre rôle",className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("input",{type:"url",value:j.visuel||"",onChange:S=>m(N,"visuel",S.target.value),placeholder:"URL du visuel principal",className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),i.jsx("div",{children:i.jsx("textarea",{value:j.probleme,onChange:S=>m(N,"probleme",S.target.value),placeholder:"Problème à résoudre",rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"})}),i.jsxs("div",{children:[i.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"Solutions apportées"}),j.solution.map((S,T)=>i.jsxs("div",{className:"flex gap-2 mb-2",children:[i.jsx("input",{type:"text",value:S,onChange:C=>v(N,T,C.target.value),placeholder:"Solution mise en place",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("button",{type:"button",onClick:()=>z(N,T),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:16})})]},T)),i.jsxs("button",{type:"button",onClick:()=>y(N),className:"flex items-center gap-2 px-3 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter une solution"]})]}),i.jsxs("div",{children:[i.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"Apprentissages"}),j.apprentissage.map((S,T)=>i.jsxs("div",{className:"flex gap-2 mb-2",children:[i.jsx("input",{type:"text",value:S,onChange:C=>_(N,T,C.target.value),placeholder:"Ce que vous avez appris",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("button",{type:"button",onClick:()=>V(N,T),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:16})})]},T)),i.jsxs("button",{type:"button",onClick:()=>P(N),className:"flex items-center gap-2 px-3 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter un apprentissage"]})]}),i.jsxs("div",{children:[i.jsx("h5",{className:"font-medium text-gray-700 mb-2",children:"Fichiers et ressources"}),(j.files||[]).map((S,T)=>i.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg border mb-3",children:[i.jsxs("div",{className:"flex gap-2 mb-3",children:[i.jsxs("select",{value:S.type,onChange:C=>d(N,T,"type",C.target.value),className:"px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",children:[i.jsx("option",{value:"link",children:"Lien"}),i.jsx("option",{value:"pdf",children:"PDF"}),i.jsx("option",{value:"image",children:"Image"}),i.jsx("option",{value:"video",children:"Vidéo (fichier)"}),i.jsx("option",{value:"youtube",children:"YouTube"})]}),i.jsx("input",{type:"text",value:S.label,onChange:C=>d(N,T,"label",C.target.value),placeholder:"Nom du fichier",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("button",{type:"button",onClick:()=>p(N,T),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]}),i.jsxs("div",{className:"flex items-center gap-2",children:[S.type==="pdf"&&i.jsx(Tc,{className:"text-red-600",size:16}),S.type==="image"&&i.jsx($c,{className:"text-blue-600",size:16}),S.type==="video"&&i.jsx(Pf,{className:"text-green-600",size:16}),S.type==="youtube"&&i.jsx(Dc,{className:"text-red-600",size:16}),i.jsx("input",{type:"url",value:S.url,onChange:C=>{let L=C.target.value;S.type==="youtube"&&L.includes("youtube.com/watch")&&(L=Nt(L)),d(N,T,"url",L)},placeholder:S.type==="youtube"?"URL YouTube (sera convertie automatiquement)":S.type==="pdf"?"URL du PDF":S.type==="image"?"URL de l'image":S.type==="video"?"URL de la vidéo":"URL du lien",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"})]}),S.type==="youtube"&&i.jsxs("div",{className:"mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800",children:["💡 ",i.jsx("strong",{children:"YouTube :"})," Collez l'URL normale (ex: https://youtube.com/watch?v=...) et elle sera automatiquement convertie"]})]},T)),i.jsxs("button",{type:"button",onClick:()=>f(N),className:"flex items-center gap-2 px-3 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter un fichier"]})]})]})]},N)),i.jsxs("button",{type:"button",onClick:h,className:"flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter un projet"]})]})}),i.jsx(he,{label:"Documents généraux",children:i.jsxs("div",{className:"space-y-3",children:[n.documents.map((j,N)=>i.jsxs("div",{className:"flex gap-2",children:[i.jsx("input",{type:"text",value:j.nom,onChange:S=>ge(N,"nom",S.target.value),placeholder:"Nom du document",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("input",{type:"url",value:j.url,onChange:S=>ge(N,"url",S.target.value),placeholder:"URL du document",className:"flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"}),i.jsx("button",{type:"button",onClick:()=>Ct(N),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:i.jsx(Ye,{size:20})})]},N)),i.jsxs("button",{type:"button",onClick:R,className:"flex items-center gap-2 px-4 py-2 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors",children:[i.jsx(_t,{size:16}),"Ajouter un document"]})]})})]}),i.jsxs("div",{className:"flex flex-wrap gap-4 mt-12 pt-8 border-t",children:[i.jsxs("button",{onClick:u,className:"flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium",children:[i.jsx(xn,{size:18}),"Aperçu nouvelle page"]}),i.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium",children:[i.jsx(oi,{size:18}),"Aperçu modal"]}),i.jsxs("button",{onClick:c,className:"flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium",children:[i.jsx(na,{size:18}),"Télécharger HTML"]})]}),i.jsx("div",{className:"mt-6 p-4 bg-purple-50 rounded-lg",children:i.jsxs("p",{className:"text-sm text-purple-700",children:["💡 ",i.jsx("strong",{children:"Sauvegarde automatique :"})," Vos données de portfolio sont automatiquement sauvegardées dans votre navigateur."]})})]})})}function Qf(e,t=!1){const n=Gf(e);return t?Yf(n,e):n}function Gf(e){switch(e){case"zen":return{fontImport:'<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500&family=Lora:wght@400;500&display=swap" rel="stylesheet">',bodyFont:"'Noto Sans', system-ui, sans-serif",titleFont:"'Lora', serif",backgroundColor:"#f9f9f6",textColor:"#2c2c2c",primaryColor:"#3A5A40",secondaryColor:"#4a6741",accentColor:"#8a9a8d",headerBackground:"#f9f9f6",sectionBackground:"#f9f9f6",taglineBackground:"rgba(249, 249, 246, 0.95)",infoBackground:"rgba(255, 255, 255, 0.7)",footerBackground:"#f5f5f2",footerTextColor:"#3A5A40",heroOverlay:"linear-gradient(45deg, rgba(58, 90, 64, 0.05) 0%, rgba(138, 154, 141, 0.03) 50%, rgba(74, 103, 65, 0.05) 100%)",titleAnimation:"",taglineAnimation:"",imageAnimation:"",socialAnimation:"",additionalCSS:`
          /* Style minimaliste japonais */
          body {
            font-weight: 300;
            letter-spacing: 0.3px;
          }
          
          .title-section {
            padding: 4rem 2rem 3rem !important;
            background: #f9f9f6 !important;
            position: relative;
          }
          
          .title-section h1 {
            font-weight: 400 !important;
            text-shadow: none !important;
            letter-spacing: 1px !important;
            margin-bottom: 0 !important;
          }
          
          .hero {
            height: 60vh !important;
            border-radius: 0 !important;
          }
          
          .tagline {
            background: rgba(249, 249, 246, 0.95) !important;
            border: 1px solid rgba(58, 90, 64, 0.15) !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            font-weight: 300 !important;
            padding: 3rem 2rem !important;
            margin: 4rem auto !important;
            max-width: 600px !important;
          }
          
          .gallery-section {
            background: #f9f9f6 !important;
            padding: 5rem 3rem !important;
            margin: 0 !important;
          }
          
          .gallery-section::before,
          .gallery-section::after {
            display: none !important;
          }
          
          .gallery-title {
            font-weight: 400 !important;
            text-shadow: none !important;
            margin-bottom: 3rem !important;
            letter-spacing: 0.5px !important;
          }
          
          .gallery {
            gap: 3rem !important;
            max-width: 1000px !important;
          }
          
          .gallery img {
            border-radius: 0 !important;
            border: none !important;
            box-shadow: none !important;
            transition: opacity 0.3s ease !important;
          }
          
          .gallery img:hover {
            transform: none !important;
            box-shadow: none !important;
            opacity: 0.8 !important;
          }
          
          .info {
            background: rgba(255, 255, 255, 0.7) !important;
            border: 1px solid rgba(58, 90, 64, 0.1) !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 4rem 3rem !important;
            margin: 4rem auto !important;
            max-width: 700px !important;
          }
          
          .info-title {
            font-weight: 400 !important;
            text-shadow: none !important;
            margin-bottom: 3rem !important;
            letter-spacing: 0.5px !important;
          }
          
          .info p {
            font-weight: 300 !important;
            line-height: 1.8 !important;
            margin: 2rem 0 !important;
          }
          
          .info strong {
            font-weight: 400 !important;
          }
          
          .map-container iframe {
            border-radius: 0 !important;
            border: 1px solid rgba(58, 90, 64, 0.2) !important;
            box-shadow: none !important;
          }
          
          .socials {
            gap: 2rem !important;
            margin-bottom: 3rem !important;
          }
          
          .social-link {
            border-radius: 0 !important;
            font-weight: 400 !important;
            box-shadow: none !important;
            border: 1px solid rgba(255, 255, 255, 0.3) !important;
            padding: 1rem 2rem !important;
            text-transform: none !important;
            letter-spacing: 0.3px !important;
          }
          
          .social-link:hover {
            transform: none !important;
            box-shadow: none !important;
            opacity: 0.8 !important;
          }
          
          footer {
            background: #f5f5f2 !important;
            padding: 4rem 2rem !important;
            margin-top: 0 !important;
          }
          
          footer::before {
            display: none !important;
          }
          
          .footer-content p {
            font-weight: 300 !important;
            text-shadow: none !important;
            color: #3A5A40 !important;
            letter-spacing: 0.3px !important;
          }
          
          /* Responsive pour le style zen */
          @media (max-width: 768px) {
            .title-section {
              padding: 3rem 1.5rem 2rem !important;
            }
            
            .gallery-section {
              padding: 4rem 1.5rem !important;
            }
            
            .info {
              padding: 3rem 2rem !important;
              margin: 3rem 1rem !important;
            }
            
            .tagline {
              padding: 2.5rem 1.5rem !important;
              margin: 3rem 1rem !important;
            }
          }
        `};case"street-food":return{fontImport:'<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">',bodyFont:"'Open Sans', system-ui, sans-serif",titleFont:"'Fredoka', cursive",backgroundColor:"#fff8e1",textColor:"#2e2e2e",primaryColor:"#ff5722",secondaryColor:"#f4511e",accentColor:"#ffc107",headerBackground:"linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",sectionBackground:"linear-gradient(135deg, #ffe0b2 0%, #fff3e0 100%)",taglineBackground:"rgba(255, 243, 224, 0.9)",infoBackground:"rgba(255, 255, 255, 0.9)",footerBackground:"linear-gradient(135deg, #bf360c 0%, #d84315 100%)",footerTextColor:"#fff3e0",heroOverlay:"linear-gradient(45deg, rgba(255, 87, 34, 0.15) 0%, rgba(255, 193, 7, 0.1) 50%, rgba(244, 81, 30, 0.15) 100%)",titleAnimation:"animation: streetBounce 2s ease-in-out infinite;",taglineAnimation:"",imageAnimation:"",socialAnimation:"animation: streetPulse 3s ease-in-out infinite;",additionalCSS:`
          @keyframes streetBounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes streetPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          .title-section {
            position: relative;
            overflow: hidden;
          }
          
          .title-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="street-pattern" width="30" height="30" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="15" height="15" fill="%23ff5722" opacity="0.05"/><rect x="15" y="15" width="15" height="15" fill="%23ffc107" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23street-pattern)"/></svg>');
            pointer-events: none;
          }
          
          .title-section h1 {
            text-shadow: 3px 3px 0px rgba(255, 193, 7, 0.3), 6px 6px 0px rgba(255, 87, 34, 0.2) !important;
          }
          
          .gallery img {
            border-radius: 15px !important;
            border: 3px solid #ffc107 !important;
            box-shadow: 0 8px 20px rgba(255, 87, 34, 0.3) !important;
            transform: rotate(-1deg);
          }
          
          .gallery img:nth-child(even) {
            transform: rotate(1deg);
          }
          
          .gallery img:hover {
            transform: rotate(0deg) scale(1.05) !important;
            box-shadow: 0 15px 35px rgba(255, 87, 34, 0.4) !important;
          }
          
          .social-link {
            border-radius: 25px !important;
            font-weight: 600 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
          }
          
          .info {
            border-radius: 20px !important;
            border: 3px solid rgba(255, 193, 7, 0.5) !important;
            box-shadow: 0 10px 30px rgba(255, 87, 34, 0.2) !important;
          }
          
          .tagline {
            border-radius: 20px !important;
            border: 3px solid rgba(255, 193, 7, 0.6) !important;
            font-weight: 500 !important;
            box-shadow: 0 8px 25px rgba(255, 87, 34, 0.2) !important;
          }
          
          .map-container iframe {
            border-radius: 15px !important;
            border: 3px solid #ffc107 !important;
          }
        `};case"simple":default:return{fontImport:'<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet">',bodyFont:"'Quicksand', system-ui, sans-serif",titleFont:"'Playfair Display', serif",backgroundColor:"#fff",textColor:"#333",primaryColor:"#8b4513",secondaryColor:"#6b4423",accentColor:"#daa520",headerBackground:"linear-gradient(135deg, #fef9f3 0%, #ffe5b4 100%)",sectionBackground:"linear-gradient(135deg, #ffe5b4 0%, #fef9f3 100%)",taglineBackground:"rgba(254, 249, 243, 0.8)",infoBackground:"rgba(254, 249, 243, 0.5)",footerBackground:"linear-gradient(135deg, #2c1810 0%, #1a0f0a 100%)",footerTextColor:"#f5f5dc",heroOverlay:"linear-gradient(45deg, rgba(139, 69, 19, 0.15) 0%, rgba(218, 165, 32, 0.1) 50%, rgba(139, 69, 19, 0.15) 100%)",titleAnimation:"",taglineAnimation:"",imageAnimation:"",socialAnimation:"",additionalCSS:""}}}function Yf(e,t){switch(t){case"zen":return{...e,backgroundColor:"#1a1a1a",textColor:"#e0e0e0",primaryColor:"#7fb069",secondaryColor:"#6a9c5a",accentColor:"#a8b5a8",headerBackground:"#1a1a1a",sectionBackground:"#1a1a1a",taglineBackground:"rgba(26, 26, 26, 0.95)",infoBackground:"rgba(40, 40, 40, 0.7)",footerBackground:"#0f0f0f",footerTextColor:"#7fb069",heroOverlay:"linear-gradient(45deg, rgba(127, 176, 105, 0.1) 0%, rgba(168, 181, 168, 0.05) 50%, rgba(106, 156, 90, 0.1) 100%)",additionalCSS:e.additionalCSS.replace(/#f9f9f6/g,"#1a1a1a").replace(/#f5f5f2/g,"#0f0f0f").replace(/rgba\(255, 255, 255, 0\.7\)/g,"rgba(40, 40, 40, 0.7)").replace(/#3A5A40/g,"#7fb069")};case"street-food":return{...e,backgroundColor:"#1a1a1a",textColor:"#e0e0e0",primaryColor:"#ff7043",secondaryColor:"#ff5722",accentColor:"#ffb74d",headerBackground:"linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)",sectionBackground:"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",taglineBackground:"rgba(44, 44, 44, 0.9)",infoBackground:"rgba(60, 60, 60, 0.9)",footerBackground:"linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",footerTextColor:"#ffb74d",heroOverlay:"linear-gradient(45deg, rgba(255, 112, 67, 0.2) 0%, rgba(255, 183, 77, 0.15) 50%, rgba(255, 87, 34, 0.2) 100%)"};case"simple":default:return{...e,backgroundColor:"#1a1a1a",textColor:"#e0e0e0",primaryColor:"#d4a574",secondaryColor:"#c19660",accentColor:"#f4d03f",headerBackground:"linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)",sectionBackground:"linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",taglineBackground:"rgba(44, 44, 44, 0.8)",infoBackground:"rgba(60, 60, 60, 0.5)",footerBackground:"linear-gradient(135deg, #0f0f0f 0%, #000000 100%)",footerTextColor:"#f4d03f",heroOverlay:"linear-gradient(45deg, rgba(212, 165, 116, 0.15) 0%, rgba(244, 208, 63, 0.1) 50%, rgba(193, 150, 96, 0.15) 100%)"}}}function dl(e){const t=e.template||"simple",n=e.darkMode||!1,r=e.aiCustomizationEnabled||!1,o=r&&e.customizationOptions?Xf(e.customizationOptions):Qf(t,n),l=r&&e.customizationOptions?tp(e.customizationOptions):"";let s=`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{nom}}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ${Kf(e.customizationOptions)}
  ${o.fontImport}
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      font-family: ${o.bodyFont};
      background: ${o.backgroundColor};
      color: ${o.textColor};
      line-height: 1.6;
    }
    
    .title-section {
      text-align: center;
      padding: 3rem 1rem 2rem;
      background: ${o.headerBackground};
      position: relative;
      overflow: hidden;
    }
    
    .title-section h1 {
      font-family: ${o.titleFont};
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin: 0;
      color: ${o.primaryColor};
      text-shadow: 0 2px 4px ${o.primaryColor}20;
      position: relative;
      z-index: 1;
      ${o.titleAnimation}
    }
    
    .hero {
      background: url('{{banniere_url}}') center/cover no-repeat;
      height: 70vh;
      position: relative;
      overflow: hidden;
    }
    
    .hero::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${o.heroOverlay};
      pointer-events: none;
    }
    
    .tagline {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 500;
      color: ${o.secondaryColor};
      margin: 2rem auto;
      max-width: 700px;
      padding: 2rem 1rem;
      background: ${o.taglineBackground};
      border-radius: 15px;
      border: 2px solid ${o.accentColor}40;
      box-shadow: 0 4px 15px ${o.primaryColor}20;
      backdrop-filter: blur(10px);
      ${o.taglineAnimation}
    }
    
    .gallery-section {
      background: ${o.sectionBackground};
      padding: 4rem 2rem;
      margin: 3rem 0;
      position: relative;
    }
    
    .gallery-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, ${o.accentColor}, transparent);
    }
    
    .gallery-section::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, ${o.accentColor}, transparent);
    }
    
    .gallery-title {
      font-family: ${o.titleFont};
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      color: ${o.primaryColor};
      margin-bottom: 2rem;
      text-shadow: 0 2px 4px ${o.primaryColor}20;
    }
    
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 8px 25px ${o.primaryColor}30;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 3px solid ${o.accentColor}40;
      ${o.imageAnimation}
    }
    
    .gallery img:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 15px 35px ${o.primaryColor}40;
    }
    
    .menu-cards-link {
      text-align: center;
      margin: 2rem 0;
    }
    
    .menu-cards-link a {
      color: ${o.textColor};
      text-decoration: underline;
      font-size: 1rem;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    
    .menu-cards-link a:hover {
      color: ${o.primaryColor};
    }
    
    .menu-cards-section {
      background: ${o.sectionBackground};
      padding: 3rem 2rem;
      margin: 2rem 0;
      border-radius: 15px;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      display: none;
      position: relative;
    }
    
    .menu-cards-section.active {
      display: block;
      animation: slideDown 0.5s ease-out;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .menu-cards-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, ${o.accentColor}, transparent);
    }
    
    .menu-cards-section::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, ${o.accentColor}, transparent);
    }
    
    .menu-cards-title {
      font-family: ${o.titleFont};
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      color: ${o.primaryColor};
      margin-bottom: 2rem;
      text-shadow: 0 2px 4px ${o.primaryColor}20;
    }
    
    .menu-cards-close {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .menu-cards-close button {
      background: none;
      border: none;
      color: ${o.textColor};
      text-decoration: underline;
      cursor: pointer;
      font-size: 1rem;
      transition: color 0.3s ease;
    }
    
    .menu-cards-close button:hover {
      color: ${o.primaryColor};
    }
    
    .menu-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .menu-card-item {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 1.5rem;
      border-radius: 15px;
      border: 2px solid ${o.accentColor}30;
    }
    
    .menu-card-item h3 {
      margin-bottom: 1rem;
      color: ${o.primaryColor};
      font-family: ${o.titleFont};
      font-size: 1.5rem;
    }
    
    .menu-card-item img {
      width: 100%;
      max-height: 400px;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .menu-card-item img:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    }
    
    .menu-card-item iframe {
      width: 100%;
      height: 400px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    
    /* Modal pour l'affichage en plein écran des images */
    .image-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 2rem;
      cursor: pointer;
    }
    
    .image-modal.active {
      display: flex;
    }
    
    .image-modal img {
      max-width: 95vw;
      max-height: 95vh;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      cursor: default;
    }
    
    .image-modal-close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: #333;
      font-weight: bold;
    }
    
    .image-modal-close:hover {
      background: white;
      transform: scale(1.1);
    }
    
    .image-modal-info {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-size: 0.9rem;
      text-align: center;
      backdrop-filter: blur(10px);
    }
    
    .info {
      text-align: center;
      padding: 3rem 2rem;
      background: ${o.infoBackground};
      margin: 2rem 0;
      border-radius: 20px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      border: 2px solid ${o.accentColor}30;
    }
    
    .info-title {
      font-family: ${o.titleFont};
      font-size: 2rem;
      font-weight: 600;
      color: ${o.primaryColor};
      margin-bottom: 2rem;
      text-shadow: 0 2px 4px ${o.primaryColor}20;
    }
    
    .info p {
      margin: 15px 0;
      font-size: 1.1rem;
      font-weight: 400;
      color: ${o.textColor};
    }
    
    .info strong {
      color: ${o.primaryColor};
      font-weight: 600;
    }
    
    .map-container {
      margin: 2.5rem auto;
      max-width: 700px;
      text-align: center;
      padding: 0 1rem;
    }
    
    .map-container iframe {
      width: 100%;
      height: 350px;
      border: 0;
      border-radius: 15px;
      box-shadow: 0 10px 30px ${o.primaryColor}30;
      border: 3px solid ${o.accentColor}50;
    }
    
    .socials {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      padding: 0 1rem;
    }
    
    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      text-decoration: none;
      color: white;
      font-weight: 600;
      font-family: ${o.bodyFont};
      border-radius: 25px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      border: 2px solid rgba(255, 255, 255, 0.2);
      ${o.socialAnimation}
    }
    
    .social-link:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
      border-color: rgba(255, 255, 255, 0.4);
    }
    
    .social-facebook { 
      background: linear-gradient(135deg, #1877F2, #0d5dbf);
    }
    .social-instagram { 
      background: linear-gradient(135deg, #F56040, #E1306C, #C13584, #833AB4);
    }
    .social-x { 
      background: linear-gradient(135deg, #000000, #333333);
    }
    .social-youtube { 
      background: linear-gradient(135deg, #FF0000, #cc0000);
    }
    .social-linkedin { 
      background: linear-gradient(135deg, #0A66C2, #084d94);
    }
    .social-site-web { 
      background: linear-gradient(135deg, #10B981, #059669);
    }
    
    .social-icon {
      width: 22px;
      height: 22px;
      fill: currentColor;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
    }
    
    footer {
      text-align: center;
      padding: 3rem 1rem;
      background: ${o.footerBackground};
      color: ${o.footerTextColor};
      margin-top: 4rem;
      position: relative;
      overflow: hidden;
    }
    
    footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${o.accentColor}, ${o.primaryColor}, ${o.accentColor});
    }
    
    .footer-content p {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    
    ${o.additionalCSS}
    
    /* CSS personnalisé généré par le menu - APPLIQUÉ EN DERNIER POUR PRIORITÉ MAXIMALE */
    ${l}
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .title-section {
        padding: 2rem 1rem;
      }
      
      .hero {
        height: 50vh;
      }
      
      .tagline {
        font-size: 1.1rem;
        margin: 1.5rem auto;
        padding: 1.5rem 1rem;
      }
      
      .gallery-section {
        padding: 3rem 1rem;
      }
      
      .gallery {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
      }
      
      .gallery img {
        height: 180px;
      }
      
      .info {
        padding: 2rem 1rem;
        margin: 1.5rem 1rem;
      }
      
      .social-link {
        padding: 10px 16px;
        font-size: 0.9rem;
      }
      
      .socials {
        gap: 10px;
        margin-bottom: 1.5rem;
      }
      
      .menu-cards-section {
        padding: 2rem 1rem;
        margin: 1.5rem 1rem;
      }
      
      .menu-cards-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      
      .menu-card-item {
        padding: 1rem;
      }
      
      .image-modal {
        padding: 1rem;
      }
      
      .image-modal-close {
        top: 1rem;
        right: 1rem;
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
      }
      
      .image-modal-info {
        bottom: 1rem;
        padding: 0.8rem 1.5rem;
        font-size: 0.8rem;
      }
    }
  </style>
</head>
<body>
  <div class="title-section">
    <h1>{{nom}}</h1>
  </div>

  <header class="hero"></header>

  <div class="tagline">
    <p>{{accroche}}</p>
  </div>

  <section class="gallery-section">
    <h2 class="gallery-title">Notre Galerie</h2>
    <div class="gallery">
      {{#images}}
      <img src="{{.}}" alt="photo">
      {{/images}}
    </div>
  </section>

  {{#menuCards}}
  <div class="menu-cards-link">
    <a href="#" onclick="toggleMenuCards(event)">Accéder à la carte</a>
  </div>
  {{/menuCards}}

  <section id="menuCardsSection" class="menu-cards-section">
    <div class="menu-cards-close">
      <button onclick="hideMenuCards()">Masquer la carte</button>
    </div>
    <h2 class="menu-cards-title">Nos Cartes</h2>
    <div class="menu-cards-grid">
      {{#menuCardsContent}}
      <div class="menu-card-item">
        <h3>{{title}}</h3>
        {{#isImage}}
        <img src="{{url}}" alt="{{title}}" loading="lazy" onclick="openImageModal(this, '{{title}}')">
        {{/isImage}}
        {{#isPdf}}
        <iframe src="{{url}}" title="{{title}}"></iframe>
        {{/isPdf}}
      </div>
      {{/menuCardsContent}}
    </div>
  </section>

  <!-- Modal pour l'affichage en plein écran des images -->
  <div id="imageModal" class="image-modal" onclick="closeImageModal()">
    <button class="image-modal-close" onclick="closeImageModal()">&times;</button>
    <img id="modalImage" src="" alt="">
    <div class="image-modal-info">
      <span id="modalImageTitle"></span><br>
      <small>Cliquez n'importe où pour fermer</small>
    </div>
  </div>

  <section class="info">
    <h2 class="info-title">Informations Pratiques</h2>
    <p><strong>Adresse :</strong> {{adresse}}</p>
    
    {{#maps_url}}
    <div class="map-container">
      <iframe src="{{maps_url}}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    {{/maps_url}}
    
    <p><strong>Téléphone :</strong> {{telephone}}</p>
    <p><strong>Horaires :</strong><br>{{horaires}}</p>
  </section>

  <footer>
    <div class="socials">
      {{#socials}}
      <a href="{{url}}" target="_blank" class="social-link social-{{class}}">
        {{#icon}}{{icon}}{{/icon}}
        {{nom}}
      </a>
      {{/socials}}
    </div>
    
    <div class="footer-content">
      <p>Page générée avec ❤️ par <strong>EasyLandingWeb</strong></p>
    </div>
  </footer>

  <script>
    function toggleMenuCards(event) {
      event.preventDefault();
      const section = document.getElementById('menuCardsSection');
      if (section.classList.contains('active')) {
        hideMenuCards();
      } else {
        showMenuCards();
      }
    }
    
    function showMenuCards() {
      const section = document.getElementById('menuCardsSection');
      section.classList.add('active');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function hideMenuCards() {
      const section = document.getElementById('menuCardsSection');
      section.classList.remove('active');
    }
    
    // Fonctions pour la modal d'image
    function openImageModal(img, title) {
      event.stopPropagation(); // Empêcher la propagation du clic
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      const modalTitle = document.getElementById('modalImageTitle');
      
      modal.classList.add('active');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = title;
      
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden';
    }
    
    function closeImageModal() {
      const modal = document.getElementById('imageModal');
      modal.classList.remove('active');
      
      // Rétablir le scroll du body
      document.body.style.overflow = 'auto';
    }
    
    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeImageModal();
      }
    });
    
    // Empêcher la fermeture quand on clique sur l'image elle-même
    document.getElementById('modalImage').addEventListener('click', function(event) {
      event.stopPropagation();
    });
  <\/script>
</body>
</html>`.replace(/{{nom}}/g,Ue(e.nom)).replace(/{{accroche}}/g,Ue(e.accroche)).replace(/{{banniere_url}}/g,e.banniere_url).replace(/{{adresse}}/g,Ue(e.adresse).replace(/\n/g,"<br>")).replace(/{{telephone}}/g,Ue(e.telephone)).replace(/{{horaires}}/g,Ue(e.horaires).replace(/\n/g,"<br>"));const u=e.images.filter(x=>x.trim()!=="").map(x=>`      <img src="${x}" alt="photo">`).join(`
`);s=s.replace(/{{#images}}[\s\S]*?{{\/images}}/g,u);const c=e.menuCards||[];if(c.filter(x=>x.url.trim()!==""&&x.title.trim()!=="").length>0){s=s.replace(/{{#menuCards}}[\s\S]*?{{\/menuCards}}/g,`
  <div class="menu-cards-link">
    <a href="#" onclick="toggleMenuCards(event)">Accéder à la carte</a>
  </div>`);const x=c.filter(k=>k.url.trim()!==""&&k.title.trim()!=="").map(k=>{const F=k.type==="image",f=k.type==="pdf";return`        <div class="menu-card-item">
          <h3>${Ue(k.title)}</h3>
          ${F?`<img src="${k.url}" alt="${Ue(k.title)}" loading="lazy" onclick="openImageModal(this, '${Ue(k.title)}')">`:""}
          ${f?`<iframe src="${k.url}" title="${Ue(k.title)}"></iframe>`:""}
        </div>`}).join(`
`);s=s.replace(/{{#menuCardsContent}}[\s\S]*?{{\/menuCardsContent}}/g,x)}else s=s.replace(/{{#menuCards}}[\s\S]*?{{\/menuCards}}/g,""),s=s.replace(/{{#menuCardsContent}}[\s\S]*?{{\/menuCardsContent}}/g,"");const h=e.maps_url.trim()!==""?`    <div class="map-container">
      <iframe src="${e.maps_url}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`:"";s=s.replace(/{{#maps_url}}[\s\S]*?{{\/maps_url}}/g,h);const m={Facebook:'<svg class="social-icon" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',Instagram:'<svg class="social-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',"X (Twitter)":'<svg class="social-icon" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',YouTube:'<svg class="social-icon" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',LinkedIn:'<svg class="social-icon" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',"Site Web":'<svg class="social-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>'},w=e.socials.filter(x=>x.nom.trim()!==""&&x.url.trim()!=="").map(x=>{const k=x.nom.toLowerCase().replace(/[^a-z0-9]/g,"-"),F=m[x.nom]||m["Site Web"];return`      <a href="${x.url}" target="_blank" class="social-link social-${k}">
        ${F}
        ${Ue(x.nom)}
      </a>`}).join(`
`);return s=s.replace(/{{#socials}}[\s\S]*?{{\/socials}}/g,w),s}function Kf(e){if(!e)return"";let t="";switch(e.typography){case"moderne":t+=`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
`;break;case"elegant":t+=`<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;500;600&display=swap" rel="stylesheet">
`;break;case"luxueux":t+=`<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap" rel="stylesheet">
`;break;case"classique":t+=`<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
`;break;case"manuscrite":t+=`<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet">
`;break;case"flottante":t+=`<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Comfortaa:wght@300;400;500;700&display=swap" rel="stylesheet">
`;break}return t}function Xf(e){const t=Zf(e.color,e.darkMode),n=Jf(e.typography);return{fontImport:"",bodyFont:n.bodyFont,titleFont:n.titleFont,backgroundColor:t.background,textColor:t.text,primaryColor:t.primary,secondaryColor:t.secondary,accentColor:t.accent,headerBackground:t.headerBackground,sectionBackground:t.sectionBackground,taglineBackground:t.taglineBackground,infoBackground:t.infoBackground,footerBackground:t.footerBackground,footerTextColor:t.footerTextColor,heroOverlay:t.heroOverlay,titleAnimation:Rr(e.animation,"title"),taglineAnimation:Rr(e.animation,"tagline"),imageAnimation:Rr(e.animation,"image"),socialAnimation:Rr(e.animation,"social"),additionalCSS:ep(e.ambiance)}}function Zf(e,t){const n={rouge:{primary:"#dc2626",secondary:"#b91c1c",accent:"#f87171",background:t?"linear-gradient(135deg, #1a0f0f, #2d1b1b)":"linear-gradient(135deg, #fef2f2, #fee2e2)",headerBackground:t?"#1a0f0f":"#fef2f2",sectionBackground:t?"#2d1b1b":"#fee2e2",taglineBackground:t?"rgba(26, 15, 15, 0.9)":"rgba(254, 242, 242, 0.9)",infoBackground:t?"rgba(45, 27, 27, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0606, #1a0f0f)":"linear-gradient(135deg, #7f1d1d, #991b1b)",footerTextColor:t?"#f87171":"#fef2f2",text:t?"#f87171":"#7f1d1d",heroOverlay:t?"linear-gradient(45deg, rgba(220, 38, 38, 0.2) 0%, rgba(185, 28, 28, 0.15) 100%)":"linear-gradient(45deg, rgba(220, 38, 38, 0.15) 0%, rgba(185, 28, 28, 0.1) 100%)"},rose:{primary:"#e11d48",secondary:"#be185d",accent:"#f472b6",background:t?"linear-gradient(135deg, #1a0f14, #2d1b26)":"linear-gradient(135deg, #fdf2f8, #fce7f3)",headerBackground:t?"#1a0f14":"#fdf2f8",sectionBackground:t?"#2d1b26":"#fce7f3",taglineBackground:t?"rgba(26, 15, 20, 0.9)":"rgba(253, 242, 248, 0.9)",infoBackground:t?"rgba(45, 27, 38, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0610, #1a0f14)":"linear-gradient(135deg, #831843, #9d174d)",footerTextColor:t?"#f472b6":"#fdf2f8",text:t?"#f472b6":"#831843",heroOverlay:t?"linear-gradient(45deg, rgba(225, 29, 72, 0.2) 0%, rgba(190, 24, 93, 0.15) 100%)":"linear-gradient(45deg, rgba(225, 29, 72, 0.15) 0%, rgba(190, 24, 93, 0.1) 100%)"},orange:{primary:"#ea580c",secondary:"#c2410c",accent:"#fb923c",background:t?"linear-gradient(135deg, #1a1209, #2d2416)":"linear-gradient(135deg, #fff7ed, #fed7aa)",headerBackground:t?"#1a1209":"#fff7ed",sectionBackground:t?"#2d2416":"#fed7aa",taglineBackground:t?"rgba(26, 18, 9, 0.9)":"rgba(255, 247, 237, 0.9)",infoBackground:t?"rgba(45, 36, 22, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0c06, #1a1209)":"linear-gradient(135deg, #9a3412, #c2410c)",footerTextColor:t?"#fb923c":"#fff7ed",text:t?"#fb923c":"#9a3412",heroOverlay:t?"linear-gradient(45deg, rgba(234, 88, 12, 0.2) 0%, rgba(194, 65, 12, 0.15) 100%)":"linear-gradient(45deg, rgba(234, 88, 12, 0.15) 0%, rgba(194, 65, 12, 0.1) 100%)"},jaune:{primary:"#d97706",secondary:"#b45309",accent:"#fbbf24",background:t?"linear-gradient(135deg, #1a1609, #2d2a16)":"linear-gradient(135deg, #fffbeb, #fef3c7)",headerBackground:t?"#1a1609":"#fffbeb",sectionBackground:t?"#2d2a16":"#fef3c7",taglineBackground:t?"rgba(26, 22, 9, 0.9)":"rgba(255, 251, 235, 0.9)",infoBackground:t?"rgba(45, 42, 22, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0e06, #1a1609)":"linear-gradient(135deg, #92400e, #b45309)",footerTextColor:t?"#fbbf24":"#fffbeb",text:t?"#fbbf24":"#92400e",heroOverlay:t?"linear-gradient(45deg, rgba(217, 119, 6, 0.2) 0%, rgba(180, 83, 9, 0.15) 100%)":"linear-gradient(45deg, rgba(217, 119, 6, 0.15) 0%, rgba(180, 83, 9, 0.1) 100%)"},vert:{primary:"#16a34a",secondary:"#15803d",accent:"#4ade80",background:t?"linear-gradient(135deg, #0f1a0f, #1b2d1b)":"linear-gradient(135deg, #f0fdf4, #dcfce7)",headerBackground:t?"#0f1a0f":"#f0fdf4",sectionBackground:t?"#1b2d1b":"#dcfce7",taglineBackground:t?"rgba(15, 26, 15, 0.9)":"rgba(240, 253, 244, 0.9)",infoBackground:t?"rgba(27, 45, 27, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #060f06, #0f1a0f)":"linear-gradient(135deg, #14532d, #166534)",footerTextColor:t?"#4ade80":"#f0fdf4",text:t?"#4ade80":"#14532d",heroOverlay:t?"linear-gradient(45deg, rgba(22, 163, 74, 0.2) 0%, rgba(21, 128, 61, 0.15) 100%)":"linear-gradient(45deg, rgba(22, 163, 74, 0.15) 0%, rgba(21, 128, 61, 0.1) 100%)"},bleu:{primary:"#2563eb",secondary:"#1d4ed8",accent:"#60a5fa",background:t?"linear-gradient(135deg, #0f1419, #1b2d45)":"linear-gradient(135deg, #eff6ff, #dbeafe)",headerBackground:t?"#0f1419":"#eff6ff",sectionBackground:t?"#1b2d45":"#dbeafe",taglineBackground:t?"rgba(15, 20, 25, 0.9)":"rgba(239, 246, 255, 0.9)",infoBackground:t?"rgba(27, 45, 69, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #06090f, #0f1419)":"linear-gradient(135deg, #1e3a8a, #1e40af)",footerTextColor:t?"#60a5fa":"#eff6ff",text:t?"#60a5fa":"#1e3a8a",heroOverlay:t?"linear-gradient(45deg, rgba(37, 99, 235, 0.2) 0%, rgba(29, 78, 216, 0.15) 100%)":"linear-gradient(45deg, rgba(37, 99, 235, 0.15) 0%, rgba(29, 78, 216, 0.1) 100%)"},violet:{primary:"#9333ea",secondary:"#7c3aed",accent:"#a855f7",background:t?"linear-gradient(135deg, #14091a, #26162d)":"linear-gradient(135deg, #faf5ff, #e9d5ff)",headerBackground:t?"#14091a":"#faf5ff",sectionBackground:t?"#26162d":"#e9d5ff",taglineBackground:t?"rgba(20, 9, 26, 0.9)":"rgba(250, 245, 255, 0.9)",infoBackground:t?"rgba(38, 22, 45, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f060f, #14091a)":"linear-gradient(135deg, #581c87, #6b21a8)",footerTextColor:t?"#a855f7":"#faf5ff",text:t?"#a855f7":"#581c87",heroOverlay:t?"linear-gradient(45deg, rgba(147, 51, 234, 0.2) 0%, rgba(124, 58, 237, 0.15) 100%)":"linear-gradient(45deg, rgba(147, 51, 234, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%)"},italie:{primary:"#dc2626",secondary:"#16a34a",accent:"#fbbf24",background:t?"linear-gradient(135deg, #1a0f0f, #0f1a0f, #1a1609)":"linear-gradient(135deg, #fef2f2, #f0fdf4, #fffbeb)",headerBackground:t?"#1a0f0f":"#fef2f2",sectionBackground:t?"#0f1a0f":"#f0fdf4",taglineBackground:t?"rgba(26, 15, 15, 0.9)":"rgba(254, 242, 242, 0.9)",infoBackground:t?"rgba(15, 26, 15, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0606, #060f06)":"linear-gradient(135deg, #7f1d1d, #14532d)",footerTextColor:t?"#fbbf24":"#fffbeb",text:t?"#fbbf24":"#7f1d1d",heroOverlay:t?"linear-gradient(45deg, rgba(220, 38, 38, 0.2) 0%, rgba(22, 163, 74, 0.15) 50%, rgba(251, 191, 36, 0.2) 100%)":"linear-gradient(45deg, rgba(220, 38, 38, 0.15) 0%, rgba(22, 163, 74, 0.1) 50%, rgba(251, 191, 36, 0.15) 100%)"},france:{primary:"#1e40af",secondary:"#dc2626",accent:"#f8fafc",background:t?"linear-gradient(135deg, #0f1419, #1a0f0f, #1a1a1a)":"linear-gradient(135deg, #eff6ff, #fef2f2, #f8fafc)",headerBackground:t?"#0f1419":"#eff6ff",sectionBackground:t?"#1a0f0f":"#fef2f2",taglineBackground:t?"rgba(15, 20, 25, 0.9)":"rgba(239, 246, 255, 0.9)",infoBackground:t?"rgba(26, 15, 15, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #06090f, #0f0606)":"linear-gradient(135deg, #1e3a8a, #7f1d1d)",footerTextColor:"#f8fafc",text:t?"#f8fafc":"#1e3a8a",heroOverlay:t?"linear-gradient(45deg, rgba(30, 64, 175, 0.2) 0%, rgba(220, 38, 38, 0.15) 50%, rgba(248, 250, 252, 0.1) 100%)":"linear-gradient(45deg, rgba(30, 64, 175, 0.15) 0%, rgba(220, 38, 38, 0.1) 50%, rgba(248, 250, 252, 0.05) 100%)"},mexique:{primary:"#dc2626",secondary:"#b91c1c",accent:"#fbbf24",background:t?"linear-gradient(135deg, #1a0f0f, #1a1609)":"linear-gradient(135deg, #fef2f2, #fed7aa, #fef3c7)",headerBackground:t?"#1a0f0f":"#fef2f2",sectionBackground:t?"#1a1609":"#fed7aa",taglineBackground:t?"rgba(26, 15, 15, 0.9)":"rgba(254, 242, 242, 0.9)",infoBackground:t?"rgba(26, 22, 9, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0606, #0f0c06)":"linear-gradient(135deg, #7f1d1d, #92400e)",footerTextColor:t?"#fbbf24":"#fef2f2",text:t?"#fbbf24":"#7f1d1d",heroOverlay:t?"linear-gradient(45deg, rgba(220, 38, 38, 0.25) 0%, rgba(251, 191, 36, 0.2) 100%)":"linear-gradient(45deg, rgba(220, 38, 38, 0.2) 0%, rgba(251, 191, 36, 0.15) 100%)"},mediterranee:{primary:"#0ea5e9",secondary:"#0284c7",accent:"#38bdf8",background:t?"linear-gradient(135deg, #0f1419, #1a1a1a)":"linear-gradient(135deg, #f0f9ff, #e0f2fe)",headerBackground:t?"#0f1419":"#f0f9ff",sectionBackground:t?"#1a1a1a":"#e0f2fe",taglineBackground:t?"rgba(15, 20, 25, 0.9)":"rgba(240, 249, 255, 0.9)",infoBackground:t?"rgba(26, 26, 26, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #06090f, #0f0f0f)":"linear-gradient(135deg, #0c4a6e, #075985)",footerTextColor:t?"#38bdf8":"#f0f9ff",text:t?"#38bdf8":"#0c4a6e",heroOverlay:t?"linear-gradient(45deg, rgba(14, 165, 233, 0.2) 0%, rgba(2, 132, 199, 0.15) 100%)":"linear-gradient(45deg, rgba(14, 165, 233, 0.15) 0%, rgba(2, 132, 199, 0.1) 100%)"},chaude:{primary:"#dc2626",secondary:"#ea580c",accent:"#d97706",background:t?"linear-gradient(135deg, #1a0f0f, #1a1209, #1a1609)":"linear-gradient(135deg, #fef2f2, #fff7ed, #fffbeb)",headerBackground:t?"#1a0f0f":"#fef2f2",sectionBackground:t?"#1a1209":"#fff7ed",taglineBackground:t?"rgba(26, 15, 15, 0.9)":"rgba(254, 242, 242, 0.9)",infoBackground:t?"rgba(26, 18, 9, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #0f0606, #0f0c06)":"linear-gradient(135deg, #7f1d1d, #9a3412)",footerTextColor:t?"#d97706":"#fffbeb",text:t?"#d97706":"#7f1d1d",heroOverlay:t?"linear-gradient(45deg, rgba(220, 38, 38, 0.2) 0%, rgba(234, 88, 12, 0.18) 50%, rgba(217, 119, 6, 0.2) 100%)":"linear-gradient(45deg, rgba(220, 38, 38, 0.15) 0%, rgba(234, 88, 12, 0.12) 50%, rgba(217, 119, 6, 0.15) 100%)"},froide:{primary:"#2563eb",secondary:"#16a34a",accent:"#9333ea",background:t?"linear-gradient(135deg, #0f1419, #0f1a0f, #14091a)":"linear-gradient(135deg, #eff6ff, #f0fdf4, #faf5ff)",headerBackground:t?"#0f1419":"#eff6ff",sectionBackground:t?"#0f1a0f":"#f0fdf4",taglineBackground:t?"rgba(15, 20, 25, 0.9)":"rgba(239, 246, 255, 0.9)",infoBackground:t?"rgba(15, 26, 15, 0.9)":"rgba(255, 255, 255, 0.9)",footerBackground:t?"linear-gradient(135deg, #06090f, #060f06)":"linear-gradient(135deg, #1e3a8a, #14532d)",footerTextColor:t?"#9333ea":"#eff6ff",text:t?"#9333ea":"#1e3a8a",heroOverlay:t?"linear-gradient(45deg, rgba(37, 99, 235, 0.2) 0%, rgba(22, 163, 74, 0.15) 50%, rgba(147, 51, 234, 0.2) 100%)":"linear-gradient(45deg, rgba(37, 99, 235, 0.15) 0%, rgba(22, 163, 74, 0.1) 50%, rgba(147, 51, 234, 0.15) 100%)"}};return n[e]||n.bleu}function Jf(e){const t={moderne:{bodyFont:"'Inter', 'Poppins', system-ui, sans-serif",titleFont:"'Poppins', 'Inter', sans-serif"},elegant:{bodyFont:"'Source Sans Pro', system-ui, sans-serif",titleFont:"'Playfair Display', serif"},luxueux:{bodyFont:"'Cinzel', serif",titleFont:"'Cormorant Garamond', serif"},classique:{bodyFont:"'Lato', system-ui, sans-serif",titleFont:"'Crimson Text', serif"},manuscrite:{bodyFont:"'Kalam', cursive",titleFont:"'Dancing Script', 'Caveat', cursive"},flottante:{bodyFont:"'Comfortaa', cursive",titleFont:"'Quicksand', sans-serif"}};return t[e]||t.moderne}function Rr(e,t){var r;return((r={subtile:{title:"",tagline:"",image:"",social:""},dynamique:{title:"animation: dynamicBounce 2s ease-in-out infinite;",tagline:"animation: dynamicFloat 3s ease-in-out infinite;",image:"",social:"animation: dynamicPulse 2s ease-in-out infinite;"},flottante:{title:"animation: gentleFloat 4s ease-in-out infinite;",tagline:"animation: gentleFloat 5s ease-in-out infinite;",image:"",social:"animation: gentleFloat 6s ease-in-out infinite;"},pulsante:{title:"animation: gentlePulse 3s ease-in-out infinite;",tagline:"animation: gentlePulse 4s ease-in-out infinite;",image:"",social:"animation: gentlePulse 2s ease-in-out infinite;"},lumineuse:{title:"animation: glowEffect 2s ease-in-out infinite alternate;",tagline:"animation: glowEffect 3s ease-in-out infinite alternate;",image:"",social:"animation: glowEffect 4s ease-in-out infinite alternate;"},aucune:{title:"",tagline:"",image:"",social:""}}[e])==null?void 0:r[t])||""}function ep(e){return{chaleureuse:`
      /* Ambiance chaleureuse */
      .gallery img {
        border-radius: 20px !important;
        border: 4px solid rgba(255, 255, 255, 0.8) !important;
        box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
      }
      
      .tagline, .info {
        background: rgba(255, 255, 255, 0.9) !important;
        border: 2px solid rgba(255,255,255,0.5) !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
      }
    `,elegante:`
      /* Ambiance élégante */
      .title-section h1 {
        letter-spacing: 6px !important;
        text-transform: uppercase !important;
        font-weight: 300 !important;
      }
      
      .gallery img {
        border-radius: 0 !important;
        filter: grayscale(30%) contrast(1.1) !important;
        border: 1px solid rgba(0,0,0,0.1) !important;
      }
      
      .gallery img:hover {
        filter: grayscale(0%) contrast(1.2) !important;
      }
      
      .tagline, .info {
        border: 1px solid rgba(0,0,0,0.1) !important;
        backdrop-filter: blur(20px) !important;
      }
    `,familiale:`
      /* Ambiance familiale */
      .gallery img {
        border-radius: 15px !important;
        transform: rotate(-1deg) !important;
      }
      
      .gallery img:nth-child(even) {
        transform: rotate(1deg) !important;
      }
      
      .gallery img:hover {
        transform: rotate(0deg) scale(1.05) !important;
      }
      
      .tagline {
        font-style: italic !important;
        transform: rotate(-1deg) !important;
      }
    `,moderne:`
      /* Ambiance moderne */
      .gallery img {
        border-radius: 25px !important;
        box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
        border: none !important;
      }
      
      .info, .tagline {
        border-radius: 25px !important;
        backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255,255,255,0.2) !important;
      }
      
      .title-section h1 {
        background: linear-gradient(45deg, var(--ai-primary, #3b82f6), var(--ai-accent, #60a5fa)) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
      }
    `,rustique:`
      /* Ambiance rustique */
      .gallery img {
        border-radius: 10px !important;
        border: 3px solid #8b4513 !important;
        box-shadow: 0 8px 20px rgba(139, 69, 19, 0.3) !important;
      }
      
      .tagline, .info {
        background: rgba(245, 245, 220, 0.9) !important;
        border: 2px solid #8b4513 !important;
        border-radius: 10px !important;
      }
      
      .title-section h1 {
        text-shadow: 3px 3px 0px #8b4513 !important;
      }
    `,luxueuse:`
      /* Ambiance luxueuse */
      .title-section h1 {
        font-weight: 300 !important;
        letter-spacing: 8px !important;
        text-transform: uppercase !important;
      }
      
      .gallery img {
        border-radius: 0 !important;
        border: 1px solid #ffd700 !important;
        filter: sepia(10%) contrast(1.1) !important;
      }
      
      .gallery img:hover {
        border-color: #ffd700 !important;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.5) !important;
      }
      
      .social-link:hover {
        box-shadow: 0 0 25px #ffd700 !important;
        border-color: #ffd700 !important;
      }
    `,romantique:`
      /* Ambiance romantique */
      .gallery img {
        border-radius: 50% !important;
        border: 4px solid rgba(255, 192, 203, 0.8) !important;
      }
      
      .tagline {
        font-style: italic !important;
        background: rgba(255, 240, 245, 0.9) !important;
        border: 2px solid rgba(255, 192, 203, 0.5) !important;
      }
      
      .title-section h1 {
        color: #ff69b4 !important;
        text-shadow: 0 0 20px rgba(255, 105, 180, 0.5) !important;
      }
    `,festive:`
      /* Ambiance festive */
      .title-section h1 {
        animation: festiveGlow 1s ease-in-out infinite alternate !important;
      }
      
      .gallery img {
        border: 3px solid #ff6347 !important;
        transform: rotate(-2deg) !important;
      }
      
      .gallery img:nth-child(even) {
        transform: rotate(2deg) !important;
      }
      
      .gallery img:hover {
        transform: rotate(0deg) scale(1.1) !important;
        border-color: #ffd700 !important;
      }
      
      .social-link {
        animation: festiveBounce 2s ease-in-out infinite !important;
      }
    `}[e]||""}function tp(e){let t=`
/* 🎨 PERSONNALISATION PAR MENU - SYSTÈME FIABLE */
`;return t+=`
@keyframes dynamicBounce {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-10px) scale(1.02); }
}

@keyframes dynamicFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes dynamicPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

@keyframes gentlePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

@keyframes glowEffect {
  0% { text-shadow: 0 0 10px currentColor; }
  100% { text-shadow: 0 0 30px currentColor, 0 0 40px currentColor; }
}

@keyframes festiveGlow {
  0% { text-shadow: 0 0 10px #ff6347; }
  100% { text-shadow: 0 0 30px #ffd700, 0 0 40px #ff6347; }
}

@keyframes festiveBounce {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.05) rotate(1deg); }
  75% { transform: scale(1.05) rotate(-1deg); }
}
`,e.typography==="manuscrite"&&(t+=`
/* Style manuscrite spécialisé */
.title-section h1 {
  font-family: 'Dancing Script', cursive !important;
  font-weight: 700 !important;
  font-size: clamp(3.5rem, 8vw, 7rem) !important;
  transform: rotate(-3deg) !important;
  text-shadow: 4px 4px 8px rgba(0,0,0,0.4) !important;
  letter-spacing: 3px !important;
  line-height: 1.1 !important;
}

.info-title, .gallery-title {
  font-family: 'Caveat', cursive !important;
  font-weight: 700 !important;
  transform: rotate(-1.5deg) !important;
  font-size: 3rem !important;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.3) !important;
}

.tagline p {
  font-family: 'Kalam', cursive !important;
  font-style: italic !important;
  transform: rotate(1deg) !important;
  font-size: 1.6rem !important;
  line-height: 1.7 !important;
}
`),e.color==="mexique"&&(t+=`
/* Style mexicain spécialisé */
.title-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(220, 38, 38, 0.1) 10px,
    rgba(220, 38, 38, 0.1) 20px,
    transparent 20px,
    transparent 30px,
    rgba(251, 191, 36, 0.1) 30px,
    rgba(251, 191, 36, 0.1) 40px
  );
  pointer-events: none;
}

.gallery img {
  border: 3px solid #fbbf24 !important;
  transform: rotate(-2deg) !important;
}

.gallery img:nth-child(even) {
  transform: rotate(2deg) !important;
}

.gallery img:hover {
  transform: rotate(0deg) scale(1.08) !important;
  border-color: #dc2626 !important;
}
`),t}function Ue(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function np(e,t){const n=new Blob([e],{type:"text/html"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}const rp={nom:"",accroche:"",banniere_url:"",images:[],adresse:"",maps_url:"",telephone:"",horaires:"",socials:[],template:"simple",darkMode:!1,customization:"",aiCustomizationEnabled:!1,customizationOptions:{color:"",typography:"",animation:"",ambiance:"",darkMode:!1},menuCards:[]};function op(){const[e,t]=ai("selected-category","restaurant"),[n,r]=ai("restaurant-data",rp),[o,l]=J.useState(!1),[a,s]=J.useState(!1),[u,c]=J.useState(""),[g,h]=J.useState(""),m=(v,z)=>{r(P=>({...P,[v]:z}))},w=v=>{r(z=>({...z,customizationOptions:v,darkMode:v.darkMode}))},x=()=>{const v=dl(n);c(v),l(!0)},k=()=>{const v=dl(n),z=window.open("","_blank");z&&(z.document.write(v),z.document.close())},F=()=>{const v=dl(n);np(v,"index.html")},f=v=>{r(v)},d=v=>{h(v)},p=v=>{c(v),l(!0)},y=()=>{switch(e){case"portfolio":return i.jsx(qf,{onPreview:p,onUpload:d});case"restaurant":return i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[i.jsxs("div",{className:"mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200",children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx("div",{className:"p-2 bg-purple-600 rounded-lg",children:i.jsx(cn,{className:"text-white",size:24})}),i.jsx("h3",{className:"text-xl font-bold text-gray-800",children:"Mode Personnalisation"})]}),i.jsxs("div",{className:"flex items-center gap-3",children:[i.jsx(ur,{className:"text-purple-600",size:20}),i.jsx("button",{onClick:()=>m("aiCustomizationEnabled",!n.aiCustomizationEnabled),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${n.aiCustomizationEnabled?"bg-purple-600":"bg-gray-200"}`,children:i.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${n.aiCustomizationEnabled?"translate-x-6":"translate-x-1"}`})}),i.jsx(cn,{className:"text-purple-600",size:20}),i.jsx("span",{className:"text-sm font-medium text-gray-700",children:n.aiCustomizationEnabled?"Menu Activé":"Templates"})]})]}),n.aiCustomizationEnabled?i.jsxs("div",{children:[i.jsxs("div",{className:"mb-4 p-4 bg-white rounded-lg border border-purple-200",children:[i.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"🎯 Personnalisation par menu"}),i.jsx("p",{className:"text-sm text-gray-700",children:"Choisissez vos options dans les menus ci-dessous. Chaque combinaison est testée et garantie de fonctionner parfaitement !"})]}),i.jsx(Ff,{options:n.customizationOptions,onChange:w})]}):i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-gray-600 mb-4",children:"Utilisez les templates prédéfinis ou activez le menu de personnalisation pour un design sur mesure"}),i.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm text-gray-500",children:[i.jsx(ur,{size:16}),i.jsx("span",{children:"Templates classiques actifs"})]})]})]}),!n.aiCustomizationEnabled&&i.jsx(If,{selectedTemplate:n.template,onTemplateChange:v=>m("template",v),darkMode:n.darkMode,onDarkModeChange:v=>m("darkMode",v)}),i.jsx("div",{className:"mb-8",children:i.jsx(Ac,{onUpload:d})}),i.jsxs("div",{className:"mb-8 p-4 bg-gray-50 rounded-lg",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Gestion des données"}),i.jsx(Mc,{data:n,onImport:f})]}),i.jsxs("form",{className:"space-y-8",children:[i.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[i.jsx(he,{label:"Nom du restaurant *",children:i.jsx("input",{type:"text",value:n.nom,onChange:v=>m("nom",v.target.value),placeholder:"Le Petit Bistrot",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",required:!0})}),i.jsx(he,{label:"Téléphone",children:i.jsx("input",{type:"tel",value:n.telephone,onChange:v=>m("telephone",v.target.value),placeholder:"01 23 45 67 89",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})})]}),i.jsx(he,{label:"Accroche du restaurant",children:i.jsx("input",{type:"text",value:n.accroche,onChange:v=>m("accroche",v.target.value),placeholder:"Une cuisine authentique dans un cadre chaleureux",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})}),i.jsx(he,{label:"URL de l'image de bannière",children:i.jsx("input",{type:"url",value:n.banniere_url,onChange:v=>m("banniere_url",v.target.value),placeholder:"https://exemple.com/banniere.jpg",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})}),i.jsx(_f,{images:n.images,onChange:v=>m("images",v)}),i.jsx(Lf,{menuCards:n.menuCards,onChange:v=>m("menuCards",v)}),i.jsx(he,{label:"Adresse complète",children:i.jsx("textarea",{value:n.adresse,onChange:v=>m("adresse",v.target.value),placeholder:`123 Rue de la Paix
75001 Paris
France`,rows:3,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"})}),i.jsxs(he,{label:"URL Google Maps (optionnel)",children:[i.jsx("input",{type:"url",value:n.maps_url,onChange:v=>m("maps_url",v.target.value),placeholder:"https://www.google.com/maps/embed?pb=...",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"}),i.jsx("p",{className:"text-sm text-gray-500 mt-1",children:`💡 Pour obtenir l'URL : allez sur Google Maps, recherchez votre adresse, cliquez sur "Partager" → "Intégrer une carte" et copiez l'URL dans src=""`})]}),i.jsx(he,{label:"Horaires d'ouverture",children:i.jsx("textarea",{value:n.horaires,onChange:v=>m("horaires",v.target.value),placeholder:`Lundi - Vendredi : 12h - 14h30 et 19h - 22h30
Samedi : 19h - 23h
Dimanche : Fermé`,rows:4,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"})}),i.jsx(Tf,{socials:n.socials,onChange:v=>m("socials",v)})]}),i.jsxs("div",{className:"flex flex-wrap gap-4 mt-12 pt-8 border-t",children:[i.jsxs("button",{onClick:k,className:"flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium",children:[i.jsx(xn,{size:18}),"Aperçu nouvelle page"]}),i.jsxs("button",{onClick:x,className:"flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",children:[i.jsx(oi,{size:18}),"Aperçu modal"]}),i.jsxs("button",{onClick:F,className:"flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium",children:[i.jsx(na,{size:18}),"Télécharger HTML"]}),i.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium",children:[i.jsx(vf,{size:18}),"Documentation"]})]}),i.jsxs("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:[i.jsxs("p",{className:"text-sm text-blue-700",children:["💡 ",i.jsx("strong",{children:"Sauvegarde automatique :"})," Vos données sont automatiquement sauvegardées dans votre navigateur pendant que vous saisissez."]}),g&&i.jsxs("p",{className:"text-sm text-green-700 mt-2",children:["🚀 ",i.jsx("strong",{children:"Site déployé :"})," ",i.jsx("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-green-800",children:g})]})]})]})});default:return i.jsx("div",{className:"max-w-4xl mx-auto",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-xl p-8 text-center",children:i.jsxs("div",{className:"p-8",children:[i.jsx("div",{className:"w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6",children:i.jsx(cn,{className:"text-yellow-600",size:48})}),i.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Bientôt disponible !"}),i.jsx("p",{className:"text-gray-600 mb-6",children:"Cette catégorie de templates est en cours de développement. Nous travaillons dur pour vous offrir de nouveaux types de sites web."}),i.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:i.jsxs("p",{className:"text-sm text-blue-700",children:["💡 En attendant, vous pouvez utiliser les catégories ",i.jsx("strong",{children:"Restaurant"})," et ",i.jsx("strong",{children:"Portfolio"})," qui sont déjà disponibles !"]})})]})})})}};return i.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",children:[i.jsx("a",{href:"https://bolt.new/",target:"_blank",rel:"noopener noreferrer",className:"fixed top-4 right-4 z-50 group",style:{opacity:.85},children:i.jsx("div",{className:"bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-200 p-2",children:i.jsx("img",{src:"/white_circle_360x360.png",alt:"Made with Bolt",className:"w-24 h-24 object-contain"})})}),e==="restaurant"&&i.jsxs("button",{onClick:x,disabled:!n.nom.trim(),className:`fixed top-40 right-4 z-50 group rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 p-4 ${n.nom.trim()?"bg-blue-600 hover:bg-blue-700 text-white border-blue-500 cursor-pointer":"bg-gray-400 text-gray-200 border-gray-300 cursor-not-allowed"}`,title:"Aperçu rapide Restaurant",children:[i.jsx(oi,{size:28,className:"drop-shadow-sm"}),i.jsx("div",{className:`absolute -left-24 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${n.nom.trim()?"":"hidden"}`,children:"Aperçu Restaurant"})]}),i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[i.jsx("div",{className:"p-3 bg-blue-600 rounded-full",children:i.jsx(Ic,{className:"text-white",size:32})}),i.jsx("h1",{className:"text-4xl font-bold text-gray-800",children:"EasyLandingWeb"})]}),i.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Créez des sites web professionnels en quelques minutes"})]}),i.jsx(Mf,{selectedCategory:e,onCategoryChange:t}),y()]}),i.jsx($f,{isOpen:o,onClose:()=>l(!1),htmlContent:u}),i.jsx(Rf,{isOpen:a,onClose:()=>s(!1)})]})}_c(document.getElementById("root")).render(i.jsx(J.StrictMode,{children:i.jsx(op,{})}));
