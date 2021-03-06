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
          src: "http://127.0.0.1:3065/".concat(v),
          style: {
            width: '200px'
          },
          alt: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this)]
      }, v, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VJbnB1dCIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0IiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImltYWdlUGF0aHMiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImFsZXJ0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwIiwiYXBwZW5kIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwibm90aWZpY2F0aW9uIiwib3BlbiIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7OztBQUdBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEZ0Isa0JBRXNCQywrREFBUSxDQUFDLEVBQUQsQ0FGOUI7QUFBQTtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxZQUZHO0FBQUEsTUFFV0MsT0FGWDs7QUFHaEIsTUFB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Q0FkTDtBQUFBLGtCQURKO0FBeUJIOztHQTVGUWxELFE7VUFDWUUsdUQsRUFDcUJDLHVELEVBRWNNLHVEOzs7S0FKL0NULFE7QUErRk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiYzRlZTEwNDQ5NjAyMWYyZDk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IFR3ZWV0Rm9ybSwgVHdlZXRCdXR0b24sIFR3ZWV0VGV4dEFyZWEgfSBmcm9tIFwiLi9zdHlsZS9Qb3N0Rm9ybVN0eWxlLmpzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQnV0dG9uLCBub3RpZmljYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0Rm9ybSgpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB7IGFkZFBvc3RMb2FkaW5nLCBhZGRQb3N0RG9uZSwgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhZGRQb3N0RG9uZSkge1xyXG4gICAgICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWY7IS47JqULicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g7Y+8642w7J207YSwIOqwneyytOyXkCDsnbTrr7jsp4DsmYAg7YWN7Iqk7Yq4IOygleuztOulvCDshKTsoJUg7ZWc65KkIFxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTtcclxuXHJcbiAgICAgICAgLy8g7JWh7IWYIGRhdGHroZwg7ISk7KCVXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAn7JWM66a8JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicG9zdGluZyDshLHqs7UhXCJcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sIFt0ZXh0LCBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZXMgOiAnLCBlLnRhcmdldC5maWxlcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XHJcbiAgICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImltYWdlRm9ybURhdGEgOiBcIiwgaW1hZ2VGb3JtRGF0YSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUd2VldEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxUd2VldFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17YWRkUG9zdExvYWRpbmd9PuynueynuTwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9Ud2VldEZvcm0+XHJcbiAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovLzEyNy4wLjAuMTozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZUltYWdlKGkpfT7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=