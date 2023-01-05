import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getFollowedPosts, getPosts } from '../../store/all_posts';
import { getChats } from '../../store/chats';
import { logout } from '../../store/session';
import SignUpForm from '../auth/SignUpForm';
import Chat from '../Chat/Chat';
import LoginModal from '../LoginModal';
import CreatePostForm from '../PostForm/CreatePostForm';
import './Navigation.css';

const Navigation = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const windowHeight = window.innerHeight;

    const allPosts = useSelector(state => Object.values(state.allPosts))
    const numArr = [];
    for (let post of allPosts) numArr.push(post.id)

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showChatModal, setShowChatModal] = useState(false);

    return (
        <div className="navigation-wrapper">
            <div className={`modal container ${showCreateModal ? "create-show" : ""}`}>
                <CreatePostForm setShowCreateModal={setShowCreateModal} />
            </div>
            <div
                className={`overlay ${showCreateModal ? "show" : ""}`}
                onClick={() => setShowCreateModal(!showCreateModal)}
            />
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            <div className={`modal container ${showSignupModal ? "signup-show" : ""}`}>
                <SignUpForm setShowSignupModal={setShowSignupModal} />
            </div>
            <div
                className={`overlay ${showSignupModal ? "show" : ""}`}
                onClick={() => setShowSignupModal(!setShowSignupModal)}
            />
            <div className={`modal container ${showChatModal ? "create-show" : ""}`}>
                <Chat setShowChatModal={setShowChatModal} />
            </div>
            <div
                className={`overlay ${showChatModal ? "show" : ""}`}
                onClick={() => setShowChatModal(!setShowChatModal)}
            />
            <div className="navigation-container">
                <NavLink to='/' className='nav-logo-link'><img className='nav-logo' src='https://i.imgur.com/s9sq5Yk.png' alt='website logo' /></NavLink>
                <li className='slogan'>Get your news from your friends</li>
                <ul className='nav-links'>
                    {!user ?
                        <li className='nav-signup-link'
                            onClick={() => windowHeight > 900 ? setShowSignupModal(true) : history.push('/signup')}
                        >
                            Sign Up
                        </li>
                        :
                        <>
                            <li className='nav-login-link' onClick={() => {
                                history.push('/')
                                dispatch(getPosts())
                            }}>All Posts</li>
                            <li className='nav-login-link' onClick={() => {
                                history.push('/my-feed')
                                dispatch(getFollowedPosts())
                            }}>My Feed</li>
                        </>
                    }
                    {user && <li className='nav-signup-link' onClick={() => {
                        setShowChatModal(true);
                        dispatch(getChats());
                    }}
                    >
                        Messages
                    </li>}
                    {user && <NavLink className='nav-signup-link' to={`/profile/${user.id}`}>Profile</NavLink>
                    }
                    {!user ?
                        <li className='nav-login-link-last' onClick={() => setShowLoginModal(true)}>Log In</li>
                        :
                        <li className='nav-login-link-last' onClick={async () => await dispatch(logout())}>Log Out</li>
                    }
                </ul>
                <span
                    className='nav-create'
                    onClick={() => user ? (windowHeight > 950 ? setShowCreateModal(true) : history.push('/create-post')) : setShowLoginModal(true)}
                >
                    Create Post
                </span>
            </div>
        </div>
    )
}

export default Navigation;
