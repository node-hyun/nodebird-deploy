_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(c.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},c=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,c=e.hasQuery,o=void 0!==c&&c;return n||r&&o}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(n,r,c):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(a=n("Xuae"))&&a.__esModule?a:{default:a},o=n("lwAK"),u=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var c=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var o=r.key.slice(r.key.indexOf("$")+1);e.has(o)?c=!1:e.add(o)}switch(r.type){case"title":case"base":t.has(r.type)?c=!1:t.add(r.type);break;case"meta":for(var u=0,i=f.length;u<i;u++){var s=f[u];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?c=!1:n.add(s);else{var l=r.props[s],d=a[s]||new Set;d.has(l)?c=!1:(d.add(l),a[s]=d)}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),a=(0,r.useContext)(u.HeadManagerContext);return r.default.createElement(c.default,{reduceComponentsToState:p,headManager:a,inAmpMode:(0,i.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},OUKs:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n("vL9u")}])},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return a(e)||r(e)||c(e)||o()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),c=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),u=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){o(n,e);var t=s(n);function n(e){var c;return r(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(a(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},vL9u:function(e,t,n){"use strict";n.r(t);var a=n("ODXe"),r=n("q1tI"),c=n.n(r),o=n("8Kt/"),u=n.n(o),i=n("1zst"),s=n("TeRw"),l=n("Vl3Y"),d=n("5rEg"),f=n("+y50"),p=n("jiTG"),b=n("TSYQ"),h=n.n(b),v=n("wx14"),j=n("rePB"),y=n("Ff2n"),O=n("VTBJ"),m=n("1OyB"),g=n("vuIU"),x=n("Ji7U"),k=n("LK+K"),C=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(e){var a;Object(m.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(O.a)(Object(O.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(g.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,r=t.style,o=t.name,u=t.id,i=t.type,s=t.disabled,l=t.readOnly,d=t.tabIndex,f=t.onClick,p=t.onFocus,b=t.onBlur,O=t.onKeyDown,m=t.onKeyPress,g=t.onKeyUp,x=t.autoFocus,k=t.value,C=t.required,w=Object(y.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),M=this.state.checked,_=h()(n,a,(e={},Object(j.a)(e,"".concat(n,"-checked"),M),Object(j.a)(e,"".concat(n,"-disabled"),s),e));return c.a.createElement("span",{className:_,style:r},c.a.createElement("input",Object(v.a)({name:o,id:u,type:i,required:C,readOnly:l,disabled:s,tabIndex:d,className:"".concat(n,"-input"),checked:!!M,onClick:f,onFocus:p,onBlur:b,onKeyUp:g,onKeyDown:O,onKeyPress:m,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:k},E)),c.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(O.a)(Object(O.a)({},t),{},{checked:e.checked}):null}}]),n}(r.Component);C.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};var w=C,E=n("xGeg"),M=n("Z97s"),_=n("bT9E"),P=n("H84U"),S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},I=r.createContext(null),N=function(e){var t=e.defaultValue,n=e.children,a=e.options,c=void 0===a?[]:a,o=e.prefixCls,u=e.className,i=e.style,s=e.onChange,l=S(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),d=r.useContext(P.b),b=d.getPrefixCls,v=d.direction,j=r.useState(l.value||t||[]),y=Object(M.a)(j,2),O=y[0],m=y[1],g=r.useState([]),x=Object(M.a)(g,2),k=x[0],C=x[1];r.useEffect((function(){"value"in l&&m(l.value||[])}),[l.value]);var w=function(){return c.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},N=b("checkbox",o),K="".concat(N,"-group"),A=Object(_.a)(l,["value","disabled"]);c&&c.length>0&&(n=w().map((function(e){return r.createElement(U,{prefixCls:N,key:e.value.toString(),disabled:"disabled"in e?e.disabled:l.disabled,value:e.value,checked:-1!==O.indexOf(e.value),onChange:e.onChange,className:"".concat(K,"-item"),style:e.style},e.label)})));var F={toggleOption:function(e){var t=O.indexOf(e.value),n=Object(E.a)(O);if(-1===t?n.push(e.value):n.splice(t,1),"value"in l||m(n),s){var a=w();s(n.filter((function(e){return-1!==k.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))}},value:O,disabled:l.disabled,name:l.name,registerValue:function(e){C((function(t){return[].concat(Object(E.a)(t),[e])}))},cancelValue:function(e){C((function(t){return t.filter((function(t){return t!==e}))}))}},D=h()(K,Object(f.a)({},"".concat(K,"-rtl"),"rtl"===v),u);return r.createElement("div",Object(p.a)({className:D,style:i},A),r.createElement(I.Provider,{value:F},n))},K=r.memo(N),A=n("uaoM"),F=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},D=function(e,t){var n,a=e.prefixCls,c=e.className,o=e.children,u=e.indeterminate,i=void 0!==u&&u,s=e.style,l=e.onMouseEnter,d=e.onMouseLeave,b=e.skipGroup,v=void 0!==b&&b,j=F(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),y=r.useContext(P.b),O=y.getPrefixCls,m=y.direction,g=r.useContext(I),x=r.useRef(j.value);r.useEffect((function(){null===g||void 0===g||g.registerValue(j.value),Object(A.a)("checked"in j||!!g||!("value"in j),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),r.useEffect((function(){if(!v)return j.value!==x.current&&(null===g||void 0===g||g.cancelValue(x.current),null===g||void 0===g||g.registerValue(j.value)),function(){return null===g||void 0===g?void 0:g.cancelValue(j.value)}}),[j.value]);var k=O("checkbox",a),C=Object(p.a)({},j);g&&!v&&(C.onChange=function(){j.onChange&&j.onChange.apply(j,arguments),g.toggleOption&&g.toggleOption({label:o,value:j.value})},C.name=g.name,C.checked=-1!==g.value.indexOf(j.value),C.disabled=j.disabled||g.disabled);var E=h()((n={},Object(f.a)(n,"".concat(k,"-wrapper"),!0),Object(f.a)(n,"".concat(k,"-rtl"),"rtl"===m),Object(f.a)(n,"".concat(k,"-wrapper-checked"),C.checked),Object(f.a)(n,"".concat(k,"-wrapper-disabled"),C.disabled),n),c),M=h()(Object(f.a)({},"".concat(k,"-indeterminate"),i));return r.createElement("label",{className:E,style:s,onMouseEnter:l,onMouseLeave:d},r.createElement(w,Object(p.a)({},C,{prefixCls:k,className:M,ref:t})),void 0!==o&&r.createElement("span",null,o))},q=r.forwardRef(D);q.displayName="Checkbox";var U=q,H=U;H.Group=K,H.__ANT_CHECKBOX=!0;var T=H,B=n("2/Rp"),R=n("3zrx"),V=n("/MKj"),L=n("LAVF"),J=n("nOHt"),W=n.n(J),X=n("nKUr");t.default=function(){var e=Object(V.b)(),t=Object(R.a)(""),n=Object(a.a)(t,2),c=n[0],o=n[1],f=Object(R.a)(""),p=Object(a.a)(f,2),b=p[0],h=p[1],v=Object(R.a)(""),j=Object(a.a)(v,2),y=j[0],O=j[1],m=Object(r.useState)(""),g=m[0],x=m[1],k=Object(r.useState)(!1),C=k[0],w=k[1],E=Object(r.useState)(!1),M=E[0],_=E[1],P=Object(r.useState)(!1),S=P[0],I=P[1],N=Object(V.c)((function(e){return e.user})),K=N.signUpLoading,A=N.me,F=N.signUpDone,D=N.signUpError;Object(r.useEffect)((function(){F&&s.a.open({message:"\uc54c\ub9bc",description:"\ud68c\uc6d0 \uac00\uc785 \uc131\uacf5! \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uaca0\uc2b5\ub2c8\ub2e4"})}),[F]),Object(r.useEffect)((function(){A&&A.id&&(s.a.open({message:"\uc54c\ub9bc",description:"\ub85c\uadf8\uc778 \uc0c1\ud0dc\uc785\ub2c8\ub2e4 \uba54\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4!"}),W.a.replace("/"))}),[A&&A.id]),Object(r.useEffect)((function(){D&&alert(D)}),[D]),Object(r.useEffect)((function(){F&&W.a.replace("/")}),[F]);var q=Object(r.useCallback)((function(){return y!==g?w(!0):M?e({type:L.E,data:{email:c,nickname:b,password:y}}):I(!0)}),[c,y,g,M]),U=Object(r.useCallback)((function(e){w(e.target.value!==y),x(e.target.value)}),[y]),H=Object(r.useCallback)((function(e){I(!1),_(e.target.checked)}),[]);return Object(X.jsxs)(i.a,{children:[Object(X.jsx)(u.a,{children:Object(X.jsx)("title",{children:"\ud68c\uc6d0 \uac00\uc785 | NodeBird"})}),Object(X.jsxs)(l.a,{onFinish:q,children:[Object(X.jsxs)("div",{children:[Object(X.jsx)("label",{htmlFor:"user-id",children:"\uc774\uba54\uc77c"}),Object(X.jsx)("br",{}),Object(X.jsx)(d.a,{name:"user-id",value:c,required:!0,onChange:o})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("label",{htmlFor:"user-nick",children:"\ub2c9\ub124\uc784"}),Object(X.jsx)("br",{}),Object(X.jsx)(d.a,{name:"user-nick",value:b,required:!0,onChange:h})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("label",{htmlFor:"user-password",children:"\ube44\ubc00\ubc88\ud638"}),Object(X.jsx)("br",{}),Object(X.jsx)(d.a,{name:"user-password",type:"password",value:y,required:!0,onChange:O})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("label",{htmlFor:"user-password-check",children:"\ube44\ubc00\ubc88\ud638\uccb4\ud06c"}),Object(X.jsx)("br",{}),Object(X.jsx)(d.a,{name:"user-password-check",type:"password",value:g,required:!0,onChange:U}),C&&Object(X.jsx)("div",{style:{color:"red"},children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)(T,{name:"user-term",checked:M,onChange:H,children:"\uc81c\ub85c\ucd08 \ub9d0\uc744 \uc798 \ub4e4\uc744 \uac83\uc744 \ub3d9\uc758\ud569\ub2c8\ub2e4."}),S&&Object(X.jsx)("div",{style:{color:"red"},children:"\uc57d\uad00\uc5d0 \ub3d9\uc758\ud558\uc154\uc57c \ud569\ub2c8\ub2e4."})]}),Object(X.jsx)("div",{style:{marginTop:10},children:Object(X.jsx)(B.a,{type:"primary",htmlType:"submit",loading:K,children:"\uac00\uc785\ud558\uae30"})})]})]})}}},[["OUKs",1,2,0,3,4,7]]]);