import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import { authenticate } from './store/session';
import PostIndex from './components/PostIndex/PostIndex';
import SinglePost from './components/SinglePost/SinglePost';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MyPosts from './components/PostIndex/MyPosts';
import SignupPage from './components/auth/SignupPage';
import CreatePostPage from './components/PostForm/CreatePostPage';
import ProfileRedirect from './components/ProfilePage/ProfileRedirect';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';

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
            <Switch>
                <Route path='/' exact={true}>
                    <LandingPage />
                </Route>
                <Route path='/home' exact={true}>
                    <Navigation />
                    <PostIndex />
                </Route>
                <Route path='/my-feed'>
                    <Navigation />
                    <MyPosts />
                </Route>
                <Route path='/posts/:id'>
                    <Navigation />
                    <SinglePost />
                </Route>
                <Route path='/profile/:id' exact={true}>
                    <Navigation />
                    <ProfilePage />
                </Route>
                <Route path='/signup'>
                    <Navigation />
                    <SignupPage />
                </Route>
                <Route path='/create-post'>
                    <Navigation />
                    <CreatePostPage />
                </Route>
                <Route path='/profile' exact={true}>
                    <Navigation />
                    <ProfileRedirect />
                </Route>
                <Route>
                    <Navigation />
                    <div className="follow-more-users">
                        <h1>404: Page Not Found</h1>
                        <NavLink to='/home' className='view-all'><h1>Return Home</h1></NavLink>
                    </div>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
