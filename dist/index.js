"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=t(function(p,u){
var v=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/stats-base-dists-chi-variance/dist'),q=require('@stdlib/stats-base-dists-chi-mean/dist'),c=require('@stdlib/math-base-special-sqrt/dist');function g(e){var r,a,i,s;return v(e)||e<=0?NaN:(s=q(e),i=c(m(e)),a=i*i,r=a*i,s/r*(1-2*a))}u.exports=g
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
