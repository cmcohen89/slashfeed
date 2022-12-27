import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import { authenticate } from './store/session';
import PostIndex from './components/PostIndex/PostIndex';
import SinglePost from './components/SinglePost/SinglePost';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MyPosts from './components/PostIndex/MyPosts';
import SignUpForm from './components/auth/SignUpForm';
import SignupPage from './components/auth/SignupPage';
import CreatePostPage from './components/PostForm/CreatePostPage';
import ProfileRedirect from './components/ProfilePage/ProfileRedirect';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path='/' exact={true}>
                    <PostIndex />
                </Route>
                <Route path='/my-feed'>
                    <MyPosts />
                </Route>
                <Route path='/posts/:id'>
                    <SinglePost />
                </Route>
                <Route path='/profile/:id' exact={true}>
                    <ProfilePage />
                </Route>
                <Route path='/signup'>
                    <SignupPage />
                </Route>
                <Route path='/create-post'>
                    <CreatePostPage />
                </Route>
                <Route path='/profile' exact={true}>
                    <ProfileRedirect />
                </Route>
                <Route>
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
