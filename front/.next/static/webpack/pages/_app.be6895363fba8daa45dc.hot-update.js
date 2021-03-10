webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updatePost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUserPosts),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadHashtagPosts),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(searchPosts),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(retweet),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteComment),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteComment),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRetweet),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSearchPosts),
    _marked24 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadHashtagPosts),
    _marked25 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUserPosts),
    _marked26 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUpdatePost),
    _marked27 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);


 // import shortId from 'shortid';


 // add your api 1122

function updatePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/post/".concat(data.postId, "/update"), data);
}

function updatePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updatePost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updatePostAPI, action.data);

        case 3:
          result = _context.sent;
          console.log("result for update post : ", result);
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_POST_FAILURE"],
            data: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/".concat(data, "/posts?lastId=").concat(lastId || 0));
}

function loadUserPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUserPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_FAILURE"],
            data: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function loadHashtagPostsAPI(data, lastId) {
  // return axios.get(`/hashtag/${data}?lastId=${lastid || 0}`);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/hashtag/".concat(encodeURIComponent(data), "?lastId=").concat(lastId || 0));
}

function loadHashtagPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadHashtagPosts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 13;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_FAILURE"],
            data: _context3.t0.response.data
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function SearchPostsAPI(data) {
  console.log('data : ', data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/search/posts/".concat(data.search_word, "/").concat(data.lastId || 0, "?"));
}

_c = SearchPostsAPI;

function searchPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function searchPosts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log("action.data : ", action.data);
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(SearchPostsAPI, action.data);

        case 4:
          result = _context4.sent;
          console.log("result for SearchPostsAPI : ", result);
          console.log("result for SearchPostsAPI : ", result.data.length);
          _context4.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["SEARCH_POSTS_SUCCESS"],
            data: result.data
          });

        case 9:
          _context4.next = 17;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log("error : ", _context4.t0);
          console.error(_context4.t0);
          _context4.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["SEARCH_POSTS_FAILURE"],
            data: _context4.t0.response.data
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 11]]);
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data, "/retweet"));
}

function retweet(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function retweet$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function addPostAPI(data) {
  // console.log("data for posting at saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', data);
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context6.sent;
          console.log("result for posting : ", result);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context6.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 9:
          _context6.next = 16;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            data: _context6.t0.response.data
          });

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 11]]);
}

function removePostAPI(data) {
  // return axios.delete('/api/post', data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data));
}

function removePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);

        case 3:
          result = _context7.sent;
          console.log("result from backend, postId 확인 하기 : ", result.data);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            // data: action.data,
            data: result.data
          });

        case 7:
          _context7.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            // data: action.data,
            data: result.data
          });

        case 9:
          _context7.next = 16;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            data: _context7.t0.response.data
          });

        case 16:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 11]]);
}

function addCommentAPI(data) {
  console.log("data from saga for add comment : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log("addComent action : ", action.data);
          _context8.prev = 1;
          _context8.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 4:
          result = _context8.sent;
          console.log("result(response from backend from insert comment): ", result);
          _context8.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 8:
          _context8.next = 15;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          console.log("댓글 에러 : ", _context8.t0);
          _context8.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            data: _context8.t0.response.data
          });

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[1, 10]]);
}

function loadPostsAPI(lastId) {
  // return axios.get('/posts', data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts?lastId=".concat(lastId || 0));
}

function loadPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);

        case 3:
          result = _context9.sent;
          console.log("result for loadPostsAPI : ", result);
          console.log("result for loadPostsAPI : ", result.data.length);
          _context9.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 8:
          _context9.next = 15;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            data: _context9.t0.response.data
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function uploadImagesAPI(data) {
  console.log("data 확인 from saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/images', data);
}

function uploadImages(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context10.next = 13;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
            error: _context10.t0.response.data
          });

        case 13:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 8]]);
}

function deleteCommentAPI(data) {
  console.log("data 확인 from saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("post/comment/".concat(data.PostId, "/").concat(data.CommentId));
}

function deleteComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteComment$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(deleteCommentAPI, action.data);

        case 3:
          result = _context11.sent;
          console.log("삭제에 대한 응답 : ", result.data);
          _context11.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_COMMENT_SUCCESS"],
            // 라우터에서 댓글 삭제한뒤 PostId와 CommentId 리턴 
            data: result.data
          });

        case 7:
          _context11.next = 14;
          break;

        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_COMMENT_FAILURE"],
            error: _context11.t0.response.data
          });

        case 14:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 9]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/post/".concat(data, "/like"));
}

function likePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context12.sent;
          _context12.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context12.next = 13;
          break;

        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          _context12.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
            error: _context12.t0.response.data
          });

        case 13:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12, null, [[0, 8]]);
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data, "/like"));
}

function unlikePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context13.next = 13;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          _context13.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
            error: _context13.t0.response.data
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 8]]);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchUploadImages() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchDeleteComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteComment$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["DELETE_COMMENT_REQUEST"], deleteComment);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchUnlikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchRetweet() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRetweet$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["RETWEET_REQUEST"], retweet);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function watchSearchPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSearchPosts$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["SEARCH_POSTS_REQUEST"], searchPosts);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

function watchLoadHashtagPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadHashtagPosts$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);

        case 2:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}

function watchLoadUserPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUserPosts$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);

        case 2:
        case "end":
          return _context25.stop();
      }
    }
  }, _marked25);
}

function watchUpdatePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUpdatePost$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_POST_REQUEST"], updatePost);

        case 2:
        case "end":
          return _context26.stop();
      }
    }
  }, _marked26);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSearchPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdatePost)]);

        case 2:
        case "end":
          return _context27.stop();
      }
    }
  }, _marked27);
}

