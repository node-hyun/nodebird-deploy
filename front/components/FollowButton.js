import React, { useCallback } from 'react';
import { Button, notification } from 'antd'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';


const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);

    const isFollowing = me?.Followings.find((v) => v.id === post.User.id);

    const onClickButton = useCallback(() => {
        console.log("isFollowing(FollowButton) : ", isFollowing);
        if (isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            });

            notification.open({
                message: '알림',
                description: "팔로잉 취소 성공 !!"
            })

        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            });

            notification.open({
                message: '알림',
                description: "팔로우 성공 !!"
            })

        }
    }, [isFollowing]);

    return (
        <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? '언팔로우' : '팔로우'}
        </Button>
    )
};


FollowButton.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FollowButton;

