module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)e.d(o,a,function(r){return t[r]}.bind(null,a));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=37)}([function(t,r){t.exports=flarum.core.compat["forum/app"]},,function(t,r){t.exports=flarum.core.compat["common/app"]},function(t,r,e){"use strict";function o(t,r){return(o=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function a(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,o(t,r)}e.d(r,"a",(function(){return a}))},function(t,r){t.exports=flarum.core.compat["common/components/Button"]},function(t,r){t.exports=flarum.core.compat["common/Model"]},function(t,r,e){t.exports=e(24)},function(t,r){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,r,e){"use strict";function o(t,r,e,o,a,n,i){try{var s=t[n](i),u=s.value}catch(t){return void e(t)}s.done?r(u):Promise.resolve(u).then(o,a)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(a,n){var i=t.apply(r,e);function s(t){o(i,a,n,s,u,"next",t)}function u(t){o(i,a,n,s,u,"throw",t)}s(void 0)}))}}e.d(r,"a",(function(){return a}))},function(t,r){t.exports=flarum.core.compat["common/extend"]},function(t,r){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,r){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,r){t.exports=flarum.core.compat["common/utils/extractText"]},function(t,r){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,r){t.exports=flarum.core.compat["common/Component"]},function(t,r){t.exports=flarum.core.compat["common/utils/withAttr"]},function(t,r,e){"use strict";e.d(r,"a",(function(){return l}));var o=e(2),a=e.n(o),n=e(9),i=e(7),s=e.n(i),u=e(17),c=e.n(u);function l(){Object(n.extend)(s.a.prototype,"badges",(function(t){var r;if(a.a.forum.attribute("davwheat-virtual-authors.discussion-badge")&&null!=(r=this.virtualAuthors())&&r.length){var e=this.virtualAuthors().length>1;t.add("hasVirtualAuthor",m(c.a,{type:"hasVirtualAuthor",icon:e?"fas fa-users":"fas fa-user",label:a.a.translator.trans("davwheat-virtual-authors.lib.discussion-badge",{count:this.virtualAuthors().length})}))}}))}},function(t,r){t.exports=flarum.core.compat["common/components/Badge"]},function(t,r){t.exports=flarum.core.compat["common/components/Modal"]},function(t,r,e){"use strict";e.d(r,"a",(function(){return h}));var o=e(2),a=e.n(o),n=e(3),i=e(5),s=e.n(i),u=function(t){function r(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).displayName=s.a.attribute("displayName"),r.description=s.a.attribute("description"),r.credit=s.a.attribute("credit"),r.discussionCount=s.a.attribute("discussionCount"),r.creditedDiscussions=s.a.hasMany("discussions"),r}return Object(n.a)(r,t),r}(s.a),c=e(7),l=e.n(c);function h(){a.a.store.models.virtualAuthors=u,l.a.prototype.virtualAuthors=s.a.hasMany("virtualAuthors"),l.a.prototype.canSetVirtualAuthors=s.a.attribute("canSetVirtualAuthors")}},function(t,r){t.exports=flarum.core.compat["forum/components/DiscussionPage"]},function(t,r){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,r){t.exports=flarum.core.compat["common/utils/classList"]},function(t,r){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,r,e){var o=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",n=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function u(t,r,e,o){var a=r&&r.prototype instanceof h?r:h,n=Object.create(a.prototype),i=new _(o||[]);return n._invoke=function(t,r,e){var o="suspendedStart";return function(a,n){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw n;return L()}for(e.method=a,e.arg=n;;){var i=e.delegate;if(i){var s=b(i,e);if(s){if(s===l)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===o)throw o="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o="executing";var u=c(t,r,e);if("normal"===u.type){if(o=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(o="completed",e.method="throw",e.arg=u.arg)}}}(t,e,i),n}function c(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function h(){}function m(){}function d(){}var f={};s(f,a,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(V([])));v&&v!==r&&e.call(v,a)&&(f=v);var y=d.prototype=h.prototype=Object.create(f);function g(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){var o;this._invoke=function(a,n){function i(){return new r((function(o,i){!function o(a,n,i,s){var u=c(t[a],t,n);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):r.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,s)}))}s(u.arg)}(a,n,o,i)}))}return o=o?o.then(i,i):i()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var o=c(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,l;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function V(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=d,s(y,"constructor",d),s(d,"constructor",m),m.displayName=s(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,n,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,o,a,n){void 0===n&&(n=Promise);var i=new w(u(r,e,o,a),n);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),s(y,i,"Generator"),s(y,a,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=V,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return i.type="throw",i.arg=t,r.next=e,o&&(r.method="next",r.arg=void 0),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a],i=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var s=e.call(n,"catchLoc"),u=e.call(n,"finallyLoc");if(s&&u){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(s){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(t,r){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=r,n?(this.method="next",this.next=n.finallyLoc,l):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var a=o.arg;x(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:V(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},function(t,r){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,r){t.exports=flarum.core.compat["common/utils/string"]},function(t,r){t.exports=flarum.core.compat["common/components/Link"]},function(t,r){t.exports=flarum.core.compat["forum/components/DiscussionList"]},function(t,r){t.exports=flarum.core.compat["common/utils/stringToColor"]},function(t,r){t.exports=flarum.core.compat["common/components/Page"]},function(t,r){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,r){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,r){t.exports=flarum.core.compat["forum/states/DiscussionListState"]},function(t,r){t.exports=flarum.core.compat["v17development/blog/components/BlogPostController"]},function(t,r){t.exports=flarum.core.compat["v17development/blog/pages/BlogItem"]},,function(t,r,e){"use strict";e.r(r);var o=e(0),a=e.n(o),n=e(9),i=e(4),s=e.n(i),u=e(25),c=e.n(u),l=e(20),h=e.n(l),d=e(19),f=e(16),p=e(8),v=e(3),y=e(6),g=e.n(y),w=e(2),b=e.n(w),A=e(13),x=e.n(A),_=e(18),V=e.n(_),L=e(21),N=e.n(L),O=e(15),k=e.n(O),j=e(26),P=function(t){function r(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).attrs=void 0,r.virtualAuthors=null,r.selectedVirtualAuthors=[],r.filterString="",r.timeoutKey=null,r}Object(v.a)(r,t);var e=r.prototype;return e.filterVirtualAuthors=function(){var t=Object(p.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.store.find("virtualAuthors",{filter:{displayName:this.filterString},sort:"displayName"});case 2:this.virtualAuthors=t.sent,m.redraw();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.oninit=function(r){t.prototype.oninit.call(this,r),this.selectedVirtualAuthors=this.attrs.discussion.virtualAuthors().map((function(t){return{id:t.id(),credit:t.credit()}})),this.loadData()},e.className=function(){return"SetVirtualAuthorsModal"},e.title=function(){return b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.title")},e.content=function(){var t,r=this;return null===this.virtualAuthors?m("div",{class:"Modal-body"},m(x.a,null)):m("div",{class:"Modal-body"},m("h3",null,b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.existing")),m("div",{className:"Form-group SelectedVirtualAuthorList"},0===this.selectedVirtualAuthors.length&&m("div",{class:"Placeholder"},m("p",null,b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.none_existing"))),this.selectedVirtualAuthors.map((function(t){return r.selectedVirtualAuthorItem(t)}))),m("h3",null,b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.add_new")),m("div",{class:"Form-group"},m("label",{for:"virtualAuthorFilterTb",class:"sr-only"},b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.search")),m("input",{class:"FormControl",id:"virtualAuthorFilterTb",type:"text",oninput:k()("value",(function(t){r.filterString=t,r.timeoutKey&&clearTimeout(r.timeoutKey),r.timeoutKey=setTimeout((function(){return r.filterVirtualAuthors()}),400)})),placeholder:b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.search")})),m("div",{className:"Form-group VirtualAuthorList"},null==(t=this.virtualAuthors)?void 0:t.map((function(t){return r.virtualAuthorListItem(t)}))),m(s.a,{class:"Button Button--primary",type:"submit"},b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.save")))},e.isVirtualAuthorSelected=function(t){return this.selectedVirtualAuthors.some((function(r){return r.id===t.id()}))},e.addVirtualAuthor=function(t){this.selectedVirtualAuthors.push({id:t.id(),credit:""}),m.redraw()},e.removeVirtualAuthor=function(t){this.selectedVirtualAuthors=this.selectedVirtualAuthors.filter((function(r){return r.id!==t.id()})),m.redraw()},e.virtualAuthorListItem=function(t){var r=this;return m("div",{className:"VirtualAuthorListItem",key:t.id()},m("div",{className:"VirtualAuthorListItem-displayName"},t.displayName()),m("div",{className:"VirtualAuthorListItem-description"},Object(j.truncate)(t.description(),100)||b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.no_description")),this.isVirtualAuthorSelected(t)?m(N.a,{text:b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.virtual_author_exists")},m(s.a,{disabled:!0,class:"Button",icon:"fas fa-plus",onclick:function(){return r.addVirtualAuthor(t)}},b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.added_button"))):m(s.a,{class:"Button",icon:"fas fa-plus",onclick:function(){return r.addVirtualAuthor(t)}},b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.add_button")))},e.selectedVirtualAuthorItem=function(t){var r=this,e=b.a.store.getById("virtualAuthors",t.id);return m("div",{className:"SelectedVirtualAuthorListItem",key:t.id},m("div",{className:"SelectedVirtualAuthorListItem-displayName"},e.displayName()),m("div",{className:"SelectedVirtualAuthorListItem-credit"},m("input",{class:"FormControl",type:"text",value:t.credit,oninput:k()("value",(function(r){return t.credit=r})),placeholder:b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.credit_placeholder")})),m(s.a,{class:"Button",icon:"fas fa-minus",onclick:function(){return r.removeVirtualAuthor(e)}},b.a.translator.trans("davwheat-virtual-authors.forum.set_modal.delete_button")))},e.loadData=function(){var t=Object(p.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.virtualAuthors=null,m.redraw(),t.prev=2,t.next=5,b.a.store.find("virtualAuthors");case 5:this.virtualAuthors=t.sent,m.redraw(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(2),this.onerror(t.t0),console.error(t.t0),m.redraw();case 14:case"end":return t.stop()}}),t,this,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),e.onsubmit=function(t){this.save(),t.preventDefault()},e.save=function(){var t=Object(p.a)(g.a.mark((function t(){var r,e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,m.redraw(),r={virtualAuthorsCredit:this.selectedVirtualAuthors.reduce((function(t,r){return t[r.id]=r.credit,t}),{}),relationships:{virtualAuthors:this.selectedVirtualAuthors.map((function(t){return b.a.store.getById("virtualAuthors",t.id)}))||[]}},t.prev=3,t.next=6,this.attrs.discussion.save(r);case 6:e=t.sent,b.a.store.pushPayload(e),this.hide(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),this.onerror(t.t0),console.error(t.t0);case 15:case"end":return t.stop()}}),t,this,[[3,11]])})));return function(){return t.apply(this,arguments)}}(),r}(V.a),I=e(14),S=e.n(I),T=e(27),D=e.n(T),E=e(10),C=e.n(E),B=e(22),M=e.n(B),F=function(t){function r(){return t.apply(this,arguments)||this}Object(v.a)(r,t);var e=r.prototype;return e.view=function(){return m("li",null,this.wrapWithLink(this.items().toArray()))},e.className=function(){return M()("VirtualAuthorPanelItem",{"VirtualAuthorPanelItem--clickable":!!this.link()})},e.wrapWithLink=function(t){var r=this.link();return r?m(N.a,{position:this.attrs.tooltipDirection||"top",text:a.a.translator.trans("davwheat-virtual-authors.forum.virtual_authors_panel.item_link_tooltip",{displayName:this.attrs.virtualAuthor.displayName()})},m(D.a,{class:this.className(),href:r},t)):(t.attrs.class=this.className(),t)},e.link=function(){return!!a.a.forum.attribute("davwheat-virtual-authors.link-to-virtual-authors-from-discussion")&&a.a.route("virtualAuthors.author",{slug:this.attrs.virtualAuthor.id()})},e.items=function(){var t=new C.a,r=this.attrs.virtualAuthor;return t.add("name",m("h3",{class:"VirtualAuthorPanelItem-displayName"},r.displayName()),100),r.credit()&&t.add("credit",m("p",{class:"VirtualAuthorPanelItem-credit"},r.credit()),50),t},r}(S.a),H=e(11),G=e.n(H),R=function(t){function r(){return t.apply(this,arguments)||this}return Object(v.a)(r,t),r.prototype.view=function(){var t=this.attrs.discussion.virtualAuthors();return m("aside",{class:M()("VirtualAuthorPanel",{"VirtualAuthorPanel--sidebar":this.attrs.isSidebar})},m("h2",{class:"VirtualAuthorPanel-Title"},G()("fas fa-user-edit")," ",a.a.translator.trans("davwheat-virtual-authors.forum.virtual_authors_panel.heading")),!t&&m("p",{class:"VirtualAuthorPanel-error"},G()("fas fa-exclamation-circle")," ",a.a.translator.trans("davwheat-virtual-authors.forum.virtual_authors_panel.error")),m("ul",{class:"VirtualAuthorPanel-List"},t&&t.map((function(t){return m(F,{virtualAuthor:t})}))))},r}(S.a);function K(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var q=e(12),W=e.n(q),Y=e(28),z=e.n(Y),J=e(29),Q=e.n(J),U=e(23),X=e.n(U),Z=e(30),tt=e.n(Z),rt=e(31),et=e.n(rt),ot=e(32),at=e.n(ot),nt=e(33),it=function(t){function r(r,e,o){var a;return(a=t.call(this,{},r)||this).preloadedApiDocument=void 0,a.virtualAuthorId=void 0,a.virtualAuthorId=e,a.preloadedApiDocument=o,a.initialLoading=!0,a}Object(v.a)(r,t);var e=r.prototype;return e.loadPage=function(r){return void 0===r&&(r=1),this.preloadedApiDocument?Promise.resolve(this.preloadedApiDocument):t.prototype.__proto__.loadPage.call(this,r)},e.parseResults=function(r,e){this.preloadedApiDocument=null,t.prototype.parseResults.call(this,r,e)},e.requestParams=function(){var r=t.prototype.requestParams.call(this);return r.filter["virtual-author"]=this.virtualAuthorId,r},r}(e.n(nt).a),st=function(t){function r(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).listState=void 0,r.lastDiscussion=void 0,r.bodyClass=void 0,r.scrollTopOnCreate=void 0,r}Object(v.a)(r,t);var e,o,n,i=r.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),this.listState=new it(1,this.attrs.slug,a.a.preloadedApiDocument()),a.a.previous.matches(h.a)&&(this.lastDiscussion=a.a.previous.get("discussion")),a.a.previous.matches(r)&&this.listState.clear(),this.listState.refreshParams(a.a.search.params(),m.route.param("page")),a.a.history.push("index",a.a.translator.trans("core.forum.header.back_to_index_tooltip")),this.bodyClass="App--index",this.scrollTopOnCreate=!1},i.oncreate=function(r){t.prototype.oncreate.call(this,r),this.setTitle();var e=a.a.cache.heroHeight,o=a.a.cache.heroHeight=this.$(".Hero").outerHeight()||0,n=a.a.cache.scrollTop;if($("#app").css("min-height",$(window).height()+o),null!==a.a.previous.type&&(this.lastDiscussion?$(window).scrollTop(n-e+o):$(window).scrollTop(0),this.lastDiscussion)){var i=this.$('li[data-id="'+this.lastDiscussion.id()+'"] .DiscussionListItem');if(i.length){var s=$("#header").outerHeight(),u=$(window).height(),c=i.offset().top,l=c+i.outerHeight();(c<n+s||l>n+u)&&$(window).scrollTop(c-s)}}},i.onbeforeremove=function(r){t.prototype.onbeforeremove.call(this,r),a.a.cache.scrollTop=$(window).scrollTop()},i.onremove=function(r){t.prototype.onremove.call(this,r),$("#app").css("min-height","")},i.hero=function(){var t=this.virtualAuthor;return m("div",{class:"VirtualAuthorHero Hero",style:{"--hero-bg":"#"+Q()(t.displayName())}},m("div",{class:"darkenBackground"},m("div",{class:"container"},m("div",{class:"VirtualAuthorHero-profile"},m("h2",{class:"VirtualAuthorHero-displayName"},t.displayName()),m("p",{class:"VirtualAuthorHero-description"},t.description())),m("ul",{class:"VirtualAuthorHero-meta"},X()(this.heroMetaItems().toArray())))))},i.heroMetaItems=function(){var t=new C.a,r=this.virtualAuthor;return t.add("discussionCount",m("span",null,G()("fas fa-comments")," ",a.a.translator.trans("davwheat-virtual-authors.forum.virtual_author_page.discussion_count",{count:r.discussionCount()})),100),t},i.setTitle=function(){a.a.setTitle(W()(a.a.translator.trans("davwheat-virtual-authors.forum.virtual_author_page.meta_title",{displayName:this.virtualAuthor.displayName()}))),a.a.setTitleCount(0)},i.view=function(){return m("div",{className:"IndexPage VirtualAuthorPage"},this.hero(),m("div",{className:"container"},m("div",{className:"IndexPage-results"},m("h3",{class:"VirtualAuthorPage-title"},a.a.translator.trans("davwheat-virtual-authors.forum.virtual_author_page.credited_discussions",{displayName:this.virtualAuthor.displayName()})),m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},X()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},X()(this.actionItems().toArray()))),m(z.a,{state:this.listState}))))},i.navItems=function(){var t=new C.a,r=a.a.search.stickyParams();return t.add("allDiscussions",m(at.a,{href:a.a.route("index",r),icon:"far fa-comments"},a.a.translator.trans("core.forum.index.all_discussions_link")),100),t},i.viewItems=function(){var t=new C.a,r=this.listState.sortMap(),e=Object.keys(r).reduce((function(t,r){return t[r]=a.a.translator.trans("core.forum.index_sort."+r+"_button"),t}),{});return t.add("sort",m(et.a,{buttonClassName:"Button",label:e[a.a.search.params().sort]||Object.keys(r).map((function(t){return e[t]}))[0],accessibleToggleLabel:a.a.translator.trans("core.forum.index_sort.toggle_dropdown_accessible_label")},Object.keys(e).map((function(t){var o=e[t],n=(a.a.search.params().sort||Object.keys(r)[0])===t;return m(s.a,{icon:!n||"fas fa-check",onclick:a.a.search.changeSort.bind(a.a.search,t),active:n},o)}))),100),t},i.actionItems=function(){var t=this,r=new C.a;return r.add("refresh",m(s.a,{title:a.a.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){t.listState.refresh(),a.a.session.user&&(a.a.store.find("users",a.a.session.user.id()),m.redraw())}}),100),r},e=r,(o=[{key:"virtualAuthor",get:function(){return a.a.store.getById("virtualAuthors",this.attrs.slug)}}])&&K(e.prototype,o),n&&K(e,n),r}(tt.a),ut=e(34),ct=e.n(ut),lt=e(35),ht=e.n(lt);a.a.initializers.add("davwheat/manual-blog-authors",(function(){Object(d.a)(),Object(f.a)(),a.a.routes["virtualAuthors.author"]={path:"/author/:slug",resolver:{onmatch:function(t){if(!a.a.forum.attribute("davwheat-virtual-authors.link-to-virtual-authors-from-discussion"))throw new Error;return st}}},Object(n.extend)(c.a,"moderationControls",(function(t,r){r.canSetVirtualAuthors()&&t.add("setVirtualAuthors",m(s.a,{icon:"fas fa-ghost",onclick:function(){a.a.modal.show(P,{discussion:r})}},a.a.translator.trans("davwheat-virtual-authors.forum.discussion_controls.set_virtual_authors")))})),Object(n.extend)(h.a.prototype,"pageContent",(function(t){a.a.forum.attribute("davwheat-virtual-authors.authors-in-sidebar")||this.discussion.virtualAuthors().length&&t.add("virtualAuthors",m("div",{className:"container"},m(R,{discussion:this.discussion})),50)})),Object(n.extend)(h.a.prototype,"sidebarItems",(function(t){a.a.forum.attribute("davwheat-virtual-authors.authors-in-sidebar")&&this.discussion.virtualAuthors().length&&t.add("virtualAuthors",m(R,{isSidebar:!0,discussion:this.discussion}),125)})),"v17development-blog"in flarum.extensions&&(Object(n.extend)(ct.a.prototype,"manageArticleButtons",(function(t){var r=this;this.attrs.article.canSetVirtualAuthors()&&t.add("setVirtualAuthors",m(s.a,{icon:"fas fa-ghost",onclick:function(){a.a.modal.show(P,{discussion:r.attrs.article})}},a.a.translator.trans("davwheat-virtual-authors.forum.discussion_controls.set_virtual_authors")))})),Object(n.extend)(ht.a.prototype,"postItems",(function(t){this.loading||this.article.virtualAuthors().length&&t.add("virtualAuthors",m(R,{discussion:this.article}),70)})))}))}]);