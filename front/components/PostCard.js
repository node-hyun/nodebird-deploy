import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Avatar, List, Comment, Popover, Button, notification, Modal } from 'antd';
// 컴퍼넌트 임포트
import CommentForm from './CommentForm';
import PostImages from "./PostImages";
import PostCardContent from "../components/PostCardContent";
import FollowButton from './FollowButton';
import CommentRow from './CommentRow';

// 11 RETWEET_REQUEST 임포트 추가
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST, UPDATE_POST_REQUEST } from '../reducers/post';
import Link from 'next/link';
import moment from 'moment';
import user from "../reducers/user";

import UpdatePostModal from './modal/UpdatePostModal';


const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const { removePostLoading, removePostDone } = useSelector((state) => state.post);
    const { me } = useSelector((state) => state.user);
    const id = me && me.id;
    const liked = post.Likers.find((v) => v.id === id);
    const comments_count = post.Comments.length;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
        notification.open({
            message: '알림',
            description: "포스팅 삭제 성공 !!"
        })

    }, [removePostDone]);

    const onLike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);

    const onUnlike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);

    // 33 리트윗 함수 추가
    const onRetweet = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        });
    }, [id]);

    return (
        <>
            <Card
                style={{ width: "100%", marginBottom: "10px" }}
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" onClick={onRetweet} />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                        : <HeartOutlined key="heart" onClick={onLike} />,
                    <span>
                        <MessageOutlined key="message" onClick={onToggleComment} /> ({post.Comments.length})
                    </span>,

                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id
                                    ? (
                                        <>
                                            { !post.Retweet && <Button onClick={showModal}>수정</Button>}
                                            <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,

                ]}
                extra={me && me.id == post.User.id ? <Button>내가 쓴 글</Button> : post.User.id && < FollowButton post={post} />}

                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
            >


                {post.RetweetId && post.Retweet
                    ? (
                        <Card
                            cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                        >
                            <span style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
                            <Card.Meta
                                avatar={<Link href={`/user/${post.Retweet.User.id}`}><a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a></Link>}
                                title={post.Retweet.User.nickname}
                                description={<PostCardContent postData={post.Retweet.content} />}
                            />
                        </Card>
                    )
                    : (
                        <>
                            <span style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
                            <Card.Meta
                                avatar={<Link href={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
                                title={post.User.nickname}
                                description={<PostCardContent postData={post.content} />}
                            />
                        </>
                    )}

            </Card>

            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                            <li>
                                <CommentRow comment={item} PostId={post.id} />
                            </li>
                        )}
                    />
                </>
            )}
            <UpdatePostModal postId={post.id} visible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
    );
};

export default PostCard;

