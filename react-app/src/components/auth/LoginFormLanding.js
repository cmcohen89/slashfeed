import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginFormLanding.css';
import './LoginForm.css';
import './SignupForm.css';
import './SignupPage.css';

const LoginFormLanding = ({ setForm }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (!data) {
            setErrors([]);
            setEmail('');
            setPassword('');
            history.push('/my-feed')
        } else {
            setErrors(data);
        };
    };

    const handleDemo = async (e) => {
        e.preventDefault();
        const data = await dispatch(login('demo@aa.io', 'password'));
        if (!data) {
            setErrors([]);
            setEmail('');
            setPassword('');
            history.push('/my-feed')
        } else {
            setErrors(data);
        };
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <form className='login-form-landing' onSubmit={onLogin}>
            <div className='login-logo'>
                <img src="https://i.imgur.com/i9QyYGZ.png" alt='logo' />
            </div>
            <div className='landing-page-blurb'>
                <h2 className='blurb'>Feel-Good News From Your Friends</h2>
            </div>
            <div className='login-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='login-div-landing'>
                {/* <label className='login-label' htmlFor='email'>Email</label> */}
                <input
                    required
                    className='login-input'
                    name='email'
                    type='text'
                    placeholder='Email address'
                    value={email}
                    onChange={updateEmail}
                />
            </div>
            <div className='login-div-landing'>
                {/* <label className='login-label' htmlFor='password'>Password</label> */}
                <input
                    required
                    className='login-input'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                />
                <button className='login-button' type='submit'>Login</button>
                <button className='login-button2' onClick={handleDemo}>Login as Demo User</button>
            </div>
            <p className='landing-lower-text'>
                Don't have an account?&nbsp;&nbsp;
                <span
                    className='sign-up-landing-link'
                    onClick={() => setForm('signup')}
                >
                    Sign Up
                </span>
            </p>
        </form>
    );
};

export default LoginFormLanding;
