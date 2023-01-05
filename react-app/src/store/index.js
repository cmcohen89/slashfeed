import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import allPostsReducer from './all_posts';
import singlePostReducer from './one_post';
import commentsReducer from './comments';
import allUsersReducer from './all_users';
import followsReducer from './follows';
import chatsReducer from './chats';
import oneChatReducer from './one_chat';
import userPostsReducer from './user_posts';

const rootReducer = combineReducers({
    session,
    allPosts: allPostsReducer,
    onePost: singlePostReducer,
    userPosts: userPostsReducer,
    comments: commentsReducer,
    allUsers: allUsersReducer,
    follows: followsReducer,
    chats: chatsReducer,
    oneChat: oneChatReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
