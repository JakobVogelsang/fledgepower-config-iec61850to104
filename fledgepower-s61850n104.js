/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$5=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$5=Symbol(),n$7=new WeakMap;class o$6{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$5)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$5&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$7.set(s,t));}return t}toString(){return this.cssText}}const r$3=t=>new o$6("string"==typeof t?t:t+"",void 0,s$5),i$6=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$6(n,t,s$5)},S$1=(s,n)=>{e$5?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$3=e$5?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$4=window,r$2=e$4.trustedTypes,h$3=r$2?r$2.emptyScript:"",o$5=e$4.reactiveElementPolyfillSupport,n$6={toAttribute(t,i){switch(i){case Boolean:t=t?h$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$6,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$3(i));}else void 0!==i&&s.push(c$3(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$6).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$6;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$5||o$5({ReactiveElement:u$1}),(null!==(s$4=e$4.reactiveElementVersions)&&void 0!==s$4?s$4:e$4.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$5=window,s$3=i$5.trustedTypes,e$3=s$3?s$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$4="$lit$",n$5=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$5,h$2=`<${l$2}>`,r$1=document,u=()=>r$1.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$2=Array.isArray,v=t=>c$2(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m$1=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$1.createTreeWalker(r$1,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$3?e$3.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m$1:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m$1?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h$2:v>=0?(e.push(d),s.slice(0,v)+o$4+s.slice(v)+n$5+w):s+n$5+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$4)||i.startsWith(n$5)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$4).split(n$5),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$5),i=t.length-1;if(i>0){h.textContent=s$3?s$3.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$5,t+1));)v.push({type:7,index:r}),t+=n$5.length-1;}r++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$1).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r$1,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$3?s$3.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$5.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$2=i$5.litHtmlVersions)&&void 0!==t$2?t$2:i$5.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$3;class s$2 extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s$2.finalized=!0,s$2._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s$2});const n$4=globalThis.litElementPolyfillSupport;null==n$4||n$4({LitElement:s$2});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$4=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$2=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$3(n){return (t,o)=>void 0!==o?e$2(n,t,o):i$4(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return n$3({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$3(i,n){return o$2({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$2;null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$2{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$1(class extends i$2{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t));}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)));}return T}});

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i$1=o=>null===o||"object"!=typeof o&&"function"!=typeof o,e=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=(i,t)=>{var e,o;const r=i._$AN;if(void 0===r)return !1;for(const i of r)null===(o=(e=i)._$AO)||void 0===o||o.call(e,t,!1),s$1(i,t);return !0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===(null==e?void 0:e.size))},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),l(t);}};function n$1(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i;}function h$1(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$1(r[i],!1),o(r[i]);else null!=r&&(s$1(r,!1),o(r));else s$1(this,i);}const l=i=>{var t$1,s,o,r;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h$1),null!==(s=(r=i)._$AQ)&&void 0!==s||(r._$AQ=n$1));};class c$1 extends i$2{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var e,r;i!==this.isConnected&&(this.isConnected=i,i?null===(e=this.reconnected)||void 0===e||e.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),t&&(s$1(this,i),o(this));}setValue(t){if(e(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s{constructor(t){this.G=t;}disconnect(){this.G=void 0;}reconnect(t){this.G=t;}deref(){return this.G}}class i{constructor(){this.Y=void 0,this.Z=void 0;}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)));}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0;}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=t=>!i$1(t)&&"function"==typeof t.then,h=1073741823;class c extends c$1{constructor(){super(...arguments),this._$C_t=h,this._$Cwt=[],this._$Cq=new s(this),this._$CK=new i;}render(...s){var i;return null!==(i=s.find((t=>!n(t))))&&void 0!==i?i:T}update(s,i){const r=this._$Cwt;let e=r.length;this._$Cwt=i;const o=this._$Cq,c=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$C_t);t++){const s=i[t];if(!n(s))return this._$C_t=t,s;t<e&&s===r[t]||(this._$C_t=h,e=0,Promise.resolve(s).then((async t=>{for(;c.get();)await c.get();const i=o.deref();if(void 0!==i){const r=i._$Cwt.indexOf(s);r>-1&&r<i._$C_t&&(i._$C_t=r,i.setValue(t));}})));}return T}disconnected(){this._$Cq.disconnect(),this._$CK.pause();}reconnected(){this._$Cq.reconnect(this),this._$CK.resume();}}const m=e$1(c);

