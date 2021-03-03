import produce from 'immer';
import shortId from 'shortid';
import faker from 'faker';


export const initialState = {
    mainPosts: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

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
    hasMorePosts: true,
};

// 액션 추가
export const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
export const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
export const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 댓글 추가
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addCommentError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.imagePaths = [];
                // draft.mainPosts.unshift(dummyPost(action.data));
                draft.mainPosts.unshift(action.data);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;

            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = false;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;

            case ADD_COMMENT_FAILURE:
                return {
                    ...state,
                    addCommentLoading: false,
                    addCommentError: action.error,
                };
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);

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
            case UPLOAD_IMAGES_SUCCESS: {
                // draft.imagePaths = draft.action.data;
                draft.imagePaths.unshift(action.data)
                draft.uploadImagesLoading = false;
                draft.uploadImagesDone = true;
                break;
            }
            case UPLOAD_IMAGES_FAILURE:
                draft.uploadImagesLoading = false;
                draft.uploadImagesError = action.error;
                break;
            case REMOVE_IMAGE:
                draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
                break;

            case DELETE_COMMENT_REQUEST:
                draft.deleteCommentLoading = false;
                draft.deleteCommentError = null;
                break;
            case DELETE_COMMENT_SUCCESS:
                draft.deleteCommentLoading = false;
                draft.deleteCommentDone = true;
                const index = draft.mainPosts.findIndex((v) => v.id === action.data.PostId)
                const CommentsForDelete = draft.mainPosts[index].Comments;
                draft.mainPosts[index].Comments = CommentsForDelete.filter((v) => v.id !== action.data.CommentId)
                break;
            case DELETE_COMMENT_FAILURE:
                return {
                    ...state,
                    delteCommentLoading: false,
                    delteCommentError: action.error,
                };
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers.push({ id: action.data.UserId });
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
            case UNLIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
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
            case RETWEET_SUCCESS: {
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

}

// export default reducer;
