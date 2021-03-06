webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\nodebird-deploy\\front\\components\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();








var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading,
      followDone = _useSelector.followDone;

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log("isFollowing(FollowButton) : ", isFollowing);

    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
      antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
        message: '알림',
        description: "팔로잉 취소 성공 !!"
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });

      if (followDone) {
        antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
          message: '알림',
          description: "팔로우 성공 !!"
        });
      }
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};

_s(FollowButton, "Qw7yG7fOq3Rw3/E7fViFYmftVHc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsImlkIiwiVXNlciIsIm9uQ2xpY2tCdXR0b24iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJub3RpZmljYXRpb24iLCJvcGVuIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwiRk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQy9CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRCtCLHFCQUU0QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGdkM7QUFBQSxNQUV2QkMsRUFGdUIsZ0JBRXZCQSxFQUZ1QjtBQUFBLE1BRW5CQyxhQUZtQixnQkFFbkJBLGFBRm1CO0FBQUEsTUFFSkMsZUFGSSxnQkFFSkEsZUFGSTtBQUFBLE1BRWFDLFVBRmIsZ0JBRWFBLFVBRmI7O0FBSS9CLE1BQU1DLFdBQVcsR0FBR0osRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVLLFVBQUosQ0FBZUMsSUFBZixDQUFvQixVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNkLElBQUksQ0FBQ2UsSUFBTCxDQUFVRCxFQUExQjtBQUFBLEdBQXBCLENBQXBCO0FBRUEsTUFBTUUsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDcENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLEVBQTRDVCxXQUE1Qzs7QUFDQSxRQUFJQSxXQUFKLEVBQWlCO0FBQ2JULGNBQVEsQ0FBQztBQUNMbUIsWUFBSSxFQUFFQywrREFERDtBQUVMQyxZQUFJLEVBQUV0QixJQUFJLENBQUNlLElBQUwsQ0FBVUQ7QUFGWCxPQUFELENBQVI7QUFLQVMsdURBQVksQ0FBQ0MsSUFBYixDQUFrQjtBQUNkQyxlQUFPLEVBQUUsSUFESztBQUVkQyxtQkFBVyxFQUFFO0FBRkMsT0FBbEI7QUFLSCxLQVhELE1BV087QUFDSHpCLGNBQVEsQ0FBQztBQUNMbUIsWUFBSSxFQUFFTyw2REFERDtBQUVMTCxZQUFJLEVBQUV0QixJQUFJLENBQUNlLElBQUwsQ0FBVUQ7QUFGWCxPQUFELENBQVI7O0FBS0EsVUFBSUwsVUFBSixFQUFlO0FBQ1hjLHlEQUFZLENBQUNDLElBQWIsQ0FBa0I7QUFDZEMsaUJBQU8sRUFBRSxJQURLO0FBRWRDLHFCQUFXLEVBQUU7QUFGQyxTQUFsQjtBQUlIO0FBRUo7QUFDSixHQTNCZ0MsRUEyQjlCLENBQUNoQixXQUFELENBM0I4QixDQUFqQztBQTZCQSxzQkFDSSxxRUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRUgsYUFBYSxJQUFJQyxlQUFsQztBQUFtRCxXQUFPLEVBQUVRLGFBQTVEO0FBQUEsY0FDS04sV0FBVyxHQUFHLE1BQUgsR0FBWTtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFLSCxDQXhDRDs7R0FBTVgsWTtVQUNlRyx1RCxFQUMwQ0MsdUQ7OztLQUZ6REosWTtBQTJDTkEsWUFBWSxDQUFDNkIsU0FBYixHQUF5QjtBQUNyQjVCLE1BQUksRUFBRTZCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREYsQ0FBekI7QUFJZWhDLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU4MTk0YTE0MTQ5MmZlYTg2Y2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSwgZm9sbG93TG9hZGluZywgdW5mb2xsb3dMb2FkaW5nLCBmb2xsb3dEb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXNGb2xsb3dpbmcoRm9sbG93QnV0dG9uKSA6IFwiLCBpc0ZvbGxvd2luZyk7XHJcbiAgICAgICAgaWYgKGlzRm9sbG93aW5nKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yVjOumvCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLtjJTroZzsnokg7Leo7IaMIOyEseqztSAhIVwiXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmb2xsb3dEb25lKXtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWM66a8JyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLtjJTroZzsmrAg7ISx6rO1ICEhXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAgICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIClcclxufTtcclxuXHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9