var _c;

$RefreshReg$(_c, "SearchPostsAPI");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVQb3N0IiwibG9hZFVzZXJQb3N0cyIsImxvYWRIYXNodGFnUG9zdHMiLCJzZWFyY2hQb3N0cyIsInJldHdlZXQiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHMiLCJ1cGxvYWRJbWFnZXMiLCJkZWxldGVDb21tZW50IiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoRGVsZXRlQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFNlYXJjaFBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hVcGRhdGVQb3N0IiwicG9zdFNhZ2EiLCJ1cGRhdGVQb3N0QVBJIiwiZGF0YSIsImF4aW9zIiwicHV0IiwicG9zdElkIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiVVBEQVRFX1BPU1RfU1VDQ0VTUyIsImVycm9yIiwiVVBEQVRFX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwibG9hZFVzZXJQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIlNlYXJjaFBvc3RzQVBJIiwic2VhcmNoX3dvcmQiLCJsZW5ndGgiLCJTRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIlNFQVJDSF9QT1NUU19GQUlMVVJFIiwicmV0d2VldEFQSSIsInBvc3QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJhZGRQb3N0QVBJIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJsb2FkUG9zdHNBUEkiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJ1cGxvYWRJbWFnZXNBUEkiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJkZWxldGVDb21tZW50QVBJIiwiUG9zdElkIiwiQ29tbWVudElkIiwiREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyIsIkRFTEVURV9DT01NRU5UX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsInVubGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidGFrZUxhdGVzdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1JFUVVFU1QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJSRVRXRUVUX1JFUVVFU1QiLCJTRUFSQ0hfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9B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SSxDQUFDbEYsa0JBQUQsQ0FaRSxFQWFOa0YsK0RBQUksQ0FBRWpGLGVBQUYsQ0FiRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZTY4OTUzNjNmYmE4ZGFhNDVkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcblxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG5cclxuICAgIERFTEVURV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBERUxFVEVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgREVMRVRFX0NPTU1FTlRfRkFJTFVSRSxcclxuXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcblxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG5cclxuICAgIFJFVFdFRVRfUkVRVUVTVCxcclxuICAgIFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgIFJFVFdFRVRfRkFJTFVSRSxcclxuXHJcbiAgICBTRUFSQ0hfUE9TVFNfUkVRVUVTVCxcclxuICAgIFNFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgU0VBUkNIX1BPU1RTX0ZBSUxVUkUsXHJcblxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLCAgXHJcblxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG5cclxuICAgIFVQREFURV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVUERBVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBEQVRFX1BPU1RfRkFJTFVSRSAsXHJcblxyXG5cclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuLy8gYWRkIHlvdXIgYXBpIDExMjJcclxuZnVuY3Rpb24gdXBkYXRlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucHV0KGAvcG9zdC8ke2RhdGEucG9zdElkfS91cGRhdGVgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBkYXRlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciB1cGRhdGUgcG9zdCA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUERBVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2RhdGF9P2xhc3RJZD0ke2xhc3RpZCB8fCAwfWApO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gU2VhcmNoUG9zdHNBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEgOiAnLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9zZWFyY2gvcG9zdHMvJHtkYXRhLnNlYXJjaF93b3JkfS8ke2RhdGEubGFzdElkIHx8IDB9P2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aW9uLmRhdGEgOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoU2VhcmNoUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgU2VhcmNoUG9zdHNBUEkgOiBcIiwgcmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgU2VhcmNoUG9zdHNBUEkgOiBcIiwgcmVzdWx0LmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciA6IFwiLCBlcnIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGEgZm9yIHBvc3RpbmcgYXQgc2FnYSA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIHBvc3RpbmcgOiBcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmRlbGV0ZSgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZyb20gYmFja2VuZCwgcG9zdElkIO2ZleyduCDtlZjquLAgOiBcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvLyBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICAvLyBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBmcm9tIHNhZ2EgZm9yIGFkZCBjb21tZW50IDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZENvbWVudCBhY3Rpb24gOiBcIiwgYWN0aW9uLmRhdGEpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdChyZXNwb25zZSBmcm9tIGJhY2tlbmQgZnJvbSBpbnNlcnQgY29tbWVudCk6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi64yT6riAIOyXkOufrCA6IFwiLCBlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBsb2FkUG9zdHNBUEkgOiBcIiwgcmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgbG9hZFBvc3RzQVBJIDogXCIsIHJlc3VsdC5kYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIO2ZleyduCBmcm9tIHNhZ2EgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEg7ZmV7J24IGZyb20gc2FnYSA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYHBvc3QvY29tbWVudC8ke2RhdGEuUG9zdElkfS8ke2RhdGEuQ29tbWVudElkfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZGVsZXRlQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLsgq3soJzsl5Ag64yA7ZWcIOydkeuLtSA6IFwiLCByZXN1bHQuZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIOudvOyasO2EsOyXkOyEnCDrjJPquIAg7IKt7KCc7ZWc65KkIFBvc3RJZOyZgCBDb21tZW50SWQg66as7YS0IFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZUNvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9DT01NRU5UX1JFUVVFU1QsIGRlbGV0ZUNvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9QT1NUU19SRVFVRVNULCBzZWFyY2hQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwZGF0ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBVUERBVEVfUE9TVF9SRVFVRVNULCB1cGRhdGVQb3N0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hEZWxldGVDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsgKHdhdGNoVXBkYXRlUG9zdCksXHJcbiAgICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9