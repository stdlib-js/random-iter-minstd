// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function j(p){var f,c,u,g,b;if(arguments.length>0){if(!r(p))throw new TypeError(h("0Px2h",p));if(f=n(p,1),d(f,"normalized")&&!i(f.normalized))throw new TypeError(h("0Px30","normalized",f.normalized));if(d(f,"iter")){if(!o(f.iter))throw new TypeError(h("0Px35","iter",f.iter))}else f.iter=m;u=l(f),!1!==f.copy&&(f.state=u.state)}else u=l(),f={iter:m,state:u.state};return f.normalized&&(u=u.normalized),b=0,e(c={},"next",v),e(c,"return",x),t(c,"seed",w),t(c,"seedLength",z),s(c,"state",E,T),t(c,"stateLength",L),t(c,"byteLength",P),a&&e(c,a,y),c;function v(){return b+=1,g||b>f.iter?{done:!0}:{value:u(),done:!1}}function x(e){return g=!0,arguments.length?{value:e,done:!0}:{done:!0}}function y(){return j(f)}function w(){return u.seed}function z(){return u.seedLength}function L(){return u.stateLength}function P(){return u.byteLength}function E(){return u.state}function T(e){u.state=e}}export{j as default};
//# sourceMappingURL=index.mjs.map
