import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';

const LoginForm = ({ setShowLoginModal, showLoginModal }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        data ? setErrors(data) : setShowLoginModal(false);
        if (!data) {
            setErrors([]);
            setEmail('');
            setPassword('');
            history.push('/my-feed')
        };
    };

    const handleDemo = async (e) => {
        e.preventDefault();
        const data = await dispatch(login('demo@aa.io', 'password'));
        data ? setErrors(data) : setShowLoginModal(false);
        if (!data) {
            setErrors([]);
            setEmail('');
            setPassword('');
            history.push('/my-feed')
        };
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        setErrors([]);
        setEmail('');
        setPassword('');
    }, [showLoginModal])

    return (
        <form className='login-form' onSubmit={onLogin}>
            <h1 className='login-title'>Log In</h1>
            <div className='login-errors'>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='login-div'>
                <label className='login-label' htmlFor='email'>Email</label>
                <input
                    required
                    className='login-input'
                    name='email'
                    type='text'
                    placeholder='Enter your email'
                    value={email}
                    onChange={updateEmail}
                />
            </div>
            <div className='login-div'>
                <label className='login-label' htmlFor='password'>Password</label>
                <input
                    required
                    className='login-input'
                    name='password'
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={updatePassword}
                />
                <button className='login-button' type='submit'>Login</button>
                <button className='login-button2' onClick={handleDemo}>Login as Demo User</button>
            </div>
        </form>
    );
};

export default LoginForm;
