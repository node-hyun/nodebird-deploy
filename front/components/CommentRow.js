// import React from 'react'
import React, { useEffect, useCallback } from "react";
import { Avatar, Comment, notification  } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import { CommentRowRapper } from './style/CommentRowStyle';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_COMMENT_REQUEST } from '../reducers/post'


function CommentRow({ comment, PostId }) {
    const dispatch = useDispatch();
    console.log(comment);
    const { deleteCommentDone } = useSelector((state) => state.post);


    const deleteComment = useCallback(() => {
        dispatch({
            type: DELETE_COMMENT_REQUEST,
            data: {
                CommentId: comment.id,
                PostId
            }
        });
        notification.open({
            message: '알림',
            description: "댓글 삭제 성공 !!"
        })
    }, [deleteCommentDone]);

    return (
        <CommentRowRapper>
            <Comment
                author={comment.User.nickname}
                avatar={<Avatar>{comment.User.nickname[0]}</Avatar>}
                content={comment.content}
            />
            <CloseSquareOutlined onClick={deleteComment} style={{ fontSize: '20px', color: '#08c' }} />
        </CommentRowRapper>
    )
}

export default CommentRow
