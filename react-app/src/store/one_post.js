const LOAD_SINGLE_POST = 'posts/LOAD_SINGLE';
// const UPDATE_POST = 'posts/UPDATE';

export const loadSinglePost = post => {
    return {
        type: LOAD_SINGLE_POST,
        post
    };
};

// export const updatePost = post => {
//     return {
//         type: UPDATE_POST,
//         post
//     };
// };

export const getSinglePost = postId => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`);

    if (response.ok) {
        const post = await response.json();
        dispatch(loadSinglePost(post));
        return post;
    };
};

export const postSinglePost = payload => async dispatch => {
    const { title, body, preview_img_url } = payload;

    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            body,
            preview_img_url
        })
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(loadSinglePost(post));
        return post;
    }
};

export const putSinglePost = (payload, postId) => async dispatch => {
    const { title, body } = payload;

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            body
        })
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(loadSinglePost(post));
        return post;
    }
};

const initialState = {};

const singlePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SINGLE_POST:
            return {
                ...state,
                [action.post.id]: { ...action.post }
            };
        default:
            return state;
    };
};

export default singlePostReducer;
