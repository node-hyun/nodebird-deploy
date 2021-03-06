import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:3065'; // ssr 로그인 유지 o
// axios.defaults.baseURL = 'http://localhost:3065'; ssr 로그인 유지 x
// axios.defaults.baseURL = 'http://api.nodebird-hyun.shop'; ssr 로그인 유지 x


axios.defaults.withCredentials = true;


export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}
