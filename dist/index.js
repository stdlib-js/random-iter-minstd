"use strict";var x=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var h=x(function(V,m){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),i=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),A=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),E=require('@stdlib/object-assign/dist'),P=require('@stdlib/assert-is-plain-object/dist'),R=require('@stdlib/assert-is-boolean/dist').isPrimitive,T=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/assert-has-own-property/dist'),d=require('@stdlib/constants-float64-max/dist'),g=require('@stdlib/random-base-minstd/dist').factory,l=require('@stdlib/symbol-iterator/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function c(n){var e,t,r,v,a;if(arguments.length>0){if(!P(n))throw new TypeError(s('0q72V',n));if(e=E({},n),f(e,"normalized")&&!R(e.normalized))throw new TypeError(s('0q72o',"normalized",e.normalized));if(f(e,"iter")){if(!T(e.iter))throw new TypeError(s('0q72t',"iter",e.iter))}else e.iter=d;r=g(e),e.copy!==!1&&(e.state=r.state)}else r=g(),e={iter:d,state:r.state};return e.normalized&&(r=r.normalized),a=0,t={},u(t,"next",p),u(t,"return",q),i(t,"seed",L),i(t,"seedLength",b),A(t,"state",z,O),i(t,"stateLength",S),i(t,"byteLength",w),l&&u(t,l,y),t;function p(){return a+=1,v||a>e.iter?{done:!0}:{value:r(),done:!1}}function q(o){return v=!0,arguments.length?{value:o,done:!0}:{done:!0}}function y(){return c(e)}function L(){return r.seed}function b(){return r.seedLength}function S(){return r.stateLength}function w(){return r.byteLength}function z(){return r.state}function O(o){r.state=o}}m.exports=c
});var j=h();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map