const pivotTypes = {
    SPS: 'SpsTyp',
    DPS: 'DpsTyp',
    INS: 'InsTyp',
    ENS: 'EnsTyp',
    MV: 'MvTyp',
    BSC: 'BscTyp',
    SPC: 'SpcTyp',
    DPC: 'DpcTyp',
    APC: 'ApcTyp',
    INC: 'IncTyp',
};
const typeids = {
    1: 'M_SP_NA_1',
    2: 'M_SP_TA_1',
    3: 'M_DP_NA_1',
    4: 'M_DP_TA_1',
    5: 'M_ST_NA_1',
    6: 'M_ST_TA_1',
    9: 'M_ME_NA_1',
    10: 'M_ME_TA_1',
    11: 'M_ME_NB_1',
    12: 'M_ME_TB_1',
    13: 'M_ME_NC_1',
    14: 'M_ME_TC_1',
    17: 'M_EP_TA_1',
    20: 'M_SP_NA_1',
    21: 'M_ME_ND_1',
    30: 'M_SP_TB_1',
    31: 'M_DP_TB_1',
    32: 'M_ST_TB_1',
    34: 'M_ME_TD_1',
    35: 'M_ME_TE_1',
    36: 'M_ME_TF_1',
    38: 'M_EP_TD_1',
    45: 'C_SC_NA_1',
    46: 'C_DC_NA_1',
    47: 'C_RC_NA_1',
    48: 'C_SE_NA_1',
    49: 'C_SE_NB_1',
    50: 'C_SE_NC_1',
    58: 'C_SC_TA_1',
    59: 'C_DC_TA_1',
    60: 'C_RC_TA_1',
    61: 'C_SE_TA_1',
    62: 'C_SE_TB_1',
    63: 'C_SE_TC_1',
};

