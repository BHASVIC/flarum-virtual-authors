module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=17)}([,function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}r.d(e,"a",(function(){return o}))},,,function(t,e){t.exports=flarum.core.compat["common/app"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(5),o=r.n(n),u=r(2),i=r(1),a=r.n(i),c=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).displayName=a.a.attribute("displayName"),e.description=a.a.attribute("description"),e.creditedDiscussions=a.a.hasMany("discussions"),e}return Object(u.a)(e,t),e}(a.a),s=r(6),f=r.n(s);function l(){o.a.store.models.virtualAuthors=c,f.a.prototype.virtualAuthors=a.a.hasMany("virtualAuthors")}},,,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(7);app.initializers.add("davwheat/manual-blog-authors",(function(){Object(n.a)()}))}]);
//# sourceMappingURL=forum.js.map