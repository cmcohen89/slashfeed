import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import AWSImageUpload from '../AWSImageUpload/AWSImageUpload';
import './SignupForm.css'

const SignUpForm = ({ setShowSignupModal }) => {
    const [errors, setErrors] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        let errors = [];
        if (/\d/.test(first_name) || /\d/.test(last_name)) errors.push("Your name has numbers in it? Doubt it.");
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) errors.push("The thing about email addresses is they need to be valid.");
        if (username.length < 5) errors.push("Let's make that username a bit longer. 5 characters should do.");
        if (password !== repeatPassword) errors.push("Remember that part about how the passwords are supposed to match?");
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const data = await dispatch(signUp(first_name, last_name, username, email, password));
            if (data) {
                setErrors(data);
            } else {
                setShowSignupModal(false);
                setFirstName('');
                setLastName('');
                setUsername('');
                setEmail('');
                setPassword('');
                setRepeatPassword('');
            }
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    // if (user) {
    //     return <Redirect to='/' />;
    // }

    return (
        <form className='login-form' onSubmit={onSignUp}>
            <h1 className='login-title'>Sign up</h1>
            <div className='signup-errors'>
                {/* {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))} */}
                {errors[0]}
            </div>
            <div className='horizontal-signup'>
                <div className='signup-div'>
                    <label className='signup-label'>First Name</label>
                    <input
                        placeholder='Nicknames are fine, too'
                        required
                        className='login-input'
                        type='text'
                        name='firstname'
                        onChange={updateFirstName}
                        value={first_name}
                    ></input>
                </div>
                <div className='signup-div'>
                    <label className='signup-label'>Last Name</label>
                    <input
                        placeholder="Let's make it official"
                        required
                        className='login-input'
                        type='text'
                        name='lastname'
                        onChange={updateLastName}
                        value={last_name}
                    ></input>
                </div>
                <div className='signup-div'>
                    <label className='signup-label'>User Name</label>
                    <input
                        placeholder='This is how other users will see you'
                        required
                        className='login-input'
                        type='text'
                        name='username'
                        onChange={updateUsername}
                        value={username}
                    ></input>
                </div>
                <div className='signup-div'>
                    <label className='signup-label'>Email</label>
                    <input
                        placeholder='We promise not to send you junk mail'
                        required
                        className='login-input'
                        type='text'
                        name='email'
                        onChange={updateEmail}
                        value={email}
                    ></input>
                </div>
            </div>
            <div className='horizontal-signup'>
                <div className='signup-div'>
                    <label className='signup-label'>Password</label>
                    <input
                        placeholder='Keep it secret, keep it safe'
                        required
                        className='login-input'
                        type='password'
                        name='password'
                        onChange={updatePassword}
                        value={password}
                    ></input>
                </div>
                <div className='signup-div'>
                    <label className='signup-label'>Repeat Password</label>
                    <input
                        placeholder='Is it secret? Is it safe?'
                        required
                        className='login-input'
                        type='password'
                        name='repeat_password'
                        onChange={updateRepeatPassword}
                        value={repeatPassword}
                    ></input>
                </div>
            </div>
            <button className='signup-button' type='submit'>Sign Up</button>
        </form>
    );
};

export default SignUpForm;