function commonDataClass(lNodeType, ancest) {
    const doc = lNodeType.ownerDocument;
    const dOs = [];
    const doTypes = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 4; i < ancest.length; i++) {
        if (dOs.length === 0) {
            const dO = lNodeType.querySelector(`DO[name="${ancest[i]}"]`);
            if (dO)
                dOs.push(dO);
            else
                break;
        }
        const type = dOs[dOs.length - 1].getAttribute('type');
        const doType = doc.querySelector(`:root > DataTypeTemplates > DOType[id="${type}"]`);
        if (!doType)
            break;
        doTypes.push(doType);
        const sdo = doType.querySelector(`:scope > SDO[name="${ancest[i]}"]`);
        if (sdo)
            dOs.push(sdo);
        else
            break;
    }
    if (dOs.length === 0)
        return null;
    return doTypes[doTypes.length - 1].getAttribute('cdc');
}
function ancestors(iec104) {
    var _a, _b, _c, _d;
    const dai = iec104.parentElement;
    if (!dai)
        return [];
    const ancestorss = [dai.getAttribute('name')];
    let parent = dai.parentElement;
    while (parent.tagName === 'SDI' || parent.tagName === 'DOI') {
        ancestorss.splice(0, 0, parent.getAttribute('name'));
        parent = parent.parentElement;
    }
    while (parent.tagName === 'LN' || parent.tagName === 'LN0') {
        ancestorss.splice(0, 0, (_a = parent.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '');
        ancestorss.splice(0, 0, (_b = parent.getAttribute('lnClass')) !== null && _b !== void 0 ? _b : '');
        ancestorss.splice(0, 0, (_c = parent.getAttribute('inst')) !== null && _c !== void 0 ? _c : '');
        parent = parent.parentElement;
    }
    while (parent.tagName === 'LDevice') {
        ancestorss.splice(0, 0, (_d = parent.getAttribute('inst')) !== null && _d !== void 0 ? _d : '');
        parent = parent.parentElement;
    }
    return ancestorss;
}
function reference(element, ref = '') {
    var _a, _b, _c, _d, _e;
    if (element.tagName === 'Private')
        return reference(element.parentElement, '');
    if (element.tagName === 'DAI')
        return reference(element.parentElement, element.getAttribute('name'));
    if (element.tagName === 'SDI' || element.tagName === 'DOI')
        return reference(element.parentElement, `${element.getAttribute('name')}.${ref}`);
    if (element.tagName === 'LN' || element.tagName === 'LN0')
        return reference(element.parentElement, `${(_a = element.getAttribute('prefix')) !== null && _a !== void 0 ? _a : ''}${(_b = element.getAttribute('lnClass')) !== null && _b !== void 0 ? _b : ''}${(_c = element.getAttribute('inst')) !== null && _c !== void 0 ? _c : ''}.${ref}`);
    if (element.tagName === 'LDevice')
        return reference(element.closest('IED'), `${(_d = element.getAttribute('inst')) !== null && _d !== void 0 ? _d : ''}/${ref}`);
    if (element.tagName === 'IED')
        return `${(_e = element.getAttribute('name')) !== null && _e !== void 0 ? _e : ''}${ref}`;
    return ref;
}
function getMapping(privateIec104) {
    var _a;
    const address = privateIec104.querySelector(':scope > Address');
    const [casdu, ioa, ti] = ['casdu', 'ioa', 'ti'].map(key => address === null || address === void 0 ? void 0 : address.getAttribute(key));
    if (!casdu || !ioa || !ti)
        return null;
    const ref = reference(privateIec104);
    const lnType = (_a = privateIec104.closest('LN,LN0')) === null || _a === void 0 ? void 0 : _a.getAttribute('lnType');
    const lNodeType = privateIec104.ownerDocument.querySelector(`LNodeType[id="${lnType}"]`);
    if (!lNodeType)
        return null;
    const cdc = commonDataClass(lNodeType, ancestors(privateIec104));
    if (!cdc)
        return null;
    const iec61850 = {
        ied: { name: 'IED', ip_addr: '192.168.0.200', port: 49152 },
        cdc,
        ref,
        service: 'polling',
    };
    const iec104 = {
        casdu,
        ioa,
        ti,
    };
    const typeid = typeids[ti];
    const pivotType = pivotTypes[cdc];
    if (!typeid || !pivotType)
        return { supported: false, selected: false, iec61850, iec104 };
    return { supported: true, selected: true, iec61850, iec104 };
}

function objref(cdc, dataref) {
    const bits = dataref.split('.');
    bits.pop();
    if (cdc === 'MV')
        bits.pop();
    return bits.join('.');
}
function iec61850exchangeData(mapping) {
    const datapoints = mapping
        .filter(map => map.selected === true)
        .map(map => ({
        label: `Lab${mapping.indexOf(map)}`,
        pivot_id: `Lab${mapping.indexOf(map)}`,
        protocols: [
            {
                name: 'iec61850',
                objref: objref(map.iec61850.cdc, map.iec61850.ref),
                cdc: pivotTypes[map.iec61850.cdc],
            },
        ],
    }));
    return {
        exchanged_data: {
            exchanged_data: {
                name: 'iec61850',
                version: '1.0.0',
                datapoints,
            },
        },
    };
}
async function enableService(options) {
    const result = await fetch(`http://${options.address}:${options.port}/fledge/schedule/enable`, {
        method: 'PUT',
        body: JSON.stringify({ schedule_name: options.name }),
    }).then(res => res.json());
    return result;
}
async function restartFledge(address, port) {
    const restart = await fetch(`http://${address}:${port}/fledge/restart`, {
        method: 'PUT',
    });
    const json = await restart.json();
    return json;
}
async function pushConfigToSouth(mapping, options) {
    const exchangedData = iec61850exchangeData(mapping);
    const config = await fetch(`http://${options.address}:${options.port}/fledge/category/${options.name}`, {
        method: 'PUT',
        body: JSON.stringify(exchangedData),
    });
    const resConfig = await config.json();
    // enable the plugin
    const resEnable = await enableService(options);
    //
    const resRestart = await restartFledge(options.address, options.port);
    // eslint-disable-next-line no-alert
    window.alert(`${JSON.stringify(resConfig, undefined, 4)} ${JSON.stringify(resEnable, undefined, 4)} ${JSON.stringify(resRestart, undefined, 4)}`);
}
async function services(address, port) {
    const serviceObj = await fetch(`http://${address}:${port}/fledge/service`).then(result => result.json());
    return serviceObj;
}
async function serviceStatus(options) {
    var _a;
    const servicesObj = await services(options.address, options.port);
    return (_a = servicesObj.services.find(service => service.name === options.name)) === null || _a === void 0 ? void 0 : _a.status;
}
async function getSouthServices(address, port) {
    const southServices = await fetch(`http://${address}:${port}/fledge/south`).then(result => result.json());
    return southServices.services.map(south => south.name);
}
async function getNorthServices(address, port) {
    const northServices = await fetch(`http://${address}:${port}/fledge/north`).then(result => result.json());
    return northServices.map(north => north.name);
}
async function fledgePing(address, port) {
    try {
        const pingResult = await fetch(`http://${address}:${port}/fledge/ping`).then(result => result.json());
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(pingResult, undefined, 4));
    }
    catch (err) {
        // eslint-disable-next-line no-alert
        window.alert(err);
    }
}

