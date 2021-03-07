webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _style_PostFormStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/PostFormStyle.js */ "./components/style/PostFormStyle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\nodebird-deploy\\front\\components\\PostForm.js",
    _s = $RefreshSig$();





 // import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../reducers/post';





function PostForm() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      addPostLoading = _useSelector.addPostLoading,
      addPostDone = _useSelector.addPostDone,
      imagePaths = _useSelector.imagePaths;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    } // 폼데이터 객체에 이미지와 텍스트 정보를 설정 한뒤 


    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    formData.append('content', text); // 액션 data로 설정

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: formData
    });
    antd__WEBPACK_IMPORTED_MODULE_5__["notification"].open({
      message: '알림',
      description: "posting 성공!"
    });
  }, [text, imagePaths, addPostDone]);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log('images : ', e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append('image', f);
    });
    console.log("imageFormData : ", imageFormData);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_style_PostFormStyle_js__WEBPACK_IMPORTED_MODULE_3__["TweetForm"], {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_style_PostFormStyle_js__WEBPACK_IMPORTED_MODULE_3__["TweetTextArea"], {
        rows: 4,
        value: text,
        onChange: onChangeText,
        maxLength: 140,
        placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        type: "submit",
        style: {
          "float": 'right'
        },
        htmlType: "submit",
        loading: addPostLoading,
        children: "\uC9F9\uC9F9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this), imagePaths.map(function (v, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          display: 'inline-block'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
          src: v.replace(/\/thumb\//, '/origianl/'),
          style: {
            width: '200px'
          },
          alt: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this)]
      }, v, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true);
}

_s(PostForm, "MHTslabalqQr/hAfAuIThpCfkbU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0IiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImltYWdlUGF0aHMiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwIiwiYXBwZW5kIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwibm90aWZpY2F0aW9uIiwib3BlbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFwIiwidiIsImkiLCJkaXNwbGF5IiwicmVwbGFjZSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Ozs7QUFHQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2hCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGdCLGtCQUVzQkMsK0RBQVEsQ0FBQyxFQUFELENBRjlCO0FBQUE7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsWUFGRztBQUFBLE1BRVdDLE9BRlg7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Q0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxLQUFmLENBZkw7QUFBQSxrQkFESjtBQTJCSDs7R0E5RlFsRCxRO1VBQ1lFLHVELEVBQ3FCQyx1RCxFQUVjTSx1RDs7O0tBSi9DVCxRO0FBaUdNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZDE0OGUxNWI1ZDYwMzIzYWI1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBUd2VldEZvcm0sIFR3ZWV0QnV0dG9uLCBUd2VldFRleHRBcmVhIH0gZnJvbSBcIi4vc3R5bGUvUG9zdEZvcm1TdHlsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgbm90aWZpY2F0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gUG9zdEZvcm0oKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgeyBhZGRQb3N0TG9hZGluZywgYWRkUG9zdERvbmUsIGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWRkUG9zdERvbmUpIHtcclxuICAgICAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIXRleHQgfHwgIXRleHQudHJpbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalC4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIO2PvOuNsOydtO2EsCDqsJ3ssrTsl5Ag7J2066+47KeA7JmAIO2FjeyKpO2KuCDsoJXrs7Trpbwg7ISk7KCVIO2VnOuSpCBcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dCk7XHJcblxyXG4gICAgICAgIC8vIOyVoeyFmCBkYXRh66GcIOyEpOyglVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5vcGVuKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+yVjOumvCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInBvc3Rpbmcg7ISx6rO1IVwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LCBbdGV4dCwgaW1hZ2VQYXRocywgYWRkUG9zdERvbmVdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VzIDogJywgZS50YXJnZXQuZmlsZXMpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4ge1xyXG4gICAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbWFnZUZvcm1EYXRhIDogXCIsIGltYWdlRm9ybURhdGEpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VHdlZXRGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8VHdlZXRUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyWtOuWpCDsi6DquLDtlZwg7J287J20IOyeiOyXiOuCmOyalD9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlbiByZWY9e2ltYWdlSW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fSBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2FkZFBvc3RMb2FkaW5nfT7sp7nsp7k8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L1R3ZWV0Rm9ybT5cclxuICAgICAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2LnJlcGxhY2UoL1xcL3RodW1iXFwvLywgJy9vcmlnaWFubC8nKX0gc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7KCc6rGwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9