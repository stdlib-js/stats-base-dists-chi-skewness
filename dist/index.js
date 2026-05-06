"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=t(function(p,u){
var v=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/stats-base-dists-chi-variance/dist'),q=require('@stdlib/stats-base-dists-chi-mean/dist'),c=require('@stdlib/math-base-special-sqrt/dist');function g(e){var r,i,a,s;return v(e)||e<=0?NaN:(s=q(e),a=c(m(e)),i=a*a,r=i*a,s/r*(1-2*i))}u.exports=g
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
