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
            data: result.data.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJ1cGRhdGVQb3N0IiwibG9hZFVzZXJQb3N0cyIsImxvYWRIYXNodGFnUG9zdHMiLCJzZWFyY2hQb3N0cyIsInJldHdlZXQiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHMiLCJ1cGxvYWRJbWFnZXMiLCJkZWxldGVDb21tZW50IiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoRGVsZXRlQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFNlYXJjaFBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hVcGRhdGVQb3N0IiwicG9zdFNhZ2EiLCJ1cGRhdGVQb3N0QVBJIiwiZGF0YSIsImF4aW9zIiwicHV0IiwicG9zdElkIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiVVBEQVRFX1BPU1RfU1VDQ0VTUyIsImlkIiwiZXJyb3IiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2FkVXNlclBvc3RzQVBJIiwibGFzdElkIiwiZ2V0IiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiU2VhcmNoUG9zdHNBUEkiLCJzZWFyY2hfd29yZCIsImxlbmd0aCIsIlNFQVJDSF9QT1NUU19TVUNDRVNTIiwiU0VBUkNIX1BPU1RTX0ZBSUxVUkUiLCJyZXR3ZWV0QVBJIiwicG9zdCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsImFkZFBvc3RBUEkiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJsb2FkUG9zdHNBUEkiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJ1cGxvYWRJbWFnZXNBUEkiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJkZWxldGVDb21tZW50QVBJIiwiUG9zdElkIiwiQ29tbWVudElkIiwiREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyIsIkRFTEVURV9DT01NRU5UX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsInVubGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidGFrZUxhdGVzdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1JFUVVFU1QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJSRVRXRUVUX1JFUVVFU1QiLCJTRUFSQ0hfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9B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QUQsQ0FYRSxFQVlObUYsK0RBQUksQ0FBQ2xGLGtCQUFELENBWkUsRUFhTmtGLCtEQUFJLENBQUVqRixlQUFGLENBYkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTdmMDRmNjhlYWFjNDA5OGE5ODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cclxuICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuXHJcbiAgICBERUxFVEVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIERFTEVURV9DT01NRU5UX0ZBSUxVUkUsXHJcblxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLFxyXG5cclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICBSRVRXRUVUX0ZBSUxVUkUsXHJcblxyXG4gICAgU0VBUkNIX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBTRUFSQ0hfUE9TVFNfU1VDQ0VTUyxcclxuICAgIFNFQVJDSF9QT1NUU19GQUlMVVJFLFxyXG5cclxuICAgIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSwgIFxyXG5cclxuICAgIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuXHJcbiAgICBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4gICAgVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVQREFURV9QT1NUX0ZBSUxVUkUgLFxyXG5cclxuXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbi8vIGFkZCB5b3VyIGFwaSAxMTIyXHJcbmZ1bmN0aW9uIHVwZGF0ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnB1dChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vdXBkYXRlYCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGRhdGVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwZGF0ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgdXBkYXRlIHBvc3QgOiBcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBEQVRFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtkYXRhfT9sYXN0SWQ9JHtsYXN0aWQgfHwgMH1gKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDogJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvc2VhcmNoL3Bvc3RzLyR7ZGF0YS5zZWFyY2hfd29yZH0vJHtkYXRhLmxhc3RJZCB8fCAwfT9gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbi5kYXRhIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFNlYXJjaFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIFNlYXJjaFBvc3RzQVBJIDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIFNlYXJjaFBvc3RzQVBJIDogXCIsIHJlc3VsdC5kYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgOiBcIiwgZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhIGZvciBwb3N0aW5nIGF0IHNhZ2EgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBwb3N0aW5nIDogXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIGJhY2tlbmQsIHBvc3RJZCDtmZXsnbgg7ZWY6riwIDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBzYWdhIGZvciBhZGQgY29tbWVudCA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRDb21lbnQgYWN0aW9uIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQocmVzcG9uc2UgZnJvbSBiYWNrZW5kIGZyb20gaW5zZXJ0IGNvbW1lbnQpOiBcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsl5Drn6wgOiBcIiwgZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgbG9hZFBvc3RzQVBJIDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIGxvYWRQb3N0c0FQSSA6IFwiLCByZXN1bHQuZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSDtmZXsnbggZnJvbSBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIO2ZleyduCBmcm9tIHNhZ2EgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGBwb3N0L2NvbW1lbnQvJHtkYXRhLlBvc3RJZH0vJHtkYXRhLkNvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUNvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGVsZXRlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7IKt7KCc7JeQIOuMgO2VnCDsnZHri7UgOiBcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvLyDrnbzsmrDthLDsl5DshJwg64yT6riAIOyCreygnO2VnOuSpCBQb3N0SWTsmYAgQ29tbWVudElkIOumrO2EtCBcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfQ09NTUVOVF9SRVFVRVNULCBkZWxldGVDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfUE9TVFNfUkVRVUVTVCwgc2VhcmNoUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVQb3N0KCkge1xyXG4gICAgeWllbGQgdGhyb3R0bGUoNTAwMCwgVVBEQVRFX1BPU1RfUkVRVUVTVCwgdXBkYXRlUG9zdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoRGVsZXRlQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgICAgICBmb3JrICh3YXRjaFVwZGF0ZVBvc3QpLFxyXG4gICAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==