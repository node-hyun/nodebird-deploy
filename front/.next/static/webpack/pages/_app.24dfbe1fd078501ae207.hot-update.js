webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(changeNickname),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUser),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removeFollower),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowers),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadFollowings),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMyInfo),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowers),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadFollowings),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemoveFollower),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUser),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchChangeNickname),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);





function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function changeNickname(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function changeNickname$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function loadUserAPI(data) {
  console.log("data from loadUserAPI : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/user/".concat(data));
}

function loadUser(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("action.data from saga function loadUser: ", action.data);
          _context2.prev = 1;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserAPI, action.data);

        case 4:
          result = _context2.sent;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
            data: result.data
          });

        case 7:
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
            error: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/user/follower/".concat(data));
}

function removeFollower(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removeFollower$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removeFollowerAPI, action.data);

        case 3:
          result = _context3.sent;
          console.log("result (리무부 팔로워) :  result");
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
            data: result.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function loadFollowersAPI(data) {
  console.log("data from loadFollowersAPI: ", data); // return axios.get(`/user/followers?limit=${data.limit || 3}`, data);

  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/user/followers', data);
}

function loadFollowers(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowers$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowersAPI, action.data);

        case 3:
          result = _context4.sent;
          console.log("result from saga for loadFollowersAPI:", result);
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context4.next = 14;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
            error: _context4.t0.response.data
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function loadFollowingsAPI(data) {
  console.log("data from loadFollowingsAPI: ", data);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/user/followings", data);
}

function loadFollowings(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadFollowings$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadFollowingsAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log("result from saga for loadFollowersAPI:", result);
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
            error: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

function signUpAPI(data) {
  // console.log("saga signUpAPI 실행 확인 회원 가입 정보는 => ", data);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user', data);
}

function signUp(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);

        case 3:
          result = _context6.sent;
          console.log("회원 가입 응답 result : ", result);
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 7:
          _context6.next = 14;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context6.t0.response.data
          });

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 9]]);
}

function followAPI(data) {
  // return axios.post('/api/follow');
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("/user/".concat(data, "/follow"));
}

function follow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(followAPI, action.data);

        case 3:
          result = _context7.sent;
          console.log("result for followAPI from backend : ", result);
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            // data: action.data,
            data: result.data
          });

        case 7:
          _context7.next = 14;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context7.t0.response.data
          });

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 9]]);
}

function unfollowAPI(data) {
  // return axios.post('/api/unfollow');
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("/user/".concat(data, "/follow"));
}

function unfollow(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unfollowAPI, action.data);

        case 3:
          result = _context8.sent;
          console.log("result for unfollowAPI from backend : ", result);
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            // data: action.data,
            data: result.data
          });

        case 7:
          _context8.next = 14;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          _context8.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context8.t0.response.data
          });

        case 14:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 9]]);
}

function logInAPI(data) {
  console.log("로그인 데이터 to 서버 from saga: ", data); // return axios.post('/api/login', data);

  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/login', data);
}

function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);

        case 3:
          result = _context9.sent;
          console.log("result.data(from server) : ", result.data);
          _context9.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            // data: action.data,
            data: result.data
          });

        case 7:
          _context9.next = 15;
          break;

        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.log("로그인 에러 확인 from saga : ", _context9.t0);
          console.error(_context9.t0);
          _context9.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context9.t0.response.data
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 9]]);
}

function logOutAPI(data) {
  // return axios.post('/api/login', data);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/logout', data);
}

function logOut(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          console.log('saga logout'); // yield delay(2000);

          _context10.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);

        case 4:
          result = _context10.sent;
          _context10.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
          });

        case 7:
          _context10.next = 14;
          break;

        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          _context10.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context10.t0.response.data
          });

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 9]]);
} // function loadUserAPI() {
//     return axios.get('/user');
// }
// function* loadUser(action) {
//     try {
//         const result = yield call(loadUserAPI, action.data);
//         yield put({
//             type: LOAD_MY_INFO_SUCCESS,
//             data: result.data,
//         });
//     } catch (err) {
//         console.error(err);
//         yield put({
//             type: LOAD_MY_INFO_FAILURE,
//             error: err.response.data,
//         });
//     }
// }


function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/user');
}

function loadMyInfo() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMyInfo$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
            error: _context11.t0.response.data
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          console.log("saga watch 실행 check");
          _context12.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 3:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          console.log("saga watch 실행 check");
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 3:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
} // function* watchLoadUser() {
//     yield takeLatest(LOAD_MY_INFO_REQUEST, loadUser);
// }


