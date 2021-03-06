webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _style_UserProfileStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/UserProfileStyle */ "./components/style/UserProfileStyle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\nodebird-deploy\\front\\components\\UserProfile.js",
    _this = undefined,
    _s = $RefreshSig$();



 // import { useDispatch } from "react-redux";
// import { logoutAction } from "../reducers/user";




var dummy = {
  nickname: "제로초",
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

var UserProfile = function UserProfile(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      logOutLoading = _useSelector.logOutLoading,
      logInLoading = _useSelector.logInLoading,
      logInDone = _useSelector.logInDone,
      logOutDone = _useSelector.logOutDone,
      logOutUser = _useSelector.logOutUser;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
      message: '알림',
      description: "환영합니다 " + me.nickname + "님"
    });
  }, [me && me.id && logInDone]);
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
    antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
      message: '알림',
      description: "안녕히 가세요 " + logOutUser + "님"
    });
  }, [logOutDone]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_style_UserProfileStyle__WEBPACK_IMPORTED_MODULE_2__["UserProfileWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: ["\uC9F9\uC9F9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), me.Posts.length]
      }, "twit", true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: ["\uD314\uB85C\uC789", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), me.Followings.length]
      }, "following", true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: ["\uD314\uB85C\uC6CC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this), me.Followers.length]
      }, "follower", true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }, _this)],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: me.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, _this),
        title: me.nickname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onLogOut,
        loading: logOutLoading,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(UserProfile, "X81GB2l7epmo/5t2xRgtd262QDA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJkdW1teSIsIm5pY2tuYW1lIiwiUG9zdCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJpc0xvZ2dlZEluIiwiVXNlclByb2ZpbGUiLCJzZXRJc0xvZ2dlZEluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2dPdXRMb2FkaW5nIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nT3V0RG9uZSIsImxvZ091dFVzZXIiLCJ1c2VFZmZlY3QiLCJub3RpZmljYXRpb24iLCJvcGVuIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR19PVVRfUkVRVUVTVCIsIlBvc3RzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLFVBQVEsRUFBRSxLQURBO0FBRVZDLE1BQUksRUFBRSxFQUZJO0FBR1ZDLFlBQVUsRUFBRSxFQUhGO0FBSVZDLFdBQVMsRUFBRSxFQUpEO0FBS1ZDLFlBQVUsRUFBRTtBQUxGLENBQWQ7O0FBU0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRHVDLHFCQUV3Q0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGbkQ7QUFBQSxNQUUvQkMsRUFGK0IsZ0JBRS9CQSxFQUYrQjtBQUFBLE1BRTNCQyxhQUYyQixnQkFFM0JBLGFBRjJCO0FBQUEsTUFFWkMsWUFGWSxnQkFFWkEsWUFGWTtBQUFBLE1BRUVDLFNBRkYsZ0JBRUVBLFNBRkY7QUFBQSxNQUVhQyxVQUZiLGdCQUVhQSxVQUZiO0FBQUEsTUFFeUJDLFVBRnpCLGdCQUV5QkEsVUFGekI7O0FBSXZDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMscURBQVksQ0FBQ0MsSUFBYixDQUFrQjtBQUNkQyxhQUFPLEVBQUUsSUFESztBQUVkQyxpQkFBVyxFQUFFLFdBQVdWLEVBQUUsQ0FBQ1osUUFBZCxHQUF5QjtBQUZ4QixLQUFsQjtBQUlILEdBTFEsRUFLTixDQUFDWSxFQUFFLElBQUlBLEVBQUUsQ0FBQ1csRUFBVCxJQUFlUixTQUFoQixDQUxNLENBQVQ7QUFPQSxNQUFNUyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMvQmxCLFlBQVEsQ0FBQztBQUNMbUIsVUFBSSxFQUFFQyw4REFBZUE7QUFEaEIsS0FBRCxDQUFSO0FBSUFSLHFEQUFZLENBQUNDLElBQWIsQ0FBa0I7QUFDZEMsYUFBTyxFQUFFLElBREs7QUFFZEMsaUJBQVcsRUFBRSxhQUFhTCxVQUFiLEdBQTBCO0FBRnpCLEtBQWxCO0FBS0gsR0FWMkIsRUFVekIsQ0FBQ0QsVUFBRCxDQVZ5QixDQUE1QjtBQVlBLHNCQUNJLHFFQUFDLDBFQUFEO0FBQUEsMkJBQ0kscUVBQUMseUNBQUQ7QUFDSSxhQUFPLEVBQUUsY0FDTDtBQUFBLGdEQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkEsRUFHS0osRUFBRSxDQUFDZ0IsS0FBSCxDQUFTQyxNQUhkO0FBQUEsU0FBUyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESyxlQU1MO0FBQUEsc0RBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxFQUdLakIsRUFBRSxDQUFDVixVQUFILENBQWMyQixNQUhuQjtBQUFBLFNBQVMsV0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkssZUFXTDtBQUFBLHNEQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkEsRUFHS2pCLEVBQUUsQ0FBQ1QsU0FBSCxDQUFhMEIsTUFIbEI7QUFBQSxTQUFTLFVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhLLENBRGI7QUFBQSw4QkFtQkkscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksY0FBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUEsb0JBQVNqQixFQUFFLENBQUNaLFFBQUgsQ0FBWSxDQUFaO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWjtBQUVJLGFBQUssRUFBRVksRUFBRSxDQUFDWjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkosZUF1QkkscUVBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUV3QixRQUFqQjtBQUEyQixlQUFPLEVBQUVYLGFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCSCxDQXBERDs7R0FBTVIsVztVQUNlRyx1RCxFQUM4REMsdUQ7OztLQUY3RUosVztBQXVEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2VmMWU1N2E1NzE5ZjMyOGZhMmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIEJ1dHRvbiwgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXNlclByb2ZpbGVXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZS9Vc2VyUHJvZmlsZVN0eWxlJztcclxuXHJcbi8vIGltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vIGltcG9ydCB7IGxvZ291dEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuY29uc3QgZHVtbXkgPSB7XHJcbiAgICBuaWNrbmFtZTogXCLsoJzroZzstIhcIixcclxuICAgIFBvc3Q6IFtdLFxyXG4gICAgRm9sbG93aW5nczogW10sXHJcbiAgICBGb2xsb3dlcnM6IFtdLFxyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbn07XHJcblxyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoeyBzZXRJc0xvZ2dlZEluIH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHsgbWUsIGxvZ091dExvYWRpbmcsIGxvZ0luTG9hZGluZywgbG9nSW5Eb25lLCBsb2dPdXREb25lLCBsb2dPdXRVc2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAn7JWM66a8JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi7ZmY7JiB7ZWp64uI64ukIFwiICsgbWUubmlja25hbWUgKyBcIuuLmFwiXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFttZSAmJiBtZS5pZCAmJiBsb2dJbkRvbmVdKTtcclxuXHJcbiAgICBjb25zdCBvbkxvZ091dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAn7JWM66a8JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi7JWI64WV7Z6IIOqwgOyEuOyalCBcIiArIGxvZ091dFVzZXIgKyBcIuuLmFwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LCBbbG9nT3V0RG9uZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJQcm9maWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7Ke57Ke5XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZS5Qb3N0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIO2MlOuhnOyeiVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWUuRm9sbG93aW5ncy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7YyU66Gc7JuMXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZS5Gb2xsb3dlcnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0gbG9hZGluZz17bG9nT3V0TG9hZGluZ30+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L1VzZXJQcm9maWxlV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==