// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function h(p){var f,c,u,v,g;if(arguments.length>0){if(!r(p))throw new TypeError(j("0q72V,FD",p));if(f=n({},p),d(f,"normalized")&&!i(f.normalized))throw new TypeError(j("0q72o,GE","normalized",f.normalized));if(d(f,"iter")){if(!o(f.iter))throw new TypeError(j("0q72t,G9","iter",f.iter))}else f.iter=m;u=l(f),!1!==f.copy&&(f.state=u.state)}else u=l(),f={iter:m,state:u.state};return f.normalized&&(u=u.normalized),g=0,e(c={},"next",b),e(c,"return",x),t(c,"seed",w),t(c,"seedLength",z),s(c,"state",q,T),t(c,"stateLength",L),t(c,"byteLength",E),a&&e(c,a,y),c;function b(){return g+=1,v||g>f.iter?{done:!0}:{value:u(),done:!1}}function x(e){return v=!0,arguments.length?{value:e,done:!0}:{done:!0}}function y(){return h(f)}function w(){return u.seed}function z(){return u.seedLength}function L(){return u.stateLength}function E(){return u.byteLength}function q(){return u.state}function T(e){u.state=e}}export{h as default};
//# sourceMappingURL=index.mjs.map
