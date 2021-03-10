webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, SEARCH_POSTS_REQUEST, SEARCH_POSTS_SUCCESS, SEARCH_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS_REQUEST", function() { return SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS_SUCCESS", function() { return SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS_FAILURE", function() { return SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_REQUEST", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_REQUEST", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_SUCCESS", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_FAILURE", function() { return DELETE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\nodebird-deploy\\front\\reducers\\post.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  searchPostsLoading: false,
  searchPostsDone: false,
  searchPostsError: null,
  imagePaths: [],
  hasMorePosts: true
}; // 액션 추가

var SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
var SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
var SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE'; // 댓글 추가

var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; // 포스트 업데이트

var UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
var UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
var UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
var DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
var DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addCommentError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = []; // draft.mainPosts.unshift(dummyPost(action.data));

        draft.mainPosts.unshift(action.data);
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case UPDATE_POST_SUCCESS:
        post = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("post"), draft.mainPosts.find(function (v) {
          return v.id === action.data.id;
        }));
        console.log("post : ", post);
        post.content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("action", {
          className: "data content"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 32
        }, _this);
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;

      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        });
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: false,
          addCommentError: action.error
        });

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          // draft.imagePaths = draft.action.data;
          draft.imagePaths.unshift(action.data);
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case DELETE_COMMENT_REQUEST:
        draft.deleteCommentLoading = false;
        draft.deleteCommentError = null;
        break;

      case DELETE_COMMENT_SUCCESS:
        draft.deleteCommentLoading = false;
        draft.deleteCommentDone = true;
        var index = draft.mainPosts.findIndex(function (v) {
          return v.id === action.data.PostId;
        });
        var CommentsForDelete = draft.mainPosts[index].Comments;
        draft.mainPosts[index].Comments = CommentsForDelete.filter(function (v) {
          return v.id !== action.data.CommentId;
        });
        break;

      case DELETE_COMMENT_FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          delteCommentLoading: false,
          delteCommentError: action.error
        });

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers.push({
            id: action.data.UserId
          });

          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Likers = _post2.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case SEARCH_POSTS_REQUEST:
        draft.searchPostsLoading = true;
        draft.searchPostsDone = false;
        break;

      case SEARCH_POSTS_SUCCESS:
        draft.searchPostsLoading = false;
        draft.searchPostsDone = true;
        draft.mainPosts = action.data;
        draft.hasMorePosts = action.data.length === 10;
        break;

      case SEARCH_POSTS_FAILURE:
        draft.searchPostsLoading = false;
        draft.searchPostsError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      default:
        return state;
    }
  });
}); // export default reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwZGF0ZVBvc3RMb2FkaW5nIiwidXBkYXRlUG9zdERvbmUiLCJ1cGRhdGVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwiZGVsZXRlQ29tbWVudExvYWRpbmciLCJkZWxldGVDb21tZW50RG9uZSIsImRlbGV0ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsInNlYXJjaFBvc3RzTG9hZGluZyIsInNlYXJjaFBvc3RzRG9uZSIsInNlYXJjaFBvc3RzRXJyb3IiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiU0VBUkNIX1BPU1RTX1JFUVVFU1QiLCJTRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIlNFQVJDSF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlVQREFURV9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiREVMRVRFX0NPTU1FTlRfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1NVQ0NFU1MiLCJERUxFVEVfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwidW5zaGlmdCIsImRhdGEiLCJlcnJvciIsInBvc3QiLCJmaW5kIiwidiIsImlkIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJQb3N0SWQiLCJDb21tZW50cyIsImZpbHRlciIsImNvbmNhdCIsImxlbmd0aCIsImkiLCJpbmRleCIsImZpbmRJbmRleCIsIkNvbW1lbnRzRm9yRGVsZXRlIiwiQ29tbWVudElkIiwiZGVsdGVDb21tZW50TG9hZGluZyIsImRlbHRlQ29tbWVudEVycm9yIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFHTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxFQURhO0FBRXhCQyxnQkFBYyxFQUFFLEtBRlE7QUFHeEJDLGFBQVcsRUFBRSxLQUhXO0FBSXhCQyxjQUFZLEVBQUUsSUFKVTtBQU14QkMsbUJBQWlCLEVBQUMsS0FOTTtBQU94QkMsZ0JBQWMsRUFBQyxLQVBTO0FBUXhCQyxpQkFBZSxFQUFDLElBUlE7QUFVeEJDLG1CQUFpQixFQUFFLEtBVks7QUFXeEJDLGdCQUFjLEVBQUUsS0FYUTtBQVl4QkMsaUJBQWUsRUFBRSxJQVpPO0FBY3hCQyxtQkFBaUIsRUFBRSxLQWRLO0FBZXhCQyxnQkFBYyxFQUFFLEtBZlE7QUFnQnhCQyxpQkFBZSxFQUFFLElBaEJPO0FBa0J4QkMsa0JBQWdCLEVBQUUsS0FsQk07QUFtQnhCQyxlQUFhLEVBQUUsS0FuQlM7QUFvQnhCQyxnQkFBYyxFQUFFLElBcEJRO0FBc0J4QkMscUJBQW1CLEVBQUUsS0F0Qkc7QUF1QnhCQyxrQkFBZ0IsRUFBRSxLQXZCTTtBQXdCeEJDLG1CQUFpQixFQUFFLElBeEJLO0FBMEJ4QkMsc0JBQW9CLEVBQUUsS0ExQkU7QUEyQnhCQyxtQkFBaUIsRUFBRSxLQTNCSztBQTRCeEJDLG9CQUFrQixFQUFFLElBNUJJO0FBOEJ4QkMsaUJBQWUsRUFBRSxLQTlCTztBQStCeEJD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O0FBQ0EsV0FBS3NCLHVCQUFMO0FBQ0EsV0FBS0gsMEJBQUw7QUFDSU8sYUFBSyxDQUFDbEUsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWtFLGFBQUssQ0FBQ2hFLGNBQU4sR0FBdUI4RCxNQUFNLENBQUNNLEtBQTlCO0FBQ0E7O0FBRUo7QUFDSSxlQUFPUCxLQUFQO0FBbE5SO0FBb05ILEdBck5hLENBQWQ7QUF1TkgsQ0F4TkQsRSxDQTBOQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFkZjkxOWE1MmU4NTU0NWVhNDg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdXBkYXRlUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICB1cGRhdGVQb3N0RG9uZTpmYWxzZSxcclxuICAgIHVwZGF0ZVBvc3RFcnJvcjpudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBkZWxldGVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBkZWxldGVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBkZWxldGVDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2VhcmNoUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNlYXJjaFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBzZWFyY2hQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG59O1xyXG5cclxuLy8g7JWh7IWYIOy2lOqwgFxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTX1JFUVVFU1QgPSAnU0VBUkNIX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSAnU0VBUkNIX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTX0ZBSUxVUkUgPSAnU0VBUkNIX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbi8vIOuMk+q4gCDstpTqsIBcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbi8vIO2PrOyKpO2KuCDsl4XrjbDsnbTtirhcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX1JFUVVFU1QgPSAnVVBEQVRFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9TVUNDRVNTID0gJ1VQREFURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfRkFJTFVSRSA9ICdVUERBVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX1JFUVVFU1QgPSAnREVMRVRFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9TVUNDRVNTID0gJ0RFTEVURV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfRkFJTFVSRSA9ICdERUxFVEVfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUERBVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUERBVEVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3QgOiBcIiwgcG9zdCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LmNvbnRlbnQgPSA8YWN0aW9uIGNsYXNzTmFtZT1cImRhdGEgY29udGVudFwiPjwvYWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQREFURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBkYXRlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgICAgIGNvbnN0IENvbW1lbnRzRm9yRGVsZXRlID0gZHJhZnQubWFpblBvc3RzW2luZGV4XS5Db21tZW50cztcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c1tpbmRleF0uQ29tbWVudHMgPSBDb21tZW50c0ZvckRlbGV0ZS5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRlQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNFQVJDSF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0VBUkNIX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTRUFSQ0hfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9