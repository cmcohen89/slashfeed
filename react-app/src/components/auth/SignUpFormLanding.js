import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpFormLanding.css'

const SignUpFormLanding = ({ setForm }) => {
    const [errors, setErrors] = useState([]);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profile_img_url, setProfileImgUrl] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (image) handleUpload();
    }, [image])

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch(`/api/posts/img`, {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            const url = await res.json();
            setImageLoading(false);
            setProfileImgUrl(url.url)
            await setImage(null)
            // history.push("/images");
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }
    }

    const onSignUp = async (e) => {
        e.preventDefault();
        let errors = [];
        if (first_name.trim() === '') errors.push('Please enter a first name!');
        if (last_name.trim() === '') errors.push('Please enter a last name!');
        if (username.trim() === '') errors.push('Please enter a username!');
        if (profile_img_url.trim() === '') errors.push('Please enter an image URL!')
        if (password.trim() === '') errors.push('Please enter a real password!')
        if (/\d/.test(first_name) || /\d/.test(last_name)) errors.push("Your name has numbers in it? Doubt it.");
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) errors.push("The thing about email addresses is they need to be valid.");
        if (username.length < 5) errors.push("Let's make that username a bit longer. 5 characters should do.");
        // if (password.length < 6 || password.length > 20) errors.push("Safe passwords are more than 6 characters. Annoying passwords are more than 20.")
        if (password !== repeatPassword) errors.push("Remember that part about how the passwords are supposed to match?");
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const data = await dispatch(signUp(first_name, last_name, username, email, profile_img_url, password));
            if (data) {
                setErrors(data);
            } else {
                setFirstName('');
                setLastName('');
                setUsername('');
                setEmail('');
                setProfileImgUrl('');
                setPassword('');
                setRepeatPassword('');
                setImage(null);
                history.push('/home')
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

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    return (
        <form className='signup-form-landing' onSubmit={onSignUp}>
            <div className='signup-logo'>
                <img src="https://i.imgur.com/i9QyYGZ.png" />
            </div>
            <div className='signup-errors-landing'>
                {/* {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))} */}
                {errors[0]}
            </div>
            <div className='signup-div-landing'>
                <div className='login-div'>
                    <input
                        placeholder='First name'
                        required
                        className='landing-login-input'
                        type='text'
                        name='firstname'
                        onChange={updateFirstName}
                        value={first_name}
                    ></input>
                </div>
                <div className='login-div'>
                    <input
                        placeholder="Last name"
                        required
                        className='landing-login-input'
                        type='text'
                        name='lastname'
                        onChange={updateLastName}
                        value={last_name}
                    ></input>
                </div>
            </div>
            <div className='signup-div-landing'>
                <div className='login-div'>
                    <input
                        placeholder='Username'
                        required
                        className='landing-login-input'
                        type='text'
                        name='username'
                        onChange={updateUsername}
                        value={username}
                    ></input>
                </div>
                <div className='login-div'>
                    <input
                        placeholder='Email'
                        required
                        className='landing-login-input'
                        type='text'
                        name='email'
                        onChange={updateEmail}
                        value={email}
                    ></input>
                </div>
            </div>
            <div className='aws-input-and-upload'>
                <div className='login-div'>
                    <input
                        className='landing-login-input-url'
                        required
                        name='url-input'
                        onChange={e => setProfileImgUrl(e.target.value)}
                        value={profile_img_url}
                        placeholder="Enter profile image URL or upload image"
                        type='text'
                    />
                </div>
                <label className='aws-label-create'><i class="fa-solid fa-upload"></i>
                    <input
                        className="aws-input"
                        type="file"
                        accept="image/*"
                        onChange={updateImage}
                    />
                </label>
                <div className='aws-loading-signup'>
                    {(imageLoading) && <p className='aws-loading-text'>Loading...</p>}
                </div>
            </div>
            <div className='signup-div-landing'>
                <div className='login-div'>
                    <input
                        placeholder='Password'
                        required
                        className='landing-login-input'
                        type='password'
                        name='password'
                        onChange={updatePassword}
                        value={password}
                    ></input>
                </div>
                <div className='login-div'>
                    <input
                        placeholder='Repeat password'
                        required
                        className='landing-login-input'
                        type='password'
                        name='repeat_password'
                        onChange={updateRepeatPassword}
                        value={repeatPassword}
                    ></input>
                </div>
            </div>
            <button className='signup-button-landing' type='submit'>Sign Up</button>
            <p className='landing-lower-text'>
                Already have an account?&nbsp;&nbsp;
                <span
                    className='sign-up-landing-link'
                    onClick={() => setForm('login')}
                >
                    Login
                </span>
            </p>
        </form>
    );
};

export default SignUpFormLanding;
