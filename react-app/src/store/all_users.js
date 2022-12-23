const LOAD_USERS = 'users/LOAD';

export const loadUsers = users => {
    return {
        type: LOAD_USERS,
        users
    };
};

export const getUsers = () => async dispatch => {
    const response = await fetch('/api/users');

    if (response.ok) {
        const users = await response.json();
        dispatch(loadUsers(users));
        return users;
    };
};

const initialState = {};

const allUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return action.users.users.reduce((users, user) => {
                users[user.id] = user;
                return users;
            }, {});
        default:
            return state;
    };
};

export default allUsersReducer;
