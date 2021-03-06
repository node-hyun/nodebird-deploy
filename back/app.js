const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
// 쿠키 파서 임포트
const cookieParser = require('cookie-parser');
// 세션 임포트
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');
const searchRouter = require('./routes/search');
const hashtagRouter = require('./routes/hashtag');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');

const prod = process.env.NODE_ENV === 'production';

// passport index.js 에 설정한것을 익스프레스에 적용
passportConfig();

db.sequelize.sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch("error ::::: ", console.error)

// if (process.env.NODE_ENV === 'production') {
//     app.use(morgan('combined'));
//     app.use(hpp());
//     app.use(helmet());
// } else {
//     app.use(morgan('dev'));
// }

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://nodebird-hyun.shop'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 쿠키 설정 등록
app.use(cookieParser(process.env.COOKIE_SECRET));
// 세션 설정 등록
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        domain: process.env.NODE_ENV === 'production' && '.nodebird-hyun.shoop'
    },
}));
app.use(passport.initialize());
app.use(passport.session({
    saveUninitialized: false,
    resave: false,
    cookie: {
        domain: process.env.NODE_ENV === 'production' && '.nodebird-hyun.com'
    },
}));

app.get('/', (req, res) => {
    res.send("hello express");
});

// 파일 업로드 폴더 설정
app.use('/', express.static(path.join(__dirname, 'uploads')));

// 라우터 로직 분기
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);
app.use('/hashtag', hashtagRouter);



app.listen(prod ? process.env.port : 3065, () => {
    // app.listen(80 , () => {
    console.log("Ecpress Server is Excuting");
});

