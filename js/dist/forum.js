(()=>{var t={195:(t,r,e)=>{t.exports=e(236)},236:t=>{var r=function(t){"use strict";var r,e=Object.prototype,o=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var a=r&&r.prototype instanceof v?r:v,n=Object.create(a.prototype),i=new P(o||[]);return n._invoke=function(t,r,e){var o=h;return function(a,n){if(o===d)throw new Error("Generator is already running");if(o===f){if("throw"===a)throw n;return k()}for(e.method=a,e.arg=n;;){var i=e.delegate;if(i){var s=L(i,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===h)throw o=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var u=c(t,r,e);if("normal"===u.type){if(o=e.done?f:m,u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(o=f,e.method="throw",e.arg=u.arg)}}}(t,e,i),n}function c(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",m="suspendedYield",d="executing",f="completed",p={};function v(){}function y(){}function g(){}var w={};u(w,n,(function(){return this}));var A=Object.getPrototypeOf,b=A&&A(A(S([])));b&&b!==e&&o.call(b,n)&&(w=b);var _=g.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function V(t,r){function e(a,n,i,s){var u=c(t[a],t,n);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,s)}),(function(t){e("throw",t,i,s)})):r.resolve(h).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,s)}))}s(u.arg)}var a;this._invoke=function(t,o){function n(){return new r((function(r,a){e(t,o,r,a)}))}return a=a?a.then(n,n):n()}}function L(t,e){var o=t.iterator[e.method];if(o===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=c(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function I(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:r,done:!0}}return y.prototype=g,u(_,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(V.prototype),u(V.prototype,i,(function(){return this})),t.AsyncIterator=V,t.async=function(r,e,o,a,n){void 0===n&&(n=Promise);var i=new V(l(r,e,o,a),n);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(_),u(_,s,"Generator"),u(_,n,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(o,a){return s.type="throw",s.arg=t,e.next=o,a&&(e.method="next",e.arg=r),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var n=a;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=r,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var o=e.completion;if("throw"===o.type){var a=o.arg;I(e)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:S(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=r),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function e(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return t[o](n,n.exports,e),n.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";e.r(o),e.d(o,{components:()=>kt,pages:()=>Tt,states:()=>Ot});const t=flarum.core.compat["forum/app"];var r=e.n(t);const a=flarum.core.compat["common/extend"],n=flarum.core.compat["common/components/Button"];var i=e.n(n);const s=flarum.core.compat["forum/utils/DiscussionControls"];var u=e.n(s);const l=flarum.core.compat["forum/components/DiscussionPage"];var c=e.n(l);const h=flarum.core.compat["forum/components/IndexPage"];var d=e.n(h);const f=flarum.core.compat["common/app"];var p=e.n(f);function v(t,r){return v=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},v(t,r)}function y(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,v(t,r)}const g=flarum.core.compat["common/Model"];var w=e.n(g),A=function(t){function r(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).displayName=w().attribute("displayName"),r.description=w().attribute("description"),r.credit=w().attribute("credit"),r.discussionCount=w().attribute("discussionCount"),r.creditedDiscussions=w().hasMany("discussions"),r}return y(r,t),r}(w());const b=flarum.core.compat["common/models/Discussion"];var _=e.n(b);const x=flarum.core.compat["common/components/Badge"];var V=e.n(x);function L(t,r,e,o,a,n,i){try{var s=t[n](i),u=s.value}catch(t){return void e(t)}s.done?r(u):Promise.resolve(u).then(o,a)}function N(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var n=t.apply(r,e);function i(t){L(n,o,a,i,s,"next",t)}function s(t){L(n,o,a,i,s,"throw",t)}i(void 0)}))}}var I=e(195),P=e.n(I);const S=flarum.core.compat["common/components/LoadingIndicator"];var k=e.n(S);const T=flarum.core.compat["common/components/Modal"];var O=e.n(T);const D=flarum.core.compat["common/components/Tooltip"];var j=e.n(D);const C=flarum.core.compat["common/utils/withAttr"];var E=e.n(C);const B=flarum.core.compat["common/utils/string"];var F=function(t){function r(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).virtualAuthors=null,r.selectedVirtualAuthors=[],r.filterString="",r.timeoutKey=null,r}y(r,t);var e=r.prototype;return e.filterVirtualAuthors=function(){var t=N(P().mark((function t(){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p().store.find("virtualAuthors",{filter:{displayName:this.filterString},sort:"displayName"});case 2:this.virtualAuthors=t.sent,m.redraw();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.oninit=function(r){t.prototype.oninit.call(this,r),this.selectedVirtualAuthors=this.attrs.discussion.virtualAuthors().map((function(t){return{id:t.id(),credit:t.credit()}})),this.loadData()},e.className=function(){return"SetVirtualAuthorsModal"},e.title=function(){return p().translator.trans("davwheat-virtual-authors.forum.set_modal.title")},e.content=function(){var t,r=this;return null===this.virtualAuthors?m("div",{class:"Modal-body"},m(k(),null)):m("div",{class:"Modal-body"},m("h3",null,p().translator.trans("davwheat-virtual-authors.forum.set_modal.existing")),m("div",{className:"Form-group SelectedVirtualAuthorList"},0===this.selectedVirtualAuthors.length&&m("div",{class:"Placeholder"},m("p",null,p().translator.trans("davwheat-virtual-authors.forum.set_modal.none_existing"))),this.selectedVirtualAuthors.map((function(t){return r.selectedVirtualAuthorItem(t)}))),m("h3",null,p().translator.trans("davwheat-virtual-authors.forum.set_modal.add_new")),m("div",{class:"Form-group"},m("label",{for:"virtualAuthorFilterTb",class:"sr-only"},p().translator.trans("davwheat-virtual-authors.forum.set_modal.search")),m("input",{class:"FormControl",id:"virtualAuthorFilterTb",type:"text",oninput:E()("value",(function(t){r.filterString=t,r.timeoutKey&&clearTimeout(r.timeoutKey),r.timeoutKey=setTimeout((function(){return r.filterVirtualAuthors()}),400)})),placeholder:p().translator.trans("davwheat-virtual-authors.forum.set_modal.search")})),m("div",{className:"Form-group VirtualAuthorList"},null==(t=this.virtualAuthors)?void 0:t.map((function(t){return r.virtualAuthorListItem(t)}))),m(i(),{class:"Button Button--primary",type:"submit"},p().translator.trans("davwheat-virtual-authors.forum.set_modal.save")))},e.isVirtualAuthorSelected=function(t){return this.selectedVirtualAuthors.some((function(r){return r.id===t.id()}))},e.addVirtualAuthor=function(t){this.selectedVirtualAuthors.push({id:t.id(),credit:""}),m.redraw()},e.removeVirtualAuthor=function(t){this.selectedVirtualAuthors=this.selectedVirtualAuthors.filter((function(r){return r.id!==t.id()})),m.redraw()},e.virtualAuthorListItem=function(t){var r=this;return m("div",{className:"VirtualAuthorListItem",key:t.id()},m("div",{className:"VirtualAuthorListItem-displayName"},t.displayName()),m("div",{className:"VirtualAuthorListItem-description"},(0,B.truncate)(t.description(),100)||p().translator.trans("davwheat-virtual-authors.forum.set_modal.no_description")),this.isVirtualAuthorSelected(t)?m(j(),{text:p().translator.trans("davwheat-virtual-authors.forum.set_modal.virtual_author_exists")},m(i(),{disabled:!0,class:"Button",icon:"fas fa-plus",onclick:function(){return r.addVirtualAuthor(t)}},p().translator.trans("davwheat-virtual-authors.forum.set_modal.added_button"))):m(i(),{class:"Button",icon:"fas fa-plus",onclick:function(){return r.addVirtualAuthor(t)}},p().translator.trans("davwheat-virtual-authors.forum.set_modal.add_button")))},e.selectedVirtualAuthorItem=function(t){var r=this,e=p().store.getById("virtualAuthors",t.id);return m("div",{className:"SelectedVirtualAuthorListItem",key:t.id},m("div",{className:"SelectedVirtualAuthorListItem-displayName"},e.displayName()),m("div",{className:"SelectedVirtualAuthorListItem-credit"},m("input",{class:"FormControl",type:"text",value:t.credit,oninput:E()("value",(function(r){return t.credit=r})),placeholder:p().translator.trans("davwheat-virtual-authors.forum.set_modal.credit_placeholder")})),m(i(),{class:"Button",icon:"fas fa-minus",onclick:function(){return r.removeVirtualAuthor(e)}},p().translator.trans("davwheat-virtual-authors.forum.set_modal.delete_button")))},e.loadData=function(){var t=N(P().mark((function t(){return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.virtualAuthors=null,m.redraw(),t.prev=2,t.next=5,p().store.find("virtualAuthors");case 5:this.virtualAuthors=t.sent,m.redraw(),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(2),this.onerror(t.t0),console.error(t.t0),m.redraw();case 14:case"end":return t.stop()}}),t,this,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),e.onsubmit=function(t){this.save(),t.preventDefault()},e.save=function(){var t=N(P().mark((function t(){var r;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,m.redraw(),r={virtualAuthorsCredit:this.selectedVirtualAuthors.reduce((function(t,r){return t[r.id]=r.credit,t}),{}),relationships:{virtualAuthors:this.selectedVirtualAuthors.map((function(t){return p().store.getById("virtualAuthors",t.id)}))||[]}},t.prev=3,t.next=6,this.attrs.discussion.save(r);case 6:this.hide(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),this.onerror(t.t0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));return function(){return t.apply(this,arguments)}}(),r}(O());const M=flarum.core.compat["common/Component"];var H=e.n(M);const G=flarum.core.compat["common/components/Link"];var K=e.n(G);const R=flarum.core.compat["common/utils/ItemList"];var q=e.n(R);const W=flarum.core.compat["common/utils/classList"];var Y=e.n(W),z=function(t){function e(){return t.apply(this,arguments)||this}y(e,t);var o=e.prototype;return o.view=function(){return m("li",null,this.wrapWithLink(this.items().toArray()))},o.className=function(){return Y()("VirtualAuthorPanelItem",{"VirtualAuthorPanelItem--clickable":!!this.link()})},o.wrapWithLink=function(t){var e=this.link();return e?m(j(),{position:this.attrs.tooltipDirection||"top",text:r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_panel.item_link_tooltip",{displayName:this.attrs.virtualAuthor.displayName()})},m(K(),{class:this.className(),href:e},t)):(t.attrs.class=this.className(),t)},o.link=function(){return!!r().forum.attribute("davwheat-virtual-authors.link-to-virtual-authors-from-discussion")&&r().route("virtualAuthors.author",{slug:this.attrs.virtualAuthor.id()})},o.items=function(){var t=new(q()),r=this.attrs.virtualAuthor;return t.add("name",m("h3",{class:"VirtualAuthorPanelItem-displayName"},r.displayName()),100),r.credit()&&t.add("credit",m("p",{class:"VirtualAuthorPanelItem-credit"},r.credit()),50),t},e}(H());const U=flarum.core.compat["common/helpers/icon"];var J=e.n(U),Q=function(t){function e(){return t.apply(this,arguments)||this}return y(e,t),e.prototype.view=function(){var t=this.attrs.discussion.virtualAuthors();return m("aside",{class:Y()("VirtualAuthorPanel",{"VirtualAuthorPanel--sidebar":this.attrs.isSidebar})},m("h2",{class:"VirtualAuthorPanel-Title"},J()("fas fa-user-edit")," ",r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_panel.heading")),!t&&m("p",{class:"VirtualAuthorPanel-error"},J()("fas fa-exclamation-circle")," ",r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_panel.error")),m("ul",{class:"VirtualAuthorPanel-List"},t&&t.map((function(t){return m(z,{virtualAuthor:t})}))))},e}(H());function X(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,r,e){return r&&X(t.prototype,r),e&&X(t,e),t}const tt=flarum.core.compat["common/utils/extractText"];var rt=e.n(tt);const et=flarum.core.compat["forum/components/DiscussionList"];var ot=e.n(et);const at=flarum.core.compat["common/utils/stringToColor"];var nt=e.n(at);const it=flarum.core.compat["common/helpers/listItems"];var st=e.n(it);const ut=flarum.core.compat["common/components/Page"];var lt=e.n(ut);const ct=flarum.core.compat["common/components/Dropdown"];var ht=e.n(ct);const mt=flarum.core.compat["common/components/LinkButton"];var dt=e.n(mt);const ft=flarum.core.compat["forum/states/DiscussionListState"];var pt=function(t){function r(r,e,o){var a;return(a=t.call(this,{},r)||this).preloadedApiDocument=void 0,a.virtualAuthorId=void 0,a.virtualAuthorId=e,a.preloadedApiDocument=(null==o?void 0:o.filter((function(t){return t instanceof _()})))||null,a.initialLoading=!0,a}y(r,t);var e=r.prototype;return e.loadPage=function(r){return void 0===r&&(r=1),this.preloadedApiDocument?Promise.resolve(this.preloadedApiDocument):t.prototype.__proto__.loadPage.call(this,r)},e.parseResults=function(r,e){this.preloadedApiDocument=null,t.prototype.parseResults.call(this,r,e)},e.requestParams=function(){var r=t.prototype.requestParams.call(this);return r.filter["virtual-author"]=this.virtualAuthorId,r},r}(e.n(ft)()),vt=function(t){function e(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).listState=void 0,r.lastDiscussion=void 0,r.bodyClass=void 0,r.scrollTopOnCreate=void 0,r}y(e,t);var o=e.prototype;return o.oninit=function(o){t.prototype.oninit.call(this,o),this.listState=new pt(1,this.attrs.slug,r().preloadedApiDocument()),r().previous.matches(c())&&(this.lastDiscussion=r().previous.get("discussion")),r().previous.matches(e)&&this.listState.clear(),this.listState.refreshParams(r().search.params(),m.route.param("page")),r().history.push("index",rt()(r().translator.trans("core.forum.header.back_to_index_tooltip"))),this.bodyClass="App--index",this.scrollTopOnCreate=!1},o.oncreate=function(e){t.prototype.oncreate.call(this,e),this.setTitle();var o=r().cache.heroHeight,a=r().cache.heroHeight=this.$(".Hero").outerHeight()||0,n=r().cache.scrollTop;if($("#app").css("min-height",$(window).height()+a),null!==r().previous.type&&(this.lastDiscussion?$(window).scrollTop(n-o+a):$(window).scrollTop(0),this.lastDiscussion)){var i=this.$('li[data-id="'+this.lastDiscussion.id()+'"] .DiscussionListItem');if(i.length){var s=$("#header").outerHeight(),u=$(window).height(),l=i.offset().top,c=l+i.outerHeight();(l<n+s||c>n+u)&&$(window).scrollTop(l-s)}}},o.onbeforeremove=function(e){t.prototype.onbeforeremove.call(this,e),r().cache.scrollTop=$(window).scrollTop()},o.onremove=function(r){t.prototype.onremove.call(this,r),$("#app").css("min-height","")},o.hero=function(){var t=this.virtualAuthor;return m("div",{class:"VirtualAuthorHero Hero",style:{"--hero-bg":"#"+nt()(t.displayName())}},m("div",{class:"darkenBackground"},m("div",{class:"container"},m("div",{class:"VirtualAuthorHero-profile"},m("h2",{class:"VirtualAuthorHero-displayName"},t.displayName()),m("p",{class:"VirtualAuthorHero-description"},t.description())),m("ul",{class:"VirtualAuthorHero-meta"},st()(this.heroMetaItems().toArray())))))},o.heroMetaItems=function(){var t=new(q()),e=this.virtualAuthor;return t.add("discussionCount",m("span",null,J()("fas fa-comments")," ",r().translator.trans("davwheat-virtual-authors.forum.virtual_author_page.discussion_count",{count:e.discussionCount()})),100),t},o.setTitle=function(){r().setTitle(rt()(r().translator.trans("davwheat-virtual-authors.forum.virtual_author_page.meta_title",{displayName:this.virtualAuthor.displayName()}))),r().setTitleCount(0)},o.view=function(){return m("div",{className:"IndexPage VirtualAuthorPage"},this.hero(),m("div",{className:"container"},m("div",{className:"IndexPage-results"},m("h3",{class:"VirtualAuthorPage-title"},r().translator.trans("davwheat-virtual-authors.forum.virtual_author_page.credited_discussions",{displayName:this.virtualAuthor.displayName()})),m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},st()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},st()(this.actionItems().toArray()))),m(ot(),{state:this.listState}))))},o.navItems=function(){var t=new(q()),e=r().search.stickyParams();return t.add("allDiscussions",m(dt(),{href:r().route("index",e),icon:"far fa-comments"},r().translator.trans("core.forum.index.all_discussions_link")),100),t},o.viewItems=function(){var t=new(q()),e=this.listState.sortMap(),o=Object.keys(e).reduce((function(t,e){return t[e]=r().translator.trans("core.forum.index_sort."+e+"_button"),t}),{});return t.add("sort",m(ht(),{buttonClassName:"Button",label:o[r().search.params().sort]||Object.keys(e).map((function(t){return o[t]}))[0],accessibleToggleLabel:r().translator.trans("core.forum.index_sort.toggle_dropdown_accessible_label")},Object.keys(o).map((function(t){var a=o[t],n=(r().search.params().sort||Object.keys(e)[0])===t;return m(i(),{icon:!n||"fas fa-check",onclick:r().search.changeSort.bind(r().search,t),active:n},a)}))),100),t},o.actionItems=function(){var t=this,e=new(q());return e.add("refresh",m(i(),{title:r().translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){t.listState.refresh(),r().session.user&&(r().store.find("users",r().session.user.id()),m.redraw())}}),100),e},Z(e,[{key:"virtualAuthor",get:function(){return r().store.getById("virtualAuthors",this.attrs.slug)}}]),e}(lt());const yt=flarum.core.compat["common/components/Placeholder"];var gt=e.n(yt);const wt=flarum.core.compat["common/states/PaginatedListState"];function At(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=t[e];return o}var bt=function(t){function e(r,e){return void 0===e&&(e=1),t.call(this,r,e,20)||this}y(e,t);var o=e.prototype;return o.requestParams=function(){var t,r={filter:this.params.filter||{},sort:this.sortMap()[null!=(t=this.params.sort)?t:""]};return this.params.q&&(r.filter.q=this.params.q),r},o.loadPage=function(e){void 0===e&&(e=1);var o=r().preloadedApiDocument();return o?(this.initialLoading=!1,Promise.resolve(o)):t.prototype.loadPage.call(this,e)},o.sortMap=function(){return{}},o.isSearchResults=function(){return!!this.params.q},o.removeVirtualAuthor=function(t){for(var r,e=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return At(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?At(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(this.pages);!(r=e()).done;){var o=r.value,a=o.items.indexOf(t);if(-1!==a){o.items.splice(a,1);break}}m.redraw()},o.addVirtualAuthor=function(t){this.removeVirtualAuthor(t),m.redraw()},Z(e,[{key:"type",get:function(){return"virtualAuthors"}}]),e}(e.n(wt)()),_t=function(t){function e(){return t.apply(this,arguments)||this}y(e,t);var o=e.prototype;return o.view=function(t){return m("div",{class:"VirtualAuthorsListItem"},this.items().toArray())},o.items=function(){var t=new(q());return t.add("name",m("h3",{class:"VirtualAuthorsListItem-name"},m(K(),{href:r().route("virtualAuthors.author",{slug:this.attrs.data.id()})},this.attrs.data.displayName())),100),t.add("description",m("p",{class:"VirtualAuthorsListItem-description"},this.attrs.data.description()||m("i",null,r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_list.no_description"))),80),t.add("discussionCount",m("p",{class:"VirtualAuthorsListItem-discussionCount"},J()("fas fa-comments")," ",r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_list.discussion_count",{count:this.attrs.data.discussionCount()})),60),t},e}(H());const xt=flarum.core.compat["common/utils/Stream"];var Vt=e.n(xt),Lt=function(t){function e(){for(var r,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(r=t.call.apply(t,[this].concat(o))||this).bodyClass="App--virtualAuthorsList",r.paginationState=void 0,r.nameFilter=new(Vt()),r.debounceKeys={},r}y(e,t);var o=e.prototype;return o.oninit=function(r){t.prototype.oninit.call(this,r),this.paginationState=new bt({})},o.oncreate=function(r){t.prototype.oncreate.call(this,r),this.paginationState.refresh()},o.filterView=function(){var t=this;return m("div",{class:"VirtualAuthorsList-filter"},m("label",null,m("input",{class:"FormControl",type:"text",oninput:E()("value",(function(r){t.debounceKeys.name&&clearTimeout(t.debounceKeys.name),t.debounceKeys.name=setTimeout((function(){t.nameFilter(r),m.redraw()}),500)})),placeholder:r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_list.filter_name_placeholder")})))},o.listView=function(){var t,e,o,a,n,s=this.paginationState;return s.isInitialLoading()||s.isLoadingNext()?o=m(k(),null):s.hasNext()&&(o=m(i(),{class:"Button",onclick:s.loadNext.bind(s)},r().translator.trans("core.forum.discussion_list.load_more_button"))),s.isEmpty()?m(gt(),{text:r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_list.empty_text")}):((null==(t=this.paginationState.getParams())||null==(e=t.filter)?void 0:e.displayName)!==this.nameFilter()&&(this.nameFilter().length<3&&void 0!==(null==(a=this.paginationState.getParams())||null==(n=a.filter)?void 0:n.displayName)?this.paginationState.refreshParams({filter:{}},1):this.paginationState.refreshParams({filter:{displayName:this.nameFilter()}},1)),m("[",null,m("ul",{className:"VirtualAuthorsList-virtualAuthors"},s.getPages().map((function(t){return t.items.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},m(_t,{data:t}))}))}))),m("div",{className:"DiscussionList-loadMore"},o)))},o.heroView=function(){return m("header",{class:"Hero VirtualAuthorHero"},m("div",{class:"container"},m("div",{class:"containerNarrow"},m("h2",{class:"Hero-title"},r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_list.title")))))},o.viewItems=function(){var t=new(q());return t.add("hero",this.heroView(),100),t.add("filter",this.filterView(),80),t.add("list",this.listView(),60),t},o.view=function(t){return m("div",{className:Y()("VirtualAuthorsList",{"VirtualAuthorsList--searchResults":this.paginationState.isSearchResults()})},this.viewItems().toArray())},e}(lt());const Nt=flarum.core.compat["v17development/blog/components/BlogPostController"];var It=e.n(Nt);const Pt=flarum.core.compat["v17development/blog/pages/BlogItem"];var St=e.n(Pt);r().initializers.add("davwheat/virtual-authors",(function(){p().store.models.virtualAuthors=A,_().prototype.virtualAuthors=w().hasMany("virtualAuthors"),_().prototype.canSetVirtualAuthors=w().attribute("canSetVirtualAuthors"),(0,a.extend)(_().prototype,"badges",(function(t){var r;if(p().forum.attribute("davwheat-virtual-authors.discussion-badge")&&null!=(r=this.virtualAuthors())&&r.length){var e=this.virtualAuthors().length>1;t.add("hasVirtualAuthor",m(V(),{type:"hasVirtualAuthor",icon:e?"fas fa-users":"fas fa-user",label:p().translator.trans("davwheat-virtual-authors.lib.discussion-badge",{count:this.virtualAuthors().length})}))}})),r().routes["virtualAuthors.author"]={path:"/author/:slug",resolver:{onmatch:function(t){if(!r().forum.attribute("davwheat-virtual-authors.link-to-virtual-authors-from-discussion"))throw new Error;return vt}}},r().routes["virtualAuthors.list"]={path:"/authors",component:Lt},(0,a.extend)(u(),"moderationControls",(function(t,e){e.canSetVirtualAuthors()&&t.add("setVirtualAuthors",m(i(),{icon:"fas fa-ghost",onclick:function(){r().modal.show(F,{discussion:e})}},r().translator.trans("davwheat-virtual-authors.forum.discussion_controls.set_virtual_authors")))})),(0,a.extend)(c().prototype,"pageContent",(function(t){var e;r().forum.attribute("davwheat-virtual-authors.authors-in-sidebar")||null!=(e=this.discussion)&&e.virtualAuthors().length&&t.add("virtualAuthors",m("div",{className:"container"},m(Q,{discussion:this.discussion})),50)})),(0,a.extend)(c().prototype,"sidebarItems",(function(t){var e;r().forum.attribute("davwheat-virtual-authors.authors-in-sidebar")&&null!=(e=this.discussion)&&e.virtualAuthors().length&&t.add("virtualAuthors",m(Q,{isSidebar:!0,discussion:this.discussion}),125)})),(0,a.extend)(d().prototype,"navItems",(function(t){r().forum.attribute("canViewVirtualAuthorsPage")&&t.add("virtualAuthorList",m(dt(),{icon:"far fa-address-card",href:r().route("virtualAuthors.list")},r().translator.trans("davwheat-virtual-authors.forum.virtual_authors_list.sidebar_link")),50)})),"v17development-blog"in flarum.extensions&&((0,a.extend)(It().prototype,"manageArticleButtons",(function(t){var e=this;this.attrs.article.canSetVirtualAuthors()&&t.add("setVirtualAuthors",m(i(),{icon:"fas fa-ghost",onclick:function(){r().modal.show(F,{discussion:e.attrs.article})}},r().translator.trans("davwheat-virtual-authors.forum.discussion_controls.set_virtual_authors")))})),(0,a.extend)(St().prototype,"postItems",(function(t){this.loading||this.article.virtualAuthors().length&&t.add("virtualAuthors",m(Q,{discussion:this.article}),70)})))}));var kt={VirtualAuthorIndexPage:vt,VirtualAuthorPanel:Q,VirtualAuthorPanelItem:z,VirtualAuthorsListItem:_t},Tt={VirtualAuthorsList:Lt},Ot={VirtualAuthorsListState:bt,VirtualAuthorDiscussionListState:pt}})(),module.exports=o})();