/** An editor [[`plugin`]] for editing the `Substation` section. */
class Fledgepower61850to104 extends s$2 {
    constructor() {
        super(...arguments);
        this.editCount = -1;
        this.southConfigPossible = false;
        this.selectedSouthPlugin = '';
        this.selectedNorthPlugin = '';
        this.selectedApplicationType = 'Polling';
        this.selectedReportControl = '';
        this.fledgeIP = '192.168.0.200';
        this.fledgePort = '8081';
        this.serverIP = '192.168.0.67';
        this.serverPort = '49152';
    }
    // eslint-disable-next-line class-methods-use-this
    async onSouthSelect(evt) {
        const name = evt.target.value;
        const status = await serviceStatus({
            address: this.fledgeIP,
            port: this.fledgePort,
            name,
        });
        if (!status)
            this.statusSouth.value = 'Cannot check pslugin';
        this.selectedSouthPlugin = name;
        this.statusSouth.value = status;
        this.southConfigPossible = true;
    }
    // eslint-disable-next-line class-methods-use-this
    async onNorthSelect(evt) {
        const name = evt.target.value;
        const status = await serviceStatus({
            address: this.fledgeIP,
            port: this.fledgePort,
            name,
        });
        this.statusNorth.value = status !== null && status !== void 0 ? status : 'undefined';
    }
    // eslint-disable-next-line class-methods-use-this
    async renderSouthSelection() {
        const norths = await getSouthServices(this.fledgeIP, this.fledgePort);
        return x `<select
      @input="${(evt) => this.onSouthSelect(evt)}"
      style="margin: 5px;"
    >
      <option>--Please choose an option--</option>
      ${norths.map(north => x `<option>${north}</option>`)}
    </select>`;
    }
    // eslint-disable-next-line class-methods-use-this
    async renderNorthSelection() {
        const norths = await getNorthServices(this.fledgeIP, this.fledgePort);
        return x `<select
      @input="${(evt) => this.onNorthSelect(evt)}"
      style="margin: 5px;"
    >
      <option>--Please choose an option--</option>
      ${norths.map(north => x `<option>${north}</option>`)}
    </select>`;
    }
    // eslint-disable-next-line class-methods-use-this
    check(evt, map) {
        const check = evt.target.checked;
        // eslint-disable-next-line no-param-reassign
        if (check)
            map.selected = check;
        this.requestUpdate('mapping');
    }
    // eslint-disable-next-line class-methods-use-this
    checkAll(evt) {
        const check = evt.target.checked;
        for (const map of this.mapping)
            if (map.supported)
                map.selected = check;
        this.requestUpdate('mapping');
    }
    initMapping() {
        if (!this.mapping)
            this.mapping = Array.from(this.doc.querySelectorAll('Private[type="IEC_60870_5_104"]'))
                .map(getMapping)
                .filter(map => map);
    }
    onFledgePort(evt) {
        this.fledgePort = evt.target.value;
    }
    onFledgeIp(evt) {
        this.fledgeIP = evt.target.value;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onConnection() {
        fledgePing(this.fledgeIP, this.fledgePort);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onApplicationType(evt) {
        this.selectedApplicationType = evt.target.value;
    }
    render() {
        this.initMapping();
        return x ` <section>
      <div
        class="box settings"
        style="display: flex; flex-direction: column; margin: 10px;"
      >
        <div style="display: flex; flex-direction: row; margin: 5px;">
          <label style="margin: 8px;">Fledge IP:</label>
          <input
            type="text"
            placeholder="192.168.0.200"
            .value="${this.fledgeIP}"
            @input="${(evt) => this.onFledgeIp(evt)}"
          />
          <label style="margin: 8px;">Fledge Port:</label>
          <input
            type="text"
            placeholder="8081"
            .value="${this.fledgePort}"
            @input="${(evt) => this.onFledgePort(evt)}"
          />
          <button
            style="margin-left: 5px;"
            @click="${() => this.onConnection()}"
          >
            Ping Fledge
          </button>
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
          ${m(this.renderNorthSelection(), x `<span>Loading...</span>`)}
          <label style="margin: 8px;">Status:</label>
          <input class="status north" type="text" disabled />
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
          ${m(this.renderSouthSelection(), x `<span>Loading...</span>`)}
          <label style="margin: 8px;">Status:</label>
          <input
            style="margin: 5px"
            class="status south"
            type="text"
            disabled
          />
          <button
            style="margin: 5px"
            ?disabled=${!this.southConfigPossible}
            @click="${() => pushConfigToSouth(this.mapping, {
            address: this.fledgeIP,
            port: this.fledgePort,
            name: this.selectedSouthPlugin,
        })}"
          >
            Push selection to IEC 61850 south
          </button>
        </div>
      </div>
      <div
        class="box application"
        style="display: flex; flex-direction: column; margin: 10px;"
      >
        <div style="display: flex; flex-direction: row; margin: 5px;">
          <label style="margin: 8px;">IEC 61850 Server IP:</label>
          <input
            type="text"
            placeholder="192.168.0.200"
            .value="${this.fledgeIP}"
            @input="${(evt) => this.onFledgeIp(evt)}"
          />
          <label style="margin: 8px;">IEc 61850 Server Port:</label>
          <input
            type="text"
            placeholder="8081"
            .value="${this.fledgePort}"
            @input="${(evt) => this.onFledgePort(evt)}"
          />
        </div>
        <div style="display: flex; flex-direction: row; margin: 5px;">
          <label style="margin: 8px;">IEC 61850 service type:</label>
          <select
            value="${this.selectedApplicationType}"
            @input="${(evt) => this.onApplicationType(evt)}"
          >
            <option>Polling</option>
            <option>Static Reports</option>
            <option>Dynamic Reports</option>
          </select>
          <select
            class="${o$1({
            hide: this.selectedApplicationType !== 'Dynamic Reports',
        })}"
            value="${this.selectedApplicationType}"
            @input="${(evt) => this.onApplicationType(evt)}"
          >
            <option>Polling</option>
            <option>Static Reports</option>
            <option>Dynamic Reports</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="row" colspan="1"></th>
            <th scope="row" colspan="2" class="vlast">IEC 61850-6</th>
            <th scope="row" colspan="3">IEC 60870-5-104</th>
          </tr>
          <tr class="blast">
            <th scope="col">
              <input
                type="checkbox"
                checked
                @input="${(evt) => this.checkAll(evt)}"
              />
            </th>
            <th scope="col">CDC</th>
            <th scope="col" class="vlast">reference</th>
            <th scope="col">casdu</th>
            <th scope="col">ioa</th>
            <th scope="col">ti</th>
          </tr>
        </thead>
        <tbody>
          ${this.mapping.map(map => x `<tr>
                <td>
                  <input
                    type="checkbox"
                    ?checked=${map.selected}
                    ?disabled=${!map.supported}
                    @input="${(evt) => this.check(evt, map)}"
                  />
                </td>
                <td>${map.iec61850.cdc}</td>
                <td class="last">${map.iec61850.ref}</td>
                <td>${map.iec104.casdu}</td>
                <td>${map.iec104.ioa}</td>
                <td>${map.iec104.ti}</td>
              </tr>`)}
        </tbody>
      </table>
    </section>`;
    }
}
Fledgepower61850to104.styles = i$6 `
    div.box {
      border: 2px solid black;
    }

    .hide {
      display: none;
    }

    table {
      margin: 10;
      border-spacing: 0;
    }

    th.vlast {
      border-right: 2pt solid black;
    }

    tr.blast > th {
      border-bottom: 2pt solid black;
    }

    th {
      border-bottom: 1pt solid black;
      padding: 10px;
    }

    td.last {
      border-right: 2pt solid black;
    }

    td {
      border-bottom: 1pt solid black;
      padding: 10px;
    }
  `;
__decorate([
    n$3({ attribute: false })
], Fledgepower61850to104.prototype, "doc", void 0);
__decorate([
    n$3({ type: Number })
], Fledgepower61850to104.prototype, "editCount", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "mapping", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "southConfigPossible", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "selectedSouthPlugin", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "selectedNorthPlugin", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "selectedApplicationType", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "selectedReportControl", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "fledgeIP", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "fledgePort", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "serverIP", void 0);
__decorate([
    t$1()
], Fledgepower61850to104.prototype, "serverPort", void 0);
__decorate([
    i$3('.status.north')
], Fledgepower61850to104.prototype, "statusNorth", void 0);
__decorate([
    i$3('.status.south')
], Fledgepower61850to104.prototype, "statusSouth", void 0);

export { Fledgepower61850to104 as default };
//# sourceMappingURL=fledgepower-s61850n104.js.map
