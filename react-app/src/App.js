import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import PostIndex from './components/PostIndex/PostIndex';
import SinglePost from './components/SinglePost/SinglePost';
import ProfilePage from './components/ProfilePage/ProfilePage';

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
                <Route path='/profile/:id'>
                    <ProfilePage />
                </Route>
                <Route path='/' exact={true} >
                    <PostIndex />
                </Route>
                <Route path='/posts/:id'>
                    <SinglePost />
                </Route>
                <Route>
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
