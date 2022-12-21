const LOAD_COMMENTS = 'comments/LOAD';
const ADD_COMMENT = 'comments/ADD';
const DELETE_COMMENT = 'comments/DELETE';

export const loadComments = comments => {
    return {
        type: LOAD_COMMENTS,
        comments
    };
};

export const addComment = comment => {
    return {
        type: ADD_COMMENT,
        comment
    };
};

export const deleteCommentAction = commentId => {
    return {
        type: DELETE_COMMENT,
        commentId
    };
};

export const getComments = postId => async dispatch => {
    const response = await fetch(`/api/comments/${postId}`);

    if (response.ok) {
        const comments = await response.json();
        dispatch(loadComments(comments));
        return comments;
    };
};

export const postComment = (body, postId) => async dispatch => {
    const response = await fetch(`/api/comments/${postId}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
        return comment;
    }
}

export const putComment = (body, id) => async dispatch => {
    const response = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
        return comment;
    };
};

export const deleteComment = (id) => async dispatch => {
    const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const deletedMsg = await response.json();
        dispatch(deleteCommentAction(id));
        return deletedMsg;
    };
};

const initialState = {};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return action.comments.Comments.reduce((comments, comment) => {
                comments[comment.id] = comment;
                return comments;
            }, {});
        case ADD_COMMENT:
            return { ...state, [action.comment.id]: action.comment }
        case DELETE_COMMENT:
            const newState = { ...state };
            delete newState[action.commentId]
            return newState;
        default:
            return state;
    };
};

export default commentsReducer;
