const LOAD_CHATS = 'chats/LOAD';

export const loadChats = chats => {
    return {
        type: LOAD_CHATS,
        chats
    };
};

export const getChats = () => async dispatch => {
    const response = await fetch('/api/chats');

    if (response.ok) {
        const chats = await response.json();
        dispatch(loadChats(chats));
        return chats;
    };
};

export const postThread = (targetUserId) => async dispatch => {
    const response = await fetch(`/api/chats`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetUserId: targetUserId })
    });

    if (response.ok) {
        console.log('here111')
        const newThread = await response.json();
        return newThread;
    };
};

export const postMessage = (body, threadId) => async dispatch => {
    const response = await fetch(`/api/chats/${threadId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body })
    });

    if (response.ok) {
        const msg = await response.json();
        return msg;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return ['An error occurred. Please try again.']
    };
};

export const readMessages = (unreadMsgs) => async dispatch => {
    const response = await fetch(`/api/chats/read`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ unreadMsgs: unreadMsgs })
    });

    if (response.ok) {
        const successMsg = await response.json();
        return successMsg
    };
};

export const deleteThread = (threadId) => async dispatch => {
    const response = await fetch(`/api/chats/${threadId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const successMsg = await response.json()
        return successMsg;
    };
};

export const deleteMessage = (msgId) => async dispatch => {
    const response = await fetch(`/api/chats/message/${msgId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const successMsg = await response.json()
        return successMsg;
    };
};

const initialState = {};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CHATS:
            return action.chats.Chats.reduce((chats, chat) => {
                chats[chat.id] = chat;
                return chats;
            }, {});
        default:
            return state;
    };
};

export default chatsReducer;
