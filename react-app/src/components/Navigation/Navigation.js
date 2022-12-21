import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { logout } from '../../store/session';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import CreatePostForm from '../PostForm/CreatePostForm';
import './Navigation.css';

const Navigation = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <div className="navigation-wrapper">
            <div className="navigation-container">
                <span className='profile-lines'><i className="fa-solid fa-bars bars"></i></span>
                <span>
                    <NavLink to='/'><img className='nav-logo' src='/images/logo2.png' alt='website logo' /></NavLink>
                </span>
                <ul className='nav-links'>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                    <li>Link 5</li>
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
                    <li><i className="fa-solid fa-circle-dot"></i></li>
                    <li><i className="fa-solid fa-circle-dot"></i></li>
                    <li><i className="fa-solid fa-circle-dot"></i></li>
                    <li><i className="fa-solid fa-circle-dot"></i></li>
                    <li><i className="fa-solid fa-circle-dot"></i></li>
                    <li><i className="fa-solid fa-circle-dot"></i></li>
                    <li className='plus-icon' onClick={() => user ? setShowCreateModal(true) : setShowLoginModal(true)}><AiOutlinePlusCircle /></li>
                </ul>
                <span className='nav-newsletter'><i className="fa-solid fa-envelope envelope"></i>Newsletter</span>
                {showLoginModal && <Modal onClose={() => setShowLoginModal(false)}><LoginForm setShowLoginModal={setShowLoginModal} /></Modal>}
                {showSignupModal && <Modal onClose={() => setShowSignupModal(false)}><SignUpForm setShowSignupModal={setShowSignupModal} /></Modal>}
                {showCreateModal && <Modal onClose={() => setShowCreateModal(false)}><CreatePostForm setShowCreateModal={setShowCreateModal} /></Modal>}
            </div>
        </div>
    )
}

export default Navigation;
