_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,u=f.length;i<u;i++){var s=f[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=o.props[s],l=r[s]||new Set;l.has(d)?a=!1:(l.add(d),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Qrvq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return h}));var r=n("q1tI"),o=n("/MKj"),a=n("bx4M"),c=n("Tckk"),i=n("8Kt/"),u=n.n(i),s=n("nOHt"),d=n("p+NB"),l=n("kduo"),f=n("1zst"),p=n("nKUr"),h=!0;t.default=function(){var e=Object(o.b)(),t=Object(s.useRouter)().query.id,n=Object(o.c)((function(e){return e.post})),i=n.mainPosts,h=n.hasMorePosts,m=n.loadUserPostsLoading,v=Object(o.c)((function(e){return e.user})).userInfo;return Object(r.useEffect)((function(){var n=function(){window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&h&&!m&&e({type:d.t,lastId:i[i.length-1]&&i[i.length-1].id,data:t})};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[i.length,h,t]),Object(p.jsxs)(f.a,{children:[v&&Object(p.jsxs)(u.a,{children:[Object(p.jsxs)("title",{children:[v.nickname," \ub2d8\uc758 \uae00"]}),Object(p.jsx)("meta",{name:"description",content:"".concat(v.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),Object(p.jsx)("meta",{property:"og:title",content:"".concat(v.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),Object(p.jsx)("meta",{property:"og:description",content:"".concat(v.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),Object(p.jsx)("meta",{property:"og:image",content:"https://nodebird.com/favicon.ico"}),Object(p.jsx)("meta",{property:"og:url",content:"https://nodebird.com/user/".concat(t)})]}),v?Object(p.jsx)(a.a,{actions:[Object(p.jsxs)("div",{children:["\uc9f9\uc9f9",Object(p.jsx)("br",{}),v.Posts]},"twit"),Object(p.jsxs)("div",{children:["\ud314\ub85c\uc789",Object(p.jsx)("br",{}),v.Followings]},"following"),Object(p.jsxs)("div",{children:["\ud314\ub85c\uc6cc",Object(p.jsx)("br",{}),v.Followers]},"follower")],children:Object(p.jsx)(a.a.Meta,{avatar:Object(p.jsx)(c.a,{children:v.nickname[0]}),title:v.nickname})}):null,i.map((function(e){return Object(p.jsx)(l.a,{post:e},e.id)}))]})}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},hJAw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return n("Qrvq")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}},[["hJAw",1,2,6,9,0,3,4,5,7,8]]]);