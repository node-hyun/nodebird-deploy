_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;d.has(l)?a=!1:(d.add(l),r[s]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return p}));var r=n("q1tI"),o=n("1zst"),a=n("8Kt/"),i=n.n(a),c=n("ecW4"),u=n("kduo"),s=n("p+NB"),l=n("LAVF"),d=n("/MKj"),f=n("nKUr"),p=!0;t.default=function(){var e=Object(d.c)((function(e){return e.user})).me,t=Object(d.b)(),n=Object(d.c)((function(e){return e.post})),a=n.mainPosts,p=n.hasMorePosts,h=n.loadPostsLoading,m=(n.addPostDone,n.removePostDone,Object(d.c)((function(e){return e.user}))),b=m.followError,v=m.unfollowError;return Object(r.useEffect)((function(){t({type:l.o}),t({type:s.q})}),[]),b&&alert("followError : "+b),v&&alert("unfollowError : "+v),Object(r.useEffect)((function(){function e(){if(window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-300&&p&&!h){var e;console.log("\ud654\uba74\uc774 \ubc14\ub2e5\uc5d0 \ub3c4\ub2ec + \ud3ec\uc2a4\ud305 \ucd94\uac00!!");var n=null===(e=a[a.length-1])||void 0===e?void 0:e.id;t({type:s.q,lastId:n})}}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[a,p,h]),Object(f.jsxs)(o.a,{children:[Object(f.jsx)(i.a,{children:Object(f.jsx)("title",{children:"Home"})}),e&&Object(f.jsx)(c.a,{}),a.map((function(e){return Object(f.jsx)(u.a,{post:e},e.id)}))]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},ecW4:function(e,t,n){"use strict";var r=n("ODXe"),o=n("q1tI"),a=n("3zrx"),i=n("vOnD"),c=i.a.form.withConfig({displayName:"PostFormStyle__TweetForm",componentId:"oaelf0-0"})(["margin-top:5px;margin-bottom:40px;"]),u=i.a.textarea.withConfig({displayName:"PostFormStyle__TweetTextArea",componentId:"oaelf0-1"})(["width:100%;height:125px;padding:10px;box-sizing:border-box;border:solid 2px #1E90FF;border-radius:5px;font-size:16px;resize:both;"]),s=n("/MKj"),l=n("TeRw"),d=n("2/Rp"),f=n("p+NB"),p=n("nKUr");t.a=function(){var e=Object(s.b)(),t=Object(a.a)(""),n=Object(r.a)(t,3),i=n[0],h=n[1],m=n[2],b=Object(o.useRef)(),v=Object(s.c)((function(e){return e.post})),y=v.addPostLoading,g=v.addPostDone,j=v.imagePaths;Object(o.useEffect)((function(){g&&m("")}),[g]);var w=Object(o.useCallback)((function(t){if(t.preventDefault(),!i||!i.trim())return alert("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud558\uc138\uc694.");var n=new FormData;j.forEach((function(e){n.append("image",e)})),n.append("content",i),e({type:f.e,data:n}),l.a.open({message:"\uc54c\ub9bc",description:"posting \uc131\uacf5!"})}),[i,j,g]),x=Object(o.useCallback)((function(){b.current.click()}),[b.current]),O=Object(o.useCallback)((function(t){console.log("images : ",t.target.files);var n=new FormData;[].forEach.call(t.target.files,(function(e){n.append("image",e)})),console.log("imageFormData : ",n),e({type:f.J,data:n})})),_=Object(o.useCallback)((function(t){return function(){e({type:f.v,data:t})}}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(c,{onSubmit:w,children:[Object(p.jsx)(u,{rows:4,value:i,onChange:h,maxLength:140,placeholder:"\uc5b4\ub5a4 \uc2e0\uae30\ud55c \uc77c\uc774 \uc788\uc5c8\ub098\uc694?"}),Object(p.jsx)("input",{type:"file",name:"image",multiple:!0,hidden:!0,ref:b,onChange:O}),Object(p.jsx)(d.a,{onClick:x,children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),Object(p.jsx)(d.a,{type:"submit",style:{float:"right"},htmlType:"submit",loading:y,children:"Tweet"})]}),j.map((function(e,t){return Object(p.jsxs)("div",{style:{display:"inline-block"},children:[Object(p.jsx)("img",{src:"http://127.0.0.1:3065/".concat(e),style:{width:"200px"},alt:e}),Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{onClick:_(t),children:"\uc81c\uac70"})})]},e)}))]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,6,9,0,3,4,5,7,8]]]);