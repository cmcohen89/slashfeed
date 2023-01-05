const LOAD_ONE_CHAT = 'chats/LOAD_ONE';

export const loadOneChat = chat => {
    return {
        type: LOAD_ONE_CHAT,
        chat
    }
}

export const getOneChat = (id) => async dispatch => {
    const response = await fetch(`/api/chats/${id}`);

    if (response.ok) {
        const chat = await response.json();
        dispatch(loadOneChat(chat));
        return chat;
    }
}

const initialState = {};

const oneChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ONE_CHAT:
            const newState = { ...state };
            newState.oneChat = action.chat
            return newState
        default:
            return state;
    };
};

export default oneChatReducer;
