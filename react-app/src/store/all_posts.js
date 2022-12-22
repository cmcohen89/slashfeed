const LOAD_POSTS = 'posts/LOAD';
const DELETE_POST = 'posts/DELETE';

export const loadPosts = posts => {
    return {
        type: LOAD_POSTS,
        posts
    };
};

export const deletePostAction = postId => {
    return {
        type: DELETE_POST,
        postId
    };
};

export const getPosts = () => async dispatch => {
    const response = await fetch('/api/posts');

    if (response.ok) {
        const posts = await response.json();
        dispatch(loadPosts(posts));
        return posts;
    };
};

export const deletePost = postId => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const deletedMsg = await response.json();
        dispatch(deletePostAction(postId));
        return deletedMsg;
    };
};

export const likePost = postId => async dispatch => {
    const response = await fetch(`/api/likes/${postId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const successMsg = await response.json();
        return successMsg;
    }
}

export const unlikePost = postId => async dispatch => {
    const response = await fetch(`/api/likes/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const successMsg = await response.json();
        return successMsg;
    }
}

const initialState = {};

const allPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return action.posts.Posts.reduce((posts, post) => {
                posts[post.id] = post;
                return posts;
            }, {});
        case DELETE_POST:
            const newState = { ...state };
            delete newState[action.postId];
            return newState;
        default:
            return state;
    };
};

export default allPostsReducer;
