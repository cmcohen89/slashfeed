const LOAD_USER_POSTS = 'user_posts/LOAD';
const LOAD_USER_LIKED_POSTS = 'user_liked_posts/LOAD';

export const loadUserPosts = posts => {
    return {
        type: LOAD_USER_POSTS,
        posts
    }
}

export const loadUserLikedPosts = posts => {
    return {
        type: LOAD_USER_LIKED_POSTS,
        posts
    }
}

export const getUserPosts = (id) => async dispatch => {
    const response = await fetch(`/api/posts/user/${id}`)

    if (response.ok) {
        const posts = await response.json();
        dispatch(loadUserPosts(posts));
        return posts;
    }
}

export const getUserLikedPosts = (id) => async dispatch => {
    const response = await fetch(`/api/posts/user/${id}/liked`)

    if (response.ok) {
        const posts = await response.json();
        dispatch(loadUserLikedPosts(posts));
        return posts;
    }
}

const initialState = {};

const userPostsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOAD_USER_POSTS:
            newState.userPosts = action.posts.Posts.reduce((posts, post) => {
                posts[post.id] = post;
                return posts;
            }, {});
            return newState;
        case LOAD_USER_LIKED_POSTS:
            newState.userLikedPosts = action.posts.Posts.reduce((posts, post) => {
                posts[post.id] = post;
                return posts;
            }, {});
            return newState;
        default:
            return state;
    }
}

export default userPostsReducer;
