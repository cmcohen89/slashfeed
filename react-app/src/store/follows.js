const LOAD_FOLLOWS = 'follows/LOAD_FOLLOWS';
const LOAD_USER_FOLLOWS = 'follows/LOAD_USER_FOLLOWS';

const loadFollows = follows => {
    return {
        type: LOAD_FOLLOWS,
        follows
    }
};

const loadUserFollows = follows => {
    return {
        type: LOAD_USER_FOLLOWS,
        follows
    }
}

export const getFollows = (id) => async dispatch => {
    const response = await fetch(`/api/followers/get_follows/${id}`);

    if (response.ok) {
        const follows = await response.json();
        dispatch(loadFollows(follows));
        return follows;
    }
}

export const getUserFollows = () => async dispatch => {
    const response = await fetch('/api/followers/get_follows/current')

    if (response.ok) {
        const follows = await response.json();
        dispatch(loadUserFollows(follows));
        return follows;
    }
}

export const postFollow = (id) => async dispatch => {
    const response = await fetch(`/api/followers/follow/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        const successMsg = await response.json()
        return successMsg;
    }
}

const initialState = {};

const followsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOAD_FOLLOWS:
            newState.followers = action.follows.Followers.reduce((follows, follow) => {
                follows[follow.id] = follow;
                return follows;
            }, {});
            newState.follows = action.follows.Follows.reduce((follows, follow) => {
                follows[follow.id] = follow;
                return follows;
            }, {});
            return newState;
        case LOAD_USER_FOLLOWS:
            console.log(action)
            newState.userFollowers = action.follows.Followers.reduce((follows, follow) => {
                follows[follow.id] = follow;
                return follows;
            }, {});
            newState.userFollows = action.follows.Follows.reduce((follows, follow) => {
                follows[follow.id] = follow;
                return follows;
            }, {});
            return newState;
        default:
            return state;
    };
};

export default followsReducer;
