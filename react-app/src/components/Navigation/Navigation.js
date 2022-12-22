import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import CreatePostForm from '../PostForm/CreatePostForm';
import './Navigation.css';

const Navigation = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const allPosts = useSelector(state => Object.values(state.allPosts))
    const numArr = [];
    for (let post of allPosts) numArr.push(post.id)
    const randNum = numArr[Math.floor(Math.random() * numArr.length)];

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <div className="navigation-wrapper">
            <div className={`modal container ${showCreateModal ? "create-show" : ""}`}>
                <CreatePostForm setShowCreateModal={setShowCreateModal} />
            </div>
            <div
                className={`overlay ${showCreateModal ? "show" : ""}`}
                onClick={() => setShowCreateModal(!showCreateModal)}
            />
            <div className={`modal container ${showLoginModal ? "login-show" : ""}`}>
                <LoginForm setShowLoginModal={setShowLoginModal} />
            </div>
            <div
                className={`overlay ${showLoginModal ? "show" : ""}`}
                onClick={() => setShowLoginModal(!setShowLoginModal)}
            />
            <div className={`modal container ${showSignupModal ? "signup-show" : ""}`}>
                <SignUpForm setShowSignupModal={setShowSignupModal} />
            </div>
            <div
                className={`overlay ${showSignupModal ? "show" : ""}`}
                onClick={() => setShowSignupModal(!setShowSignupModal)}
            />
            <div className="navigation-container">
                <span className='profile-lines'><i className="fa-solid fa-bars bars"></i></span>
                <span>
                    <NavLink to='/'><img className='nav-logo' src='https://i.imgur.com/s9sq5Yk.png' alt='website logo' /></NavLink>
                </span>
                <ul className='nav-links'>
                    <li className='slogan'>Get your news from your friends</li>
                    {!user ?
                        <li className='nav-login-link' onClick={() => setShowLoginModal(true)}>Log In</li>
                        :
                        <li className='nav-login-link' onClick={async () => await dispatch(logout())}>Log Out</li>
                    }
                    {!user ?
                        <li className='nav-login-link' onClick={() => setShowSignupModal(true)}>Sign Up</li>
                        :
                        <NavLink className='nav-login-link' to='/profile'><li>Profile</li></NavLink>
                    }
                </ul>
                <ul className='nav-logos'>
                    <a className='no-underline' href='https://github.com/cmcohen89/slashfeed' target='_blank'><li className='nav-logo-link'><i className="fa-brands fa-github"></i></li></a>
                    <a className='no-underline' href='https://www.linkedin.com/in/christopher-cohen-94ab06236/' target='_blank'><li className='nav-logo-link'><i className="fa-brands fa-linkedin"></i></li></a>
                    <a className='no-underline' href='https://open.spotify.com/artist/5geY86ww9VzZY3KocqkS8Q' target='_blank'><li className='nav-logo-link'><i className="fa-brands fa-spotify"></i></li></a>
                    <a className='no-underline' href='https://www.instagram.com/pianomancan/' target='_blank'><li className='nav-logo-link'><i className="fa-brands fa-instagram"></i></li></a>
                    <a className='no-underline' href='https://www.facebook.com/christopher.cohen.9/' target='_blank'><li className='nav-logo-link'><i className="fa-brands fa-facebook"></i></li></a>
                    <NavLink className='no-underline' to={`/posts/${randNum}`}><li className='nav-logo-link' ><i className="fa-solid fa-question"></i></li></NavLink>
                </ul>
                <span className='nav-update' onClick={() => user ? setShowCreateModal(true) : setShowLoginModal(true)}>Create Post</span>
            </div>
        </div >
    )
}

export default Navigation;