function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchLoadFollowers() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowers$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchLoadFollowings() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadFollowings$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchRemoveFollower() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemoveFollower$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchLoadUser() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUser$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchChangeNickname() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchChangeNickname$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname)]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VOaWNrbmFtZSIsImxvYWRVc2VyIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3MiLCJzaWduVXAiLCJmb2xsb3ciLCJ1bmZvbGxvdyIsImxvZ0luIiwibG9nT3V0IiwibG9hZE15SW5mbyIsIndhdGNoTG9nT3V0Iiwid2F0Y2hMb2dJbiIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaEZvbGxvdyIsIndhdGNoU2lnblVwIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsInVzZXJTYWdhIiwiY2hhbmdlTmlja25hbWVBUEkiLCJkYXRhIiwiYXhpb3MiLCJwYXRjaCIsIm5pY2tuYW1lIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsImNvbnNvbGUiLCJlcnJvciIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2FkVXNlckFQSSIsImxvZyIsImdldCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJyZW1vdmVGb2xsb3dlckFQSSIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJsb2FkRm9sbG93ZXJzQVBJIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJsb2FkRm9sbG93aW5nc0FQSSIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJwb3N0IiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJsb2dJbkFQSSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJsb2dPdXRBUEkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2FkTXlJbmZvQVBJIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfSU5fUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBNkNVQSxjO21HQXFCQUMsUTttR0FxQkFDLGM7bUdBdUJBQyxhO21HQXNCQUMsYzttR0F1QkFDLE07bUdBcUJBQyxNO21HQXlCQUMsUTttR0F5QkFDLEs7b0dBMEJBQyxNO29HQXdDQUMsVTtvR0FnQkFDLFc7b0dBSUFDLFU7b0dBS0FDLGE7b0dBR0FDLFc7b0dBSUFDLFc7b0dBT0FDLGU7b0dBSUFDLGtCO29HQUlBQyxtQjtvR0FJQUMsbUI7b0dBSUFDLGE7b0dBSUFDLG1CO29HQUllQyxROztBQW5XekI7QUFDQTtBQXNDQTs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDN0IsU0FBT0MsNENBQUssQ0FBQ0MsS0FBTixDQUFZLGdCQUFaLEVBQThCO0FBQUVDLFlBQVEsRUFB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RSwrREFBSSxDQUFDdEUsV0FBRCxDQUhFLEVBSU5zRSwrREFBSSxDQUFDdkUsYUFBRCxDQUpFLEVBS051RSwrREFBSSxDQUFDakUsbUJBQUQsQ0FMRSxFQU1OaUUsK0RBQUksQ0FBQ3JFLFdBQUQsQ0FORSxFQU9OcUUsK0RBQUksQ0FBQ2hFLGFBQUQsQ0FQRSxFQVFOZ0UsK0RBQUksQ0FBQ3BFLGVBQUQsQ0FSRSxFQVNOb0UsK0RBQUksQ0FBQ25FLGtCQUFELENBVEUsRUFVTm1FLCtEQUFJLENBQUNsRSxtQkFBRCxDQVZFLEVBV05rRSwrREFBSSxDQUFDL0QsbUJBQUQsQ0FYRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNGRmYmUxZmQwNzg1MDFhZTIwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgIExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcblxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG5cclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBsb2FkVXNlckFQSSA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YSBmcm9tIHNhZ2EgZnVuY3Rpb24gbG9hZFVzZXI6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlRm9sbG93ZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCAo66as66y067aAIO2MlOuhnOybjCkgOiAgcmVzdWx0XCIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBmcm9tIGxvYWRGb2xsb3dlcnNBUEk6IFwiLCBkYXRhKTtcclxuICAgIC8vIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2RhdGEubGltaXQgfHwgM31gLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZnJvbSBzYWdhIGZvciBsb2FkRm9sbG93ZXJzQVBJOlwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gbG9hZEZvbGxvd2luZ3NBUEk6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2luZ3NgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZnJvbSBzYWdhIGZvciBsb2FkRm9sbG93ZXJzQVBJOlwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2FnYSBzaWduVXBBUEkg7Iuk7ZaJIO2ZleyduCDtmozsm5Ag6rCA7J6FIOygleuztOuKlCA9PiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIu2ajOybkCDqsIDsnoUg7J2R64u1IHJlc3VsdCA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvdycpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIGZvbGxvd0FQSSBmcm9tIGJhY2tlbmQgOiBcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxuXHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIHVuZm9sbG93QVBJIGZyb20gYmFja2VuZCA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOuNsOydtO2EsCB0byDshJzrsoQgZnJvbSBzYWdhOiBcIiwgZGF0YSk7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGEoZnJvbSBzZXJ2ZXIpIDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOyXkOufrCDtmZXsnbggZnJvbSBzYWdhIDogXCIsIGVycik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dvdXQnKTtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgyMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBsb2FkVXNlckFQSSgpIHtcclxuLy8gICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbi8vICAgICAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbi8vICAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4vLyAgICAgICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4vLyAgICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbi8vICAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkVXNlcik7XHJcbi8vIH1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93ZXJzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkRm9sbG93ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2luZ3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrbmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=