import { Input, Button, notification } from "antd";
import Link from "next/link";
import { LoginFormWrapper, LoginButtonWrapper } from "./style/LoginFormStyle.js";
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';
import useInput from '../hooks/useInput';

// import React, { useState, useCallback } from "react";
import React, { useState, useCallback, useMemo, useEffect } from "react";


const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput('');

    const [password, setPassword] = useState("");
    const { me, logInLoading, logInDone, logOutLoading, logOutDone, logOutUser, logInError } = useSelector((state) => state.user);

    // console.log("logOutDone : ", logOutDone);
    // console.log("logInDone : ", logInDone);

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault()

        dispatch({
            type: LOG_IN_REQUEST,
            data: { email, password },
        });

        notification.open({
            message: '알림',
            description: `안녕히 가세요 ${logOutUser} 님 !!`
        })

    }, [email, password, logInDone]);

    return (
        <LoginFormWrapper onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="user-id">이메일</label>
                <br />
                <Input
                    name="user-id"
                    value={email}
                    onChange={onChangeEmail}
                    required
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <LoginButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원 가입</Button>
                    </a>
                </Link>
            </LoginButtonWrapper>
        </LoginFormWrapper>
    );
};


export default LoginForm;

